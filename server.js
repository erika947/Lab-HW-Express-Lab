const express = require('express');
const app = express();
const port = 3000;

// const animals = ['White Tiger', 'Sea lion', ' Fennec Fox','Humming Bird', 'Red Panda','Bunny','Penguin', 'Arctic Wolf'];

app.set('view engine' , 'ejs')

app.get('/home/:amazing_animals', (req, res) => {
    var data ={list:['Cute', 'Amazing', ' Strong','Smart', 'Brave','Hunters']}

  res.render('profile',{animals: req.params.amazing_animals, data:data});
});

app.get('/images/:animal_pics', (req, res) => {
    res.render('animalspics',);
  });
 
app.get('/white-tiger', (req, res) => {
    res.send(`<h1>White Tiger</h1>
    <img src="https://i.brecorder.com/wp-content/uploads/2017/10/white-tiger.jpg">`)
})

app.get('/sea-lion', (req, res) => {
    res.send(`<h1>Sea Lion</h1>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/California_sea_lion_in_La_Jolla_(70568).jpg/1200px-California_sea_lion_in_La_Jolla_(70568).jpg">`);
  });

  app.get('/fennec-fox', (req, res) => {
    res.send(`<h1>Fennec Fox</h1>
    <img src="https://i.pinimg.com/736x/da/79/6f/da796f823d1bb2058c9cac1b30c9c357--cute-wild-animals-zoo-animals.jpg">`);
  });

  app.get('/hummingbird', (req, res) => {
    res.send(`<h1>Humming Bird</h1>
    <img src="https://i.pinimg.com/originals/6d/3e/1c/6d3e1cf33a5c1e555703c22787f776b7.jpg">`);
  });

  app.get('/red-panda', (req, res) => {
    res.send(`<h1>Red Panda</h1>
    <img src= "https://themysteriousworld.com/wp-content/uploads/2017/12/baby-red-panda.jpg">`);
  });

  app.get('/bunny', (req, res) => {
    res.send(`<h1>Bunny</h1>
    <img src="https://wallpapertag.com/wallpaper/full/3/6/1/517521-cute-bunny-wallpapers-2880x1800-for-4k.jpg"> This is the starting page`);
  });

  app.get('/penguin', (req, res) => {
    res.send(`<h1>Penguin</h1>
    <img src="http://2.bp.blogspot.com/-TCVxv-oMRKQ/TqXm87D4QBI/AAAAAAAABp0/PQ-Odo-z0Aw/s1600/bornwild_penguin_baby.jpg">This is the starting page`);
  });

  app.get('/arctic-wolf', (req, res) => {
    res.send(`<h1>Artctic Wolf</h1>
    <img src="https://wallpapercave.com/wp/VqiBSJG.jpg">This is the starting page`);
  });

 

 


// app.get('/:indexOfAnimalsArray', (req, res) => {
//     res.send(animals[req.params.indexOfAnimalsArray]);
// });

app.listen(port,() => {
    console.log('listening on port' , port);
});