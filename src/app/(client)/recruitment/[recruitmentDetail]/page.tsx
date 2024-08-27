"use client";
import CircleIcon from "@mui/icons-material/Circle";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Image from "next/image";
import emailImg from "../../../assets/images/icon/emailIcon.png";
import phoneImg from "../../../assets/images/icon/phoneIcon.png";
import theme from "../../theme";
import Footer from "@/components/Footer";

export default function RecruitmentDetail() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        xs={12}
        container
        justifyContent={"center"}
        sx={{ backgroundColor: theme.palette.primary.contrastText }}
      >
        <Grid xs={10} item container justifyContent={"center"}>
          <Typography
            variant="h4"
            textAlign={"center"}
            fontWeight={"bold"}
            color={theme.palette.primary.main}
            sx={{ paddingTop: 4 }}
          >
            THÔNG BÁO TUYỂN DỤNG NHÂN VIÊN PHÁT TRIỂN, BÁN HÀNG 2024
          </Typography>
          <Typography
            variant="h5"
            textAlign={"center"}
            fontWeight={"bold"}
            color={theme.palette.primary.main}
            sx={{ paddingTop: 4, paddingBottom: 6 }}
          >
            {"Do nhu cầu mở rộng kinh doanh Công Ty TNHH Hồng Hạc cần tuyển  nhân viên phát triển, bán hàng".toUpperCase()}
          </Typography>
        </Grid>
        <Grid xs={10} item>
          <Typography
            variant="h5"
            fontWeight={"bold"}
            color={theme.palette.primary.main}
            sx={{ paddingTop: 4 }}
          >
            1. Thông tin vị trí:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Tên vị trí: Nhân viên phát triển, bán hàng Sent mail"
                sx={{ color: theme.palette.primary.main }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Thời gian bắt đầu làm việc: 01/06/2024."
                sx={{ color: theme.palette.primary.main }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Địa điểm làm việc: Linh hoạt hoặc tại văn phòng (Phường 10, quận Gò Vấp,  TP. HCM)"
                sx={{ color: theme.palette.primary.main }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Lĩnh vực hoạt động: Kinh doanh thiết bị điện,thiết bị điện tử"
                sx={{ color: theme.palette.primary.main }}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid xs={10} item>
          <Typography
            variant="h5"
            fontWeight={"bold"}
            color={theme.palette.primary.main}
            sx={{ paddingTop: 4 }}
          >
            2. Mô tả công việc:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Tìm kiếm khách hàng tiềm năng, duy trì và phát triển mạng lưới khách hàng trong khu vực."
                sx={{ color: theme.palette.primary.main }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Tiếp cận khách hàng là các đại lý bán hàng thuộc kênh phân phối, các công ty thi công,các nhà thầu chuyên thi công hệ thống chiếu sáng, thiết bị điện và thiết bị điện tử."
                sx={{ color: theme.palette.primary.main }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Tiếp nhận, truyền tải thông tin, tư vấn sản phẩm và các chính sách bán hàng, MKT của côngty đến các đại lý cấp 2 phụ trách, hỗ trợ đại lý bán các sản phẩm của công ty."
                sx={{ color: theme.palette.primary.main }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Giải đáp thắcmắc của nhà phân phối."
                sx={{ color: theme.palette.primary.main }}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid xs={10} item>
          <Typography
            variant="h5"
            fontWeight={"bold"}
            color={theme.palette.primary.main}
            sx={{ paddingTop: 4 }}
          >
            3. Yêu cầu công việc:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Kỹ năng giao tiếp và thuyết trình tốt."
                sx={{ color: theme.palette.primary.main }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Kỹ năng đàm phán và chốt sale thành thạo."
                sx={{ color: theme.palette.primary.main }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Kỹ năng đàm phán và chốt sale thành thạo."
                sx={{ color: theme.palette.primary.main }}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid xs={10} item>
          <Typography
            variant="h5"
            fontWeight={"bold"}
            color={theme.palette.primary.main}
            sx={{ paddingTop: 4 }}
          >
            4. Lương và phúc lợi:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Mức lương: Mức lương cho vị trí nhân viên phát triển bán hàng thường phụ thuộc vào kinh nghiệm,kỹ năng và năng lực của ứng viên."
                sx={{ color: theme.palette.primary.main }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Mức lương cơ bản dao động từ 7.000.000 VNĐ đến 15.000.000 VNĐ/tháng, cộng thêm doanh số khaithác theo KPI"
                sx={{ color: theme.palette.primary.main }}
              />
            </ListItem>
          </List>
        </Grid>

        <Grid xs={12} item>
          <Typography
            variant="h4"
            color={theme.palette.primary.main}
            textAlign={"center"}
            fontWeight={"bold"}
            sx={{ paddingTop: 8, paddingBottom: 2 }}
          >
            NỘP HỒ SƠ NGAY
          </Typography>
        </Grid>
        <Grid xs={8} item>
          <Typography
            variant="h6"
            color={theme.palette.primary.main}
            textAlign={"center"}
            fontWeight={"bold"}
          >
            Thư xin việc, CV nêu quá trình học tập và công tác.
          </Typography>
          <Typography
            variant="h6"
            color={theme.palette.primary.main}
            textAlign={"center"}
            fontWeight={"bold"}
          >
            Hãy liên hệ với chúng tôi.
          </Typography>
        </Grid>

        <Grid
          xs={10}
          container
          item
          justifyContent={"center"}
          sx={{ paddingTop: 4, paddingBottom: 4 }}
        >
          <Grid md={4} xs={12} item container sx={{ paddingBottom: {xs: 4, md: 0} }}>
            <Grid
              xs={12}
              item
              justifyContent={"center"}
              container
              sx={{ mb: 2 }}
            >
              <Image src={emailImg} alt="icon" />
            </Grid>
            <Grid xs={12} item justifyContent={"center"} container>
              <Typography
                variant="h5"
                color={theme.palette.primary.main}
                textAlign={"center"}
                fontWeight={"bold"}
              >
                Email
              </Typography>
            </Grid>
            <Grid xs={12} item justifyContent={"center"} container>
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                textAlign={"center"}
              >
                Gửi email cho chúng tôi ngay hôm nay!
              </Typography>
            </Grid>
            <Grid xs={12} item justifyContent={"center"} container>
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                textAlign={"center"}
              >
                <u>honghac.trading@gmail.com</u>
              </Typography>
            </Grid>
          </Grid>
          <Grid md={4} xs={12} item container>
            <Grid
              xs={12}
              item
              justifyContent={"center"}
              container
              sx={{ mb: 2 }}
            >
              <Image src={phoneImg} alt="icon" />
            </Grid>
            <Grid xs={12} item justifyContent={"center"} container>
              <Typography
                variant="h5"
                color={theme.palette.primary.main}
                textAlign={"center"}
                fontWeight={"bold"}
              >
                Phone
              </Typography>
            </Grid>
            <Grid xs={12} item justifyContent={"center"} container>
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                textAlign={"center"}
              >
                Hãy gọi cho chúng tôi ngay bây giờ!
              </Typography>
            </Grid>
            <Grid xs={12} item justifyContent={"center"} container>
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                textAlign={"center"}
              >
                <u>0903667510</u>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Typography
          variant="h5"
          textAlign={"center"}
          fontWeight={"bold"}
          color={theme.palette.primary.main}
          sx={{ paddingTop: 4, paddingBottom: 6 }}
        >
          Công ty nhận hồ sơ qua mail và thông báo phỏng vấn cho những ứng viên
          đạt yêu cầu.
        </Typography>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}
