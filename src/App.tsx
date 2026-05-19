import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Services } from './components/Services'
import { Cases } from './components/Cases'
import { Process } from './components/Process'
import { About } from './components/About'
import { Contact } from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Cases />
        <Process />
        <About />
        <Contact />
      </main>
    </div>
  )
}
