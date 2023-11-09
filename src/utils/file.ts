import fs from 'fs' //thư viện giúp handle các đường dẫn
import path from 'path'
export const initFolder = () => {
  //nếu không có đường dẫn 'TwitterProject/uploads' thì tạo ra
  const uploadsFolderPath = path.resolve('uploads')
  if (!fs.existsSync(uploadsFolderPath)) {
    fs.mkdirSync(uploadsFolderPath, {
      recursive: true //cho phép tạo folder nested vào nhau
      //uploads/image/bla bla bla
    }) //mkdirSync: giúp tạo thư mục
  }
}
