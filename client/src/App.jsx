import { useState } from "react";
import React from "react";

import PersonTable from "./components/PersonTable";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { gql, useQuery } from "@apollo/client";
import Header from "./components/Header";

export const ColorModeContext = React.createContext({
  //Context provides a way to pass data through the component tree without having to pass props down manually at every level.
  //Call createContext outside of any components to create a context
  toggleColorMode: () => {},
});

const SEARCH_PERSON = gql`
  query ($name: String) {
    person(name: $name) {
      id
      name
      phone
    }
  }
`;

const App = () => {
  const [searchName, setSearchName] = useState("");
  const [mode, setMode] = React.useState("light");

  const resultSearchPersons = useQuery(SEARCH_PERSON, {
    variables: { name: searchName },
    //skip: !searchName, // i do not want it to be skipped
  });

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = React.useMemo(
    // changes whenever the mode changes
    () =>
      createTheme({
        // customizable colors
        palette: {
          mode,
          primary: {
            ...colors.blue, // searchfield color when pushed
            ...(mode === "dark" && {
              main: colors.purple[400],
            }),
          },
          ...(mode === "dark" && {
            background: {
              default: colors.grey[900], //dark mode background
              paper: colors.grey[900], // dark table entries
            },
          }),
          text: {
            ...(mode === "light"
              ? {
                  primary: colors.grey[900], // light mode font color Primary
                  secondary: colors.grey[900], //light mode Search field default
                }
              : {
                  primary: colors.grey[50], //dark mode font color primary
                  secondary: colors.pink[50], // dark mode Search field default
                }),
          },
        },
      }),
    [mode]
  );

  /* only for black and white 
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode, // light or dark depending on the mode ( setMode)
        },
      }),
    [mode]
  );
  */

  const handleChange = (event) => {
    setSearchName(event.target.value);
  };

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Container>
              <Header
                searchName={searchName}
                handleChange={handleChange}
                resultSearchPersons={resultSearchPersons}
              />
              <PersonTable resultSearchPersons={resultSearchPersons} />
            </Container>
          </CssBaseline>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default App;
