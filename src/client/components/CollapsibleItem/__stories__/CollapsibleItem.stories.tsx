import React from 'react';
import { CollapsibleItem } from '../CollapsibleItem';
// import styled from '@emotion/styled';

export default { title: 'Components/CollapsibleItem' };

export const multipleCollapsibleItems = () => (
    <div style={{ backgroundColor: 'white', width: '300px' }}>
        <CollapsibleItem expandedHeightPx={100} title={'Item 1'}>
            Here is some content
        </CollapsibleItem>
        <CollapsibleItem expandedHeightPx={300} title={'Item 2'}>
            Here is some other content
        </CollapsibleItem>
    </div>
);
