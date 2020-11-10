import { multi } from './air-port-codes-node';
import { UI, ui } from './ui';
// Search Airport

const searchAirport = document.getElementById('search');

// Add Event Listener

searchAirport.addEventListener('keyup', e => {
ui.inputSpinner();
  
// Get user input
const term = e.target.value;


if (term !== ''){

// Make an HTTP call to API
// If you viewing this code on GitHub
// you need to get your own api key
// https://www.air-port-codes.com/
const api = multi({
        key:'616f47a22d',
        secret:'2e3268fea1cf126',
        limit: 20
      });

api.request(term);

// SUCCESS we found some airports
api.onSuccess = (data) => {
        ui.showResults(data);
      };
//FAIL no airports found
api.onError = (data) => {
        ui.showAlert(data);
      }

    }
else{
// Implemnet later 

  }

})     