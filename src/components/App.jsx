import { useEffect, useState } from 'react'
import BackgroundHeading from './BackgroundHeading'
import Footer from './Footer'
import Header from './Header'
import ItemList from './ItemList'
import Sidebar from './Sidebar'
import { initialItems } from '../lib/constants'
import Logo from './Logo'
import Counter from './Counter'
import AddItemForm from './AddItemForm'
import ButtonGroup from './ButtonGroup'

function App() {
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
    <>
      <BackgroundHeading />

      <main>
        <Header>
          <Logo />
          <Counter
            nuberOfItemsPacked={items.filter((item) => item.packed).length}
            totalNumberOfItems={items.length}
          />
        </Header>

        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar>
          <AddItemForm onAddItem={handleAddItem} />
          <ButtonGroup
            handleMarkAllAsComplete={handleMarkAllAsComplete}
            handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
            handelResetToInitial={handelResetToInitial}
            handleRemoveAllItems={handleRemoveAllItems}
          />
        </Sidebar>
      </main>
      <Footer />
    </>
  )
}

export default App
