const data=document.querySelectorAll('.imgs');
const current=document.getElementById('current');

function selectImage(e){
    data.forEach(element => {
        element.style.opacity=1
    });

    current.src=e.target.src;

    e.target.style.opacity=0.4;
    
    
}
data.forEach(element=>{
    element.addEventListener('click',selectImage);
});

