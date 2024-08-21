'use client'
import { RenderDetailingThemePage } from "@/components/PageElements/RenderDetailingThemePage";

export default function DetailingTheme({
  params,
}: {
  params: { detailingTheme: string };
}) {
  const id = params.detailingTheme;

  return RenderDetailingThemePage(id)
}
