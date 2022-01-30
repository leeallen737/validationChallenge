
const required = (value) => {
    if (value === '' || value === undefined){
       return 'This field is required' 
    }else {
        console.log('cool nickname')
    }
}

const validateNumber = (value) => {
    if(value && isNaN(value)) {
        return "Must be a number";
    }else {
        console.log('its a number ;)')
    }
}

const zeroToOneHundred = (value) => {
    if(value && isNaN(value) || value && value < 0 || value > 100) {
        return "Must be a number between 0 and 100";
    }
}

const maxLength20 = (value) => {
    if(value &&  value.length > 19) {
       return "Must be less than 20 characters long";
    }else {
        console.log('perfect less than 20')
    }
}

const form = document.getElementById('form');
const nickName = document.getElementById('nickname');
const age = document.getElementById('age');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    //nickname, required, maximum length of 20 characters
    required(nickName.value);
    maxLength20(nickName.value);

    //age, not required, must be a number
    validateNumber(age.value);
})