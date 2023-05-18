const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User = require('./model/Schema')

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/reactdata', { useNewUrlParser: true })
.then(()=>{
console.log("DB connected");
})
.catch((err)=>{
console.log(err);
})


app.post('/insert', async (req, res) => {
    const FirstName = req.body.firstName
    const LastName = req.body.lastName
    const Contact = req.body.contact

    const formData = new User({
        firstName: FirstName,
        lastName: LastName,
        contact:Contact
    })

    try {
        await formData.save();
        res.send("inserted data..")
    } catch (err) {
        console.log(err)
    }
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});