let heart_btn=document.getElementsByClassName("heart_btn")
let plus_btn=document.getElementsByClassName("plus_btn")
let minus_btn=document.getElementsByClassName("minus_btn")
let Quant=document.getElementsByClassName("Quand")
let prices=[1379,176,249]
let finalprice=document.getElementById("finalprice")
let delete_btn=document.getElementsByClassName("delete")
for (let index = 0; index < heart_btn.length; index++) {
    
    //heart like
heart_btn[index].addEventlistenner("click",function () {
    
    if(heart_btn[index].style.color==="red" ){
        heart_btn[index].style.color="black"
    }
    else{
        heart_btn[index].style.colore="red"
    }
} )
heart_btn[index].addEventListener("click",function(){
    if(heart_btn[index].style.color==="red"){
        heart_btn[index].style.color="black"
    }
})
// plus button
plus_btn[index].addEventlistenner("click",function (){
    Quant[index].valu=number(Quant[index].value)+1
    finalprice.valu =number(finalprice.value)+prices[index]
})
//minus button
minus_btn[index].addEventListener("click",function(){
    if(Quant[index].value!=='1'){
        Quant[index].value=number(Quant[index].value)-1
        finalprice.valu=number(finalprice.value)-prices[index]
    
    }
})
//delete button
delete_btn[index].addEventListener("click",function(){
    delete_btn [index].style.display="none"
    finalprice.value=number(finalprice.value)-(prices[index]*number(Quant[index].value))
})


}
