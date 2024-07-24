import { staticProducts } from "@/app/static";
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

export default function MainProduct() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedProducts = staticProducts.slice(
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
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Category</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Price</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Stock</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedProducts.map((product) => (
              <TableRow
                key={product.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{product.id}</TableCell>
                <TableCell align="left">{product.name}</TableCell>
                <TableCell align="left">{product.category}</TableCell>
                <TableCell align="left">{product.price}</TableCell>
                <TableCell align="left">{product.stock}</TableCell>
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
        count={staticProducts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
