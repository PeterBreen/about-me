var userName = prompt('What is your name?');
alert('Nice to meet you, ' + userName + '.');
console.log('userName is ' + userName);

var beenJoshuaTree;
var beenJoshuaTree = prompt('Have I ever been to Joshua Tree?');
if ((beenJoshuaTree.toLowerCase() === 'yes') || (beenJoshuaTree.toLowerCase() === 'y')) {
  alert(userName + ', that is right! I have been to Joshua tree.');
  console.log(userName + ', that is right! I have been to Joshua tree.');
} else if ((beenJoshuaTree.toLowerCase() === 'no') || (beenJoshuaTree.toLowerCase() === 'n')) {
  alert('Sorry, ' + userName + ' that is not correct. I have been to Joshua Tree.');
  console.log('Sorry, ' + userName + ' that is not correct. I have been to Joshua Tree.');
} else {
  alert('Please answer with either yes/no or y/n.');
  console.log('Please answer with either yes/no or y/n.');
}

/* reference from code demo yesterday
var agreeWithConditions = prompt('Do you agree with me? yes or no');
var yesString = 'yes';
if(agreeWithConditions.toUpperCase() === yesString.toUpperCase()){
  console.log('hurray! you agreed!');
} else {
  console.log('boooo, you did not agree');
}
*/
