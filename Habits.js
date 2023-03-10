const form = document.querySelector("form");
const nlwSetup = new NLWSetup(form); //nao entendi o que isso fez. criou uma pasta nova?
const button = document.querySelector("header button");


//a seguir: button vai realizar a funcao abaixo. toda ver 
//que "click" no BUTTON ele vai acionar o que esta dentro da funcao ADD
button.addEventListener("click", add)
//addeventlistener precisa de uma acao(CLICK) e uma funcao (add -vai ser criada em seguida)
form.addEventListener("change", save)
//funcao serve para agrupar codigos que serao utiliados
//criando a funcao ADD que vai ser utilizada acima

function add() {

    const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

    //alert(nlwSetup.dayExists(today)) funciona igual a funcao a baixo.
    const dayExists = nlwSetup.dayExists(today)

    //condicionais IF. se existir o dia mostrar texto X, se nao existir mostrar Y

    if (dayExists) {
        alert("🔴")
        return
    }



    alert('🟢')
    nlwSetup.addDay(today)
}


function save() {
    localStorage.setItem("nlwsetuphabits", JSON.stringify(nlwSetup.data))
    //para guardar informacoes
    //localStorage.setItem(funcionalidade)+nome da chave e o valor("qualquerNome",)
    //guardar data como string no localStorage
    //transformar objeto em string = JSON.stringfy(aqui vem o dado que vai ser salvo como string)
}

const data = JSON.parse(localStorage.getItem("nlwsetuphabits"))  //|| {}
nlwSetup.setData(data)
nlwSetup.load()