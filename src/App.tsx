import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ItemCard from './components/ItemCard'
import { ITEMS } from './data/items'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        {/* Preview temporário: a Etapa 5 substitui esta lista simples
            pelo grid definitivo com filtros. */}
        <div className="preview-grid">
          {ITEMS.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
