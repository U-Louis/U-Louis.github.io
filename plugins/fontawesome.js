// For Nuxt 3
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDatabase, fas } from '@fortawesome/free-solid-svg-icons'
import { faAndroid, faBootstrap, faCss3, faGithub, faGithubSquare, faGolang, faHtml5, faJs, faLaravel, faLinkedin, faPhp, faRust, faSymfony, faVuejs } from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas, faGithubSquare, faGithub, faLinkedin, faPhp, faLaravel, faJs, faHtml5, faCss3, faSymfony, faAndroid, faBootstrap, faRust, faGolang, faDatabase, faVuejs)


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})