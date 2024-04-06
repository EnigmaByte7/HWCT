
function show_answer(that,img){
    let answer = document.getElementById(that);
    let image = document.getElementById(img);
    console.log();
     if (answer.style.display === 'none'){
        answer.style.display = 'block';
        image.classList.remove('reverse');
        image.classList.add('rotation');
    }
    else{
        answer.style.display = 'none';
        image.classList.remove('rotation');
        image.classList.add('reverse');
    }
}
