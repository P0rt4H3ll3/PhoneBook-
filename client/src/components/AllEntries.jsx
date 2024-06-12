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
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {data?.allPersons?.map((person) => {
            return (
              <TableRow key={person.id}>
                <TableCell>{person.name}</TableCell>
                <TableCell>{person.phone}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllEntries;
