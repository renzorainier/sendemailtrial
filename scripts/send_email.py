
import sys
from jinja2 import Template
from pathlib import Path
import smtplib

# Get data from command-line arguments
receiver_email = sys.argv[1]
subject = sys.argv[2]
name = sys.argv[3]
event = sys.argv[4]
date = sys.argv[5]

# Load the email template from a file
template_path = Path("templates/email_template.html")  # Ensure the path is correct
template_content = template_path.read_text()

# Render the template with dynamic data
template = Template(template_content)
email_body = template.render(name=name, event=event, date=date)

# Set up email credentials
email = "renzopasagdan@gmail.com"
password = "brmq epeq qsur utmp"

try:
    # Connect to the SMTP server
    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()
    server.login(email, password)

    # Construct the email
    message = f"Subject: {subject}\nContent-Type: text/html\n\n{email_body}"
    server.sendmail(email, receiver_email, message)
    server.quit()

    print("Email sent successfully!")
except Exception as e:
    print("Failed to send email:", str(e))







# import smtplib

# email = "renzopasagdan@gmail.com"
# receiver_email = "qrrlpasagdan@tip.edu.ph"

# subject = "This is a test emaillllll"
# message = "Hello! This is a test message sent from Python."

# text = f"Subject: {subject}\n\n{message}"

# server = smtplib.SMTP("smtp.gmail.com", 587)
# server.starttls()
# server.login(email, "brmq epeq qsur utmp")
# server.sendmail(email, receiver_email, text)
# server.quit()

# print("Email sent successfully to", receiver_email)
