
require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const { LocalStorage } = require('node-localstorage');
global.localStorage = new LocalStorage('./scratch');


const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
const port = 5000;

// Admin login API
app.post('/admin/login', (req, res) => {
    const { email, password } = req.body;
    if (
        email === process.env.ADMIN_EMAIL &&
        password === process.env.ADMIN_PASSWORD
    ) {
        return res.json({ success: true, message: 'Admin logged in' });
    }
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// Get all users for admin panel
app.get('/admin/users', async (req, res) => {
    try {
        const users = await signindata.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
});

// Update user data for admin panel
app.put('/admin/users/:id', async (req, res) => {
    try {
        const { username, email, password, phoneNumber } = req.body;
        await signindata.findByIdAndUpdate(req.params.id, {
            username,
            email,
            password,
            phoneNumber
        });
        res.json({ success: true, message: 'User updated' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user' });
    }
});

// Get all bookings API
app.get('/admin/bookings', async (req, res) => {
    try {
        const bookings = await parkingBook.find({});
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings' });
    }
});

mongoose.connect('mongodb://localhost:27017/projectdata', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userdata = new mongoose.Schema({
    email: String,
    username: String,
    password: String
});
const signindata = mongoose.model('userdata', userdata);

const bookData = new mongoose.Schema({
    email: String,
    phoneNumber: String,
    carNumber: String,
    date: String,
    time: String,
})
const parkingBook = mongoose.model('bookData', bookData);

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/signin.html");
});


app.post('/register', async (req, res) => {
    const { email, username, password } = req.body;

    try {
        const existingUser = await signindata.findOne({ email });
        const existingUsername = await signindata.findOne({ username });

        if (existingUser) {
            res.status(400).json({ message: 'Email is already taken' });
            return;
        }

        if (existingUsername) {
            res.status(400).json({ message: 'Username is already taken' });
            return;
        }

        await signindata.create({ email, username, password });
        res.status(200).send("User successfully Created!!");
    } catch (error) {
        console.error(error);
    }
});

app.get('/showSlots', async (req, res) => {
    const email = localStorage.getItem("emailaddress");

    try {
        const slots = await parkingBook.find({ email: email });

        return res.status(200).json({ success: true, slots, message: "Data get successfully" });
    } catch (error) {
        console.log(error);
    }
})

app.get('/health', (req, res) => {
    res.status(200).send('Server is up');
});


app.post('/login', async (req, res) => {
    const { email, username, password } = req.body;
    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }

    try {
        const existingUser = await signindata.findOne({ email });
        if (!existingUser) {
            res.status(400).json({ message: "Email does not exist" });
            return;
        }

        if (existingUser.username !== username) {
            res.status(400).json({ message: "Username is incorrect" });
            return;
        }

        if (existingUser.password !== password) {
            res.status(400).json({ message: "Password is incorrect" });
            return;
        }

        res.status(200).send("User successfully logged in!");
        localStorage.setItem('emailaddress', email)
    } catch (error) {
        console.log(error);
    }
});

app.post('/booking', async (req, res) => {
    const { email, phoneNumber, carNumber, date, time } = req.body;

    try {
        const store = await parkingBook.create({ email, phoneNumber, carNumber, date, time });

        console.log(store);

        return res.json({ success: true, message: "Booking done" })
    } catch (error) {
        return res.json({ success: false, message: "Get error on booking" })
    }
})

app.get('/admin', (req, res) => {
    res.send("This is from the admin panel")
})

app.get('/showprofile', async (req, res) => {
    try {
        const email = localStorage.getItem('emailaddress')
        console.log(email)
        console.log(localStorage.getItem('emailaddress'))
        try {
            const userProfile = await signindata.findOne({ email: email });
            res.json(userProfile);
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }
});


app.post('/resetemail', async (req, res) => {
    const { email, newemail, password } = req.body;
    const checkemail = await signindata.findOne({ email: email });
    const oldemail = localStorage.getItem('emailaddress')

    try {
        const existemail = await signindata.findOne({ email: oldemail });
        if (existemail) {
            res.status(400).json({ message: "Email are already exists" })
            return;
        }

        if (checkemail.password != password) {
            res.status(400).json({ message: "Password are not match" })
            return;
        }

        if (email != oldemail) {
            res.status(400).json({ message: "Old email are not same" })
            return;
        }

        await signindata.updateOne({ email: email }, { $set: { email: newemail } });
        res.status(200).json({ message: "The email are changed successfully" })
    } catch (error) {
        console.log(error)
    }
})

app.get('/adminpanel', async (req, res) => {
    try {
        const data = await signindata.find({})
        res.json(data);
    } catch (error) {
        console.log(error)
    }
})


app.post('/resetusername', async (req, res) => {
    const { email, newusername, password } = req.body;
    const checkemail = localStorage.getItem('emailaddress')
    try {
        if (email != checkemail) {
            res.status(400).json({ message: "The email are not match" })
            return;
        }

        const checkusername = await signindata.findOne({ username: newusername });
        if (checkusername) {
            res.status(400).json({ message: "new username are alread exists" })
            return;
        }

        const checkpassword = await signindata.findOne({ email });
        if (checkpassword.password != password) {
            res.status(400).json({ message: "Your password are not match" })
            return;
        }

        res.status(200).json("The username are changed successfully")
        await signindata.updateOne({ email: email }, { $set: { username: newusername } })
    } catch (error) {
        console.log(error);
    }
})



app.post('/resetpassword', async (req, res) => {
    const { email, oldpassword, newpassword } = req.body;
    const checkemail = localStorage.getItem('emailaddress')
    try {
        if (email != checkemail) {
            res.status(400).json({ message: "The email are not match" })
            return;
        }

        const checkpassword = await signindata.findOne({ email });
        if (checkpassword.password != oldpassword) {
            res.status(400).json({ message: "The old password are not match" })
            return;
        }

        if (oldpassword == newpassword) {
            res.status(400).json({ message: "The old and new password are same" })
            return;
        }

        await signindata.updateOne({ email: email }, { $set: { password: newpassword } })
        res.status(200).json({ message: "The password are changed successfully" })
    } catch (error) {
        console.log(error)
    }
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});