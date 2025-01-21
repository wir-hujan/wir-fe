import colors from "tailwindcss/colors";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: ["./constants", "./interfaces", "./interfaces/general", "./services"],
  },
  app: {
    head: {
      titleTemplate: "Wir - %s",
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt", "@vueuse/nuxt", "dayjs-nuxt"],
  // value set from .env
  runtimeConfig: {
    public: {
      apiUrl: "",
    },
  },
  ui: {
    icons: {
      dynamic: true,
    },
  },
  dayjs: {
    locales: ["id"],
    plugins: ["relativeTime", "timezone"],
    defaultLocale: "id",
    defaultTimezone: "Asia/Jakarta",
  },
  colorMode: {
    preference: "light",
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            main: {
              DEFAULT: "#C59B2D",
              50: "#EBD8A8",
              100: "#E8D299",
              200: "#E1C57C",
              300: "#DAB85F",
              400: "#D4AB42",
              500: "#C59B2D",
              600: "#A88426",
              700: "#8B6D20",
              800: "#6E5619",
              900: "#514012",
              950: "#42340F",
            },
            success: {
              DEFAULT: colors.green[500],
              ...colors.green,
            },
            danger: {
              DEFAULT: colors.red[500],
              ...colors.red,
            },
            warning: {
              DEFAULT: colors.amber[500],
              ...colors.amber,
            },
            info: {
              DEFAULT: colors.blue[500],
              ...colors.blue,
            },
          },
        },
      },
    },
  },
});
