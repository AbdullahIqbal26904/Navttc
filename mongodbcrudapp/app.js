const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect('mongodb+srv://abdullahiqbal1505:6kktWOHfQwZNpQ4H@cluster0.l3fjv.mongodb.net/?appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log('Error connecting to MongoDB:', error));

// Customer Schema
const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String
});

const Customer = mongoose.model('Customer', customerSchema);
// Render the form and customer list
app.get('/', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.render('form', { customers });
    } catch (error) {
        res.status(500).send('Error retrieving customers');
    }
});

// Create a new customer
app.post('/create', async (req, res) => {
    const { name, email, phone, address } = req.body;
    try {
        const newCustomer = new Customer({ name, email, phone, address });
        await newCustomer.save();
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error creating customer');
    }
});

// Update an existing customer
app.post('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, address } = req.body;
    try {
        await Customer.findByIdAndUpdate(id, { name, email, phone, address });
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error updating customer');
    }
});

// Delete a customer
app.post('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Customer.findByIdAndDelete(id);
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error deleting customer');
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
