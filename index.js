const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
// Output
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const ticker = document.querySelector("#ticker");
const link = document.querySelector("#link");
const change = document.querySelector("#change");

const outputData = (response) => {
  if (!response.data.symbol) {
    return (name.textContent = `Error: ${input.value.toUpperCase()} not found`);
  }
  name.textContent = `${response.data.profile.companyName}`;
  price.textContent = `$${response.data.profile.price}`;
  ticker.textContent = `${response.data.symbol}`;
  link.setAttribute("href", `${response.data.profile.website}`);
  change.textContent = `${response.data.profile.changesPercentage}`;
};

submit.addEventListener("click", () => {
  const inputValue = input.value;
  if (inputValue) {
    axios
      .get(
        `https://financialmodelingprep.com/api/v3/company/profile/${inputValue}`
      )
      .then(function (response) {
        outputData(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
});
