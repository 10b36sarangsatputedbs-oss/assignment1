
let students = [];

function addStudent() {


    let name = document.getElementById("name").value.trim();

    let physics = Number(document.getElementById("physics").value);
    let chemistry = Number(document.getElementById("chemistry").value);
    let maths = Number(document.getElementById("maths").value);
    let biology = Number(document.getElementById("biology").value);

    
    if (name === "") {
        alert("Please enter student name.");
        return;
    }


    if (
        physics < 0 || physics > 100 ||
        chemistry < 0 || chemistry > 100 ||
        maths < 0 || maths > 100 ||
        biology < 0 || biology > 100
    ) {
        alert("Marks must be between 0 and 100.");
        return;
    }


    let total = physics + chemistry + maths + biology;
    let percentage = total / 4;

   
    let student = {
        name: name,
        physics: physics,
        chemistry: chemistry,
        maths: maths,
        biology: biology,
        percentage: percentage
    };

    students.push(student);

  
    displayStudents();

    findTopper();

 
    document.getElementById("name").value = "";
    document.getElementById("physics").value = "";
    document.getElementById("chemistry").value = "";
    document.getElementById("maths").value = "";
    document.getElementById("biology").value = "";
}



function displayStudents() {

    let table = document.getElementById("studentTable");


    table.innerHTML = "";

    students.forEach(function(student) {

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.physics}</td>
            <td>${student.chemistry}</td>
            <td>${student.maths}</td>
            <td>${student.biology}</td>
            <td>${student.percentage.toFixed(2)}%</td>
        `;

        table.appendChild(row);
    });
}



function findTopper() {

    if (students.length === 0) {
        document.getElementById("topper").innerHTML = "";
        return;
    }

    let topper = students[0];

    for (let i = 1; i < students.length; i++) {

        if (students[i].percentage > topper.percentage) {
            topper = students[i];
        }
    }

    document.getElementById("topper").innerHTML =
        "Topper: " + topper.name +
        " (" + topper.percentage.toFixed(2) + "%)";
}
