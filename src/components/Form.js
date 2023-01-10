import React from "react";

function Form() {
    const [meme, setMeme] = React.useState({
            topText: "",
            bottomText: "",
            img: "https://i.imgflip.com/tau4.jpg"
        })

    const [allMeme, setAllMeme] = React.useState([]);
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    }, [])

    function handleClick(event) {
        event.preventDefault();
        const randomNum = Math.floor(Math.random() * allMeme.length)
        const randomImage = allMeme[randomNum].url;
        console.log(randomImage);
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                img: randomImage
            }
        })
    }
    console.log(meme)

    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
        return (
            <div>
                <form className = "form">
                    <input type = "text" value = {meme.topText} className = "text-input" placeholder = "Top Text" name = "topText" onChange = {handleChange} />
                    <input type = "text" value = {meme.bottomText} className = "text-input" placeholder = "Bottom Text" name = "bottomText" onChange = {handleChange} />
                    <button className = "button" onClick = {handleClick}>Get a new meme image</button>
                </form>
                <div className = "meme">
                    <img src = {meme.img} alt = "memeimage" className = "images" />
                    <h2 className = "meme-h2" id = "top-text">{meme.topText}</h2>
                    <h2 className = "meme-h2" id = "bottom-text">{meme.bottomText}</h2>
                </div>
            </div>
        )
}

export default Form;