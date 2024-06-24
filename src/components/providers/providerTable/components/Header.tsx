import { useNavigate } from 'react-router-dom'
import { PlusIcon } from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'

import { Search } from '@components/shared/search/Search.tsx'

import { providersText } from '@locales/es.json'

import { Path } from '@router/constants.ts'

import { ProviderStatus } from '@customTypes/enums.ts'

import { HeaderProps } from './types.ts'

import './header.scss'

export const Header = ({
  statusType,
  setSearchTerm,
  children,
}: HeaderProps) => {
  const navigate = useNavigate()
  const onClickButton = () => navigate(Path.addProvider)

  return (
    <div className="provider-header">
      <h2 className="provider-header__title">
        {providersText.providersList} {statusType.toLowerCase()}
      </h2>
      <Search setSearchTerm={setSearchTerm} />
      {statusType === ProviderStatus.Active ? (
        <Button
          onClick={onClickButton}
          variant="outline">
          <PlusIcon />
          {children}
        </Button>
      ) : (
        <></>
      )}
    </div>
  )
}
