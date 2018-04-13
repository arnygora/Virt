const express = require('express');
const socket = require('socket.io');
const bodyParser = require('body-parser');
const App = express();

// const server = require('http').createServer(app);
// const io = require('socket.io')(server);
// io.on('connection', function(){ /* … */ });
// server.listen(3000);

const userExist = {
    login: 'admin',
    pass: 'admin'
};

// data for sales chart on home page
const saleReport = {
    year: [15, 100, 36, 200, 29, 86, 98, 35, 123, 185, 158, 76],
    month: [150, 125, 49, 74, 99, 150, 123, 52, 77, 96, 33, 49],
    week: [15, 95, 140, 74, 99, 58, 79, 65, 69, 63, 88, 66],
};

// data for areaspline chart on users page
const areasplineData = {
    year: [300, 510, 123, 332, 254, 321, 123],
    month: [150, 125, 49, 77, 96, 33, 49],
    week: [15, 95, 140, 74, 99, 88, 66],
};

// users data for chat component

const chatData = [
    {
        id: 'user1',
        username: 'Michelle Stewart',
        position: 'Account manager',
        userMessage: 'Жизни заголовок вершину первую сбить имеет',
        avatarClass: 'uno',
        messageDate: 'Sunday, 7:32 AM',
        organization: 'facebook.com',
        email: 'toru@ur.net',
        phone: '+48 000 400 585',
        adress: '65 Avenu, Warsaw, PL'
    }, {
        id: 'user2',
        username: 'Jolene Slater',
        position: 'Freelancer',
        userMessage: 'Продолжил выйти подпоясал оксмокс страна переписали осталось языком ручеек имени всемогущая ее',
        avatarClass: 'dos',
        messageDate: 'Today, 5:32 PM',
        organization: 'symo.com',
        email: 'th@ur.thh',
        phone: '+88 7 77 52',
        adress: '90210 Melrouse, CA, USA'

    }, {
        id: 'user3',
        username: 'Lyall Roach',
        position: 'Front End Dev',
        userMessage: 'Собрал реторический журчит пояс lorem? Что предложения маленькая которой решила подпоясал знаках всеми пор',
        avatarClass: 'tres',
        messageDate: 'Yesterday, 1:32 AM',
        organization: 'google.com',
        email: 'trggg@rbb.dfbb',
        phone: '+87 515 16455',
        adress: '554 Philli, FL, USA'

    }, {
        id: 'user4',
        username: 'Michelle Stewart',
        position: 'UX/UI Designer',
        userMessage: 'Города запятых обеспечивает текст? Маленький все залетают оксмокс курсивных',
        avatarClass: 'quatro',
        messageDate: 'Sunday, 7:32 AM',
        organization: 'ikea.com',
        email: 'sss@rbccscb.com',
        phone: '+785 54 55544',
        adress: '57554 Carolina, FL, CA'

    },{
        id: 'user5',
        username: 'Michelle Banret',
        position: 'Account',
        userMessage: 'Города от всех текстов мир, за она рыбного. Ручеек до рекламных своего, свое даль то реторический',
        avatarClass: 'uno',
        messageDate: 'Yesterday, 1:32 AM',
        organization: 'facebook.com',
        email: 'brbrb@df.com',
        phone: '+97 954 61616',
        adress: '20810 Chernigiv, UA'

    }, {
        id: 'user6',
        username: 'Jolene Slater',
        position: 'Freelancer',
        userMessage: 'Взобравшись, свое. Сбить дал своих, снова от всех, алфавит журчит. Не вершину, его коварный свою.',
        avatarClass: 'dos',
        messageDate: 'Today, 5:32 PM',
        organization: 'symo.com',
        email: 'sss@rbccscb.com',
        phone: '+785 54 55544',
        adress: '57554 Carolina, FL, CA'

    }, {
        id: 'user7',
        username: 'Lyall Roach',
        position: 'Front End Dev',
        userMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ius hic unde at facilis',
        avatarClass: 'tres',
        messageDate: 'Sunday, 7:32 AM',
        organization: 'google.com',
        email: 'trggg@rbb.dfbb',
        phone: '+87 515 16455',
        adress: '554 Philli, FL, USA'
    }, {
        id: 'user8',
        username: 'Michelle Stewart',
        position: 'Account',
        userMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ius hic unde at facilis',
        avatarClass: 'quatro',
        messageDate: 'Monday, 7:32 AM',
        description: '4 days left',
        organization: 'facebook.com',
        email: 'toru@ur.net',
        phone: '+48 000 400 585',
        adress: '65 Avenu, Warsaw, PL'
    }
];

App.use(bodyParser.json());


App.post('/api/user', (req, res) => {
    console.log(req.body);
    const login = req.body.login;
    const pass = req.body.pass;

    if (userExist.login === login && userExist.pass === pass) {
        return res.json({
            check: 'exist'
        });
    }
    else {
        console.log('false');
        return res.json({
            check: 'not exists'
        });
    }
});


// chart data for Report Sales

App.get("/api/user/saleReport/year", (req, res) => {
    return res.json(saleReport.year)
});

App.get("/api/user/saleReport/month", (req, res) => {
    return res.json(saleReport.month)
});

App.get("/api/user/saleReport/week", (req, res) => {
    return res.json(saleReport.week)
});


// data for areaspline chart on users page

App.get("/api/user/areasplineData/year", (req, res) => {
    return res.json(areasplineData.year)
});

App.get("/api/user/areasplineData/month", (req, res) => {
    return res.json(areasplineData.month)
});

App.get("/api/user/areasplineData/week", (req, res) => {
    return res.json(areasplineData.week)
});


// users data for chat component

App.get("/api/user/chatData", (req, res) => {
    return res.json(chatData)
});

server = App.listen(4000, () => {
    console.log('server is started');
});

io = socket(server);

io.on('connection', (socket) => {

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});

