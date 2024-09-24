import { Link, Typography, Grid} from "@mui/material";
import svgNotFound from "../../../public/assets/404-Error-with-a-cute-animal-bro.svg";
import { LayoutPage } from "../PageElements/LayoutPage";
import Image from "next/image";

export const NoData = () => {
  return (
    <LayoutPage>
      <Grid container direction="column" sx={{justifyContent: "center", alignItems: "center", width: "100%"}}>
        <Grid item >
          <Image
            src={svgNotFound}
            alt="Ilustração de um cachorro removendo a tomada da parede, com os números 404 indicando erro interno de servidor"
            style={{display: "block", width: "100%", height: "auto"}}
          />
        </Grid>
        <Grid item >
          <Typography variant="caption">
            Não há conteúdo para ser exibido.
          </Typography>
        </Grid>
        <Grid item >
          <Link
            target="_blank"
            rel="noferrer"
            href="https://storyset.com/internet"
          >
            Internet illustrations by Storyset
          </Link>
        </Grid>
      </Grid>
    </LayoutPage>
  );
};
