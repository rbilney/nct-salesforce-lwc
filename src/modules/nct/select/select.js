import { LightningElement, api, track } from 'lwc';

export default class Select extends LightningElement {
    @api label;
    @api name;
    @api required = false;
    @api showHelpText = false;
    @api helpText;
    @api isError = false;
    @api errorText;

    @api options;

    userSelection = [];

    get selectClasses() {
        return this.required ? 'is-required' : '';
    }

    handleChange(event) {
        console.log(event.target.value)
        //this.userSelection = event.target.value;
        //this.validate();
        
        this.dispatchEvent(new CustomEvent('fieldoutput', {
            detail: event.target.value
        }));
        //const attributeChangeEvent = new FlowAttributeChangeEvent('value', event.target.value);
        //this.dispatchEvent(attributeChangeEvent);          
    }

}
