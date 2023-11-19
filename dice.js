

const img=["img/1.png", "img/2.png", "img/3.png","img/4.png", "img/5.png","img/6.png"]
const rollEl = document.getElementById("rollBtn")
const dice1= document.getElementById("dice1")
const dice2 = document.getElementById("dice2")


function rollDice(element) {
	let diceNum = Math.floor(Math.random()*6)+1
	if (diceNum===1){
		element.innerHTML=`
		<img src="${img[0]}">`
		}

	else if (diceNum===2){
		element.innerHTML=`
		<img src="${img[1]}" >`
		}
	else if (diceNum===3){
		element.innerHTML=`
		<img src="${img[2]}">`
		}

	else if (diceNum===4){
		element.innerHTML=`
		<img src="${img[3]}">`
		}
	else if (diceNum===5){
		element.innerHTML=`
		<img src="${img[4]}">`
		}
	else if (diceNum===6){
		element.innerHTML=`
		<img src="${img[5]}">`
		}
	else{
		element.innerHTML="Invalid response"
	}
}

rollEl.addEventListener("click", function () {
	
	rollDice(dice1)
	rollDice(dice2)

})