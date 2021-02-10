import * as React from 'react';
import { FC } from 'react';
import {  SelectArrayInput, InputProps } from 'react-admin';
import { Happening } from '../../types';
import { Location } from '../../types';
import {
    Datagrid,
    DateField,
    Edit,
    EditButton,
    EditProps,
    FormTab,
    NumberInput,
    Pagination,
    ReferenceInput,
    ReferenceManyField,
    required,
    SelectInput,
    TabbedForm,
    TextField,
    Create,
    DateInput,
    NullableBooleanInput,
    TextInput,
    PasswordInput,
    Toolbar,
	ArrayInput,
    useTranslate,
    FormWithRedirect,
    email,
	SimpleFormIterator,
    FieldProps,
    SimpleForm,
} from 'react-admin';

import segments from '../segments/data';

interface Props extends Omit<InputProps, 'source'> {
    source?: string;
}

const Locations = null



export default Locations;
