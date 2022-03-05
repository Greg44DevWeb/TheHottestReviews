const multer = require('multer');
// dictionner des types d'extensions pour les fichiers images
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        const name = file.originalnamesplit('').join('_'); // Elimine les espaces génant dans le nom pour la gestion dans le backend
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension); // générer un nom de fichier suffisament unique
    }
});

module.exports = multer({storage}).single('image');