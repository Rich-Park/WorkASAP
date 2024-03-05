// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
// import "@fontsource/open-sans/300.css";
// import "@fontsource/open-sans/400.css";
// import "@fontsource/open-sans/700.css";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      50: "#FFF3F3",
      100: "#FECCCC",
      200: "#FD9D9D",
      300: "#FD7A7A",
      400: "#FA5F5F",
      500: "#F94242",
      600: "#FD2C2C",
      700: "#F51D1D",
      800: "#DC0A0A",
      900: "#AF0909",
    },
    alt: {
      100: "#6C63FF",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },

  styles: {
    global: () => ({
      body: {
        // bg: "gray.50",
      },
    }),
  },
  components: {},
});

// export default theme;
