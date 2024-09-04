'use client'; // Ensure this is a client component

import React, { useEffect, useState } from 'react';
import { Select, MenuItem, FormControl, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import vnIcon from '../app/assets/images/flag/vn.png';
import engIcon from '../app/assets/images/flag/eng.png';
import zhIcon from '../app/assets/images/flag/zh.png';
import Image from 'next/image';

const LanguageSelectContainer = styled(FormControl)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(0.5, 2),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    minWidth: 120,
}));

const LanguageButton = () => {
    const [language, setLanguage] = useState('en');

    const handleLanguageChange = (event: any) => {
        setLanguage(event.target.value);
        // Add logic to handle language change (e.g., i18n)
    };

    useEffect(() => {}, []);

    return (
        <LanguageSelectContainer variant="outlined">
            <Select
                renderValue={(value) => {
                    return (
                        <Avatar>
                            <Image
                                alt="vn"
                                src={
                                    language === 'en'
                                        ? engIcon
                                        : language === 'vi'
                                          ? vnIcon
                                          : zhIcon
                                }
                                quality={100}
                                fill
                            />
                            ;
                        </Avatar>
                    );
                }}
                value={language}
                onChange={handleLanguageChange}
                sx={{
                    color: '#fff',
                    '.MuiSvgIcon-root ': {
                        fill: '#fff',
                    },
                    '.MuiOutlinedInput-notchedOutline': { borderStyle: 'none' },
                }}
            >
                <MenuItem value="vi">VN</MenuItem>
                <MenuItem value="zh">中文</MenuItem>
                <MenuItem value="en">ENG</MenuItem>
            </Select>
        </LanguageSelectContainer>
    );
};

export default LanguageButton;
