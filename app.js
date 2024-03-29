const express = require('express');
const pool = require('./database');
// const cors = require('cors');
const app = express();
// register the ejs view engine
app.set('view engine', 'ejs');
// load css
app.use('/public', express.static('public'));
//without this middleware, we cannot use data submitted by forms
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is listening to port 3000")
});

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/contactus', (req, res) => {
    res.render('contactus', { title: 'Contact Us' });
});
app.get('/create', (req, res) => {
    res.render('create', { title: 'Create New' });
});

// Retrieve all posts
app.get('/posts', async(req, res) => {
    try {
        console.log("get posts request has arrived");
        const posts = await pool.query(
            "SELECT * FROM tablewad"
        );
        res.render('posts', { posts: posts.rows, title: 'Posts' });
    } catch (err) {
        console.error(err.message);
    }
});

// Retrieve a specific post
app.get('/singlepost/:id', async(req, res) => {
    try {
        const id = req.params.id;
        console.log(req.params.id);
        console.log("get a single post request has arrived");
        const posts = await pool.query(
            "SELECT * FROM tablewad WHERE id = $1", [id]
        );
        res.render('singlepost', { posts: posts.rows[0], title: 'Singlepost' });
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        console.log("get a post request has arrived");
        const Apost = await pool.query(
            "SELECT * FROM tablewad WHERE id = $1", [id]
        );
        res.json(Apost.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.put('/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        console.log(req.body.likes + " see");
        console.log("update request has arrived");
        const updatepost = await pool.query(
            "UPDATE tablewad SET likes = $2 WHERE id = $1", [id, post.likes]
        );
        res.json(post);
    } catch (err) {
        console.error(err.message);
    }
});

// Delete a post
app.delete('/posts/:id', async(req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const post = req.body;
        console.log("delete a post request has arrived");
        const deletepost = await pool.query(
            "DELETE FROM tablewad WHERE id = $1", [id]
        );
        res.redirect('posts');
    } catch (err) {
        console.error(err.message);
    }
});

// Add a new post
app.post('/posts', async(req, res) => {
    try {
        const post = req.body;
        console.log(post);
        const newpost = await pool.query(
            "INSERT INTO tablewad(title, body, urllink) values ($1, $2, $3)RETURNING * ", [post.title, post.body, post.urllink]
        );
        res.redirect('posts');
    } catch (err) {
        console.error(err.message)
    }
});

app.use((req, res) => {
    res.status(404).render('404', { title: 'Error' });
});