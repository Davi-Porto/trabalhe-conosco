$("#cepInput")[0].addEventListener('input', (e) => {
    if(e.target.value.length==9){
        pesquisacep(e.target.value);
    }
});

$("#btnContinue")[0].addEventListener('click', (e)=>{
    $("#continuationForm").collapse('show');
    $("#continuationForm")[0].addEventListener('shown.bs.collapse', (e2)=>{
        toBottom();
    });
});

$("#credencialInput")[0].addEventListener('input', (e)=>{
    if(e.target.value!=""){
        $("#credencialRadio2")[0].checked=true;
    }else{
        $("#credencialRadio1")[0].checked=true;
    }
})

$("#confereModal")[0].addEventListener('show.bs.modal', (e)=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
    });
    let child=e.target.querySelector(".modal-body").children;
    for(let i=0;i<child.length;i++){
        let v = child[i];
        let idV=v.querySelector('a').href.replace(/^[\D\d]+#/, "#");
        let value = document.querySelector(idV).value;
        if(idV=='#nascInput'){
            value=value.split('-').reverse().join('/');
        }
        if(idV=='#usernameInput' && value!=""){
            v.hidden=false;
            v.querySelector('strong').innerHTML=toCapitalize($("#redesSociais")[0].value)+": ";
        }
        if($("#credencialRadio2")[0].checked && value!=""){
            v.hidden=false;
        }
        if(idV=='#cursosInput'&&value!=""){
            v.hidden=false;
        }
        if(idV=='#experienciasInput'&&value!=""){
            v.hidden=false;
        }
        v.querySelector('span').innerHTML=value;
    }
});

$("#confereModal")[0].addEventListener('hide.bs.modal', (e)=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
    });
    let child=e.target.querySelector(".modal-body").children;
    for(let i=0;i<child.length;i++){
        let v = child[i];
        let idV=v.querySelector('a').href.replace(/^[\D\d]+#/, "#");
        if(idV=='#usernameInput'){
            v.hidden=true;
        }
        if(idV=='#credencialInput'){
            v.hidden=true;
        }
        if(idV=='#cursosInput'){
            v.hidden=true;
        }
        if(idV=='#experienciasInput'){
            v.hidden=true;
        }
    }
});

function success() {
    window.alert("Sucesso");
}