import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ToggleButton from "./ToggleButton";
import { useTheme } from "@mui/material/";
import SearchField from "./Searchfield";

const Header = ({ searchName, handleChange }) => {
  const theme = useTheme();

  return (
    <>
      <AppBar
        role="Header"
        aria-label="Header of the webapp"
        position="sticky"
        style={
          theme.palette.mode === "dark"
            ? { backgroundColor: "#212121", color: "white" }
            : { backgroundColor: "white", color: "black" }
        }
      >
        <Toolbar>
          <Typography
            variant="h4"
            style={{ flexGrow: 1 }}
            role="title"
            aria-label="Phonebook"
          >
            Phonebook
          </Typography>
          <ToggleButton />
        </Toolbar>
        <SearchField
          searchName={searchName}
          handleChange={handleChange}
          aria-label="search field"
        />
      </AppBar>
    </>
  );
};

export default Header;
//flexGrow takes all the available horizontal space
// div box with hight of toolbar, important when toolbar is fixed <Box sx={(theme) => ({ ...theme.mixins.toolbar })}></Box>
