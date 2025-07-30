# Tradeflow Template

This repository provides a starter template for a simple .NET Aspire backend with a React front end. The API exposes a single endpoint that returns `Hello Tradeflow!` and the React app renders that message.

It includes:

- **.NET Aspire** sample backend
- **React** + **Vite** frontend
- **SQL Server** connection placeholder
- **GitHub Actions** workflow for CI/CD

Designed for deployment to Azure.


## Running locally

1. Ensure you have .NET 8 SDK and Node 20 installed.
2. Start the backend:
   ```bash
   dotnet run --project src/Tradeflow.Api/Tradeflow.Api.csproj
   ```
3. In a second terminal start the frontend:
   ```bash
   cd frontend
   npm install
   npm run start
   ```
4. Open <http://localhost:5173> to see "Hello Tradeflow!".
