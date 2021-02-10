import {
	Edit,
} from 'react-admin';
import IndexComponent from './HappeningFormTabs/index';

const HappeningEdit = (props: any) => {
	return (
		<Edit {...props}>
			<IndexComponent/>
		</Edit>
	)
}
export default HappeningEdit
