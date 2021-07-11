const quotes = [
    {
     quote: "The journey is the reward.",
     author: "Steve Jobs",
    },  
    {
     quote: "The future is much like the present, only longer.",
     author: "Dan Quisenberry", 
    },    
    {
     quote: "The greatest risk is the risk of riskless living.",
     author: "Stephen Covey",  
    }    
    ];
    
    const quote = document.querySelector("#quote span:first-child");
    
    const author = document.querySelector("#quote span:last-child");
    
    const todayquote = quotes[Math.floor(Math.random() * quotes.length)];
    
    
    quote.innerText = todayquote.quote;
    author.innerText = todayquote.author;