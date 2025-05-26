const quotes = [
    { text: "Do not take life too seriously. You will not get out alive.", author: "--Elbert Hubbard" },
    { text: "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”", author: "― Martin Luther" },
    { text: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”", author: "― Mahatma Gandhi" },
    { text: "“If you tell the truth, you don't have to remember anything.”", author: "― Mark Twain" },
    { text: "“Always forgive your enemies; nothing annoys them so much.”", author: "― Oscar Wilde" }
];


function showNewQoute() {


    // const randomIndex = Math.floor(Math.random() * quotes.length);
    var quote = ""
    var author = ""




    let remainingQuotes = [...quotes];

    if (remainingQuotes.length === 0) {

        remainingQuotes = [...quotes];

    }


    const randomIndex = Math.floor(Math.random() * remainingQuotes.length);
    let selectedQuote = null;

    for (let i = 0; i < remainingQuotes.length; i++) {
        if (i === randomIndex) {
            selectedQuote = remainingQuotes[i];
            break;
        }
    }



    quote += `${selectedQuote.text}`;
    author += `${selectedQuote.author}`


    for (let i = 0; i < remainingQuotes.length; i++) {
        if (remainingQuotes[i].text === selectedQuote.text &&
            remainingQuotes[i].author === selectedQuote.author) {
            remainingQuotes.splice(i, 1);
            break;
        }
    }



    document.getElementById("newquote").innerHTML = quote
    document.getElementById("quoteAuthor").innerHTML = author

}

