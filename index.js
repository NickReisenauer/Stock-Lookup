const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
// Output
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const ticker = document.querySelector("#ticker");
const link = document.querySelector("#link");
const change = document.querySelector("#change");
const error = document.querySelector("#error");

const outputData = (response) => {
  change.classList.remove("positive");
  change.classList.remove("negative");
  if (!response.data.symbol) {
    return errorHandler();
  }
  if (response.data.profile.changesPercentage.includes("+")) {
    change.classList.add("positive");
  } else {
    change.classList.add("negative");
  }
  error.textContent = "";
  name.textContent = `${response.data.profile.companyName}`;
  price.textContent = `$${response.data.profile.price}`;
  ticker.textContent = `${response.data.symbol}`;
  link.setAttribute("href", `${response.data.profile.website}`);
  change.textContent = `${response.data.profile.changesPercentage}`;
  document.querySelector(".container").classList.remove("hidden");
};

const errorHandler = () => {
  document.querySelector(".container").classList.add("hidden");

  error.textContent = `Error: ${input.value.toUpperCase()} not found`;
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
