# Site Entreprise Felicioni

Site vitrine statique (HTML/CSS/JS, zéro dépendance, zéro build).

- **En ligne (démo)** : https://znk-v.github.io/felicioni/ — dépôt `zNk-v/felicioni`
- **Domaine cible** : entreprise-felicioni.com (à brancher — voir plus bas)

## Arborescence

```
felicioni/
├── index.html                     Page principale (9 sections)
├── mentions-legales.html
├── politique-confidentialite.html
├── css/styles.css                 Feuille de style unique (tokens en variables CSS)
├── js/main.js                     Menu, scroll-reveal, comparateur, lightbox, formulaire
├── fonts/                         Archivo + IBM Plex Sans (woff2 auto-hébergés)
├── img/                           Images responsives (WebP + fallback JPG, 480/960…)
│   └── brand/                     Logo, favicons, image Open Graph
├── favicon.ico  robots.txt  sitemap.xml  site.webmanifest
├── assets-source/                 Photos & logo d'origine (NON déployés — sources de travail)
├── PHOTOS.md  DESIGN.md           Documentation de conception
└── README.md
```

> **À déployer** : tout sauf `assets-source/`, `PHOTOS.md`, `DESIGN.md`, `README.md`, `.claude/`.

## Déploiement (Hostinger / FTP)

1. Uploader le contenu du dossier (hors `assets-source/`) à la racine `public_html/`.
2. Vérifier que le domaine pointe bien dessus. Les chemins sont **absolus** (`/css/…`) : le site doit être servi depuis la **racine** du domaine.
3. Forcer le HTTPS.

Test en local : `python3 -m http.server 8787` dans le dossier, puis http://localhost:8787.

## Modifier les textes

Tout est en clair dans `index.html`. Les couleurs, tailles et espacements sont centralisés en variables CSS en haut de `css/styles.css` (`:root`).

## Remplacer / ajouter des photos

1. Déposer l'original dans `assets-source/`.
2. Générer les tailles responsives (script utilisé, nécessite Python + Pillow) :
   ```python
   from PIL import Image, ImageOps
   im = ImageOps.exif_transpose(Image.open("assets-source/MON-IMAGE.jpg")).convert("RGB")
   for w in (480, 960):
       h = round(im.height*w/im.width)
       r = im.resize((w, h), Image.LANCZOS)
       r.save(f"img/NOM-{w}.webp", "WEBP", quality=82, method=6)
       r.convert("RGB").save(f"img/NOM-{w}.jpg", "JPEG", quality=80, progressive=True, optimize=True)
   ```
3. Mettre à jour le `<picture>` correspondant dans `index.html` (srcset + `width`/`height`).

## Comparateur Avant / Après

- Un comparateur par chantier, dans un `.ba__panel` avec son onglet `.ba__tab` (attribut `data-panel` = `id` du panneau).
- Les deux images (`.compare__before` / `.compare__after`) doivent avoir **exactement les mêmes dimensions** et être prises **du même point de vue**, sinon l'effet est illisible.
- Pour ajouter un chantier : dupliquer le bloc `.ba__panel`, lui donner un nouvel `id`, ajouter l'onglet correspondant, mettre les images `avant-XXX` / `apres-XXX`.

Le comparateur utilise une **vraie paire alignée** fournie par le client (pelouse d'origine → terrasse carrelée terminée). Pour ajouter d'autres chantiers, dupliquer le bloc `.ba__panel` + l'onglet.

## Brancher le formulaire (Formspree)

1. Créer un formulaire gratuit sur https://formspree.io (associé à l'e-mail qui doit recevoir les demandes).
2. Récupérer l'ID (`https://formspree.io/f/XXXXXXX`).
3. Dans `index.html`, remplacer `[FORMSPREE_ID]` dans `action="https://formspree.io/f/[FORMSPREE_ID]"`.
   Tant que ce n'est pas fait, le formulaire renvoie un message invitant à appeler.
- Anti-spam : honeypot `_gotcha` déjà en place.

---

## ✅ Checklist des [À COMPLÉTER] avant mise en ligne

| Où | Quoi |
|----|------|
| `index.html` | `[FORMSPREE_ID]` → ID Formspree réel |
| `index.html` (section Avis) | `[LIEN_FICHE_GOOGLE]` → URL de la fiche Google Business |
| `mentions-legales.html` | Forme juridique, **SIRET**, TVA, directeur de publication |
| `mentions-legales.html` | Assurance décennale : **assureur + n° de contrat** |
| `mentions-legales.html` | **Hébergeur** (nom, adresse, téléphone) |
| `politique-confidentialite.html` | Nom du prestataire de formulaire + e-mail de contact RGPD |
| Global | Confirmer le domaine (`entreprise-felicioni.com`) dans `canonical`, `og:url`, `sitemap.xml`, `robots.txt` |
| `img/brand/og.jpg` | (optionnel) visuel Open Graph dédié si souhaité |

## Données de l'entreprise (intégrées)

- **Nom** : Entreprise Felicioni · **Tél** : 06 87 81 45 85
- **Adresse** : 2 Impasse du Chasselas, 31170 Tournefeuille
- **Horaires** : Lun–Ven 8h–18h · fermé sam/dim
- **Note** : 5,0 / 5 sur 18 avis Google (JSON-LD + hero)
- **Zone** : Tournefeuille, Colomiers, Plaisance-du-Touch, Cugnaux, Blagnac, Toulouse ouest + limitrophes
