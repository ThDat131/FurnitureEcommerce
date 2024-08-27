import { Divider, Grid, ThemeProvider, Typography } from "@mui/material";
import theme from "../../theme";
import teamWorkImg from "../../../assets/images/teamWork.jpg";
import hatImg from "../../../assets/images/icon/hatIcon.png";
import clockkImg from "../../../assets/images/icon/clockIcon.png";
import handImg from "../../../assets/images/icon/handShake.png";
import stonkImg from "../../../assets/images/icon/stonk.png";
import Image from "next/image";

export default function Discovery() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent={"center"}
        xs={12}
        sx={{ backgroundColor: theme.palette.primary.contrastText }}
      >
        <Grid xs={8} item>
          <Typography
            variant="h4"
            color={theme.palette.primary.main}
            textAlign={"center"}
            fontWeight={"bold"}
            sx={{ paddingTop: 4, paddingBottom: 4 }}
          >
            {"Khám phá những cơ hội thú vị dành cho sinh viên và người mới tốt nghiệp".toUpperCase()}
          </Typography>
        </Grid>
        <Grid xs={10} item>
          <Typography
            variant="h6"
            color={theme.palette.primary.main}
            textAlign={"justify"}
          >
            Tại ePioneer, chúng tôi tin vào việc nuôi dưỡng tài năng trẻ và cung
            cấp cho họ những cơ hội giá trị để khởi nghiệp. Cho dù bạn là sinh
            viên đang tìm kiếm cơ hội thực tập hay là sinh viên mới tốt nghiệp
            đang tìm kiếm việc làm toàn thời gian, chúng tôi đều có nhiều cơ hội
            thú vị đang chờ bạn.
          </Typography>
        </Grid>
        <Grid xs={8} item justifyContent={"center"}>
          <Image
            src={teamWorkImg}
            alt="photo"
            layout="responsive"
            style={{ paddingTop: 30, paddingBottom: 30 }}
          />
        </Grid>

        <Grid
          xs={8}
          container
          item
          justifyContent={"space-between"}
          sx={{ paddingBottom: 6 }}
        >
          <Grid
            xs={12}
            sm={5}
            item
            container
            justifyContent={"center"}
            sx={{ paddingBottom: { xs: 4, sm: 2 } }}
          >
            <Grid xs={12} container justifyContent={"center"}>
              <Image
                src={hatImg}
                alt="Hat Image"
                layout="responsive"
                style={{ maxWidth: 100 }}
              />
            </Grid>
            <Typography
              variant="h4"
              color={theme.palette.primary.main}
              textAlign={"center"}
              fontWeight={"bold"}
            >
              Thực tập
            </Typography>
            <Typography
              variant="subtitle1"
              color={theme.palette.primary.main}
              textAlign={"center"}
              fontWeight={"bold"}
            >
              Có được kinh nghiệm thực tế và học hỏi từ các chuyên gia trong
              ngành thông qua chương trình thực tập của chúng tôi.
            </Typography>
          </Grid>
          <Grid
            xs={12}
            sm={5}
            item
            container
            justifyContent={"center"}
            sx={{ paddingBottom: { xs: 4, sm: 2 } }}
          >
            <Grid xs={12} container justifyContent={"center"}>
              <Image
                src={clockkImg}
                alt="Hat Image"
                layout="responsive"
                style={{ maxWidth: 100 }}
              />
            </Grid>
            <Typography
              variant="h4"
              color={theme.palette.primary.main}
              textAlign={"center"}
              fontWeight={"bold"}
            >
              Toàn thời gian
            </Typography>
            <Typography
              variant="subtitle1"
              color={theme.palette.primary.main}
              textAlign={"center"}
              fontWeight={"bold"}
            >
              Hãy tham gia đội ngũ năng động của chúng tôi và bắt đầu hành trình
              sự nghiệp thú vị cùng ePioneer.
            </Typography>
          </Grid>
        </Grid>

        <Grid xs={12} container justifyContent={"center"}>
          <Grid xs={8} item>
            <Typography
              variant="h4"
              color={theme.palette.primary.main}
              textAlign={"center"}
              fontWeight={"bold"}
              sx={{ paddingTop: 4, paddingBottom: 4 }}
            >
              {"Cố vấn, trải nghiệm thực tế và phát triển nghề nghiệp".toUpperCase()}
            </Typography>
          </Grid>
          <Grid xs={10} item>
            <Typography
              variant="h6"
              color={theme.palette.primary.main}
              textAlign={"justify"}
              sx={{ mb: 8 }}
            >
              Tại ePioneer, chúng tôi tin vào việc nuôi dưỡng tài năng trẻ và
              cung cấp cho họ những cơ hội giá trị để khởi nghiệp. Cho dù bạn là
              sinh viên đang tìm kiếm cơ hội thực tập hay là sinh viên mới tốt
              nghiệp đang tìm kiếm việc làm toàn thời gian, chúng tôi đều có
              nhiều cơ hội thú vị đang chờ bạn.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          xs={10}
          container
          item
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Grid
            sm={4}
            xs={12}
            container
            item
            borderRadius={10}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.primary.main,
              padding: 4,
            }}
          >
            <Typography
              variant={"h4"}
              textAlign={"center"}
              color={theme.palette.primary.contrastText}
            >
              Giờ làm việc linh hoạt và cân bằng giữa công việc và cuộc sống
            </Typography>
          </Grid>
          <Grid xs={6} item container justifyContent={"center"}>
            <Image src={clockkImg} alt="" width={100} />
            <Typography
              variant={"h6"}
              color={theme.palette.primary.main}
              textAlign={"center"}
              sx={{ mt: 2 }}
            >
              Có được kinh nghiệm thực tế và học hỏi từ các chuyên gia trong
              ngành thông qua chương trình thực tập của chúng tôi.
            </Typography>
          </Grid>
        </Grid>
        <Grid xs={10}>
          <Divider sx={{ mt: 4, mb: 4 }} />
        </Grid>
        <Grid
          xs={10}
          container
          item
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Grid
            xs={6}
            item
            container
            justifyContent={"center"}
            sx={{ order: { xs: 2, sm: 1 } }}
          >
            <Image src={handImg} alt="" width={100} />
            <Typography
              variant={"h6"}
              color={theme.palette.primary.main}
              textAlign={"center"}
              sx={{ mt: 2 }}
            >
              Tại ePioneer, chúng tôi thúc đẩy một môi trường làm việc hợp tác
              và toàn diện, nơi mọi ý tưởng của mọi người đều được coi trọng.
              Chúng tôi tin rằng sự đa dạng thúc đẩy sự đổi mới và thành công.
            </Typography>
          </Grid>
          <Grid
            sm={4}
            xs={12}
            container
            item
            borderRadius={10}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.primary.main,
              padding: 4,
              order: { xs: 1, sm: 2 },
            }}
            order={1}
          >
            <Typography
              variant={"h4"}
              textAlign={"center"}
              color={theme.palette.primary.contrastText}
            >
              Môi trường làm việc hợp tác và toàn diện
            </Typography>
          </Grid>
        </Grid>
        <Grid xs={10}>
          <Divider sx={{ mt: 4, mb: 4 }} />
        </Grid>
        <Grid
          xs={10}
          container
          item
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Grid
            sm={4}
            xs={12}
            container
            item
            borderRadius={10}
            alignItems={"center"}
            sx={{ backgroundColor: theme.palette.primary.main, padding: 4 }}
          >
            <Typography
              variant={"h4"}
              textAlign={"center"}
              color={theme.palette.primary.contrastText}
            >
              Cơ hội phát triển và thăng tiến nghề nghiệp
            </Typography>
          </Grid>
          <Grid xs={6} item container justifyContent={"center"}>
            <Image src={stonkImg} alt="" width={100} />
            <Typography
              variant={"h6"}
              color={theme.palette.primary.main}
              textAlign={"center"}
              sx={{ mt: 2 }}
            >
              Chúng tôi cam kết phát triển và tăng trưởng chuyên môn cho nhân
              viên. Tại ePioneer, chúng tôi cung cấp nhiều cơ hội học tập và
              thăng tiến để giúp các thành viên trong nhóm phát huy hết tiềm
              năng của mình.
            </Typography>
          </Grid>
        </Grid>
        <Grid xs={10}>
          <Divider sx={{ mt: 4, mb: 4 }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
