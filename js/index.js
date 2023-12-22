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
