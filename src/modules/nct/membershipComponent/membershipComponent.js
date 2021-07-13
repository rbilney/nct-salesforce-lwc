import { LightningElement, api } from 'lwc';

const MEMBERSHIP_PRODUCTS = [
    {
        id: 'NCTMEM18',
        title: '18-month membership',
        description: 'The best value quarterly payment option, whilst ensuring you can access benefits over a longer time.',
        pricePerQuarter: '9.50',
        priceAnnually: '57',
        flagMostPopular: true,
        value: 'NCTMEM18',
        name: 'membership-product-types'
    },
    {
        id: 'NCTMEM12',
        title: '12-month membership',
        description: 'Our economy choice, the same benefits but for just one year.',
        pricePerQuarter: '12',
        priceAnnually: '48',
        flagMostPopular: false,
        value: 'NCTMEM12',
        name: 'membership-product-types'
    }
]

const LEAD_IN_PARAGRAPH = {
    text: "<p>All our memberships offer dedicated communications, great discounts including baby supplies, holidays and everyday services in addition to helping us continue to be the UK’s leading charity supporting parents and families.</p><p>Choose a membership donation from less than £3.20 per month:</p>"
}

export default class MembershipComponent extends LightningElement {
    membershipProducts = MEMBERSHIP_PRODUCTS;
    membershipLeadInParagraph = LEAD_IN_PARAGRAPH;
    radioGroupName = "membership-product-types";

    renderedCallback() {
        this.template.querySelector('.membership-lead-in').innerHTML = this.membershipLeadInParagraph.text;
    }
    
    handleUserSelection(event) {
        console.log(event.target.value);
        if (event.target.value === 'none') {
            console.log('next step');
        }
    }
}