const endpoint = 'https://rwba7567.github.io/EID/';

const updateButtonStatus = (status) => {
  const button = document.querySelector('#table1-3');
  button.style.backgroundColor = status === 'On' ? 'green' : 'red';
};

fetch(endpoint)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    updateButtonStatus(data.status);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });