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
import { InputAdornment } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Card, CardContent, Typography } from '@material-ui/core';
//import RichTextInput from 'ra-input-rich-text';

import ImageFormTab from './HappeningFormTabs/ImageFormTab/ImageFormTab';
import DetailFormTab from './HappeningFormTabs/DetailFormTab/DetailFormTab';
import QuestionFormTab from './HappeningFormTabs/QuestionFormTab/QuestionFormTab';
import OccurrencesFormTab from './HappeningFormTabs/OccurrencesFormTab/OccurrencesFormTab';
import HostByFormTab from './HappeningFormTabs/HostByFormTab/HostByFormTab';
import GalleryFormTab from './HappeningFormTabs/GalleryFormTab/GalleryFormTab';

import { Styles } from '@material-ui/styles/withStyles';

export const styles: Styles<Theme, any> = {
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
    box_left: { width: 544 },
    box_right: { width: 300 },
    password: { display: 'inline-block' },
    confirm_password: { display: 'inline-block', marginLeft: 32 },
};

const useStyles = makeStyles(styles);

const HappeningCreate = (props: any) => {
    const translate = useTranslate();
    const classes = useStyles(props);
    return (
        <Create {...props}>
            <TabbedForm>
			
                <FormTab label="IMAGE">
					<ImageFormTab/>
                </FormTab>
				
				<FormTab label="GALLERY">
					<GalleryFormTab/>
                </FormTab>
				
                <FormTab label="DETAILS" path="details" >
                    <DetailFormTab/>
                </FormTab>
				
				<FormTab label="QUESTION">
					<QuestionFormTab/>
                </FormTab>
				
				<FormTab label="HOST BY">
					<HostByFormTab/>
                </FormTab>
				
				<FormTab label="OCCURRENCES">
					<OccurrencesFormTab/>
                </FormTab>
                
				
            </TabbedForm>
        </Create>
    )
}
const SectionTitle = ({ label }: { label: string }) => {
    const translate = useTranslate();

    return (
        <Typography variant="h6" gutterBottom>
            {translate(label)}
        </Typography>
    );
};

const Separator = () => <Box pt="1em" />;
export default HappeningCreate
