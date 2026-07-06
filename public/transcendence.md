# 🏆 Transcendence

> _“A full-stack multiplayer web application built from scratch as part of the 42 School curriculum.”_

---

## 📽️ Video Demo


https://github.com/user-attachments/assets/d7c2735d-f0e8-4b4a-9de7-ab6e5ffd741e

---

## 📌 Table of Contents

1. [Overview](#-overview)
2. [Features](#-features)
3. [Tech Stack](#-tech-stack)
4. [Architecture](#-architecture)
5. [How to Run Locally](#-how-to-run-locally)
6. [Screenshots](#-screenshots)
7. [Challenges & Learnings](#-challenges--learnings)
8. [What's Next](#-whats-next)
9. [Contact](#-contact)

---

## 📖 Overview

Transcendence is a real-time multiplayer Pong game built entirely from scratch.  
It features social interactions, real-time gameplay, authentication, and more—offering a full-stack experience from frontend to backend, including DevOps and deployment.

---

## 🚀 Features

- ⚔️ Real-time Pong Game (1v1)
- 🧑‍🤝‍🧑 Friends System & Direct Messages
- 💬 Live Chat Channels (WebSocket)
- 📅 Tournaments & Rankings
- 🛡️ Two-Factor Authentication (2FA)
- 🐳 Dockerized & Fully Deployable
- 🔒 Advanced user session management for a seamless and secure user experience  
- 💻 Blockchain integration with Solidity for secure and immutable tournament score storage  
- 🔄 Internal API communication between modular services to support scalability  
- 🗄️ PostgreSQL database for efficient and reliable data management
- ✅ Ethereum smart contract integration (store scores)
- 🔜 AI Bot opponent

---

## 🛠️ Tech Stack

**Frontend**
- JavaScript Vanilla
- CSS
- WebSocket

**Backend**
- Django
- PostgreSQL
- Solidity

**Authentication**
- JWT
- 2FA with TOTP

**DevOps**
- Docker
- Nginx
- GitHub Actions

---

## 🧪 How to Run Locally

```.env file
# Django
DJANGO_SECRET_KEY='your-django-secret-key'
DJANGO_SUPERUSER_USERNAME=your-superuser-username
DJANGO_SUPERUSER_EMAIL=your-superuser-email
DJANGO_SUPERUSER_PASSWORD=your-superuser-password

# Postgres
POSTGRES_DB=your-database-name
POSTGRES_USER=your-postgres-username
POSTGRES_PASSWORD=your-postgres-password

# SSL Certificate Path
CERTFILE=/path/to/your/certificate.pem

# OAuth API
CLIENT_ID=your-oauth-client-id
CLIENT_SECRET=your-oauth-client-secret
REDIRECT_URI=https://your-domain.com/oauth_callback

# Blockchain
CONTRACT_ABI=/absolute/path/to/TournamentManager.json
CONTRACT_PRIVATE_KEY=your-blockchain-private-key
ACTUALHOSTNAME=your-domain.com

# ELK Stack
ELASTICSEARCH_PASSWORD=your-elasticsearch-password
LOGSTASH_PASSWORD=your-logstash-password
KIBANA_PASSWORD=your-kibana-password

```

- Visit `https://localhost:8888`
- Database is seeded automatically on first run

---

```bash
git clone https://github.com/benjaminlarger/transcendence.git
cd transcendence
docker-compose up --build
```

- Visit `http://localhost:8888`
- Database is seeded automatically on first run

---

## 🖼️ Screenshots

*(Insert images with captions)*


- Login & 2FA
![Screenshot from 2025-05-15 15-23-28](https://github.com/user-attachments

![Screenshot from 2025-05-15 15-24-35](https://github.com/user-attachments/assets/e15dfa5d-d0b9-4a9c-9ed2-08fb21528069)
/assets/6c2974c6-3516-425b-98ca-dfc37dda9ed1)

- Game in action
![Screenshot from 2025-05-15 15-25-52](https://github.com/user-attachments/assets/8d8a9461-54ad-45e0-9bbc-e41ae8f45ca0)

- Chat and tournament screen
![Screenshot from 2025-05-15 15-30-15](https://github.com/user-attachments/assets/2c872e81-3f9b-4f9a-8ee2-bb9411aa51b6)

![Screenshot from 2025-05-15 15-33-50](https://github.com/user-attachments/assets/3ae6acbd-11ac-49bb-9547-7c5583c1e9b8)


---

## 💡 Challenges & Learnings

- Mastering WebSockets for real-time gameplay
- Implementing 2FA and secure token-based auth
- Managing game state synchronization

---

## 🛠️ What's Next

- 🔜 Mobile-first redesign
- 🔜 Admin dashboard

---
