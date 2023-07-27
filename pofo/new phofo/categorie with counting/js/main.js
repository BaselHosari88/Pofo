
// --------------------------------------------------------------------------

const container =document.querySelector(".mainContainer");

let MBH='';

function functieAlles () {
   for (let j = 0; j < 1; j++) {

      MBH +='<div class="row">';
   
      for (let i = 0; i < 27; i++) {
   
          let object =data[i];
          MBH+='<div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">';
          MBH +='<div class="card cardCol" style="">'
          MBH +='<img src="'+ object.image+'" class="card-img-top" alt="photo"></img>';
          MBH +='<h4 class="card-title m-2">'+object.title+'</h4>';
          MBH +='<p class="price mx-2">'+object.price+'</p>';
          MBH +='<div class="card-body">'
          MBH +='<p class="card-text" style="height: 100px">'+object.description+'</p>';
          MBH +='<a href="'+object.link+'" class="btn btn-primary">Meer info</a>';
         
   
          MBH +='</div>';
          MBH +='</div>';
          MBH +='</div>';
   
      }
   
      MBH += '</div>';
   
   }
   container.innerHTML +=MBH;
}





const actieAside = document.querySelector(".actieAside");

actieAside.addEventListener("click", functieActie);

function functieActie () {
   container.innerHTML = "";
   for (let k = 0; k < 1; k++) {
   
      MBH ='<div class="row">';
   
      for (let l = 0; l < 9 ; l++) {
 
           let object2 =data[l];
          MBH +='<div class="col-sm-6 col-md-6 col-lg-4 col-xl-3"">';
          MBH +='<div class="card cardCol" style="">'
          MBH +='<img src="'+ object2.image+'" class="card-img-top" alt="photo"></img>';
          MBH +='<h4 class="card-title m-2">'+object2.title+'</h4>';
          MBH +='<p class="price mx-2">'+object2.price+'</p>';
          MBH +='<div class="card-body">'
          MBH +='<p class="card-text" style="height: 100px">'+object2.description+'</p>';
          MBH +='<a href="'+object2.link+'" class="btn btn-primary">Meer info</a>';
         
   
          MBH +='</div>';
          MBH +='</div>';
          MBH +='</div>';
   
      }
   
      MBH += '</div>';
   
   }
   container.innerHTML +=MBH;
};


let allesAside = document.querySelector(".allesAside");

allesAside.addEventListener("click", function basel () {
   container.innerHTML = "";
   for (let k = 0; k < 1; k++) {
   
      MBH ='<div class="row">';
   
      for (let l = 0; l < 27 ; l++) {
 
           let object2 =data[l];
          MBH +='<div class="col-sm-6 col-md-6 col-lg-4 col-xl-3"">';
          MBH +='<div class="card cardCol" style="">'
          MBH +='<img src="'+ object2.image+'" class="card-img-top" alt="photo"></img>';
          MBH +='<h4 class="card-title m-2">'+object2.title+'</h4>';
          MBH +='<p class="price mx-2">'+object2.price+'</p>';
          MBH +='<div class="card-body">'
          MBH +='<p class="card-text" style="height: 100px">'+object2.description+'</p>';
          MBH +='<a href="'+object2.link+'" class="btn btn-primary">Meer info</a>';
         
   
          MBH +='</div>';
          MBH +='</div>';
          MBH +='</div>';
   
      }
   
      MBH += '</div>';
   
   }
   container.innerHTML +=MBH;
});

/*------- sport*/

let sportAside = document.querySelector(".sportAside");

sportAside.addEventListener("click", function basel () {

  
   container.innerHTML = "";
   for (let k = 0; k < 1; k++) {
   
      MBH ='<div class="row">';
   
      for (let l = 9; l < 18 ; l++) {
 
           let object2 =data[l];
          MBH +='<div class="col-sm-6 col-md-6 col-lg-4 col-xl-3"">';
          MBH +='<div class="card cardCol" style="">'
          MBH +='<img src="'+ object2.image+'" class="card-img-top" alt="photo"></img>';
          MBH +='<h4 class="card-title m-2">'+object2.title+'</h4>';
          MBH +='<p class="price mx-2">'+object2.price+'</p>';
          MBH +='<div class="card-body">'
          MBH +='<p class="card-text" style="height: 100px">'+object2.description+'</p>';
          MBH +='<a href="'+object2.link+'" class="btn btn-primary">Meer info</a>';
         
   
          MBH +='</div>';
          MBH +='</div>';
          MBH +='</div>';
   
      }
   
      MBH += '</div>';
   
   }
   container.innerHTML +=MBH;
});


let strategieAside = document.querySelector(".strategieAside");

strategieAside.addEventListener("click", function basel () {

  
   container.innerHTML = "";
   for (let k = 0; k < 1; k++) {
   
      MBH ='<div class="row">';
   
      for (let l = 18; l < 27 ; l++) {
 
           let object2 =data[l];
          MBH +='<div class="col-sm-6 col-md-6 col-lg-4 col-xl-3"">';
          MBH +='<div class="card cardCol" style="">'
          MBH +='<img src="'+ object2.image+'" class="card-img-top" alt="photo"></img>';
          MBH +='<h4 class="card-title m-2">'+object2.title+'</h4>';
          MBH +='<p class="price mx-2">'+object2.price+'</p>';
          MBH +='<div class="card-body">'
          MBH +='<p class="card-text" style="height: 100px">'+object2.description+'</p>';
          MBH +='<a href="'+object2.link+'" class="btn btn-primary">Meer info</a>';
         
   
          MBH +='</div>';
          MBH +='</div>';
          MBH +='</div>';
   
      }
   
      MBH += '</div>';
   
   }
   container.innerHTML +=MBH;
});

var seconds = 1000 ;

countDiv = document.getElementById('countdown');
console.log(countDiv);

secondPass;

countdown = setInterval (function() {
    
    secondPass();

},1000);

function secondPass(){
    
    var minutes = Math.floor(seconds /60);
    remSeconds = seconds % 60;
    if (seconds < 10){
        remSeconds = "0" +remSeconds;
    }
    countDiv.innerHTML = minutes +":" +remSeconds;
    if(seconds >0 ){
        seconds = seconds -1;
    }else{
        clearInterval(countdown);
        countDiv.innerHTML = "done";
    }
}
