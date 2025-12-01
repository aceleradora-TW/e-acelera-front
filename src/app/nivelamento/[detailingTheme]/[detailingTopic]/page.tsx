'use client'

import { RenderDetailingTopicPage } from "@/components/PageElements/Renders/RenderDetailingTopicPage";

export default function DetailingTopic({
  params,
}: {
  params: { detailingTopic: string };
}) {
  const id = params.detailingTopic;
  const source = id.includes("-") ? "stackby" : "adminjs";

  return RenderDetailingTopicPage(id, source)
}
