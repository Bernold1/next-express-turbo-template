import express from "express"

const app = express()
const port = 3002

app.get("/", (req, res) => {
  res.send("Hello World from tsx!")
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
