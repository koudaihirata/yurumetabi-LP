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


let square = document.querySelector('.square');
let square2 = document.querySelector('.square2');

// Intersection Observerを作成
let observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
    // 要素がビューポートに入ったとき
        if(entry.isIntersecting) {
            // クラス名を追加
            entry.target.classList.add('squareAni');
        }
    });
});
// 要素の監視を開始
observer.observe(square);
observer.observe(square2);


let whiteSquare = document.querySelector('.whiteSquare');
// Intersection Observerを作成
let WhiteObserver = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
    // 要素がビューポートに入ったとき
        if(entry.isIntersecting) {
            // クラス名を追加
            entry.target.classList.add('whiteSquareAni');
        }
    });
});
// 要素の監視を開始
WhiteObserver.observe(whiteSquare);
