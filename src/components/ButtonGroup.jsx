import { secondaryButtons } from '../lib/constants'
import Button from './Button'


export default function ButtonGroup() {
  return (
    <section className="button-group">
      {secondaryButtons.map((text) => {
        return (
          <Button key={text} type="secondary">
            {text}
          </Button>
        )
      })}
    </section>
  )
}
