
const button =document.querySelector(".clickme");

button.addEventListener("click", doSome);

let value ;
let counter;
function doSome ()
{
 value = document.querySelector('.input-text').value;
 let countDownDate = new Date(value).getTime();
 //console.log(countDownDate);
    clearInterval(counter);
     counter = setInterval(() =>{
 
     //Get date now 
     let dateNow = new Date().getTime();
 
 
     //find the date difference between NOW and countdown date
     let dateDiff = countDownDate - dateNow;
 
 
 
     
     let days = Math.floor(dateDiff/ ( 1000 * 60 * 60 *24));
     let hours = Math.floor((dateDiff % ( 1000 * 60 * 60 *24))/(1000*60*60));
     let minutes = Math.floor(dateDiff % ( 1000 * 60 * 60  )/(1000*60));
     let seconds = Math.floor((dateDiff % ( 1000 * 60  ))/1000);
 
 
     document.querySelector('.days').innerHTML = days+'  Days';
     document.querySelector('.hours').innerHTML =hours+' Hours';
     document.querySelector('.minutes').innerHTML =minutes+' Minutes';
     document.querySelector('.seconds').innerHTML =seconds+' Seconds';
 
 
    
 },1000);
};








