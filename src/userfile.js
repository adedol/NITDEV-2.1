import express from "express";



const app = express()

app.use(express.json())

app.get('/', (req,res) =>{
    res.send('how is everybody?');
})


// Create a new user
app.post('/create_user', (req, res) => {
    const { name, email, password } = req.body;

    // Check if email is already used
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'Email already exists!' });
    }

    const newUser = new User(name, email, password);
    users.push(newUser);
    return res.status(201).json({ message: 'User created successfully', user_id: newUser.id });
});

// Update name of a user
app.put('/update_name/:user_id', (req, res) => {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = users.find(user => user.id === user_id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    user.name = name;
    return res.status(200).json({ message: 'Name updated successfully' });
});

// Get details of a user
app.get('/get_user/:user_id', (req, res) => {
    const { user_id } = req.params;

    const user = users.find(user => user.id === user_id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ id: user.id, name: user.name, email: user.email });
});

// Get all users
app.get('/get_all_users', (req, res) => {
    return res.status(200).json(users);
});

const PORT = process.env.PORT || 3000;
app.listen(3000,() => {
    console.log(`server is running on url https://localhost:3000`)
})