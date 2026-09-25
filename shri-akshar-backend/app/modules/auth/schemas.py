from pydantic import BaseModel, EmailStr, Field


# ==========================================================
# ADMIN LOGIN
# ==========================================================

class AdminLogin(BaseModel):
    email: EmailStr

    password: str = Field(
        min_length=8,
        max_length=128,
    )


# ==========================================================
# JWT TOKEN RESPONSE
# ==========================================================

class TokenResponse(BaseModel):
    access_token: str
    token_type: str


# ==========================================================
# ADMIN RESPONSE
# ==========================================================

class AdminResponse(BaseModel):
    id: int
    email: EmailStr
    is_active: bool

    class Config:
        from_attributes = True
