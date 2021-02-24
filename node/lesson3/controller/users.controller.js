const userService=require('../service/users.service');

const confirmCodes=require('../constant/confirmCodes.enum');
const errorCodes=require('../constant/erroCodes.enum');

module.exports={
    getAllUsers: async(req,res)=>{
        try {
            const users= await userService.allUsers();

            res.json(users);
        } catch (e){
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },
    findUserId: async (req,res)=>{
        try {
            const {idUser}=req.params;
            const users= await userService.userById(idUser);

            res.json(users)
        }catch (e){

        }
    },
    regUser: async (req,res)=>{
        try {
            const userBody=req.body;
            await userService.reg(userBody);
            res.status(confirmCodes.CREATED);
        }catch (e){

        }
    },
    findUser: async (req,res)=>{
        try{
            const  {email,nickname}=req.body;

            const user= await userService.findUsers(email,nickname);

            res.json(user);
        }catch (e){
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },
    deleteUser: async (req,res)=>{
        try {
            const {idUser}=req.params;

            await userService.deleted(idUser);

            res.status(confirmCodes.OK);
        }catch (e){
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }


}
