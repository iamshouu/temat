import { Header } from './components/Header'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text overflow-x-hidden">
      <Header />
      <main className="pt-32">
        <section id="services" className="h-screen flex items-center justify-center">
          <span className="font-mono text-muted">services placeholder</span>
        </section>
        <section id="cases" className="h-screen flex items-center justify-center">
          <span className="font-mono text-muted">cases placeholder</span>
        </section>
        <section id="process" className="h-screen flex items-center justify-center">
          <span className="font-mono text-muted">process placeholder</span>
        </section>
        <section id="about" className="h-screen flex items-center justify-center">
          <span className="font-mono text-muted">about placeholder</span>
        </section>
        <section id="contact" className="h-screen flex items-center justify-center">
          <span className="font-mono text-muted">contact placeholder</span>
        </section>
      </main>
    </div>
  )
}
