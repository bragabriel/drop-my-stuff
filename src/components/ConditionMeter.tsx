import type { Condition } from '../types/item'
import { CONDITION_INFO } from '../types/item'
import './ConditionMeter.css'

interface ConditionMeterProps {
  condition: Condition
}

function ConditionMeter({ condition }: ConditionMeterProps) {
  const info = CONDITION_INFO[condition]

  return (
    <div className="condition-meter" title={`${info.label} — ${info.description}`}>
      <span className="condition-meter__blocks" aria-hidden="true">
        {[1, 2, 3, 4].map((block) => (
          <span
            key={block}
            className={
              block <= info.rank
                ? 'condition-meter__block condition-meter__block--filled'
                : 'condition-meter__block'
            }
          />
        ))}
      </span>
      <span className="condition-meter__label" aria-hidden="true">
        {info.label}
      </span>
      <span className="sr-only">{`${info.label} — ${info.description}`}</span>
    </div>
  )
}

export default ConditionMeter
