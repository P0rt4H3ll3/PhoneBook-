import { Stack, TextField } from "@mui/material";

const SearchField = ({ searchName, handleChange, resultSearchPersons }) => {
  //
  // error message when there is no name
  // if no name found resultSearchPersons.error is true
  // when there is no name than resultSearchPerson.data is Object { person:[]}

  return (
    <>
      <>
        <Stack direction="row" spacing={1}>
          <TextField
            role="search"
            aria-label="Search field for names"
            position="sticky"
            label="Search"
            variant="filled"
            value={searchName}
            onChange={handleChange}
            error={resultSearchPersons?.data?.person.length === 0} // if the list of names that match the search is zero there are no matches and error gets displayed
            margin="none"
            fullWidth
          />
        </Stack>
      </>
    </>
  );
};

export default SearchField;
// why was i putting <Stack /> elements everywhere ?
