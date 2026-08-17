// Array to store all students
let students = [];

function addStudent() {

    // Get values from HTML
    let name = document.getElementById("name").value.trim();

    let physics = Number(document.getElementById("physics").value);
    let chemistry = Number(document.getElementById("chemistry").value);
    let maths = Number(document.getElementById("maths").value);
    let biology = Number(document.getElementById("biology").value);

    // Check student name
    if (name === "") {
        alert("Please enter student name.");
        return;
    }

    // Check marks
    if (
        physics < 0 || physics > 100 ||
        chemistry < 0 || chemistry > 100 ||
        maths < 0 || maths > 100 ||
        biology < 0 || biology > 100
    ) {
        alert("Marks must be between 0 and 100.");
        return;
    }

    // Calculate percentage
    let total = physics + chemistry + maths + biology;
    let percentage = total / 4;

    // Create student object
    let student = {
        name: name,
        physics: physics,
        chemistry: chemistry,
        maths: maths,
        biology: biology,
        percentage: percentage
    };

    // Add student to array
    students.push(student);

    // Display students
    displayStudents();

    // Find topper
    findTopper();

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("physics").value = "";
    document.getElementById("chemistry").value = "";
    document.getElementById("maths").value = "";
    document.getElementById("biology").value = "";
}


// Display all students in table
function displayStudents() {

    let table = document.getElementById("studentTable");

    // Clear existing table
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


// Find student with highest percentage
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
