import IndexComponent from './HappeningFormTabs/index';
import {
	Create
} from 'react-admin';
const HappeningCreate = (props: any) => {
    return (
		<Create {...props}>
		  <IndexComponent/>
		</Create>
	)
}
export default HappeningCreate
