
const required = (value) => {
    if (!value|| value === !false){
       return 'This field is required' 
    }
    
}

const validateNumber = (value) => {
    if(value && isNaN(value)) {
        return "Must be a number";
    }
}

const zeroToOneHundred = (value) => {
    if(value && isNaN(value) || value && value < 0 || value > 100) {
        return "Must be a number between 0 and 100"
    }
}

const maxLength20 = (value) => {
    if(value && isNaN(value) && value.length > 19) {
        "Must be less than 20 characters long"
    }
} 