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

    const TorrenterSchema = new mongoose.Schema({
        name: String,
        password: String,
        email: String,
        where: Number,
        gender: String,
        gmt: String,
        distributtions: [mongoose.Schema.Types.Map]
    }, { collection : 'mytorrenters' })
    
    const TorrenterModel = mongoose.model('TorrenterModel', TorrenterSchema);

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

app.get('/api/torrenters/create', async (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    console.log(`req.query.torrentername: ${req.query.torrentername}, req.query.torrenterpassword: ${req.query.torrenterpassword}, req.query.torrenteremail: ${req.query.torrenteremail}, req.query.torrentergmt: ${req.query.torrentergmt}, req.query.torrenterwhere: ${req.query.torrenterwhere}, req.query.torrentergender: ${req.query.torrentergender}`)
    let query = TorrenterModel.find()
    query.exec((err, allTorrenters) => {
        if (err){
            console.log('ошибка 1')
            return res.json({ "status": "Error" })
        }      
        let torrenterExists = false

        if(allTorrenters.length >= 1) {
            allTorrenters.forEach(torrenter => {
                if(torrentername.email.includes(req.query.torrentername)){
                    torrenterExists = true
                }
            })
        }
        if(torrenterExists){
            return res.json({ status: "Error" })
        } else {
            let encodedPassword = "#"
            const salt = bcrypt.genSalt(saltRounds)
            encodedPassword = bcrypt.hashSync(req.query.torrenterpassword, saltRounds)
            const newTorrenter = new TorrenterModel({ name: req.query.torrentername, email: req.query.torrenteremail, password: encodedPassword, where: req.query.torrenterwhere, gmt: req.query.torrentergmt, gender: req.query.torrentergender })
            // const newTorrenter = new TorrenterModel({ name: 'req.query.torrentername', email: 'req.query.torrenteremail', password: encodedPassword, where: 'req.query.torrenterwhere', gmt: 'req.query.torrentergmt', gender: 'req.query.torrentergender' })
            newTorrenter.save(function (err) {
                if(err){
                    console.log('ошибка 2')
                    return res.json({ "status": "Error" })
                } else {
                    return res.json({ "status": "OK" })
                }
            })
        }
    })
})


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