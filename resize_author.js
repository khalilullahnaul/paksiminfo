const sharp = require('sharp');
sharp('IMG_058.jpeg')
  .resize(400, 400, { fit: 'cover', position: 'attention' })
  .jpeg({ quality: 90 })
  .toFile('public/author.jpg')
  .then(() => console.log('Image cropped successfully'))
  .catch(err => console.error(err));
