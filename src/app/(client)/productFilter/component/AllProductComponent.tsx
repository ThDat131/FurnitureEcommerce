'use client';

import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import Footer from '@/components/Footer';
import { ICategory } from '@/types/categories/categories.interface';
import { IProduct } from '@/types/products/products.interface';
import {
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Switch,
    ThemeProvider,
    Typography,
} from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProductBox from '../../products/components/product-box';
import theme from '../../theme';

const AllProductComponent = () => {
    const searchParams = useSearchParams();

    const [products, setProducts] = useState<IProduct[]>();
    const [categories, setCategories] = useState<ICategory[]>();
    const [categoryId, setCategoryId] = useState('');
    const [isNew, setIsNew] = useState(
        searchParams.get('isNew')?.split('.html')[0] === 'true' ? true : false,
    );
    const [isPotential, setIsPotential] = useState(
        searchParams.get('isPotential')?.split('.html')[0] === 'true'
            ? true
            : false,
    );

    let categoryIdParam;

    const searchCategory = searchParams.get('category');

    if (searchCategory) {
        categoryIdParam = searchCategory?.split('-')[1].split('.html')[0];
    }

    const handleIsNewChange = (event: any) => {
        setIsNew(event.target.checked);
    };

    const handleIsPotentialChange = (event: any) => {
        setIsPotential(event.target.checked);
    };

    const handleSelectChange = (event: SelectChangeEvent) => {
        setCategoryId(event.target.value);
    };

    const getProductByFilter = () => {
        axios
            .get(
                `${ApiPathEnum.Product}?category=${categoryId.trim()}&isNew=${isNew}&isPotential=${isPotential}`,
            )
            .then((res) => setProducts(res.data.data));
    };

    const getCategory = () => {
        axios
            .get(`${ApiPathEnum.Category}`)
            .then((res) => setCategories(res.data.data));
    };

    useEffect(() => {
        getProductByFilter();
        getCategory();
    }, [isNew, isPotential, categoryId]);

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                justifyContent={'center'}
                xs={12}
                sx={{
                    backgroundColor: theme.palette.primary.contrastText,
                    paddingTop: 4,
                    paddingBottom: 4,
                }}
            >
                <Grid item xs={10} container alignItems={'center'}>
                    <Grid xs={12} item>
                        <Typography
                            variant="h4"
                            color={theme.palette.primary.main}
                            fontWeight={'bold'}
                            textAlign={'center'}
                        >
                            SẢN PHẨM
                        </Typography>
                    </Grid>
                    <FormControl sx={{ width: 200, mr: 4 }}>
                        <InputLabel id="demo-simple-select-label">
                            Nhóm sản phẩm
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={categoryId || categoryIdParam}
                            label="Nhóm sản phẩm"
                            onChange={handleSelectChange}
                        >
                            <MenuItem value={' '}>None</MenuItem>
                            {categories?.map((category) => (
                                <MenuItem
                                    value={category._id}
                                    key={category._id}
                                >
                                    {category.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormGroup>
                        <Grid container alignItems={'center'} item>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={isNew}
                                        onChange={handleIsNewChange}
                                    />
                                }
                                label="Sản phẩm mới"
                                color="primary"
                                value={isNew}
                                sx={{ color: theme.palette.primary.main }}
                            />
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={isPotential}
                                        onChange={handleIsPotentialChange}
                                    />
                                }
                                label="Sản phẩm tiềm năng"
                                color="primary"
                                sx={{ color: theme.palette.primary.main }}
                            />
                        </Grid>
                    </FormGroup>
                    <Grid xs={12} sx={{ paddingTop: 2, paddingBottom: 2 }}>
                        <Divider />
                    </Grid>
                    <Grid item container xs={12} spacing={2}>
                        {products?.map((product) => (
                            <Grid item xs={12} md={6} lg={3} key={product._id}>
                                <ProductBox data={product} type={'product'} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </ThemeProvider>
    );
};

export default AllProductComponent;
