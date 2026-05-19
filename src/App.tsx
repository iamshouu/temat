import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { About } from './components/About'
import { Contact } from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
    </div>
  )
}
