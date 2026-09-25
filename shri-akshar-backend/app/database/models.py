from datetime import datetime

from sqlalchemy import Boolean, Column, DateTime, Integer, String, Text

from app.database.connection import Base


# ==========================================================
# ENQUIRY MODEL
# ==========================================================

class Enquiry(Base):
    __tablename__ = "enquiries"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    name = Column(
        String(120),
        nullable=False,
    )

    email = Column(
        String(255),
        nullable=False,
        index=True,
    )

    phone = Column(
        String(30),
        nullable=False,
    )

    company = Column(
        String(200),
        nullable=True,
    )

    service = Column(
        String(150),
        nullable=False,
    )

    budget = Column(
        String(100),
        nullable=True,
    )

    message = Column(
        Text,
        nullable=False,
    )

    status = Column(
        String(50),
        nullable=False,
        default="NEW",
        index=True,
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )

    updated_at = Column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False,
    )


# ==========================================================
# ADMIN MODEL
# ==========================================================

class Admin(Base):
    __tablename__ = "admins"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    email = Column(
        String(255),
        unique=True,
        nullable=False,
        index=True,
    )

    password_hash = Column(
        String(255),
        nullable=False,
    )

    is_active = Column(
        Boolean,
        default=True,
        nullable=False,
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )

    updated_at = Column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False,
    )
