import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

export const SSRpage = ({repo}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(repo)
    
    return(
        <>
            <div>
            {/* {data.map((element: any, index: any) => ( 
                <div key={index}>
                  <CardContent>
                    <Typography variant="h5" component="div" color="black">
                     {element.field.Title}
                    </Typography>
                    <Typography variant="body2" color="black">
                      {element.field.Description}
                    </Typography>

                    <Typography variant="body2" color="black">
                      {element.field.createdAt}
                    </Typography>
                  </CardContent>
                </div>
              ))} */}
            </div>
        </>
    )
}

export const getServerSideProps = (async () => {
  const apiKey = process.env.STACKBY_SECRET_KEY || "jOELi8SJTNSw0qVy";
  const res = await fetch("https://stackby.com/api/betav1/rowlist/stqB2IjOCulBJkhrZB/Themes", {
      method: "GET",
      headers: {
          "x-api-key": "jOELi8SJTNSw0qVy",
          "Content-Type": "application/json"
      }
  });
  const repo = await res.json();
  return { props: { repo } };
}) satisfies GetServerSideProps<{ repo: any }>

export default SSRpage;