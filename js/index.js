// Validation Functions

const required = (value) => {
    if (value === '' || value === undefined || value === false){
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
        return "Must be a number between 0 and 100";
    }
}

const maxLength20 = (value) => {
    if(value &&  value.length > 19) {
       return "Must be less than 20 characters long";
    }
}

const hexColorStartsWithHash = (value) => {
    
    if(value[0] !== '#') {
        return "Must be a hex colour e.g #ffffff";
    }else if(!value.match("^[#a-fA-F0-9]+$")){
        return "Must be characters 0-9 or A-F";
    }
}

const validateLetters = (value) => {
    if(!isNaN(value)) {
        return "Must be a Letters Only";
    }
}

const checkColor3or6Char = (value) => {
    if(value.length === 3 || value.length === 6) {
        return "Must be 3 or 6 characters after the hash";
    } 
}

const turn3Into6Hash = (value) => {
    if(value.length === 4) {
        const chars = value.split('');
        chars.push(chars[1], chars[2], chars[3]);
        const str = chars.join('');
        return str;
    }else if (value.length === 7){
        return value;
    }else {
        return value;
    }
}

//form selectors
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

//******************************************/
//This code below is for the submit event
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // turn3Into6Hash(faveColor.value)
    //nickname, required, maximum length of 20 characters
    const nicknameRequired = required(nickName.value);
    const nickNameMaxLength = maxLength20(nickName.value);
    const nickNameIsLetters = validateLetters(nickName.value);
    //for the error message
    const errorMessageNickname = document.getElementById('nickname-error');

    if(nicknameRequired || nickNameMaxLength || nickNameIsLetters) {
        nickName.parentNode.className = 'error';
        errorMessageNickname.innerHTML = nicknameRequired || nickNameMaxLength || nickNameIsLetters;
    }else {
        nickName.parentNode.className = 'success';
    }
//******************************************/
    //age, not required, must be a number
    const ageMustBeANumber = validateNumber(age.value);
    const overZeroUnder100 = zeroToOneHundred(age.value);
    //for the error message
    const errorMessageAge = document.getElementById('age-error');

    if(ageMustBeANumber || overZeroUnder100) {
        age.parentNode.className = 'error';
        errorMessageAge.innerHTML = ageMustBeANumber || overZeroUnder100;
    } else {
        age.parentNode.className = 'success';
    }
//******************************************/  
    //terms and conditions, required, must be a checkbox
    const teesandceesRequired = required(teesandcees.checked);
    //for the error message
    const errorMessageCheckBox = document.getElementById('checkbox-error');

    if(teesandceesRequired) {
        errorMessageCheckBox.parentNode.className = 'teesandcees error';
        errorMessageCheckBox.innerHTML = teesandceesRequired;
    } else {
        errorMessageCheckBox.parentNode.className = 'teesandcees success';
    }
//******************************************/
    //favourite color, required, must be hex, 3 or 6 characters only
    const faveColorRequired = required(faveColor.value);
    const firstCharHex = hexColorStartsWithHash(faveColor.value);
    const threeOrSixCharsOnly = checkColor3or6Char(faveColor.value);
    // const regExColourCheck = regExColour(faveColor.value);
    //for the error message
    const errorMessageColor = document.getElementById('color-error');

    if(threeOrSixCharsOnly || faveColorRequired || firstCharHex) {
        errorMessageColor.parentNode.className = 'error';
        errorMessageColor.innerHTML = threeOrSixCharsOnly || faveColorRequired || firstCharHex;
    } else {
        errorMessageColor.parentNode.className = 'success';
        body.style.backgroundColor = faveColor.value;
        body.style.transition = '3s';

        messageBox.innerHTML = `Hi my nickname is: ${nickName.value},<br>
                            my age is: ${age.value}<br>
                            my favourite colour is ${faveColor.value}`;
    }
//******************************************/
    const petNameMaxLetters = maxLength20(petName.value);
    const petNameRequired = required(petName.value);
    const petNameIsLetters = validateLetters(petName.value);
    
    //error
    const errorMessagePetname = document.getElementById('petname-error');
    
    if(pet.checked && petNameRequired || petNameMaxLetters || petNameIsLetters) {
        errorMessagePetname.parentNode.className = 'error';
        errorMessagePetname.innerHTML = petNameRequired || petNameMaxLetters || petNameIsLetters;
    }else if(pet.checked) {
        errorMessagePetname.parentNode.className = 'success';
    }

//     const petCheckedandPetNameValueTrue = () => {
//         if(pet.checked && petName.value) {
//         return true;
//     }else {
//         return false;
//     }
// }

    const isIt7 = turn3Into6Hash(faveColor.value)

    if(nickName.value && age.value && isIt7.length === 7 && teesandcees.checked) {
        const ifPetName = () => {
            if(pet.checked) {
                return `my pet is called ${petName.value}`;
            }else {
                return '';
            }
        }

        messageBox.className = 'visible';
        
        messageBox.innerHTML = `Hi my nickname is: ${nickName.value},<br>
                            my age is: ${age.value}<br>
                            my favourite colour is ${turn3Into6Hash(faveColor.value)},<br>
                            ${ifPetName()}`;
        success.innerHTML = 'Success'
        form.reset();
    }

    
})


