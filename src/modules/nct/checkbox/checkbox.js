import { LightningElement, api } from 'lwc';


export default class Checkbox extends LightningElement {
    @api required = false;
    @api showHelpText = false;
    @api helpText;
    @api errorText;

    @api checkboxOptions;
    @api userOutput = [];
    isError = false;

    handleChange(event) {
        this.checkboxOptions.forEach(option => {
            if (option.value === event.target.value) {
                this.userOutput[option.value] = event.target.checked;
            }
        }); 
    }

    @api
    validate() {
        const inputField = this.template.querySelectorAll('input');
        let count = 0;

        inputField.forEach(element => {
            if (element.checked){
                count++;
            }
        });
        console.log(count);
        if (count <= 0) {
            return { 
                isValid: false,
                errorMessage: this.customErrorText 
            };
        }

        return { isValid : true }
    }
    
    get getLabelClasses() {
        return this.required && this.checkboxOptions.length <= 1 ? 'checkbox__label is-required' : 'checkbox__label';
    }
    
}
