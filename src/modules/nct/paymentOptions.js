const paymentOptions =
        [{ 
            id: 1,
            optionText: 'Debit/credit card',
            optionDesc: '£180',
            value: 'debit-credit-card',
            name: 'radio-button-group',           
            checked: false,
            disabled: false,
            disabledText: ''
        },
        {  
            id: 2,
            optionText: 'Interest-free instalments',
            optionDesc: '',
            value: 'intalments',
            name: 'radio-button-group',   
            checked: false,
            disabled: false,
            disabledText: ''
        },
        {  
            id: 3,
            optionText: 'Direct debit',
            optionDesc: '',
            value: 'direct-debit',
            name: 'radio-button-group',   
            checked: false,
            disabled: true,
            disabledText: 'Instalments are not available for this course'
        }]