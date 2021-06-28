import { LightningElement, api} from 'lwc';

export default class Button extends LightningElement {
    @api buttonText;
    @api type = 'button';  //link (a link), submit, button, reset
    @api href;
    @api state = 'active'; //button state = active, disabled
    @api variant;

    get isLink(){
        return (this.type == 'link') ? 1 : 0;
    }

    get isDisabled() {
        return (this.state == 'disabled') ? 1 : 0;
    }

    get buttonClass() {
        return this.variant == 'outline' ? 'nct-btn btn-outline' : 'nct-btn';
    }
}

