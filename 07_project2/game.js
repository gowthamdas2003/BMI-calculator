const form = document.querySelector('form');
// this usecase will give empty value
//parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault(); //for preventing default submission

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('.results');

  if (height === ' ' || height < 0 || isNaN(height)) {
    results.innerHTML = 'please give a valid height';
  } else if (weight === ' ' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
