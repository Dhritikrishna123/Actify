# Actify - Act Today, Impact Tomorrow 🌟

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.104.1-green.svg)](https://fastapi.tiangolo.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-green.svg)](https://www.mongodb.com)
[![React](https://img.shields.io/badge/React-18.0+-blue.svg)](https://reactjs.org)
[![Node.js](https://img.shields.io/badge/Node.js-16.0+-green.svg)](https://nodejs.org)

<div align="center">
  <img src="https://raw.githubusercontent.com/Dhritikrishna123/Actify/main/frontend/public/logo.png" alt="Actify Logo" width="200"/>
  <br/>
  <strong>🌿 Empowering Communities Through Technology 🤝</strong>
</div>

## 🎯 Vision

Actify is a revolutionary platform that transforms community engagement through:

| Feature | Description |
|---------|-------------|
| 🏛️ **Community Building** | Connect and collaborate with local change-makers |
| 🌱 **Sustainability** | Drive environmental initiatives and eco-challenges |
| 💡 **Innovation** | AI-powered insights and fraud detection |
| 🤝 **Skill Exchange** | Share expertise and empower local talent |
| 📊 **Impact Tracking** | Real-time analytics and community metrics |

## ⚡ Tech Stack

### Frontend
<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwind" width="40" height="40"/>
</p>

### Backend
<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg" alt="fastapi" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="nodejs" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="mongodb" width="40" height="40"/>
</p>

## 🏗️ Architecture

```mermaid
graph LR
    A[Frontend - React] --> B[FastAPI Backend]
    A --> C[Node.js Backend]
    B --> D[(MongoDB)]
    C --> D
    B --> E[AI Services]
    style A fill:#61DAFB
    style B fill:#009688
    style C fill:#68A063
    style D fill:#4DB33D
    style E fill:#FF6B6B
```

## 📦 Project Structure

<details>
<summary>Click to expand</summary>

```
Actify/
├── backend/                  # Backend services
│     ├── fastapi/           # FastAPI microservice (Python)
│     │      ├── app/        # FastAPI app with routes, models, etc.
│     │      ├── routes/     # API endpoints
│     │      ├── services/   # Business logic
│     │      └── schemas/    # Data models
│     │      
│     ├── nodejs/            # Node.js microservice
│     │      ├── src/        # Source code
│     │      ├── controllers/# Request handlers
│     │      ├── models/     # Data models
│     │      └── routes/     # API routes
│     │
│     └── db/                # MongoDB setup & data
│
├── frontend/                 # Frontend React app
│     ├── public/            # Static files
│     └── src/               # Source code
│           ├── components/  # Reusable UI components
│           ├── pages/       # Main application pages
│           ├── services/    # API integration
│           └── store/       # State management
│
└── docs/                    # Documentation
```
</details>

## 🚀 Quick Start

<details>
<summary>Prerequisites</summary>

- Python 3.8+
- MongoDB 4.4+
- Node.js 16+
</details>

<details>
<summary>Backend Setup (FastAPI)</summary>

```bash
# Navigate to FastAPI backend
cd backend/fastapi/app

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
# Create .env file with:
MONGODB_URL=mongodb://localhost:27017
SECRET_KEY=your_secret_key

# Run the server
uvicorn main:app --reload
```
</details>

<details>
<summary>Frontend Setup</summary>

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```
</details>

## ✨ Features

### Current Implementation
| Feature | Status |
|---------|---------|
| User Authentication | ✅ |
| CRUD Operations | ✅ |
| Location Services | ✅ |
| Basic Analytics | ✅ |

### Roadmap
| Feature | Status |
|---------|---------|
| AI Fraud Detection | 🚧 |
| KarmaCash System | 🚧 |
| Mobile App | 📋 |
| Community Leaderboards | 📋 |

## 👥 Contributing

[![Contributors](https://img.shields.io/github/contributors/Dhritikrishna123/Actify?style=for-the-badge)](https://github.com/Dhritikrishna123/Actify/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/Dhritikrishna123/Actify?style=for-the-badge)](https://github.com/Dhritikrishna123/Actify/network/members)
[![Stars](https://img.shields.io/github/stars/Dhritikrishna123/Actify?style=for-the-badge)](https://github.com/Dhritikrishna123/Actify/stargazers)
[![Issues](https://img.shields.io/github/issues/Dhritikrishna123/Actify?style=for-the-badge)](https://github.com/Dhritikrishna123/Actify/issues)
[![MIT License](https://img.shields.io/github/license/Dhritikrishna123/Actify?style=for-the-badge)](https://github.com/Dhritikrishna123/Actify/blob/main/LICENSE)

<a href="https://github.com/Dhritikrishna123/Actify/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Dhritikrishna123/Actify" />
</a>

### Contribution Guidelines

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top Contributors

<!-- readme: contributors -start -->
<!-- readme: contributors -end -->

### Activity

![Alt](https://repobeats.axiom.co/api/embed/your-repobeats-hash.svg "Repobeats analytics image")

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

<p align="left">
  <a href="mailto:contact@actify.com">
    <img src="https://img.shields.io/badge/Email-contact%40actify.com-blue" alt="Email"/>
  </a>
  <a href="https://github.com/Dhritikrishna123/Actify">
    <img src="https://img.shields.io/badge/GitHub-Actify-black" alt="GitHub"/>
  </a>
</p>

---

<div align="center">
  <strong>🌟 Actify – Where Community Action Meets Impact 🌟</strong>
  <br/>
  <sub>Made with ❤️ by the Actify Team</sub>
</div>