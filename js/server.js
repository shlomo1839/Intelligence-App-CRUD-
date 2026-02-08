import express from 'express';
import mongoose from 'mongoose';
import Student from './models/student.js'
import cors from 'cors';
// Allows the frontend to communicate with the backend.

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({express: true}));
app.use(express.static('public'));


await mongoose.connect(`mongodb+srv://shlomo1839:4ym7tk4mdb@cluster0.kosyfnf.mongodb.net/collegeDB`);

app.get("./tasks",  async (req, res) => {
    try {
        const allStudents = await Student.find();
        res.json(allStudents)
    } catch (err) {
        res.status(500).send("Error fetching student")
    } 
});


app.post("/addTask", async (req, res) => {
    try {
        if (req.body.termsAccepted === 'on') {
            req.body.termsAccepted = true;
        }
    
        console.log("Data received:", req.body);
        const task = new Student(req.body);
        await task.save();
        console.log(task)
        res.send("Success")
    } catch (err) {
        console.error("The Error:", err);
        res.status(400).send("Error")
    }
});


app.put('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, completed } = req.body;

    const todoIndex = todos.findIndex(t => t.id === id);

    if (todoIndex === -1) {
        return res.status(404).json({ message: "Todo not found" });
    }

    todos[todoIndex] = {
        ...todos[todoIndex],
        title: title ?? todos[todoIndex].title,
        completed: completed ?? todos[todoIndex].completed
    };

    res.json(todos[todoIndex]);
});

app.listen(PORT, () => { console.log(`server is running on http://localhost:${PORT}`)})
