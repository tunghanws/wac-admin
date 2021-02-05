import * as React from 'react';
import { FC } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { Happening } from '../../../../types';
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

const useStyles = makeStyles({
    root: { display: 'inline-block', marginTop: '1em', zIndex: 2 },
    content: { padding: 0, '&:last-child': { padding: 0 } },
    img: {
        width: 'initial',
        minWidth: 'initial',
        maxWidth: '100px',
        maxHeight: '100px',
    },
});

const HostByFormTab: FC<FieldProps<Happening>> = ({ record }) => {
    const classes = useStyles();

    if (!record) return null;
    return (
        <Card>
            <CardContent>
				<TextInput 
					source="avartar"
					fullWidth
					validate={required()}
				/>
				<TextInput 
					autoFocus
					source="title"
					fullWidth
					validate={required()}
				/>
				<TextInput
					source="name"
					fullWidth
					validate={required()}
				/>
				<TextInput
					source="user_id"
					fullWidth
					validate={required()}
				/>
            </CardContent>
        </Card>
    );
};

export default HostByFormTab;