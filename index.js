const fs = require('fs')
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

const bcrypt = require('bcrypt');
const saltRounds = 10;

const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))

const url = `mongodb+srv://glebClusterUser:glebClusterUserPassword@cluster0.fvfru.mongodb.net/distributions?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(url, connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

const DistributionSchema = new mongoose.Schema({
    name: String,
    forum: String,
    author: String,
    size: Number,
    seeds: String,
    leechs: String,
    added: {
        type: Date,
        default: Date.now
    },
    checked: {
        type: Boolean,
        default: false
    },
    downloaded: {
        type: Number,
        default: 0
    },
}, { collection : 'mydistributions' });

const DistributionModel = mongoose.model('DistributionModel', DistributionSchema);

app.get('/api/distributions/get',(req, res)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
   
    let query = DistributionModel.findById(req.query.distributionid)
    query.exec((err, Distribution) => {
        if (err){
            return
        }
        return res.json({ status: "OK" })
    })

})

app.get('**', (req, res) => { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    return res.redirect(`http://localhost:4000/?redirectroute=${req.path}`)
})

// const port = process.env.PORT || 8080
const port = 4000  

app.listen(port)