import { Router } from 'express'
import { uploadSingleImageController } from '~/controller/medias.controllers'

const mediasRouter = Router()

mediasRouter.post('/upload-image', uploadSingleImageController)

export default mediasRouter
