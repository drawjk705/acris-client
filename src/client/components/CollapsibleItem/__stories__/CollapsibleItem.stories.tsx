import React from 'react';
import { CollapsibleItem } from '../CollapsibleItem';

export default { title: 'Components/CollapsibleItem' };

export const multipleCollapsibleItems = () => (
    <div
        style={{
            backgroundColor: 'white',
            width: '300px',
        }}
    >
        <CollapsibleItem title={'Item 1'}>Here is some content</CollapsibleItem>
        <CollapsibleItem title={'Item 2'}>
            Here is some other content
        </CollapsibleItem>
    </div>
);
