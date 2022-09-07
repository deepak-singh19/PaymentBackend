const mongoose = require('mongoose');

// const username = "<mongodb username>";
// const password = "<password>";
// const cluster = "<cluster name>";
// const dbname = "myFirstDatabase";


mongoose.connect("mongodb+srv://deepak96153:Deepak@cluster0.pbyemez.mongodb.net/MOC?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
}).then(() => {
    console.log(`connection success`);
}).catch((e) => {
    console.log(`No connection`);
})