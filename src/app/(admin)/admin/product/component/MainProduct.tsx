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
import { useState, useEffect } from "react";
import axios from "@/api/axios.instance";
import { ApiResponse } from "@/types/utils/api-response.interface";
import { IProduct } from "@/types/products/products.interface";
import { ApiPathEnum } from "@/api/api.path.enum";

export default function MainProduct() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [products, setProducts] = useState<IProduct[]>([])

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedProducts = products.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );


  useEffect(() => {
    axios.get<ApiResponse<IProduct[]>>(ApiPathEnum.Product).then(res => {
      if (res.status === 200) {
        setProducts(res.data.data as IProduct[])
      }
    })
  }, [])

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
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Tên sản phẩm</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Danh mục</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Giá</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Số lượng tồn kho</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedProducts.map((product) => (
              <TableRow
                key={product.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{product._id}</TableCell>
                <TableCell align="left">{product.name}</TableCell>
                <TableCell align="left">{product.categoryId}</TableCell>
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
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
