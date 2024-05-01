import express from 'express';
import {students} from './models/data.js';
import fs from 'fs';
import { greet } from './greet.js';
import { PORT } from './config/env.js';


console.log(PORT)

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('How you dey');
})

app.get('/students', ( req,res) => {
    res.json(students)
})


app.post('/student',(req,res) => {

    const {name,age } = req.body;
   let id = students.length + 1;

    const newStudent = {
        id,
        name,
        age
    }
    students.push(newStudent);

    app.get('/student/:id',(req,res) => {
        const {id} = req.params;
        const {name,age} = req.body
        const student =student.find((student) => student.id === parseInt(id))
        if (! student){
            return res.status(404).json({error:'Student not found'})
        }
        student.name = name
        student.age = age
    
    
    })

    let newStudents = students;

    let studentString = JSON.stringify(newStudents);

    fs.writeFileSync('./data.js',`export let students = ${studentString}`);
    return res.json(newStudents)


})






app.listen(3000,() => {
    console.log(`server is running on url https://localhost:3000`)
})
