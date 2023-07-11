import Image from 'next/image'
import { Inter } from 'next/font/google'
import { MainLayout } from '@/components/layouts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <main>
        <h2>Hola mundo</h2>
      </main>
    </MainLayout>
  )
}
