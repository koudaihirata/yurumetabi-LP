let i = 0;
const rotate = setInterval(() => {
    let smartphone1 = document.querySelector('.smartphone1');
    let smartphone2 = document.querySelector('.smartphone2');
    let smartphone3 = document.querySelector('.smartphone3');

    switch (i % 3) {
        case 0:
            if (smartphone1) {
                smartphone1.classList.add('smartphone3');
                smartphone1.classList.remove('smartphone1');
            }
            if (smartphone2) {
                smartphone2.classList.add('smartphone1');
                smartphone2.classList.remove('smartphone2');
            }
            if (smartphone3) {
                smartphone3.classList.add('smartphone2');
                smartphone3.classList.remove('smartphone3');
            }
            break;
        case 1:
            smartphone1 = document.querySelector('.smartphone3');
            smartphone2 = document.querySelector('.smartphone1');
            smartphone3 = document.querySelector('.smartphone2');
            if (smartphone1) {
                smartphone1.classList.add('smartphone2');
                smartphone1.classList.remove('smartphone3');
            }
            if (smartphone2) {
                smartphone2.classList.add('smartphone3');
                smartphone2.classList.remove('smartphone1');
            }
            if (smartphone3) {
                smartphone3.classList.add('smartphone1');
                smartphone3.classList.remove('smartphone2');
            }
            break;
        case 2:
            smartphone1 = document.querySelector('.smartphone2');
            smartphone2 = document.querySelector('.smartphone3');
            smartphone3 = document.querySelector('.smartphone1');
            if (smartphone1) {
                smartphone1.classList.add('smartphone1');
                smartphone1.classList.remove('smartphone2');
            }
            if (smartphone2) {
                smartphone2.classList.add('smartphone2');
                smartphone2.classList.remove('smartphone3');
            }
            if (smartphone3) {
                smartphone3.classList.add('smartphone3');
                smartphone3.classList.remove('smartphone1');
            }
            break;
    }
    i++;
}, 3000);
