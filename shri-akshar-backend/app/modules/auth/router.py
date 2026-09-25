from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.modules.auth.schemas import (
    AdminLogin,
    TokenResponse,
)
from app.modules.auth.service import (
    authenticate_admin,
    generate_admin_token,
)


router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"],
)


@router.post(
    "/login",
    response_model=TokenResponse,
)
def admin_login(
    login_data: AdminLogin,
    db: Session = Depends(get_db),
):
    admin = authenticate_admin(
        db=db,
        email=str(login_data.email),
        password=login_data.password,
    )

    if not admin:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
        )

    token = generate_admin_token(admin)

    return {
        "access_token": token,
        "token_type": "bearer",
    }
