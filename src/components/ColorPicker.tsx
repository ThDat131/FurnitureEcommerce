import React, { useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { SketchPicker } from "react-color";
import { useTheme } from "@mui/material/styles";
import ClickAwayListener from "@mui/material/ClickAwayListener";

interface ColorPickerProps {
    color: string;
    onChange: (color: string) => void;
    icon: React.ReactElement;
}

export default function ColorPicker({ color, onChange, icon }: ColorPickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const theme = useTheme();

    return (
        <Box sx={{ position: "relative" }}>
            <IconButton
                aria-label="Change Color"
                size="small"
                color="default"
                onClick={() => setIsOpen(true)}
            >
                {icon}
            </IconButton>
            {isOpen && (
                <ClickAwayListener onClickAway={() => setIsOpen(false)}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "30px",
                            left: "30px",
                            zIndex: 10,
                            userSelect: "none",
                        }}
                        ref={ref}
                    >
                        <SketchPicker
                            color={color}
                            onChangeComplete={(color: any) => {
                                onChange(color.hex);
                            }}
                        />
                    </Box>
                </ClickAwayListener>
            )}
        </Box>
    );
}
