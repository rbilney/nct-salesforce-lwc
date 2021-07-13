import { LightningElement, api } from 'lwc';

export default class BookingStep extends LightningElement {
    @api title;
    @api stepNumber;
    @api state;  //outstanding, current, completed, warning

    get getStepState() {
        if (this.state === 'outstanding') {
            return 'nct-booking-step step-outstanding';
        } else if (this.state === 'current') {
            return 'nct-booking-step step-current';
        } else if (this.state === 'completed') {
            return 'nct-booking-step step-completed';
        } else if (this.state === 'warning') {
            return 'nct-booking-step step-warning';
        } else {
            return 'nct-booking-step';
        }
    }
}