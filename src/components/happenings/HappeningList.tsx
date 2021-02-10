import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  ImageInput,
  ImageField
} from 'react-admin'
import HappeningImage from './HappeningImage'

const HappeningList = (props:any) => {
  return (
    <List {...props}>
      <Datagrid>
		<HappeningImage source="#"/>
        <TextField source='title' />
        <TextField source='slug' />
        <EditButton basePath='/happenings' />
        <DeleteButton basePath='/happenings' />
      </Datagrid>
    </List>
  )
}

export default HappeningList
