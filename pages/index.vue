<template>
  <main class="container mx-auto p-8">
    <section class="flex items-center mb-8 gap-4">
      <div class="flex flex-col w-1/2 items-center gap-2">
        <img src="/static/profile.png" alt="Profile Photo"
          class="flex margin-auto rounded-full border-2 border-black md:w-3/4 lg:w-2/3 xl:w-1/2">
        <div class="flex flex-wrap">
          <a href="https://github.com/U-louis" target="_blank" class="btn" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'square-github']" class="text-3xl p-1" />
          </a>
          <a href="https://linkedin.com/in/louis-urbani" target="_blank" class="btn" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="text-3xl p-1" />
          </a>
          <button @click="copyToClipboard('phone', $event)" class="btn">
            <font-awesome-icon :icon="['fas', 'square-phone-flip']" class="text-3xl p-1" />
          </button>
          <button @click="copyToClipboard('mail', $event)" class="btn">
            <font-awesome-icon :icon="['fas', 'square-envelope']" class="btn text-3xl p-1" />
          </button>

          <tooltip :show="showTooltip" :top="tooltipTop" :left="tooltipLeft">Copied!</tooltip>
        </div>
      </div>

      <div class="flex flex-col w-1/2">
        <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold">Louis URBANI</h1>
        <p class="text-xl md:text-3xl lg:text-4xl">Développeur Full-Stack (2 ans)</p>

        <div class="flex p-2 flex-grow mt-2">
          <img src="/static/stack-cloud.png" alt="stack-cloud">
        </div>

      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">À l'écoute de nouvelles opportunités</h2>
      <p class="text-justify">
        <span class="ml-9" />Actuellement en poste chez <NuxtLink to="https://www.kanta.fr/" class="font-bold italic"
          target="_blank">Kanta</NuxtLink> en tant que développeur full-stack, je suis à la
        recherche d'une nouvelle expérience.
        <br>
        <span class="ml-9" />Ce qui me séduit facilement : une belle stack, une bonne
        ambiance, une volonté d'aller
        vers de la qualité, plein de choses finalement... La(les) cerise(s) sur le gâteau : des temps de r&d, de pair-pro,
        du DDD, des projets from scratch...
        <br>
        <span class="ml-9" />La majeure partie de mon travail est privée, vous pouvez parcourir mes <NuxtLink
          to="/projects" class="font-bold italic">projets</NuxtLink> pour
        en apprendre plus. Le mieux : <NuxtLink to="https://linkedin.com/in/louis-urbani" class="font-bold italic"
          target="_blank">
          envoyez-moi un message, on
          en discute !</NuxtLink>
        <br><span class="ml-9" />Vous avez besoin d'un CV en PDF, de lettres de recommandation, de précisions ou autre,
        même chose :
        <NuxtLink to="https://linkedin.com/in/louis-urbani" class="font-bold italic" target="_blank">
          un petit mp</NuxtLink>.
      </p>
    </section>
  </main>
</template>

<script>
import Tooltip from '@/components/Tooltip.vue';

export default {
  components: {
    Tooltip
  },
  data() {
    return {
      showTooltip: false,
      tooltipTop: '50%',
      tooltipLeft: '50%'
    };
  },
  methods: {
    copyToClipboard(type, event) {
      const textToCopy = type === 'phone' ? '0641516034' : 'louis.urbani@yahoo.com';
      navigator.clipboard.writeText(textToCopy).then(() => {
        const rect = event.target.getBoundingClientRect();
        this.tooltipTop = `${rect.top + rect.height / 2}px`;
        this.tooltipLeft = `${rect.left + rect.width / 2}px`;
        this.showTooltip = true;
        setTimeout(() => {
          this.showTooltip = false;
        }, 500);
      }).catch((error) => {
        console.error('Unable to copy text to clipboard', error);
      });
    }
  }
};
</script>

<style>
.btn {
  transition: background-color 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.btn-container {
  position: relative;
}

.btn:active {
  color: rgba(0, 0, 0, 0.5);
  transform: translateY(1px);
}
</style>