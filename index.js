const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));
buttons. map( btn => {
    btn.addEventListener('click',(e) => {
        switch(e.target.innerText){
            case 'c':
                display.innerText = "";
                break;
            case '←':
                display.innerText = display.innerText.slice(0,-1);
                   break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch{
                    display.innerText = 'Khud To Pgl He Mjy B Na Kr';
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});