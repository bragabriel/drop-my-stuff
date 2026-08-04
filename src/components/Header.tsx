import './Header.css'

const INSTAGRAM_URL = 'https://instagram.com/gabrielbraga.gbs'

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <span className="site-header__wordmark">DropMyStuff</span>
        <a
          className="site-header__link"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="site-header__link-short">Instagram</span>
          <span className="site-header__link-full">@gabrielbraga.gbs</span>
        </a>
      </div>
    </header>
  )
}

export default Header
