import DetailTheme from "@/components/PageElements/cms/detail-theme";

export default function Page({ params }: { params: { id: string } }) {
  return <DetailTheme id={params.id} />;
}