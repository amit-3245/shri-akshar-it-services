from sqlalchemy.orm import Session

from app.database.models import Admin
from app.modules.auth.password import hash_password, verify_password
from app.modules.auth.jwt import create_access_token


def get_admin_by_email(db: Session, email: str):
    return (
        db.query(Admin)
        .filter(Admin.email == email.lower().strip())
        .first()
    )


def create_admin(
    db: Session,
    email: str,
    password: str,
):
    normalized_email = email.lower().strip()

    existing_admin = get_admin_by_email(
        db,
        normalized_email,
    )

    if existing_admin:
        raise ValueError(
            "An admin with this email already exists."
        )

    admin = Admin(
        email=normalized_email,
        password_hash=hash_password(password),
        is_active=True,
    )

    db.add(admin)
    db.commit()
    db.refresh(admin)

    return admin


def authenticate_admin(
    db: Session,
    email: str,
    password: str,
):
    admin = get_admin_by_email(
        db,
        email,
    )

    if not admin:
        return None

    if not admin.is_active:
        return None

    if not verify_password(
        password,
        admin.password_hash,
    ):
        return None

    return admin


def generate_admin_token(admin: Admin) -> str:
    return create_access_token(
        {
            "sub": str(admin.id),
            "email": admin.email,
            "role": "admin",
        }
    )
