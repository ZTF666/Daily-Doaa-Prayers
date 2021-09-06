export default function(context) {
    // Universal keys
    const { app, store } = context;
    // Server-side
    if (process.server) {
      const locale = app.$cookies.get("lang");
      if (locale) {
        store.commit("SET_LANG", locale);
      } else {
        app.$cookies.set("lang", "en");
      }
    }
  }