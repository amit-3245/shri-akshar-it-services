from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.modules.auth.dependencies import get_current_admin
from app.modules.enquiries.schemas import (
    EnquiryCreate,
    EnquiryResponse,
    EnquiryStatusUpdate,
)
from app.modules.enquiries.service import (
    create_enquiry,
    get_all_enquiries,
    get_enquiry_by_id,
    update_enquiry_status,
)


router = APIRouter(
    prefix="/api/enquiries",
    tags=["Enquiries"],
)


# ==========================================================
# PUBLIC — CUSTOMER SUBMITS ENQUIRY
# ==========================================================

@router.post(
    "",
    response_model=EnquiryResponse,
    status_code=status.HTTP_201_CREATED,
)
def submit_enquiry(
    enquiry_data: EnquiryCreate,
    db: Session = Depends(get_db),
):
    return create_enquiry(
        db=db,
        enquiry_data=enquiry_data,
    )


# ==========================================================
# ADMIN — VIEW ALL ENQUIRIES
# ==========================================================

@router.get(
    "",
    response_model=list[EnquiryResponse],
)
def list_enquiries(
    enquiry_status: Optional[str] = None,
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin),
):
    try:
        return get_all_enquiries(
            db=db,
            status=enquiry_status,
        )

    except ValueError as error:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(error),
        )


# ==========================================================
# ADMIN — VIEW SINGLE ENQUIRY
# ==========================================================

@router.get(
    "/{enquiry_id}",
    response_model=EnquiryResponse,
)
def get_single_enquiry(
    enquiry_id: int,
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin),
):
    enquiry = get_enquiry_by_id(
        db=db,
        enquiry_id=enquiry_id,
    )

    if not enquiry:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Enquiry not found",
        )

    return enquiry


# ==========================================================
# ADMIN — UPDATE ENQUIRY STATUS
# ==========================================================

@router.patch(
    "/{enquiry_id}/status",
    response_model=EnquiryResponse,
)
def change_enquiry_status(
    enquiry_id: int,
    status_data: EnquiryStatusUpdate,
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin),
):
    try:
        enquiry = update_enquiry_status(
            db=db,
            enquiry_id=enquiry_id,
            new_status=status_data.status,
        )

    except ValueError as error:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(error),
        )

    if not enquiry:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Enquiry not found",
        )

    return enquiry
