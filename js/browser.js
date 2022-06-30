//Variables
let perfiles = document.querySelectorAll(".avatar");


//Llamada de los metodos
eventListeners();


//Funcion que contiene los eventos y otros metodos
function eventListeners(){

    window.addEventListener('click', function(e) {
        
        //Recorrido de los avatares disponibles
        let i = 0
        perfiles.forEach(perfil => {
            
            //Si el avatar seleccionado es de unos de los disponibles
            if(e.target.id == perfil.id || e.target.parentElement.id == perfil.id){
                console.log(`El perfil ha ingresar es el perfil N° ${i}`);
                console.log(perfiles[i])

                window.location.href = "../resources/contenido.html";
            }
            else{
                i += 1; //Se suma uno al iterador
            }
        });
    });
}