import { ApiPathEnum } from "@/api/api.path.enum";
import axios from "@/api/axios.instance";
import { ICategory } from "@/types/categories/categories.interface";
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface CategoryDialogProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
    setReload: Dispatch<SetStateAction<boolean>>
    reload: boolean
    type: 'CREATE' | 'UPDATE'
    category?: ICategory
}

const CategoryDialog: React.FC<CategoryDialogProps> = ({ open, setOpen, type, category, setReload, reload }) => {
    const [name, setName] = useState('')

    const handleClose = () => {
        setOpen(false);
    };

    const createCategory = (category: ICategory) => {
        axios.post(ApiPathEnum.Category, category).then(res => {
            if (res.status === 201) {
                setReload(!reload)
            }
        })
    }

    const updateCategory = (category: ICategory) => {
        axios.put(`${ApiPathEnum.Category}/${category?._id}`, category).then(res => {
            if (res.status === 200) {
                setReload(!reload)
            }
        })
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data: ICategory = {
            name,
        }

        if (type === 'CREATE') {
            createCategory(data)
        } else {

            updateCategory({
                ...data,
                _id: category?._id
            })
        }

        handleClose();
    }

    useEffect(() => {
        if (type === 'UPDATE') {
            setName(category?.name ?? '')
        } else {
            setName('')
        }
    }, [open])

    return <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
            component: 'form',
            onSubmit,
        }}
        maxWidth={'sm'}
        fullWidth
    >
        <DialogTitle>
            {
                type === 'CREATE' ? 'Tạo danh mục' : 'Cập nhật danh mục'
            }
        </DialogTitle>
        <DialogContent>
            <TextField
                sx={{ mt: 1 }}
                autoFocus
                required
                id="name"
                label="Tên danh mục"
                name="Tên danh mục"
                fullWidth
                value={name}
                onChange={(evt) => { setName(evt.target.value) }}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Hủy bỏ</Button>
            <Button type="submit">
                {
                    type === 'CREATE' ? 'Tạo mới' : 'Cập nhật'
                }
            </Button>
        </DialogActions>
    </Dialog>
}

export default CategoryDialog