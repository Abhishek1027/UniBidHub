# Online-Auction
<img width="948" alt="image" src="https://github.com/user-attachments/assets/6cb90730-417b-4d59-9e42-4a9299bda1c8" />
UniBidHub is an online auction platform where users can bid on various products or services. It provides a seamless bidding experience with real-time bid updates, secure user authentication, and a transparent bidding process. The platform allows users to create bids, participate in auctions, and monitor ongoing bid statuses.

## Features

- **User Authentication**: Login, Registration, and Session Management.
- **Auction Creation**: Users can create new auction items, set start/end dates, and start the bidding process.
- **Bidding System**: Users can place bids on ongoing auctions and track their progress.
- **Real-time Updates**: Bids are updated in real-time to keep participants informed.
- **Admin Panel**: Admins can manage auctions and users.
- **Responsive Design**: Works across devices (Desktop, Tablet, and Mobile).

## Tech Stack

- **Frontend**: 
  - HTML5, CSS3, JavaScript (with jQuery)
  - Bootstrap (for responsive design)
  - AJAX for dynamic content updates
  
- **Backend**:
  - Python (Flask for web framework)
  - Flask-SQLAlchemy (for database management)
  - Flask-Login (for user authentication)
  
- **Database**:
  - SQLite (as the default database in development)
  - You can migrate to other databases like PostgreSQL in production
  
## Installation

### Prerequisites

1. Python 3.7 or higher
2. `pip` (Python package installer)
3. Virtual environment (optional but recommended)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/UniBidHub.git
   cd UniBidHub
Create and activate a virtual environment (optional):

bash
Copy code
python -m venv venv
.\venv\Scripts\activate  # For Windows
source venv/bin/activate  # For Mac/Linux
Install the required dependencies:

bash
Copy code
pip install -r requirements.txt
Set up the database (optional if using SQLite):

bash
Copy code
python create_db.py  # Script to set up the database
Run the application:

bash
Copy code
python app.py
Open your browser and go to http://localhost:5000 to start using the app.

Running in Development Mode
To run the app in development mode with auto-reload:

bash
Copy code
FLASK_ENV=development flask run
Directory Structure
php
Copy code
UniBidHub/
│
├── website/
│   ├── app.py          # Main entry point for the Flask app
│   ├── models.py       # Database models for auction and user
│   ├── views.py        # Routes for the app
│   ├── static/         # Static files (CSS, JS, Images)
│   ├── templates/      # HTML templates
│   └── requirements.txt  # List of dependencies
│
├── create_db.py        # Script to initialize the database
├── README.md           # Project documentation
└── venv/               # Virtual environment (optional)
Contributing
Fork the repository
Create your feature branch (git checkout -b feature-name)
Commit your changes (git commit -m 'Add feature')
Push to the branch (git push origin feature-name)
Create a new Pull Request
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Flask - Web framework used for backend.
Bootstrap - Frontend framework for responsive design.
Flask-SQLAlchemy - Used for database management.
Flask-Login - Used for user authentication.


