Githubbox.onclick = function () {
    this.innerText = '稍等一下3秒鐘  等我轉跳．．．'
    this.className = 'change'
    
    // 使用setTimeout延遲3秒鐘後執行window.location.href
    setTimeout(function () {
        window.location.href = 'https://github.com/Sanby9837';
    }, 3000);  // 3000毫秒 = 3秒
}