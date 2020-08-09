// 引入默认图片
import baseImg from '../../assets/logo.png';

let timer = null;
// 创建一个监听器
let observer = new IntersectionObserver((entries) => {
    //  entries是所有被监听对象的集合
    entries.forEach(entry => {
        console.log('pp',entry)
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
            console.log('1')
            // 当被监听元素到临界值且未加载图片时触发。
            !entry.target.isLoaded && showImage(entry.target, entry.target.data_src);
        }
    })
})
function showImage(el, imgSrc) {
    console.log('2')
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
        el.src = imgSrc;
        el.isLoaded = true;
    }
}
export default {
    inserted(el, binding, vnode) {
        clearTimeout(timer);
        el.src = baseImg;
        el.data_src = binding.value;
        observer.observe(el);

        // 防抖，这里在组件卸载的时候停止监听
        const vm = vnode.context;
        timer = setTimeout(() => {
            vm.$on('hook:beforeDestroy', () => {
                observer.disconnect();
            })
        }, 20);
    },
    // 图片更新触发
    undate(el, binding) {
        el.isLoaded = false;
        el.data_src = binding.value;
    }
}
