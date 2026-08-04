import { useId, useState } from 'react'
import type { Item } from '../types/item'
import { CATEGORIES, CONDITION_INFO } from '../types/item'
import { formatPrice } from '../utils/format'
import { whatsappLinkFor } from '../utils/contact'
import MediaCarousel from './MediaCarousel'
import './ItemCard.css'

interface ItemCardProps {
  item: Item
}

function ItemCard({ item }: ItemCardProps) {
  const [expanded, setExpanded] = useState(false)
  const descriptionId = useId()
  const categoryLabel = CATEGORIES.find((category) => category.id === item.category)?.label ?? item.category
  const conditionLabel = CONDITION_INFO[item.condition].label
  const conditionDescription = CONDITION_INFO[item.condition].description
  const sold = item.sold === true

  return (
    <article className={sold ? 'item-card item-card--sold' : 'item-card'}>
      <div className="item-card__media">
        <MediaCarousel media={item.media} title={item.title} />
        {sold && (
          <div className="item-card__stamp">
            {/* A camada fantasma, ligeiramente deslocada atras, e o carimbo
                principal por cima — sem texto na fantasma: ela ja cobre a
                principal por inset:0, e texto invisivel aqui vira ruido para
                leitor de tela e falso positivo de contraste. */}
            <span className="item-card__stamp-layer item-card__stamp-layer--ghost" aria-hidden="true" />
            <span className="item-card__stamp-layer item-card__stamp-layer--main">Vendido</span>
          </div>
        )}
      </div>

      <div className="item-card__body">
        <div className="item-card__row">
          <h3 className="item-card__title">{item.title}</h3>
          {!sold && item.price !== undefined && (
            <span className="item-card__price">{formatPrice(item.price)}</span>
          )}
          {sold && <span className="item-card__sold-label">Vendido</span>}
        </div>

        <p className="item-card__meta">
          {categoryLabel} · <span title={conditionDescription}>{conditionLabel}</span>
        </p>

        {expanded && (
          <p className="item-card__description" id={descriptionId}>
            {item.description}
          </p>
        )}

        <div className="item-card__actions">
          <button
            type="button"
            className="item-card__toggle"
            aria-expanded={expanded}
            aria-controls={descriptionId}
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? 'ocultar' : 'detalhes'}
          </button>

          {!sold && (
            <a
              className="item-card__cta"
              href={whatsappLinkFor(item)}
              target="_blank"
              rel="noreferrer noopener"
            >
              Tenho interesse
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ItemCard
