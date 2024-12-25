import Head from 'next/head'
import Image from 'next/image'
import Navbar from 'components/Navbar'
import Main from "components/Main"
import About from "components/About"
import Skills from "components/Skills"
import Projects from "components/Projects"
import Contact from "components/Contact"
import EmailSender from "components/EmailSender";



export default function Home() {
  return (
    <div>
      <Head>
        <title>Renz | Web</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/teen.png" />
        </Head>
      <Navbar/>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
