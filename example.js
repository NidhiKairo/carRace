// function fetchData() {

// fetch('https://api.hatchways.io/assessment/students')
// .then (response => {
   
//     if(!response.ok) {
//         throw Error("Error")
//     }
//   return response.json();
  
// }).then(data => {
//     console.log(data);
//     const html = data.map(students => {
//         return `<p> Name: ${user.firstName } </p>`
//     }).join ("");
//     console.log(html);
//     document.querySelector('#app').insertAdjacentElement('afterbegin', html);
// })
// . catch (error => {
//     console.log(error);
// })

// }

// fetchData();

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('students');
const url = 'https://api.hatchways.io/assessment/students';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let students = data.results;
  return students.map(function(student) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = author.picture.medium;
    span.innerHTML = `${student.firstName} `;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});