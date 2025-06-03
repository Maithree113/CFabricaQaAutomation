FROM mcr.microsoft.com/playwright:v1.44.0-jammy

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the project
COPY . .

# Run Playwright install to download browsers
RUN npx playwright install --with-deps

# Default command
CMD ["npx", "playwright", "test"]