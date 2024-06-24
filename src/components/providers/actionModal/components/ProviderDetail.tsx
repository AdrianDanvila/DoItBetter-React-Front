import { Inset, Table } from '@radix-ui/themes'

import { providersAction } from '@locales/es.json'

import { ConstantObjectData, Provider } from '@customTypes/interfaces.ts'

import { MODAL_TABLE_DATA } from "./constants.ts"

export const ProviderDetail = ({ provider }: { provider: Provider }) => (
  <Inset
    side="x"
    my="5">
    <Table.Root>
      <Table.Header aria-label="table headers">
        <Table.Row>
          {MODAL_TABLE_DATA.map(({ title }: ConstantObjectData) => (
            <Table.ColumnHeaderCell key={title}>{title}</Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {provider ? (
          <Table.Row>
            {MODAL_TABLE_DATA.map(({ reference }: ConstantObjectData) => (
              <Table.Cell key={reference}>
                {provider[reference as keyof typeof provider]}
              </Table.Cell>
            ))}
          </Table.Row>
        ) : (
          <div className="ml-6 my-2">{providersAction.noProviders}</div>
        )}
      </Table.Body>
    </Table.Root>
  </Inset>
)
