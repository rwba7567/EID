const url = "172.20.10.6";

function checkButtonStatus() {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      setTimeout(checkButtonStatus, 1000); // check again in 1 second
    })
    .catch((error) => {
      console.log(error);
      setTimeout(checkButtonStatus, 1000); // check again in 1 second
    });
}

checkButtonStatus();
