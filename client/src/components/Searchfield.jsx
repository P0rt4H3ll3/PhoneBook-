import { gql, useQuery } from "@apollo/client";
import BasicAlerts from "./BasicAlert";
import { Stack, TextField } from "@mui/material";

const SEARCH_PERSON = gql`
  query ($name: String) {
    person(name: $name) {
      id
      name
      phone
    }
  }
`;

const SearchField = ({ searchName, handleChange }) => {
  const resultSearchPersons = useQuery(SEARCH_PERSON, {
    variables: { name: searchName },
    //skip: !searchName, // i do not want it to be skipped
  });

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
      <Stack>
        <BasicAlerts resultSearchPersons={resultSearchPersons} />
      </Stack>
      <Stack />
    </>
  );
};

export default SearchField;
