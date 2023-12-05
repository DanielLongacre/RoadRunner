const express = require('express');
const router = express.Router();

const mockProfile = {
    name: "Daniel",
    endorsedCount: 600
}

//  /api/profile
router.get('/', (req, res) => {
    res.json(mockProfile)
})

//POST
router.post('/', (req, res) => {
    const newProfile = req.body;
    newProfile.id = "asdf1234";
    res.json(newProfile)
})

module.exports = router;