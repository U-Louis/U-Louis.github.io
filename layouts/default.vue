<template>
    <div class="flex flex-col min-h-screen">
        <template>
            <header class="text-antiprimary text-center py-4 bg-primary fixed top-0 w-full z-10">
                <NuxtLink to="/" class="text-lg mx-4" :class="{ 'font-extrabold': $route.path === '/' }">À propos
                </NuxtLink>
                <NuxtLink to="/projects" class="text-lg mx-4" :class="{ 'font-extrabold': $route.path === '/projects' }">
                    Projets
                </NuxtLink>
                <NuxtLink to="/experiences" class="text-lg mx-4"
                    :class="{ 'font-extrabold': $route.path === '/experiences' }">
                    Expériences</NuxtLink>
            </header>
        </template>


        <main class="flex-grow text-antisecondary bg-gradient-animation pt-16">
            <slot />
        </main>

        <footer class="text-tertiary text-center py-4 italic text-xs bg-gradient-to-t from-primary to-secondary">
            <p>Louis Urbani - 2024</p>
            <p style="font-size: .5rem; line-height:.5rem;">Made with ❤️, <a href="https://nuxt.com/">Nuxt</a>
                & <a href="https://pages.github.com/">Github pages</a>
                <br>This page is 🍪 cookie free & all contents are 🤖 IA free
            </p>
        </footer>

    </div>
</template>
  
<style>
.bg-gradient-animation {
    background: linear-gradient(-45deg, #0A2647, #135a98, #023970, #1c4b7d);
    background-size: 400% 400%;
    animation: gradient 14s ease infinite;
    height: 100%;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>
  