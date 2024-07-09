const mongoose = require('mongoose')
const config = require('../config/config')
const userModel = require('./userModel')
const authModel = require('./authModel')
const productModel = require('./theProductModel')
const categoryModel = require('./theProductModel')
const subcategoryModel = require('./theProductModel')
const db = {}
db.mongoose = mongoose
db.mongodb = config.MONGO_DB
db.userModel = userModel
db.authModel = authModel
db.categoryModel = categoryModel
db.subcategoryModel = subcategoryModel
db.productModel = productModel
module.exports = db
