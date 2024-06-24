import {
  FieldTag,
  InputProps,
  InputType,
} from '@components/shared/input/types.ts'

import { providersFormText } from '@locales/es.json'

import { ConstantObjectData } from '@customTypes/interfaces.ts'

export const FIELD_ID: ConstantObjectData = {
  businessName: 'businessName',
  cif: 'cif',
  address: 'address',
  contact: 'contact',
  province: 'province',
  phoneNumber: 'phoneNumber',
  email: 'email',
  sector: 'sector',
}

export const PROVIDER_SECTORS: ConstantObjectData[] = [
  {
    label: providersFormText.sector.sectorLabels.transportLabel,
    value: 'Transporte',
  },
  {
    label: providersFormText.sector.sectorLabels.machineLabel,
    value: 'Máquinas',
  },
  {
    label: providersFormText.sector.sectorLabels.boxesLabel,
    value: 'Cajas',
  },
]
export const FORM_CONFIG_BUSINESS: InputProps[] = [
  {
    id: FIELD_ID.businessName,
    field: providersFormText.businessName.field,
    fieldTag: FieldTag.Input,
    placeHolder: providersFormText.businessName.placeHolder,
    className: 'w-full',
    inputType: InputType.Text,
  },
  {
    id: FIELD_ID.sector,
    field: providersFormText.sector.field,
    fieldTag: FieldTag.Select,
    placeHolder: providersFormText.sector.placeHolder,
    className: 'w-full md:w-6/12',
    inputType: InputType.Select,
    options: PROVIDER_SECTORS,
  },
  {
    id: FIELD_ID.cif,
    field: providersFormText.cif.field,
    fieldTag: FieldTag.Input,
    placeHolder: providersFormText.cif.placeHolder,
    className: 'w-full md:w-6/12',
    inputType: InputType.Text,
  },
  {
    id: FIELD_ID.address,
    field: providersFormText.address.field,
    fieldTag: FieldTag.Input,
    placeHolder: providersFormText.address.placeHolder,
    className: 'w-full md:w-8/12',
    inputType: InputType.Text,
  },
  {
    id: FIELD_ID.province,
    field: providersFormText.province.field,
    fieldTag: FieldTag.Input,
    placeHolder: providersFormText.province.placeHolder,
    className: 'w-full md:w-4/12',
    inputType: InputType.Text,
  },
]
export const FORM_CONFIG_CONTACT: InputProps[] = [
  {
    id: FIELD_ID.contact,
    field: providersFormText.contact.field,
    fieldTag: FieldTag.Input,
    placeHolder: providersFormText.contact.placeHolder,
    className: 'w-full ',
    inputType: InputType.Text,
  },
  {
    id: FIELD_ID.phoneNumber,
    field: providersFormText.phoneNumber.field,
    fieldTag: FieldTag.Input,
    placeHolder: providersFormText.phoneNumber.placeHolder,
    className: 'w-full md:w-6/12',
    inputType: InputType.Text,
  },
  {
    id: FIELD_ID.email,
    field: providersFormText.email.field,
    fieldTag: FieldTag.Input,
    placeHolder: providersFormText.email.placeHolder,
    className: 'w-full md:w-6/12',
    inputType: InputType.Mail,
  },
]
