# ─────────────────────────────────────────────
# Stage 1: Build the React/Vite app
# ─────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files first (layer cache optimization)
COPY package.json package-lock.json ./

RUN npm ci

# Copy rest of the source
COPY . .

# Build for production — VITE_API_BASE_URL is injected at build time via docker-compose
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

RUN npm run build

# ─────────────────────────────────────────────
# Stage 2: Serve built files with Nginx
# ─────────────────────────────────────────────
FROM nginx:1.27-alpine

# Remove default Nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy built React app from Stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

# Create the "modern" document structure expected by the app and link legacy files
# This ensures that /api/v1/documents/filename.pdf works regardless of legacy folder structure
RUN mkdir -p /usr/share/nginx/html/api/v1/documents/csr && \
    find /usr/share/nginx/html/wp-content/uploads -type f \( -name "*.pdf" -o -name "*.docx" -o -name "*.png" \) \
    -exec cp {} /usr/share/nginx/html/api/v1/documents/ \; && \
    find /usr/share/nginx/html/wp-content/uploads -type f \( -name "*.pdf" -o -name "*.docx" -o -name "*.png" \) \
    -exec cp {} /usr/share/nginx/html/api/v1/documents/csr/ \;

# Copy custom Nginx config template for dynamic PORT and SPA routing
COPY nginx-spa.conf.template /etc/nginx/templates/default.conf.template

# Default values for runtime
ENV PORT=80
ENV BACKEND_HOST=backend

CMD ["nginx", "-g", "daemon off;"]
