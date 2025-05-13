from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="HowThatSound API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to HowThatSound API"}

@app.get("/health")
async def health_check():
    return {
        "status": "ok",
        "service": "HowThatSound API",
        "version": "1.0.0"
    } 