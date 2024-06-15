import { gql, useQuery } from "@apollo/client";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

// the query to get all users
const ALL_PERSONS = gql`
  query {
    allPersons {
      id
      name
      phone
    }
  }
`;

//component to display all users in a table
const AllEntries = ({ searchName }) => {
  const { loading, data, error } = useQuery(ALL_PERSONS, {
    skip: !!searchName, // if searchName is true this gets skipped
  });

  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;

  return (
    <>
      <TableContainer component={Paper}>
        <Table role="table" aria-label="Phonebook">
          <TableBody>
            {data?.allPersons?.map((person, index) => {
              return (
                <TableRow
                  key={person.id}
                  role="row"
                  aria-label={`Entry number ${index} name : ${person.name}, phone number: ${person.phone}`}
                >
                  <TableCell aria-label="name">{person.name}</TableCell>
                  <TableCell aria-label="number">{person.phone}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AllEntries;
