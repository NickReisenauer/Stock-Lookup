axios
  .get(`https://financialmodelingprep.com/api/v3/company/profile/AAPL`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
