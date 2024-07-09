'use client'
import React from "react";
import { Box, Typography, Link} from "@mui/material";
import { theme } from "@/components/config/theme";
import { ThemeConfig } from "@/components/config/theme";

interface ReferenceDescriptionProps {
    titles: string[]
    links: string[]
}

export const ReferenceDescription: React.FC<ReferenceDescriptionProps> = ({ titles, links }) => {
    return (
        <ThemeConfig>
            <Box
                sx={
                    theme.customStyles.description
                }
            >
                <Box>
                    {titles.map((title, index) => (
                            <Typography variant="body1" key={index}>
                                {title}
                            </Typography>
                    ))}
                    {links.map((link, index) => (
                        <Typography variant="body1" key={index}>
                            <Link href={link}>{link}</Link>
                        </Typography>
                    ))}
                </Box>
            </Box>
        </ThemeConfig>
    )
}