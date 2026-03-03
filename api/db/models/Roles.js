const mongoose = require("mongoose");

const schema = mongoose.Schema({
    role_name : {type: String, required:true},
    is_active : {type:Boolean, default: true},
    created_by: {
        type : mongoose.SchemaTypes.ObjectId,
        required : true
    }
},{
    versionKey : false, //mongo da bu default olarak oluşuyor gerek yok
    timestamps:{
        createdAt : "created_at",
        updatedAt : "updated_at"
    }
});


class Roles extends mongooseModel{

}

schema.loadClass(Roles);
module.exports = mongoose.model("roles", schema);