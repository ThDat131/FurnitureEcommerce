import { staticCategories } from "@/app/static";
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
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";

export default function MainCategory() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedCategories = staticCategories.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
      <TableContainer
        sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}
        component={Paper}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Id</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Description</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCategories.map((category) => (
              <TableRow
                key={category.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{category.id}</TableCell>
                <TableCell align="left">{category.name}</TableCell>
                <TableCell align="left">{category.description}</TableCell>
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
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={staticCategories.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
