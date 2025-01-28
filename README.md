# Kubernetes-Server
Démonstration : Application Node.js et React avec Kubernetes
Ce projet est une démonstration simple d'une application web composée :

Backend : API créée avec Node.js.
Frontend : Interface utilisateur développée avec React.
Les deux applications sont conteneurisées avec Docker et orchestrées avec Kubernetes.

Structure du Projet
bash
Copier
Modifier
/backend/    -> API Node.js  
/frontend/   -> Interface React  
/k8s/        -> Manifests Kubernetes (déploiement et services)  
Commandes Essentielles
Docker (localement)
Construire les images :

bash
Copier
Modifier
docker build -t backend-nodejs ./backend  
docker build -t frontend-react ./frontend  
Lancer avec Docker Compose :

bash
Copier
Modifier
docker-compose up --build  
Kubernetes (cluster)
Déployer dans Kubernetes :

bash
Copier
Modifier
kubectl apply -f k8s/  
Vérifier les déploiements :

bash
Copier
Modifier
kubectl get pods  
Notes
Ce projet est fourni à titre indicatif et ne vise pas à être utilisé en production.

