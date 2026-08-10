import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [marks, setMarks] = useState([0, 0, 0, 0]);

  function addStudent() {
    let percentage = marks.reduce((a, b) => a + Number(b), 0) / 4;

    setStudents([
      ...students,
      { name, marks, percentage }
    ]);

    setName("");
    setMarks([0, 0, 0, 0]);
  }

  return (
    <div>
      <h1>Student Marks</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Chemistry"
        onChange={e => marks[0] = e.target.value}
      />

      <input
        type="number"
        placeholder="Physics"
        onChange={e => marks[1] = e.target.value}
      />

      <input
        type="number"
        placeholder="English"
        onChange={e => marks[2] = e.target.value}
      />

      <input
        type="number"
        placeholder="Maths"
        onChange={e => marks[3] = e.target.value}
      />

      <button onClick={addStudent}>Add Student</button>

      <h2>Student Details</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Chemistry</th>
            <th>Physics</th>
            <th>English</th>
            <th>Maths</th>
            <th>Percentage</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.marks[0]}</td>
              <td>{s.marks[1]}</td>
              <td>{s.marks[2]}</td>
              <td>{s.marks[3]}</td>
              <td>{s.percentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
