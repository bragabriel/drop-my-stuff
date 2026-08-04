import './Hero.css'

const INSTAGRAM_URL = 'https://instagram.com/gabrielbraga.gbs'
const WHATSAPP_URL = 'https://wa.me/5519982930667'

function Hero() {
  return (
    <section className="hero">
      <p className="hero__eyebrow">Inventário pessoal</p>
      <h1 className="hero__headline">Estou me desfazendo de algumas coisas.</h1>
      <p className="hero__body">
        Tudo aqui é meu e está em bom estado. Aceito Pix, dinheiro ou cartão. Me
        chama no Instagram — ou no WhatsApp, se você já tem meu número.
      </p>
      <div className="hero__actions">
        <a
          className="hero__action hero__action--primary"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer noopener"
        >
          Chamar no Instagram
        </a>
        <a
          className="hero__action hero__action--secondary"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer noopener"
        >
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  )
}

export default Hero
