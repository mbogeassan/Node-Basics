const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true }));
app.use(express.json());


// Pretend internet addres run localy (localhost)
// get request , the browser requesting a webpage

app.get('/api/exercise', (req, res) => {
  console.log(req.method, req.path);
  for (const key in req.query) {
    console.log( '${key}: ${req.query[key]}' );
  }
  res.send(req.query);
});



app.post('/api/exercise', (req, res) => {
  let text = '<h1>Hello from Express!</h1>';
  text += '<h2>POST parameters</h2>';
  text += '<p>I received these parameters: </p>';
  text += '<h1>Hello from Express!</h1>';
  text += '<ul>';


  for (const key in req.body) {
    text += '<li>${key}: ${req.body[key]} </li>';
  }

  text += '</ul>';
  res.send(text);
})

app.post('/api/login', (req, res) => {
    const { user, pwd } = req.body;

    if ( user === '' || pwd === '') {
       res.status(400).send();//tämä antaa errorin -> toimii
    } else if ( user === 'mark' && pwd === 'giraffe') {
      res.status(200).send({ user: user });
    } else {
      res.status(403).send(); // error viesti  "Access to localhost was denied"
    }
})

app.listen(5000, () => console.log('server running'));
