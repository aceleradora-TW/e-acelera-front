import { FetchApiNext } from "@/components/FetchApiNext";
import { FetchDataClientSide } from "@/components/FetchDataClientSide";
import SSRpage from "@/components/GetServerSideProps";


export default function Home() {
  
  return (
    <>
      <FetchApiNext/>
      {/* <SSRpage/> */}
      {/* <FetchDataClientSide/> */}
    </>
  )
}
