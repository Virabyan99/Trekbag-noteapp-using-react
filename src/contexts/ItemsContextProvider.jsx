import { createContext, useEffect, useState } from 'react'
import { initialItems } from '../lib/constants'

export const ItemsContext = createContext()

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem('items')) || initialItems
  )

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    }
    const newItems = [...items, newItem]
    setItems(newItems)
  }
  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }
  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed }
      }
      return item
    })
    setItems(newItems)
  }
  const handleRemoveAllItems = () => {
    setItems([])
  }
  const handelResetToInitial = () => {
    setItems(initialItems)
  }
  const handleMarkAllAsIncomplete = () => {
    const updatedItems = items.map((item) => ({
      ...item,
      packed: false,
    }))
    setItems(updatedItems)
  }
  const handleMarkAllAsComplete = () => {
    const updatedItems = items.map((item) => ({
      ...item,
      packed: true,
    }))
    setItems(updatedItems)
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handelResetToInitial,
        handleMarkAllAsIncomplete,
        handleMarkAllAsComplete,
      }}>
      {children}
    </ItemsContext.Provider>
  )
}
