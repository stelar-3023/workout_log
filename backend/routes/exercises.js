const router = require("express").Router();
let Exercise = require("../models/exercise.model");


router.route("/").get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/add").post((req, res) => {
    const set = req.body.set;
    const repetitions = req.body.repetitions;
    const exercise = req.body.exercise;
    const weight = req.body.weight;
    const duration = Number(req.body.duration);
    const distance = Number(req.body.distance);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        set,
        repetitions,
        exercise,
        weight,
        duration,
        distance,
        date
    })

    newExercise.save()
        .then(() => res.json("Exercise added"))
        .catch(err => res.status(400).json("Error: " + err))
});

router.route("/:id").get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json("Error: " + err))
});

router.route("/:id").delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json("Exercise deleted"))
        .catch(err => res.status(400).json("Error: " + err))
});

router.route("/update/:id").post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.set = req.body.set;
            exercise.repetitions = req.body.repetitions;
            exercise.exercise = req.body.exercise;
            exercise.weight = req.body.weight;
            exercise.duration = req.body.duration;
            exercise.distance = req.body.distance
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(() => res.json("Exercise updated"))
                .catch(err => res.status(400).json("Error: " + err))
        })
        .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router
