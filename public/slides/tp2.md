# TP2

## Commencement ++

--

## Une Personne de la Team :

(Différente du tp1)

1. faites un _fork_ du projet commun :
   - GitHub [https://github.com/iamvdo/git-ensg](https://github.com/iamvdo/git-ensg)

--

## Toute la Team

1. clonez ce repo
2. Ouvrir le projet dans vscode

```bash
cd projet
code .
```

3. (remarquez le dossier caché `.git`)

--

Ce site utilise mkdocs pour fonctionner, nous allons donc en avoir besoin en local :

4. installez mkdocs avec

```bash
pip install mkdocs
```

5.  dans le dossier du projet, lancez la commande

```bash
mkdocs serve
```

6. dans un navigateur, allez à l’URL

```bash
http://locahost:8000
```

--

Voir le [fonctionnement](#how-it-works) de git avant de poursuivre...

--

## Toute la Team

- dans le dossier `/docs`, créez un nouveau fichier `<nom_prenom>.md`
- ajoutez votre nom/prenom en titre et votre date de naissance en texte (accès à la [documentation Markdown](https://www.markdownguide.org/cheat-sheet/))
- visualisez le résultat à l’URL `http://localhost:8000/<nom_prenom>`
- enregistrez vos modifications dans Git (`git add`, `git commit`)
- ajoutez une image depuis internet
- enregistrez vos modifications dans Git (`git add`, `git commit`)
- poussez sur votre repo distant
- récupérez les modifications avec `git pull`

--

## [Pull Request](#/2/13)

--

## Les autres de la Team :

- créez une _pull request_ sur le repo officiel (sélectionnez les bons projets/branches)
- attendez que toutes les _pull requests_ soit fusionnées
- récupérez les modifications de tous les participants avec `git pull`
- visualisez l’arbre des commits avec `git lg --all`

--

## Toute la Team

- ajoutez un lien vers votre page dans mkdocs.yml (clé nav), à la suite du lien vers la page d’accueil

```bash
nav:
    - Git ENSG: index.md
    - Ma Page: <nom_prenom>.md
```

- poussez sur votre repo et récupérez les autres modifications

--

## 💥 [Conflits](#/2/14) 💥

--

Notre problème actuel : nous avons modifié notre projet local (ajout des liens), mais le repo distant a été modifié également. Nous n’avions pas de branche spécifique. Les 2 branches `main` ont donc divergées. Il nous faudrait donc écraser la branche `main`, mais nous risquons de perdre notre travail. Pour résoudre ce «problème», en local :

--

- créez une branche là où vous êtes, mais en restant sur la branche `main` (`git branch <nom_branche>`)
- récupérez la branche `main` distante (`git fetch origin`) et réinitialisez la branche `main` locale par rapport à cette branche (`git reset --hard origin/main`)
- déplacez-vous sur votre branche (`git switch <nom_branche>`)
- rebasez sur la branche main (`git rebase main`)

--

Ensuite, cela dépend de ce que vous souhaitez faire :

- vérifiez votre travail avec `git lg --all`
- poussez vos modifications
- créez une _pull request_
- supprimez vos branches inutiles
