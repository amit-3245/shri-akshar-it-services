from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.connection import Base, engine
from app.database import models

from app.modules.enquiries.router import router as enquiries_router
from app.modules.auth.router import router as auth_router


# ==========================================================
# CREATE DATABASE TABLES
# ==========================================================

Base.metadata.create_all(bind=engine)


# ==========================================================
# FASTAPI APPLICATION
# ==========================================================

app = FastAPI(
    title="Shri Akshar IT Services API",
    description="Backend API for Shri Akshar IT Services",
    version="1.0.0",
)


# ==========================================================
# CORS
# ==========================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ==========================================================
# ROUTES
# ==========================================================

# Enquiry APIs
app.include_router(enquiries_router)

# Admin Authentication APIs
app.include_router(auth_router)


# ==========================================================
# HEALTH / ROOT
# ==========================================================

@app.get("/")
def root():
    return {
        "success": True,
        "message": "Shri Akshar IT Services API is running",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "shri-akshar-it-services-api",
    }
