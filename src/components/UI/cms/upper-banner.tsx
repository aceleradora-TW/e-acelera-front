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
};

export const UpperBanner = ({
  title,
  menuBanner,
  createButton,
  editButton,
  showBreadCrumb,
}: UpperBannerProps) => {
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();

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
      //spacing={2}
      //alignItems="center"
      justifyContent="space-between"
      sx={theme.customStyles.upperBanner.container}
    >
      <Grid item>
        <Grid container>
          <Grid item>
            {showBreadCrumb && <BreadCrumb />}
            <Typography variant="h2" sx={theme.customStyles.upperBanner.title}>
              {title}
            </Typography>
          </Grid>
        </Grid>
        {menuBanner && (
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <ClickButton
                title="Temas"
                click={() => router.push("/cms")}
              />
            </Grid>
            <Grid item>
              <ClickButton
                title="Tópicos"
                click={() => router.push("/cms/topics")}
              />
            </Grid>
            <Grid item>
              <ClickButton
                title="Exercícios"
                click={() => router.push("/cms/exercises")}
              />
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid item>
        {createButton && (
          <ClickButton
            title="Criar"
            click={handleCreate}
            sx={theme.customStyles.upperBanner.createButton}
          />
        )}
        {editButton && (
          <ClickButton
            title="Editar"
            backIcon={<EditIcon />}
            click={() => console.log("Editar")}
            sx={theme.customStyles.upperBanner.editButton}
          />
        )}
      </Grid>
    </Grid>
  );
};
