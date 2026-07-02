import DetailTheme from "@/components/PageElements/cms/themes/detail-theme";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <DetailTheme
    id={params.id}
    isEditing 
    />)
}