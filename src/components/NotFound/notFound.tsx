import { Grid, Link, Typography } from "@mui/material";
import svgNotFound from "../../../public/assets/404notFoundCachorrinho.svg";
import { LayoutPage } from "../PageElements/LayoutPage";
import Image from "next/image";

const NotFound: React.FC = () => (
    <LayoutPage>
      <Grid container direction="column" sx={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
        <Grid item>
          <Image
            src={svgNotFound}
            alt="Ilustração de um cachorro removendo a tomada da parede, com os números 404 indicando erro interno de servidor"
            style={{ display: "block", width: "50%", height: "auto", margin: "0 auto"}}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5" sx={{ mt: 2 }}>
            404 - Página não encontrada
          </Typography>
        </Grid>
      </Grid>
    </LayoutPage>
  );

export default NotFound;