'use client';

import { RenderDetailingThemePage } from '@/components/PageElements/Renders/RenderDetailingThemePage';

export default function DetailingTheme({
  params,
}: {
  params: { detailingTheme: string };
}) {
  return <RenderDetailingThemePage id={params.detailingTheme} />;
}
