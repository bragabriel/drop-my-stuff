import { INSTAGRAM_URL, WHATSAPP_NUMBER } from '../utils/contact'
import './HowToBuy.css'

const PAYMENT_METHODS = ['Pix', 'Dinheiro', 'Cartão', 'Transferência bancária']

function HowToBuy() {
  return (
    <section className="how-to-buy" aria-labelledby="how-to-buy-title">
      <h2 className="how-to-buy__title" id="how-to-buy-title">
        Como comprar
      </h2>

      <p className="how-to-buy__methods">{PAYMENT_METHODS.join(' · ')}</p>

      <p className="how-to-buy__note">
        Os itens são pessoais e usados. A conversa sobre cada um acontece no Instagram ou no WhatsApp — a gente
        combina os detalhes por lá.
      </p>
      <p className="how-to-buy__note">
        Item vendido continua na lista, só que marcado como vendido — é por isso que alguns cards aparecem
        carimbados.
      </p>

      <div className="how-to-buy__links">
        <a className="how-to-buy__link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer noopener">
          Instagram
        </a>
        <a
          className="how-to-buy__link"
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          WhatsApp
        </a>
      </div>
    </section>
  )
}

export default HowToBuy
