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
import { Box, Card, CardContent, Typography, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import RichTextInput from 'ra-input-rich-text';
import { styles as createStyles } from './styles';
import SegmentsInput from './SegmentsInput';
import HappeningImage from './HappeningImage';
import ImageFormTab from './HappeningFormTabs/ImageFormTab/ImageFormTab';
import DetailFormTab from './HappeningFormTabs/DetailFormTab/DetailFormTab';
import QuestionFormTab from './HappeningFormTabs/QuestionFormTab/QuestionFormTab';
import OccurrencesFormTab from './HappeningFormTabs/OccurrencesFormTab/OccurrencesFormTab';
import HostByFormTab from './HappeningFormTabs/HostByFormTab/HostByFormTab';
import GalleryFormTab from './HappeningFormTabs/GalleryFormTab/GalleryFormTab';

const useStyles = makeStyles({
	...createStyles,
	comment: {
		maxWidth: '20em',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	},
	tab: {
		maxWidth: '40em',
		display: 'block',
	},
	title: { display: 'inline-block' },
	slug: { display: 'inline-block', marginLeft: 32 },
	short_description: { width: 544 },
	address: { maxWidth: 544 },
	zipcode: { display: 'inline-block' },
	city: { display: 'inline-block', marginLeft: 32 },
});
const HappeningEdit = (props: any) => {
	const classes = useStyles();
	return (
		<Edit {...props}>
			<FormWithRedirect
				{...props}
				render={(formProps: any) => (
					<Card>
						<form>
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
								
								<FormDataConsumer>
									{({ formData, ...rest }) => (
										<SelectInput
											source="localtions"
											choices={
												formData.allLocations
													? formData.allLocations
													: []
											}
											{...rest}
										/>
									)}
								</FormDataConsumer>


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
								
								<ArrayInput source="gallery">
									<SimpleFormIterator>
										<TextInput source="caption" />
										<TextInput source="url" />
									</SimpleFormIterator>
								</ArrayInput><TextInput
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
								<HappeningImage />
								<TextInput
									label="Corver"
									source="images.corver"
									fullWidth
								//formClassName={classes.short_description}
								/>
								<TextInput
									label="Thumb"
									source="images.thumb"
									fullWidth
								//formClassName={classes.short_description}
								/>
								<Toolbar
									record={formProps.record}
									basePath={formProps.basePath}
									undoable={true}
									invalid={formProps.invalid}
									handleSubmit={formProps.handleSubmit}
									saving={formProps.saving}
									resource="customers"
								/>
							</CardContent>

						</form>
					</Card>
				)}
			/>
		</Edit>
	)
}
const Separator = () => <Box pt="1em" />;

const requiredValidate = [required()];
export default HappeningEdit
