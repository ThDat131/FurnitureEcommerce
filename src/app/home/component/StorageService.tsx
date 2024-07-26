import { Box, Grid, Typography } from "@mui/material";
import packageimg from "../../assets/images/package.png";
import warehouseImg from "../../assets/images/warehouse.png";
import Image from "next/image";

export default function StorageService() {
  return (
    <Box>
      <Grid
        xs={12}
        container
        justifyContent={"space-evenly"}
        alignItems={"center"}
        sx={{
          backgroundColor: "#000",
          marginTop: 12,
          marginBottom: 12,
          paddingBottom: 6,
          paddingTop: 6,
        }}
      >
        <Grid item xs={3} sx={{ position: "relative" }}>
          <Image
            src={packageimg}
            alt={"Package image"}
            layout="responsive"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: 400,
              zIndex: 2,
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <Typography
            variant="h4"
            sx={{
              color: "#EFE1CE",
              textShadow: "0 0 5px black",
              zIndex: 1,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            DỊCH VỤ LƯU KHO
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#EFE1CE",
              textShadow: "0 0 5px black",
              zIndex: 1,
              textAlign: "justify",
              marginTop: 4,
            }}
          >
            Quản lý hàng tồn kho hiệu quả là bài toán nan giải của nhiều doanh
            nghiệp. Với dịch vụ lưu kho chuyên nghiệp, bạn có thể giải phóng
            không gian, tiết kiệm chi phí và tập trung vào phát triển kinh doanh
            cốt lõi. Chúng tôi cung cấp đa dạng loại hình kho bãi, từ kho thường
            đến kho lạnh, kho ngoại quan, đáp ứng mọi nhu cầu lưu trữ của bạn.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#EFE1CE",
              textShadow: "0 0 5px black",
              zIndex: 1,
              textAlign: "justify",
              marginTop: 4,
            }}
          >
            Hàng hóa của bạn sẽ được bảo quản trong môi trường đạt chuẩn, với hệ
            thống an ninh 24/7 và quy trình quản lý chặt chẽ. Đội ngũ nhân viên
            giàu kinh nghiệm luôn sẵn sàng hỗ trợ bạn từ khâu tiếp nhận đến giao
            hàng nhanh chóng, chính xác. Tối ưu hóa quy trình logistics, giảm
            thiểu rủi ro và nâng cao hiệu quả kinh doanh chưa bao giờ dễ dàng
            đến thế!
          </Typography>
        </Grid>
        <Grid item xs={3} justifyContent={"center"}>
          <Image
            src={warehouseImg}
            alt={"Warehouse image"}
            layout="responsive"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
