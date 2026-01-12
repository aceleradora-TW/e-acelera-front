import { BreadCrumb } from "@/components/BreadCrumb";
import { ClickButton } from "@/components/ClickButton";
import { Grid, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import { customStyles } from "@/app/config/themes/components";

type UpperBannerProps = {
    title: string,
    menuBanner?: boolean,
    createButton?: boolean,
    editButton?: boolean,
    showBreadCrumb?: boolean,
}

export const UpperBanner = ({
    title,
    menuBanner,
    createButton,
    editButton,
    showBreadCrumb,
}: UpperBannerProps) => {
    const [selectedTab, setSelectedTab] = useState<"themes" | "topics" | "exercises" | "videos">("themes"); 
    const handleCreate = () => { 
        switch (selectedTab) { 
            case "themes": console.log("Abrir criação de Themes"); 
            break; 
            case "topics": console.log("Abrir criação de Topics"); 
            break; 
            case "exercises": console.log("Abrir criação de Exercises"); 
            break; 
            case "videos": console.log("Abrir criação de Videos"); 
            break; 
            default: break; } };
    return (
    
    <Grid container spacing={2} alignItems="center" justifyContent="space-between" sx={customStyles.upperBanner.container} >
        <Grid item>
            <Grid container>
                <Grid item>
                    {showBreadCrumb && (<BreadCrumb />)}
                    <Typography variant="h2" sx={customStyles.upperBanner.title} >{title}</Typography>
                </Grid>
            </Grid>
            {menuBanner && (
                <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                        <ClickButton title="Themes" click={() => console.log("Themes")} />
                    </Grid>
                    <Grid item>
                        <ClickButton title="Topics" click={() => console.log("Topics")} />
                    </Grid>
                    <Grid item>
                        <ClickButton title="Exercises" click={() => console.log("Exercises")} />
                    </Grid>
                    <Grid item>
                        <ClickButton title="Videos" click={() => console.log("Videos")} />
                    </Grid>
                </Grid>
            )}
        </Grid>
        <Grid item>
            {createButton && (
                <ClickButton title="Criar" click={handleCreate} sx={ customStyles.upperBanner.createButton } />
            )}
            {editButton && (
                <ClickButton title="Editar" backIcon={<EditIcon />} click={() => console.log("Editar")} sx={customStyles.upperBanner.editButton} />
            )}
        </Grid>
    </Grid>
    );
}

