let h3 = document.querySelector('#temp');
let scale = prompt("What scale (C or F) do you want to use?", "F or C");
let temp = prompt("How hot is it?", "99");

function convertTemp(scale, temp) {
  console.log(scale, temp);
  scale = scale.toLowerCase();
  let returnVal;
  let oppositeVal = scale === 'c' ? 'Fahrenheit' : 'Celcius';
  temp = parseInt(temp);
  if(!isNaN(temp)) {
    returnVal = scale === 'c' ? (1.8 * temp) + 32 : (5 / 9) * (temp - 32);
    h3.innerText = `Your temperature is ${returnVal} ${oppositeVal}`;
  } else {
    let scale = prompt("What scale (C or F) do you want to use?", "F or C");
    let temp = prompt("How hot is it?", "99");
    convertTemp(scale, temp);
  }
}

convertTemp(scale, temp);

h3.addEventListener('click', (e) => {
  let valueArr = e.target.innerText.split(' ');
  scale = valueArr[valueArr.length - 1] === 'Celcius' ? 'C' : 'F';
  temp = valueArr[valueArr.length - 2];
  convertTemp(scale, temp);
});
