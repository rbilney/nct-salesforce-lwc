import { LightningElement, api, track } from 'lwc';

export default class TextInput extends LightningElement {
    @api label;
    @api required = false;
    @api disabled = false;
    @api inputType = 'text';
    @api helpText;
    @api customErrorText;
    @api value;
    @api fieldName;
    @api placeholder;
    @api maxLength;

    isError = false;
    userInput = {};
    initialValue = '';

    connectedCallback() {
        if (this.value == null) {
            this.value = '';
        }
    }

    handleBlur(){
        this.validate();
    }

    handleChange(event) {
        this.value = event.target.value;
        this.validate();
        this.dispatchEvent(new CustomEvent('fieldoutput'));
        //const attributeChangeEvent = new FlowAttributeChangeEvent('value', event.target.value);
        //this.dispatchEvent(attributeChangeEvent);          
    }

    @api
    validate() {
        const inputField = this.template.querySelector('input');
        let isValid = inputField.checkValidity();

        if (!isValid) {
            if (!this.customErrorText) {
                this.customErrorText = inputField.validationMessage;
            }
            this.isError = true;
            return { 
                isValid: false,
                errorMessage: this.customErrorText 
            };

        } else {
            this.isError = false;
        }
        return { isValid: true };
    }

    get fieldClass() {
        var inputClass = 'nct-input';
        inputClass += this.required ? ' is-required' : '';
        inputClass += this.isError ? ' is-error' : '';
        return inputClass;
     }

     get showHelpText() {
         return this.helpText && this.helpText.length() > 0 ? true : false;
     }
}
