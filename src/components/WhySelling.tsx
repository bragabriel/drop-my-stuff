import { useEffect, useRef, useState } from 'react'
import './WhySelling.css'

function WhySelling() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    // showModal da o pacote completo de graca: foco preso dentro, Esc fecha e
    // o foco volta para o botao que abriu.
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <div className="why-selling">
      <button type="button" className="why-selling__trigger" onClick={() => setOpen(true)}>
        <span className="why-selling__question">Por que estou vendendo os itens?</span>
        <span className="why-selling__hint">clica aqui pra descobrir 👀</span>
      </button>

      <dialog
        className="why-selling__dialog"
        ref={dialogRef}
        aria-labelledby="why-selling-title"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          // Clique no backdrop: o alvo e o proprio dialog, nunca o conteudo.
          if (event.target === dialogRef.current) setOpen(false)
        }}
      >
        <div className="why-selling__panel">
          <h2 className="why-selling__title" id="why-selling-title">
            Segredo 🤫
          </h2>
          <p className="why-selling__text">Em breve nos cinemas.</p>
          <p className="why-selling__text">
            Enquanto isso, se quiser saber o que eu faço:{' '}
            <a
              className="why-selling__link"
              href="https://gabrielbraga.dev"
              target="_blank"
              rel="noreferrer noopener"
            >
              gabrielbraga.dev
            </a>
          </p>
          <button type="button" className="why-selling__close" onClick={() => setOpen(false)}>
            Tá bom, tá bom
          </button>
        </div>
      </dialog>
    </div>
  )
}

export default WhySelling
