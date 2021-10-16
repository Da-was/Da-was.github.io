const serbar = document.getElementById("SrchBar");
console.log(serbar)

serbar.addEventListener('keyup',(e)=>{
    console.log(e.target.value);
});