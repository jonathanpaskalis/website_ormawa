export default defineNuxtPlugin((nuxtApp) => {
  const { FB_MEASUREMENT_ID } = useRuntimeConfig().public;
  
  function gtag() {
    window.dataLayer.push(arguments);
  }
  
  window.dataLayer = window.dataLayer || [];
  
  gtag("js", new Date());
  gtag("config", FB_MEASUREMENT_ID);
  
  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${FB_MEASUREMENT_ID}`,
        async: true,
      },
    ],
  });
});