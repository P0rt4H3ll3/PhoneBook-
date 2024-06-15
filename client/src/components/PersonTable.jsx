import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import BasicAlert from "./BasicAlert";

const PersonTable = ({ resultSearchPersons }) => {
  //
  // error message when there is no name
  // if no name found resultSearchPersons.error is true
  // when there is no name than resultSearchPerson.data is Object { person:[]}

  return (
    <>
      <BasicAlert resultSearchPersons={resultSearchPersons} />
      <TableContainer component={Paper} position="static">
        <Table
          role="Content table"
          aria-label="Displays searched Phonebook entries"
        >
          <TableBody>
            {resultSearchPersons.data?.person.map((data, index) => {
              // resultSearchPersons.data? checks if this has data ?
              return (
                <TableRow
                  key={data.id}
                  role="row"
                  aria-label={`Entry number ${index} name : ${data.name}, phone number: ${data.phone}`}
                  //ins label noch index von max rein machen
                >
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.phone}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PersonTable;
