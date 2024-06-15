import * as React from "react";
import { IconButton, Box, Stack, useTheme } from "@mui/material/";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../App"; // Adjust the import path as necessary

const ToggleButton = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext); // useContext can manage state globally
  //ColorModeContext holds the toggleColorMode function which changes between light and dark

  return (
    <Stack>
      <Box
        sx={{
          position: "relative",
          flexDirection: "row",
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 0,
        }}
      >
        {theme.palette.mode} mode
        <IconButton
          role="Button"
          aria-label="Button that changes design form light to dark"
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit" //color for the symbol
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
    </Stack>
  );
};

export default ToggleButton;
// {theme.palette.mode} mode  retruns button text either dark or light mode
