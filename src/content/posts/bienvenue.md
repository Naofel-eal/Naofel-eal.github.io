---
title: "Agents IA et architecture logicielle : pourquoi je me lance en freelance"
description: "Un agent IA a livré 70 tickets en un mois pour 500 € d'API. Ce que ça m'a appris sur le rôle de l'architecture, et pourquoi j'en fais mon métier."
pubDatetime: 2026-11-12T09:00:00+01:00
featured: true
draft: false
---

Je m'appelle Naofel, je suis ingénieur logiciel senior, et je me lance en freelance. Ce blog est l'endroit où je vais partager ce que j'apprends sur deux sujets qui, à mon avis, vont de plus en plus de pair : **l'IA agentique** et **l'architecture logicielle**.

## 70 tickets en un mois

À la Digital Factory de TotalEnergies, j'ai conçu **PANDA**, un orchestrateur d'agents IA autonomes. Le principe est simple : un ticket arrive dans Jira, un agent le prend en charge, explore le code, implémente le changement, ouvre la pull request sur GitHub, puis traite les commentaires de revue et les retours métier jusqu'à la validation.

Sur un mois, PANDA a livré **70 tickets pour environ 500 € de coûts d'API**. Il est aujourd'hui utilisé en production par trois équipes.

Mais le chiffre le plus intéressant n'est pas celui-là.

## Ce que les agents m'ont vraiment appris

Les agents ne réussissent pas au hasard. Ils réussissent là où le code est **lisible**, où le métier est **explicite** et où le comportement attendu est **vérifiable**. Ils peinent partout ailleurs.

Autrement dit, un agent n'est jamais meilleur que le contexte qu'on lui donne. Et ce contexte, ce n'est pas seulement un bon prompt :

- **un domaine bien modélisé**, avec un vocabulaire métier partagé (c'est tout l'objet du _Domain-Driven Design_) ;
- **des comportements spécifiés par l'exemple**, sous forme de scénarios qui deviennent des tests (le _Behavior-Driven Development_) ;
- **une architecture qui isole le métier de la technique**, pour que chaque changement ait un endroit évident où vivre (l'architecture hexagonale).

Les pratiques que les artisans du logiciel défendent depuis vingt ans ne deviennent pas obsolètes avec l'IA. Elles deviennent la condition pour qu'elle fonctionne.

## Ce que je propose

C'est exactement à cette intersection que je veux travailler avec mes clients :

- **concevoir et intégrer des agents IA** dans le cycle de développement, avec des garde-fous et un humain dans la boucle ;
- **modéliser et refondre des architectures** pour qu'elles restent maintenables, par des humains comme par des agents ;
- **livrer des produits full-stack** en Java, Spring Boot et Angular ;
- **accompagner les équipes** pour qu'elles montent en compétence sur ces pratiques.

## Ce que vous trouverez ici

- Des retours d'expérience concrets sur les agents IA en production : ce qui marche, ce qui casse, ce que ça coûte.
- Du Domain-Driven Design et du BDD appliqués, loin de la théorie.
- De l'architecture hexagonale avec du vrai code.
- Et quelques réflexions sur la vie de freelance.

Si vous voulez intégrer des agents IA dans votre équipe, ou si votre code a besoin d'une architecture qui tienne la route, [écrivez-moi sur LinkedIn](https://www.linkedin.com/in/naofel-el-alouani-83a947197/).
