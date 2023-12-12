import { useState, useEffect } from 'react';
import './User.css';
import HeaderDefault from '../components/HeaderDefault.js';
import Footer from '../components/Footer.js';
import 'wowjs/css/libs/animate.css';
import { WOW } from 'wowjs';

const englishNames = [
  'James', 'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Isabella', 'Sophia', 'Jackson', 'Mia',
  'Lucas', 'Harper', 'Ethan', 'Aiden', 'Elijah', 'Grace', 'Carter', 'Lincoln', 'Charlotte', 'Amelia'
];

const generateRandomMarks = () => Math.floor(Math.random() * 100) + 1;
const generateRandomName = () => englishNames[Math.floor(Math.random() * englishNames.length)];

const studentData = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: generateRandomName(),
  marks: {
    english: generateRandomMarks(),
    math: generateRandomMarks(),
    science: generateRandomMarks(),
  },
}));

const calculateAggregateMarks = (marks) => {
  const totalMarks = Object.values(marks).reduce((sum, mark) => sum + mark, 0);
  return totalMarks;
};

const sortStudentsByAggregateMarks = (students) => {
  return students.sort((a, b) => calculateAggregateMarks(b.marks) - calculateAggregateMarks(a.marks));
};

const User = ({ logout }) => {

  useEffect(() => {
    document.title = 'ABC | Results';
    const wow = new WOW();
    wow.init();
  }, []);

  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(sortStudentsByAggregateMarks(studentData));
  }, []);

  return (
    <>
      <HeaderDefault />
      <div className="student-table-container">
        <h1 style={{ textAlign: 'center' }}>Exam Results</h1>
        <table className="student-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Aggregate Marks</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{calculateAggregateMarks(student.marks)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <button className="btn btn-primary" onClick={logout}>
          Logout
        </button>
      </div>
      <Footer />
    </>
  );
};

export default User;
