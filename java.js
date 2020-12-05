function $(x){
    switch (x[0]){
        case "#":
            var k=x.substr(1);
            return document.getElementById(k);
        case ".":
            var k=x.substr(1);
            return document.getElementsByClassName(k);
        default:
           return document.getElementsByTagName(x);
    }
}

function law(){
    $("#letter").style.left="-100vw";
    $("#letter").style.opacity="0";
}

var ti=1;
function timePass(){
    if (ti==1){
        $("#phoneTime").innerText=" [.•°] - 45% - 3:20pm ";
    ti=0;
    }
    else if (ti==0){
        $("#phoneTime").innerText=" [.•°] - 30% - 3:45pm ";
    ti=2
    }
    else{
        $("#phoneTime").innerText=" [.•°] - 18% - 4:00pm ";
        clearInterval(tPass);
    }
}
var tPass=setInterval(timePass,2500);

var a=0;
function nMess(){
    if (a>1){
        clearInterval(mess);
        setTimeout(law,3750);
    }
    $(".message")[a].style.opacity="1";
    a++
    
}
var mess=setInterval(nMess,3200);
//end Phone.


window.onload=function(){
    $("#ans1").addEventListener("click",jSleep);
    $("#ans2").addEventListener("click",police);
    $("#ans3").addEventListener("click",goDown);
    document.body.style.opacity="1";
    $("#letter").addEventListener("click",law);
}

//the black blink
function alt(){
    $("#front").style.zIndex="4";
    function alter(){
        $("#front").style.zIndex="2";
    }
    setTimeout(alter,500);
}

//1
function police(){
    alt()
    $("#content").style.color="red";
    $("#content").innerText="Los zombies son ciegos, así que salir de noche es peor para vos. No podías ver nada y los zombies te atraparon. Sobreviviste, pero te convertiste en un zombi porque te mordieron.";
    $("#all").style.transform="scale(0)";
}
function jSleep(){
    alt();
    $("#content").style.color="red";
    $("#content").innerText="No saliste. Consumiste todos tus suministros y estabas demasiado débil para encontrar otros suministros. Te mueres de hambre...";
    $("#all").style.transform="scale(0)";
}
function goDown(){
    //good one
    alt();
    $("#back").style.background="url(https://www.dropbox.com/s/8negnci79l5d6dy/Village_Street%2C_Thrintoft.jpg?dl=1)";
    $("#back").style.backgroundSize="cover";
    $("#back").style.backgroundPosition=" center"
    $("#content").innerText="Cogiste tu cuchillo, una mochila y saliste a buscar suministros. Hay algunos zombis detrás de ti, acechándote. ¿Es eso un problema?";
    $("#ans1").removeEventListener("click",jSleep);
    $("#ans2").removeEventListener("click",police);
    $("#ans3").removeEventListener("click",goDown);
    $("#ans1").innerText="Solo seguís caminando";
    $("#ans2").innerText="Corres para que no te alcancen";
    $("#ans3").innerText="Intentas Matarlos";
    $("#ans1").addEventListener("click",hide);
    $("#ans2").addEventListener("click",police2);
    $("#ans3").addEventListener("click",block);
}
//end 1


//2
function police2(){
    alt();
    $("#content").style.color="red";
    $("#content").innerText="Corriste lo más rápido que pudiste, pero más zombis te escucharon y te rodearon. No tenías más remedio que luchar contra ellos. Los zombies te comieron vivo.";
    $("#all").style.transform="scale(0)";
}
function block(){
    alt();
    $("#content").style.color="red";
    $("#content").innerText="Fuiste a esa horda de zombis y luchaste contra ellos. pero, debido al ruido, vinieron más zombis y te rodearon. Te atraparon.";
    $("#all").style.transform="scale(0)";
}
function hide(){
    //good one
    alt();
    $("#content").innerText="Caminas como si nada, Notás más zombis frente a vos, pero aún no saben que estás ahí. ¿Qué vas a hacer? ¡Pensá rápido!";
    $("#ans1").removeEventListener("click",hide);
    $("#ans2").removeEventListener("click",police2);
    $("#ans3").removeEventListener("click",block);
    $("#ans1").innerText="Pelear con ellos";
    $("#ans2").innerText="Esconderse dentro de una casa";
    $("#ans3").innerText="Correr antes de que te vean";
    $("#ans1").addEventListener("click",bathroom);
    $("#ans2").addEventListener("click",kitchen);
    $("#ans3").addEventListener("click",bedroom);
}
//end 2


//3
function bathroom(){
    alt();
    $("#content").style.color="red";
    $("#content").innerText="Luchaste como un héroe, pero ellos te sobrepasaban en número. Sobreviviste pero te mordieron. Te convertiste en un zombi unas horas después.";
    $("#all").style.transform="scale(0)";
}
function kitchen(){
    //good one
    alt();
    $("#back").style.background="url(https://www.dropbox.com/s/buajpl660kcpj68/083c0115-9f9b-4dc2-8fab-2ad6677fe0c6-5-marioncarllfarmhouse-parlour.jpg?dl=1)";
    $("#back").style.backgroundSize="cover";
    $("#back").style.backgroundPosition=" center"
    $("#content").innerText="Te escondes en la casa más cercana que encuentres. Los zombies te escuchan y ahora están en la puerta, tratando de entrar. ¿Cuál es tu próximo movimiento?";
    $("#ans1").removeEventListener("click",bathroom);
    $("#ans2").removeEventListener("click",kitchen);
    $("#ans3").removeEventListener("click",bedroom);
    $("#ans1").innerText="Bloquear la puerta";
    $("#ans2").innerText="Esconderse";
    $("#ans3").innerText="Correr hacia la puerta trasera";
    $("#ans1").addEventListener("click",run);
    $("#ans2").addEventListener("click",jump);
    $("#ans3").addEventListener("click",fight);
}
function bedroom(){
    alt();
    $("#content").style.color="red";
    $('#content').innerText="Regresaste corriendo a tu casa. No obtuviste los suministros que necesitabas, por lo que te moriste de hambre.";
    $("#all").style.transform="scale(0)";
}
//end 3


//4
function run(){
    alt();
    $("#content").style.color="red";
    $("#content").innerText="Bloqueaste la puerta, pero entraron por la ventana y la puerta trasera. Fuiste asesinado por los zombies.";
    $("#all").style.transform="scale(0)";
}
function fight(){
    //good one
    $("#back").style.background="url(https://www.dropbox.com/s/84dlye5ym8c47un/511097_a75772eb.jpg?dl=1)";
    $("#back").style.backgroundSize="cover";
    $("#back").style.backgroundPosition=" center"
    alt();
    $("#content").innerText="Saliste por la puerta trasera,  no hay zombies. Puedes ir a buscar los suministros que estás buscando. Hay un supermercado en el lado izquierdo de la calle, una tienda en el lado derecho de la calle y un camión enorme en la calle. ¿Dónde buscarás suministros?";
    $("#ans1").removeEventListener("click",run);
    $("#ans2").removeEventListener("click",jump);
    $("#ans3").removeEventListener("click",fight);
    $("#ans1").innerText="Tienda de la calle";
    $("#ans2").innerText="Super mercado";
    $("#ans3").innerText="Camión grande";
    $("#ans1").addEventListener("click",room);
    $("#ans2").addEventListener("click",jumpWin);
    $("#ans3").addEventListener("click",badGuy);
}
function jump(){
    alt()
    $("#content").style.color="red";
    $("#content").innerText="Te escondiste, pero los zombies te encontraron de todos modos. Estás muerto.";
    $("#all").style.transform="scale(0)";
}
//end 4


//5
function badGuy(){
    alt();
    $("#content").style.color="red";
    $("#content").innerText="Revisaste el camión, pero no encontraste nada útil. Los zombis oyeron el ruido y se acercaron a ti. Te rodearon y te devoraron...";
    $("#all").style.transform="scale(0)";
}
function room(){
    //good one
    alt();
    $("#back").style.background="url(https://www.dropbox.com/s/3nc46g0gaeo7iln/Inside%20the%20Sweet%20Shop%20Kirkby%20Lonsdale.jpg?dl=1)";
    $("#back").style.backgroundSize="cover";
    $("#back").style.backgroundPosition=" center"
    $("#content").innerText="Elegiste la pequeña tienda. No había nadie adentro. Tuviste tiempo suficiente para llenar tu mochila con suministros. Hay zombis afuera, pero no puedes correr con una mochila tan pesada. ¿Qué haces?";
    $("#ans1").removeEventListener("click",room);
    $("#ans2").removeEventListener("click",jumpWin);
    $("#ans3").removeEventListener("click",badGuy);
    $("#ans1").innerText="Esperar a que se vayan";
    $("#ans2").innerText="Dejar la mochila y correr";
    $("#ans3").innerText="Probar la suerte y salir";
    $("#ans1").addEventListener("click",thePhone);
    $("#ans2").addEventListener("click",emptyweapon);
    $("#ans3").addEventListener("click",keys);
}
function jumpWin(){
    alt()
    $("#content").style.color="red"
    $("#content").innerText="Elegiste el supermercado. Había suficientes suministros para ti, pero estaba lleno de zombies. No podías luchas tu solo contra todos ellos. Luchaste como un héroe, pero después de todo te atraparon. Estás muerto.";
    $("#all").style.transform="scale(0)";
}
//end 5


//6
function keys(){
    alt()
    $("#content").style.color="red";
    $("#content").innerText="Como era de esperar, la mochila pesaba demasiado, por lo que los zombies te atraparon muy rápido. Te comieron vivo.";
    $("#all").style.transform="scale(0)";
}
function emptyweapon(){
    alt();
    $("#content").style.color="red";
    $("#content").innerText="Dejaste la mochila con todos tus suministros y corriste. Sobreviviste pero no tenías suministros. Te moriste de hambre";
    $("#all").style.transform="scale(0)";
}
function thePhone(){
    //good one
    alt();
    $("#content").innerText="Esperaste casi 2 horas hasta que todos los zombis se fueran. Ahora la calle está vacía y podés volver a casa sin problemas. ¿Podés, no?";
    $("#ans1").removeEventListener("click",thePhone);
    $("#ans2").removeEventListener("click",emptyweapon);
    $("#ans3").removeEventListener("click",keys);
    $("#ans1").innerText="Esperar un poco más";
    $("#ans2").innerText="Ir a casa, ahora";
    $("#ans3").innerText="Comer algo primero";
    $("#ans1").addEventListener("click",dead);
    $("#ans2").addEventListener("click",alive);
    $("#ans3").addEventListener("click",dead);
}
//end 6


//7
function alive(){
    //good one
    alt()
    $("#back").style.background="url(https://www.dropbox.com/s/hz8nlxssvxfva2w/Old-House-with-two-doors.jpg?dl=1)";
    $("#back").style.backgroundSize="cover";
    $("#back").style.backgroundPosition="center";
    $("#content").innerText="Estás frente a tu casa, pero necesitas tu contraseña para entrar. Pista: Fecha de hoy.";
    
    $("#ans1").removeEventListener("click",alive);
    $("#ans2").removeEventListener("click",dead);
    $("#ans3").removeEventListener("click",dead);
    $("#ans1").innerText="29.05.2021";
    $("#ans2").innerText="14.07.2019";
    $("#ans3").innerText="24.06.2012";
    $("#ans1").addEventListener("click",ok);
    $("#ans2").addEventListener("click",b);
    $("#ans3").addEventListener("click",b);
}
function dead(){
    alt()
    $("#content").style.color="red";
    $("#content").innerText="Los zombis te encontraron, entraron en la tienda y te mataron.";
    $("#all").style.transform="scale(0)";  
}
//end 7

//8
function ok(){
    alt()
    $("#content").style.color="#090";
    $("#back").style.background="url(https://www.dropbox.com/s/b2ohzliwaguhply/ghost-rider250-highresscreenshot00001.jpg?dl=1)";
    $("#back").style.backgroundSize="cover";
    $("#back").style.backgroundPosition="center";
    $("#all").style.display="none";
    $("#content").innerText="¡Sobreviviste! Felicitaciones por sobrevivir este día. Buena suerte con los próximos.";
}
//end 8

function b(){
     alt()
    $("#content").style.color="red";
    $("#content").innerText="Inténtalo de nuevo. ¡Estoy seguro de que puedes ganar la próxima vez!";
    $("#all").style.transform="scale(0)";
}

