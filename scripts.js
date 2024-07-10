
console.log("hi")
document.querySelector('.cross').style.display='none';
document.querySelector('.icons').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.bar').style.display='inline'
        document.querySelector('.cross').style.display='none'

    }
    else{
         document.querySelector('.cross').style.display='inline'
         setTimeout(()=>{
 document.querySelector('.bar').style.display='none'
         },150)
         
       
    }
})
document.getElementById('contactMeBtn').addEventListener('click', function() {
    window.location.href = '/contact.html';
});
document.getElementById('downldBtn').addEventListener('click', function() {
    window.location.href = '/resume.html';
});