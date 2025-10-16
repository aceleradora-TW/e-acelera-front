import { theme } from "@/app/config/themes";
import { Button } from "@mui/material";
import Link from "next/link";

interface ButtonHomeProps {
  text: string;
  link?: string;
}

export default function ButtonHome({ text, link }: ButtonHomeProps) {
  return (
    <Link href={link ? link : ""}>
      <Button variant="home"
        type="button"
      >
        {text}
      </Button>
    </Link>
  );
}
