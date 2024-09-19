import {
    Card,
    CardActionArea,
    Divider,
    Grid,
    Paper,
    ThemeProvider,
    Typography,
} from '@mui/material';
import Image from 'next/image';
import theme from '../../theme';

export default function Blog({ directionImg, data, type }: any) {
    const blogTheme = theme;
    return (
        <ThemeProvider theme={blogTheme}>
            <Paper elevation={24} sx={{ mt: 4, mb: 4 }}>
                <CardActionArea>
                    <Card>
                        <Grid
                            xs={12}
                            container
                            justifyContent={'space-evenly'}
                            sx={{ p: 2 }}
                        >
                            <Grid
                                xs={12}
                                md={4}
                                item
                                sx={{
                                    borderRadius: 8,
                                    overflow: 'hidden',
                                    order: directionImg === 'right' ? 1 : 0,
                                }}
                            >
                                <Image
                                    src={type==='PRODUCT' ? data.images[0].url : data.img}
                                    alt="Image"
                                    layout="responsive"
                                    width={300}
                                    height={300}
                                    style={{ maxHeight: 600, objectFit: "contain" }}
                                />
                            </Grid>
                            <Grid
                                md={6}
                                xs={12}
                                item
                                sx={{ order: directionImg === 'right' ? 0 : 1 }}
                            >
                                <Typography
                                    variant="h5"
                                    color={blogTheme.palette.primary.main}
                                    textAlign={'center'}
                                >
                                    {type==='PRODUCT' ? data.name.toUpperCase() : data.title.toUpperCase()}
                                </Typography>
                                <Divider />
                                <Typography
                                    variant="h5"
                                    color={blogTheme.palette.primary.main}
                                    sx={{
                                        fontFamily: 'HelveticaNeue',
                                        fontWeight: 'lighter',
                                        textAlign: 'justify',
                                        marginBottom: 2,
                                    }}
                                >
                                    {type==='PRODUCT' ? data.description : data.subtitle}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Card>
                </CardActionArea>
            </Paper>
        </ThemeProvider>
    );
}
