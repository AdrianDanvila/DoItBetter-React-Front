import { Table } from '@radix-ui/themes'

import { DataTable } from '@components/shared/dataTable/DataTable.tsx'
import { NoValueTable } from '@components/shared/noValueTable/NoValueTable.tsx'

import { noValueTableText, providersText } from '@locales/es.json'

import type { ConstantObjectData, Provider } from '@customTypes/interfaces.ts'

import { TABLE_DATA } from '../constants.ts'

import { ActionButtons } from './components/ActionButtons.tsx'
import { ProviderTableProps } from './types.ts'

export const ProviderTable = ({ providers }: ProviderTableProps) => {
  const getMobileTable = () => (
    <>
      {providers.length === 0 ? (
        <NoValueTable message={noValueTableText.providers} />
      ) : (
        providers.map((element: Provider) => (
          <Table.Root
            layout="auto"
            className="table table_mobile"
            key={element.id}>
            <Table.Body role="table-body">
              {TABLE_DATA.map((item: ConstantObjectData, index: number) => (
                <Table.Row
                  key={index}
                  role="table-row">
                  <Table.ColumnHeaderCell className="table_mobile__header">
                    {item.title}
                  </Table.ColumnHeaderCell>
                  <Table.Cell>
                    {element[item.reference as keyof typeof element]}
                  </Table.Cell>
                </Table.Row>
              ))}
              <Table.Row role="table-row">
                <Table.ColumnHeaderCell className="table_mobile__header">
                  {providersText.actions}
                </Table.ColumnHeaderCell>
                <Table.Cell className="actions-container">
                  <ActionButtons provider={element} />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        ))
      )}
    </>
  )

  const getDesktopTable = () => (
    <>
      {providers.length === 0 ? (
        <NoValueTable message={noValueTableText.providers} />
      ) : (
        <Table.Root
          layout="auto"
          className="table table_desktop">
          <Table.Header role="table-header">
            <Table.Row role="table-row">
              {TABLE_DATA.map((element: ConstantObjectData, index: number) => (
                <Table.ColumnHeaderCell key={index}>
                  {element.title}
                </Table.ColumnHeaderCell>
              ))}
              <Table.ColumnHeaderCell>
                {providersText.actions}
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body role="table-body">
            {providers.map((element) => (
              <Table.Row
                key={element.id}
                role="table-row">
                {TABLE_DATA.map((item: ConstantObjectData, index: number) => (
                  <Table.Cell key={index}>
                    {element[item.reference as keyof typeof element]}
                  </Table.Cell>
                ))}
                <Table.Cell className="actions-container">
                  <ActionButtons provider={element} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      )}
    </>
  )

  return (
    <DataTable
      desktopTable={getDesktopTable()}
      mobileTable={getMobileTable()}
    />
  )
}
