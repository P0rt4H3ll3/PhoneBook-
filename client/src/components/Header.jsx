import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ToggleButton from "./ToggleButton";
import { useTheme } from "@mui/material/";
import SearchField from "./Searchfield";

const Header = ({ searchName, handleChange, data }) => {
  const theme = useTheme();

  return (
    <>
      <AppBar
        role="header"
        aria-label="Header of the webapp"
        position="sticky"
        style={
          theme.palette.mode === "dark"
            ? { backgroundColor: "#212121", color: "white" }
            : { backgroundColor: "white", color: "black" }
        }
      >
        <Toolbar>
          <Typography variant="h4" style={{ flexGrow: 1 }}>
            Phonebook
          </Typography>
          <ToggleButton />
        </Toolbar>
        <SearchField
          searchName={searchName}
          handleChange={handleChange}
          data={data}
          aria-label="search field"
        />
      </AppBar>
    </>
  );
};

export default Header;
//flexGrow takes all the available horizontal space
// div box with hight of toolbar, important when toolbar is fixed <Box sx={(theme) => ({ ...theme.mixins.toolbar })}></Box>
