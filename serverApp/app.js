require('dotenv').config();
const express = require('express');
const cors = require('cors');
// var corsOptions = {
//   origin: 'http://localhost:3000',
// };
const mockData = require('./db.json');

const app = express();
const API_PORT = process.env.API_PORT || 3333;

// app.use(cors(corsOptions)); // parse requests of content-type - application/json
app.use(express.json());
app.use(cors());
// app.use('/node_modules', express.static('node_modules'));

app.get('/', (req, res) => {
  // res.send("Yo!");
  //   req.query.name = 'Helder';
  //   console.log(req.query.name);
  // console.log(mockData);
  // res.json('Welcome to Express. Paths available: ["/destinations"] > Travel Destination – ["/users"] > Users');
  res.json(mockData);
});

app.get('/destinations', (req, res) => {
  if (mockData.destinations) {
    res.json(mockData.destinations);
  } else {
    res.json('City not found');
  }
});

app.get('/user', (req, res) => {
  if (mockData.user) {
    res.json(mockData.user);
  } else {
    res.json('User not found');
  }
});

// http://localhost:PORT/destination?position=1
app.get('/destinations/:id', async (req, res) => {
  const cityToGet = req.params.id;
  if (cityToGet !== '') {
    let ArrayFound = mockData.destinations.filter((item) => {
      return item.id == cityToGet;
    });

    var val = req.params.id;
    var index = mockData.destinations.findIndex(function (item, i) {
      return item.id === val;
    });

    ObjectConvert = { ...ArrayFound[0] };
    res.json({ city: ObjectConvert, position: index });
    // res.redirect('/');
  } else {
    res.json('City not found');
  }
});

app.get('/delete/:pos', async (req, res) => {
  const positionToDelete = req.params.pos;
  if (positionToDelete !== '') {
    mockData.destinations.splice(positionToDelete, 1);
   res.json(mockData.destinations);
    // res.redirect('/');
  } else {
    res.json(`City not found - can't be deleted`);
  }
});

app.post('/update/:pos', async (req, res) => {
  const positionToUpdate = req.params.pos
  // console.log(req)
  // console.log(positionToUpdate)
  if (positionToUpdate !== '') {
    mockData.destinations[positionToUpdate] = req.body;
    res.json(mockData.destinations);
    // res.redirect('/');
  } else {
    res.json(`Entry was not found in DB - can't be update`);
  }
});

app.post('/addcity', (req, res) => {
  console.log('There was a post request');
  console.log(req.body);

  const cityToAdd = req.body;

  if (cityToAdd !== '') {
    mockData.destinations.push(cityToAdd);
    console.log(cityToAdd);
    res.json(mockData.destinations);
  } else {
    console.log('Error');
  }
});

app.get('*', function (req, res) {
  // res.status(404).send('Sorry, we cannot find that!');
  // res.status(500).send({ error: 'something blew up' });
  res.json('404 / Not Found');
});

app.listen(API_PORT, () => {
  console.log(`listening on http://localhost:${API_PORT}`);
});
