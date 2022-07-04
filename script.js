// Lets target main element
const main = document.getElementById("main");

// Loading Placeholder
main.innerHTML = "<p>Loading...</p>"

// Fetch Studio Ghibli characters name

fetch("https://ghibliapi.herokuapp.com/people")
    .then((response) => {
        // console.log(response);
        return response.json();
    }).then((people) => {
        // console.log(people)
        // const names = people
        // .map((person) => {
        //     return person.name;
        // }).join("\n")
        // console.log(names)

        //Append character names to main element
        main.innerHTML = getListOfNames(people);
    });

//Create getListOfNames function that returns an unordered list of names

const getListOfNames = (people) => {
    const names = people
        .map((person) => {
            return `<li>${person.name}</li>`;
        })
        .join("\n");

    return `<ul>${names}</ul>`

}