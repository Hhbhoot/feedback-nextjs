import mongoose, { Schema, Document } from 'mongoose'
import MessageModel, { Message } from './messageSchema'

// Define the schema for the User model

export interface User extends Document {
  username: string
  email: string
  password: string
  isVerified: boolean
  isAcceptingMessage: boolean
  verifyCode: string
  verifyCodeExpiry: Date
  messages: Message[]
}

const userSchema = new Schema<User>({
  username: {
    type: String,
    required: [true, 'username is required'],
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format']
  },
  password: {
    type: String,
    required: true,
    select: false
  },

  isVerified: {
    type: Boolean,
    default: false
  },
  isAcceptingMessage: {
    type: Boolean,
    default: true
  },
  verifyCode: {
    type: String
  },
  verifyCodeExpiry: {
    type: Date
  },
  messages: 
    [MessageModel]
  
})

// Create the User model from the schema

const  UserModel = (mongoose.models.User as mongoose.Model<User>) || ( mongoose.model<User>("userSchema" , userSchema))

export default UserModel
