function assinar() {
    window.location.href = "menu.html"
}

function validate() {
      
    if( document.myForm.nome.value == "" ) {
       alert( "Campo nome obrigatório!" );
       document.myForm.nome.focus() ;
       return false;
    }
    if( document.myForm.email.value == "" ) {
       alert( "Campo e-mail obrigatório!" );
       document.myForm.email.focus() ;
       return false;
    }
    if( document.myForm.mensagem.value == "" ) {
        alert( "Campo mensagem obrigatório!" );
        document.myForm.mensagem.focus() ;
        return false;
     }

    return( true );
 }