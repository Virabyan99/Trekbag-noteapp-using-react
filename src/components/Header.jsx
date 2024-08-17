import Counter from './Counter'
import Logo from './Logo'

export default function Header({ totalNumberOfItems, nuberOfItemsPacked }) {
  return (
    <header>
      <Logo />

      <Counter
        nuberOfItemsPacked={nuberOfItemsPacked}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  )
}
