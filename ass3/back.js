import { useState } from "react";

function App() {
    const [students, setStudents] = useState([]);

    const [name, setName] = useState("");
    const [chem, setChem] = useState("");
    const [phy, setPhy] = useState("");
    const [eng, setEng] = useState("");
    const [maths, setMaths] = useState("");

    function addStudent() {
        let total =
            Number(chem) +
            Number(phy) +
            Number(eng) +
            Number(maths);

        let percentage = total / 4;

        let student = {
            name: name,
            chem: chem,
            phy: phy,
            eng: eng,
            maths: maths,
            percentage: percentage
        };

        setStudents([...students, student]);

        setName("");
        setChem("");
        setPhy("");
        setEng("");
        setMaths("");
    }

    return (
        <div>
            <h1>Student Marks</h1>

            <input
                type="text"
                placeholder="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="number"
                placeholder="Chemistry"
                value={chem}
                onChange={(e) => setChem(e.target.value)}
            />

            <input
                type="number"
                placeholder="Physics"
                value={phy}
                onChange={(e) => setPhy(e.target.value)}
            />

            <input
                type="number"
                placeholder="English"
                value={eng}
                onChange={(e) => setEng(e.target.value)}
            />

            <input
                type="number"
                placeholder="Maths"
                value={maths}
                onChange={(e) => setMaths(e.target.value)}
            />

            <button onClick={addStudent}>
                Add Student
            </button>

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
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.chem}</td>
                            <td>{student.phy}</td>
                            <td>{student.eng}</td>
                            <td>{student.maths}</td>
                            <td>{student.percentage}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;