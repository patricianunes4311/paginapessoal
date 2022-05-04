const checkForm = {
    name: false,
    email: false,
    fone: false,
    
}

document.getElementById('name').addEventListener('input', function (e) {
    console.log(checkForm);
    const name = e.target.value;
    if (name.length < 1 || name.length > 50) {
        console.log('O nome inserido deve ter 1 à 50 caracteres');
        document.getElementById('name-error').style.display = "block";
        checkForm.name = false;
    } else {
        document.getElementById('name-error').style.display = "none";
        checkForm.name = true;
    }

    enableButton();
   
});

document.getElementById('email').addEventListener('input', function (e) {
    console.log(checkForm);
    const email = e.target.value;
    if (validarEmail(email)) {
        console.log('Neste campo só pode ser inserido email');
        document.getElementById('email-error').style.display = "block";
        checkForm.email = false;
    } else {
        document.getElementById('email-error').style.display = "none";
        checkForm.email = true;
    }

    enableButton();

  
});


document.getElementById('fone').addEventListener('input', function (e) {
    console.log(checkForm);
    const fone = e.target.value;
    if (validarNumero(fone)) {
        document.getElementById('fone-error').style.display = "block";
        checkForm.fone = false;
    } else {
        document.getElementById('fone-error').style.diplay = "none";
    }

    
    function validarNumero(str) {

        let pattern = new RegExp('^((\\+1)?\\s?\\(\\d{3}\\)\\s?\\d{3}\\~\\d{4})?$');
        return !pattern.test(str);

    }
    enableButton();

});




function validarEmail(str) {
    let pattern = new RegExp('[^@]+@[^@]+\.[^@]+');
    return !pattern.test(str);
}

function enableButton() {
    const butcad = document.getElementById("button");
    if (checkForm.productName &&
        checkForm.productDescription &&
        checkForm.productPrice &&
        checkForm.urlProductImage) {
        butcad.disabled = false;
    } else {
        butcad.disabled = true;
    }
}



