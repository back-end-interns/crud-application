const service = require("../services/service");

exports.getData = async (req, res) => {
  const result = await service.getData();
  console.log(result);
  res.send({message: "Succesfully Retrieved", data: result });
}

exports.createFood = async (req, res) => {
  const result = await service.createFood(req.body);
  console.log(result);
  res.send({message: "Succesfully Added"});
}

exports.updateFood = async (req, res) => {
  const values = req.body;
  const condition = { where: { id: req.body.id}}
  const result = await service.updateFood({values, condition});
  res.send({message: "Succesfully Updated", result});
}

exports.deleteFood = async (req, res) => {
  const result = await service.deleteFood({where: {id: req.body.id}});

  res.send({message: "Succesfully Added", result});
}