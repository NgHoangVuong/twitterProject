import { Request, Response } from 'express'
import User from '~/models/schemas/User.schema'
import databaseService from '~/services/database.services'
import usersService from '~/services/users.services'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'lehodiep.1999@gmail.com' && password === '123123123') {
    return res.json({
      data: [
        { fname: 'Điệp', yob: 1999 },
        { fname: 'Hùng', yob: 2003 },
        { fname: 'Được', yob: 1994 }
      ]
    })
  } else {
    return res.status(400).json({
      error: 'login failed'
    })
  }
}

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const result = await databaseService.users.insertOne(
    new User({
      email, //tạo user chỉ cần email, password
      password
    })
  )
  try {
    //đoạn bị thay thế
    const result = await usersService.register({ email, password })
    console.log(result)
    return res.status(400).json({
      message: 'Register success',
      result: result
    })
  } catch (err) {
    return res.status(400).json({
      message: 'Register failed', //chỉnh lại thông báo
      err: err
    })
  }
}
