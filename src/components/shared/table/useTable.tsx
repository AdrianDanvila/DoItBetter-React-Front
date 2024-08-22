import { useEffect, useState } from 'react'

export const useTable = <T extends { id?: number }>(
  initialValues: T[],
  onError?: () => void,
  onSucces?: () => void,
) => {
  const [values, setValues] = useState<T[]>(initialValues)
  const [selectedItem, setSelectedItem] = useState<T>()
  const [error, setError] = useState<boolean>(false)

  const succesHandler = () => {
    onSucces && onSucces()
  }

  useEffect(() => {
    const errorHandler = () => {
      onError && onError()
    }

    error && errorHandler()
    setError(false)
  }, [error, onError])

  const deleteItem = (selectedItem: T | undefined) => {
    if (selectedItem === undefined) {
      setError(true)
      return
    }

    const filteredValues = values.filter(
      (value) => value.id != selectedItem?.id,
    )

    if (filteredValues.length === values.length) {
      setError(true)
      return
    }

    setValues(filteredValues)
    succesHandler()
  }
  const addItem = (item: T) => {
    const newValues = [...values]

    newValues.push(item)
    setValues(newValues)

    onSucces && onSucces()
  }

  const onRowEditComplete = (index: number, newData: T) => {
    const _values = [...values]
    _values[index] = newData
    setValues(_values)
  }

  const onSelectionChange = (item: T) => {
    item !== selectedItem ? setSelectedItem(item) : setSelectedItem(undefined)
  }

  return {
    values,
    setValues,
    deleteItem,
    addItem,
    setError,
    onRowEditComplete,
    selectedItem,
    onSelectionChange,
  }
}
