import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import { ICategory } from '@/types/categories/categories.interface';
import { IProduct } from '@/types/products/products.interface';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    List,
    ListItem,
    Box,
    ListItemText,
    IconButton,
    ListItemAvatar,
    Avatar,
    FormControlLabel,
    Switch,
} from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ApiResponse } from '@/types/utils/api-response.interface';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VisuallyHiddenInput from '@/components/VisuallyHiddenInput';
import { LoadingButton } from '@mui/lab';
import {
    maximum255Character,
    maximum50Character,
    moreThanZero,
    requiredText,
} from '@/types/common/notification.constant';

interface ProductDialogProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setReload: Dispatch<SetStateAction<boolean>>;
    reload: boolean;
    type: 'CREATE' | 'UPDATE';
    product?: IProduct;
}

const ProductDialog: React.FC<ProductDialogProps> = ({
    open,
    setOpen,
    type,
    product,
    setReload,
    reload,
}) => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [uploadLoading, setUploadLoading] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const createProduct = (product: IProduct) => {
        delete product._id;
        axios.post(ApiPathEnum.Product, product).then((res) => {
            if (res.status === 201) {
                setReload(!reload);
            }
        });
    };

    const updateProduct = (product: IProduct) => {
        axios
            .put(`${ApiPathEnum.Product}/${product?._id}`, product)
            .then((res) => {
                if (res.status === 200) {
                    setReload(!reload);
                }
            });
    };

    const onSubmit = () => {
        if (type === 'CREATE') {
            createProduct(formik.values);
        } else {
            updateProduct(formik.values);
        }

        handleClose();
    };

    const getCategories = () => {
        axios
            .get<ApiResponse<ICategory[]>>(ApiPathEnum.Category)
            .then((res) => {
                if (res.status === 200) {
                    setCategories(res.data.data as ICategory[]);
                }
            });
    };

    const validationSchema = yup.object().shape({
        name: yup.string().required(requiredText).max(50, maximum50Character),
        description: yup.string().max(255, maximum255Character),
        price: yup.number().min(1, moreThanZero),
        stock: yup.number().min(1, moreThanZero),
    });

    const formik = useFormik({
        initialValues: {
            _id: type === 'CREATE' ? '' : product?._id,
            name: type === 'CREATE' ? '' : product?.name,
            description: type === 'CREATE' ? '' : product?.description,
            images: type === 'CREATE' ? [] : product?.images,
            price: type === 'CREATE' ? 0 : product?.price,
            stock: type === 'CREATE' ? 0 : product?.stock,
            categoryId:
                type === 'CREATE'
                    ? ''
                    : (product?.categoryId as ICategory)?._id,
            isNew: type === 'CREATE' ? false : product?.isNew,
            isPotential: type === 'CREATE' ? false : product?.isPotential,
        } as IProduct,
        onSubmit,
        enableReinitialize: true,
        validationSchema,
    });

    const deleteImage = (id: string) => {
        const newValue = formik.values.images.filter((x) => x.id !== id);
        formik.setFieldValue('images', newValue);
        axios.post(`${ApiPathEnum.Files}/remove`, { id });
    };

    const handleUploadImage = (evt: any) => {
        if (evt.target.files) {
            setUploadLoading(true);
            for (const file of evt.target.files) {
                const formData = new FormData();

                formData.append('files', file);
                axios
                    .post<ApiResponse<any>>(
                        `${ApiPathEnum.Files}/upload`,
                        formData,
                    )
                    .then((res) => {
                        if (res.status === 201) {
                            const images = res.data.data.map((x: any) => ({
                                id: x.public_id,
                                url: x.url,
                            }));
                            const newImages =
                                formik.values.images.concat(images);

                            formik.setFieldValue('images', newImages);
                        }
                    })
                    .finally(() => {
                        setUploadLoading(false);
                    });
            }
        }
    };

    useEffect(() => {
        if (open) {
            getCategories();

            if (product) {
                const adjustProduct = {
                    ...product,
                    categoryId: (product.categoryId as ICategory)
                        ?._id as string,
                };
                formik.setValues(adjustProduct);
            }
        }
    }, [open]);

    return (
        <Dialog open={open} onClose={handleClose} maxWidth={'sm'} fullWidth>
            <DialogTitle>
                {type === 'CREATE' ? 'Tạo sản phẩm' : 'Cập nhật sản phẩm'}
            </DialogTitle>
            <form onSubmit={formik.handleSubmit}>
                <DialogContent>
                    <TextField
                        sx={{ my: 1 }}
                        id="name"
                        label="Tên"
                        name="name"
                        fullWidth
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.name && Boolean(formik.errors.name)
                        }
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        sx={{ my: 1 }}
                        id="name"
                        label="Mô tả"
                        name="description"
                        fullWidth
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.description &&
                            Boolean(formik.errors.description)
                        }
                        helperText={
                            formik.touched.description &&
                            formik.errors.description
                        }
                    />
                    <LoadingButton
                        component="label"
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        sx={{ my: 1 }}
                        loading={uploadLoading}
                    >
                        Tải ảnh sản phẩm
                        <VisuallyHiddenInput
                            type="file"
                            multiple={true}
                            onChange={handleUploadImage}
                        />
                    </LoadingButton>
                    <List>
                        {formik.values.images.map((x) => (
                            <ListItem
                                key={x.id}
                                sx={{ gap: 2 }}
                                secondaryAction={
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={() => {
                                            deleteImage(x.id);
                                        }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar sx={{ width: 100, height: 100 }}>
                                        <Box
                                            component="img"
                                            src={x.url}
                                            width={1}
                                            height={1}
                                        />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{ overflow: 'hidden' }}
                                    primary={x.id}
                                />
                            </ListItem>
                        ))}
                    </List>
                    <TextField
                        sx={{ my: 1 }}
                        id="name"
                        label="Giá"
                        name="price"
                        fullWidth
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.price && Boolean(formik.errors.price)
                        }
                        helperText={formik.touched.price && formik.errors.price}
                        type="number"
                    />
                    <TextField
                        sx={{ my: 1 }}
                        id="name"
                        label="Số lượng tồn kho"
                        name="stock"
                        fullWidth
                        value={formik.values.stock}
                        onChange={formik.handleChange}
                        type="number"
                        error={
                            formik.touched.stock && Boolean(formik.errors.stock)
                        }
                        helperText={formik.touched.stock && formik.errors.stock}
                    />
                    <FormControl fullWidth sx={{ mt: 1, mb: 1 }}>
                        <InputLabel id="category">Nhóm sản phẩm</InputLabel>
                        <Select
                            labelId="category"
                            value={formik.values.categoryId}
                            label="Nhóm sản phẩm"
                            name="categoryId"
                            onChange={formik.handleChange}
                        >
                            {categories.map((x) => (
                                <MenuItem key={x._id} value={x._id}>
                                    {x.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={formik.values.isNew}
                                onChange={formik.handleChange}
                                name="isNew"
                            />
                        }
                        label="Sản phẩm mới"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={formik.values.isPotential}
                                onChange={formik.handleChange}
                                name="isPotential"
                            />
                        }
                        label="Sản phẩm tiềm năng"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Hủy bỏ</Button>
                    <Button type="submit">
                        {type === 'CREATE' ? 'Tạo mới' : 'Cập nhật'}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default ProductDialog;
