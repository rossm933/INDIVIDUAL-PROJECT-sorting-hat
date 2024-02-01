let filterToggle = true;

const students = [
  {
    id: 1,
    name: "Harry Potter",
    house: "Gryffindor",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg"
  },
  {
    id: 2,
    name: "Ron Wealsey",
    house: "Gryffindor",
    imageUrl: "https://i.pinimg.com/736x/2e/c4/65/2ec465a5bb13a862365e565d992f7abc.jpg"
  },
  {
    id: 3, 
    name: "Hermione Granger",
    house: "Gryffindor",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg"
  },
  {
    id: 4,
    name: "Draco Malfoy",
    house: "Slytherin",
    imageUrl: "https://qph.cf2.quoracdn.net/main-qimg-c547b90089ebbfa58187931637360c73-lq"
  },
  {
    id: 5,
    name: "Luna Lovegood",
    house: "Ravenclaw",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c2/LunaLovegood.jpeg"
  },
  {
    id: 6,
    name: "Severus Snape",
    house: "Slytherin",
    imageUrl: "https://media.harrypotterfanzone.com/severus-snape-order-of-the-phoenix-portrait.jpg"
  },
  {
    id: 7,
    name: "Cedric Diggory",
    house: "Hufflepuff",
    imageUrl: "https://image.janitorai.me/bot-avatars/c25ac5b3-ac4b-46a6-a071-dd44d6783b5e_3fcdd0bc-0e07-4a86-b0b3-5b3443465cff.jpg"
  },
  {
    id: 8,
    name: "Cho Chang",
    house: "Ravenclaw",
    imageUrl: "https://s.abcnews.com/images/GMA/katie-leung-asian-racist-attack-02-ht-llr-210311_1615509383220_hpMain.jpg"
  }
  ];


 const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};
// This a for loop to pass all the information from the array of students to the cards on the DOM
   const cardsOnDom = (students) => {
   let studentsDomString = "<legend>First Year Students:</legend>";
   students.map(student => {
    studentsDomString += 
    `<div class="card firstCard" style="width: 18rem;">
    <img src="${student.imageUrl}" class="card-img-top" alt="${student.name}">
    <div class="card-body">
       <h5 class="card-title">Name: ${student.name}</h5>
       <p class="card-text">House: ${student.house}</p>
       <button class="dlt-btn" id="delete--${student.id}">Expel</button>
</div>
</div>`
   })
    renderToDom("#app", studentsDomString);
  };

   //created a filter that creates a new array of the specific house we want to filter.
  const filter = (studentHouse) => {
    const typeArray = [];
  
    students.map(student => {
      if(student.house === studentHouse) {
        typeArray.push(student);
      }
        cardsOnDom(typeArray);
    });
  };


 // Made variables for each button and assigned them id's from the html"
 const showAllButton = document.querySelector("#all-btn");
 const showGryfButton = document.querySelector("#gryf-btn");
 const showRavButton = document.querySelector("#rav-btn");
 const showHuffButton = document.querySelector("#huff-btn");
 const showSlyButton = document.querySelector("#sly-btn");

 // Each button has an event when clicked, to filter the specific house to render to the DOM
 showGryfButton.addEventListener("click", () => {
   filter("Gryffindor")
 });

 showRavButton.addEventListener("click", () => {
   filter("Ravenclaw")
 });
 
 showHuffButton.addEventListener("click", () => {
   filter("Hufflepuff")
 });

 showSlyButton.addEventListener("click", () => {
   filter("Slytherin")
 });

 showAllButton.addEventListener("click", () => {
   cardsOnDom(students);
 });


  document.getElementById("begin-btn").addEventListener("click", () => {
    document.getElementById("welcome").hidden = true;
    document.getElementById("myForm").hidden = false;
  },
    false,
  );

  document.getElementById("submit-button").addEventListener("click", () => {
  //document.getElementById("myForm").hidden = true;
  document.getElementById("filters").hidden = false;
  document.getElementById("app").hidden = false;
},
    false,
);
 

  // Selecting the form element from the html
const form = document.querySelector("form");

// This is a create new student function and randomly assigning a student a house. Then render cards on the DOM at the end so that the new student is added to the array we already have.
const createNewStudent = (e) => {
  e.preventDefault();
const houses = ['Gryffindor', 'Ravenclaw', 'Huffelpuff', 'Slytherin']
const houseIndex = Math.floor(Math.random() * 4)
  const newStudentObj = {
    id: students.length + 1,
    name:  document.querySelector("#name").value,
    image: document.querySelector("#image").value,
    house: houses[houseIndex],
  };
  students.push(newStudentObj);
  form.reset();
  cardsOnDom(students);
};

form.addEventListener("submit", createNewStudent);



//Created the delete function by selecting the app id in th html and making a delete button in the studentsdomString. 
const app = document.querySelector("#app");
app.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    document.getElementById("bad-students").hidden = false;
    const [, id] = e.target.id.split("--");
    const index = students.findIndex((s) => s.id === Number(id));
    // const student = students.find((e) => e.id === Number(id));
    expelledStudents.push(...students.splice(index, 1))
    cardsOnDom(students);
    renderExpelledCardsOnDom(expelledStudents)
  }
    false;
})

const expelledStudents = [];

expelledStudents.push( {
  id: 9,
  name: "Lord Voldemort",
  imageUrl: "https://www.looper.com/img/gallery/voldemorts-most-positive-qualities-in-harry-potter/intro-1627529429.jpg"
});

expelledStudents.push( {
  id: 10,
  name: "Peter Pettigrew",
  imageUrl:"https://i.pinimg.com/736x/ad/b5/2f/adb52f27ded173bae8b7bf7cd2e7476d.jpg"
});

const renderExpelledCardsOnDom = (expelledStudents) => {
  let domString = "<legend>Voldy's Army:</legend>";
  expelledStudents.map(expelledStudent => {
    domString +=
    `
    <div class="expelledCard" style="width: 18rem;">
      <img src="${expelledStudent.imageUrl}" class="card-img-top" alt="${expelledStudent.name}">
      <div class="card-body">
         <h5 class="card-title">Name: ${expelledStudent.name}</h5>
         <p class="card-text">I have been expelled</p>
  </div>
</div>`;
  })
  renderToDom("#bad-students", domString)
};

renderExpelledCardsOnDom(expelledStudents);



// This function puts the cards on the DOM as soon as the website loads. 
const startApp = () => {
  cardsOnDom(students);
};

startApp()
