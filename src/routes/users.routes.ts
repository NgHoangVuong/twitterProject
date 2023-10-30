//khai báo
import { Router } from 'express'
import { loginController, registerController } from '~/controller/users.controllers'
const usersRouter = Router()
import { loginValidator, registerValidator } from '~/middlewares/users.middlewares'

usersRouter.post('/login', loginValidator, loginController)

usersRouter.post('/register', registerValidator, registerController)
//middleware
usersRouter.use(
  (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
    // res.status(400).send('not allowed')
    // console.log(12345)
  },
  (req, res, next) => {
    console.log('Time 2: ', Date.now())
    next()
  }
)
//router
usersRouter.post('/login', loginValidator, (req, res) => {
  res.json({
    //thay thành message cho đẹp
    message: [
      { fname: 'Điệp', yob: 1999 },
      { fname: 'Hùng', yob: 2003 },
      { fname: 'Được', yob: 1994 }
    ]
  })
})
export default usersRouter
