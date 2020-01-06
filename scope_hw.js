### MVP

#### Episode 1


const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
//Miss Scarlet. This is the value of the key 'murderer' when declared and is never reassigned.

#### Episode 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//Professor Plum. This is the value of murderer when declared. It is a 'const' variable so cannot be reassigned.

#### Episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
//firstVerdict returns Mrs. Peacock because the murderer variable declared within the declareMurderer function only has block scope. Therefore it is more specific and used in the function itself. secondVerdict will return Professor Plum as the variable declared ourside of any function can be called upon without accessing the declareMurderer function as it is in the global object in the same way the secondVerdict variable is

#### Episode 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);
//suspectThree is Colonel Mustard when logging  'suspects' as this is declared within the declareAllSuspects function and is therefore more sepcific due to it having block scope, this is then used in the return statement of the function. The second log though gives Mrs Peacock as Colonel Mustard is not available outwith the block in declareAllSuspects function

#### Episode 5

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
//Revolver. Even thought scnario is a const variable, the value assigned to a key within that object can still be updated as long as the varibale is not re-assigned to a new object itself

#### Episode 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//Mrs. White. The varibale murderer is declared in the global object scope and by lexical scope this can then be reassigned within the function changeMurderer. When that function is called it is reassigned to Mr. Green, and then again to Mrs. White due to the plotTwist function being called within the changeMurderer function itself.

#### Episode 7

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//Mr Green. The initial murderer variable has global object scope and is therefore reassigned within the first block in the changeMurderer function. The next block of code declares a new murderer varibale which is the one reassigned in the unexpectedOutcome block of code. Once we are no longer in that function the murder varibale accessed is the intial varibale that had global object scope and was then reassigned in the first block of code in the anonymous function assigned to changeMurderer

#### Episode 8

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
//Candle Stick. The scenario has global object scope and although aa const the values of a key can be reassigned using the syntax throughout this Episode.The room is reassigned to Dining Room in the first block of code. Because the following blocks of code are moving 'inwards' lexical scope means that we can still access and reassign the values of keys of the scenario object in the next two blocks. Theerefore when unexpectedOutcome is called the room is currently Dining Room so the  murderer is changed to Colonel Mustard and the weapon is changed to Candle Stick.

#### Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
//Professor Plum. The intial murderer variable has global object scope, the next one declared has block scope and therefore will not be accessible from outside of that 'if' block.

### Extensions

Make up your own episode!
