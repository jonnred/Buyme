const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.listen(4999);
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'whazup'
    });
});
app.get('/store', (req, res) => {
    const items = [{
            title: 'Jelly Fish',
            price: '100',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, amet.',
        },
        {
            title: 'Jelly Fish',
            price: '500',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, amet.'
        },
        {
            title: 'Jelly Fish',
            price: '300',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, amet.'
        },
        {
            title: 'Jelly Fish',
            price: '200',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, amet.'
        },
    ];
    res.render('store', {
        ewan: 'jellyfish',
        items
    });
});
app.post('/store', urlencodedParser, (req , res) => {
    console.log(req.body);
    res.render('store');
})
app.get('/cart', (req, res) => {
    res.render('cart');
});
app.post('/cart' , urlencodedParser, (req , res) => {
    res.render('cart'); 
    console.log(req.body)
})
app.get('/sellpicture', (req , res) => {
    res.render('addpicture');
})
app.use((req , res)=>{
    res.render('404')
})