const router = require('express').Router();
let Hero = require('../models/hero.model');

router.route('/').get((req, res) => {
  Hero.find()
    .then((heroes) => res.json(heroes))
    .catch((error) => res.status(400).json(`Error: ${error}`));
});

router.route('/add').post((req, res) => {
  const nickname = req.body.nickname;
  const real_name = req.body.real_name;
  const origin_description = req.body.origin_description;
  const superpowers = req.body.superpowers;
  const catch_phrase = req.body.catch_phrase;

  const newHero = new Hero({
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
  });
  newHero
    .save()
    .then(() => res.json('New hero was added!'))
    .catch((error) => res.status(400).json(`Error: ${error}`));
});

router.route('/:id').get((req, res) => {
  Hero.findById()
    .then((hero) => res.json(hero))
    .catch((error) => res.status(400).json(`Error: ${error}`));
});

router.route('/:id').delete((req, res) => {
  Hero.findByIdAndDelete(req.params.id)
    .then(() => res.json('Hero was deleted'))
    .catch((error) => res.status(400).json(`Error: ${error}`));
});

router.route('/update/:id').post((req, res) => {
  Hero.findById(req.params.id)
    .then((hero) => {
      hero.nickname = req.body.nickname;
      hero.real_name = req.body.real_name;
      hero.origin_description = req.body.origin_description;
      hero.superpowers = req.body.superpowers;
      hero.catch_phrase = req.body.catch_phrase;

      hero
        .save()
        .then(() => res.json('Hero was updated'))
        .catch((error) => res.status(400).json(`Error: ${error}`));
    })
    .catch((error) => res.status(400).json(`Error: ${error}`));
});

module.exports = router;
