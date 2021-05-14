const createnoteinput=document.querySelector('.content');

createnoteinput.addEventListener('change',(event)=>{
 console.log(event.target.value);
});
const body=document.querySelector('body');
window.addEventListener('load',()=>{
    body.classList.add("visible");
});