const Authentication = require('./controllers/authentication');
const passportConfig = require('./services/passport');
const passport = require('passport');
const Notes = require('./models/notes');
const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false})


module.exports = function(app) {
  app.get('/', requireAuth, function(req, res){
    res.send({message: 'API Server'});
  })

 app.post('/signin', requireSignin, Authentication.signin);
 app.post('/signup', Authentication.signup);

//get all posts by user
 app.get('/api/posts', (req, res) => {
  Notes.find({owner: req.user}).then((notes) => {
    res.json(notes);
  });
 });

 app.get('/api/posts/:id', (req, res) => {
  Notes.findOne({ _id : collection.db.bson_serializer.ObjectID.createFromHexString(req.params.id), owner: req.user})
  .then((note) => {
    note.title = req.body.note.title;
    note.categories = req.body.note.categories;
    note.content = req.body.note.content;
  });
 });

app.post('/api/posts', (req, res) => {
  const note = new Notes ({
    owner: req.user,
    title: req.body.notes.title,
    categories: req.body.notes.categories,
    content: req.body.notes.content

  });

  note.save().then((notes) => {
    res.json({
      message: 'saved',
      notes: note
    });
  });
});

//update an existing note
app.put('/api/posts/:id', (req, res) => {
  Notes.findOne({_id: req.params.id, owner: req.user})
  .then((note) => {
    note.title = req.body.notes.title;
    note.categories = req.body.notes.categories;
    note.content = req.body.notes.content;

    note.save().then((note) =>{
      res.json({
        message: 'updated',
        notes: note
      });
    });
  });
})

//delete a note
app.delete('/api/posts/:id', (req, res) => {
  Notes.findOne({_id: req.params.id, owner: req.user})
  .then((note) =>{
    note.remove().then(() => {
      res.json({
        message: 'deleted',
        notes: note
      });
    });
  });
});

}