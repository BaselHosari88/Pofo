

const quotes= [
    {
        from:'Joyce Carol Oates',
        qoute:'"In love there are two things: bodies and words."',
    },
    {
        from:'Amy Poehler',
        qoute:'"Continue to share your heart with people even if it has been broken."',
    },
    {
        from: 'Eckhart Tolle',
        qoute:'"To love is to recognize yourself in another.',
    },

];

const button = document.querySelector('.gen');
const view = document.querySelector('.quote');
const A = document.querySelector('.copyright');
button.addEventListener('click',Basel);

function Basel(){
const random =Math.floor(Math.random()*quotes.length);
const use = quotes[random];

view.innerHTML=use.from;
A.innerHTML=use.qoute;



}


