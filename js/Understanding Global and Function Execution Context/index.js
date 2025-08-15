let age;

function displayAge(age) {
  console.log("My Age: " + age);
}

displayAge(33);

function changeAge(newAge) {
  age = newAge;
  displayAge(age);
}


displayAge(33);

changeAge(34);
