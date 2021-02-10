import * as React from 'react';
import {
    TextInput,
    ArrayInput,
    SimpleFormIterator
} from 'react-admin';
const stateManagerTag = {

}
const propsManagerTag = {
    
}
export class ManagerTagComponent extends React.Component {
    render() {
        return (
            <>
                <ArrayInput source="tags">
                    <SimpleFormIterator>
                        <TextInput source="" label="" />
                    </SimpleFormIterator>
                </ArrayInput>
            </>
        );
    }
}

export default ManagerTagComponent