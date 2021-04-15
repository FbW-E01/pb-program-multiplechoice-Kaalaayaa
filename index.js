// # Switch if... 

// #### 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).
const color = "brown";
switch (color){
    case "red":
        console.log("Red is the color of energy, passion, action, ambition and determination. It is also the color of anger and sexual passion.");
        break;
    case "yellow":
        console.log("Yellow is the color of the mind and the intellect. It is optimistic and cheerful. However it can also suggest impatience, criticism and cowardice.");
        break;
    case "orange":
        console.log("Orange is the color of social communication and optimism. From a negative color meaning it is also a sign of pessimism and superficiality.");
        break;
    case "green":
        console.log("Green is the color of balance and growth. It can mean both self-reliance as a positive and possessiveness as a negative, among many other meanings. ");
        break;
    case "blue":
        console.log("Blue is the color of trust and peace. It can suggest loyalty and integrity as well as conservatism and frigidity.");
        break;
    default:
        console.log("Unfortunately I dont have any information about this color.");
}
// #### 2. Grading
// Create a switch statement that prints different comments depending on a grade.
const grade = 20;

switch (grade){
    case 10:
    case 11:
    case 12:
    case 13:
        console.log("its good but you could do better");
        break;
    case 14:
    case 15:
    case 16:
        console.log("Well done");
        break;
    case 17:
    case 18:
    case 19:
    case 20:
        console.log("Excellent!");
        break;
    default:
        console.log("Its really not good but continue learning you'll make it !");
    }

// #### 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).
const fruit = "banana";

switch (fruit){
    case "banana":
        console.log("Banana is so good in poridge");
        break;
    case "orange":
        console.log("Orange is good in juices");
        break;
    case "apple":
        console.log("Apples are good in crumbles");
        break;
    case "strawberry":
        console.log("Strawberries are good in smoothies")
        break;
    default: 
        console.log("We can do everything with this fruit!")
}
// #### 4. Percentage Complete. 
// * If percentageComplete is below 30, print "Still a long way to go". 
// * If the percentageComplete is between 30 and 50, print "Slowly getting there". 
// * If percentageComplete is between 51 and 80, print "You can do it!". 
// * If percentageComplete is between 81 and 99, print "This is the last push!".
// * If percentageComplete is 100, print "You're there. Well done!". 
const percentageComplete = 100;
if (percentageComplete < 30){
    console.log("Still a long way to go");
} else if (percentageComplete >30 && percentageComplete < 50){
    console.log("Slowly getting there");
} else if (percentageComplete >51 && percentageComplete < 80){
    console.log("You can do it!");
}else if (percentageComplete >81 && percentageComplete < 99){
    console.log("This is the last push!");
} else if (percentageComplete === 100){
    console.log("You're there. Well done!");
}
// #### 5. Differences
// * When should you use a switch statement versus an `if else` statement. Comment your answer in your js file.
we should use a switch statement when we just use simple value like number or strings but if we have to do comparaison and && or || its better to use switch.