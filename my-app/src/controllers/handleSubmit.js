class Trivia {
  constructor(amount = 1, type = "") {
    this.amount = amount;
    this.type = type;
  }
}

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const values = Object.fromEntries(formData.entries());

  const trivia = new Trivia(values.number, values.dropdown);

  const baseURL = "http://opentdb.com/api.php";

  const apiURL = `${baseURL}?amount=${trivia.amount}&type=${trivia.type}`;

  fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("API Data:", data);
      if (data.results) {
        data.results.forEach((question, index) => {
          console.log(`${index + 1}. ${question.question}`);
        });
      } else {
        console.log("No results found in the API response");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  alert(`
      Form Submitted Successfully!
      Name: ${values.name}
      Selected Option: ${trivia.type}
      Selected Number: ${trivia.amount}
      API URL: ${apiURL}
    `);
};

export default handleSubmit;
