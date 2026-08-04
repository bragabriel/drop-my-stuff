import './Footer.css'

const INSTAGRAM_URL = 'https://instagram.com/gabrielbraga.gbs'
const WHATSAPP_URL = 'https://wa.me/5519982930667'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__line">
          © {year} DropMyStuff — tudo aqui já teve dono, agora é sua vez.
        </p>
        <nav className="site-footer__links" aria-label="Contato">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer noopener">
            Instagram
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener">
            WhatsApp
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
