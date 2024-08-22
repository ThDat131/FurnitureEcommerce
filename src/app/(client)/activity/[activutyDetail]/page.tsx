"use client";
import { Grid, ThemeProvider, Typography } from "@mui/material";
import theme from "../../theme";
import Image from "next/image";
import activityImg from "../../../assets/images/blog1.jpg";

export default function ActivityDetail() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent={"center"}
        xs={12}
        minHeight={"calc(100vh - 113px)"}
        sx={{ backgroundColor: theme.palette.primary.contrastText }}
      >
        <Typography
          variant="h4"
          textAlign={"center"}
          fontWeight={"bold"}
          color={theme.palette.primary.main}
          sx={{ paddingTop: 4, paddingBottom: 4 }}
        >
          HOẠT ĐỘNG CÔNG TY
        </Typography>
        <Grid item xs={10} container>
          <Typography
            variant="h5"
            fontWeight={"bold"}
            color={theme.palette.primary.main}
            sx={{ paddingTop: 4, paddingBottom: 4 }}
          >
            HỌP ĐỊNH KÌ
          </Typography>
          <Typography
            variant="h6"
            color={theme.palette.primary.main}
            textAlign={"justify"}
          >
            Để giữ vững nhịp hoạt động, đảm bảo công ty luôn đi đúng hướng và
            hoàn thành các mục tiêu đã đề ra, đội ngũ nhân viên ePioneer đều tập
            trung đến để tham gia buổi họp định kỳ hàng tuần.Không chỉ là dịp để
            cập nhật thông tin mà còn là cơ hội để chia sẻ, thảo luận và kế
            hoạch cho những dự án sắp tới.
          </Typography>
          <Grid item container xs={12} justifyContent={"space-between"}>
            <Grid xs={5} item>
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                textAlign={"justify"}
              >
                Mỗi cuộc họp được tổ chức một cách chuyên nghiệp và có tổ chức,
                với sự dẫn dắt của người điều hành. Mọi người đều mangtheo sổ
                ghi chú và laptop để theo dõi nội dung họp và ghi chú ý quan
                trọng. Không chỉ là những bài thuyết trình và báo cáo số liệu
                khô khan, mỗi cuộc họp còn đượctạo ra sự sôi động bằng cách thảo
                luận và đặt câu hỏi, trao đổi ý kiến để mọi người có cơ hội thể
                hiện quan điểm
              </Typography>
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                textAlign={"justify"}
              >
                Ngoài ra, trong mỗi cuộc họp, còn có thời gian dành cho
                việc nhận xét và đánh giá công việc của các nhóm và cá nhân.
              </Typography>
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                textAlign={"justify"}
              >
                Khi kết thúc cuộc họp, mọi người rời khỏi phòng họp với tinh
                thần sảng khoái và sẵn sàng bắt tay vào công việc. Họ không chỉ
                cảm thấy được lắng nghe mà còn thấy mình là một phần quan trọng
                trong sự phát triển của công ty
              </Typography>
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                textAlign={"justify"}
              >
                Như vậy, việc tổ chức cuộc họp định kỳ đã giúp ePioneer tạo ra
                môi trường làm việc tích cực và sáng tạo, nơi mà mọi người có cơ
                hội trao đổi ý kiến, học hỏi và phát triển cùng nhau.
              </Typography>
            </Grid>
            <Grid xs={5} item>
              <Image src={activityImg} alt="" layout="responsive" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
