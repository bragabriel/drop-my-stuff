import { useId, useState } from 'react'
import type { Item } from '../types/item'
import { CATEGORIES } from '../types/item'
import { formatLot, formatPrice } from '../utils/format'
import { whatsappLinkFor } from '../utils/contact'
import MediaCarousel from './MediaCarousel'
import ConditionMeter from './ConditionMeter'
import './ItemCard.css'

interface ItemCardProps {
  item: Item
}

function ItemCard({ item }: ItemCardProps) {
  const [expanded, setExpanded] = useState(false)
  const descriptionId = useId()
  const categoryLabel = CATEGORIES.find((category) => category.id === item.category)?.label ?? item.category
  const sold = item.sold === true

  return (
    <article className={sold ? 'item-card item-card--sold' : 'item-card'}>
      <div className="item-card__media">
        <MediaCarousel media={item.media} title={item.title} />
        {sold && (
          <div className="item-card__stamp">
            {/* A camada fantasma e o fora-de-registro da risografia: so a
                caixa deslocada, sem texto — ela ja cobre a principal por
                inset:0, e texto invisivel aqui vira ruido para leitor de
                tela e falso positivo de contraste. */}
            <span className="item-card__stamp-layer item-card__stamp-layer--ghost" aria-hidden="true" />
            <span className="item-card__stamp-layer item-card__stamp-layer--main">Vendido</span>
          </div>
        )}
      </div>

      <div className="item-card__body">
        <div className="item-card__meta">
          <span className="item-card__lot">Lote {formatLot(item.id)}</span>
          <span className="item-card__category">{categoryLabel}</span>
        </div>

        <h3 className="item-card__title">{item.title}</h3>
        <p className="item-card__summary">{item.summary}</p>

        <button
          type="button"
          className="item-card__toggle"
          aria-expanded={expanded}
          aria-controls={descriptionId}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? 'ocultar' : 'ver descrição completa'}
        </button>

        {expanded && (
          <p className="item-card__description" id={descriptionId}>
            {item.description}
          </p>
        )}

        <ConditionMeter condition={item.condition} />

        <div className="item-card__footer">
          {sold ? (
            <span className="item-card__sold-label">Vendido</span>
          ) : (
            <>
              {item.price !== undefined && (
                <span className="item-card__price">{formatPrice(item.price)}</span>
              )}
              <a
                className="item-card__cta"
                href={whatsappLinkFor(item)}
                target="_blank"
                rel="noreferrer noopener"
              >
                Tenho interesse
              </a>
            </>
          )}
        </div>
      </div>
    </article>
  )
}

export default ItemCard
