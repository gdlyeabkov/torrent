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
        name: {
            type: String,
            default: 'admin'
        },
        password: {
            type: String,
            default: 'hash'
        },
        email: {
            type: String,
            default: 'admin@gmail.com'
        },
        where: {
            type: String,
            default: 'Россия'
        },
        gender: {
            type: String,
            default: 'male'
        },
        gmt: {
            type: String,
            default: 'gmt+3'
        },
        contacts: {
            type: String,
            default: ''
        },
        hobby: {
            type: String,
            default: ''
        },
        interest: {
            type: String,
            default: ''
        },
        subscription: {
            type: String,
            default: ''
        },
        disableGetAndSendPM: {
            type: Boolean,
            default: false
        },
        enableShowOfActiveDistributtions: {
            type: Boolean,
            default: false
        },
        hideListOfActiveDistributtions: {
            type: Boolean,
            default: false
        },
        addRetreckerInTorrentFiles: {
            type: Boolean,
            default: true
        },
        addNameOfThemeInNameDownloadedTorrentFile: {
            type: Boolean,
            default: true
        },
        disableAnimationIcons: {
            type: Boolean,
            default: false
        },
        domainName: {
            type: String,
            default: ""
        },
        avatar: {
            type: Boolean,
            default: false
        },
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
    
    let query = TorrenterModel.find({  })
    query.exec((err, allTorrenters) => {
        if (err){
            console.log('ошибка 1')
            return res.json({ "status": "Error" })
        }      
        let torrenterExists = false

        if(allTorrenters.length >= 1) {
            allTorrenters.forEach(torrenter => {
                if(torrenter.name.includes(req.query.torrentername)){
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
            // const newTorrenter = new TorrenterModel({ name: 'req.query.torrentername', password: 'encodedPassword', email: 'req.query.torrenteremail', where: 'req.query.torrenterwhere', gender: 'req.query.torrentergender', gmt: 'req.query.torrentergmt' })
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
    query.exec((err, distribution) => {
        if (err){
            return res.json({ status: 'Error' })
        }
        return res.json({ status: "OK" })
    })

})

app.get('/api/torrenters/get', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
   
    let query = TorrenterModel.findById(req.query.torrenterid)
    query.exec((err, torrenter) => {
        if (err){
            return res.json({ status: 'Error' })
        }
        return res.json({ status: "OK", torrenter: torrenter })
    })

})


app.get('/api/torrenters/check', (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let queryBefore = TorrenterModel.find({ name: { $in: req.query.torrentername }  })
    queryBefore.exec((err, allTorrenters) => {
        if(err){
            return res.json({ "status": "Error" })
        }
        if(allTorrenters.length >= 1){
            let query =  TorrenterModel.findOne({'name': req.query.torrentername}, function(err, torrenter){
                if (err){
                    return res.json({ "status": "Error" })
                } else {
                    const passwordCheck = bcrypt.compareSync(req.query.torrenterpassword, torrenter.password) && req.query.torrenterpassword !== ''
                    if(torrenter != null && torrenter != undefined && passwordCheck){
                        return res.json({ "status": "OK", "torrenter": torrenter })
                    } else {
                        return res.json({ "status": "Error" })
                    }
                }
            })    
        } else if(allTorrenters.length <= 0){
            return res.json({ "status": "Error" })
        }
    })
})

app.get('/api/torrenters/update', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query =  TorrenterModel.findOne({ 'name': req.query.torrentername }, function(err, torrenter){
        if (err){
            return res.json({ "status": "Error" })
        } else {
            let encodedPassword = "#"
            let saltRounds = 10
            let salt = bcrypt.genSalt(saltRounds)
            encodedPassword = bcrypt.hashSync(req.query.torrenternewpassword, saltRounds)
            TorrenterModel.updateOne({ name: req.query.torrentername }, {
                password: encodedPassword,
                email: req.query.torrenteremail,
                contacts: req.query.torrentercontacts,
                hobby: req.query.torrenterhobby,
                interest: req.query.torrenterinterest,
                where: req.query.torrenterwhere,
                gmt: req.query.torrentergmt,
                gender: req.query.torrentergender,
                subscription: req.query.torrentersubscription,
                disableGetAndSendPM: req.query.torrenterdisablegetandsendpm,
                enableShowOfActiveDistributtions: req.query.torrenterenableshowofactivedistributtions,
                hideListOfActiveDistributtions: req.query.torrenterhidelistofactivedistributtions,
                addRetreckerInTorrentFiles: req.query.torrenteraddretreckerintorrentfiles,
                addNameOfThemeInNameDownloadedTorrentFile: req.query.torrenteraddnameofthemeinnamedownloadedetorrentfile,
                disableAnimationIcons: req.query.torrenterdisableanimationicons,
                domainName: req.query.torrenterdomainname,
                avatar: req.query.torrenteravatar,
            }, (err, torrenter) => {
                if(err){
                    return res.json({ status: 'Error' })        
                }
                return res.json({ status: 'OK' })
            })
        }
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