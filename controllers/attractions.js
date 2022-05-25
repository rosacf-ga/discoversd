const Attraction = require('../models/attraction');
const S3 = require('aws-sdk/clients/s3');
const { v4: uuidv4 } = require('uuid');
const s3 = new S3();

module.exports = {
    create,
    index, 
    show,
    delete: deleteAttraction
}

async function index(req, res){
  try {
      // this populates the user when you find the posts
      // so you'll have access to the users information 
      // when you fetch teh posts
      const attractions = await Attraction.find({}).populate('user').exec()
      res.status(200).json({attractions})
  } catch(err){

  }
}

function create(req, res){
  console.log(req.file, req.body, 'this is create method', req.user)
  try {
      const filePath = `${uuidv4()}/${req.file.originalname}`
      const params = {Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer};
      s3.upload(params, async function(err, data){
    console.log(err, ' from aws')
          const attraction = await Attraction.create({
            user: req.user,
            attractionName: req.body.attractionName,
            website: req.body.website,
            description: req.body.description,
            photoUrl: data.Location
          })
    await attraction.populate('user');
  
          res.status(201).json({attraction: attraction})
      })
  } catch(err){
      console.log(err)
      res.json({data: err})
  }
}

async function show(req, res){
  console.log(req.params.id, 'this is from controller')
  try {
    const attraction = await Attraction.findOne({attractionName: req.params.id})
    if(!attraction) return res.status(404).json({err: 'Attraction not found'})
    res.status(200).json({attraction: attraction})
    console.log(attraction)
  } catch(err){
    console.log(err)
    res.status(400).json({err})
  }
}

async function deleteAttraction(req, res){
  try{
    const attraction = await Attraction.findByIdAndDelete(req.params.id)
    res.status(200).json({attraction})
  } catch(err) {
      console.log(err, "from deleteAttraction controller")
      res.json(err);
  }
}