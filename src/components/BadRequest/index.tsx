import { Link, Typography, Grid} from "@mui/material";
import svgBadRequest from "../../../public/assets/503-bad-request.svg";
import { LayoutPage } from "../PageElements/LayoutPage";
import Image from "next/image";

export const BadRequest = () => {
  return (
    <LayoutPage>
      <Grid container direction="column" sx={{justifyContent: "center", alignItems: "center", width: "100%"}}>
        <Grid item >
          <Image
            src={svgBadRequest}
            alt="Ilustração de um gato brincando com um novelo de lã, com os números 503 indicando erro de serviço indisponível."
            style={{display: "block", width: "100%", height: "auto"}}
          />
        </Grid>
        <Grid item >
          <Typography variant="caption">
            Estamos passando por dificuldades para carregar o conteúdo. Por
            favor, tente novamente em instantes.
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