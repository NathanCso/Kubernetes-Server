# Kubernetes-Server
🖥️ Démonstration : Application Node.js & React avec Kubernetes
Ce projet est une démonstration d'une application web simple orchestrée avec Docker et Kubernetes.

Backend : API construite avec Node.js.
Frontend : Interface utilisateur développée avec React.
Orchestration : Déploiement via Kubernetes.
🚨 Note : Ce projet est fourni uniquement à titre indicatif et n'est pas destiné à être utilisé en production.

📂 Structure du Projet
bash
Copier
Modifier
/backend/    -> API Node.js  
/frontend/   -> Interface React  
/k8s/        -> Manifests Kubernetes (déploiement et services)  
🚀 Lancer le Projet
🐳 Avec Docker Compose
Construire les images Docker :

bash
Copier
Modifier
docker build -t backend-nodejs ./backend  
docker build -t frontend-react ./frontend  
Démarrer les conteneurs :

bash
Copier
Modifier
docker-compose up --build  
☸️ Avec Kubernetes
Appliquer les fichiers de configuration :

bash
Copier
Modifier
kubectl apply -f k8s/  
Vérifier les déploiements :

bash
Copier
Modifier
kubectl get pods  
📖 À Propos
Ce projet a été conçu dans un but éducatif pour montrer :

La conteneurisation d'applications avec Docker.
Le déploiement et l'orchestration avec Kubernetes.


