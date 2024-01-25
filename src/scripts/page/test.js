/**
 * 下層ページ（test.html）用制御ファイル
 *
 * 概要：data-page="test"をキーに実行される
 */
let particles;
export default async function ({ world, mouse, menu, loader, viewport, scroller }) {
    console.log('text.html is displayed');
    // ローディングアニメーションの追加
    // loader.addLoadingAnimation(loadAnimation);
}

function loadAnimation(tl) {
    // パーティクルのアニメーション
    tl.set(
        {},
        {
            onComplete() {
                particles.uniforms.uProgress.value = 0.5;
                particles.goTo(0, 0.3);
            },
        }
    );
}
