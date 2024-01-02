let btn =document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "Winston Churchill"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        person: "Franklin D. Roosevelt"
    },
    // Add more quotes and speakers as needed
    {
        quote: "Your time is limited, don't waste it living someone else's life.",
        person: "Steve Jobs"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "Nelson Mandela"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        person: "Eleanor Roosevelt"
    },
   
];

btn.addEventListener('click',function(){
    const random= Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})


