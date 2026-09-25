from typing import Optional

from sqlalchemy.orm import Session

from app.database.models import Enquiry
from app.modules.enquiries.schemas import (
    EnquiryCreate,
    ENQUIRY_STATUSES,
)


def create_enquiry(
    db: Session,
    enquiry_data: EnquiryCreate,
) -> Enquiry:

    enquiry = Enquiry(
        name=enquiry_data.name.strip(),
        email=str(enquiry_data.email).lower().strip(),
        phone=enquiry_data.phone.strip(),

        company=(
            enquiry_data.company.strip()
            if enquiry_data.company
            else None
        ),

        service=enquiry_data.service.strip(),

        budget=(
            enquiry_data.budget.strip()
            if enquiry_data.budget
            else None
        ),

        message=enquiry_data.message.strip(),

        status="NEW",
    )

    db.add(enquiry)
    db.commit()
    db.refresh(enquiry)

    return enquiry


def get_all_enquiries(
    db: Session,
    status: Optional[str] = None,
):
    query = db.query(Enquiry)

    if status:
        status = status.upper()

        if status not in ENQUIRY_STATUSES:
            raise ValueError("Invalid enquiry status")

        query = query.filter(
            Enquiry.status == status
        )

    return query.order_by(
        Enquiry.created_at.desc()
    ).all()


def get_enquiry_by_id(
    db: Session,
    enquiry_id: int,
):
    return (
        db.query(Enquiry)
        .filter(Enquiry.id == enquiry_id)
        .first()
    )


def update_enquiry_status(
    db: Session,
    enquiry_id: int,
    new_status: str,
):
    new_status = new_status.upper()

    if new_status not in ENQUIRY_STATUSES:
        raise ValueError("Invalid enquiry status")

    enquiry = get_enquiry_by_id(
        db,
        enquiry_id,
    )

    if not enquiry:
        return None

    enquiry.status = new_status

    db.commit()
    db.refresh(enquiry)

    return enquiry
