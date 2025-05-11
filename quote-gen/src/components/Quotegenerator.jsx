import {useState} from "react"

export default function QuoteGenerator(){

    const quotes = [
    "You can't use up creativity. The more you use, the more you have. - Maya Angelodu",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "I am not afraid... I was born to do this. - Joan of Arc",
    "Believe you can and you’re halfway there. - Theodore Roosevelt"
    ];
    const [currentQuote, setCurrentQuote] = useState(quotes[0])

    function generateQuote(){
        setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)])
    }
        
    return(
        <>
            <div className="container">
                <h1 className="quoteTitle">Random Quote Generator</h1>
                <h1 className="quoteClass">{currentQuote}</h1>
                <button className="quoteButton"
                    onClick={generateQuote}
                >
                    Generate Random Quote
                </button>
            </div>
        </>
    )
}