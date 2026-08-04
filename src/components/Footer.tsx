import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__line">
          DropMyStuff © {year} — procurando um novo lar pras minhas coisinhas =)
        </p>
      </div>
    </footer>
  )
}

export default Footer
