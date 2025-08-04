import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 5000

app.use(cors({
     origin:"https://intern-portal-pi.vercel.app",
     credentials:true,
     methods:["GET","POST","PUT","PATCH","DELETE"]
     
}))

// Server Start
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`)
})


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


