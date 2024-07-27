import { Box, Grid, Typography } from "@mui/material";
import activity from "../../assets/images/activity.png";
import Image from "next/image";

export default function Activity() {
  return (
    <Box>
      <Grid
        xs={12}
        container
        justifyContent={"space-evenly"}
        alignItems={"center"}
        sx={{ marginBottom: 20 }}
      >
        <Grid
          xs={7}
          item
          sx={{
            backgroundColor: "#fff",
            position: "relative",
            paddingTop: 8,
            paddingBottom: 8,
            borderRadius: 8,
          }}
        >
          <Grid xs={12} container justifyContent={"center"}>
            <Grid item xs={10}>
              <Image
                src={activity}
                alt={"Activity icon"}
                layout="responsive"
                style={{
                  maxWidth: 80,
                }}
              />
            </Grid>
          </Grid>
          <Grid justifyContent={"center"} xs={12} container>
            <Grid xs={10} item>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#401d59",
                  zIndex: 1,
                  textAlign: "justify",
                  marginTop: 4,
                }}
              >
                Quản lý hàng tồn kho hiệu quả là bài toán nan giải của nhiều
                doanh nghiệp. Với dịch vụ lưu kho chuyên nghiệp, bạn có thể giải
                phóng không gian, tiết kiệm chi phí và tập trung vào phát triển
                kinh doanh cốt lõi. Chúng tôi cung cấp đa dạng loại hình kho
                bãi, từ kho thường đến kho lạnh, kho ngoại quan, đáp ứng mọi nhu
                cầu lưu trữ của bạn.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#401d59",
                  zIndex: 1,
                  textAlign: "justify",
                  marginTop: 4,
                }}
              >
                Không chỉ dừng lại ở việc cung cấp sản phẩm nội thất chất lượng,
                chúng tôi còn mang đến dịch vụ tư vấn thiết kế nội thất chuyên
                nghiệp, giúp bạn hiện thực hóa những ý tưởng độc đáo và phù hợp
                với ngân sách. Đội ngũ kiến trúc sư giàu kinh nghiệm của chúng
                tôi luôn sẵn sàng lắng nghe, thấu hiểu và đưa ra những giải pháp
                tối ưu nhất. Bên cạnh đó, chế độ bảo hành dài hạn và dịch vụ hậu
                mãi chu đáo sẽ giúp bạn yên tâm tận hưởng không gian sống hoàn
                hảo trong suốt thời gian dài.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            sx={{
              width: 1,
              height: 0.005,
              position: "absolute",
              left: -80,
              bottom: -20,
              backgroundColor: "#fff",
              zIndex: 2,
            }}
          />
          <Grid
            sx={{
              width: 0.002,
              height: 1,
              position: "absolute",
              left: -20,
              bottom: -80,
              backgroundColor: "#fff",
              zIndex: 2,
            }}
          />
        </Grid>
        <Grid xs={3} item>
          <Typography
            variant="h4"
            sx={{
              color: "#EFE1CE",
              fontFamily: "TimesNewRomanPS-ItalicMT",
              marginBottom: "30px",
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            <i>HOẠT ĐỘNG</i>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
