import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
const PORT = 5000


// Intern Info API
app.get('/api/intern', (req, res) => {
  res.json({
    name: 'Rocky',
    referralCode: 'rocky@123',
    donations: 7500
  })
})

// Leaderboard API
  app.get('/api/leaderboard', (req, res) => {
  res.json([
    { name: 'Ananya Sharma', donations: 8000 },
    { name: 'Rocky Kumar', donations: 7500 },
    { name: 'Rahul Jain', donations: 3000 },
    { name: 'Rohit Sharma', donations: 9000 },
  ])
})

// Server Start
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`)
})
