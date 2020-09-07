//Lesson 15

var myNum = 10;
var myStr = 'строка';
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = {
    first: "First Name",
    last: "Last Name"
};
console.log(myNum);
console.log(myStr);
console.log(myBool);
console.log(myArr);
console.log(myObj);

var decimal2 = myNum.toFixed(2);

var i = 0;
console.log(++i);
console.log(i++);
console.log(i);
console.log(--i);
console.log(i--);

var myTest = 20;
myTest  += myNum;
console.log(myTest);

myTest -= 10;
console.log(myTest);

myTest *= 2;
console.log(myTest);

myTest /= 2;
console.log(myTest);

myTest %= 3;
console.log(myTest);

var myPi = Math.PI;
console.log(myPi);

var myRound = Math.round(89.279);
console.log(myRound);

var myRandom = Math.random()*10;
console.log(myRandom);

var myPow = Math.pow(3,5);
console.log(myPow);

var strObj = {
    str: 'Мама мыла раму, рама мыла маму'
}
strObj.length = strObj.str.length;
console.log(strObj);

var isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);

var strReplace = strObj.str.replace('мыла', 'моет');
strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log(strReplace);

console.log(myStr.toUpperCase());
console.log(myStr.toLowerCase());

//Lesson 16

var userObj = {
    firstName: 'Andrei',
    lastName: 'Kramarenko',
    age: 37,
    fullName: function(){
        return `${userObj.firstName} ${userObj.lastName}`;
    }
};

console.log(userObj.fullName())

function defUpperStr(str) {
    return (str || 'Default text').toUpperCase();
}
console.log(defUpperStr('My text'));
console.log(defUpperStr());


function evenFn(n) {
    let arr = [];
  
    for (let i = 1; i <= n; i++) if (i % 2 === 0) arr.push(i);
  
    return arr;
  }
  
  console.log(evenFn(10));



function weekFn(cond) {
  let str = '';

  switch (cond) {
    case 1:
      str = 'Понедельник';
      break;
    case 2:
      str = 'Вторник';
      break;
    case 3:
      str = 'Среда';
      break;
    case 4:
      str = 'Четверг';
      break;
    case 5:
      str = 'Пятница';
      break;
    case 6:
      str = 'Суббота';
      break;
    case 7:
      str = 'Воскресенье';
      break;
    default:
      str = null;
  }

  return str;
};

console.log(weekFn(1));
console.log(weekFn(2));
console.log(weekFn(8));


function ageClassification(num) {
    return num > 0
      ? num > 24
        ? num > 44
          ? num > 65
            ? num > 75
              ? num > 90
                ? num > 122
                  ? null
                  : 'долгожители'
                : 'старческий возраст'
              : 'пожилой возраст'
            : 'средний возраст'
          : 'молодой возраст'
        : 'детский возраст'
      : null;
  }
console.log('-1 :', ageClassification(-1)); 
console.log('5 :', ageClassification(5)); 
console.log('34 :', ageClassification(34)); 
console.log('50 :', ageClassification(50)); 
console.log('65.1 :', ageClassification(65.1)); 
console.log('80 :', ageClassification(80)); 
console.log('110 :', ageClassification(110)); 
console.log('130 :', ageClassification(130));


function oddFn(n) {
    let arr = [];
    let i = 0;
  
    while (i++ < n) if (i % 2 !== 0) arr.push(i);
  
    return arr;
  }
  
  console.log(oddFn(10)); 
  console.log(oddFn(15)); 
  console.log(oddFn(20));


  function mainFunc(a, b, cb) {
    if (cb && typeof cb === 'function') return cb(a, b);
  
    return false;
  }
  function cbRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function cbPow(num, pow) {
    return Math.pow(num, pow);
  }
  function cbAdd(a, b) {
    return a + b;
  }
  console.log(mainFunc(2, 5, cbRandom)); 
console.log(mainFunc(2, 5, cbPow)); 
console.log(mainFunc(2, 5, cbAdd)); 
console.log(mainFunc(2, 5, 'not a func')); 
