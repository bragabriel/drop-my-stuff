import { INSTAGRAM_URL } from '../utils/contact'
import './InstagramFab.css'

// Fica sempre visivel: o Hero deixou de ter botoes de contato, entao este e o
// unico atalho permanente para o Instagram.
function InstagramFab() {
  return (
    <a
      className="instagram-fab"
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Me chamar no Instagram"
    >
      <svg
        className="instagram-fab__icon"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        aria-hidden="true"
        focusable="false"
      >
        <rect
          x="2.5"
          y="2.5"
          width="19"
          height="19"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.2" cy="6.8" r="1.3" fill="currentColor" />
      </svg>
      <span className="instagram-fab__label">Instagram</span>
    </a>
  )
}

export default InstagramFab
