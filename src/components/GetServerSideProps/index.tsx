// pages/SSRpage.tsx

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

type Repo = {
  id: string;
  field: {
      rowId: string;
      sequence: number;
      isConfigure: number;
      favourite: number;
      totalItems: number | null;
      completedItems: number | null;
      dueDateTimestamp: string | null;
      checklistId: string | null;
      remainderId: string | null;
      updatedAt: string;
      createdAt: string;
      Title: string | null;
      CardDescription: string | null;
      Description: string | null;
      Image: {
          filename: string;
          type: string;
          url: string;
      }[] | null;
      Topics: string;
      Sequence: string | null;
      Category: string;
  };
}

export const getServerSideProps = (async () => {
  // const apiKey = process.env.STACKBY_SECRET_KEY || "";
    const res = await fetch("https://stackby.com/api/betav1/rowlist/stqB2IjOCulBJkhrZB/Themes", {
        method: "GET",
        headers: {
            "x-api-key": '',
            "Content-Type": "application/json"
        }
    });
  const repo: Repo = await res.json()
  return { props: { repo } }
}) satisfies GetServerSideProps<{ repo: Repo }>
 

export const SSRpage = ({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(repo);
    
    return (
        <>
        </>
    );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//     const res = await fetch("https://stackby.com/api/betav1/rowlist/stqB2IjOCulBJkhrZB/Themes", {
//         method: "GET",
//         headers: {
//             "x-api-key": '',
//             "Content-Type": "application/json"
//         }
//     });
//     const repo: StackBy = await res.json();
//     return { props: { repo } };
// }

export default SSRpage;

