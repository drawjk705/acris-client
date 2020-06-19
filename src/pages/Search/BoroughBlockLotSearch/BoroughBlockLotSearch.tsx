import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Dropdown } from '../../../components/formHelpers/Dropdown';
import { Borough } from '../../../__generated__/globalTypes';
import { Input } from '../../../components/formHelpers/Input';

const MAX_LOT_NUM = 9999;
const MAX_BLOCK_NUM = 99999;

const validationSchema = Yup.object({
    borough: Yup.string().oneOf(Object.values(Borough)),
    block: Yup.number().positive(),
    lot: Yup.number().positive(),
});

export const BoroughBlockLotSearch: React.FC = () => (
    <Formik
        validationSchema={validationSchema}
        initialValues={{}}
        onSubmit={() => {}}
    >
        <Form>
            <Dropdown label='boroughs' name='boroughs'>
                <option value=''>Select a borough</option>
                {Object.values(Borough).map((boroughName) => (
                    <option key={boroughName} value={boroughName}>
                        {boroughName}
                    </option>
                ))}
            </Dropdown>
            <Input.Number name={'block'} placeholder={'block'} />
            <Input.Number name={'lot'} placeholder={'lot'} />
            <button type='submit'>Submit</button>
        </Form>
    </Formik>
);
