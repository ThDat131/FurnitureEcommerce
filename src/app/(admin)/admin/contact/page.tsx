'use client';
import {
    alpha,
    Box,
    PaletteMode,
    Stack,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Checkbox,
} from '@mui/material';
import { useEffect, useState } from 'react';
import Header from '../dashboard/components/Header';
import Navbar from '../dashboard/components/Navbar';
import SideMenu from '../dashboard/components/SideMenu';
import axios from '@/api/axios.instance';
import { ApiResponse } from '@/types/utils/api-response.interface';
import { ApiPathEnum } from '@/api/api.path.enum';
import { Contact } from '@/types/contacts/contact.interface';
import { useCookies } from 'next-client-cookies';

export default function User() {
    const cookie = useCookies();
    const [mode, setMode] = useState<PaletteMode>('light');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [contacts, setContacts] = useState<Contact[]>([]);

    const config = {
        headers: {
            Authorization: `Bearer ${cookie.get('token')}`,
        },
    };

    const handleChangePage = (event: any, newPage: any) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedContacts = contacts.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
    );

    useEffect(() => {
        axios
            .get<ApiResponse<Contact[]>>(ApiPathEnum.Contact, config)
            .then((res) => {
                if (res.status === 200) {
                    setContacts(res.data.data as Contact[]);
                }
            });
    }, []);

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    const handleChangeResolved = (contact: Contact): void => {
        axios
            .put<ApiResponse<Contact>>(
                `${ApiPathEnum.Contact}/${contact._id}`,
                {
                    ...contact,
                    isResolved: !contact.isResolved,
                },
                config,
            )
            .then((res) => {
                if (res.status === 200) {
                    const newContacts = [...contacts];
                    const index = newContacts.findIndex(
                        (item) => item._id === contact._id,
                    );

                    newContacts[index] = res.data.data as Contact;
                    setContacts(newContacts);
                }
            });
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <SideMenu />
            <Navbar mode={mode} toggleColorMode={toggleColorMode} />
            {/* Main content */}
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
                    <Header mode={mode} toggleColorMode={toggleColorMode} />
                    <Typography
                        variant="h4"
                        color={mode === 'light' ? 'black' : 'white'}
                    >
                        Quản lý liên hệ
                    </Typography>
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
                                        Tên
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        Email
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        Tin nhắn
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        Đã giải quyết
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {paginatedContacts.map((contact) => (
                                    <TableRow
                                        key={contact._id}
                                        sx={{
                                            '&:last-child td, &:last-child th':
                                                { border: 0 },
                                        }}
                                    >
                                        <TableCell align="left">
                                            {contact._id}
                                        </TableCell>
                                        <TableCell align="left">
                                            {contact.name}
                                        </TableCell>
                                        <TableCell align="left">
                                            {contact.email}
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            sx={{ height: 'auto' }}
                                        >
                                            {contact.message}
                                        </TableCell>
                                        <TableCell align="left">
                                            <Checkbox
                                                checked={contact.isResolved}
                                                value={contact.isResolved}
                                                onClick={() =>
                                                    handleChangeResolved(
                                                        contact,
                                                    )
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 50]}
                        component="div"
                        count={contacts.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Stack>
            </Box>
        </Box>
    );
}
