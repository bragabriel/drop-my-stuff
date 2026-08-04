import { INSTAGRAM_URL } from '../utils/contact'
import './HowToBuy.css'

const PAYMENT_METHODS = ['Pix', 'Dinheiro', 'Cartão', 'Transferência']

function HowToBuy() {
  return (
    <section className="how-to-buy" aria-labelledby="how-to-buy-title">
      <h2 className="how-to-buy__title" id="how-to-buy-title">
        Como funciona
      </h2>

      <p className="how-to-buy__methods">{PAYMENT_METHODS.join(' · ')}</p>

      <p className="how-to-buy__note">
        É tudo coisa minha, usada e bem cuidada. Gostou de algo? Me chama no Insta que a gente
        combina o resto por lá.
      </p>
      <p className="how-to-buy__note">
        O que já foi vendido continua aqui, só que carimbado — é por isso que alguns cards estão
        marcados.
      </p>

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
