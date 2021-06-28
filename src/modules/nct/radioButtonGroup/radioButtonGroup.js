import { LightningElement, api, track } from 'lwc';

export default class RadioButtonGroup extends LightningElement {
    @api label;
    @api isRequired = false;
    @api showHelpText = false;
    @api helpText;
    @api isError = false;
    @api errorText;

    @api options;

    @api userSelection;

    get labelClasses () {
        return this.isRequired ? 'nct-label is-required' : 'nct-label';
    }

    get hasLabel () {
        return this.label != null && this.label.length > 0 ? true : false;
    }

    handleSelection(e) {
        this.userSelection = e.target.value;
        const selectedEvent = new CustomEvent("radiobuttonselection", { 
            detail: this.userSelection
        });
        this.dispatchEvent(selectedEvent);
    }
}
