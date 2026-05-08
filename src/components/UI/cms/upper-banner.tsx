"use client";
import { BreadCrumb } from "@/components/BreadCrumb";
import { ClickButton } from "@/components/ClickButton";
import { Grid, Typography, useTheme } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { usePathname, useRouter } from "next/navigation";

type UpperBannerProps = {
  title: string;
  menuBanner?: boolean;
  createButton?: boolean;
  editButton?: boolean;
  showBreadCrumb?: boolean;
  breadCrumbLabel?: string;
};

export const UpperBanner = ({
  title,
  menuBanner,
  createButton,
  editButton,
  showBreadCrumb,
  breadCrumbLabel,
}: UpperBannerProps) => {
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (path: string) => pathname.startsWith(path);

  const handleCreate = () => {
    if (pathname.startsWith("/cms/topics")) {
      router.push("/cms/topics/create");
    } else if (pathname.startsWith("/cms/exercises")) {
      router.push("/cms/exercises/create");
    } else {
      router.push("/cms/themes/create");
    }
  };

  return (
    <Grid
      container
      justifyContent="space-between"
      direction="row"
      alignItems="center"
    >
      <Grid item>
        <Grid container>
          <Grid item>
            {showBreadCrumb && <BreadCrumb lastLabel={breadCrumbLabel} />} 
            <Typography variant="h2" sx={theme.customStyles.upperBanner.title}>
              {title}
            </Typography>
          </Grid>
        </Grid>
        {menuBanner && (
          <Grid container spacing={4} >
            <Grid item>
              <ClickButton
                title="Temas"
                click={() => router.push("/cms/themes")}
                sx={{
                  ...theme.customStyles.button,
                  ...(isActive("/cms/themes") && theme.customStyles.buttonActive),
                }}
              />
            </Grid>
            <Grid item>
              <ClickButton
                title="Tópicos"
                click={() => router.push("/cms/topics")}
                sx={{
                  ...theme.customStyles.button,
                  ...(isActive("/cms/topics") && theme.customStyles.buttonActive),
                }}
              />
            </Grid>
            <Grid item>
              <ClickButton
                title="Exercícios"
                click={() => router.push("/cms/exercises")}
                sx={{
                  ...theme.customStyles.button,
                  ...(isActive("/cms/exercises") && theme.customStyles.buttonActive),
                }}
              />
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid item>
        <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 1 }} >
          {createButton && (
            <Grid item>
              <ClickButton
                title="Criar"
                click={handleCreate}
                sx={theme.customStyles.upperBanner.createButton}
              />
            </Grid>
          )}
          {editButton && (
            <Grid item>
              <ClickButton
                title="Editar"
                backIcon={<EditIcon />}
                click={() => router.push(`${pathname}/edit`)}
                variant="contained"
                sx={theme.customStyles.upperBanner.editButton}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
