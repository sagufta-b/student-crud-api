const students = require('../data/students');

// GET all students
exports.getStudents = (req, res) => {
    res.json(students);
};

// GET student by ID
exports.getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
};

// POST add new student
exports.addStudent = (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        department: req.body.department
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
};

// PUT update student
exports.updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    student.name = req.body.name || student.name;
    student.department = req.body.department || student.department;

    res.json(student);
};

// DELETE student
exports.deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    students.splice(index, 1);
    res.json({ message: "Student deleted successfully" });
};
