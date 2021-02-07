import {
    DateInput,
    NullableBooleanInput,
    TextInput,
    Toolbar,
    useTranslate,
    FormWithRedirect,
    SelectInput,
    required,
    ArrayInput,
	FormDataConsumer,
    SimpleFormIterator,
	ImageField,
	ImageInput,
	SelectArrayInput,
	ReferenceInput,
	ChipField
} from 'react-admin';
import * as React from 'react';
import { Happening } from '../../../types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, Typography } from '@material-ui/core';
import HappeningImage from '../HappeningImage';

//import LocationsInput from '.././LocationsInput'
import SegmentsInput from '.././SegmentsInput';
//import { S3FileInput } from '@fusionworks/ra-s3-input';

const useStyles = makeStyles({
    root: { display: 'inline-block', marginTop: '1em', zIndex: 2 },
    content: { padding: 0, '&:last-child': { padding: 0 } },
    img: {
        width: 'initial',
        minWidth: 'initial',
        maxWidth: '100px',
        maxHeight: '100px',
    },
    widthDefault: { width: 350 },
    short_description: { width: 544 },
    divMembership: { marginLeft: 12 },
	imgGallery: {
		display:'inline-block',
		float:'left'
	},
	imgUpload:{
		border:'1px dashed'
	},
	selectLocations:{
		width: 350
	}
});

const IndexComponent = (props: any) => {
    const translate = useTranslate();
    const classes = useStyles();
    return (
        <FormWithRedirect
            {...props}
            render={(formProps: any) => (
                <Card>
                    <form>
                        <CardContent>
                            <Box display={{ md: 'block', lg: 'flex' }}>

                                <Box flex={2} mr={{ md: 0, lg: '1em' }}>
                                    <Typography variant="h6" gutterBottom>
                                        {translate(
                                            'Details'
                                        )}
                                    </Typography>
                                    <Box display={{ xs: 'block', sm: 'flex' }}>

                                        <Box
                                            flex={1}
                                            mr={{ xs: 0, sm: '0.5em' }}
                                        >
                                            <TextInput
                                                source="title"
                                                resource="happening"
                                                validate={requiredValidate}
                                                fullWidth
                                            />
                                        </Box>
                                        <Box
                                            flex={1}
                                            ml={{ xs: 0, sm: '0.5em' }}
                                        >
                                            <TextInput
                                                source="slug"
                                                resource="happening"
                                                validate={requiredValidate}
                                                fullWidth
                                            />
                                        </Box>
                                    </Box>
                                    <TextInput
                                        source="short_description"
                                        resource="happening"
                                        fullWidth
                                    />
                                    <TextInput
                                        source="long_description"
                                        resource="happening"
                                        fullWidth
                                    />
                                    <Box display={{ xs: 'block', sm: 'flex' }}>
                                        <Box
                                            flex={1}
                                            mr={{ xs: 0, sm: '0.5em' }}
                                        >
                                            <DateInput
                                                source="start_time"
                                                resource="happening"
                                                fullWidth
                                                helperText={false}
                                            />
                                        </Box>
                                        <Box
                                            flex={2}
                                            ml={{ xs: 0, sm: '0.5em' }}
                                        >
                                            <TextInput
                                                source="order"
                                                fullWidth
                                                formClassName={classes.short_description}
                                            />
                                        </Box>
                                    </Box>
                                    <Box display={{ xs: 'block', sm: 'flex' }}>
                                        <Box
                                            flex={1}
                                            mr={{ xs: 0, sm: '0.5em' }}
                                        >
                                            <SelectInput formClassName={classes.widthDefault} source="category" allowEmpty emptyValue="" choices={[
                                                { id: 'Experiences', name: 'Experiences' },
                                            ]} />
                                        </Box>
                                        <Box
                                            flex={2}
                                            mr={{ xs: 0, sm: '0.5em' }}
                                        >
                                            <SegmentsInput fullWidth />
                                        </Box>
                                        <Box flex={2}>
                                            <NullableBooleanInput
                                                source="featured"
                                                resource="customers"
                                                formClassName={classes.widthDefault}
                                                falseLabel="False"
                                                trueLabel="True"
                                            />
                                        </Box>
                                    </Box>

                                    <Box mt="1em" />

                                    <Typography variant="h6" gutterBottom>
                                        {translate(
                                            'Price'
                                        )}
                                    </Typography>
                                    <div style={{ marginLeft: "12px" }}>
                                        <label>Membership</label>
                                        <br />
                                        <TextInput
                                            autoFocus
                                            label="Stripe"
                                            source="price.membership.stripe"
                                            formClassName={classes.widthDefault}
                                            validate={requiredValidate}
                                            style={{ marginRight: "12px" }}
											fullWidth
                                        />
                                        <TextInput
                                            type="number"
                                            label="Value"
                                            source="price.membership.value"
                                            formClassName={classes.widthDefault}
                                            validate={requiredValidate}
											fullWidth
                                        />
                                    </div>

                                    <div style={{ marginLeft: "12px" }}>
                                        <label>Non membership</label>
                                        <br />
                                        <TextInput
                                            autoFocus
                                            label="Stripe"
                                            source="price.non_membership.stripe"
                                            formClassName={classes.widthDefault}
                                            validate={requiredValidate}
                                            style={{ marginRight: "12px" }}
											fullWidth
                                        />
                                        <TextInput
                                            type="number"
                                            label="Value"
                                            source="price.non_membership.value"
                                            formClassName={classes.widthDefault}
                                            validate={requiredValidate}
											fullWidth
                                        />
                                    </div>

                                    <Typography variant="h6" gutterBottom>
                                        {translate(
                                            'Location'
                                        )}
                                    </Typography>
                                    <div style={{ marginLeft: "12px" }}>
                                        
										<FormDataConsumer>
											{({ formData, ...rest }) => (
												<SelectArrayInput 
													source="locations" 
													choices={formData.allLocations} 
													optionText="name" 
													optionValue="_id"
													fullWidth
												/>
											)}
										</FormDataConsumer>
										
                                        <ArrayInput source="locations" lable="Locations">
                                            <SimpleFormIterator>
                                                <TextInput source="address_line1" label="Address Line 1"/>
                                                <TextInput source="address_line2" label="Address Line 2"/>
                                                <TextInput source="city" label="City"/>
                                                <TextInput source="name" label="Name"/>
                                                <TextInput source="tel" label="Telephone"/>
                                                <TextInput source="pos_lat" label="Position lat"/>
                                                <TextInput source="pos_lon" label="Position lon"/>
                                            </SimpleFormIterator>
                                        </ArrayInput>
										
                                    </div>

                                </Box>
                                <Box
                                    flex={1}
                                    ml={{ xs: 0, lg: '1em' }}
                                    mt={{ xs: '1em', lg: 0 }}
                                >
                                    <Typography variant="h6" gutterBottom>
                                        {translate(
                                            'Image'
                                        )}
                                    </Typography>
                                    
									<FormDataConsumer>
										{({ formData, ...rest }) => (
											<img src={formData && formData.images && formData.images.thumb} className={classes.img}/>
										)}
									</FormDataConsumer>
									
									<ImageInput source="pictures" label="Related pictures" accept="image/*" >
										<ImageField source="images.thumb" title="title"/>
									</ImageInput>
									
									
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
									
                                    <Typography variant="h6" gutterBottom>
                                        {translate(
                                            'Host By'
                                        )}
                                    </Typography>
									<FormDataConsumer>
										{({ formData, ...rest }) => (
											<img src={formData && formData.host_by && formData.host_by.avartar} className={classes.img} alt="avartar"/>
										)}
									</FormDataConsumer>
                                    <TextInput
                                        label="Title"
                                        source="host_by.title"
                                        fullWidth
                                        validate={required()}
                                    />
                                    <TextInput
										label="Name"
                                        source="host_by.name"
                                        fullWidth
                                        validate={required()}
                                    />
                                    <TextInput
										label="User ID"
                                        source="host_by.user_id"
                                        fullWidth
                                        validate={required()}
                                    />

                                    <ArrayInput source="gallery" >
                                        <SimpleFormIterator>
											<FormDataConsumer>
												{({
													formData, // The whole form data
													scopedFormData, // The data for this item of the ArrayInput
													getSource, // A function to get the valid source inside an ArrayInput
													...rest
												}) =>
													scopedFormData && scopedFormData.url ? (
														<img
															src={scopedFormData.url}
															{...rest}
															className={`${classes.img} ${classes.imgGallery}`}
														/>
													) : null
												}
											</FormDataConsumer>
                                            <TextInput source="caption" label="Caption"/>
                                            <TextInput source="url" label="Url"/>
                                        </SimpleFormIterator>
                                    </ArrayInput>
									

                                    <ArrayInput source="repeat" >
                                        <SimpleFormIterator>
                                            // day_of_month
					                        <TextInput type="number" source="separation_count" label="Separation count" />
                                            <TextInput source="recurrance" label="Recurrance" />
                                            <ArrayInput source="day_of_month" label="Day of month">
                                                <SimpleFormIterator>
                                                    <TextInput type="number" source="" label="" />
                                                </SimpleFormIterator>
                                            </ArrayInput>
                                        // day_of_week
                                        <ArrayInput source="day_of_week" label="Day of week">
                                                <SimpleFormIterator>
                                                    <TextInput type="number" source="" label="" />
                                                </SimpleFormIterator>
                                            </ArrayInput>
                                        // occurences
                                        <ArrayInput source="occurences" label="Occurences">
                                                <SimpleFormIterator>
                                                    <TextInput type="number" source="" label="" />
                                                </SimpleFormIterator>
                                            </ArrayInput>
                                            <DateInput source="end_date" label="End date" />
                                        </SimpleFormIterator>
                                    </ArrayInput>

                                    <ArrayInput source="guest_questions">
                                        <SimpleFormIterator>
                                            <TextInput source="question" label="Question"/>
                                            <ArrayInput source="answers" label="Answers">
                                                <SimpleFormIterator>
                                                    <TextInput source="" label=""/>
                                                </SimpleFormIterator>
                                            </ArrayInput>
                                        </SimpleFormIterator>
                                    </ArrayInput>

                                    <ArrayInput source="occurrences">
                                        <SimpleFormIterator>
                                            <TextInput source="tittle" label="Title" />
                                            <TextInput source="start_time" label="Start time" type="number" />
                                            <TextInput source="start_hour" label="Start hour" type="number" />
                                            <TextInput source="start_min" label="Start min" type="number" />
                                        </SimpleFormIterator>
                                    </ArrayInput>

                                </Box>
                            </Box>
                        </CardContent>
                        <Toolbar
                            record={formProps.record}
                            basePath={formProps.basePath}
                            undoable={true}
                            invalid={formProps.invalid}
                            handleSubmit={formProps.handleSubmit}
                            saving={formProps.saving}
                            resource="customers"
                        />
                    </form>
                </Card>
            )}
        />
    );
};
const requiredValidate = [required()];
export default IndexComponent;
