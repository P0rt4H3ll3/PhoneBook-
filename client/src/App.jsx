import { useState } from "react";
import SearchPersons from "./components/SearchPerson";
import AllEntries from "./components/AllEntries";
//import { Container } from "@mui/material";

const App = () => {
  const [searchName, setSearchName] = useState("");

  const handleChange = (event) => {
    setSearchName(event.target.value);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <SearchPersons searchName={searchName} handleChange={handleChange} />
      <AllEntries searchName={searchName} />
    </>
  );
};

export default App;
