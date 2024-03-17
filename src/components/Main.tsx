import { ReactNode } from 'react'

interface MainProps {
  children: ReactNode
}

const Main = ({ children }: MainProps) => {
  return (
    <main className='Main'>
      { children }
    </main>
  )
}

export default Main