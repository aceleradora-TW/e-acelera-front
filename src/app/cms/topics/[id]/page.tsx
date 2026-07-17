import DetailTopic from "@/components/PageElements/cms/topics/detail-topic";

export default function Page({ params }: { params: { id: string } }) {
  return <DetailTopic id={params.id} />;
}


