# PHOTOS.md — Inventaire photos Entreprise Felicioni

Source : `~/Desktop/Site internet client/Entreprise Felicioni /` — 11 fichiers WebP.
Toutes les photos sont en **orientation portrait** (prises au smartphone). Aucune image large paysage exploitable en hero plein cadre → voir §Hero.

## Tableau

| # | fichier | contenu | usage recommandé | qualité |
|---|---------|---------|------------------|---------|
| 1 | `Contour de piscine .webp` (680×1020) | Terrasse bois en rooftop + mini-piscine, éclairage LED encastré dans les marches, chaises Adirondack, coucher de soleil sur toits de tuiles. Rendu **photographie professionnelle**. | Hero (montage split) + section signature extérieur | **A+** ⚠️ à confirmer |
| 2 | `unnamed.webp` (574×1020) | Salle de bain **APRÈS** : marbre gris anthracite, double vasque, douche à l'italienne, réglettes LED. Watermark « Après » + URL + logo incrustés. | Prestation salle de bain / galerie | A (recadrer le watermark) |
| 3 | `unnamed (1).webp` (470×1020) | Salle de bain terminée, blanche : baignoire, double vasque bois blanc, frise mosaïque verticale, sol gris. | Prestation salle de bain / galerie | B+ (capture écran, bandes noires) |
| 4 | `unnamed (2).webp` (818×1020) | Composite AVANT/APRÈS d'une **terrasse extérieure** (carrelage terracotta usé → grand format gris). Texte « AVANT / APRES » + flèche incrustés. | Galerie uniquement (preuve avant/après) | B |
| 5 | `unnamed (3).webp` (765×1020) | Intérieur de **villa rénovée** : poutres bois apparentes, parquet chêne massif, enduit taloché blanc, enfilade lumineuse vers le séjour. | **Hero (candidat n°2)** / galerie villa | **A** |
| 6 | `unnamed (4).webp` (765×1020) | Façade pignon **ravalée** (enduit blanc + brique), balcon fer forgé, ouvrier au travail. Haie au premier plan. | Galerie ravalement / façade | B (haie envahissante) |
| 7 | `unnamed (5).webp` (574×1020) | Arrière de maison : **dalle béton nue** de future terrasse en préparation, outils au sol (coupe-carreau). | Galerie / section Méthode (chantier en cours) | B |
| 8 | `unnamed (6).webp` (765×1020) | **Cuisine en cours de rénovation** : meubles gris, plan noir, crédence bleu canard en dépose (traces d'enduit). Bâche de protection au sol. | Galerie / section Méthode | B |
| 9 | `unnamed (7).webp` (765×1020) | Grande **villa moderne** 2 niveaux, toit-terrasse, grandes baies, ouvrier sur échelle, piscine bâchée. Ciel bleu. | Galerie villa / échelle des chantiers | B+ |
| 10 | `unnamed (8).webp` (765×1020) | Piscine + **contour béton neuf** fraîchement coulé, coucher de soleil, arbres nus. | Galerie extérieur / contour piscine | A− |
| 11 | `unnamed (9).webp` (765×1020) | Douche à l'italienne **en cours de carrelage** : faïence marbre blanc (croisillons bleus visibles), sol marbre noir veiné, banc + niche maçonnés. | Prestation carrelage & faïence / matérialité | A− |

## §Paires AVANT / APRÈS alignables

**Aucune paire strictement alignable disponible.** Critères non remplis (même point de vue, même focale, même hauteur, même cadrage) :

- La #4 est un composite déjà monté, deux angles différents + texte incrusté → illisible en comparateur à poignée.
- Les #7 (dalle béton), #8 (cuisine dépose), #11 (douche en cours) sont des états « avant/pendant », mais **aucune photo « après » du même point de vue** ne les accompagne.
- Les « après » qu'on a (#2, #3) n'ont **pas de « avant » cadré pareil**.

**Conséquence (conforme à ta consigne) :** je ne fabrique rien. Je construis le comparateur avant/après avec des **placeholders nommés** (`avant-salle-de-bain.jpg` / `apres-salle-de-bain.jpg`, etc.) aux bonnes dimensions, je le signale dans le README, et je prévois un **repli galerie** si les paires n'arrivent pas. → Il me faut, pour au moins 1 chantier, **2 photos prises du même endroit** (trépied ou même position), avant travaux puis après.

## §Hero — pas de grande image paysage

Toutes les photos sont verticales. Solution retenue : **hero « split » asymétrique** (panneau texte + colonne image verticale), qui met en valeur une photo portrait sans l'étirer et sans dépendre d'une image large.
- Image hero recommandée : **#1 (Contour de piscine)** pour la matérialité (bois, chaleur, toits du Sud-Ouest) — **sous réserve** (voir alerte).
- Repli si #1 écartée : **#5 (intérieur villa poutres/parquet)**, qui dit « artisan sérieux, villa haut de gamme ».

## ⚠️ À vérifier / me confirmer

1. **`Contour de piscine .webp` (#1)** : qualité nettement supérieure aux autres (photo pro, pas un snapshot chantier). **Confirme-moi que c'est bien une réalisation Felicioni** avant que je l'utilise en hero. Sinon je bascule sur #5.
2. **Logo** : le seul logo dispo est incrusté en bas de la #2 (« ENTREPRISE FELICIONI » rouge + toit), basse résolution. Le fichier isolé `135343440_...n.jpg` est un monogramme « VA » noir/blanc **qui n'est pas le logo Felicioni** — je l'écarte. Envoie-moi le **logo en PNG/SVG haute définition**.
3. **Watermark #2** : je recadre pour retirer « Après » + URL + logo, ou tu me fournis la version sans watermark.
4. Toutes seront **ré-encodées WebP + fallback JPG**, largeurs 480/960/1600, `srcset`/`sizes`, `loading="lazy"` (sauf hero), `width`/`height` explicites.

---

**Bilan : 8 photos exploitables** (A/A−/B+ : #1, #2, #3, #5, #9, #10, #7, #11) + 3 en appoint méthode/galerie (#4, #6, #8... on tourne autour de 10 utilisables selon usage). Assez pour un site crédible. Le seul vrai manque = **une vraie paire avant/après alignée** pour la section signature.
