<template>
    <div>
        <main class="container mx-auto p-8">
            <section class="mb-8 flex flex-col gap-4">
                <h1 class="text-antisecondary text-2xl font-bold pb-3">Projets</h1>
                <div
                    class="bg-antisecondary text-secondary p-6 rounded shadow-md hover:shadow-lg transition-transform duration-300">
                    <h3 class="text-xl font-bold mb-2 flex items-center">Kanta App
                        <div class="pl-2 flex flex-wrap gap-2">
                            <Badge :name="'Kanta'" />
                            <Badge :name="'Privé'" />
                        </div>
                    </h3>
                    <p class="text-secondary text-justify"><span class="ml-9" />Saas constitué de deux projets en un : un
                        front-end <b><font-awesome-icon :icon="['fab', 'vuejs']" style="color: #36d339;" /> Vue -
                            <font-awesome-icon :icon="['fab', 'js']" style="color: #FFD43B;" /> JS</b> et un
                        back-end <b><font-awesome-icon :icon="['fab', 'php']" style="color: #74C0FC;" /> PHP -
                            <font-awesome-icon :icon="['fab', 'laravel']" style="color: #ea4f34;" /> Laravel</b>,
                        une CICD et quelques packages
                        maison. C'est le projet sur lequel j'ai le plus travaillé (2 ans) et sur lequel j'ai effectué le
                        plus de
                        tâches différentes : développement, tests automatisés, déploiement, maintenance, etc.</p>
                </div>
                <div
                    class="bg-antisecondary text-secondary p-6 rounded shadow-md hover:shadow-lg transition-transform duration-300">
                    <h3 class="text-xl font-bold mb-2 flex items-center">Basique
                        <div class="pl-2 flex flex-wrap gap-2">
                            <Badge :name="'Kanta'" />
                            <Badge :name="'Privé'" />
                        </div>
                    </h3>
                    <p class="text-secondary text-justify"><span class="ml-9" />API interne destinée à alimenter l'app en
                        agrégeant d'autres API publiques. Construit en <b><font-awesome-icon :icon="['fab', 'php']"
                                style="color: #74C0FC;" /> PHP - <font-awesome-icon :icon="['fab', 'laravel']"
                                style="color: #ea4f34;" /> Laravel</b>. J'ai travaillé sur des tâches
                        de développement mais aussi de conception, d'architecture et des problématiques liées à des gros
                        volumes de datas et leur traitement.</p>
                </div>
                <div
                    class="bg-antisecondary text-secondary p-6 rounded shadow-md hover:shadow-lg transition-transform duration-300">
                    <h3 class="text-xl font-bold mb-2 flex items-center">QuerySpray
                        <div class="pl-2 flex flex-wrap gap-2">
                            <Badge :name="'Kanta'" />
                            <Badge :name="'Privé'" />
                            <Badge :name="'Publique'" />
                        </div>
                    </h3>
                    <p class="text-secondary text-justify"><span class="ml-9" />Software écrit en <b><font-awesome-icon
                                :icon="['fab', 'golang']" style="color: #4ec9fd;" /> Go</b>, prévu pour
                        consommer de manière correcte et efficace
                        des API défectueuses et/ou instables. J'ai développé cette
                        première version entièrement.
                        <br>
                        <span class="ml-9" />J'ai aussi travaillé sur une variante packagé serverless, exploité en PHP
                        directement via le
                        shell_exec. J'ai maintenu le projet sur plusieurs versions, utilisées en production.
                        <br>
                        <span class="ml-9" />Par la suite j'ai migré le projet sur <b><font-awesome-icon
                                :icon="['fab', 'rust']" style="color: #de9517;" /> Rust</b> pour alléger les
                        problématiques de
                        cross-compilation et
                        de dépendances grace à Cargo (dev sur mac et prod sur linux).
                    </p>
                </div>
                <div
                    class="bg-antisecondary text-secondary p-6 rounded shadow-md hover:shadow-lg transition-transform duration-300">
                    <h3 class="text-xl font-bold mb-2 flex items-center">Throttle Responder
                        <div class="pl-2 flex flex-wrap gap-2">
                            <Badge :name="'Kanta'" />
                            <Badge :name="'Privé'" />
                            <Badge :name="'Publique'" />
                        </div>
                    </h3>
                    <p class="text-secondary text-justify"><span class="ml-9" />Software très simple écrit en<nuxt-icon
                            filled name="python" /><b>python</b>,
                        prévu avec
                        quelques autres utilitaires pour tester l'efficacité de QuerySpray. J'ai développé le projet
                        entièrement.
                        <br>
                        <span class="ml-9" />Le projet a connu de nombreuses versions. Il consiste essentiellement en un
                        serveur <b>flask</b> qui
                        permet de mesurer les temps de réponse des requêtes envoyées par QuerySpray.
                    </p>
                </div>
                <div
                    class="bg-antisecondary text-secondary p-6 rounded shadow-md hover:shadow-lg transition-transform duration-300">
                    <h3 class="text-xl font-bold mb-2 flex items-center">Portfolio
                        <div class="pl-2 flex flex-wrap gap-2">
                            <Badge :name="'perso'" />
                            <Badge :name="'Publique'" />
                        </div>
                    </h3>
                    <p class="text-secondary text-justify"><span class="ml-9" />Petite page perso
                        statique construite
                        avec<nuxt-icon filled name="nuxt" /><b>Nuxt</b>,<nuxt-icon filled name="tailwind" /><b>Tailwind</b>,
                        et hébergée
                        sur <font-awesome-icon :icon="['fab', 'github']" />
                        <b> github pages</b>. Le code source est disponible sur <font-awesome-icon
                            :icon="['fab', 'github']" />
                        <NuxtLink class="italic font-bold" to="https://github.com/U-Louis/U-Louis.github.io"> github.
                        </NuxtLink>
                    </p>
                </div>
                <div
                    class="bg-antisecondary text-secondary p-6 rounded shadow-md hover:shadow-lg transition-transform duration-300">
                    <h3 class="text-xl font-bold mb-2 flex items-center">CRM-Jurés
                        <div class="pl-2 flex flex-wrap gap-2">
                            <Badge :name="'Afpa'" />
                            <Badge :name="'Privé'" />
                        </div>
                    </h3>
                    <p class="text-secondary text-justify"><span class="ml-9" />Dernier projet de fin de formation (en
                        binôme). C'est un
                        CRM simple, réalisé en <b><font-awesome-icon :icon="['fab', 'php']" style="color: #74C0FC;" /> PHP -
                            <font-awesome-icon :icon="['fab', 'symfony']" style="color: #000000;" /> Symfony</b>,
                        <b><font-awesome-icon :icon="['fab', 'html5']" style="color: #ff6929;" /> HTML </b>et
                        <b><font-awesome-icon :icon="['fab', 'js']" style="color: #FFD43B;" /> JS natifs</b> avec des
                        composants
                        <b><font-awesome-icon :icon="['fab', 'bootstrap']" style="color: #8f6cf9;" /> Bootstrap</b>.
                    </p>
                </div>
                <div
                    class="bg-antisecondary text-secondary p-6 rounded shadow-md hover:shadow-lg transition-transform duration-300">
                    <h3 class="text-xl font-bold mb-2 flex items-center">RRR
                        <div class="pl-2 flex flex-wrap gap-2">
                            <Badge :name="'Afpa'" />
                            <Badge :name="'Publique'" />
                        </div>
                    </h3>
                    <p class="text-secondary text-justify"><span class="ml-9" />Projet de fin du module développement mobile
                        (en solo).
                        C'est un
                        exercice d'adaptation du jeu de société <NuxtLink class="italic font-bold"
                            to="https://www.igiari.com/accueil/rrr/">RRR</NuxtLink> en version mobile
                        android, développé en <nuxt-icon filled name="java" /><b>Java</b> avec <b><font-awesome-icon
                                :icon="['fab', 'android']" style="color: #5bb53b;" /> Android Studio</b>. Le code source est
                        disponible sur <font-awesome-icon :icon="['fab', 'github']" />
                        <NuxtLink class="italic font-bold" to="https://github.com/U-Louis/dev-Android"> github</NuxtLink>
                        avec les différents exercices réalisés.
                    </p>
                </div>
                <div
                    class="bg-antisecondary text-secondary p-6 rounded shadow-md hover:shadow-lg transition-transform duration-300">
                    <h3 class="text-xl font-bold mb-2 flex items-center">BDTK
                        <div class="pl-2 flex flex-wrap gap-2">
                            <Badge :name="'Afpa'" />
                            <Badge :name="'Privé'" />
                        </div>
                    </h3>
                    <p class="text-secondary text-justify"><span class="ml-9" />Premier projet de fin de formation (j'étais
                        lead d'une équipe de 6). C'est un
                        logiciel de gestion d'une base de donnée de BD, très simple, réalisé en <b><font-awesome-icon
                                :icon="['fab', 'php']" style="color: #74C0FC;" /> PHP</b>, <b><font-awesome-icon
                                :icon="['fab', 'html5']" style="color: #ff6929;" /> HTML</b> et
                        <b><font-awesome-icon :icon="['fab', 'js']" style="color: #FFD43B;" /> JS natifs</b> avec des
                        composants
                        <b><font-awesome-icon :icon="['fab', 'bootstrap']" style="color: #8f6cf9;" /> Bootstrap</b>.
                    </p>
                </div>
                <div
                    class="bg-antisecondary text-secondary p-6 rounded shadow-md hover:shadow-lg transition-transform duration-300">
                    <h3 class="text-xl font-bold mb-2 flex items-center">Code training
                        <div class="pl-2 flex flex-wrap gap-2">
                            <Badge :name="'perso'" />
                            <Badge :name="'Publique'" />
                        </div>
                    </h3>
                    <p class="text-secondary text-justify"><span class="ml-9" />J'ai réalisé un certain nombre de petits
                        exercices de
                        code training (j'aime beaucoup l'algorithmique), principalement en <b><font-awesome-icon
                                :icon="['fab', 'js']" style="color: #FFD43B;" /> JS</b>,<nuxt-icon filled
                            name="python" /><b>python</b> et <font-awesome-icon :icon="['fab', 'php']"
                            style="color: #74C0FC;" /><b> PHP</b>,
                        sur des sites comme
                        <NuxtLink class="italic font-bold" to="https://leetcode.com/">leetcode</NuxtLink> ou <NuxtLink
                            class="italic font-bold" to="https://projecteuler.net/">Project Euler</NuxtLink>. J'ai
                        partagé
                        quelques résultats sur <font-awesome-icon :icon="['fab', 'github']" />
                        <NuxtLink class="italic font-bold" to="https://github.com/U-Louis?tab=projects&type=classic">
                            github.
                        </NuxtLink>
                    </p>
                </div>
            </section>
        </main>
    </div>
</template>