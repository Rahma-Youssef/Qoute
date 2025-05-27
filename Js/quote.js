const quotes = [
    {
        text: "Do not take life too seriously. You will not get out alive.",
        author: "--Elbert Hubbard"
    },
    {
        text: "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”",
        author: "― Martin Luther"
    },
    {
        text: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        author: "― Mahatma Gandhi"
    },
    {
        text: "“If you tell the truth, you don't have to remember anything.”",
        author: "― Mark Twain"
    },
    {
        text: "“Always forgive your enemies; nothing annoys them so much.”",
        author: "― Oscar Wilde"
    },
    {
        text: "“Insanity is doing the same thing, over and over again, but expecting different results”",
        author: "― Narcotics Anonymous"
    },
];


var remainingQuotes = [...quotes];
console.log(remainingQuotes)

//showquote Function
 
function showNewQoute() {


    if (remainingQuotes.length === 0) {
        remainingQuotes = [...quotes];
    }



    var randomNumber = Math.floor(Math.random() * remainingQuotes.length);
    var selectedQuote = " ";
    


    for (var i = 0; i < remainingQuotes.length; i++) {
        if (i === randomNumber) {
            selectedQuote = remainingQuotes[i];

            remainingQuotes.splice(i, 1);
    
            break;
        }
    }

  
    

    document.getElementById("newquote").innerHTML = `${selectedQuote.text}`
    document.getElementById("quoteAuthor").innerHTML = `${selectedQuote.author}`




}

