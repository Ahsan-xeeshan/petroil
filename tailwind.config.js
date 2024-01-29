/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pops: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        container: "1144px",
      },
      colors: {
        yellow: "#FFB800",
        white: "#FFFFFF",
        primary: "#F40404",
        secondary: "#6C6C6C",
      },
      backgroundImage: {
        service_1: "url('assets/services_1.png')",
        service_2: "url('assets/services_2.png')",
        service_3: "url('assets/services_3.png')",
        about: "url('assets/about.png')",
        blog_1: "url('assets/blog_1.png')",
        blog_2: "url('assets/blog_2.png')",
        blog_3: "url('assets/blog_3.png')",
        map: "url('assets/Maps.png')",
      },
    },
  },
  plugins: [],
};
