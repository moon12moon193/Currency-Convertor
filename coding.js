let BaseUrl="https://api.exchangerate-api.com/v4/latest";
let downselects=document.getElementsByClassName("select");
let img=document.getElementsByClassName("img");
let btn1=document.getElementById("btn1");
let inpputtext=document.getElementById("inpputtext");
let fromCurr=document.querySelector("#from  select");
let toCurr=document.querySelector("#to select");

let msg=document.getElementById("msg");




for(let selects of downselects){
    console.log(selects)
    for(code in countrylist){
        let newOption=document.createElement("option");

        newOption.innerText=code;
        newOption.value=code;
        if(selects.name=="from" && code=="USD"){
            newOption.selected="selected";
        }else if(selects.name=="to" && code=="PKR"){
            newOption.selected="selected";
            
        }
        selects.append(newOption);
        
    }
    // selects.addEventListener("change",()=>{
    //     console.log("mamoona");
    // })
}
let updateflag=(element)=>{
    let code=element.value;
    let newCode=countrylist[code];
    console.log(newCode);
    let newSrc=`https://flagsapi.com/${newCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
    

    
    
    
    

    
    
    

}
for(let selects of downselects){
    selects.addEventListener("change",(event)=>{
        updateflag(event.target);
        
    })
}
let exchangerate=()=>{
    let amount=inpputtext.value;
    if(inpputtext.value=="" || inpputtext.value<1){
        // amount="1";
        inpputtext.value=1;

    }

    let Url=`${BaseUrl}/${fromCurr.value}`;
    fetch(Url).then((response)=>{
       return response.json();
    }).then((data)=>{
        console.log(data);
        let rate=data.rates[toCurr.value];
        
        let finalAmount=amount*rate;
        console.log(finalAmount);
        msg.innerText=`${amount}${fromCurr.value}=${finalAmount}${toCurr.value}`;
        
    })
  



}
btn1.addEventListener("click",()=>{
    exchangerate();
})










