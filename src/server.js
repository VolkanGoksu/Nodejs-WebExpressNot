const { response } = require('express');
const express =require('express');
const app=express();


app.set('views', '../src/views')

app.set('view engine', 'hbs'); //npm hbs


const path=require('path');
const publicPathUrl=path.join(__dirname,'../public');
app.use(express.static(publicPathUrl));


//npm hbs
app.get('/',(req,res)=>{   
    res.render('index',{
        title:'Ana sayfa',
        body:'Body kısmı'
    });
});
app.get('/about',(req,res)=>{   
    res.render('about',{
        title:'Ana sayfa',
        body:'Body kısmı'
    });
});
app.get('/help',(req,res)=>{   
    res.render('index',{
        title:'Yardım',
        
    });
});

//path yani localhostumuzda / dan sonra gitmek istediğimiz sayfa için
app.listen(3000,()=>{
    console.log('Server ayakta');
})


/*  index html help html sayflarıyla baglantıyı kurduktan sonra sadeleştirdik bu kısımı sildik

 app.get('/',(request,response)=>{
       response.send('Home') //html tagleri veya json şeklindede yazdırabilirsin
});

app.get('/about',(request,response)=>{
       response.send('About')
});

app.get('/help',(request,response)=>{
     response.send('Help')
});
app.get('./contact',(request,response)=>{
    response.send('Contact')
});


*/