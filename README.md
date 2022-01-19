# Meet us

## Description du projet

Meet Us est le projet de groupe sur lequel j'ai travaillé à la fin de la formation. Le projet a duré 1 mois au total : 1 sprint de conception, 2 sprints de développement et 1 sprint de préparation des démo. L'équipe est constituée de 2 autres développeurs front et 2 développeurs back. Pour voir le cahier des charges du projet : https://gravel-dodo-946.notion.site/Meet-Us-e5d8e06aaf9a40fe86d7a005834ff5b6 

Meet Us est une plateforme qui vous permet de rejoindre ou créer un évènement physique ou en ligne. Il vous permet donc d’avoir de nouvelles activités, de rencontrer de nouvelles personnes ou bien de proposer votre activité favorite à d’autres. 

Le front a été développé en react et consomme une api rest développée par les équipes back en Symfony. Il y a aussi un backoffice qui permet d’administrer le site, développé avec Bootstrap et le moteur de templates Twig. 

Pour cadrer le périmètre de la V1, on a choisi de travailler à partir de personae. C'est-à-dire des utilisateurs qui pourraient utiliser MeetUs au quotidien. 

J'ai présenté le projet lors des démo, pour voir le replay c'est par ici : https://youtu.be/z_X-bUQtqlo?t=2065 

Pour voir le projet en live : https://meet-us.surge.sh/ 

## Spécifications techniques (du front)

Meet Us a été développée en ReactJs. 
Utilisation de certaines librairies : redux, typescript, mui, react-router-dom, classnames, react-feather, axios, sass, geocode, formik


## Apprentissages du projet

Ce projet a été très formateur pour moi, notamment car nous étions 5 à travailler sur ce projet. J'ai pu mettre à profit mes compétences de Product Manager pour cadrer le périmètre du projet. 
- Communication : J'ai pu voir l'importance de la communication entre les développeurs, s'accorder sur des conventions parait essentiel pour faire évoluer le projet dans le temps. Par ailleurs, la communication entre le front et le back est également primordiale. Grâce à notre communication, l'équipe back a pu nous proposer des requêtes personnalisées pour nos pages en front. 
- Choix technologiques : Le temps nous manquait mais avec le recul j'aurai aimé qu'on prenne davantage le temps de choisir les bibliothèques et librairies. En effet, nous avons utilisé Formik pour gérer nos formulaires. Ca nous a permis de gagner du temps dans les validations et la gestion du state, mais ça nous en a fait perdre à certains moments car la documentation n'était pas toujours à jour et nous avons eu du mal à coupler Formik avec la géolocalisation. 
- Organisation : Nous avons commencé à utilser les routes en GET, ce qui nous a permis d'avoir des choses à montrer dès le premier sprint de développement. Cependant, les routes en POST étaient plus importantes car elles permettaient notamment d'identifier les utilisateurs, et donc de dynamiser nos affichages en fonction de l'utilisateur (organisateur, inscrit, connecté ou non...). 


## Evolutions potentielles du projet
- Améliorer l'UX (lien de redirection, messages utilisateur, mail de confirmation, rappel, loading à homogéneiser)
- Proposer plus de filtres sur la liste des évènements 
- Permettre l'édition de profil
- Proposer les commentaires sur les évènements
- Pouvoir mettre des évènements en favoris
