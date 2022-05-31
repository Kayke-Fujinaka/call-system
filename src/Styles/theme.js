const colors = {
  white: "#ffffff",
  white2: "#EFEFEF",
  black: "#121212",

  blue: "#526eff",
  red: "#dc3145",

  backg1: "#1C1E28",
  backg2: "#191921",

  contBack: "#f8f8f8",
  inputBack: "#252a34",
  buttonDarkBlue: "#181c2e",
  border: "#ddd",
};

const fonts = {
  weight: {
    extraLight: 200,
    light: 300,
    medium: 400,
    bold: 500,
    bolder: 600,
    boldest: 700,
  },
  primary: '"Outfit", Roboto, sans-serif',
  secondary: '"Montserrat", Roboto, sans-serif',
};

const theme = {
  fonts,
  background: colors.black,
  ...colors,
};

export default theme;
