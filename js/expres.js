import express from 'express';
import cors from 'cors';


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({express: true}));

await mongoose.connect(`mongodb+srv://shlomo1839:4ym7tk4mdb@cluster0.kosyfnf.mongodb.net/collegeDB`);



app.get("/reorts", async(req, res) => {
    try {
        const allRerports = localStorage.getItem("reports");
        res.pharse(allRerports)
    } catch (err) {
        res.status(500).send("Error fetching reports")
    }
});

app.post("/addReport", async (req, res) => {
    try {
        const report = newReport
    }
})