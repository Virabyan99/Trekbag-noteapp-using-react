import AddItemForm from './AddItemForm'
import ButtonGroup from './ButtonGroup'

export default function Sidebar({
  handleAddItem,
  handleRemoveAllItems,
  handelResetToInitial,
  handleMarkAllAsIncomplete,
  handleMarkAllAsComplete,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />

      <ButtonGroup
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        handelResetToInitial={handelResetToInitial}
        handleRemoveAllItems={handleRemoveAllItems}
      />
    </div>
  )
}
