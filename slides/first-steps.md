# C'est quoi Git ?

VCS : 🇬🇧 Version Control System

--

Git est un **un logiciel libre et open-source** créé par **Linus Torvalds** en 2005 pour le noyau Linux

--

## À quoi ça sert ?

- Trace l'**historique complet** de son projet
- Permet de **revenir en arrière** à tout moment
- **Stocker des fichiers ailleurs** que sur votre ordinateur ou une clé USB
- Gère la **collaboration** simultanée

<div class="callout">
💡 <strong>Sans Git :</strong> <code>projet_final_v2_VRAIMENT_FINAL3.py</code>
</div>

--

# First steps

--

## Installation

Git est disponible facilement sur toutes les plateformes. [Télécharger Git](https://git-scm.com/downloads)

Pour vérifier la bonne installation :

```bash
git --version
```

--

## Créer un compte

1. [Création de compte GitHub](https://github.com/signup)
2. [Configurer un _Personnal token classic_](https://docs.github.com/fr/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#cr%C3%A9ation-dun-personal-access-token-classic)
3. Conservez ce token dans un fichier texte temporairement (vous n’y aurez plus accès ensuite).

--

## Configurer son compte

Première chose à faire dans un projet Git, c’est de configurer qui vous êtes :

```bash
git config user.email "votre_adresse_mail"
git config user.name "votre_nom"

# Un flag `--global` permet de définir ce réglage de manière globale,
# pour tous les projets Git de votre machine.
# A ne pas utiliser dans le cas de machines partagées.
```

--

## Configurer le proxy

Si vous êtes sur le réseau de l'école (déjà configuré en salle de cours) :

```bash
git config --global http.proxy http://10.0.4.2:3128
git config --global https.proxy http://10.0.4.2:3128
```

--

## Un meilleur log

Pour avoir moins mal aux yeux et se sentir comme un developpeur professionel :

```bash
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

utilisable plus tard avec :

```bash
git lg --all
```

--

## 💫 Commencer / Récupérer un projet Git 💫

--

### 🧲 Option 1 — Cloner un projet existant depuis GitHub

1. Créez un repo sur GitHub ou GitLab

2. Copier l’URL du dépôt GitHub (HTTPS ou SSH) et cloner le projet :

```bash
git clone https://github.com/votre-nom/mon-projet.git
```

--

### 🏗️ Option 2 — Créer un dépôt local puis le connecter à GitHub

1. Créer un nouveau dossier de projet

2. Initialiser Git dedans

```bash
git init
```

--

3. Ajoute les fichiers pour git

```bash
git add .
git commit -m "Premier commit"
```

4. Créer un dépôt sur GitHub (sans README)

5. Connecter votre dépôt local au dépôt GitHub

```bash
git remote add origin https://github.com/votre-nom/mon-projet.git
```

6. Envoyer le code

```bash
git push -u origin main
```

--

# 🍽️ Fork 🍽️

Un fork est une copie d’un dépôt GitHub dans TON compte GitHub

--

## Pourquoi faire un Fork ?

- Tu n’as pas les droits d’écriture sur le dépôt original
- Tu veux tester des idées sans toucher au projet principal

--

## Comment on fait ?

1. Sur github va sur un dépôt et clique sur le bouton Fork en haut à droite
2. Clone le sur ton ordi en local
3. Vérifie le bon ajout du dépot distant avec

```bash
git remote -v
```
