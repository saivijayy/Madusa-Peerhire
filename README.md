# 👨‍💼 PeerHire API

A simple Express.js-based backend API for the PeerHire platform, containerized with Docker and deployed via GitHub Actions to an AWS EC2 instance.

---

## 🚀 Live API

- **Swagger Docs**: [http://35.154.133.168:3000/api-docs](http://35.154.133.168:3000/api-docs)

---

## 🐳 Dockerization

### Build & Run Locally

```bash
docker build -t peerhire-api .
docker run -d -p 3000:3000 peerhire-api
🔁 CI/CD Pipeline
The CI/CD pipeline is configured using GitHub Actions:

🧪 Run tests (optional Jest step)

🛠️ Build Docker image

📦 Push to Docker Hub

☁️ Deploy to AWS EC2 using SSH (peerhire/ssh-action)

📬 API Documentation
Swagger
Integrated with Swagger for interactive API docs:

Route: /api-docs

Format: OpenAPI 3.0

Postman
A Postman Collection with all API endpoints is saved and exported.

📁 Project Structure
bash
Copy
Edit
peerhire-api/
├── Dockerfile
├── .github/workflows/deploy.yml
├── routes/
│   └── user.js
├── app.js
└── README.md
✅ Completed Tasks
 Dockerized Express API

 CI/CD using GitHub Actions

 Deployed on AWS EC2

 Swagger documentation

 Postman collection created and exported

📝 License
This project is part of the PeerHire DevOps Internship Assignment.


