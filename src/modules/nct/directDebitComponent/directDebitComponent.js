import { LightningElement, api, track } from 'lwc';

const DIRECT_DEBIT_AUTHORISATION = [
    { 
        id: 1,
        label: 'I’m authorised to debit from this account and agree to NCT debiting my account.',
        name: 'direct-debit-authorisation',
        value: 'true'
    }
]


export default class DirectDebitComponent extends LightningElement {
    @track ddDetails = {};
    directDebitAuthorisation = DIRECT_DEBIT_AUTHORISATION;

    handleFieldChange(event) {
        console.log('event');
    }


    handleDirectDebit(event) {
        console.log('DD field: ' + event.detail.name);
        console.log('DD value: ' + event.detail.value);
        console.log(this.ddDetails);
    }
}