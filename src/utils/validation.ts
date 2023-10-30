import express from 'express'
import { body, validationResult, ValidationChain } from 'express-validator'
import { RunnableValidationChains } from 'express-validator/src/middlewares/schema'

//export ở ngoài xài đc hàm validate
//hàm validate có 2 cách xài:
//  1 - giống như  mẫu xài trực tiếp trên validationChain như này post('/signup', validate([ body('email').isEmail(), ...])
//      vậy thì khai báo sẽ là const validate = (validations: ValidationChain[]) => {

//  2 - nhưng ở đây ta xài checkSchema,  checkSchema sẽ return ra RunnableValidationChains<ValidationChain>
// nên khai báo sẽ như dưới đây
export const validate = (validations: RunnableValidationChains<ValidationChain>) => {
  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    await validations.run(req) //hàm tìm lỗi của middleware schema và đưa vào req

    const errors = validationResult(req) //funct này giúp ta lấy lỗi ra từ biến req
    if (errors.isEmpty()) {
      return next()
    }

    res.status(400).json({ errors: errors.mapped() })
  }
}
