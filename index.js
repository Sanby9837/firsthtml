Githubbox.onclick = function () {
    this.innerText = '稍等一下3秒鐘  等我轉跳．．．'
    this.className = 'change'
    
    // 使用setTimeout延遲3秒鐘後執行window.location.href
    setTimeout(function () {
        window.location.href = 'https://github.com/Sanby9837';
    }, 3000);  // 3000毫秒 = 3秒
}

var sum = 1+3
console.log(sum)

var textLook = '這裡我要輸出'+'AAAA'
console.log(textLook)

var isTrue = 3>2
console.log(isTrue)