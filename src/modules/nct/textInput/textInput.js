import { LightningElement, api } from 'lwc';

export default class TextInput extends LightningElement {
    @api label;
    @api isRequired = false;
    @api inputType = 'text';
    @api showHelpText = false;
    @api helpText;
    @api isError = false;
    @api errorText;
    @api value;
    @api name;
    @api placeholder;

    get fieldClass() {
        var inputClass = 'nct-input';
        inputClass += this.isRequired ? ' is-required' : '';
        inputClass += this.isError ? ' is-error' : '';
        return inputClass;
     }
}
