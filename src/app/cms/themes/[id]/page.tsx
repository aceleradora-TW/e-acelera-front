'use client'

import { useParams } from "next/navigation";
import DetailTheme from "../../../../components/PageElements/cms/detail-theme";

export default function Page() {
  const params = useParams<{ id: string }>();

  return <DetailTheme id={params.id} />;
}