import { LightningElement, api } from 'lwc';

export default class Select extends LightningElement {
    @api label;
    @api name;
    @api isRequired = false;
    @api showHelpText = false;
    @api helpText;
    @api isError = false;
    @api errorText;

    options = [
        { 
            id: 5,
            label: '--- Please select ---',
            value: ''
        },
        { 
            id: 1,
            label: 'Email',
            value: 'email'
        },
        {  
            id: 2,
            label: 'Post',
            value: 'post',
        },
        {  
            id: 3,
            label: 'SMS Text',
            value: 'sms-text'
        },
        {  
            id: 4,
            label: 'Telephone',
            value: 'phone'
        }
    ];

    get selectClasses() {
        return this.isRequired ? 'is-required' : '';
    }

}
