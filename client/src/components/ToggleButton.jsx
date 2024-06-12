import * as React from "react";
import { IconButton, Box, Stack, useTheme, Paper } from "@mui/material/";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../App"; // Adjust the import path as necessary

const ToggleButton = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Stack>
      <Box
        component={Paper}
        /*sx={{
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
        }}*/
      >
        {theme.palette.mode} mode
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
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
