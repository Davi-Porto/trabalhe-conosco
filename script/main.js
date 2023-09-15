window.document.querySelector("#cep").addEventListener('input', (e) => {
    pesquisacep(e.target.value);
})

window.document.querySelectorAll("input[type='radio']").forEach((v) => {
    v.addEventListener('change', (e) => {
        if(e.target.id == "simCNPJ" || e.target.id == "naoCPF" ){
            window.document.querySelectorAll(".cpfOuCnpj").forEach((v) => {
                v.classList.toggle("hide");
                v.childNodes.forEach((value) => value.value = "");
            })
        }else if (e.target.id == "simCredencial" ||e.target.id == "naoCredencial"){
            window.document.querySelector(".credencialOuNao").classList.toggle("hide");
            window.document.querySelector("#inputCredencial").value = "";
            toBottom();
        }
        console.log(e)
    })
})

window.document.querySelector("#inputRedeSocial").addEventListener("change", (e) => {
    let select = document.getElementById("inputRedeSocial");
    let i = select.selectedIndex;
    let op = select.options[i].value;
    if (op != "null") {
        window.document.querySelector("#redeSocialInp").classList.remove("hide");
        window.document.querySelector("#redeSocial").placeholder = "Nome de usuário no " + op;
        toBottom()
    } else {
        window.document.querySelector("#redeSocialInp").classList.add("hide");
    }
    window.document.querySelector("#redeSocial").value = "";
})

function limpaFormulario() {
        document.getElementById('endereco').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        let enderecoStr = conteudo.logradouro + " - " + conteudo.bairro + ", " + conteudo.localidade + " - " + conteudo.uf;
        document.getElementById('endereco').value=(enderecoStr);
        window.document.querySelector("#numero").focus();
    }
}
    
function pesquisacep(valor) {
    var cep = valor.replace(/\D/g, '');

    if (cep != "") {
        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)) {
            document.getElementById('endereco').value="...";
            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);
        }
    }
};

function toBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

window.document.querySelector("#formacao").addEventListener('change', (e) => {
    let select = document.getElementById("formacao");
    let i = select.selectedIndex;
    let op = select.options[i].value;
    if (op != "outros") {
        window.document.querySelector("#outrosFormacao").classList.add("hide");
        toBottom()
    } else {
        window.document.querySelector("#outrosFormacao").classList.remove("hide");
    }
    window.document.querySelector("#outrosFormacao").value = "";
})