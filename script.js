// JavaScript

console.log('Hello world!');

//実行する機能
//const show = (entries) => {
//const keyframes = {
//    opacity: [0, 1],
//    translate: ['200px 0',0]
//  }
//  entries[0].target.animate(keyframes,600);
//console.log(entries[0].target);
//ページが読み込まれた瞬間（1回目）＋要素が範囲に入った時＋画面から外れた時　にカウントが増える
//entriesは便宜上の名前なので自由につけていい
//entriesの0番のtargetになっているものを取り出す
//  }

//監視機能の設置
//const observer = new IntersectionObserver(show);
// observerという箱の中に定数を入れた
// ()の中にshowという関数を入れた　監視対象が範囲に入ったら、showを実行するという処理

//監視対象の指示
//observer.observe(document.querySelector('#img01'));
//何を監視するのかを指定する　画像ファイルimg01を設定

const show = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const keyframes = {
                opacity: [0, 1],
                translate: ['200px 0', 0]
            }
            entry.target.animate(keyframes, 600);

            //一度表示されたら止める　このobsは便宜上の名前
            obs.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(show);

//監視対象
const images = document.querySelectorAll('.img');
images.forEach(img => {
    observer.observe(img);
});
