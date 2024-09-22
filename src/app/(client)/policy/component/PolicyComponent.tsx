'use client';
import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import Footer from '@/components/Footer';
import { IBanner } from '@/types/products/products.interface';
import { Grid, ThemeProvider, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import blog from '../../../assets/images/blog1.jpg';
import cartImg from '../../../assets/images/icon/cart.png';
import clockImg from '../../../assets/images/icon/clockIcon.png';
import expressImg from '../../../assets/images/icon/express.png';
import paymentImg from '../../../assets/images/icon/payment.png';
import shieldImg from '../../../assets/images/icon/shield.png';
import tradeImg from '../../../assets/images/icon/trade.png';
import peopleStonkImg from '../../../assets/images/peopleStonk.png';
import theme from '../../theme';

export default function PolicyComponent() {
    const [banner, setBanner] = useState<IBanner>();

    const getBanner = (name: string) => {
        axios.get(`${ApiPathEnum.Banner}`, { params: { name } }).then((res) => {
            if (res.status === 200) {
                setBanner(res.data.data[0]);
            }
        });
    };

    useEffect(() => {
        getBanner('policyBannerImg');
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <Grid
                xs={12}
                container
                justifyContent={'center'}
                sx={{ backgroundColor: theme.palette.primary.contrastText }}
            >
                <Grid
                    container
                    xs={12}
                    sx={{
                        backgroundImage: `url(${banner?.image.url})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        paddingTop: { xs: 4, md: 16 },
                        paddingBottom: { xs: 4, md: 16 },
                    }}
                >
                    <Grid xs={8} item>
                        <Typography
                            variant="h4"
                            fontWeight={'bold'}
                            textAlign={'center'}
                            color={theme.palette.primary.main}
                            sx={{
                                paddingTop: 4,
                                paddingBottom: 4,
                                fontSize: { xs: '0.6rem', sm: '2.125rem' },
                            }}
                        >
                            CÙNG NHAU NÂNG CAO THÀNH CÔNG
                        </Typography>
                    </Grid>
                    <Grid xs={8} item>
                        <Typography
                            variant="h6"
                            textAlign={'center'}
                            color={theme.palette.primary.main}
                            sx={{
                                fontSize: { xs: '0.55rem', sm: '1.25rem' },
                                paddingBottom: 4,
                            }}
                        >
                            Tại ePioneer, chúng tôi chuyên cung cấp các giải
                            pháp sáng tạo và chất lượng, cùng nhau nâng cao
                            thành công.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid xs={10} item>
                    <Typography
                        variant="h6"
                        textAlign={'justify'}
                        color={theme.palette.primary.main}
                        sx={{ paddingBottom: 4 }}
                    >
                        Công ty Epioneer là một công ty thương mại và dịch vụ
                        với tiêu chí đem lại sự cải tiến, hiện đại trong các sản
                        phẩm về điện cho người tiêu dùng. Chúng tôi luôn cố gắng
                        hết sức để đi đầu trong lĩnh vực này với các sản phẩm
                        tiên tiến, tiện dụng. Để mở rộng thị trường và nhằm đảm
                        bảo chất lượng sản phẩm, công ty Epioneer đang tìm kiếm
                        các đối tác, đại lý với các chính sách, ưu đãi.
                    </Typography>
                </Grid>

                <Grid xs={10} item>
                    <Typography
                        variant="h4"
                        fontWeight={'bold'}
                        textAlign={'center'}
                        color={theme.palette.primary.main}
                        sx={{ paddingTop: 8, paddingBottom: 4 }}
                    >
                        {'Nguồn hàng chất lượng với giá cả phải chăng'.toUpperCase()}
                    </Typography>
                </Grid>
                <Grid xs={10} md={6} item>
                    <Image alt="" src={blog} layout="responsive" />
                </Grid>
                <Grid xs={10} item>
                    <Typography
                        variant="h6"
                        textAlign={'justify'}
                        color={theme.palette.primary.main}
                        sx={{ paddingTop: 4 }}
                    >
                        Công ty Epioneer là một công ty thương mại và dịch vụ
                        với tiêu chí đem lại sự cải tiến, hiện đại trong các sản
                        phẩm về điện cho người tiêu dùng. Chúng tôi luôn cố gắng
                        hết sức để đi đầu trong lĩnh vực này với các sản phẩm
                        tiên tiến, tiện dụng. Để mở rộng thị trường và nhằm đảm
                        bảo chất lượng sản phẩm, công ty Epioneer đang tìm kiếm
                        các đối tác, đại lý với các chính sách, ưu đãi.
                    </Typography>
                </Grid>

                <Grid xs={10} item>
                    <Typography
                        variant="h4"
                        fontWeight={'bold'}
                        textAlign={'center'}
                        color={theme.palette.primary.main}
                        sx={{ paddingTop: 8, paddingBottom: 2 }}
                    >
                        CHÍNH SÁCH CHUNG
                    </Typography>
                    <Grid
                        xs={12}
                        item
                        container
                        justifyContent={'space-evenly'}
                        sx={{ paddingTop: 4, paddingBottom: 4 }}
                    >
                        <Grid
                            md={4}
                            xs={12}
                            item
                            container
                            sx={{ paddingBottom: { md: 0, xs: 4 } }}
                        >
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                                sx={{ mb: 2 }}
                            >
                                <Image
                                    src={expressImg}
                                    alt="icon"
                                    width={130}
                                />
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h5"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                    fontWeight={'bold'}
                                >
                                    Vận chuyển và thời gian giao hàng
                                </Typography>
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h6"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                >
                                    Hãy tin tưởng vào thiết bị cho thuê đáng tin
                                    cậy của ePioneer để mang lại hiệu suất và
                                    chức năng vượt trội.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid md={4} xs={12} item container>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                                sx={{ mb: 2 }}
                            >
                                <Image src={shieldImg} alt="icon" width={120} />
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h5"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                    fontWeight={'bold'}
                                >
                                    Bảo hành
                                </Typography>
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h6"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                >
                                    Các tùy chọn cho thuê linh hoạt của chúng
                                    tôi cho phép bạn tùy chỉnh thiết lập triển
                                    lãm theo nhu cầu cụ thể của mình.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid xs={10} item>
                    <Typography
                        variant="h4"
                        fontWeight={'bold'}
                        textAlign={'center'}
                        color={theme.palette.primary.main}
                        sx={{ paddingTop: 8, paddingBottom: 2 }}
                    >
                        CHÍNH SÁCH THANH TOÁN
                    </Typography>
                    <Grid
                        xs={12}
                        item
                        container
                        justifyContent={'space-evenly'}
                        sx={{ paddingTop: 4, paddingBottom: 4 }}
                    >
                        <Grid
                            md={4}
                            xs={12}
                            item
                            container
                            sx={{ paddingBottom: { md: 0, xs: 4 } }}
                        >
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                                sx={{ mb: 2 }}
                            >
                                <Image
                                    src={paymentImg}
                                    alt="icon"
                                    width={120}
                                />
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h5"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                    fontWeight={'bold'}
                                >
                                    Vận chuyển và thời gian giao hàng
                                </Typography>
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h6"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                >
                                    Hãy tin tưởng vào thiết bị cho thuê đáng tin
                                    cậy của ePioneer để mang lại hiệu suất và
                                    chức năng vượt trội.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid md={4} xs={12} item container>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                                sx={{ mb: 2 }}
                            >
                                <Image src={clockImg} alt="icon" width={130} />
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h5"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                    fontWeight={'bold'}
                                >
                                    Bảo hành
                                </Typography>
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h6"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                >
                                    Các tùy chọn cho thuê linh hoạt của chúng
                                    tôi cho phép bạn tùy chỉnh thiết lập triển
                                    lãm theo nhu cầu cụ thể của mình.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid xs={10} item>
                    <Typography
                        variant="h4"
                        fontWeight={'bold'}
                        textAlign={'center'}
                        color={theme.palette.primary.main}
                        sx={{ paddingTop: 8, paddingBottom: 2 }}
                    >
                        CHÍNH SÁCH HỖ TRỢ
                    </Typography>
                    <Typography
                        variant="h5"
                        fontWeight={'bold'}
                        color={theme.palette.primary.main}
                        sx={{ paddingBottom: 2 }}
                    >
                        Hỗ trợ về PR - Marketing
                    </Typography>
                    <Typography
                        variant="h6"
                        textAlign={'justify'}
                        color={theme.palette.primary.main}
                        sx={{ paddingBottom: 2 }}
                    >
                        Quý đại lý sẽ được hỗ trợ kỹ thuật qua điện thoại, qua
                        email, hoặc hỗ trợ kỹ thuật trực tiếp tại chỗ khi có yêu
                        cầu.Quý đại lý sẽ được chúng tôi tư vấn và hỗ trợ về
                        giải pháp và kỹ thuật khi có yêu cầu.
                    </Typography>

                    <Grid xs={12} container item justifyContent={'center'}>
                        <Grid md={6} xs={12} item>
                            <Image alt="" src={blog} layout="responsive" />
                        </Grid>
                    </Grid>

                    <Typography
                        variant="h5"
                        fontWeight={'bold'}
                        color={theme.palette.primary.main}
                        sx={{ paddingTop: 8, paddingBottom: 2 }}
                    >
                        Hỗ trợ về kỹ thuật, giải pháp
                    </Typography>
                    <Typography
                        variant="h6"
                        textAlign={'justify'}
                        color={theme.palette.primary.main}
                        sx={{ paddingBottom: 2 }}
                    >
                        Quý đại lý sẽ được hỗ trợ kỹ thuật qua điện thoại, qua
                        email, hoặc hỗ trợ kỹ thuật trực tiếp tại chỗ khi có yêu
                        cầu.Quý đại lý sẽ được chúng tôi tư vấn và hỗ trợ về
                        giải pháp và kỹ thuật khi có yêu cầu.
                    </Typography>

                    <Typography
                        variant="h5"
                        fontWeight={'bold'}
                        color={theme.palette.primary.main}
                        sx={{ paddingTop: 8, paddingBottom: 2 }}
                    >
                        Hỗ trợ về kỹ thuật, giải pháp
                    </Typography>

                    <Grid
                        xs={12}
                        item
                        container
                        justifyContent={'space-evenly'}
                        sx={{ paddingTop: 4, paddingBottom: 4 }}
                    >
                        <Grid
                            md={4}
                            xs={12}
                            item
                            container
                            sx={{ paddingBottom: { md: 0, xs: 4 } }}
                        >
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                                sx={{ mb: 2 }}
                            >
                                <Image src={tradeImg} alt="icon" width={300} />
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h5"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                    fontWeight={'bold'}
                                >
                                    Đổi hàng
                                </Typography>
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h6"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                >
                                    Trong vòng 07 ngày kể từ giao hàng. Quý đại
                                    lý sẽ được đổi hàng mới nếu sản phẩm được
                                    xác định lỗi từ nhà sản xuất.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid md={4} xs={12} item container>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                                sx={{ mb: 2 }}
                            >
                                <Image src={cartImg} alt="icon" width={120} />
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h5"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                    fontWeight={'bold'}
                                >
                                    Bảo hành
                                </Typography>
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h6"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                >
                                    Các tùy chọn cho thuê linh hoạt của chúng
                                    tôi cho phép bạn tùy chỉnh thiết lập triển
                                    lãm theo nhu cầu cụ thể của mình.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid xs={8} item>
                    <Typography
                        variant="h4"
                        fontWeight={'bold'}
                        textAlign={'center'}
                        color={theme.palette.primary.contrastText}
                        sx={{
                            paddingTop: { xs: 4, md: 8 },
                            paddingBottom: { xs: 4, md: 8 },
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: 8,
                            marginTop: 8,
                            marginBottom: 4,
                        }}
                    >
                        ĐẠI LÝ KINH DOANH PHÁT TRIỂN LÀ NIỀM HẠNH PHÚC CỦA CHÚNG
                        TÔI
                    </Typography>

                    <Typography
                        variant="h5"
                        textAlign={'center'}
                        color={theme.palette.primary.main}
                    >
                        Chúng tôi rất mong muốn cùng Quý Đại lý hợp tác để trao
                        nhau cơ hội kinh doanh, cùng nhau phát triển vững mạnh.
                    </Typography>
                </Grid>

                <Grid
                    xs={10}
                    item
                    container
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    sx={{ paddingTop: 10, paddingBottom: 10 }}
                >
                    <Grid item md={5} xs={12}>
                        <Typography
                            variant="h4"
                            textAlign={'center'}
                            fontWeight={'bold'}
                            color={theme.palette.primary.main}
                            sx={{ paddingBottom: 4 }}
                        >
                            Khám phá các giải pháp sáng tạo và chất lượng của
                            chúng tôi
                        </Typography>
                        <Typography
                            variant="h6"
                            textAlign={'center'}
                            color={theme.palette.primary.main}
                        >
                            Khám phá cách chúng tôi có thể nâng cao trải nghiệm
                            của bạn.
                        </Typography>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <Image
                            alt=""
                            src={peopleStonkImg}
                            layout="responsive"
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </ThemeProvider>
    );
}
