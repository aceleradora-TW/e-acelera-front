/*'use client';

import Form from "@/components/UI/dashboard/form";
import {
  TopicFormSchema,
  topicFormDefs,
} from "@/components/UI/dashboard/forms/defs/topic.defs";
import { useRouter } from "next/navigation";
import { useCallback, 
  useEffect, 
  useState 
} from "react";
import { getTopicById, updateTopic } from "@/utils/api/topics";
import { Box } from "@mui/material";
import { CmsTopic } from "@/types/type";
import { FormActions } from "@/components/UI/dashboard/forms/form-actions";
import { BadRequest } from "@/components/BadRequest";
import { Loading } from "@/components/Loading";
import { NoData } from "@/components/NoData";
import { UpperBanner } from "@/components/UI/cms/upper-banner";
import { actionsContainerStyles, 
  textFieldStyles, 
  textFieldsContainerStyles 
} from "@/components/UI/dashboard/forms/form.styles";


interface Props {
  params: {
    id: string;
  };
}

export default function EditTopicPage({ params }: Props) {
  const router = useRouter();
  const [topic, setTopic] = useState<CmsTopic | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState<number | null>(null);

  const fetchTopic = useCallback(async () => {
    setLoading(true);
    setErrorStatus(null);

    try {
      const response = await getTopicById(params.id);
      setTopic(response);

      if (!response.ok) {
        setErrorStatus(response.status);
        setTopic(null);
      }

      const data = await response.json();
      setTopic(data.data as CmsTopic);

    } catch (error) {
      console.error("Erro ao buscar tópico:", error);
      setErrorStatus(500);
      setTopic(null);
    } finally {
      setLoading(false);
    }
  }, [params.id]);

  useEffect(() => {
    fetchTopic();
  }, [fetchTopic]);

  const handleSubmit = async (data: any) => {
    await updateTopic(params.id, data);
    router.push("/cms/topics");
  };

  if (loading) return <Loading />;
  if (errorStatus === 404) return <NoData />;
  if (errorStatus) return <BadRequest />;
  if (!topic) return <NoData />;


return (
  <>
    
    <Form
      title="Editar Tópico"
      onSubmit={handleSubmit}
      schema={TopicFormSchema}
      formDefs={{
        ...topicFormDefs,
        defaultValues: topic,
      }}
      mode="edit"
      entityPath="/api/topics"
      entityId={params.id}
      
    />
  </>
)

}; */

import DetailTopic from "@/components/PageElements/cms/topics/detail-topic";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <DetailTopic 
      id={params.id} 
      isEditing // Isso vai habilitar os campos automaticamente!
    />
  );
}