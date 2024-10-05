import Error404 from "@/components/error/Error404";

export async function generateMetadata() {
  return {
    title: 'Error',
    description: 'Invalid URL. Please check the path and try again.'
  }
}

function page() {
  return (
    <>
      <Error404 />
    </>
  )
}

export default page