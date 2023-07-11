import { GetServerSideProps } from 'next'
import { Inter } from 'next/font/google'
import { MainLayout } from '@/components/layouts'
import { moviesApi } from '@/api';

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  console.log(props)
  return (
    <MainLayout>
      <main>
        <h2>Hola mundo</h2>
      </main>
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {query} = ctx;
  const {page} = query;
  const {data} = await moviesApi.get(`/movie/popular?page=${page ? page : 1}`);
  return {
    props: {
      data: data
    }
  }
}