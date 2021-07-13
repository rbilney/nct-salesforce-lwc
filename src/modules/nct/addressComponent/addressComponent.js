import { LightningElement, api, track } from 'lwc';

const COUNTRIES = [
    { id: '1', label: 'United Kingdom' },
    { id: '2', label: 'Isle of Man' },
    { id: '3', label: 'Guernsey' },
    { id: '4', label: 'Jersey' }
]

//Must add remote site as a CSP Trusted Site within Salesforce
const POSTCODE_LOOKUP_SERVICE = 'https://api.getAddress.io/find/'  //'https://official-joke-api.appspot.com/random_joke' 
const POSTCODE_LOOKUP_PARAMS = '?expand=true&api-key=UBmMZPpKy061LEKX1SPWRQ31877';
 

export default class AddressComponent extends LightningElement {
    
    @api inputStreet;
    @api postcode = 'TR19 7AA' ; //Get from URL parameter - TESTING ONLY

    searchResultsForm = true;
    newSearchForm = false;
    manualEntryForm = false;

    countryList = COUNTRIES;

    @track isLoading = false;
    @api formattedAddresses;
    lookupServiceResults = {}

    connectedCallback() {
        //Check if postcode available
        if (this.postcode) {
            //Fetch results
            console.log('connectedCallback + postcode');
            this.handleAddressLookup();
        } else {
            //No postcode - show look up
            console.log('connectedCallback + no postcode');
            this.searchResultsForm = false;
            this.newSearchForm = true;
            this.manualEntryForm = false;
        }
    }
    
    
    /** handleAddressLookup  **/
    /** 
        Handles the address look up by adding loading state to component, fetches addresses from API service,
        formats responses to suit custom select component, then displaying to user.
    **/
    async handleAddressLookup() {
        /* Display loading template while API call happens */
        this.isLoading = true;

        /* Disable the templates for New Address Search and Manual Entry. Enable the Search Results template. */
        this.newSearchForm = false;
        this.manualEntryForm = false;
        this.searchResultsForm = true;

        /** Call the Address Lookup Service and await response.
            Assign Address Lookup Service response to formattedAddresses so they appear as options in select component.
            Use finally statement to set isLoading to false and display results to user.
            TO DO: Handle errors **/
        try {
            this.lookupServiceResults = await this.getAddressesFromLookupService(this.postcode);
            if (this.lookupServiceResults.isValid) {
                //TO DO: Format lookupServiceResults for select component
                this.lookupServiceResults = this.formatAddressResults(this.lookupServiceResults.response);
                this.formattedAddresses = this.lookupServiceResults;
            } else {
                console.log('error' + this.lookupServiceResults.response);
                throw 'Invalid postcode';
            }
            
        } catch (error) {
            this.error = error;
            console.log('error:' + error)
        } finally {
            console.log('finally:' + this.lookupServiceResults);
            this.isLoading = false;            
        }
         
    
    } 

    async getAddressesFromLookupService(postcode) {
        const apiResponse = await fetch(POSTCODE_LOOKUP_SERVICE + postcode + POSTCODE_LOOKUP_PARAMS)
            .then(function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                    let errorText;
                    switch (response.status) {
                        case '400':     //Postcode invalid
                            errorText = "The postcode is invalid."
                            break;
                        case '404':     //Address not found
                            errorText = "We couldn't find an address for this postcode. Please enter your address manually"
                            break;
                        case '401':     //API key problem 403 api permisison 429 too many
                            errorText = "There's a problem with the postcode lookup. Please enter your address manually"
                            break;
                        case '403':     //API key problem 403 api permisison 429 too many
                            errorText = "There's a problem with the postcode lookup. Please enter your address manually"
                            break;
                        case '429':     //API key problem 403 api permisison 429 too many
                            errorText = "There's a problem with the postcode lookup. Please enter your address manually"
                            break;
                        default: 
                            errorText = "There's a problem with the postcode lookup. Please enter your address manually"
                            break;
                    }
                    return {
                        isValid: false,
                        response: errorText
                    };
                }
                return response.json().then(function(data) {
                    console.log(data);
                    if (data) {
                        //TO DO: Return responses to handleAddressLookup() to be formatted before inserted into select component
                        return {
                            isValid: true,
                            response: data.addresses
                        }              
                    }
                    
        
                });
            }).catch(function(err) {
                console.log('Fetch Error :-S', err);
            }); 

        return apiResponse;
    }

    formatAddressResults(addresses) {
        const addressResults = []
        addresses.forEach((addressResult ,index) => {
            console.log(addressResult);
            let addressLine1 = addressResult.formatted_address[0].length > 0 ? addressResult.formatted_address[0] + ', ' : '';
            let addressLine2 = addressResult.formatted_address[1].length > 0 ? addressResult.formatted_address[1] + ', ' : '';
            let addressLine3 = addressResult.formatted_address[2].length > 0 ? addressResult.formatted_address[2] + ', ' : ''; 
            let addressLine4 = addressResult.formatted_address[3].length > 0 ? addressResult.formatted_address[3] + ', ' : '';
            let addressLine5 = addressResult.formatted_address[4].length > 0 ? addressResult.formatted_address[4] : '';

            let displayLabel = addressLine1.concat(addressLine2, addressLine3, addressLine4, addressLine5);
            addressResult = {
                ...addressResult,
                id: index,
                label: displayLabel,
                value: JSON.stringify(addressResult)
            }
            addressResults.push(addressResult);
        });
        
        return addressResults;
    }

    /** handleLookupButtonClick **/
    /** When Find Address button clicked, start the address look up process. Should validate postcode here **/
    handleLookupButtonClick(event) {
        this.handleAddressLookup();
    }

    /** handlePostcodeInput **/
    /** Takes the user's inputted postcode and converts to uppercase and assigns to public postcode variable **/
    handlePostcodeInput(event) {
        console.log(event.target.value);
        this.postcode = event.target.value.toUpperCase();
    }


    /** handleLinkClick **/
    /** Handles the links that allow user to switch between new postcode search and entering manual address **/
    handleLinkClick(event) {
        event.preventDefault();
        let action = event.target.getAttribute('data-action');
        switch (action) {
            case "search":
                this.newSearchForm = true;
                this.manualEntryForm = false;
                this.searchResultsForm = false;
                break;
            case "manual":
                this.newSearchForm = false;
                this.manualEntryForm = true;
                this.searchResultsForm = false;
                break;
            default:
                break;
        }
    }

    
    handleAddressSelection(event) {
        let userAddressSelection = JSON.parse(event.detail);
        console.log(userAddressSelection.town_or_city);
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