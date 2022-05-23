const Attraction = require('../models/attraction');
const S3 = require('aws-sdk/clients/s3');
const { v4: uuidv4 } = require('uuid');
const s3 = new S3();

module.exports = {
    create,
    index
}

async function index(req, res){
  try {
    const allAttractions = await Attraction.findAll({})
    res.send(allAttractions)
} catch (error) {
    throw error
}
}

function create(req, res){
  console.log(req.file, req.body, 'this is create method', req.user)
  try {
      const filePath = `${uuidv4()}/${req.file.originalname}`
      const params = {Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer};
      s3.upload(params, async function(err, data){
    console.log(err, ' from aws')
          const attraction = await Attraction.create({attractionName: req.body.attractionName, user: req.user, photoUrl: data.Location, website: req.body.website, description: req.body.description});
          console.log(post)
    // make sure the post we're sending back has the user populated
    await post.populate('user');
  
          res.status(201).json({post: post})
      })
  } catch(err){
      console.log(err)
      res.json({data: err})
  }
}
