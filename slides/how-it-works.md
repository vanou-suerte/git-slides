# Comment ça marche ?

--

## Les Zones

1. **Working Directory** (vos fichiers)
2. **Staging Area** (préparation avec `git add`)
3. **Local Repo** (enregistrement avec `git commit`)
4. **Remote Repo** (envoie des modif avec `git push`)

--

## Simple Diagram

![Git Simple](img/git-life-simple.png)

--

<img src="img/git-workflow.png" style="display:block; margin:auto; max-width:80%; max-height:80vh;" />

--

# Commandes Git

--

## 🐣 Prise d'informations

- `git status` affiche le statut, l’état des différentes zones (working tree, index, branche, conflits, etc.)
- `git branch` liste les branches locales (l’étoile `*` affiche la branche de travail)
- `git remote -v` affiche le nom et l’url des repos distants
- `git lg --all` (commande personnalisée voir [ici](#/1/8)) affiche un arbre des commits et des branches

--

## 🐣 Ajout/Suppr dans la staging area

```bash
# Ajouter le fichier test.txt
git add test.txt

# Ajouter le dossier /images
git add /images

# Ajouter tout ce qui est modifié (. est le nom du dossier courant)
git add .

# Ajouter des portions de fichiers
git add -p test.txt
```

git rm pour supprimer

--

## 🐣 Le Commit

```bash
# Ouvre un éditeur pour écrire le message du commit
git commit

# Creé un commit en précisant directement le message (préférable)
git commit -m "Message du commit"
```

Il est maintenant possible de se déplacer dans l’historique avec

```bash
git checkout <id_commit>
```

--

## Recommandations

- Message clair
- Pleins de petits commit plutôt qu'un gros commit
  - Un commit = une modif

--

## 🐣 Push ses modifs

Pour envoyer vos modifications, c’est `git push` en précisant le nom du repository et de votre branche :

```bash
# poussez sur le repo origin, sur la branche main (à vérifier)
git push origin main
```

--

## 🐣 Mettre à jour son repo local

- `git pull <nom_repo> <nom_branche>` récupère la branche distante et tente une fusion avec la branche locale.
- `git fetch <nom_repo> <nom_branche>` ne fait que récupèrer la branche distante. Il faut donc ensuite choisir comment fusionner le code, par exemple avec `git merge` ou `git reset`.

--

<img src="img/git-workflow.png" style="display:block; margin:auto; max-width:80%; max-height:80vh;" />

--

```bash
# Récupère la branche main du repo origin et fusionne avec la branche en local
git pull origin main

# Identique à l’exemple précédent
git fetch origin main
git merge origin/main

# Récupère la branche distante main, mais écrase la branche locale
git fetch origin main
git reset --hard origin/main
```

--

## Fusionner les modifications

Souvent, en mode collaboratif, ou quand le projet ne nous appartient pas, seules quelques personnes ont le droit de mettre à jour la branche principale.

Pour demander l’intégration de nos modifications, nous allons donc passer par une pull request (GitHub) ou merge request (GitLab). Cela se passe directement en ligne. On parle alors de fusion ou de merge.

--

## Conflits

Lorsqu’une fusion est tentée, mais que deux personnes ont modifié une ou plusieurs lignes d’un même fichier, Git crée un conflit. Cela est symbolisé dans le fichier par un formalisme particulier, qui indique les 2 états du fichier à la suite :

```bash
# début du conflit
<<<<<<< HEAD
    # premier état du fichier
=======
    # second état
>>>>>>> nom_branche
# fin du conflit
```

--

Il faut donc faire un choix pour conserver seulement la partie 1 (`HEAD` est la position actuelle), la partie 2 (la nouvelle branche), ou les deux. Puis, supprimer le formalisme (`<<<<<<<`, `=======` et `>>>>>>>`). Et enfin, continuez la fusion en cours (`merge`, `rebase` ou autre).

--

```bash
git fetch origin
git rebase origin/dev

# Git marque les conflits :
# <<<<<<< HEAD       ← votre code
# =======
# >>>>>>> origin/dev ← code distant

# 1. Éditer le fichier
# 2. Stager la résolution
git add fichier_resolu.py
# 3. Continuer
git rebase --continue

# Tout annuler si nécessaire
git rebase --abort
```

## Branches

Les branches Git permettent notamment de **travailler sur plusieurs tâches en simultané**. C’est aussi utile, tout simplement, parce que le projet distant peut évoluer durant notre propre travail local, ou pour simplifier la gestion des conflits.

Pour créer de nouvelles branches, on utilise `git branch <nom_branche>`. Pour se déplacer sur une branche, c’est `git checkout` ou `git switch` (préférable).

--

```bash
# Cree une nouvelle branche
git branch nom_branche

# Se déplace sur une branche
git switch nom_branche

# Crée une branche et se déplace en même temps
git switch -c nom_branche

# Supprime une branche
git branch -d nom_branche

# Lister toutes les branches
git branch -a
```

--

## Merge d'une branche dans main

<img src="img/branches.png" style="display:block; margin:auto; max-width:80%; max-height:80vh;" />

--

## Rebase

<img src="img/rebase.png" style="display:block; margin:auto; max-width:80%; max-height:80vh;" />
