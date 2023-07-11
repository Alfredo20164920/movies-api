import { GetServerSideProps } from 'next'
import { Inter } from 'next/font/google'
import { MainLayout } from '@/components/layouts'
import { moviesApi } from '@/api';
import {Movie, MoviesResponse} from '@/interfaces';

const inter = Inter({ subsets: ['latin'] })

interface Props {
  movies: Movie[]
  page: string
  baseUrl: string
}

export default function Home(props: Props) {
  const {movies} = props;
  console.log(movies)
  return (
    <MainLayout>
      <main>
        {
          movies.map((movie, i) => (
            <div key={i}>
              {movie.title}
            </div>
          ))
        }
      </main>
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {query} = ctx;
  const {page} = query;
  const {data} = await moviesApi.get<MoviesResponse>(`/movie/popular?page=${page ? page : 1}`);
  return {
    props: {
      movies: data?.results,
      page: page ? page : 1,
      baseUrl: moviesApi.defaults.baseURL,
    }
  }
}