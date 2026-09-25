from datetime import datetime
from typing import Optional

from pydantic import BaseModel, EmailStr, Field


ENQUIRY_STATUSES = (
    "NEW",
    "CONTACTED",
    "IN_DISCUSSION",
    "PROPOSAL_SENT",
    "CONVERTED",
    "CLOSED",
)


class EnquiryCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    phone: str = Field(min_length=7, max_length=30)

    company: Optional[str] = Field(
        default=None,
        max_length=200,
    )

    service: str = Field(
        min_length=2,
        max_length=150,
    )

    budget: Optional[str] = Field(
        default=None,
        max_length=100,
    )

    message: str = Field(
        min_length=10,
        max_length=5000,
    )


class EnquiryStatusUpdate(BaseModel):
    status: str = Field(min_length=2, max_length=50)


class EnquiryResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    phone: str
    company: Optional[str]
    service: str
    budget: Optional[str]
    message: str
    status: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
