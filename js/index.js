// 変数iを初期化します。これは後でローテーションの制御に使用されます。
let i = 0;

// setInterval関数を使用して、特定の間隔（ここでは3000ミリ秒、つまり3秒）ごとに指定した関数を実行します。
const rotate = setInterval(() => {

    // 各スマートフォン要素をDOMから選択します。
    let smartphone1 = document.querySelector('.smartphone1');
    let smartphone2 = document.querySelector('.smartphone2');
    let smartphone3 = document.querySelector('.smartphone3');

    // iを3で割った余りに基づいて、どのローテーションを行うかを決定します。
    switch (i % 3) {
        case 0:
            // 余りが0の場合、各スマートフォン要素のクラスをローテーションします。
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
            // 余りが1の場合、各スマートフォン要素のクラスを再選択し、ローテーションします。
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
            // 余りが2の場合、各スマートフォン要素のクラスを再選択し、ローテーションします。
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

    // iをインクリメントします。これにより、次回のsetInterval呼び出し時には次のローテーションが行われます。
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


let road1Fade = document.querySelector('.road1Fade');
let road2Fade = document.querySelector('.road2Fade');
let road5Fade = document.querySelector('.road5Fade');

let road1FadeObserver = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('Road1Fade')
        }
    });
});

road1FadeObserver.observe(road1Fade);
road1FadeObserver.observe(road2Fade);
road1FadeObserver.observe(road5Fade);


let road3Fade = document.querySelector('.road3Fade');

let road3FadeObserver = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('Road3Fade')
        }
    });
});

road3FadeObserver.observe(road3Fade);



let road4Fade = document.querySelector('.road4Fade');
let road6Fade = document.querySelector('.road6Fade');


let road6FadeObserver = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting) {
            entry.target.classList.add('Road6Fade')
        }
    })
})

road6FadeObserver.observe(road6Fade);
road6FadeObserver.observe(road4Fade);
