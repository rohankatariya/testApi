const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.get('/', (req, res) => {
  res.send(JSON.parse(req.query.json));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
