const express = require('express');
const router = express.Router();

const { Profile } = require('../../models')

//  /api/profile
router.get('/', async (req, res) => {
    const profiles = await Profile.find({})
    res.json(profiles)
})

//POST
router.post('/', async (req, res) => {
    const newProfile = await Profile.create(req.body);
    res.json(newProfile)
})

module.exports = router;