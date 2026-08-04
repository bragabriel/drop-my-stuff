import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span className="site-footer__wordmark">DropMyStuff</span>
        <p className="site-footer__line">
          © {year} — tudo aqui já teve dono, agora é sua vez.
        </p>
      </div>
    </footer>
  )
}

export default Footer
