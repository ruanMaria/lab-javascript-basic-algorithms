// Iteration 1: Names and Input
let hacker1 = 'João';

console.log(`The driver\'s name is ${hacker1}.`);

let hacker2 = 'Francisco';

console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equaly long names, ${hacker1.length} characters!`
  );
}

// other solution option
switch (true) {
  case hacker1.length > hacker2.length:
    console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    );
    break;
  case hacker1.length < hacker2.length:
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
    break;
    defaut: console.log(
      `Wow, you both have equaly long names, ${hacker1.length} characters!`
    );
}

// Iteration 3: Loops
let driver = [];
for (let i = 0; i < hacker1.length; i++) {
  driver.push(hacker1[i]);
}
console.log(hacker1.split('').join(' ').toUpperCase());

let navigatorReversed = [];
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorReversed.push(hacker2[i]);
}

console.log(navigatorReversed.join(''));

let names = [hacker1, hacker2];
console.log(names);

names.sort();
console.log(names);

if (hacker1.length < hacker2.length) {
  console.log(`The ${hacker1} name goes first.`);
} else if (hacker2.length < hacker1.length) {
  console.log(`Yo, the ${hacker2} goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}
