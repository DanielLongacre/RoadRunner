const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const mockProfile = {
    name: "Daniel",
    visitCount: 600
}


app.get('/api/profile', (req, res) => {
    res.json(mockProfile)
})

app.get('/', (req, res) => {
    res.send(`HTML is under construction..`)
});


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));