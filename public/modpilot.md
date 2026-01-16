# Moderation UI System

> A comprehensive content moderation platform for e-commerce applications with AI-powered moderation decisions and intelligent escalation logic.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Go Version](https://img.shields.io/badge/go-1.21+-blue.svg)](https://golang.org/dl/)
[![MongoDB](https://img.shields.io/badge/mongodb-7.0-green.svg)](https://www.mongodb.com/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [System Architecture](#system-architecture)
- [Quick Start](#quick-start)
- [Technologies](#technologies)
- [API Documentation](#api-documentation)
- [Development](#development)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Overview

Moderation UI is a modern content moderation platform that combines AI-powered automation with human oversight. The system allows users to post content in feeds and provides automated moderation decisions with intelligent escalation to handle uncertain cases, optimizing both cost and accuracy.

### Key Capabilities

- **AI-Powered Moderation**: Real AI integration with OpenAI, Anthropic, Google, Groq, and custom providers
- **Smart Escalation**: Automatically escalate uncertain decisions to more powerful models
- **Multi-Provider Support**: Configure different AI providers for primary and escalation models
- **Admin Interface**: Modern web interface built with Astro for configuration and monitoring
- **Flexible Authentication**: API key-based auth with role-based permissions and IP whitelisting

## Features

### Content Moderation

- Automated AI-powered moderation decisions (approve/reject/manual_review)
- Support for posts with photos, descriptions, titles, and metadata
- Vision model support for image analysis
- Customizable moderation rules via system prompts
- **Event-Driven Pending Queue**: Kafka/Redis-powered queue prevents concurrent moderator conflicts
- Real-time moderation queue for manual review with multi-moderator support

### AI Capabilities

- **Multi-Provider Support**: OpenAI, Google Gemini, Anthropic Claude, Groq, Ollama, Custom APIs
- **Intelligent Escalation**: Cost-optimized escalation from fast models to powerful ones
- **Confidence Thresholds**: Configurable thresholds (0.5-0.99) for triggering escalation
- **Custom System Prompts**: Define domain-specific moderation guidelines
- **Robust Error Handling**: Graceful fallbacks for API failures, timeouts, and parsing errors

### Authentication & Security

- API key-based authentication with secure key management
- Role-based permissions (read, write, moderate, admin)
- IP whitelisting for enhanced security
- API key rotation and revocation
- JWT-based authentication (in development)

### Admin Dashboard

- Real-time moderation metrics and activity monitoring
- AI model configuration interface
- API key management
- Pending moderation queue
- Testing playground for moderation rules

## System Architecture

The project follows a modern event-driven architecture with **Traefik** (Go-based) as the entry point:

```mermaid
graph TB
    Browser[User Browser]
    Traefik[Traefik Reverse Proxy<br/>Port 80]
    Frontend[Frontend Astro<br/>Port 3000]
    Backend[Backend Go + Fiber<br/>Port 8080]
    MongoDB[(MongoDB<br/>Port 27017)]
    Redis[(Redis<br/>Port 6379)]
    Kafka[Apache Kafka<br/>Port 9092/9093]
    KafkaUI[Kafka UI<br/>Port 8082]
    AI[AI Providers<br/>OpenAI, Anthropic, etc]

    Browser --> Traefik
    Traefik --> Frontend
    Traefik --> Backend
    Backend --> MongoDB
    Backend --> Redis
    Backend --> Kafka
    Backend --> AI
    Kafka --> KafkaUI

    style Traefik fill:#00d4aa,stroke:#333,stroke-width:2px
    style Kafka fill:#ff6600,stroke:#333,stroke-width:2px
    style Redis fill:#dc382d,stroke:#333,stroke-width:2px
    style Backend fill:#00add8,stroke:#333,stroke-width:2px
```

### Request Flow

1. **User Request** → Traefik (port 80)
2. **Traefik Routes** (automatic service discovery via Docker labels):
   - `/api/*` → Backend API (reverse proxy to port 8080)
   - `/swagger` → Backend Swagger docs
   - `/*` → Frontend static files (served by Node.js serve on port 3000)
3. **Traefik Dashboard** → Available at port 8080 for monitoring and configuration

### Clean Architecture (Backend)

```text
┌─────────────────────────────────────────────────────────┐
│              Backend (Go + Fiber)                       │
│  ┌──────────────────────────────────────────────────┐   │
│  │  Domain Layer (Business Logic & Entities)        │   │
│  └──────────────┬───────────────────────────────────┘   │
│  ┌──────────────▼───────────────────────────────────┐   │
│  │  Application Layer (Use Cases & Services)        │   │
│  └──────────────┬───────────────────────────────────┘   │
│  ┌──────────────▼───────────────────────────────────┐   │
│  │  Infrastructure Layer (HTTP, DB, AI Clients)     │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```


### Backend Architecture

- **Domain Layer**: Core business logic, entities, and interfaces
- **Application Layer**: Use cases, business rules, and service orchestration
- **Infrastructure Layer**: External dependencies (HTTP, database, AI clients)

### Frontend Architecture

- **Astro Framework**: Static site generation with islands architecture
- **Component-Based**: Reusable UI components with responsive design
- **API Client**: Type-safe API integration layer
- **Authentication**: JWT and API key authentication support

## Quick Start

### Prerequisites

- Docker and Docker Compose
- Go 1.21+ (for local development)
- Node.js 18+ (for frontend development)

### Running with Docker Compose

1. Clone the repository:

```bash
git clone https://github.com/yourusername/moderation-ui.git
cd moderation-ui
```

2. Set up environment configuration:

```bash
# Copy example configuration files
cd backend/environment
cp local.json.example local.json
cp develop.json.example develop.json
cp production.json.example production.json

# Or use the Makefile helper (from project root)
cd ../..
make setup-env
```

3. (Optional) Update configuration files with your settings:
   - Edit `backend/environment/develop.json` for Docker environment
   - Edit `backend/environment/local.json` for local Go development
   - **Important**: Change JWT secrets and database passwords for production

4. Start all services:

```bash
make up
```

This will start:
- **Main Application** (Traefik) on `http://localhost`
- **Traefik Dashboard** on `http://localhost:8080` (monitoring & configuration)
- **Frontend** (Astro static files) served via Traefik
- **Backend API** via Traefik at `http://localhost/api`
- **Backend Direct** on `http://localhost:8090` (development only)
- **MongoDB** on `http://localhost:27017`
- **MongoDB Express** (Web UI) on `http://localhost:8081`
- **Redis** on `http://localhost:6379` (pending moderation cache)
- **Apache Kafka** on `localhost:9092` (internal) and `localhost:9093` (external)
- **Kafka UI** on `http://localhost:8082` (Kafka monitoring & management)
- **Zookeeper** on `localhost:2181` (Kafka coordination)

5. Check service health:

```bash
make status
```

6. View logs:

```bash
make logs
```

7. Stop all services:

```bash
make down
```

### Local Development Setup

#### Backend

```bash
cd backend

# Install dependencies
make deps

# Run tests
make test

# Run locally
make run-local

# Build binary
make build
```

#### Frontend

```bash
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Technologies

### Backend Stack

| Technology | Purpose |
|------------|---------|
| Go 1.21+ | Primary programming language |
| GoFiber | High-performance HTTP framework |
| MongoDB 7.0 | Document database |
| Cobra CLI | Command-line interface |
| Viper | Configuration management |
| Go Validator v10 | Request validation |

### Frontend Stack

| Technology | Purpose |
|------------|---------|
| Astro | Static site generator |
| TypeScript | Type-safe JavaScript |
| Custom CSS | Styling and responsive design |

### Infrastructure

| Technology | Purpose |
|------------|---------|
| Docker | Containerization |
| Docker Compose | Service orchestration |
| Traefik v3 | Modern reverse proxy & load balancer (Go-based) |
| Apache Kafka 7.5 | Event streaming platform for pending moderation queue |
| Redis 7 | In-memory cache for fast pending retrieval |
| Kafka UI | Web interface for Kafka monitoring |
| MongoDB Express | Database management UI |

## API Documentation

### Base URL

**Production (via Traefik):**
```text
http://localhost/api/v1
```

**Development (Direct Backend Access):**
```text
http://localhost:8080/api/v1
```

### Authentication

All API requests (except health checks) require authentication via API key in the header:

```bash
X-API-Key: your-api-key-here
```

### Core Endpoints

#### Moderation

```bash
# Submit content for moderation
POST /api/v1/moderate
Content-Type: application/json

{
  "title": "Product Title",
  "description": "Product description",
  "photo_url": "https://example.com/image.jpg",
  "metadata": {
    "user_id": "user123",
    "category": "electronics"
  }
}

# Get pending moderation items
GET /api/v1/moderation/pending

# Update moderation status
PUT /api/v1/moderation/:post_id
Content-Type: application/json

{
  "status": "approved",
  "reason": "Content complies with guidelines"
}
```

#### Configuration

```bash
# Get available AI providers and models
GET /api/v1/config/providers

# Get current moderation configuration
GET /api/v1/config/moderation

# Create/Update moderation configuration
POST /api/v1/config/moderation
PUT /api/v1/config/moderation
Content-Type: application/json

{
  "primary_model": {
    "provider": "openai",
    "model": "gpt-4o-mini",
    "api_key": "sk-...",
    "base_url": "https://api.openai.com/v1"
  },
  "escalation_model": {
    "provider": "openai",
    "model": "gpt-4o",
    "api_key": "sk-..."
  },
  "confidence_threshold": 0.7,
  "system_prompt": "Your custom moderation instructions..."
}
```

#### Authentication Management

```bash
# Create a new client (Admin only)
POST /api/v1/clients

# Create API key for client (Admin only)
POST /api/v1/clients/:client_id/api-keys

# Rotate API key (Admin only)
PUT /api/v1/api-keys/:key_id/rotate

# Revoke API key (Admin only)
DELETE /api/v1/api-keys/:key_id
```

For complete API documentation, visit the Swagger UI at `http://localhost/swagger` when running the application.

## Development

### Available Make Commands

#### Root Level (Docker Compose)

```bash
make up               # Start all services with Docker Compose
make down             # Stop all services
make restart          # Restart all services
make status           # Show status of all services
make logs             # View logs from all services
make logs-f           # Follow logs in real-time
make logs-traefik     # View Traefik proxy logs
make logs-frontend    # View frontend service logs
make logs-backend     # View backend logs
make logs-kafka       # View Kafka broker logs
make logs-redis       # View Redis cache logs
make shell-traefik    # Access Traefik container shell
make clean            # Stop services and remove volumes
make rebuild          # Rebuild and restart services
make health           # Check health of all services
```

#### Backend Level

```bash
cd backend

make run         # Run the application locally
make build       # Build the application binary
make test        # Run tests
make lint        # Run linter
make deps        # Install/update dependencies
make clean       # Clean build artifacts

# Environment-specific runs
make run-local   # Run with local.json config
make run-dev     # Run with develop.json config
make run-prod    # Run with production.json config
```

### CLI Commands

The application provides CLI commands for managing clients and API keys:

```bash
# Create a new client
go run cmd/main.go create-client \
  --name="Client Name" \
  --email="client@example.com"

# Create API key for client
go run cmd/main.go create-api-key \
  --client-id="client_id" \
  --name="Key Name" \
  --permissions="read,write"

# List API keys for client
go run cmd/main.go list-keys --client-id="client_id"

# Rotate an API key
go run cmd/main.go rotate-key --key-id="key_id"

# Revoke an API key
go run cmd/main.go revoke-key --key-id="key_id"
```

## Configuration

### Environment Configuration

The backend reads configuration from JSON files in the `backend/environment/` directory:

- `local.json` - Local development settings
- `develop.json` - Development environment settings
- `production.json` - Production environment settings

Example configuration structure:

```json
{
  "server": {
    "port": "8080",
    "host": "0.0.0.0"
  },
  "database": {
    "uri": "mongodb://admin:adminpassword@localhost:27017",
    "name": "moderation_develop"
  },
  "auth": {
    "jwt_secret": "your-secret-key",
    "token_expiration": "24h"
  }
}
```

### Docker Compose Configuration

The `docker-compose.yaml` file defines the following services:

- **traefik**: Modern reverse proxy and load balancer (ports 80, 443, 8080) - **Main entry point**
- **frontend**: Astro application served via Node.js (port 3000, internal)
- **backend**: Go API service (port 8080)
- **mongo**: MongoDB database (port 27017)
- **mongo-express**: MongoDB web UI (port 8081)
- **redis**: Redis cache for pending moderation queue (port 6379)
- **zookeeper**: Apache Zookeeper for Kafka coordination (port 2181)
- **kafka**: Apache Kafka message broker (ports 9092 internal, 9093 external)
- **kafka-ui**: Web interface for Kafka monitoring (port 8082)

Default credentials:
- MongoDB: `admin` / `adminpassword`
- MongoDB Express: No authentication (development only)
- Redis: No password (development only)
- Kafka: No authentication (PLAINTEXT protocol for development)

### Service Communication & Traefik Features

- **Traefik** uses Docker labels for automatic service discovery (no manual routing config needed)
- **Traefik Dashboard** provides real-time monitoring at `http://localhost:8080`
- **Frontend** is automatically discovered and routed via Traefik labels
- **Backend** API routes (`/api`, `/swagger`) are proxied through Traefik
- **Health Checks** are configured in Traefik for backend load balancing
- All services communicate via the `moderation-network` Docker network
- **Production Ready**: Traefik supports Let's Encrypt SSL, rate limiting, and advanced routing

## Project Structure

```text
moderation-ui/
├── Makefile                      # Root-level Docker Compose commands
├── docker-compose.yaml           # Service orchestration
├── README.md                     # This file
├── CLAUDE.md                     # Development guidelines
│
├── traefik/                      # Traefik reverse proxy service
│   ├── Dockerfile                # Traefik container configuration
│   ├── traefik.yml               # Traefik static configuration
│   ├── dynamic.yml               # Traefik dynamic routing rules
│   └── .dockerignore             # Docker build exclusions
│
├── frontend/                     # Astro frontend application
│   ├── Dockerfile                # Frontend build container
│   ├── .dockerignore             # Docker build exclusions
│   ├── astro.config.mjs          # Astro configuration
│   ├── package.json              # Node.js dependencies
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   ├── pages/                # Route components
│   │   ├── scripts/              # Shared utilities
│   │   └── styles/               # Global styles
│   └── public/                   # Static assets
│
├── backend/
│   ├── Makefile                  # Backend development commands
│   ├── cmd/
│   │   └── main.go              # Application entry point
│   ├── internal/
│   │   ├── auth/                # Authentication domain
│   │   │   ├── domain/          # Auth entities and interfaces
│   │   │   ├── application/     # Auth use cases
│   │   │   └── infrastructure/  # Auth implementations
│   │   └── moderation/          # Moderation domain
│   │       ├── domain/
│   │       │   ├── models.go          # Core entities
│   │       │   ├── ai_models.go       # AI integration models
│   │       │   ├── config_models.go   # Configuration entities
│   │       │   └── ports.go           # Interface definitions
│   │       ├── application/
│   │       │   ├── ai_moderation_service.go  # AI moderation logic
│   │       │   └── config_service.go         # Config management
│   │       └── infrastructure/
│   │           ├── ai/
│   │           │   └── openai_client.go      # AI client implementation
│   │           ├── handlers/
│   │           │   ├── http.go              # HTTP handlers
│   │           │   └── config_handler.go    # Config endpoints
│   │           └── repository/
│   │               ├── mongo.go             # MongoDB implementation
│   │               └── mongo_config.go      # Config repository
│   └── environment/             # Configuration files
│       ├── local.json
│       ├── develop.json
│       └── production.json
│
└── deploy/
    ├── Dockerfile               # Backend container image
    └── mongo-init/              # MongoDB initialization scripts
```

## Kafka/Redis Pending Moderation System

### Problem Solved

When multiple moderators work simultaneously, they could receive and moderate the same post from a shared database query, leading to:
- Duplicate moderation decisions
- Wasted moderator time
- Inconsistent user experience
- Race conditions in the database

### Event-Driven Solution

The system uses **Apache Kafka** and **Redis** to create an event-driven pending moderation queue:

```mermaid
sequenceDiagram
    participant AI as AI Moderation
    participant Kafka as Kafka Pending Topic
    participant Consumer as Kafka Consumer
    participant Redis as Redis Cache
    participant Mod1 as Moderator 1
    participant Mod2 as Moderator 2
    participant Result as Kafka Result Topic

    AI->>AI: Analyze content
    AI->>AI: Decision: UNCERTAIN<br/>(confidence < threshold)

    AI->>Kafka: Publish to pending-{client_id}
    Note over Kafka: Message includes:<br/>- Post data<br/>- AI analysis<br/>- Timestamp<br/>- Expiration (24h)

    Kafka->>Consumer: Consume message
    Consumer->>Redis: Store pending moderation
    Note over Redis: Sorted by timestamp<br/>TTL: 1 hour

    Mod1->>Redis: GET /pending (limit=10)
    Redis->>Mod1: Returns posts 1-10

    Mod2->>Redis: GET /pending (limit=10)
    Redis->>Mod2: Returns posts 1-10
    Note over Mod1,Mod2: Both moderators see same posts<br/>but Kafka consumer groups<br/>ensure no duplicates consumed

    Mod1->>Mod1: Approve post #1
    Mod1->>Result: Publish to result-{client_id}
    Note over Result: Decision: approved<br/>Moderator ID<br/>Reason<br/>Processing time

    Mod1->>Redis: DELETE post #1

    Mod2->>Redis: GET /pending
    Redis->>Mod2: Returns posts 2-10<br/>(post #1 removed)
```

### Architecture Benefits

```mermaid
graph LR
    A[AI Returns<br/>manual_review] -->|Publish| B[Kafka Pending Topic<br/>moderation-pending-clientID]
    B -->|Consumer Group| C[Kafka Consumer]
    C -->|Store| D[Redis Cache<br/>Fast Retrieval]
    D -->|GET /pending| E[Moderator UI]
    E -->|Approve/Reject| F[Backend API]
    F -->|Publish| G[Kafka Result Topic<br/>moderation-manual-results-clientID]
    F -->|Delete| D

    style B fill:#ff6600,stroke:#333,stroke-width:2px
    style D fill:#dc382d,stroke:#333,stroke-width:2px
    style G fill:#ff6600,stroke:#333,stroke-width:2px
```

### How the Queue System Prevents Duplicate Moderation

The system uses **Kafka Consumer Groups** and **Redis Atomic Operations** to guarantee no duplicates:

```mermaid
graph TB
    subgraph "AI Moderation Layer"
        AI1[AI Service<br/>Instance 1]
        AI2[AI Service<br/>Instance 2]
        AI3[AI Service<br/>Instance 3]
    end

    subgraph "Kafka Pending Topic (3 Partitions)"
        P0[Partition 0<br/>Posts 1,4,7...]
        P1[Partition 1<br/>Posts 2,5,8...]
        P2[Partition 2<br/>Posts 3,6,9...]
    end

    subgraph "Kafka Consumer Group: moderator-pending-group"
        C1[Consumer 1<br/>Assigned: P0]
        C2[Consumer 2<br/>Assigned: P1]
        C3[Consumer 3<br/>Assigned: P2]
    end

    subgraph "Redis Cache (Sorted Set)"
        Redis[(Redis<br/>pending:client:posts<br/>Score: Timestamp)]
    end

    subgraph "Moderator UI Layer"
        M1[Moderator 1<br/>GET /pending]
        M2[Moderator 2<br/>GET /pending]
        M3[Moderator 3<br/>GET /pending]
    end

    AI1 -->|Post 1,4| P0
    AI2 -->|Post 2,5| P1
    AI3 -->|Post 3,6| P2

    P0 -->|Exclusive| C1
    P1 -->|Exclusive| C2
    P2 -->|Exclusive| C3

    C1 -->|ZADD atomic| Redis
    C2 -->|ZADD atomic| Redis
    C3 -->|ZADD atomic| Redis

    Redis -->|ZRANGE 0-9| M1
    Redis -->|ZRANGE 0-9| M2
    Redis -->|ZRANGE 0-9| M3

    M1 -.->|Approves Post 1| API[Backend API]
    M2 -.->|Approves Post 2| API
    M3 -.->|Sees Post 1<br/>already gone| Redis

    API -->|ZREM Post 1| Redis
    API -->|Publish Decision| Result[Result Topic]

    style P0 fill:#ff6600,stroke:#333,stroke-width:2px
    style P1 fill:#ff6600,stroke:#333,stroke-width:2px
    style P2 fill:#ff6600,stroke:#333,stroke-width:2px
    style Redis fill:#dc382d,stroke:#333,stroke-width:3px
    style API fill:#00add8,stroke:#333,stroke-width:2px
```

**How Duplicates Are Prevented:**

1. **Kafka Partitioning** (Write-Side):
   - Each post gets assigned to ONE partition based on `post_id` hash
   - Ensures ordered processing per post

2. **Consumer Groups** (Read-Side):
   - Each partition assigned to EXACTLY ONE consumer
   - Consumer commits offset only after Redis write succeeds
   - If consumer crashes, another takes over from last committed offset

3. **Redis Atomic Operations**:
   - `ZADD` (add to sorted set) is atomic
   - `ZRANGE` (read posts) returns sorted by timestamp
   - `ZREM` (delete on approval) is atomic
   - **Race condition example**:
     ```
     Time  Moderator 1              Moderator 2              Redis
     ────────────────────────────────────────────────────────────
     T1    GET /pending             -                        [Post 1, 2, 3]
     T2    Sees: [1,2,3]            GET /pending             [Post 1, 2, 3]
     T3    -                        Sees: [1,2,3]            [Post 1, 2, 3]
     T4    Approves Post 1          -                        -
     T5    API calls ZREM           -                        [Post 2, 3]
     T6    -                        Tries to approve Post 1  [Post 2, 3]
     T7    -                        ❌ 404 Not Found         [Post 2, 3]
                                    (already deleted)
     ```

4. **Optimistic Locking**:
   - Moderator sees snapshot of queue
   - Approval/rejection checks if post still exists
   - If another moderator processed it first → 404 error (safe failure)

5. **Consumer Offset Management**:
   - Consumer only commits offset after successful Redis write
   - If Redis fails, message re-consumed on restart
   - **At-least-once delivery** guarantees no message loss

### Visual: Race Condition Prevention

```mermaid
sequenceDiagram
    participant M1 as Moderator 1
    participant M2 as Moderator 2
    participant API as Backend API
    participant Redis as Redis Cache
    participant Kafka as Kafka Result Topic

    Note over M1,M2: Both moderators viewing queue simultaneously

    M1->>Redis: GET /pending (limit=10)
    Redis->>M1: [Post 1, Post 2, Post 3, ...]

    M2->>Redis: GET /pending (limit=10)
    Redis->>M2: [Post 1, Post 2, Post 3, ...]

    Note over M1,M2: Both see the same posts

    M1->>M1: Review Post 1<br/>(30 seconds)
    M2->>M2: Review Post 2<br/>(45 seconds)

    M1->>API: POST /moderation/post-1/approve
    Note over API: Check if Post 1 exists in Redis
    API->>Redis: EXISTS pending:client:post-1
    Redis->>API: ✓ EXISTS

    API->>Redis: ZREM pending:client:post-1
    Note over Redis: Post 1 DELETED atomically
    API->>Kafka: Publish approval to result topic
    API->>M1: 200 OK - Approved

    Note over M2: M2 now tries to approve the same Post 1

    M2->>API: POST /moderation/post-1/approve
    Note over API: Check if Post 1 exists in Redis
    API->>Redis: EXISTS pending:client:post-1
    Redis->>API: ✗ NOT FOUND (already deleted)
    API->>M2: ❌ 404 - Post not found or already processed

    Note over M1,M2: ✅ Duplicate prevented!<br/>Post 1 only moderated once

    M2->>Redis: GET /pending (refresh)
    Redis->>M2: [Post 2, Post 3, ...]
    Note over M2: Post 1 no longer in queue
```

**Key Features:**
- ✅ **No Duplicate Moderation**: Kafka consumer groups ensure each message processed once
- ✅ **Per-Client Isolation**: Separate topics per client for multi-tenancy
- ✅ **High Performance**: Redis provides sub-millisecond retrieval
- ✅ **Scalability**: Handles 1000s of pending posts per second
- ✅ **Fault Tolerance**: Kafka replication and Redis persistence
- ✅ **Auto-Cleanup**: TTL and background cleanup routines
- ✅ **Audit Trail**: All decisions published to result topic for tracking

### Kafka Topics Per Client

Each client gets dedicated topics:
- **Input Topic**: `moderation-requests-{client_id}` - Initial moderation requests
- **Output Topic**: `moderation-results-{client_id}` - AI moderation results
- **Pending Topic**: `moderation-pending-{client_id}` - Manual review queue
- **Result Topic**: `moderation-manual-results-{client_id}` - Moderator decisions

### Message Formats

**Pending Moderation Message:**
```json
{
  "message_id": "68ea654c714f2465fcee1762",
  "post_id": "68ea654c714f2465fcee1760",
  "client_id": "68e805a38218356af4b86a91",
  "timestamp": "2025-10-11T14:10:20Z",
  "post": {
    "title": "Product Title",
    "description": "Product description",
    "photos": ["https://example.com/photo.jpg"],
    "user_id": "user123",
    "metadata": {}
  },
  "ai_analysis": {
    "decision": "UNCERTAIN",
    "confidence": 0.5,
    "reason": "Content requires human review",
    "model_used": "gemini-2.5-flash-lite",
    "escalated": false
  },
  "expires_at": "2025-10-12T14:10:20Z"
}
```

**Manual Review Result Message:**
```json
{
  "message_id": "68ea65a8714f2465fcee1766",
  "post_id": "68ea65a8714f2465fcee1765",
  "client_id": "68e805a38218356af4b86a91",
  "timestamp": "2025-10-11T14:12:00Z",
  "decision": "approved",
  "moderator_id": "moderator_123",
  "reason": "Content approved by human moderator",
  "processing_time_ms": 45000,
  "original_ai": {
    "decision": "UNCERTAIN",
    "confidence": 0.5
  },
  "post_metadata": {
    "title": "Product Title",
    "user_id": "user123"
  }
}
```

## AI-Powered Moderation Process

The system implements real AI-powered moderation with intelligent escalation:

### Primary Model Processing

1. **Content Analysis**: Combines title, description, and metadata into structured prompt
2. **AI API Call**: Makes HTTP request to configured AI provider (OpenAI, Anthropic, etc.)
3. **Decision Parsing**: Extracts structured JSON response with decision/confidence/reasoning
4. **Validation**: Ensures response format and confidence bounds are correct

### Smart Escalation Logic

- **Triggered When**: Primary confidence < threshold OR decision = "UNCERTAIN"
- **Enhanced Prompt**: Includes primary model's analysis for context
- **Advanced Model**: Uses more powerful/accurate model for final decision
- **Cost Optimization**: Only escalates when necessary, saving on API costs

Example escalation paths:
- OpenAI: `gpt-4o-mini` → `gpt-4o`
- Anthropic: `claude-3-haiku` → `claude-3-opus`
- Groq: `llama3-8b` → `llama3-70b`
- Google: `gemini-flash` → `gemini-pro`

### Robust Fallback System

- **Configuration Missing**: Falls back to manual review
- **API Failures**: Handles rate limits, invalid keys, service outages
- **Parse Errors**: Graceful handling of malformed AI responses
- **Timeout Protection**: 30-second timeout prevents hanging requests

## Contributing

We welcome contributions! Please follow these guidelines:

1. **After making any code changes, ALWAYS:**
   - Run `go build` to verify compilation
   - Run `go test ./...` to ensure tests pass
   - Test the application functionality

2. **When adding external packages:**
   - Run `go mod tidy` after adding dependencies
   - Update documentation if new technologies are added

3. **Follow Clean Architecture principles:**
   - Maintain separation of concerns between layers
   - Use proper error handling and validation
   - Each domain should have its own folder under `internal/`

4. **Security:**
   - Never commit secrets or credentials to version control
   - Use environment-specific configuration files
   - Implement proper authentication and authorization

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For questions, issues, or contributions:

- Open an issue on GitHub
- Check the [CLAUDE.md](CLAUDE.md) file for development guidelines
- Review the API documentation at `/swagger` endpoint

---

Built with ❤️ using Go, Astro, and MongoDB
