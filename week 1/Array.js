let score = [85,50,96,40,35]
console.log("score =",score)
let car = ["Toyota","Honda","BYD"]
console.log("car =",car)
let score1 = []
console.log(score1)
console.log(score[2])
console.log(car[0])
score[3] = 45
console.log("score = ",score)
console.log("lenght of score =" ,score.length)
console.log("lenght of car =" ,car.length)
console.log("lenght of score1 ="  ,score1.length)
console.log("----Display Data----")
console.log(score[0])
console.log(score[1])
console.log(score[2])
console.log(score[3])
console.log(score[4])
console.log(score[5])
console.log("----For Loop----")
for(let i = 0;i<score.length;i++){
    console.log(score[i])
}
for(let i = 0;i<car.length;i++){
    console.log(car[i])
}
for(let i = 0;i<score.length;i=i+2){
    console.log(score[i])
}
console.log("----For Of----")
for(let data of score){
    console.log(data)
}
for(let data of car){
    console.log(data)
}
console.log("----For In----")
for(let i in score){
    console.log(i,":",score[i])
}
for(let i in car){
    console.log(i,":",car[i])
}
console.log("----Push----")
console.log("before score : ",score)
score.push(10)
console.log("after score : ",score)

console.log("before car :",car)
car.push("BMW")
console.log("after :",car)

console.log("---- Unshift----")
console.log("before score :",score)
score.unshift(99)
console.log("after score : ",score)
console.log("before car :",car)
car.unshift("Volvo")
console.log("after car :",car)

console.log("----Pop----")
console.log("before score :",score)
score.pop()
console.log("after score : ",score)
console.log("before car :",car)
car.pop()
console.log("after car : ",car)

console.log("----Shift----")
console.log("before score :",score)
score.shift()
console.log("after score : ",score)
console.log("before car :",car)
car.shift()
console.log("after car : ",car)

console.log("----Copy----")
score1 = score.slice()
console.log("before score :",score)
console.log("before score1 :",score1)
score1.push(55)
console.log("after score :",score)
console.log("after score1 :",score1)