import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

// Material UI basic alert, want to have an alert when user searches for a name that is not in the db

const BasicAlert = ({ data }) => {
  if (data?.person.length === 0) {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert role="alert" severity="error">
          Entry could not be found
        </Alert>
      </Stack>
    );
  }
  return null; // Handle the case where data.person is not empty or undefined
};

export default BasicAlert;
