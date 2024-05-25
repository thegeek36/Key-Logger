
const logDiv = document.getElementById('log');
const stateDiv = document.getElementById('state');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

startBtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handleDown);
    document.addEventListener("keyup",handleUp);
    logDiv.textContent = "";
    stateDiv.textContent = "";
})

stopBtn.addEventListener("click",() => {
    document.removeEventListener("keydown",handleDown);
    document.removeEventListener("keyUp",handleUp);
    logDiv.textContent = "";
    stateDiv.textContent = "";
})
function handleDown(e){
    logDiv.textContent = `Key ${e.key} is pressed`;
    stateDiv.textContent = "Key is Down";
}

function handleUp(e){
    logDiv.textContent = `Key ${e.key} is pressed Up`
    stateDiv.textContent = "Key is Up";
}