
const required = (value) => {
    if (value === '' || value === undefined || value === false){
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

const hexColorStartsWithHash = (value) => {
    
    if(value[0] !== '#') {
        return "Must be a hex colour e.g #ffffff";
    }else if(!value.match("^[#a-fA-F0-9]+$")){
        return "Must be characters 0-9 or A-F";
    }
}

const body = document.querySelector('body');
const form = document.getElementById('form');
const nickName = document.getElementById('nickname');
const age = document.getElementById('age');
const faveColor = document.getElementById('color');
const teesandcees = document.getElementById('teesandcees');
const messageBox = document.getElementById('message-box');
const pet = document.getElementById('pet');
const petName = document.getElementById('petname');

//make pet name visible if pet is checked
pet.addEventListener('click', (event) => {
    if(pet.checked) {
        petName.classList.add('visible');
    }else {
        petName.classList.remove('visible');
    }
})


if(pet.checked) {
    petName.classList('visible');
}

console.log(pet.checked)
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    //nickname, required, maximum length of 20 characters
    const nicknameRequired = required(nickName.value);
    const nickNameMaxLength = maxLength20(nickName.value);
    //for the error message
    const errorMessageNickname = document.getElementById('nickname-error');

    if(nicknameRequired || nickNameMaxLength) {
        nickName.parentNode.className = 'error';
        errorMessageNickname.innerHTML = nicknameRequired || nickNameMaxLength;
    }else {
        nickName.parentNode.className = 'success';
    }

    //age, not required, must be a number
    const ageMustBeANumber = validateNumber(age.value);
    //for the error message
    const errorMessageAge = document.getElementById('age-error');

    if(ageMustBeANumber) {
        age.parentNode.className = 'error';
        errorMessageAge.innerHTML = ageMustBeANumber;
    } else {
        age.parentNode.className = 'success';
    }
    
    //terms and conditions, required, must be a checkbox
    const teesandceesRequired = required(teesandcees.checked);
    //for the error message
    const errorMessageCheckBox = document.getElementById('checkbox-error');

    if(teesandceesRequired) {
        errorMessageCheckBox.parentNode.className = 'error';
        errorMessageCheckBox.innerHTML = teesandceesRequired;
    } else {
        errorMessageCheckBox.parentNode.className = 'success';
    }

    //favourite color, required, must be hex
    const faveColorRequired = required(faveColor.value);
    const firstCharHex = hexColorStartsWithHash(faveColor.value);
    // const regExColourCheck = regExColour(faveColor.value);
    //for the error message
    const errorMessageColor = document.getElementById('color-error');

    if(faveColorRequired || firstCharHex) {
        errorMessageColor.parentNode.className = 'error';
        errorMessageColor.innerHTML = faveColorRequired || firstCharHex;
    } else {
        errorMessageColor.parentNode.className = 'success';
        body.style.backgroundColor = faveColor.value;

        messageBox.innerHTML = `Hi my nickname is: ${nickName.value},<br>
                            my age is: ${age.value}<br>
                            my favourite colour is ${faveColor.value}`;
    }

    //pet, has a pet? Pet name required if pet is checked.
   
    

    form.reset();
})