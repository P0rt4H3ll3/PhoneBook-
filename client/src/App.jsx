import { useState } from "react";
import React from "react";
import SearchPersons from "./components/SearchPerson";
import AllEntries from "./components/AllEntries";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import ToggleButton from "./components/ToggleButton";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});
/*
const theme = React.useMemo(
    () => ({
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
*/

const App = () => {
  const [searchName, setSearchName] = useState("");
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode, // light or dark depending on the mode ( setMode)
        },
      }),
    [mode]
  );

  const handleChange = (event) => {
    setSearchName(event.target.value);
  };

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Container>
              <h1>Phonebook</h1>
              <ToggleButton />
              <SearchPersons
                searchName={searchName}
                handleChange={handleChange}
              />
              <AllEntries searchName={searchName} />
            </Container>
          </CssBaseline>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default App;
