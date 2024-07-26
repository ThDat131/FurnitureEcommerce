import { Box, Typography } from "@mui/material";

export default function TrendingProduct() {
  return (
    <Box sx={{ backgroundColor: "#fff", color: "#401d59" }}>
      <Typography
        variant="h5"
        sx={{
          textShadow: "0 0 2px black",
          textAlign: "center",
          fontWeight: "bold",
          padding: 4
        }}
      >
        --- <b>SẢN PHẨM NỔI BẬT</b> ---
      </Typography>
    </Box>
  );
}
