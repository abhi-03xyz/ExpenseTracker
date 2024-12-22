import mongoose from "mongoose";
const expenseSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    done:{  //payment
        type:Boolean,
        default:false
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId, //connection b/w expense and a user
        ref:'User'
    }
},{timestamps:true}); //timestams for getting date and time when created
export const Expense=mongoose.model("Expense",expenseSchema);