import { gql, useQuery } from "@apollo/client";
import BasicAlerts from "./BasicAlert";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Stack,
  TextField,
} from "@mui/material";

const SEARCH_PERSON = gql`
  query ($name: String) {
    person(name: $name) {
      id
      name
      phone
    }
  }
`;

const SearchPersons = ({ searchName, handleChange }) => {
  const resultSearchPersons = useQuery(SEARCH_PERSON, {
    variables: { name: searchName },
    skip: !searchName, // if there is no searchName this display get skipped and all entries are displayed
  });

  //
  // error message when there is no name
  // if no name found resultSearchPersons.error is true
  // when there is no name than resultSearchPerson.data is Object { person:[]}

  return (
    <div>
      <Stack spacing={2}>
        <Stack direction="row" spacing={1}>
          <TextField
            label="Search"
            variant="filled"
            value={searchName}
            onChange={handleChange}
            error={resultSearchPersons?.data?.person.length === 0} // if the list of names that match the search is zero there are no matches and error gets displayed
            margin="none"
            fullWidth
          />
        </Stack>
      </Stack>
      <Stack>
        <BasicAlerts resultSearchPersons={resultSearchPersons} />
      </Stack>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {resultSearchPersons.data?.person.map((data) => {
              // resultSearchPersons.data? checks if this has data ?
              return (
                <TableRow key={data.id}>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.phone}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SearchPersons;
