'use client'

import { RenderDetailingTopicPage } from "@/components/PageElements/Renders/RenderDetailingTopicPage";

export default function DetailingTopic({
  params,
}: {
  params: { DetailingTopic: string };
}) {
  const id = params.DetailingTopic;

  return RenderDetailingTopicPage(id)
}
