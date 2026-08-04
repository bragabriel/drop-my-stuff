import { useEffect, useState } from 'react'
import { INSTAGRAM_URL } from '../utils/contact'
import { HERO_ID } from './Hero'
import './InstagramFab.css'

function InstagramFab() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const heroElement = document.getElementById(HERO_ID)
    if (!heroElement) {
      return
    }

    // O flutuante só faz sentido quando o Hero (que já tem seus próprios
    // botões de contato) saiu completamente da tela.
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(heroElement)

    return () => observer.disconnect()
  }, [])

  return (
    <a
      className={visible ? 'instagram-fab instagram-fab--visible' : 'instagram-fab'}
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Instagram"
      // Fora do fluxo de foco enquanto escondido — visibility:hidden no CSS
      // já cuida disso, tabIndex reforça para leitores de tela mais antigos.
      tabIndex={visible ? 0 : -1}
    >
      <svg
        className="instagram-fab__icon"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.2" cy="6.8" r="1.3" fill="currentColor" />
      </svg>
      <span className="instagram-fab__label">Instagram</span>
    </a>
  )
}

export default InstagramFab
