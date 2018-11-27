//Butão fb
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v3.2';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  
  function compartilhar() {
    var url = window.location.href,
        f = "https://www.facebook.com/sharer.php?u=";
    window.open(f + url, '_blank').focus();
}

var action = 1;

function tutorialUm() {
    document.getElementById("nome").innerHTML = "Grassi GaGa";
    document.getElementById("avatar").src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/a-star-is-born-lady-gaga-1539025433.jpeg?crop=0.621xw:0.931xh;0.255xw,0.0689xh&resize=768:*";
    document.getElementById("data").innerHTML = "16 de nov de 2018";
    document.getElementsById("video").innerHTML = "https://www.youtube.com/embed/X8HzZPCiNKY";
    document.getElementById("titulo").innerHTML = "Google Apresentações - Introdução";
    document.getElementById("decricao").innerHTML = "Uma breve introdução sobre o que é o Google Apresentações";
}

function tutorialDois() {
    document.getElementById("nome").innerHTML = "Malcher Stark";
    document.getElementById("avatar").src = "http://images2.fanpop.com/image/photos/11200000/Tony-Stark-iron-man-11234572-1485-2061.jpg";
    document.getElementById("data").innerHTML = "24 de nov de 2018";
    document.getElementById("video").src = "https://www.youtube.com/embed/YLLOvwXEYzQ"
    document.getElementById("titulo").innerHTML = "Google Apresentações - Criando uma Apresentação";
    document.getElementById("decricao").innerHTML = "Utilização de temas padrões do Apresentações; Formas, gráficos e diagramas; Elementos de transição e animação";
    
}

function tutorialTres() {
    document.getElementById("id").innerHTML = "Xavier";
    document.getElementById("avatar").src = "http://www.bestforfilm.com/wp-content/uploads/2010/02/xmen.jpg";
    document.getElementById("data").innerHTML = "24 de nov de 2018";
    document.getElementsById("video").src = "https://www.youtube.com/embed/76_P18N6JCk";
    document.getElementById("titulo").innerHTML = "Google Apresentações - Apresentação Personalizada";
    document.getElementById("decricao").innerHTML = "Download de template; Inserção de imagem e vídeo; Compartilhamento";
}

$("input").on("click", viewSomething);

function viewSomething() {
    if ( action == 1 ) {
        $("body").css("background", "black");
        action = 2;
    } else if ( action == 2 ){
        $("body").css("background", "pink");
        action = 3;
    } else if ( action == 3 ){
        $("body").css("background", "green");
        action = 1;
    }
}

function anterior() {
    if ( action == 3 ) {
        tutorialDois();
        action = 2;
    } else if ( action == 2 ) {
        tutorialUm();
        action = 1;
    }
}

function proximo() {
    if ( action == 1 ) {
        tutorialDois();
        action = 2;
    } else if ( action == 2 ) {
        tutorialTres();
        action = 3;
    }
}