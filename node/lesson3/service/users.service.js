const fs =require('fs-extra');
const path =require('path');

const linkDB=path.join(process.cwd(),'dataBase','users.json');

module.exports={
     allUsers: ()=>{

        return fs.readJson(linkDB);
    },
    userById: async (idUser)=>{
         const userById=await fs.readJson(linkDB);

        return userById[idUser];
    },
    reg: async (userBody)=>{
        const arrNew = await fs.readJson(linkDB);

        arrNew.push(userBody);

         return fs.writeJson(linkDB,arrNew);
    },
    findUsers: async(email,nickname)=>{
        const readFile = await fs.readJson(linkDB);

       const index = readFile.findIndex(value => value.email === email || value.nickname === nickname);

        return readFile[index];
    },
    deleted : async(idUser)=>{
        const delById=await fs.readJson(linkDB);

        delById.splice(idUser,1);

        return await fs.writeJson(linkDB,delById);
    }
}
