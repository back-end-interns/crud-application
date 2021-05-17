const db = require("../config/config")

exports.getData = async () => {
  try{  
    const result = await db.food.findAll();
    return result;
  }catch(err){
    return false;
  }
}

exports.createFood = async (body) => {
  try{  
    await db.food.create(body);
    return true;
  }catch(err){
    return err;
  }
}

exports.updateFood = async (body) => {
  try{  
    await db.food.update(body.values, body.condition);
    return true;
  }catch(err){
    return err;
  }
}

exports.deleteFood = async (body) => {
  try{  
     await db.food.destroy(body);
    return true;
  }catch(err){
    return false;
  }
}