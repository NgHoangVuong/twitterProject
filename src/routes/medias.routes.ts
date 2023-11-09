import { Router } from 'express'
import { uploadSingleImageController } from '~/controller/medias.controllers'
import { wrapAsync } from '~/utils/handles'

const mediasRouter = Router()

mediasRouter.post('/upload-image', wrapAsync(uploadSingleImageController))

export default mediasRouter
