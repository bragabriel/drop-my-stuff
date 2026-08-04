import type { CategoryId } from '../types/item'
import { CATEGORIES } from '../types/item'
import './FilterBar.css'

interface FilterBarProps {
  activeCategory: CategoryId | 'todos'
  countsByCategory: Record<CategoryId, number>
  totalCount: number
  hideSold: boolean
  onCategoryChange: (category: CategoryId | 'todos') => void
  onHideSoldToggle: () => void
}

function FilterBar({
  activeCategory,
  countsByCategory,
  totalCount,
  hideSold,
  onCategoryChange,
  onHideSoldToggle,
}: FilterBarProps) {
  return (
    <div className="filter-bar">
      <div className="filter-bar__chips" role="group" aria-label="Filtrar por categoria">
        <button
          type="button"
          className="filter-bar__chip"
          aria-pressed={activeCategory === 'todos'}
          onClick={() => onCategoryChange('todos')}
        >
          Tudo <span className="filter-bar__count">{totalCount}</span>
        </button>
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            type="button"
            className="filter-bar__chip"
            aria-pressed={activeCategory === category.id}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.label} <span className="filter-bar__count">{countsByCategory[category.id]}</span>
          </button>
        ))}
      </div>

      <button
        type="button"
        className="filter-bar__toggle"
        aria-pressed={hideSold}
        onClick={onHideSoldToggle}
      >
        {hideSold ? 'Mostrar vendidos' : 'Esconder vendidos'}
      </button>
    </div>
  )
}

export default FilterBar
