import express from 'express'
import usersRouter from '~/routes/users.routes'
import databaseService from '~/services/database.services'

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('hello world')
})

databaseService.connect()
//fix lại thành user luôn cho dỡ hack não
//nên api lúc này là http://localhost:3000/user/tweets
app.use('/user', usersRouter) //route handler
app.use(express.json()) //app handler
app.listen(port, () => {
  console.log(`Project twitter này đang chạy trên post ${port}`)
})
