let para = document.querySelector('.para')
let font = document.querySelector('.fa')
let home = document.querySelector('.fa-home')
let user = document.querySelector('.fa-user')
let html = document.querySelector('.fa-html5')
let css = document.querySelector('.fa-css3')
let data = document.querySelector('.fa-database')
let chart = document.querySelector('.fa-pie-chart')
para.innerHTML = "home"
home.addEventListener('click', ()=>{
    para.textContent = 'Home'
})
user.addEventListener('click', ()=>{
    para.textContent = 'product'
})
html.addEventListener('click', ()=>{
    para.textContent = 'reviews'
})
css.addEventListener('click', ()=>{
    para.textContent = 'Team'
})
data.addEventListener('click', ()=>{
    para.textContent = 'projects'
})
chart.addEventListener('click', ()=>{
    para.textContent = 'partners'
})

const ahref=document.querySelector(".links").children
for(let i = 0; i<ahref.length; i++){
    const a = ahref[i].querySelector('.fa')
    a.addEventListener("click", function(){
        for(let j = 0; j<ahref.length; j++){
            ahref[j].querySelector('.fa').classList.remove("active")
        }
        this.classList.add("active")
    })
}