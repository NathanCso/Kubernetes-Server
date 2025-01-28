# Kubernetes-Server
🖥️ Démonstration : Application Node.js & React avec Kubernetes
Ce projet est une démonstration d'une application web simple orchestrée avec Docker et Kubernetes.

Backend : API construite avec Node.js.
Frontend : Interface utilisateur développée avec React.
Orchestration : Déploiement via Kubernetes.
🚨 Note : Ce projet est fourni uniquement à titre indicatif et n'est pas destiné à être utilisé en production.

📂 Structure du Projet
/backend/    -> API Node.js  
/frontend/   -> Interface React  
/kubernetess/        -> Manifests Kubernetes (déploiement et services)  
🚀 Lancer le Projet
🐳 Avec Docker Compose
Construire les images Docker :


docker build -t backend-nodejs ./backend  
docker build -t frontend-react ./frontend  
Démarrer les conteneurs :


docker-compose up --build  
☸️ Avec Kubernetes
Appliquer les fichiers de configuration :


kubectl apply -f k8s/  
Vérifier les déploiements :


kubectl get pods  
📖 À Propos
Ce projet a été conçu dans un but éducatif pour montrer :

La conteneurisation d'applications avec Docker.
Le déploiement et l'orchestration avec Kubernetes.


