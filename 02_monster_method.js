/**
 * Now we will add a handy method to our object.
 *
 * Copy your code from the previous exercise, then add a public method "isAlive" to the object.
 * The method should return a boolean value of true if the value of the "health" property is
 * greater than zero, otherwise it should return false.
 *
 */

(function(){

    //@see https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
    'use strict';

    ///////////////////////////
    
    function LivingThing (name, health){
        this.name = name;
        this.health = health;
         
        this.isAlive = function() {
        return (this.health > 0);
        }
    }
    
    let monster1 = new LivingThing("Rat", 5);
    let monster2 = new LivingThing("Goblin", 10);
    let monster3 = new LivingThing("Ogre", 90);
    
    let monsters = [monster1, monster2, monster3];

    ///////////////////////////

    
    //The code below should work when you are done
    console.log("Are the monsters alive?");

    //for...of loop supported in ES6
    //not compatable before IE edge
    //@see http://www.benmvp.com/learning-es6-for-of-loop/
    //@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    console.log("ES6 for...in");
    for (let monster of monsters) {
        console.log(monster.name + " is " + (monster.isAlive() ? "alive" : "dead") );
    }

    //just a spacer
    console.log("===================");

    //for loop loop supported before ES6
    //@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
    console.log("for loop for support before ES6");
    for (let i=0; i < monsters.length; i++) {
        console.log(monsters[i].name + " is " + (monsters[i].isAlive() ? "alive" : "dead") );
    }

})();
    


    