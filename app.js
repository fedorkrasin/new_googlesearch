const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET cities page. */


  
  router.get('/pictures', (req, res) => {
    res.render('pictures', { "pictures":
        [
     {"adress":faker.image.abstract(),
      "height": faker.image.cats(), 
      "numberoftoys": faker.image.animals()},

     {"adress":faker.image.business() , 
     "height": faker.image.transport(), 
     "numberoftoys": faker.image.city()},

     {"adress":faker.image.nightlife() , 
     "height": faker.image.fashion(), 
     "numberoftoys": faker.image.people()},

     {"adress":faker.image.nature() , 
     "height": faker.image.food(), 
     "numberoftoys": faker.image.sports()}
]
 });
});
module.exports = router;
