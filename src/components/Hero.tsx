import './Hero.css'

const INSTAGRAM_URL = 'https://instagram.com/gabrielbraga.gbs'
const WHATSAPP_URL = 'https://wa.me/5519982930667'

// Id observado pelo InstagramFab: o flutuante só aparece depois que o Hero
// (com seus próprios botões de contato) sai da tela.
export const HERO_ID = 'hero'

function Hero() {
  return (
    <section className="hero" id={HERO_ID}>
      <h1 className="hero__headline">Estou vendendo algumas coisas minhas.</h1>
      <p className="hero__body">
        Aceito Pix, dinheiro, cartão ou transferência. Me chama no Instagram — ou
        no WhatsApp, se você já tem meu número.
      </p>
      <div className="hero__actions">
        <a
          className="hero__action"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer noopener"
        >
          Instagram
        </a>
        <a
          className="hero__action"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer noopener"
        >
          WhatsApp
        </a>
      </div>
    </section>
  )
}

export default Hero
