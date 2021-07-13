import { LightningElement, api, track } from 'lwc';

    var coursePaymentOptions =
        [{ 
            id: 1,
            optionText: 'Debit/credit card',
            optionDesc: '£180',
            value: 'debit-credit-card',
            name: 'course-payment-options',           
            checked: false,
            disabled: false,
            disabledText: ''
        },
        {  
            id: 2,
            optionText: 'Interest-free instalments',
            optionDesc: '',
            value: 'instalments',
            name: 'course-payment-options',   
            checked: false,
            disabled: false,
            disabledText: ''
        }];

    var eighteenMonthMembershipOptions =
        [{ 
            id: 1,
            optionText: '£9.50 quarterly',
            optionDesc: 'by Direct Debit',
            value: 'membership-direct-debit',
            name: 'membership-payment-options',           
            checked: false,
            disabled: false,
            disabledText: ''
        },
        {  
            id: 2,
            optionText: '£57 one-off payment',
            optionDesc: 'by debit/credit card',
            value: 'membership-card',
            name: 'membership-payment-options',   
            checked: false,
            disabled: false,
            disabledText: ''
        }
    ];

    var twelveMonthMembershipOptions =
        [{ 
            id: 1,
            optionText: '£12 quarterly',
            optionDesc: 'by Direct Debit',
            value: 'membership-direct-debit',
            name: 'membership-payment-options',           
            checked: false,
            disabled: false,
            disabledText: ''
        },
        {  
            id: 2,
            optionText: '£48 one-off payment',
            optionDesc: 'by debit/credit card',
            value: 'membership-card',
            name: 'membership-payment-options',   
            checked: false,
            disabled: false,
            disabledText: ''
        }
    ];


export default class PaymentComponent extends LightningElement {
    @api membershipType;
    @api payOptions = coursePaymentOptions;
    @api memOptions = eighteenMonthMembershipOptions;
    @api showInstalments = false;

    @track courseSelection = '';
    @track membershipSelection = '';

    get membershipProductPrices() {
        return eighteenMonthMembershipOptions;
    }

    handleCourseSelection(e) {
        this.courseSelection = e.detail;
    }

    get showInstalmentOptions() {
        return (this.courseSelection === 'instalments') ? true : false;
    }

    handleMembershipSelection(e) {
        this.membershipSelection = e.detail;
    }

    get showDirectDebit() {
        return (this.membershipSelection === 'membership-direct-debit') ? true : false;
    }


}
