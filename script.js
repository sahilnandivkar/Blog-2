$(window).scroll(function(){
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }

    if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    }
});

const showOutputBtn = document.getElementById('showOutputBtn');
const outputContainer = document.getElementById('outputContainer');

showOutputBtn.addEventListener('click', function() {
    if (outputContainer.style.display === 'none') {
        outputContainer.style.display = 'block';
    } else {
        outputContainer.style.display = 'none';
    }
});
