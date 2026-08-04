import { useMemo, useState } from 'react'
import type { CategoryId, Item } from '../types/item'
import { CATEGORIES } from '../types/item'
import { ITEMS } from '../data/items'
import ItemCard from './ItemCard'
import FilterBar from './FilterBar'
import './Showcase.css'

const CATEGORY_PARAM = 'categoria'

function readCategoryFromUrl(): CategoryId | 'todos' {
  const value = new URLSearchParams(window.location.search).get(CATEGORY_PARAM)
  const match = CATEGORIES.find((category) => category.id === value)
  return match ? match.id : 'todos'
}

function writeCategoryToUrl(category: CategoryId | 'todos'): void {
  const url = new URL(window.location.href)
  if (category === 'todos') {
    url.searchParams.delete(CATEGORY_PARAM)
  } else {
    url.searchParams.set(CATEGORY_PARAM, category)
  }
  window.history.replaceState(null, '', url)
}

function Showcase() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'todos'>(() => readCategoryFromUrl())
  const [hideSold, setHideSold] = useState(false)

  const countsByCategory = useMemo(() => {
    const counts = {} as Record<CategoryId, number>
    for (const category of CATEGORIES) {
      counts[category.id] = 0
    }
    for (const item of ITEMS) {
      counts[item.category] += 1
    }
    return counts
  }, [])

  const visibleItems = useMemo(() => {
    const filtered = ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'todos' || item.category === activeCategory
      const matchesSold = !hideSold || item.sold !== true
      return matchesCategory && matchesSold
    })

    // Disponíveis primeiro, vendidos por último; ordem de lote preservada dentro de cada grupo.
    const available: Item[] = []
    const sold: Item[] = []
    for (const item of filtered) {
      if (item.sold === true) {
        sold.push(item)
      } else {
        available.push(item)
      }
    }
    return [...available, ...sold]
  }, [activeCategory, hideSold])

  const soldCount = useMemo(() => visibleItems.filter((item) => item.sold === true).length, [visibleItems])

  function handleCategoryChange(category: CategoryId | 'todos') {
    setActiveCategory(category)
    writeCategoryToUrl(category)
  }

  function handleClearFilter() {
    handleCategoryChange('todos')
  }

  return (
    <section className="showcase" aria-labelledby="showcase-title">
      <div className="showcase__header">
        <h2 className="showcase__title" id="showcase-title">
          O inventário
        </h2>
        <p className="showcase__meta" aria-live="polite">
          {visibleItems.length} {visibleItems.length === 1 ? 'item' : 'itens'} — {soldCount}{' '}
          {soldCount === 1 ? 'vendido' : 'vendidos'}
        </p>
      </div>

      <FilterBar
        activeCategory={activeCategory}
        countsByCategory={countsByCategory}
        totalCount={ITEMS.length}
        hideSold={hideSold}
        onCategoryChange={handleCategoryChange}
        onHideSoldToggle={() => setHideSold((value) => !value)}
      />

      {visibleItems.length > 0 ? (
        <ul className="showcase__grid" role="list">
          {visibleItems.map((item) => (
            <li key={item.id} className="showcase__grid-item">
              <ItemCard item={item} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="showcase__empty">
          <p>Nada aqui com esse filtro.</p>
          <button type="button" className="showcase__empty-action" onClick={handleClearFilter}>
            Ver tudo
          </button>
        </div>
      )}
    </section>
  )
}

export default Showcase
