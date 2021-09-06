export const state = () => ({
    locales: [
      {
        name: "Arabic",
        value: "ar"
      },
      {
        name: "English",
        value: "en"
      }
    ],
    locale: "ar"
  });
  export const getters = {
    locale: state => state.locales,
    locales: state => state.locales
  };
  export const mutations = {
    // set language
    SET_LANG(state, locale) {
      state.locale = locale;
      this.$cookies.set("lang", locale);
    }
  };
  export const actions = {};