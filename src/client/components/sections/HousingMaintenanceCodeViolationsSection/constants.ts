import {
    ViolationStatus,
    ViolationCurrentStatus,
} from '../../../__generated__/globalTypes';

export const ViolationStatusStringified: {
    [key in ViolationStatus]: string;
} = {
    [ViolationStatus.Open]: 'Open',
    [ViolationStatus.Close]: 'Closed',
};

export const ViolationCurrentStatusStringified: {
    [key in ViolationCurrentStatus]: string;
} = {
    [ViolationCurrentStatus.CERTIFICATION_POSTPONMENT_DENIED]:
        'Certification Postponement Denied',
    [ViolationCurrentStatus.CERTIFICATION_POSTPONMENT_GRANTED]:
        'Certification Postponement Granted',
    [ViolationCurrentStatus.CIV14_MAILED]: 'CIV-14 Mailed',
    [ViolationCurrentStatus.COMPLIED_IN_ACCESS_AREA]: 'Complied in Access Area',
    [ViolationCurrentStatus.DEFECT_LETTER_ISSUED]: 'Defect Letter Issued',
    [ViolationCurrentStatus.FALSE_CERTIFICATION]: 'False Certification',
    [ViolationCurrentStatus.FIRST_NO_ACCESS_TO_RE_INSPECT_VIOLATION]:
        'First No Access to Reinspect Violation',
    [ViolationCurrentStatus.INFO_NOV_SENT_OUT]: 'Notice of Violation Sent Out',
    [ViolationCurrentStatus.INVALID_CERTIFICATION]: 'Invalid Certification',
    [ViolationCurrentStatus.NOTICE_OF_ISSUANCE_SENT_TO_TENANT]:
        'Notice of Issuance Sent to Tenant',
    [ViolationCurrentStatus.NOT_COMPLIED_WITH]: 'Not Complied With',
    [ViolationCurrentStatus.NOV_CERTIFIED_LATE]:
        'Notice of Violation Certified Late',
    [ViolationCurrentStatus.NOV_CERTIFIED_ON_TIME]:
        'Notice of Violation Certified on Time',
    [ViolationCurrentStatus.NOV_SENT_OUT]: 'Notice of Violation Sent Out',
    [ViolationCurrentStatus.SECOND_NO_ACCESS_TO_RE_INSPECT_VIOLATION]:
        'Second No Access to Reinspect Violation',
    [ViolationCurrentStatus.VIOLATION_CLOSED]: 'Violation Closed',
    [ViolationCurrentStatus.VIOLATION_DISMISSED]: 'Violation Dismissed',
    [ViolationCurrentStatus.VIOLATION_OPEN]: 'Violation Open',
    [ViolationCurrentStatus.VIOLATION_REOPEN]: 'Violated Reopened',
    [ViolationCurrentStatus.VIOLATION_WILL_BE_REINSPECTED]:
        'Violation Will Be Reinspected',
};
