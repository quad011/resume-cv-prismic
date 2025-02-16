import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
import componentsConfig from './config/nuxt/components';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  prismic: {
    endpoint: apiEndpoint || repositoryName,
    clientConfig: {
      routes: [
      // Resolves the Homepage document to "/"
        {
          type: "page_home",
          path: "/",
        },
        
        {
          type: "page_default",
          path: "/:uid",
        },
      ],
    }
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  components: componentsConfig,
  
  css: ['@/assets/css/main.scss', '@/assets/css/tailwind.scss'],

  devtools: { enabled: false, suspensible: false },

  plugins: [
    './plugins/useSlice.js'
  ],
  
  modules: [
    "@nuxtjs/prismic", 
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    'nuxt-font-loader',
    '@nuxt/image',
  ],
  
  fontLoader: {
    local: [
      {
        src: '/fonts/RedHatDisplay.woff2',
        family: 'RedHatDisplay',
        class: 'RedHatDisplay'
      }
    ]
  },

  compatibilityDate: '2024-11-01',
})
  