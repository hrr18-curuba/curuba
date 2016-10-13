// var chai = require("chai");
// var sinon = require("sinon");
// var sinonChai = require("sinon-chai");
// var request = require('supertest');


// describe('API integration', function(){
//   var server, setupStub, JSONresponse;
//    before(function () {
//     JSONresponse = {notes: [{ title: 'Test1',  categories: "Dinner", content:"this is a note", recipeId: "recipeid"}, {title: 'Test1',  categories: "Breakfast", content: "A Note", recipeId: "recipeid"}, { title: 'Test1',  categories: "Lunch", content: "A Note", recipeId: "A Note"}]};

//     setupStub = sinon.stub(notes, 'setup');
//     server = sinon.fakeServer.create();
//     server.respondWith("GET", "http://localhost:3090/api/posts", [
//       200, {"Content-Type":"application/json"}, JSON.stringify(JSONresponse)
//     ]);
//   });

//   after(function () {
//     server.restore();
//     notes.setup.restore();
//   });

//   it('note.setup receives an array of todos when note.init is called', function () {

//     notes.init();
//     server.respond();
//     assert(setupStub.calledOnce);
//     assert(setupStub.calledWith(JSONresponse.notes));
//     });
// });
