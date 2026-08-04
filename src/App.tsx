import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Showcase from './components/Showcase'
import HowToBuy from './components/HowToBuy'
import InstagramFab from './components/InstagramFab'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Showcase />
        <HowToBuy />
      </main>
      <Footer />
      <InstagramFab />
    </>
  )
}

export default App
