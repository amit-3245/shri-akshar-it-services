from datetime import datetime, timedelta, timezone
import os

from dotenv import load_dotenv
from jose import JWTError, jwt


load_dotenv()


# ==========================================================
# JWT CONFIGURATION
# ==========================================================

JWT_SECRET_KEY = os.getenv(
    "JWT_SECRET_KEY",
)

JWT_ALGORITHM = os.getenv(
    "JWT_ALGORITHM",
    "HS256",
)

JWT_ACCESS_TOKEN_EXPIRE_MINUTES = int(
    os.getenv(
        "JWT_ACCESS_TOKEN_EXPIRE_MINUTES",
        "60",
    )
)


# ==========================================================
# VALIDATE JWT CONFIGURATION
# ==========================================================

if not JWT_SECRET_KEY:
    raise RuntimeError(
        "JWT_SECRET_KEY is missing from .env"
    )


# ==========================================================
# CREATE ACCESS TOKEN
# ==========================================================

def create_access_token(data: dict) -> str:
    """
    Create a signed JWT access token.
    """

    payload = data.copy()

    now = datetime.now(timezone.utc)

    expire = (
        now
        + timedelta(
            minutes=JWT_ACCESS_TOKEN_EXPIRE_MINUTES
        )
    )

    payload.update(
        {
            "iat": now,
            "exp": expire,
        }
    )

    return jwt.encode(
        payload,
        JWT_SECRET_KEY,
        algorithm=JWT_ALGORITHM,
    )


# ==========================================================
# DECODE ACCESS TOKEN
# ==========================================================

def decode_access_token(
    token: str,
) -> dict | None:
    """
    Decode and validate JWT access token.
    """

    try:
        payload = jwt.decode(
            token,
            JWT_SECRET_KEY,
            algorithms=[JWT_ALGORITHM],
        )

        return payload

    except JWTError:
        return None
