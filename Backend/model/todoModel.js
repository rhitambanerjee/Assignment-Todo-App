const mongoose = require("mongoose")

const todoSchema  = new mongoose.Schema({

    body:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }

})

// const tosoModel = mongoose.model("Todos",todoSchema);
// module.exports(tosoModel);

module.exports = mongoose.model("Todo", todoSchema);