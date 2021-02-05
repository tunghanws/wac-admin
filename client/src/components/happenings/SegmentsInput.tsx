import * as React from 'react';
import { FC } from 'react';
import { useTranslate, SelectArrayInput, InputProps } from 'react-admin';

import segments from '../segments/data';

interface Props extends Omit<InputProps, 'source'> {
    source?: string;
}

const SegmentsInput: FC<Props> = ({ addField, ...rest }) => {
    const translate = useTranslate();
    return (
        <SelectArrayInput
            source="Tags"
            {...rest}
            choices={segments.map(segment => ({
                id: segment.id,
                name: translate(segment.name),
            }))}
        />
    );
};

SegmentsInput.defaultProps = {
    addField: true,
    source: 'Tags',
    resource: 'customers',
};

export default SegmentsInput;
