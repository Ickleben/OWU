const { constant } = require('../constant');

module.exports = {
    checkFileUpload: (req, res, next) => {
        try {
            const { files } = req;

            const documents = [];
            const photos = [];

            const allFiles = Object.values(files);

            for (let i = 0; i < allFiles.length; i++) {
                const { name, size, mimetype } = allFiles[i];

                if (constant.PHOTOS_MIMETYPES.includes(mimetype)) {
                    if (constant.PHOTO_MAX_SIZE < size) {
                        throw new Error(`${name} to big`);
                    }
                    photos.push(allFiles[i]);
                } else if (constant.DOCS_MIMETYPES.includes(mimetype)) {
                    if (constant.FILE_MAX_SIZE < size) {
                        throw new Error(`${name} to big`);
                    }
                    documents.push(allFiles[i]);
                } else {
                    throw new Error('Not valid file');
                }
            }
            req.documents = documents;
            req.photos = photos;
            next();
        } catch (e) {
            next(e);
        }
    },
    checkAmountPhoto: (req, res, next) => {
        try {
            if (req.photos.length > 1) {
                throw new Error('You must upload only one avatar');
            }
            [req.avatar] = req.photos;
            next();
        } catch (e) {
            next(e);
        }
    }
};
