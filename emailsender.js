const mailer =require('nodemailer')
const { measureMemory } = require('vm')
let transport = mailer.createTransport({
    service:'gmail',
    auth:{
        user:'patelsaurin2002@gmail.com',
        pass:'***********'

    }
})
let messageOb= {
    from:'patelsaurin2002@gmail.com',
    to:'spgenius16@gmail.com',
    subject:'Email using Node JS',
    text:'This mail is send using Node js'
}
transport.sendMail(messageOb,(error,info) =>{
    if(error){
        console.log(error)
    }
    else{
        console.log("Email sent");
        console.log(info.response);
    }
})