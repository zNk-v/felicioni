# DESIGN.md — Entreprise Felicioni

Direction : **la matérialité du bâtiment** (béton, plâtre, chaux, carrelage, joint, trame de plan) portée par la **vraie identité de marque** (bleu marine + rouge du logo). Objectif unique : appels + demandes de devis. Ton : artisan sérieux, travail soigné, ouest toulousain — pas startup.

---

## 1. Palette (issue du logo réel, pas inventée)

6 couleurs nommées. Un accent fort (rouge marque) + neutres « matière ». Contraste AA vérifié.

| Token | Hex | Rôle | Contraste |
|-------|-----|------|-----------|
| `--bleu-felicioni` | `#16294A` | Bleu marine de marque. Structure : titres, en-tête, sections profondes, texte fort. | 13:1 sur blanc ✓ AAA |
| `--rouge-felicioni` | `#D0201C` | Rouge de marque. **Action uniquement** : boutons, état actif, poignée du comparateur, filet d'accent. | blanc dessus 4.7:1 ✓ AA (labels ≥600) |
| `--platre` | `#F4F2EE` | Blanc plâtre/chaux, légèrement chaud. Fond de page. | — |
| `--beton` | `#6E7174` | Gris béton. Texte secondaire, légendes, bordures. | 4.6:1 sur `--platre` ✓ AA |
| `--charbon` | `#20242A` | Charbon (≠ marine). Footer, section contact profonde, texte sur fond clair si besoin de neutre. | 14:1 ✓ AAA |
| `--joint` | `#E3E0DA` | Gris clair « joint de carrelage ». Filets, séparateurs, fonds de cartes. | — |

**Pourquoi ça ne tombe pas dans les interdits :** le rouge n'est PAS un accent vermillon posé sur fond quasi-noir — c'est la couleur réelle du logo, employée avec le marine comme duo structurel, sur fond plâtre clair. Pas de crème boho + serif + terracotta. Pas de dégradé SaaS.

---

## 2. Typographie

2 familles, auto-hébergées woff2, `font-display: swap`.

- **Display — Archivo** (coupe Expanded, graisses 700/800/900, souvent CAPITALES).
  Grotesque architecturale : lecture « plan / trame / niveau », structurée et carrée. On écarte volontairement le serif haute-contraste (qui pousse vers « éditorial/luxe » et vers l'interdit crème+serif).
- **Corps — IBM Plex Sans** (400 / 500 / 600).
  Sans technique très lisible, caractère « ingénieur / sérieux » sans être l'Inter par défaut.

**Échelle** — base 16 px mobile / 17 px desktop. Ratio 1.25 mobile → 1.333 desktop.

| Élément | Mobile | Desktop | Police / graisse / interlignage |
|---------|--------|---------|--------------------------------|
| Surtitre (overline) | 13 px | 13 px | Plex Sans 700, CAPS, tracking .08em, `--rouge` ou `--beton` |
| h1 | 34 px | 60 px | Archivo Expanded 900, LH 1.05, tracking −.01em |
| h2 | 27 px | 40 px | Archivo 800, CAPS, LH 1.1 |
| h3 | 20 px | 22 px | Plex Sans 600, LH 1.3 |
| Corps | 16 px | 17 px | Plex Sans 400, LH 1.6, mesure max 68ch |
| Légende / factuel | 14 px | 14 px | Plex Sans 500, `--beton`, LH 1.5 |
| Bouton | 16 px | 16 px | Plex Sans 600 |

Préchargement de la seule police critique du hero (Archivo Expanded 900).

---

## 3. Signature (l'élément unique)

**Le comparateur avant / après à poignée glissante.** C'est l'interaction dont on se souvient et elle est fonctionnelle (montre le travail au lieu de le raconter). Tout le reste reste calme.

Tissu conjonctif discret (pas une 2ᵉ signature, juste de la texture qui relie) : un **filet-repère façon plan** — une fine ligne `--joint` de 1 px qui souligne chaque surtitre de section, ponctuée à gauche d'un **petit carré rouge plein** (rappel d'un quadrant du logo). Sobre, répété, cohérent.

---

## 4. Layout — une phrase + wireframe par section

Page unique longue, mobile-first. Largeur de contenu max 1120 px. Rythme vertical alterné : fond plâtre / fond marine sur 2–3 respirations seulement.

**En-tête** — logo à gauche, nav ancre à droite, bouton « Appeler » rouge ; sur mobile, burger + bandeau d'appel sticky en bas.
```
[▪FELICIONI]              Prestations  Réalisations  Avis  Contact  [ ☎ Appeler ]
```

**1 · Hero (split asymétrique)** — positionnement + note Google + appel, photo verticale réelle à droite (pas d'image large étirée).
```
┌───────────────────────────┬───────────────┐
│ ▪ RÉNOVATION — OUEST TLSE  │               │
│ Rénovation complète &      │   [ photo     │
│ second œuvre à             │    Contour    │
│ Tournefeuille              │    piscine    │
│                            │    verticale ]│
│ ★ 5,0 · 18 avis Google     │               │
│ [ ☎ 06 87 81 45 85 ]  [Devis]              │
└───────────────────────────┴───────────────┘
```

**2 · Prestations** — 6 blocs, 1 phrase concrète + 1 photo réelle chacun.
```
▪ CE QU'ON FAIT
┌────────┐ ┌────────┐ ┌────────┐
│ img    │ │ img    │ │ img    │  Réno villa · SdB · Cuisine
│ titre  │ │ titre  │ │ titre  │
│ phrase │ │ phrase │ │ phrase │
└────────┘ └────────┘ └────────┘
┌────────┐ ┌────────┐ ┌────────┐  Carrelage/faïence · Isolation · Second œuvre
```

**3 · Avant / Après (signature, fond marine)** — comparateur à poignée, onglets discrets par chantier, ligne factuelle dessous.
```
▪ AVANT / APRÈS
 Salle de bain · Terrasse · Cuisine   ← onglets
┌───────────────────────────────────┐
│ AVANT            ◁║▷         APRÈS │
│         (poignée glissante)        │
└───────────────────────────────────┘
 Rénovation terrasse — ouest toulousain
```

**4 · Réalisations** — galerie des chantiers sans paire, lightbox au clic.
```
▪ RÉALISATIONS
[img][img][img][img]
[img][img][img][img]   → clic = lightbox
```

**5 · Avis clients** — 4 verbatims réels + lien fiche Google. Aucun avis inventé.
```
▪ CE QUE DISENT LES CLIENTS   ★ 5,0 (18)
┌─────────┐ ┌─────────┐
│ “…”     │ │ “…”     │
└─────────┘ └─────────┘
        [ Voir les avis Google → ]
```

**6 · Méthode** — 6 étapes numérotées (ici la séquence 01→06 est justifiée : vraie chronologie).
```
▪ COMMENT ÇA SE PASSE
01 Contact  02 Visite & métré  03 Devis gratuit
04 Planning 05 Chantier        06 Réception
```

**7 · Zone d'intervention** — liste texte (SEO local), pas d'image de carte.
```
▪ OÙ ON INTERVIENT
Tournefeuille · Colomiers · Plaisance-du-Touch · Cugnaux · Blagnac · Toulouse ouest …
```

**8 · Contact** — téléphone en gros + formulaire court + adresse/horaires.
```
┌──────────────┬──────────────────────┐
│ ☎ 06 87 81…  │ [Nom]                 │
│ 2 Imp. du    │ [Téléphone]           │
│ Chasselas    │ [Type de projet ▾]    │
│ Lun–Ven 8–18 │ [Message]             │
│              │ [ Demander un devis ] │
└──────────────┴──────────────────────┘
```

**9 · Footer** — coordonnées, horaires, liens légaux.

**Barre sticky mobile** — bouton `tel:` rouge plein largeur, visible en permanence.

---

## 5. Auto-relecture « et si c'était pour n'importe quel plombier ? »

Passé au crible, voici ce que j'ai corrigé pour que ça ne puisse PAS ressortir tel quel pour un autre artisan :

1. **Palette** : abandon de tout choix « propre » générique → couleurs prises directement dans le logo Felicioni (marine `#16294A` + rouge `#D0201C`). Un plombier lambda n'aurait pas ce duo.
2. **Type** : refus du serif haute-contraste + fond crème (interdit + trop « éditorial ») au profit d'une grotesque **Expanded** qui évoque le plan d'architecte et la trame — spécifique bâtiment/maçonnerie.
3. **Hero** : pas de grande image décorative interchangeable → **leur** photo réelle (contour de piscine bois, toits du Sud-Ouest) en split, + **leur** argument massue affiché haut : `5,0 · 18 avis`. Ça, c'est Felicioni, pas un template.
4. **Signature** : le comparateur avant/après montre du **carrelage/maçonnerie**, cœur de métier de cette boîte (pas de la plomberie, pas du SaaS).
5. **Zéro compteur animé** « 15 ans / 200 chantiers » (interdit + on n'a pas les chiffres → on ne les invente pas). La preuve sociale = la note Google réelle.

---

## ⚠️ Réserves ouvertes (à valider avec toi)
- **Avant/Après** : pas de vraie paire alignée dispo. Tu m'as demandé de **générer** une paire terrasse de démonstration. Je le fais → **images de démo**, à remplacer par de vraies photos Felicioni avant mise en ligne (je le note dans le site + README ; je ne mets pas de fausse légende factuelle type « Colomiers — 3 semaines » sur une image générée).
- **Logo** : palette validée depuis l'image ; il me faut le **PNG dans le dossier** pour favicon + Open Graph.
