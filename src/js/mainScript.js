document.body.addEventListener('keydown', (evt) =>{
    console.log(evt.code);
    playSound(evt.code)
});

function playSound(sound){

    document.querySelectorAll('audio').forEach(element => {
        let cless = element.className;
        if(sound && sound.toLowerCase() === cless.toLowerCase()){

            isClicked(sound.toLowerCase())
            element.currentTime = 0;
            element.play();

        }
    });

}

function isClicked(element){

    document.querySelectorAll('div[data-key]').forEach(el => {

        el.classList.remove(`activebranco`);
        el.classList.remove(`activepreto`);

        if(element==el.dataset.key.toLowerCase()){
            exchangeClass(el, el.className)
        }

    });
}

function exchangeClass(el, Class){

    let c = Class.replace(/\w\d /gi,'');
    let p = el.className.replace(/\w\d /gi,'');

    if(p.toLowerCase() === c.toLowerCase()){
        let i = 200;
        el.classList.add(`active${c}`);
        setTimeout(() => {
            el.classList.remove(`active${c}`);
        }, i);
        console.log(el.classList)
    }
}