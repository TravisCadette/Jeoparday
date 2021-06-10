"use strict";
window.onload = function () {
    console.log("hello world"); // this got logged first
    // Asynchronous code
    fetch("http://jservice.io/api/random") // GET request
        .then((response) => {
            console.log("success!!!", response); // this got logged third
            return response.json(); // parse the Response object
        })
        .then((data) => {
            console.log("random data", data); // this got logged last
            // this is where you do your DOM manipulation logic
            // 1. extract the data the we need from the API
            const question = data[0].question;
            const answer = data[0].answer;
            const category = data[0].category.title;
            const questionContainer = document.querySelector(
                ".js-question-container"
            );
            console.log(question, answer, category);
            // 2. Create a h2 tag and set it to the question
            const questionElement = document.createElement("h2");
            questionElement.innerText = `Question: ${question}`;
            questionContainer.append(questionElement);
            // 3. Create a h3 tag and set it to the answer
            const answerElement = document.createElement("h3");
            answerElement.innerText = `Answer: ${answer}`;
            questionContainer.append(answerElement);
            // 4. Create a p tag and set it to the category
            const categoryElement = document.createElement("p");
            categoryElement.innerText = `Category: ${category}`;
            questionContainer.append(categoryElement);
        })
        .catch((error) => {
            console.log(error);
            const questionContainer = document.querySelector(
                ".js-question-container"
            );
            // this is where you display some error message on the screen
            const errorElement = document.createElement("p");
            errorElement.innerText = `Error: ${error}`;
            errorElement.classList.add("error");
            questionContainer.append(errorElement);
        });
    fetch("http://jservice.io/api/categories?count=10") // Categories
    .then((response) => response.json()) // arrow syntax
    .then((data) => {
        data.forEach(rug => {
            const list = document.querySelector(".js-topcategories-list")
            const listItem = document.createElement("li")
            listItem.innerText = rug.title
            list.append(listItem)
        });
    })

    fetch("http://jservice.io/api/clues") // GET request
        .then((response) => response.json()) // simplified arrow syntax
        .then((data) => {
            console.log("clues data", data);
        })
        .catch((error) => console.log(error));
    // // Example of synchronous code
    // console.log("another hello world"); // this got logged second
    // const sum = 1 + 10;
    // console.log("sum", sum);
    const questionsForm = document.querySelector(".js-questions-form");
    questionsForm.onsubmit = onQuestionsFormSubmit;
};

function onQuestionsFormSubmit(event) {
    // prevent the default behavior of a form
    event.preventDefault();
    console.log("hello from onQuestionsFormSubmit");
    // make an API call to get the questions from the jService API
    const userInput = document.querySelector(".js-questions-form-input").value;
    fetch(`http://jservice.io/api/random?count=${userInput || 10}`)
        .then((response) => response.json())
        .then((data) => {
            console.log("onQuestionsFormSubmit data", data);
            // DOM manipulation to display the results within the unordered list
            const questionsFormHeading = document.querySelector(
                ".js-questions-form-heading"
            );
            const questionsList = document.querySelector(".js-questions-list");
            questionsFormHeading.innerText = `${data.length} Random Trivia Questions`;
            questionsList.innerText = "";
            for (let index = 0; index < data.length; index++) {
                const question = data[index].question;
                const questionListItem = document.createElement("li");
                questionListItem.innerText = `Question ${index + 1}: ${question}`;
                questionsList.append(questionListItem);
            }
            // refactor the for loop ^^ to use forEach()
        })
        .catch((error) => console.log(error));
}