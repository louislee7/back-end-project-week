const express = require('express')
const logger = require('morgan');

// import your node modules

const postsRouter = require('./data/routes/postsRouter');
const tagsRouter = require('./data/routes/tagsRouter');

const server = express();
const PORT = 4000;

//MW
server.use(express.json());
server.use(logger('tiny'));

//allow access control
const cors = require('cors')
server.use(cors());

//routers
server.use('/api/', postsRouter);
server.use('/api/', tagsRouter);

server.get('/', (req, res) =>
    res.send(`Hi! This is Louis Li's Lambda Notes API! Direct to '/api/posts' to view the posts and '/api/tags' to view the tags`)
    );


//listening
server.listen(process.env.PORT || PORT, () => {
    console.log(`server is now up and running on ${PORT}`)
})