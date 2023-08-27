const shayari = document.getElementById('shayari');
const joke = document.getElementById('joke');
const story = document.getElementById('story');
const quote = document.getElementById('quote');
const promptInput = document.getElementById('prompt-input');
const shayariDisplay = document.getElementById('shayari-display');
const content=document.getElementById("content")

shayari.addEventListener('click', async () => {

    const prompt = promptInput.value;
    const response = await fetch('https://content-generator-kneg.onrender.com/shayari', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
    })
    .then(res=>res.json())
    .then((data)=>{
        // console.log(data.data)
        content.innerText=`${prompt} shayari`
        shayariDisplay.innerText = data.data;
    })
    
});

joke.addEventListener('click', async () => {

    const prompt = promptInput.value;
    const response = await fetch('https://content-generator-kneg.onrender.com/joke', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
    })
    .then(res=>res.json())
    .then((data)=>{
        // console.log(data.data)
        content.innerText=`${prompt} joke`
        shayariDisplay.innerText = data.data;
    })
    
});


story.addEventListener('click', async () => {

    const prompt = promptInput.value;
    const response = await fetch('https://content-generator-kneg.onrender.com/story', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
    })
    .then(res=>res.json())
    .then((data)=>{
        // console.log(data.data)
        content.innerText=`${prompt} story`
        shayariDisplay.innerText = data.data;
    })
    
});

quote.addEventListener('click', async () => {

    const prompt = promptInput.value;
    const response = await fetch('https://content-generator-kneg.onrender.com/quote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
    })
    .then(res=>res.json())
    .then((data)=>{
        // console.log(data.data)
        content.innerText=`${prompt} quote`
        shayariDisplay.innerText = data.data;
    })
    
});
