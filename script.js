fetch('/buttonStatus')
  .then(response => response.json())
  .then(data => {
    // do something with the received data
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
