import { useState } from "react";
import SearchPersons from "./components/SearchPerson";
import AllEntries from "./components/AllEntries";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { colors } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...colors.amber,
      ...(mode === "dark" && {
        main: colors.amber[300],
      }),
    },
    ...(mode === "dark" && {
      background: {
        default: colors.deepOrange[900],
        paper: colors.deepOrange[900],
      },
    }),
    text: {
      ...(mode === "light"
        ? {
            primary: colors.grey[900],
            secondary: colors.grey[800],
          }
        : {
            primary: "#fff",
            secondary: colors.grey[500],
          }),
    },
  },
});
const darkModeTheme = createTheme(getDesignTokens("dark"));

const App = () => {
  const theme = useTheme();
  const [searchName, setSearchName] = useState("");

  const handleChange = (event) => {
    setSearchName(event.target.value);
  };

  return (
    <>
      <ThemeProvider theme={darkModeTheme}>
        <CssBaseline>
          <Container>
            <h1>Phonebook</h1>
            <SearchPersons
              searchName={searchName}
              handleChange={handleChange}
            />
            <AllEntries searchName={searchName} />
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
};

export default App;
