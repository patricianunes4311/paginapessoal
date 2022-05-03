const checkForm= {
    name: false,
    email:false,
    fone:false,
    mensagem:false
}

document.getElementById('name').addEventListener('input', function(e){
    console.log(checkForm);
    const name = e.target.value;
    if(name.length  < 1  || name.length > 50 ){
    console.log('O nome inserido deve ter 1 à 50 caracteres');
    document.getElementById('name-error').style.display = 'block';
    checkForm = false;
    }else{
        document.getElementById('name-error').style.display = 'none';
        checkForm = true;
    }
}
);

document.getElementById('email').addEventListener('input',function(e){
    console.log(checkForm);
    const email = e.target.value;
    if(validEmail(email)){ 
        console.log('Neste campo só pode ser inserido email');  
        document.getElementById('email-error').style.display='block'; 
        checkForm = false;  
    }else{        
        document.getElementById('email-error').style.display='none';
        checkForm = true;
    }

});

document.getElementById('fone').addEventListener('input',function(e){
    console.log(checkForm);
    const fone = e.target.value;
    if( validPhone (fone)){  
    console.log('Neste campo deve ser inserido caracteres númericos');      
    document.getElementById('fone-error').style.display='block';
    checkForm = false;
    }else{
        document.getElementById('fone-error').style.display='none';
        
    }
});


function validEmail(str){
    let pattern = new RegExp("[a-zA-Z\s]+$");
    return !pattern.test(str);
}

function validPhone (phone) {
    var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
    return regex.test(phone);
}