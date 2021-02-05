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
import SegmentsInput from '../.././SegmentsInput';
//import requiredValidate from '../validate'

const useStyles = makeStyles({
    root: { display: 'inline-block', marginTop: '1em', zIndex: 2 },
    content: { padding: 0, '&:last-child': { padding: 0 } },
    img: {
        width: 'initial',
        minWidth: 'initial',
        maxWidth: '100px',
        maxHeight: '100px',
    },
	title: { display: 'inline-block' },
    slug: { display: 'inline-block', marginLeft: 32 },
    short_description: { width: 544 },
    address: { maxWidth: 544 },
    zipcode: { display: 'inline-block' },
    city: { display: 'inline-block', marginLeft: 32 },
    comment: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
});

const DetailFormTab: FC<FieldProps<Happening>> = ({ record }) => {
    const classes = useStyles();

    if (!record) return null;
    return (
        <Card>
            <CardContent>
				<TextInput
					autoFocus
					source="title"
					formClassName={classes.title}
					validate={requiredValidate}
				/>
				<TextInput
					source="slug"
					formClassName={classes.slug}
					validate={requiredValidate}
				/>
				<TextInput
					source="short_description"
					fullWidth
					formClassName={classes.short_description}
				/>
				<TextInput
					source="long_description"
					fullWidth
					formClassName={classes.short_description}
				/>
				 <TextInput
					source="order"
					fullWidth
					formClassName={classes.short_description}
				/>
				
				<ArrayInput source="locations">
					<SimpleFormIterator>
						<TextInput source="location" />
					</SimpleFormIterator>
				</ArrayInput>
				
				
				<DateInput source="start_time" />
				
				<SelectInput source="category" allowEmpty emptyValue="" choices={[
					{ id: 'Experiences', name: 'Experiences' },
				]} />

				<div>
					<SegmentsInput fullWidth />
				</div>
				<div>
					<NullableBooleanInput
						source="featured"
						resource="customers"
					/>
				</div>
            </CardContent>
        </Card>
    );
};
const requiredValidate = [required()];
export default DetailFormTab;
