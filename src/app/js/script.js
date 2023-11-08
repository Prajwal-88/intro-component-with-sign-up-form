const first_name = document.querySelector("#first-name");
const last_name = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit_btn = document.querySelector("input[type = 'submit']");
const form = document.querySelector("form");
const inputs =document.querySelectorAll("input[data-type = 'input']");


window.addEventListener('load', () => {

    inputs.forEach(field => {
        field.value = '';
    })

})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let isalive=true;
    if(first_name.value.trim()==='' || last_name.value.trim()==='' || email.value.trim()==='' || password.value.trim()==='' || /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]{4,8}$/.test(password.value)=== false || /[a-zA-Z0-9]{1,25}\@[a-z]{1,10}mail\.com/.test(email.value) === false){
        isalive=false;
    }
    if(isalive){
        form.submit();
    }else{
        showalert();
    }
})

inputs.forEach(input =>{
    input.addEventListener('focus',(e)=>{
        e.preventDefault
        e.target.className="text-sm w-full outline-none";
        e.target.parentElement.className="border p-3 rounded-md  mt-3.5 mb-1 "
        document.querySelector(".alert").remove();
        submit_btn.disabled=false
    })
})

function showalert(){
    const div = document.createElement("div")
    div.className = "alert text-xs text-Red text-right italic";

    if(first_name.value.trim()===''){
        div.append("First Name cannot be empty")
        first_name.parentElement.after(div)
        inserterror(first_name)

    }else if(last_name.value.trim()===''){
        div.append("Last Name cannot be empty")
        last_name.parentElement.after(div)
        inserterror(last_name)

    }else if(email.value.trim()===''){
        div.append("Email cannot be empty")
        email.parentElement.after(div)
        inserterror(email)
        
    }else if(/[a-zA-Z0-9]{1,25}\@[a-z]{1,10}mail\.com/.test(email.value) === false){

        div.append("Looks like this is not an email")
        email.parentElement.after(div)
        inserterror(email)
        email_mismatch();

    }else if(password.value.trim()===''){
        div.append("password cannot be empty")
        password.parentElement.after(div)
        inserterror(password)
        
    }else if(/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]{4,8}$/.test(password.value)=== false){
        div.append("Please entre a valid password")
        password.parentElement.after(div)
        inserterror(password)
    }
    submit_btn.disabled=true
    submit_btn.classList.replace("cursor-pointer","cursor-not-allowed")
}

function inserterror(ele){
    ele.className="text-sm bg-error bg-no-repeat bg-right w-full h-6 outline-none"
    ele.parentElement.classList.add("border-Red")
}


function email_mismatch(){
    email.value = '';
    email.placeholder = "email@example/com"
    email.className = "w-full text-sm font-semibold text-Dark_Blue outline-none focus:text-slate-600 placeholder:text-red";
    inserterror(email);
}






