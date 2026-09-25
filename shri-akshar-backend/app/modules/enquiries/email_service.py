import os
import smtplib
from email.message import EmailMessage

from dotenv import load_dotenv

load_dotenv()


MAIL_HOST = os.getenv("MAIL_HOST", "smtp.gmail.com")
MAIL_PORT = int(os.getenv("MAIL_PORT", "587"))

MAIL_USERNAME = os.getenv("MAIL_USERNAME")
MAIL_PASSWORD = os.getenv("MAIL_PASSWORD")
MAIL_FROM = os.getenv("MAIL_FROM", MAIL_USERNAME)

COMPANY_EMAIL = os.getenv("COMPANY_EMAIL")
SECONDARY_EMAIL = os.getenv("SECONDARY_EMAIL")


def send_enquiry_email(enquiry):
    """
    Send a new enquiry notification to both company email addresses.
    """

    if not MAIL_USERNAME or not MAIL_PASSWORD:
        raise RuntimeError(
            "Email configuration is missing. "
            "Please configure MAIL_USERNAME and MAIL_PASSWORD."
        )

    recipients = [
        email
        for email in [
            COMPANY_EMAIL,
            SECONDARY_EMAIL,
        ]
        if email
    ]

    if not recipients:
        raise RuntimeError(
            "No enquiry notification recipients configured."
        )

    subject = (
        f"New Project Enquiry — "
        f"{enquiry.service} — "
        f"{enquiry.name}"
    )

    body = f"""
New Project Enquiry
===================

Name:
{enquiry.name}

Email:
{enquiry.email}

Phone:
{enquiry.phone}

Company:
{enquiry.company or "Not provided"}

Required Service:
{enquiry.service}

Project Budget:
{enquiry.budget or "Not specified"}

Project Details:
{enquiry.message}

Enquiry ID:
#{enquiry.id}

Status:
{enquiry.status}

Submitted:
{enquiry.created_at}

===================
Shri Akshar IT Services
Unit of Shri Akshar Services Private Limited

Phone:
+91 {os.getenv("PRIMARY_PHONE", "8279910156")}
+91 {os.getenv("SECONDARY_PHONE", "9817028180")}

Email:
{COMPANY_EMAIL}
{SECONDARY_EMAIL}
""".strip()

    message = EmailMessage()

    message["Subject"] = subject
    message["From"] = MAIL_FROM
    message["To"] = ", ".join(recipients)

    # Reply directly to the customer
    message["Reply-To"] = str(enquiry.email)

    message.set_content(body)

    with smtplib.SMTP(MAIL_HOST, MAIL_PORT) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.ehlo()

        smtp.login(
            MAIL_USERNAME,
            MAIL_PASSWORD,
        )

        smtp.send_message(message)
