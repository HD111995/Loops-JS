//for loop Hello World lev-1-1
for (i = 1 ; i <= 10 ; i++){
    console.log("Hello World ",i);
}


//for loop Array lev-1-2
let num = [];
for (i = 1; i <= 10 ; i++){
    num.push(i)
}
console.log(num);


//foor loop Namen lev-1-4
let names = ["Georg", "Anass", "Elaine", "Hakan", "Sam", "Kim", "Sergio"]
for (i = 0 ; i < names.length ; i++){
    console.log(names[i]);
}


//for loop Array lev-1-6
let retArray = [];
for (i = 1 ; i <= 100 ; i++){
    retArray.push("image_"+i+".jpg");
}
console.log(retArray);


//do while lev-1-7
i = 1 ;
do {
    document.write("the Number is "+i+"<br>")
    i = i+1;
} while (i < 6);

j = 1;
//do while lev-1-8
do {
    document.write(j %2 == 0? j:"<br>")
    j = j+1;
}while(j < 20)


//loops mit input word lev-1-9
let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']
console.log(words.length)
function add(){
    let word = document.getElementById("word").value
    words.push(word)
    console.log(words.length)
}
function print(){
    let length = Number(document.getElementById("length").value) ;
    for (i = 0 ; i < words.length ; i++ ){
        console.log(words[i].length,"hier")
        if (length == words[i].length ){
            document.getElementById("result").innerHTML += words[i]+"<br>"
        }
    }
}


//for loop Array lev-2-1
function imageArray2(){
    retArray2 = [];
    for ( i = 1 ; i <= 100 ; i++ ){
      if (i < 10 ){
          retArray2.push("image_00"+i+".jpg");
      }else if ( i >= 100 ){
        retArray2.push("image_"+i+".jpg");
      }else{
        retArray2.push("image_0"+i+".jpg");
      }
    }
    console.log(retArray2)
}
imageArray2()


//loop with input lev-2-2 + lev-3-3
function loop(){
let loopNum = Number(document.getElementById("loop-num").value)
let loopArr = ["L","p"]
for (l = 0 ; l < loopNum ; l++) {
    if (loopNum % 2 == 0){
        loopArr.splice(1,0,"o");
    }else{
       if (l % 2 == 0){
        loopArr.splice(1,0,"o");
       }else{
        loopArr.splice(1,0,"0");
       }
    }
   
}
document.getElementById("result1").innerHTML = loopArr.join('')+"<br><br>"
}

//for loop string Array lev-3-1
let text = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `
let texArr = []
function cut(arr,txt) {
    let max = txt.length;
    let o = Math.round(max/100);
    let counter1 = 0;
    let counter2 = 0;
    for (i = 0 ; i <= o ; i++){
        if (max - counter1 > 100 ){
            counter2 += 100;
        }else{
            counter2 += max - counter2;
        }
         arr.push(txt.substring(counter1,counter2)+"- "+i+" of "+o)
         counter1 +=100;
    }
    console.log(texArr)
}
cut(texArr,text)


//foor loop Zahlen in Array teilen lev-3-2
let result = 0;
let numArr = [22,15,100,55];
for (j = 0 ; j < numArr.length ; j ++ ){
    for (i = 2; i < numArr[j] ; i ++){
        if (numArr[j] % i == 0){
            result = numArr[j] / i ;
            document.write(numArr[j]+" lässt sich durch "+i+" teilen! Das Ergebnis is "+result+"<br>")
        }
    }
}


//Summe der Zahlen lev-3-4
function count(){
    let maxNum = Number(document.getElementById("max-num").value)
    let firstOp = Number(document.getElementById("first").value)
    let secondOp = Number(document.getElementById("second").value)
    let res = 0;
    for (y = 1 ; y < maxNum ; y++ ){
        if ( y % firstOp == 0){
        res += y;
    }else if(y % secondOp == 0){
        res += y; 
    }else {
        res += 0;
    }
}
document.getElementById("result2").innerHTML = res;
}