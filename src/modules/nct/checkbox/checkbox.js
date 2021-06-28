import { LightningElement, api } from 'lwc';

export default class Checkbox extends LightningElement {
    @api isRequired = false;
    @api showHelpText = false;
    @api helpText;
    @api isError = false;
    @api errorText;

    options = [
        { 
            id: 1,
            label: 'Email',
            name: 'opt-in',
            value: 'email'
        },
        {  
            id: 2,
            label: 'Post',
            name: 'opt-in',
            value: 'post',
            checked: true
        },
        {  
            id: 3,
            label: 'SMS Text',
            name: 'opt-in',
            value: 'sms-text'
        },
        {  
            id: 4,
            label: 'Telephone',
            name: 'opt-in',
            value: 'phone'
        }
    ]

}
