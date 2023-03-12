fetch('https://rwba7567.github.io/EID/')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Use data to update your website here
  })
  .catch(error => {
    console.error('Error:', error);
  });