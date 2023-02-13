function isValid(){
    if(
        firstNameIsValid()
        && secondNameIsValid()
        && emailIsValid()
        && passwordIsValid()
    ){
        return true
    }
    return false
}


function firstNameIsValid(){
    field = document.getElementById('first-name')
    if(field.value == ''){
        return false
    }
    return true
}

function secondNameIsValid(){
    field = document.getElementById('last-name')
    if(field.value == ''){
        return false
    }
    return true
}

function emailIsValid(){
    field = document.getElementById('email')
    if(field.value == ''){
        return false
    }
    return true
}

function passwordIsValid(){
    field = document.getElementById('password')
    if(field.value == ''){
        return false
    }
    return true
}
