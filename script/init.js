let UF="";
let cidID;
class Option{
    constructor(text, value, checked=false, disabled=false){
        this.text = text;
        this.value = value;
        this.checked = checked;
        this.disabled = disabled;
        this.element=this.#createEl();
    }
    #createEl(){
        let base=document.createElement('option');
        base.innerHTML=this.text;
        base.value=this.value;
        base.selected=this.checked;
        base.disabled=this.disabled;
        return base;
    }
}

fetch('nacionalidade.php').then(res=> res.json()).then(data=>{
    data.forEach(nac => {
        let option = new Option(nac.nm_nacionalidade, nac.cd_id, false, false);
        $('#selectNac')[0].appendChild(option.element);
    });
}).catch(err=>{
    console.error('Erro: ', err);
});

function pesquisacep(valor) {
    var cep = valor.replace(/\D/g, '');
    var validacep = /^[0-9]{8}$/;
    if(validacep.test(cep)) {
        $("#logradouroInput")[0].value="...";
        var script = document.createElement('script');
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=callbackCEP';
        document.body.appendChild(script);
    }
};

function callbackCEP(conteudo) {
    let focus=[
        [(conteudo.bairro!=""), $("#bairroInput")[0], conteudo.bairro],
        [(conteudo.localidade!=""), $("#cidInput")[0], conteudo.localidade],
        [(conteudo.uf!=""), $("#UFInput")[0], conteudo.uf],
        [(conteudo.logradouro!=""), $("#logradouroInput")[0], conteudo.logradouro],
    ];
    let noValue=true;
    focus.forEach(v=>{
        if(v[0]){
            if(noValue==true){
                noValue=true;
            }
            v[1].value=v[2];
        }else{
            v[1].focus();
            v[1].value="";
            noValue=false;
        }
    });
    if(noValue){
        $("#numberInput").focus();
    }
}

function toCapitalize(str=''){
    let words=str.toLowerCase().split(' ');
    let ret=[]
    words.forEach((word)=>ret.push(word[0].toUpperCase()+word.slice(1)));
    return ret.join(' ');
}

function decode(str=''){
    return str.normalize('NFD').replace(/[\u0300-\u036f\,\.\?\/\|\!\@\#\$\%\¨\&\*\(\)]/gm, '').replace("ç", 'c').replace(/[\s]+/gm, '_');
}

function toBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth',
    });
}

function clearSelect(select){
    while(select.lastChild){
        select.removeChild(select.lastChild);
    }
    return new Option("Selecione", "", true, true).element;
}

function editInput(e){
    $('#modalConfere').hide();
    let el = document.querySelector(e.getAttribute('href'));
    let elRect = el.getBoundingClientRect();
    window.scrollTo({
        top: elRect.top-elRect.height,
        left: elRect.left,
        behavior: 'smooth'
    });
    el.focus();
}