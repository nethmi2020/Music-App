window.addEventListener('load',() => {
    const sounds=document.querySelectorAll(".sounds");
    const pads=document.querySelectorAll(".pads div")
    const visual=document.querySelector(".visual");
    const colors=[

        "rgba(0, 255, 255, 0.63)",
        "rgba(94, 255, 0, 0.815)",
        "rgba(255, 0, 157, 0.795)",
        "rgba(255, 17, 0, 0.904)",
        "rgba(98, 0, 255, 0.822)",
        "rgba(255, 230, 0, 0.938)"

    ];


    console.log(sounds);

    //going sounds here

    pads.forEach((pad, index)=>{
        pad.addEventListener("click", function(){
            sounds[index].currentTime=0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    //create a function that make bubbles

    const createBubbles=(index)=>{
        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index]
        bubble.style.animation="jump 1s ease";
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        });
        
    };
});


