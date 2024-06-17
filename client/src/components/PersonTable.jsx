import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import BasicAlert from "./BasicAlert";

const PersonTable = ({ data }) => {
  //
  // error message when there is no name
  // if no name found resultSearchPersons.error is true
  // when there is no name than resultSearchPerson.data is Object { person:[]}

  return (
    <>
      <BasicAlert data={data} />
      <TableContainer component={Paper} position="static">
        <Table role="table" aria-label="Phonebook entries">
          <TableBody>
            {data?.person.map((data, index) => {
              // resultSearchPersons.data? checks if this has data ?
              return (
                <TableRow
                  key={data.id}
                  role="row"
                  aria-label={`Entry number ${index + 1} name : ${
                    data.name
                  }, phone number: ${data.phone}`}
                  //ins label noch index von max rein machen
                >
                  <TableCell role="cell">{data.name}</TableCell>
                  <TableCell role="cell">{data.phone}</TableCell>
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
