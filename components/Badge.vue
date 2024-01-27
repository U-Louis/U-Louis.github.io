<template>
    <!-- tailwind cannot use dynamically generated classes ;'( -->
    <span v-if="name === 'perso'"
        class="bg-gray-200 text-gray-800 px-2 py-1 rounded-full shadow-md text-xs font-large select-none">
        perso
    </span>
    <span v-if="name === 'Kanta'"
        class="bg-orange-500 text-white px-2 py-1 rounded-full shadow-md cursor-pointer text-xs font-large select-none">
        <NuxtLink to="/experiences">Kanta</NuxtLink>
    </span>
    <span v-if="name === 'Privé'"
        class="bg-red-500 text-white px-2 py-1 rounded-full shadow-md text-xs font-large select-none">
        Privé
    </span>
    <span v-if="name === 'Publique'"
        class="bg-green-500 text-white px-2 py-1 rounded-full shadow-md cursor-pointer text-xs font-large select-none">
        <NuxtLink to="https://github.com/U-Louis">Publique</NuxtLink>
    </span>
    <span v-if="name === 'Afpa'"
        class="bg-gray-100 text-green-500 px-2 py-1 rounded-full shadow-md cursor-pointer text-xs font-large select-none">
        <NuxtLink to="/experiences">Afpa</NuxtLink>
    </span>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>