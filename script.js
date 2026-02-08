import  express from 'express';
import cors from 'cors';


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/reports', (req, res) => {
    let reports = JSON.pharse(LocalStorage.getItem('reports'))
    console.log(reports)
    res.json(reports);
});

app.post('/createReport', (req, res) => {
    let reports = JSON.pharse(LocalStorage.getItem('reports'))
    let newReport = req.body;
    localStorage.SetItem('report', JSON.stringify(newReport));
    };
    
});



app.listen(port);