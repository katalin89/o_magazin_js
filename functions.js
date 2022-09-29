function createCard(obj){
    return `
               <div class="card">

               <h2 class="titlu">${obj.nume}</h2>
               <p>${obj.adresa}</p>
               <p>${obj.program}</p>
               <img src=${obj.img}>
               </div>
                `
}

function createCards(arr){
    let text="";
    for(let i=0;i<arr.length;i++){
        text+=createCard(arr[i]);
    }
    return text ;
}

//afiseaza din data toate magazinele
function setHome(){
    let container=document.querySelector(".box");
    container.innerHTML=`
    <header>
        <h1> Magazine Mures</h1>
    </header>
    <div>
        <a href=""><button >New Magazin</button></a>
    </div>
    <div class="container">
    


    </div>

    <div class="buton">

       <button  class="create">Add new Magazin</button>
       
    </div>
    `

    let magazineContainer=document.querySelector(".container");
    magazineContainer.innerHTML=createCards(magazine);

    let clickCreateMagazin=document.querySelector(".create");

    clickCreateMagazin.addEventListener("click",()=>{
        setNewBook();
    })

    magazineContainer.addEventListener("click",(e)=>{


        let card=e.target;///retunreaza pe ce obiect am apasat din container

        
       
      
         if(card.classList.contains("titlu")){
              
        
                 let magazin=returnObiect(magazine,card.textContent);
                 

                 setUpdate(magazin);
         }
       

         




    })




  
    
}

function setNewBook(){
    let container=document.querySelector(".box");
    container.innerHTML=
                `          <header>New Magazin</header>

                <div class="container-newMagazin">
        
                    <div class="nume">
                        <p>Nume</p>
                        <input placeholder="Nume" type="text" name="" id="" class="nume-magazin">
        
                    </div>
        
                    <div class="adresa">
                        <p>Adresa</p>
                        <input type="text" placeholder="Adresa"  class="adresa-magazin">
                    </div>
        
                    <div class="program">
                        <p>Program</p>
                    <input  placeholder="Program" type="text" class="program-magazin">
                    </div>
        
                    <div class="imagine">
                        <!-- pt upload imagine -->
                        <p>Imagine</p>
                        <input type="file" class="imagine-magazin">
                    </div>
        
                    <div>
                        <button class="create">Create new Magazin</button>
                        <button class="cancel-page">Cancel</button>
                        
                    </div>
        
                </div>
    
            `   
            //scoatem din input datele sa creem un obiect
 let btnNewMagazin=document.querySelector(".create")           
let nume=document.querySelector(".nume-magazin");
let adresa= document.querySelector(".adresa-magazin");
let program=document.querySelector(".program-magazin");

btnNewMagazin.addEventListener("click",()=>{
//luam valorile din input

     let magazin={
        nume:nume.value,
        adresa:adresa.value,
        program:program.value,
     }

    //conditie

    console.log(magazin);

    if(magazin.nume!==""&&magazin.adresa!==""&& magazin.program!==""){
        magazine.push(magazin);

        setHome();
    }
    else if(magazin.nume==""){
        alert("Lipseste numele");
    }else if(magazin.adresa==""){
        alert("Lipseste:adresa");
    }else if(magazin.program==""){
        alert("Lipseste programul")
    }



})

letBtnCancel=document.querySelector(".cancel-page");

letBtnCancel.addEventListener("click",()=>{
    setHome();
})


}

//functie ce primeste numele magazinului si returneaza

function returnObiect( arr,nume){
    for(let i=0;i< arr.length;i++){
        if(arr[i].nume==nume){
            return arr[i];
        }
    }
    return -1;
}

//functie ce pirmeste un obiect si updateaza obiectul vechi

function updateObiect(arr,obj2){
for(let i=0;i<arr.length;i++){
    if(arr[i].nume==obj2.nume){
        arr[i].adresa=obj2.adresa;
        arr[i].program=obj2.program;
    }
}
}




function setUpdate(magazin){
    let container=document.querySelector(".box");
    container.innerHTML=`
    <header>Update Magazin</header>

    <div class="container-update">

        <div class="nume">
            <p>Nume</p>
            <input  type="text" name="" id="" class="nume-magazin" value="${magazin.nume}" disabled>

        </div>

        <div class="adresa">
            <p>Adresa</p>
            <input type="text" value="${magazin.adresa}"  class="adresa-magazin">
        </div>

        <div class="program">
            <p>Program</p>
        <input  value="${magazin.program}" type="text" class="program-magazin">
        </div>

        <div class="imagine">
            <!-- pt upload imagine -->
            <p>Imagine</p>
            <input type="file" class="imagine-magazin">
        </div>

        <div>
            <button class="update">Update Magazin</button>
            <button class="cancel">Cancel</button>
            
        </div>
    `
let updateContainer=document.querySelector(".container");
//updateContainer.innerHTML=
let btnClick=document.querySelector(".cancel");
btnClick.addEventListener("click",()=>{
    setHome();
})

let btnUpdate=document.querySelector(".update");

let nume=document.querySelector(".nume-magazin");
let adresa=document.querySelector(".adresa-magazin");
let program=document.querySelector(".program-magazin")

btnUpdate.addEventListener("click",()=>{
  
    let magazin={
        nume:nume.value,
        adresa:adresa.value,
        program:program.value,
     }
    
     updateObiect(magazine,magazin);


     setHome();
})
  
}





 