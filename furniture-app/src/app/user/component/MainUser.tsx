import { staticUser } from "@/app/static";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

export default function MainUser() {
  return (
    <TableContainer
      sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}
      component={Paper}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {staticUser.map((user) => (
            <TableRow
              key={user.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{user.id}</TableCell>
              <TableCell align="left">{user.name}</TableCell>
              <TableCell align="left">{user.phone}</TableCell>
              <TableCell align="left">{user.address}</TableCell>
              <TableCell align="left">{user.email}</TableCell>
              <TableCell align="center">
                <IconButton
                  sx={{ border: "none", boxShadow: "none", padding: 0 }}
                >
                  <VisibilityIcon color="primary" />
                </IconButton>
                <IconButton
                  sx={{ border: "none", boxShadow: "none", padding: 0 }}
                >
                  <EditIcon color="success" />
                </IconButton>
                <IconButton
                  color="secondary"
                  sx={{ border: "none", boxShadow: "none", padding: 0 }}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
