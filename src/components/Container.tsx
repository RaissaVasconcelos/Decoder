import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="Container">
      { children }
    </div>
  )
}

export default Container
