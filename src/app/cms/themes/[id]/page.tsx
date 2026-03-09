import DetailTheme from "@/components/PageElements/cms/detail-theme";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return <DetailTheme id={params.id} />;
}