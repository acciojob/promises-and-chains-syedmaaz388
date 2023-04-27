const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const submitBtn = document.getElementById('btn');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); 
  const delayPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(ageInput.value) >= 18) {
        resolve({ name: nameInput.value, age: Number(ageInput.value) });
      } else {
        reject({ name: nameInput.value });
      }
    }, 4000);
  });

  delayPromise
    .then((data) => {
      alert(`Welcome, ${data.name}. You can vote.`);
    })
    .catch((error) => {
      alert(`Oh sorry ${error.name}. You aren't old enough.`);
    });
});
function validateForm() {
  return new Promise((resolve, reject) => {
    const ageInput = document.getElementById('age');
    const nameInput = document.getElementById('name');
    
    const age = parseInt(ageInput.value);
    const name = nameInput.value.trim();

    if (age && name) {
      if (age >= 18) {
        setTimeout(() => {
          resolve(`Welcome, ${name}. You can vote.`);
        }, 4000);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    } else {
      reject('Please fill in all the required fields.');
    }
  });
}

document.getElementById('myForm').addEventListener('submit', (event) => {
  event.preventDefault();

  validateForm()
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
});
