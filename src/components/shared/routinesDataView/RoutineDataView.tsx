import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DataView } from 'primereact/dataview'
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown'
import { Toolbar } from 'primereact/toolbar'

import { RoutineDataViewEmpty } from './components/routineDataViewEmpty/RoutineDataviewEmpty'
import { RoutineDataViewItem } from './components/routineDataViewItem/RoutineDataViewItem'

import { CreateRoutineDialog } from '@/components/routines/createRoutineDiaglog/CreateRoutineDialog'
import { useAppSelector } from '@/helpers/hooks'
import { Routine } from '@/types/interfaces'

export interface RoutineDataViewProps {
  values: Routine[]
  className?: string
}

export const RoutinesDataview = ({
  values,
  className,
}: RoutineDataViewProps) => {
  const areValuesPublished =
    values === useAppSelector((state) => state.routines.published)
  const [sortKey, setSortKey] = useState('')
  const [searchedValue, setSearchedValue] = useState(values)
  const searchRef = useRef<HTMLInputElement>(null)
  const [sortOrder, setSortOrder] = useState<0 | 1 | -1 | null | undefined>()
  const [sortField, setSortField] = useState('')
  const { t } = useTranslation()

  const sortOptions = [
    { label: t('main.routines.sort.name'), value: 'name' },
    { label: t('main.routines.sort.none'), value: 'none' },
  ]
  const onSortChange = (event: DropdownChangeEvent) => {
    const value = event.value

    if (value.indexOf('!') === 0) {
      setSortOrder(-1)
      setSortField(value.substring(1, value.length))
      setSortKey(value)
    } else {
      setSortOrder(1)
      setSortField(value)
      setSortKey(value)
    }
  }

  const onSearchChange = (e: { currentTarget: { value: string } }) => {
    const nameValue = e.currentTarget.value.toLowerCase()
    // eslint-disable-next-line no-confusing-arrow
    const filteredValues = values.filter((value) =>
      areValuesPublished
        ? (value.user_name as unknown as string)
            .toLowerCase()
            .startsWith(nameValue)
        : value.name.toLowerCase().startsWith(nameValue),
    )

    nameValue === ''
      ? setSearchedValue(values)
      : setSearchedValue(filteredValues)
  }

  useEffect(() => {
    searchRef.current ? (searchRef.current.value = '') : null
    setSearchedValue(values)
  }, [values])

  return (
    <>
      <Toolbar
        className="pb-5 pt-0 m-0 items-center px-3 z-30 flex flex-row flex-wrap bg-transparent"
        start={
          <Dropdown
            options={sortOptions}
            value={sortKey}
            optionLabel="label"
            placeholder={t('main.routines.sort.none')}
            onChange={onSortChange}
            className="w-[25vh] sm border-2 border-gray-400"
          />
        }
        end={
          <>
            <input
              ref={searchRef}
              placeholder={
                areValuesPublished
                  ? t('main.routines.find.userName')
                  : t('main.routines.find.name')
              }
              onChange={onSearchChange}
              className=" border-2 px-2 border-gray-400 p-dropdown p-component p-inputwrapper"
            />
            {areValuesPublished || <CreateRoutineDialog />}
          </>
        }
      />
      {searchedValue?.length ? (
        <>
          <DataView
            className={`flex flex-col justify-between py-0.5 max-h-[58vh] ${className}`}
            sortField={sortField}
            sortOrder={sortOrder}
            value={searchedValue}
            itemTemplate={RoutineDataViewItem}
            paginatorClassName="w-full px-0"
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
          />
        </>
      ) : (
        <RoutineDataViewEmpty />
      )}
    </>
  )
}
