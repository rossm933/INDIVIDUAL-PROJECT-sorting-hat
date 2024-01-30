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
    imageUrl: "https://static.wikia.nocookie.net/warner-bros-entertainment/images/1/11/Draco-malfoy-Harry-Potter-The-Deathly-Hallows-Part-II.jpg/revision/latest?cb=20161230145308"
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
    imageUrl: "https://static.wikia.nocookie.net/p__/images/c/ca/Cedric_Diffory_%22such_a_handsome_boy%22.jpeg/revision/latest?cb=20160306120749&path-prefix=protagonist"
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
   const cardsOnDom = (array) => {
   const studentsDomString = students.map(student => {
    return `<div class="card" style="width: 18rem;">
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

  cardsOnDom(students);

    


  const showAllButton = document.querySelector("#all-btn");
  const showGryfButton = document.querySelector("#gryf-btn");
  const showRavButton = document.querySelector("#rav-btn");
  const showHuffButton = document.querySelector("#huff-btn");
  const showSlyButton = document.querySelector("#sly-btn");
  
  // Each button has an event when clicked, to filter the specific house to render to the DOM
  showGryfButton.addEventListener("click", (e) => {
    if (e.target.id.includes("gryf-btn")) {
      const filterGryffindor = students.filter((student) => student.house === "Gryffindor")
      cardsOnDom(filterGryffindor)
      
    }
  });

  showRavButton.addEventListener("click", (e) => {
    if (e.target.id.includes("rav-btn")) {
      const filterRavenClaw = students.filter((student) => student.house === "Ravenclaw")
      cardsOnDom(filterRavenClaw)
    }
  });
  
  showHuffButton.addEventListener("click", (e) => {
    if (e.target.id.includes("huff-btn")) {
      const filterHufflePuff = students.filter((student) => student.house === "Hufflepuff")
      cardsOnDom(filterHufflePuff)
    }
  });

  showSlyButton.addEventListener("click", (e) => {
    if (e.target.id.includes("sly-btn")) {
      const filterSlytherin = students.filter((student) => student.house === "Slytherin")
      cardsOnDom(filterSlytherin)
    }
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
  document.getElementById("myForm").hidden = true;
  document.getElementById("filters").hidden = false;
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
    const [, id] = e.target.id.split("--");
    const index = students.findIndex((s) => s.id === Number(id));
    const student = students.find((e) => e.id === Number(id));
    students.splice(index, 1);
    console.log(students);
    cardsOnDom(students)

    if (filterToggle) {
      cardsOnDom(students)
    } else {
      filter(student.type)
    }
  }
});

const delButtons = document.querySelectorAll(".dlt-btn");
delButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const studentId = parseInt(e.target.id.split("--")[1]);
    const index = students.findIndex((student) => student.id === studentId);
    const expelledStudent = students.splice(index, 1)[0];
    expelledStudents.push(expelledStudent);
    renderExpelledCardsOnDom(expelledStudents);
    cardsOnDom(students);
  });
});

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


// This function puts the cards on the DOM as soon as the website loads. 
const startApp = () => {
  cardsOnDom(students);
}

startApp();
