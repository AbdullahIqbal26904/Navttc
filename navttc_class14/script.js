
document.getElementById("btn").addEventListener("click",async function load(){
    const var1 = document.getElementById("hello")
    const timer = ms => new Promise(res => setTimeout(res, ms))
    const var2 = parseInt(document.getElementById("input").value)
        console.log(var2)
        if(var2 === 1){
        for(let i=0;i<=100;i++){
            var1.style.width = `${i}%`
            var1.innerText = `${i}% Complete`
            await timer(100)
        }
        setInterval(() => {
            document.getElementById("final").innerHTML = `<div class="alert alert-primary" role="alert">
  congrats done!
</div>`
        },1000)
        
    }else{
        for(let i=0;i<=100;i++){
            var1.style.width = `${i}%`
            var1.innerText = `${i}% Complete`
            await timer(100)
        }
        setInterval(() => {
            document.getElementById("final").innerHTML = `<div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div>`
        },1000)
        
    }   
    })