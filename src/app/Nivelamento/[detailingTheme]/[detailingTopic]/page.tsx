'use client'

import { RenderDetailingTopicPage } from "@/components/PageElements/Renders/RenderDetailingTopicPage";

export default function DetailingTopic({
  params,
}: {
  params: { detailingTopic: string };
}) {
  const id = params.detailingTopic;
  console.log("DETALHAMENTO ", id)
  return RenderDetailingTopicPage(id)
}
