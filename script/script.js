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
        document.getElementById('email-error').style.diplay='block';   
    }else{        
        document.getElementById('email-error').style.display='none';
    }

});


function validEmail(str){
    let pattern = new RegExp('^[^@]+[^@]+\.[^@]+');
    return !pattern.test(str);
}