const fs = require('fs-extra').promises;
const path = require('path');
const uuid = require('uuid').v1;

module.exports = {
    BuildDir: async (avatar, avatarName, Photo, User, userID) => {
        const pathWithoutStat = path.join(`${User}`, `${userID}`, `${Photo}`);

        const dirPhoto = path.join(process.cwd(), 'static', pathWithoutStat);

        const fileExt = avatarName.split('.').pop();

        const PhotoName = `${uuid()}.${fileExt}`;
        const uploadPhotoPath = path.join(dirPhoto, PhotoName);

        await fs.mkdir(dirPhoto, { recursive: true });
        await avatar.mv(uploadPhotoPath);

        return uploadPhotoPath;
    }
};
