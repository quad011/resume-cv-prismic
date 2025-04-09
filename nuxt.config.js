import { apiEndpoint, repositoryName } from './slicemachine.config.json';
import componentsConfig from './config/nuxt/components';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',

  generate: {
    fallback: 'index.html',
    dir: '.output/public',
  },

  ssr: false,

  imports: {
    dirs: ['utils'],
  },

  image: {
    imgix: {
      baseURL: 'https://images.prismic.io/resume-dc/',
    },
    domains: ['images.prismic.io'],
  },

  router: {
    base: '/resume-cv-prismic/',
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  prismic: {
    endpoint: apiEndpoint,
    clientConfig: {
      routes: [
        {
          type: 'page_home',
          path: '/',
        },

        {
          type: 'page_default',
          path: '/:uid',
        },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: false, // Disable link crawling
      failOnError: false, // Do not fail the build if errors occur
    },
  },

  components: componentsConfig,

  css: ['@/assets/css/tailwind.scss', '@/assets/css/main.scss'],

  devtools: { enabled: false, suspensible: false },

  plugins: ['./plugins/useSlice.js'],

  modules: [
    '@nuxtjs/prismic',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-font-loader',
    '@nuxt/image',
    '@nuxtjs/device',
    'lenis/nuxt',
  ],

  fontLoader: {
    local: [
      {
        src: '/fonts/RedHatDisplay.woff2',
        family: 'RedHatDisplay',
        class: 'RedHatDisplay',
      },
    ],
  },

  compatibilityDate: '2025-02-24',
});
