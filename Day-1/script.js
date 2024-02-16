function alertClick(){
    alert("Hi!")
}

function onSubmit(){
    const firstname=document.getElementById("firstname").value;
    const lastname=document.getElementById("lastname").value;
    const email=document.getElementById("email").value;
    const phonenumber=document.getElementById("phonenumber").value;


    localStorage.getItem("firstname",firstname);
    localStorage.setItem("lastname",lastname);
    localStorage.setItem("email",email);
    localStorage.setItem("phonenumber",phonenumber);
    
    console.log(document.getElementsByClassName("form-values"));
}

