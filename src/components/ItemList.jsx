import { useState } from 'react'
import EmptyView from './EmptyView'
import Select from 'react-select'

const sortingOptions = [
  {
    label: 'Sort by default',
    value: 'default',
  },
  {
    label: 'Sort by packed',
    value: 'packed',
  },
  {
    label: 'Sort by unpacked',
    value: 'unpacked',
  },
]

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {

  const[sortBy, setSortBY] = useState("default")

  const sortedItems = [...items].sort((a, b) => {
    if(sortBy === 'packed') {
      return b.packed - a.packed
    }
    if (sortBy === 'unpacked') {
      return a.packed - b.packed
    }

    return;
  })

  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}

      {items.length > 0 ? (
        <section className="sorting">
          <Select onChange={option => setSortBY(option.value)} options={sortingOptions} defaultValue={sortingOptions[0]} />
        </section>
      ) : null}

      {sortedItems.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onToggleItem={handleToggleItem}
            onDeleteItem={handleDeleteItem}
          />
        )
      })}
    </ul>
  )
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => onToggleItem(item.id)}
          checked={item.packed}
          type="checkbox"
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}
