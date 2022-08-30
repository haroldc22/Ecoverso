window.onload = () =>{
    var email = document.querySelector("#staticEmail");
    var password = document.querySelector("#inputPassword");
    var buttonr = document.querySelector("#btnreg");
    async function getDta(){
        const data = await fetch('http://localhost:4000/api/usuarios');
        const json = await data.json()
        
        return json;
    }
    
    buttonr.addEventListener('click', async(e)=>{
        e.preventDefault()
        getDta().then(async(res)=>{
            res.forEach(async(element) => {
                if(email.value != element.email){
                    await fetch('http://localhost:4000/api/usuarios', {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({"email": email.value, "contraseña": password.value})
                }).then(data =>
                    console.log(data)
                );
                }
                else{
                    alert("usuario ya registrado")
                }
            });
        })
        

    })
}