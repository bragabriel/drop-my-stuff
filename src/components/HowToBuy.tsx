import { INSTAGRAM_URL } from '../utils/contact'
import './HowToBuy.css'

const PAYMENT_METHODS = ['Pix', 'Dinheiro', 'Parcelo via Mercado Pago (+ taxa do app)']

function HowToBuy() {
  return (
    <section className="how-to-buy" aria-labelledby="how-to-buy-title">
      <h2 className="how-to-buy__title" id="how-to-buy-title">
        Como funciona
      </h2>

      <p className="how-to-buy__methods">{PAYMENT_METHODS.join(' · ')}</p>

      <p className="how-to-buy__note">É tudo coisa minha, usada e bem cuidada.</p>

      <p className="how-to-buy__note">Quer trocar ideia sobre algum item? Negociar?</p>

      <div className="how-to-buy__links">
        <a
          className="how-to-buy__link"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer noopener"
        >
          Me chama no Insta
        </a>
      </div>
    </section>
  )
}

export default HowToBuy
