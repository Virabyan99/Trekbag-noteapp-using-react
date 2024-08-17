import Button from './Button'

export default function ButtonGroup({
  handleRemoveAllItems,
  handelResetToInitial,
  handleMarkAllAsIncomplete,
  handleMarkAllAsComplete,
}) {
  return (
    <section className="button-group">
      <Button onClick={handleMarkAllAsComplete} buttonType="secondary">
        Mark all as Completed
      </Button>
      <Button onClick={handleMarkAllAsIncomplete} buttonType="secondary">
        Mark all as incompleted
      </Button>
      <Button onClick={handelResetToInitial} buttonType="secondary">
        Reset to initial{' '}
      </Button>
      <Button onClick={handleRemoveAllItems} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  )
}
