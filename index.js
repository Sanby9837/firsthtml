Githubbox.onclick = function () {
    this.innerText = '轉跳到 Sanby9837 Git Hub 中...'
    this.className = 'change'
    
    // 使用setTimeout延遲3秒鐘後執行window.location.href
    setTimeout(function () {
        window.location.href = 'https://github.com/Sanby9837';
    }, 3000);  // 3000毫秒 = 3秒
}

var block = document.getElementById('block')
		console.log(block)
		// block.textContent = 'NEW ford'


// var sum = 1+3
// console.log(sum)

// var textLook = '這裡我要輸出'+'AAAA'
// console.log(textLook)

// var isTrue = 3>1
// console.log(isTrue)


// console.log('下一行輸出1===\'2\'的結果');
// console.log(1==='2')

// console.log("外框雙引號，中間搭配'單引號'也可以正常顯示字串")
// console.log('外框單引號，中間搭配"雙引號"也可以正常顯示字串')


// function getSum(start,end){
// 	console.log('Start')
// 	var sum = 0
// 	for(var i = start; i < end; i++) {
// 		sum += i
//     }
// 	return sum
// 	console.log('end')  //呼叫時，這一行會看不到，因為已經return
// }

// var sumShow = getSum(1,20)
// console.log(sumShow)


// function getSumPick(start,end,pick){
//     var sum = 0
//     for(var i = start ; i <= end ; i++){
//         if(pick(i)){       //我在這邊把pick指定i
//             sum += i
//         }
//     }
//     return sum
// }

// var result = getSumPick(1,100,function(n){      //呼叫getSumPick，把i的值傳入n，用n執行這邊撰寫的function
//     if(n % 2 !== 0){
//         return true
//     }
//     return false
// })

// console.log(result)


// var noArr = [10,20,30,40,50]
// console.log(noArr.length)
// console.log(noArr[0])
// console.log(noArr)

// noArr.push(60)  //從最後面加
// noArr.unshift(99)  //從最前面加
// console.log(noArr)


// var obj ={
// 	name: '姓名',
// 	age: 28
// }
// console.log(obj)
// console.log(obj.name)

// for (var k in obj) {
//     console.log(k,obj[k])
// }