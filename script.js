let age = 17
if (age >= 18){
    console.log("Pode entrar")
}
else{
    console.log("Não pode entrar")
}

let human = true
if (age >=18 && human == true){
    console.log("Você é um humano maior de idade")
}
else{
    console.log("voce não é maior de idade ou não é humano")
}

let bday = "abril"
if(bday ==="janeiro"||bday ==="dezembro"){
    console.log("voce nasceu em janeiro ou dezembro")
}
else{
    console.log("voce não nasceu em janeiro ou dezembro")
}


let user= "Vanessa"
if (user[0]==="R" || user[0]==="r"){
    console.log("Seu nome começa com 'R'")
}
    else{
        console.log("Seu nome não começa com 'R'")
    }

let lastName = "Mejias"
if(lastName.lenght > 6 || user.substring(0,1)==="E"){
console.log("Seu sobrenome tem mais de seis letras e ou seu nome começa com e")
}else{
    console.log("Seu sobrenome não tem mais de 6 letras")
}

for (let i = 1; i<= 10; i++){
    console.log(i)
}

let cont= 10
while (cont >=1){
    console.log(cont)
    cont --

}
