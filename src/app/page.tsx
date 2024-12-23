'use client'

import { ImcProvider } from "@/components/context/imcContext"
import { Header } from "@/components/header/header"
import { MainContent } from "@/components/mainContent/mainContent"

const Page = () => {

  return (
    <ImcProvider>
      <div>
        <Header/>
        <MainContent/>
      </div>
    </ImcProvider>
  )
}

export default Page