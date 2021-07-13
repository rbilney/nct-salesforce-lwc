import { LightningElement, api, track } from 'lwc';

export default class RadioButtonGroup extends LightningElement {
    @api label;
    @api required = false;
    @api showHelpText = false;
    @api helpText;
    @api isError = false;
    @api errorText;

    @api options;

    @api userSelection;

    get labelClasses () {
        return this.required ? 'nct-label is-required' : 'nct-label';
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
