'use client'

import { RenderDetailingTopicPage } from "@/components/PageElements/Renders/RenderDetailingTopicPage";

export default function DetailingTopic({
  params,
}: {
  params: { DetailingTopic: string };
}) {
  return RenderDetailingTopicPage(params.DetailingTopic)
}
