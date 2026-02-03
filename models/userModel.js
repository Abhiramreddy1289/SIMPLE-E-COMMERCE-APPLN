import {Schema,model} from 'mongoose'

//create cart schema
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:'product',    //name of product model
    }
});

//create user schema
const userSchema=new Schema({

    name:{
        type:String,
        required:[true,"Name is required"],  //true means req proprerty is enabled
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true //add to index
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    cart:{
        type:[cartSchema],
    }
    
},{
    strict:"throw",
    timestamps:true,
    versionKey:false
})


//create user model with that schema
export const UserModel=model("user",userSchema)