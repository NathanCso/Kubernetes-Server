# Image officielle Node.js comme base
FROM node:16
WORKDIR /usr/src/app

# Copie de package.json et installation des dépendances
COPY package*.json ./
RUN npm install

# code source de l'application
COPY . .
EXPOSE 5000

# Démarrer l'application
CMD ["node", "app.js"]
