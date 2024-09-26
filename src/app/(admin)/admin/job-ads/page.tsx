'use client';
import { useEffect, useState } from 'react';
import {
    alpha,
    Box,
    Button,
    IconButton,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IJobAds } from '@/types/job-ads/job-ads.interface';
import { JobAdsDialog } from './components/JobAdsDialog';
import axios from '@/api/axios.instance';
import { ApiResponse } from '@/types/utils/api-response.interface';
import { ApiPathEnum } from '@/api/api.path.enum';
import SideMenu from '../dashboard/components/SideMenu';

export default function JobAds() {
    const [type, setType] = useState<'CREATE' | 'UPDATE'>('CREATE');
    const [open, setOpen] = useState(false);
    const [reload, setReload] = useState(true);
    const [selectedJobAds, setSelectedJobAds] = useState<IJobAds | undefined>();
    const [jobAdsList, setJobAdsList] = useState<IJobAds[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event: any, newPage: any) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedJobAdsList = jobAdsList.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
    );

    const handleDelete = (id: string) => {
        return;
    };

    const handleUpdate = (job: IJobAds) => {
        setSelectedJobAds(job);
        setType('UPDATE');
        setOpen(true);
    };

    const handleCreate = () => {
        setType('CREATE')
        setOpen(true)
    }

    useEffect(() => {
        axios.get<ApiResponse<IJobAds[]>>(ApiPathEnum.JobAds).then((res) => {
            if (res.status === 200) {
                setJobAdsList(res.data.data as IJobAds[]);
            }
        });
    }, [reload]);

    return (
        <Box display={'flex'}>
            <SideMenu />
            <Box
                component="main"
                sx={(theme) => ({
                    position: { sm: 'relative', md: '' },
                    top: { sm: '48px', md: '0' },
                    height: { sm: 'calc(100vh - 48px)', md: '100vh' },
                    flexGrow: 1,
                    pt: 2,
                    backgroundColor: alpha(theme.palette.background.default, 1),
                    overflow: 'auto',
                })}
            >
                <Stack
                    spacing={2}
                    sx={{
                        alignItems: 'center',
                        mx: 3,
                        pb: 10,
                    }}
                >
                    <Typography variant="h4">Quản lý tin tuyển dụng</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            width: '100%',
                        }}
                    >
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<AddIcon />}
                            color="info"
                            onClick={() => {
                                handleCreate()
                            }}
                        >
                            Tin tuyển dụng mới
                        </Button>
                    </Box>
                    <TableContainer
                        sx={{
                            width: '100%',
                            maxWidth: { sm: '100%', md: '1700px' },
                        }}
                        component={Paper}
                    >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        align="left"
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        Id
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        Tên tin tuyển dụng
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        Vị trí
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        Số lượng
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        Ngày bắt đầu
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        Hành động
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {paginatedJobAdsList.map((job) => (
                                    <TableRow
                                        key={job.name}
                                        sx={{
                                            '&:last-child td, &:last-child th':
                                                { border: 0 },
                                        }}
                                    >
                                        <TableCell align="left">
                                            {job._id}
                                        </TableCell>
                                        <TableCell align="left">
                                            {job.name}
                                        </TableCell>
                                        <TableCell align="left"></TableCell>
                                        <TableCell align="left">
                                            {job.position}
                                        </TableCell>
                                        <TableCell align="left">
                                            {job.startDate.toString()}
                                        </TableCell>
                                        <TableCell align="center">
                                            <IconButton
                                                sx={{
                                                    border: 'none',
                                                    boxShadow: 'none',
                                                    padding: 0,
                                                }}
                                            >
                                                <EditIcon
                                                    color="success"
                                                    onClick={() => {
                                                        handleUpdate(job);
                                                    }}
                                                />
                                            </IconButton>
                                            <IconButton
                                                color="secondary"
                                                sx={{
                                                    border: 'none',
                                                    boxShadow: 'none',
                                                    padding: 0,
                                                }}
                                                onClick={() => {
                                                    handleDelete(
                                                        job?._id as string,
                                                    );
                                                }}
                                            >
                                                <DeleteIcon color="error" />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 50]}
                        component="div"
                        count={jobAdsList.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Stack>
            </Box>
            <JobAdsDialog
                open={open}
                reload={reload}
                setOpen={setOpen}
                setReload={setReload}
                type={type}
                jobAds={selectedJobAds}
            />
        </Box>
    );
}
