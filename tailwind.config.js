/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: "#66ff1f",
        secondary: {
          100: "#E2E2D5",
          200: "#00C2FF",
          300: "#74aafc",
          400: "#22202cf6",
        },
      },
      fontFamily: {
        quickSand: ["Quicksand", "sans-serif"],
      },
      backgroundImage: {
        // "custom-image": "url('path_to_your_image.jpg')", // Add your custom image path here
        ttuPattern:
          //   "url('https://res.cloudinary.com/dls0snoaa/image/upload/v1717270523/profile-img_xukiax.jpg')",
          //   "url('https://res.cloudinary.com/dls0snoaa/image/upload/v1717270545/footer-img_ozn5me.jpg')",
          //   "url('https://res.cloudinary.com/dls0snoaa/image/upload/v1717270522/introduction-img_erjbb2.jpg')",
          "url('https://res.cloudinary.com/dls0snoaa/image/upload/v1717270530/sarmon-img_sddwo2.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
