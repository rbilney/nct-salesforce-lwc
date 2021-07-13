import { LightningElement, api } from 'lwc';

export default class ContactComponent extends LightningElement {
    
    testEvent(event) {
        console.log('test');
    }

    submitForm(event) {
        const inputFields = this.template.querySelectorAll('nct-text-input');
        let validity = true;
        inputFields.forEach(input => {
            let validityCheck = input.validate();
            if (!validityCheck.isValid) {
                console.log('invalid field');
                validity = false;
                return false;
            }
        });

        const checkboxFields = this.template.querySelectorAll('nct-checkbox');
        console.log(checkboxFields);
        checkboxFields.forEach(checkbox => {
            let validityCheck = checkbox.validate();
            if (!validityCheck.isValid) {
                console.log('invalid checkbox');
                validity = false;
                return false;
            }
        });

        if (!validity) {
            console.log('dont submit');
            return false;
        } 
        
        return true;
    }
}