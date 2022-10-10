import Head from 'next/head'
import Image from 'next/image'
// 1
import { PrismaClient } from '@prisma/client'

// 4 extraer categorias
export default function Home({ categorias }) {
  // 5 -
  console.log(categorias);
  return (
    <h1>Next JS</h1>
  )
}

// 2  
export const getServerSideProps = async () => {

  const prisma = new PrismaClient()

  // consultar categoria
  // .findMany: encuentra todas la categorias en la BD
  const categorias = await prisma.categoria.findMany()

  // 3
  return {
    props: {
      categorias,
    }
  }
}
