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
            type: String,
            default: 'no'
        },
        enableShowOfActiveDistributtions: {
            type: String,
            default: 'no'
        },
        hideListOfActiveDistributtions: {
            type: String,
            default: 'no'
        },
        addRetreckerInTorrentFiles: {
            type: String,
            default: 'yes'
        },
        addNameOfThemeInNameDownloadedTorrentFile: {
            type: String,
            default: 'yes'
        },
        disableAnimationIcons: {
            type: String,
            default: 'no'
        },
        domainName: {
            type: String,
            default: ""
        },
        avatar: {
            type: Boolean,
            default: false
        },
        messages: {
            type: Number,
            default: 0
        },
        created: {
            type: Date,
            default: Date.now
        },
        distributtions: [mongoose.Schema.Types.Map]
    }, { collection : 'mytorrenters' })
    
    const TorrenterModel = mongoose.model('TorrenterModel', TorrenterSchema);

const DistributionSchema = new mongoose.Schema({
    theme: String,
    forum: String,
    author: String,
    authorName: String,
    size: Number,
    seeds: {
        type: Number,
        default: 0
    },
    leechs: {
        type: Number,
        default: 0
    },
    markup: String,
    poster: String,
    resolution: String,
    poster: String,
    countOfFiles: Number,
    format: String,
    description: String,
    preview: String,
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
    posts: [mongoose.Schema.Types.Map]
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
            const newTorrenter = new TorrenterModel({ name: req.query.torrentername, email: req.query.torrenteremail, password: encodedPassword, where: req.query.torrenterwhere, gmt: req.query.torrentergmt, gender: req.query.torrentergender, created: new Date().toLocaleDateString() })
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

app.get('/api/distributtions/create', async (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query = DistributionModel.find({  })
    query.exec((err, allDistributtions) => {
        if (err){
            console.log('ошибка 1')
            return res.json({ "status": "Error" })
        }      
        let distributtionExists = false

        if(allDistributtions.length >= 1) {
            allDistributtions.forEach(distributtion => {
                if(distributtion.theme.includes(req.query.distributtiontheme)){
                    distributtionExists = true
                }
            })
        }
        if(distributtionExists){
            return res.json({ status: "Error" })
        } else {
            const newDistributtion = new DistributionModel({ theme: req.query.distributtiontheme, forum: req.query.distributtionforum, author: req.query.torrenterid, authorName: req.query.torrentername, size: 0, markup: req.query.distributtionmarkup, poster: req.query.distributtionposter, resolution: req.query.distributtionresolution, countOfFiles: req.query.distributtioncountoffiles, format: req.query.distributtionformat, description: req.query.distributtiondescription, preview: req.query.distributtionpreview })
            newDistributtion.save(function (err, distributtion) {
                if(err){
                    console.log('ошибка 2')
                    return res.json({ "status": "Error" })
                } else {
                    TorrenterModel.updateOne({ _id: req.query.torrenterid },
                        { $push: 
                            {
                                distributtions: [
                                    {
                                        id: distributtion._id
                                    }
                                ]
                                
                            }
                    }, (err, torrenter) => {
                        if(err){
                            return res.json({ "status": "error" })
                        } else {
                            return res.json({ "status": "OK" })
                        }
                    })
                }
            })
        }
    })
})

app.get('/api/distributtions/fromforum', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
   
    let query = DistributionModel.find({ forum: req.query.distributtionsforum })
    query.exec((err, distributtions) => {
        if (err){
            return res.json({ status: 'Error' })
        }
        return res.json({ status: "OK", distributtions: distributtions })
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
        return res.json({ status: "OK", distribution: distribution })
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
        let query = DistributionModel.find({ author: req.query.torrenterid })
        query.exec((err, distributtions) => {
            if (err){
                return res.json({ status: 'Error' })
            }
            return res.json({ status: "OK", torrenter: torrenter, distributtions: distributtions })
        })
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
            if(bcrypt.compareSync(req.query.torrenterpassword, torrenter.password))
            var encodedPassword = "#"
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
                avatar: req.query.torrenteravatar
            }, (err, torrenter) => {
                if(err){
                    return res.json({ status: 'Error' })        
                }
                return res.json({ status: 'OK' })
            })
        }
    })
})

app.get('/api/distributtions/download', async (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    console.log(`disstributtiontheme: ${req.query.distributtiontheme}`)
    await res.download(path.join(__dirname, `uploads/${req.query.distributtiontheme}.torrent`), `${req.query.distributtiontheme}.torrent`, function (err) {
        if (err) {
            //error to download file
            return res.json({ "status": "error to download file" })
        } else {
            //file success download
            DistributionModel.updateOne({ _id: req.query.distributtionid }, 
            { 
                "$inc": { "downloaded": 1 }
            }, (err, distributtion) => {
                if(err){
                    return res.json({ "status": "error to download file" })
                } else {
                    return res.json({ "status": "file success download" })
                }
            })
        }
    })

})

app.get('/api/distributtions/posts/add', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    DistributionModel.updateOne({ _id: req.query.distributtionid },
        { $push: 
            {
                posts: [
                    {
                        author: req.query.torrenter,
                        message: req.query.distributtionmessage,
                        date: new Date().toLocaleString(),
                    }
                ]
                
            }
        }, (err, distributtion) => {
            if(err){
                return res.json({ "status": "Error" })
            } else {
                TorrenterModel.updateOne({ name: req.query.torrenter }, 
                    { 
                        "$inc": { "messages": 1 }
                    }, (err, torrenter) => {
                    if(err){
                        return res.json({ "status": "error" })
                    } else {
                        return res.json({ "status": "OK" })
                    }
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