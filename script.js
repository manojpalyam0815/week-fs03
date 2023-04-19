const form = document.querySelector('#my-form');
const submittedDataDiv = document.querySelector('#submitted-data');
const maleRadio = document.querySelector('#male-radio');
const femaleRadio = document.querySelector('#female-radio');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = event.target.elements.name.value;
  const gender = event.target.elements.gender.value;
  const newElement = document.createElement('div');
  newElement.textContent = `Name: ${name}  ,  Gender: ${gender}`;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    newElement.remove();
  });
  newElement.appendChild(deleteButton);
  submittedDataDiv.appendChild(newElement);
  form.reset();
});

maleRadio.addEventListener('click', () => {
  filterByGender('male');
});

femaleRadio.addEventListener('click', () => {
  filterByGender('female');
});

function filterByGender(gender) {
  const elements = submittedDataDiv.querySelectorAll('div');
  elements.forEach((element) => {
    if (element.textContent.includes(`Gender: ${gender}`)) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
}