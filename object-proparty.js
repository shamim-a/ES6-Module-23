const students = [
    {id: 22, name:'Tasniya Farin'},
    {id: 32, name:'Nazmul Hossain'},
    {id: 52, name:'Shahrin Fariya'},
    {id: 62, name:'Shakib Khan'}
];
const newStudents = students.map(s=>s.name);
const newStudentsIds = students.map(s=>s.id);
const newStudentsBigger = students.filter(s=>s.id > 40);
const biggerOne = students.find(s=>s.id >50);

/* for (let i = 0; i < students.length; i++) {
    const inputs = students[i].name;
    newStudents.push(inputs);
} */
console.log(biggerOne);