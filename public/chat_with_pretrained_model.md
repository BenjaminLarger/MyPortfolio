# Multi-Model Chat Interface

A comprehensive chat application that integrates four types of AI models: OpenAI GPT, Hugging Face transformers, Hugging Face Inference API, and DistilBERT for text classification and generation.

## Features

- **Multi-Model Support**: OpenAI API (GPT-3.5-turbo), Hugging Face local models, Hugging Face Inference API, and DistilBERT
- **Real-Time Chat**: WebSocket-powered interface with live conversation updates
- **Fine-Tuning Capabilities**: Complete DistilBERT fine-tuning with custom datasets
- **Modern Web Interface**: Responsive design with dark/light theme support
- **REST API**: Full API endpoints for programmatic access
- **Model Comparison**: Built-in tools for testing and comparing model performance

## Quick Start

### Prerequisites

- Python 3.8+
- OpenAI API key (optional, for GPT models)
- Hugging Face API token (optional, for Inference API)

### Installation

1. **Clone and setup environment**:
```bash
git clone <repository-url>
cd ChatWithPreTrainedModel
python -m venv .venv
source .venv/bin/activate  # Linux/Mac
```

2. **Install dependencies**:
```bash
pip install -r requirements.txt
```

3. **Configure environment**:
```bash
cp .env.example .env
# Edit .env with your API keys:
# OPENAI_API_KEY=your_openai_api_key_here
# HUGGINGFACE_API_TOKEN=your_hf_token_here
```

4. **Run the application**:
```bash
python main.py
```

5. **Access the interface**:
   - Web interface: http://localhost:8000
   - API documentation: http://localhost:8000/docs

## Project Structure

```
├── src/
│   ├── api/          # FastAPI routes and WebSocket handlers
│   ├── models/       # AI model clients (OpenAI, HuggingFace, DistilBERT)
│   ├── chat/         # Chat logic and message processing
│   └── utils/        # Configuration and helper utilities
├── static/           # CSS and JavaScript for web interface
├── templates/        # Jinja2 HTML templates
├── tests/            # Model testing and validation scripts
├── notebooks/        # Jupyter notebooks for experimentation
├── data/             # Training datasets and examples
└── model_cache/      # Downloaded model storage (auto-created)
```

## Model Types

### 1. OpenAI API (GPT-3.5-turbo)
- **Use case**: Advanced conversational AI with broad knowledge
- **Requirements**: OpenAI API key
- **Features**: Context-aware conversations, retry logic, usage tracking

### 2. Hugging Face Local Models
- **Use case**: Offline text generation with open-source models
- **Requirements**: Local model download (~1-3GB)
- **Features**: Complete privacy, customizable models, no API costs

### 3. Hugging Face Inference API
- **Use case**: Serverless access to hosted models
- **Requirements**: Hugging Face API token
- **Features**: No local storage, various NLP tasks, production-ready

### 4. DistilBERT
- **Use case**: Fast text classification and lightweight generation
- **Requirements**: None (downloads automatically)
- **Features**: Fine-tuning support, sentiment analysis, custom training

## Development Commands

### Running the Application
```bash
# Production mode
python main.py

# Development mode with auto-reload
uvicorn src.api.routes:app --reload --host localhost --port 8000
```

### Testing Models
```bash
# Quick model validation
python test_specific_models.py

# Individual model tests
python tests/test_openai_client.py
python tests/test_huggingface_client.py
python tests/test_inference_api_client.py

# Comprehensive model comparison
python tests/test_model_comparison.py

# Fine-tuning example
python example_distilbert_finetuning.py

# Run all tests
pytest tests/
```

### Fine-Tuning
```bash
# Example fine-tuning script
python example_distilbert_finetuning.py

# Test fine-tuning functionality
python tests/test_distilbert_finetuning.py
```

## API Endpoints

### Chat Endpoints
- `GET /` - Web chat interface
- `POST /chat` - Send chat message and get response
- `WebSocket /ws` - Real-time chat connection
- `POST /chat/classify` - Text classification with multiple models

### Model Management
- `GET /models/status` - Check status of all models
- `GET /api/models` - List available models and configurations

### Fine-Tuning
- `POST /finetune/distilbert/upload` - Upload dataset for fine-tuning
- `POST /finetune/distilbert/sample` - Fine-tune with sample data
- `POST /predict/distilbert` - Make predictions with fine-tuned models
- `GET /finetune/models` - List fine-tuned models

### Health Check
- `GET /health` - Application health status

## Configuration

Configuration is managed through Pydantic settings with environment variable support. Key settings:

```python
# API Configuration
OPENAI_API_KEY=your_key_here
HUGGINGFACE_API_TOKEN=your_token_here

# Model Settings
MAX_TOKENS=150
TEMPERATURE=0.7
MAX_MESSAGE_LENGTH=2000

# Fine-tuning Settings
FINE_TUNE_EPOCHS=3
FINE_TUNE_BATCH_SIZE=16
FINE_TUNE_LEARNING_RATE=2e-5

# Server Settings
HOST=localhost
PORT=8000
DEBUG=false
```

See `src/utils/config.py` for complete configuration options.

## Architecture

### Model Client Pattern
Each model type implements a consistent interface:
- Async initialization and connection validation
- Standardized response format with usage metrics
- Error handling with exponential backoff retry logic
- Configuration through centralized Pydantic settings

### WebSocket Support
Real-time chat functionality with:
- Connection management for multiple clients
- Status updates during message processing
- Error handling and graceful disconnection
- Broadcasting capabilities for multi-user scenarios

### Fine-Tuning Infrastructure
- Upload custom datasets via API or use sample data generation
- Configure training parameters (epochs, learning rate, batch size)
- Monitor training progress with Weights & Biases integration
- Save and manage multiple fine-tuned models
- Use fine-tuned models through prediction endpoints

## Fine-Tuning Guide

### 1. Prepare Your Dataset
```python
# CSV format with 'text' and 'label' columns
text,label
"This is great!",positive
"I hate this",negative
```

### 2. Upload and Train
```bash
curl -X POST "http://localhost:8000/finetune/distilbert/upload" \
  -F "file=@your_dataset.csv" \
  -F "num_labels=2" \
  -F "epochs=3" \
  -F "output_name=my_custom_model"
```

### 3. Use Fine-Tuned Model
```bash
curl -X POST "http://localhost:8000/predict/distilbert" \
  -H "Content-Type: application/json" \
  -d '{"texts": "Your text here", "model_path": "./fine_tuned_models/my_custom_model"}'
```

## Testing and Validation

### Model Testing Strategy
- **Individual tests**: Quick validation of specific model functionality
- **Comparison tests**: Multi-model performance analysis with automated reporting
- **Load testing**: WebSocket connection management validation
- **API validation**: External API connectivity and error handling

### Test Reports
The system generates comprehensive test reports in `tests/reports/`:
- JSON data with detailed metrics
- Markdown reports with performance comparisons
- Training history tracking for fine-tuned models

## Dependencies

### Core Dependencies
- **FastAPI**: Web framework and API server
- **OpenAI**: Official OpenAI API client
- **Transformers**: Hugging Face model library
- **PyTorch**: Deep learning framework
- **Pydantic**: Data validation and settings management

### Development Tools
- **Jupyter**: Interactive development and experimentation
- **Weights & Biases**: Experiment tracking and monitoring
- **pytest**: Testing framework
- **uvicorn**: ASGI server for FastAPI

## Monitoring and Observability

### Logging
- Structured logging with configurable levels
- Model-specific error tracking
- Performance metrics collection
- WebSocket connection monitoring

### Experiment Tracking
- Weights & Biases integration for fine-tuning experiments
- Training metrics visualization
- Model performance comparison
- Automated report generation

## Security Considerations

### API Key Management
- Environment variable configuration
- No hardcoded credentials
- API key validation on startup
- Secure error handling without exposing keys

### Input Validation
- Message length limits (configurable, default 2000 chars)
- Content filtering and sanitization
- Rate limiting support (configurable)
- Request validation with Pydantic models

### Model Security
- Local model caching with integrity checks
- Controlled file upload for fine-tuning
- Temporary file cleanup
- Safe model loading and validation

## Troubleshooting

### Common Issues

**Model Loading Errors**:
```bash
# Clear model cache
rm -rf model_cache/
# Restart application
python main.py
```

**API Connection Issues**:
```bash
# Validate API keys
python tests/test_openai_client.py
python tests/test_inference_api_client.py
```

**WebSocket Connection Problems**:
- Check firewall settings
- Verify port 8000 availability
- Test with browser developer tools

### Performance Optimization
- **Model Caching**: Models are cached after first load
- **Conversation Context**: Limited to last 10 messages for efficiency
- **Lazy Loading**: Model clients initialized on first use
- **Connection Pooling**: Reused WebSocket connections

## Contributing

1. Follow existing code conventions and patterns
2. Add tests for new functionality
3. Update documentation for API changes
4. Use virtual environment for development
5. Run tests before submitting changes

## License

[Add your license information here]

## Support

For issues and feature requests, please use the project's issue tracker or contact the development team.