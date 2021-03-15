const { constant } = require('../constant');
const { errorMesages } = require('../error');

module.exports = {
    checkFileUpload: (req, res, next) => {
        try {
            const { files } = req;

            const documents = [];
            const photos = [];
            const videos = [];

            const allFiles = Object.values(files);

            for (let i = 0; i < allFiles.length; i++) {
                const { size, mimetype } = allFiles[i];

                if (constant.PHOTOS_MIMETYPES.includes(mimetype)) {
                    if (constant.PHOTO_MAX_SIZE < size) {
                        throw new Error(errorMesages.NOT_VALID_FILE.en);
                    }
                    photos.push(allFiles[i]);
                } else if (constant.DOCS_MIMETYPES.includes(mimetype)) {
                    if (constant.FILE_MAX_SIZE < size) {
                        throw new Error(errorMesages.NOT_VALID_FILE.en);
                    }
                    documents.push(allFiles[i]);
                } else if (constant.VIDEOS_MIMETYPES.includes(mimetype)) {
                    if (constant.VIDEO_MAX_SIZE < size) {
                        throw new Error(errorMesages.NOT_VALID_FILE.en);
                    }
                    videos.push(allFiles[i]);
                } else {
                    throw new Error(errorMesages.NOT_VALID_FILE.en);
                }
            }
            req.documents = documents;
            req.photos = photos;
            req.videos = videos;
            next();
        } catch (e) {
            next(e);
        }
    },
    checkAmountPhoto: (req, res, next) => {
        try {
            if (req.photos.length > 1) {
                throw new Error(errorMesages.MORE_THAN_ONE.en);
            }
            [req.avatar] = req.photos;
            next();
        } catch (e) {
            next(e);
        }
    }
};
