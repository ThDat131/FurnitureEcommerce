import {
    Card,
    Divider,
    Grid,
    Paper,
    ThemeProvider,
    Typography,
} from '@mui/material';
import Image from 'next/image';
import activityImg from '../../../assets/images/Furniture-login.jpg';
import theme from '../../theme';

export default function Blog({ directionImg }: any) {
    const blogTheme = theme;
    return (
        <ThemeProvider theme={blogTheme}>
            <Paper elevation={24} sx={{ mt: 4, mb: 4 }}>
                <Card>
                    <Grid
                        xs={12}
                        container
                        justifyContent={'space-evenly'}
                        sx={{ p: 2 }}
                    >
                        <Grid
                            xs={4}
                            item
                            sx={{
                                borderRadius: 8,
                                overflow: 'hidden',
                                order: directionImg === 'right' ? 1 : 0,
                            }}
                        >
                            <Image
                                src={activityImg}
                                alt="Image"
                                layout="responsive"
                            />
                        </Grid>
                        <Grid
                            xs={6}
                            item
                            sx={{ order: directionImg === 'right' ? 0 : 1 }}
                        >
                            <Typography
                                variant="h5"
                                color={blogTheme.palette.primary.main}
                                textAlign={'center'}
                            >
                                TIÊU ĐỀ
                            </Typography>
                            <Divider />
                            <Typography
                                variant="subtitle1"
                                color={blogTheme.palette.primary.main}
                                sx={{
                                    fontFamily: 'HelveticaNeue',
                                    fontWeight: 'lighter',
                                    textAlign: 'justify',
                                    marginBottom: 2,
                                }}
                            >
                                Mô tả
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
            </Paper>
        </ThemeProvider>
    );
}
