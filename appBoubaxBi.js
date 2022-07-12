// const express = require('express');

// const app = express();



// module.exports = app;




// --------------------------------------------------------------------------



// const express = require('express');

// const appoo= express();

// appoo.use((req, res) => {
//    res.json({ message: 'Votre requête a bien été reçuejh !' }); 
// });

//  module.exports = appoo;


// --------------------------------------------------------------------------



// const express = require('express');

// const appoo = express();

// appoo.use((req, res, next) => {
//   console.log('Requête reçue !');
//   next();
// });

// appoo.use((req, res, next) => {
//   res.status(201);
//   next();
// });

// appoo.use((req, res, next) => {
//   res.json({ message: 'Votre requête a bien été reçue !' });
//   next();
// });

// appoo.use((req, res, next) => {
//   console.log('Réponse envoyée avec succès !');
// });

// module.exports = appoo;



// --------------------------------------------------------------------------

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const Thing = require('./models/thing');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const stuffRoutes = require('./routes/stuff');
mongoose.connect('mongodb+srv://pathe1:pathe123@cluster0-go-fullstack.trpmc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority ',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const appoo = express();

appoo.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
appoo.use(bodyParser.json());
appoo.use('/api/stuff', stuffRoutes);
// appoo.use('/api/stuff', stuffRoutes);
appoo.use('/api/auth', userRoutes);




// appoo.post('/api/stuff', (req, res, next) => {
//   console.log(req.body);
//   res.status(201).json({
//     message: 'Objet créé !'
//   });
// });

// appoo.post('/api/stuff', (req, res, next) => {
//   delete req.body._id;
//   const thing = new Thing({
//     ...req.body
//   });
//   thing.save()
//     .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
//     .catch(error => res.status(400).json({ error })); 
// });


// appoo.get('/api/stuff/:id', (req, res, next) => {
//   Thing.findOne({ _id: req.params.id })
//     .then(thing => res.status(200).json(thing))
//     .catch(error => res.status(404).json({ error }));
// });



// appoo.put('/api/stuff/:id', (req, res, next) => {
//   Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
//     .then(() => res.status(200).json({ message: 'Objet modifié !'}))
//     .catch(error => res.status(400).json({ error }));
// });


// appoo.delete('/api/stuff/:id', (req, res, next) => {
//   Thing.deleteOne({ _id: req.params.id })
//     .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
//     .catch(error => res.status(400).json({ error }));
// });
// appoo.use('/api/stuff', (req, res, next) => {
//   Thing.find()
//     .then(things => res.status(200).json(things))
//     .catch(error => res.status(400).json({ error }));
// });

module.exports = appoo;
