import { useState } from 'react'
import { Toolbar } from 'primereact/toolbar'
import { Pencil1Icon } from '@radix-ui/react-icons'

import { EDIT_USER_FORM_INPUTS, VALID_EDIT_SCHEMA } from './constants'

import './edit-user-form.scss'

import { Button } from '@/components/shared/button/Button'
import { ButtonSeverity } from '@/components/shared/button/types'
import { Form } from '@/components/shared/form/Form'
import { useAppDispatch } from '@/helpers/hooks'
import { updateUserInfoAction } from '@/store/userSlice'
import { User } from '@/types/interfaces'

export interface EditUserFormProps {
  user: User
}
export const EditUserForm = ({ user }: EditUserFormProps) => {
  const [editable, setEditable] = useState<boolean>(true)
  const dispatch = useAppDispatch()

  const HandleEditClick = () => setEditable(!editable)
  const onSumbit = (userData: User) => {
    dispatch(updateUserInfoAction(userData))
  }

  return (
    <>
      <Toolbar
        className="p-0 bg-transparent"
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
        onSumbit={onSumbit}
        disabled={editable}
      />
    </>
  )
}
