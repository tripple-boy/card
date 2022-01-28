import Head from 'next/head'
import Image from 'next/image'
import ProductCard from "../components/productCard"

export default function Home() {
  return (
    <div  >
      <Head>
        <title>Tailwind Product card</title>
        <meta name="description" content="Product card build with Tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <main className =" flex flex-wrap items-center justify-center gap-10 ">
      <ProductCard/>
     </main>
    </div>
  )
}
