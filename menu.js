let menu = document.getElementById('menu');
function getLevel(){
if( sessionStorage.getItem('Nivå') !== null){

    let level = document.createElement('p');
    level.innerText = sessionStorage.getItem('Nivå');
    menu.appendChild(level);

}
}

//export { getLevel }