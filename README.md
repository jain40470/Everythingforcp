# Everythingforcp

A dynamic full-stack website tailored for competitive programming enthusiasts to enhance user experience and engagement.

- 🧠 Integrated a multilingual code compiler using the CODEX API to boost engagement.
- 📊 Introduced an Elevator feature to capture verdicts and monitor performance over time.
- 📈 Developed **VisualizeMe** using Chart.js to offer insights into a user’s CP journey and encourage goal-setting.
- 📬 Facilitated workshops with email notifications via Nodemailer to improve user satisfaction.


## 🌐 Live Demo

👉 [Visit the Live Site](https://everythingforcp.netlify.app)

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Email Service**: Nodemailer

## 📁 Project Structure

Everythingforcp/

- ├── backend/               # Backend server code (Express, Mongoose)
- ├── myapp/                 # Frontend React application (built with React + Tailwind CSS)
- ├── node_modules/          # Project dependencies
- ├── .gitattributes         # Git configuration file
- ├── .DS_Store              # System file (can be ignored)
- ├── package.json           # NPM package configuration
- ├── package-lock.json      # Dependency lock file


## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance (local or cloud-based like MongoDB Atlas)

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/jain40470/Everythingforcp.git
cd Everythingforcp

2. **Backend Setup:**

```bash

cd backend
npm install
# Create a .env file and add your environment variables (see below)
npm start

3. **Frontend Setup:**

```bash

cd ../myapp
npm install
npm start

[Visit http://localhost:3000 to view the app locally.]

🔐 Environment Variables

Create a .env file in the backend/ directory with:

MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password

📦 Features

📅 Contest and practice tracking
✉️ Email support using Nodemailer
📱 Fully responsive UI
🔒 Authentication & user management
🎯 Tailored for competitive programmers
🤝 Contributors

@jain40470
@amandeepsingh360
@officialasishkumar

📄 License

This project is licensed under the MIT License.

