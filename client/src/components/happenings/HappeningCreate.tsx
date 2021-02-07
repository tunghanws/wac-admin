import IndexComponent from './HappeningFormTabs/index';
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
	FormDataConsumer 
} from 'react-admin';
const HappeningCreate = (props: any) => {
    return (
		<Create {...props}>
		  <IndexComponent/>
		</Create>
	)
}
export default HappeningCreate
