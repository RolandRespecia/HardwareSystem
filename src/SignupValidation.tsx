interface Values{
    name:string;
    email:string;
    password:string;
}

function validation(values:Values):Record<string,string>{
    let error:Record<string,string>={};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    
    if(values.name ===""){
        error.name = "Name should not be empty"
    }
    else{
        error.name = ""
    }

    if(values.email ===""){
        error.email = "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email Didn't match"
    }
    else{
        error.email = ""
    }
    if(values.password ===""){
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password must have big letter and number"
    }
    else{
        error.password = ""
    }



   return error;
   
   
}

export default validation;