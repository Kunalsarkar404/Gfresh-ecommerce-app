const Usertable = require("../../Models/usertable");

const userlist = async(req, res) => {
    try{
        const users = await Usertable.find().sort({createdAt: -1});
        res.send({status:'successfully', data:users});
    }catch (err){
        console.log(`here is error ${err}`);
        res.send({status:'failed', errors:err.errors});
    }
}

module.exports = userlist;