import { LightningElement } from 'lwc';

const CHECKBOX_EXAMPLE = [
    { 
        id: 1,
        label: 'Email',
        name: 'opt-in',
        value: 'email',
    },
    {  
        id: 2,
        label: 'Post',
        name: 'opt-in',
        value: 'post',
    },
    {  
        id: 3,
        label: 'SMS Text',
        name: 'opt-in',
        value: 'sms-text'
    },
    {  
        id: 4,
        label: 'Telephone',
        name: 'opt-in',
        value: 'phone'
    }
]


export default class App extends LightningElement {
    checkboxDemo = CHECKBOX_EXAMPLE;


    
}
