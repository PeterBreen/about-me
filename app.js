var userName = prompt('How about we play a guessing game about me? First, what is your name?');
alert('Nice to meet you, ' + userName + '.');
console.log('userName is ' + userName);

var correctGuesses = 0;

//first question
var beenJoshuaTree = prompt('Have I ever been to Joshua Tree?');
if (beenJoshuaTree.toLowerCase() === 'yes' || beenJoshuaTree.toLowerCase() === 'y') {
  alert(userName + ', that is right! I have been to Joshua Tree.');
  console.log('Q1: ' + userName + ', that is right! I have been to Joshua Tree.');
  correctGuesses++;
  console.log('correct guesses: ' + correctGuesses);
} else if (beenJoshuaTree.toLowerCase() === 'no' || beenJoshuaTree.toLowerCase() === 'n') {
  alert('Sorry, ' + userName + ' that is not correct. I have been to Joshua Tree.');
  console.log('Q1: Sorry, ' + userName + ', that is not correct. I have been to Joshua Tree.');
} else {
  alert('Please answer with either yes/no or y/n.');
  console.log('Q1: Please answer with either yes/no or y/n.');
}

//second question
var hikedMountRainier = prompt('Have I ever summited Mt. Rainier?');
if (hikedMountRainier.toLowerCase() === 'yes' || hikedMountRainier.toLowerCase() === 'y') {
  alert(userName + ', that is not right. I have never summited Rainier.');
  console.log('Q2: ' + userName + ', that is not right. I have never summited Rainier.');
} else if (hikedMountRainier.toLowerCase() === 'no' || hikedMountRainier.toLowerCase() === 'n') {
  alert('Correct, ' + userName + '! I have been to the park but never summited.');
  console.log('Q2: Correct, ' + userName + '! I have been to the park but never summited.');
  correctGuesses++;
  console.log('correct guesses: ' + correctGuesses);
} else {
  alert('Please answer with either yes/no or y/n.');
  console.log('Q2: Please answer with either yes/no or y/n.');
}

//third question
var runBadCommand = prompt('Am I ever going to run \'rm -rf /\' ?');
if (runBadCommand.toLowerCase() === 'yes' || runBadCommand.toLowerCase() === 'y') {
  alert(userName + ', are you kidding? I will never do that.');
  console.log('Q3: ' + userName + ', are you kidding? I will never run that command.');
} else if (runBadCommand.toLowerCase() === 'no' || runBadCommand.toLowerCase() === 'n') {
  alert('Absolutely, ' + userName + '! that command is crazy. Not even once.');
  console.log('Q3: Absolutely, ' + userName + ', that command is crazy. Not even once.');
  correctGuesses++;
  console.log('correct guesses: ' + correctGuesses);
} else {
  alert('Please answer with either yes/no or y/n.');
  console.log('Q3: Please answer with either yes/no or y/n.');
}

//fourth question
var haveSibling = prompt('Do I have a sibling?');
if (haveSibling.toLowerCase() === 'yes' || haveSibling.toLowerCase() === 'y') {
  alert(userName + ', that is right! I have an older brother.');
  console.log('Q4: ' + userName + ', that is right! I have an older brother.');
  correctGuesses++;
  console.log('correct guesses: ' + correctGuesses);
} else if (haveSibling.toLowerCase() === 'no' || haveSibling.toLowerCase() === 'n') {
  alert('Sorry, ' + userName + ', that is not correct. I have an older brother.');
  console.log('Q4: Sorry, ' + userName + ', that is not correct. I have an older brother.');
} else {
  alert('Please answer with either yes/no or y/n.');
  console.log('Q4: Please answer with either yes/no or y/n.');
}

//fifth question - redirect to question six on yes otherwise end
var seenStarTrek = prompt('Do you think I have seen any Star Trek movies?');
if (seenStarTrek.toLowerCase() === 'yes' || seenStarTrek.toLowerCase() === 'y') {
  var seenYes = prompt(userName + ', how about that? Do you think II is my favorite?');
  console.log('Q5: ' + userName + ', how about that? Do you think II is my favorite?');
  correctGuesses++;
  console.log('correct guesses: ' + correctGuesses);
  //sixth question - only asked if fifth was yes
  if (seenYes.toLowerCase() === 'yes' || seenYes.toLowerCase() === 'y') {
    alert(userName + ', that is right! Wrath of Khan is pretty great.');
    console.log('Q6: ' + userName + ', that is right! Wrath of Khan is pretty great.');
    correctGuesses++;
    console.log('correct guesses: ' + correctGuesses);
  } else if (seenYes.toLowerCase() === 'no' || seenYes.toLowerCase() === 'n') {
    alert('Sorry, ' + userName + ' I think VI is pretty good, II is my favorite.');
    console.log('Q6: Sorry, ' + userName + ', I think VI is pretty good, II is my favorite.');
  } else {
    alert('Please answer with either yes/no or y/n.');
    console.log('Q6: Please answer with either yes/no or y/n.');
  }
} else if (seenStarTrek.toLowerCase() === 'no' || seenStarTrek.toLowerCase() === 'n') {
  alert('No problem, ' + userName + ', thank you for answering my quiz!');
  console.log('Q5: No problem, ' + userName + ', thank you for answering my quiz!');
} else {
  alert('Please answer with either yes/no or y/n.');
  console.log('Q5: Please answer with either yes/no or y/n.');
}

//seventh question - four attempts to guess the number
var guessYearCount = 0;
var userGuess;
while (guessYearCount < 4) {
  userGuess = prompt('Guess what year I was born in. You have 4 tries. Make sure to enter a number!');
  userGuess = parseInt(userGuess);
  if (userGuess === 1983) {
    alert('You guessed right! Nice work.');
    console.log('User Guessed Correctly on guess number ' + guessYearCount);
    correctGuesses++;
    break;
  } else if (userGuess > 1983) {
    alert('Your guess was too high. Try a lower number. I am not that young.');
    console.log('User Guessed Too High: ' + userGuess + ' on guess number ' + guessYearCount);
    guessYearCount++;
  } else if (Number.isNaN(userGuess) === true) {
    alert('Please enter a number, like 2016, not ...whatever you just did.');
    console.log('isNaN guess: ' + userGuess + ' guess number: ' + guessYearCount);
    guessYearCount++;
  } else {
    alert('Your guess was too low. Try a higher number - I am not that old.');
    console.log('User Guessed Too Low: ' + userGuess + ' on guess number ' + guessYearCount);
    guessYearCount++;
  }
}
if (userGuess !== 1983 && guessYearCount === 4) {
  alert('You ran out of guesses! Sorry.');
}

//eighth question - collect five strings and put in array */
var favoriteGamesArray = [];
var currentGameEntry;
for (i = 0; i < 5; i++) {
  currentGameEntry = prompt('Please enter one of your favorite games. I am asking for a total of five.');
  favoriteGamesArray.push(currentGameEntry);
  console.log('Current game entry: ' + currentGameEntry);
  console.log('Current array status: ' + favoriteGamesArray);
}

/*end of game: tell user how well they did */
alert(userName + ', you got ' + correctGuesses + ' questions out of 7 correct! Nice work...? Also, your favorite games are: ' + favoriteGamesArray);
console.log(userName + ', you got ' + correctGuesses + ' questions out of 7 correct! Nice work...? Also, your favorite games are: ' + favoriteGamesArray);
