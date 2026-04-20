# Bonus

### Projet en équipe

--

### Les branches

Branches par rôle

```bash
main : Production · tags v1.0.0
dev : Intégration continue
feature/* : Une par fonctionnalité
hotfix/* : Correctif urgent
```

- **Ne jamais push sur `main`**
- **Toujours créer une branche par fonctionnalité**
- **Mettre sa branche à jour régulièrement**

--

<img src="img/branch_workflow.png" style="display:block; margin:auto; max-width:80%; max-height:80vh;" />

--

### 📝 Conventions de nommage des commits

Structure recommandée :

```bash
<type>: <message court et clair>
```

Exemples :

- `feat: ajout du système de score`
- `fix: correction du déplacement du cavalier`
- `docs: mise à jour du README`

--

## Types de commits les plus courants

- **feat** : ajout d’une nouvelle fonctionnalité
- **fix** : correction d’un bug
- **docs** : documentation uniquement
- **style** : formatage, indentation, espaces (pas de changement de logique)
- **refactor** : amélioration du code sans changement de comportement
- **test** : ajout ou modification de tests
- **chore** : tâches diverses (build, dépendances, config)
- **perf** : amélioration des performances

--

### Exemple de sturcture projet echecs

```bash
projet-echecs/
│
├── src/
│   ├── core/
│   │   ├── board.py
│   │   ├── piece.py
│   │   ├── pieces/
│   │   │   ├── king.py
│   │   │   ├── knight.py
│   │   │   └── pawn.py
│   │   ├── move.py
│   │   └── game.py
│   │
│   ├── gui/
│   │   ├── main_window.py
│   │   ├── board_widget.py
│   │   └── img/
│   │       ├── white_king.png
│   │       └── black_queen.png
│   │
│   ├── utils/
│   │   ├── config.py
│   │   └── helpers.py
│   │
│   └── app.py
│
├── tests/
│   ├── test_board.py
│   ├── test_pieces.py
│   └── test_game.py
│
├── .gitignore
├── requirements.txt
└── README.md
```

--

Git help please

- [OH SHIT GIT](https://ohshitgit.com/)
- [cheat-sheet](https://git-scm.com/cheat-sheet)

--

---

Merci pour votre écoute !

Bon courage à vous ! 😁
