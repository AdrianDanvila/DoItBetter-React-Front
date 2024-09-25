import { useState } from 'react'
import { Toolbar } from 'primereact/toolbar'
import { Pencil1Icon } from '@radix-ui/react-icons'

import {
  EDIT_USER_FORM_INPUTS,
  INITIAL_VALUES,
  VALID_EDIT_SCHEMA,
} from './constants'

import './edit-user-form.scss'

import { Button } from '@/components/shared/button/Button'
import { ButtonSeverity } from '@/components/shared/button/types'
import { Form } from '@/components/shared/form/Form'
import { User } from '@/types/interfaces'

export interface EditUserFormProps {
  user: User
}
export const EditUserForm = ({ user }: EditUserFormProps) => {
  const [editable, setEditable] = useState<boolean>(true)

  const HandleEditClick = () => {
    setEditable(!editable)
  }

  return (
    <>
      <Toolbar
        className="p-0"
        end={
          <Button
            icon={<Pencil1Icon />}
            severity={ButtonSeverity.Danger}
            onClick={HandleEditClick}
          />
        }
      />
      <Form<User>
        inputs={EDIT_USER_FORM_INPUTS}
        initialValues={user}
        validationSchema={VALID_EDIT_SCHEMA}
        inputContainerClassName="grid-cols-4 grid-rows-5 "
        onSumbit={function (e: User): void {
          throw new Error('Function not implemented.')
        }}
        disabled={editable}
      />
    </>
  )
}
