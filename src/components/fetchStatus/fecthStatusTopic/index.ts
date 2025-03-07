// const getTopicStatus = useCallback(async () => {
//     if (!topicId || !pageId) return;
    
//     if (JSON.stringify([topicId]) === JSON.stringify(topicIdsRef.current)) {
//       return;
//     }

//     topicIdsRef.current = [topicId];

//     try {
//       const response = await fetch(`/api/backend/getTopicExercisesStatus`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           topicId,
//         },
//       });

//       if (!response.ok) throw new Error(`Erro ${response.status}`)

//       const data = await response.json();
    
//       data.status.map((element: any) =>{
//           if (element.itemId === pageId){
//             setStatus(element.itemStatus)
//           }
//       });
         
//     } catch (error) {
//       console.error("Erro ao buscar status dos exercícios do tópico:", error);
//     }
//   }, [topicId, pageId]);