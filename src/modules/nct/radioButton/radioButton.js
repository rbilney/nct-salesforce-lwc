import { LightningElement, api } from 'lwc';

export default class RadioButton extends LightningElement {
    @api required = false;
    @api showHelpText = false;
    @api helpText;
    @api isError = false;
    @api errorText;

    options = [
        { 
            id: 1,
            label: '2 monthly payments of £90',
            value: '1',
            name: 'payment-plan-options',
            checked: false
        },
        {  
            id: 2,
            label: '3 monthly payments of £60',
            value: '2',
            name: 'payment-plan-options',
            checked: false
        },
        {  
            id: 3,
            label: '4 monthly payments of £45',
            value: '3',
            name: 'payment-plan-options',
            checked: false
        }
    ]

}
