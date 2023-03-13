function makeRequest() {
  fetch('https://retoolapi.dev/b6Dto8/occupancy_tracker')
    .then(response => response.json())
    .then(data => update(data))
    .catch(error => console.error(error));
}

function update(responseData) {
  console.log(responseData);

  const obj = responseData.find(item => item.id === 1);
  const occupancy = obj.occupancy;
  console.log(occupancy)
  

  const button = document.querySelector('#table3-1');
  button.style.backgroundColor = occupancy === false ? 'green' : 'red';
  console.log("testing")
}

setInterval(makeRequest, 5000); // 5000 milliseconds = 5 seconds

