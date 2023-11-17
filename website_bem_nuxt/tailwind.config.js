/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    backgroundSize: {
      "200%": "200%",
    },
    fontFamily: {
      "Montserrat-Black": ["Montserrat-Black"],
      "Montserrat-BlackItalic": ["Montserrat-BlackItalic"],
      "Montserrat-Bold": ["Montserrat-Bold"],
      "Montserrat-BoldItalic": ["Montserrat-BoldItalic"],
      "Montserrat-ExtraBold": ["Montserrat-ExtraBold"],
      "Montserrat-ExtraBoldItalic": ["Montserrat-ExtraBoldItalic"],
      "Montserrat-ExtraLight": ["Montserrat-ExtraLight"],
      "Montserrat-ExtraLightItalic": ["Montserrat-ExtraLightItalic"],
      "Montserrat-Italic": ["Montserrat-Italic"],
      "Montserrat-Light": ["Montserrat-Light"],
      "Montserrat-LightItalic": ["Montserrat-LightItalic"],
      "Montserrat-Medium": ["Montserrat-Medium"],
      "Montserrat-MediumItalic": ["Montserrat-MediumItalic"],
      "Montserrat-Regular": ["Montserrat-Regular"],
      "Montserrat-SemiBold": ["Montserrat-SemiBold"],
      "Montserrat-SemiBoldItalic": ["Montserrat-SemiBoldItalic"],
      "Montserrat-Thin": ["Montserrat-Thin"],
      "Montserrat-ThinItalic": ["Montserrat-ThinItalic"],
      "Panton-BlackCaps": ["Panton-BlackCaps"],
      "Panton-BlackitalicCaps": ["Panton-BlackitalicCaps"],
      "Panton-LightCaps": ["Panton-LightCaps"],
      "Panton-LightitalicCaps": ["Panton-LightitalicCaps"],
      "Poppins-Black": ["Poppins-Black"],
      "Poppins-BlackItalic": ["Poppins-BlackItalic"],
      "Poppins-Bold": ["Poppins-Bold"],
      "Poppins-BoldItalic": ["Poppins-BoldItalic"],
      "Poppins-ExtraBold": ["Poppins-ExtraBold"],
      "Poppins-ExtraBoldItalic": ["Poppins-ExtraBoldItalic"],
      "Poppins-ExtraLight": ["Poppins-ExtraLight"],
      "Poppins-ExtraLightItalic": ["Poppins-ExtraLightItalic"],
      "Poppins-Italic": ["Poppins-Italic"],
      "Poppins-Light": ["Poppins-Light"],
      "Poppins-LightItalic": ["Poppins-LightItalic"],
      "Poppins-Medium": ["Poppins-Medium"],
      "Poppins-MediumItalic": ["Poppins-MediumItalic"],
      "Poppins-Regular": ["Poppins-Regular"],
      "Poppins-SemiBold": ["Poppins-SemiBold"],
      "Poppins-SemiBoldItalic": ["Poppins-SemiBoldItalic"],
      "Poppins-Thin": ["Poppins-Thin"],
      "Poppins-ThinItalic": ["Poppins-ThinItalic"],
    },
    extend: {
      boxShadow: {
        "bemkmuaj-orange-shadow-sm": "0 0 0.5rem rgba(241,90,34,.5)",
        "bemkmuaj-orange-shadow": "0 0 2rem rgba(241,90,34,.5)",
        "bemkmuaj-black-shadow": "0 0 2rem rgba(0,0,0,.5)",
        "bemkmuaj-gold-shadow": "0 0 2rem rgba(212,156,67,.5)",
      },
      colors: {
        bemkmuaj: {
          orange: "#f15a22",
          "orange-glow": "#ff7c44",
          white: "#f0f0f0",
          gold: "#d49c43",
          black: "#0a0a0a",
          "light-gray": "#d2d2d2",
          "dark-gray": "#232323",
        },
        uaj: {
          feb: "#e1cc00",
          fiabikom: "#e16f84",
          fpb: "#0971ab",
          ft: "#114896",
          fh: "#df0024",
          fkik: "#419818",
          fp: "#882a93",
          ftb: "#679ad1",
        },
      },
      dropShadow: {
        "bemkmuaj-black-shadow": "0 0 2rem rgba(0,0,0,0.5)",
        "bemkmuaj-white-shadow": "0 0 2rem rgba(255,255,255,0.5)",
        "bemkmuaj-orange-shadow": "0 0 2rem rgba(241,90,34,.2)",
      },
      keyframes: {
        "slide-fill-animation": {
          "0%": {
            "background-position": "right",
            filter: "drop-shadow(0 0 2rem transparent)"
          },
          "100%": {
            "background-position": "left",
            filter: "drop-shadow(0 0 2rem rgba(0,0,0,0.5))"
          },
        },
        "opacity-fill-animation": {
          "0%": {
            opacity: 0,
            filter: "drop-shadow(0 0 2rem transparent)",
          },
          "100%": {
            opacity: 1,
            filter: "drop-shadow(0 0 2rem rgba(0,0,0,0.5))"
          }
        },
        "bg-flow-animation": {
          "0%": {
            "background-position": "center center",
          },
          "25%": {
            "background-position": "left bottom",
          },
          "75%": {
            "background-position": "right top",
          },
          "100%": {
            "background-position": "center center",
          }
        }
      },
      screens: {
        '2xs': '360px',
        'xs': '425px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({nocompatible: true}),
  ],
}