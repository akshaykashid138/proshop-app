import bcrypt from 'bcryptjs'

const users=[
    {
        name:"Admin User",
        email:"example@gmail.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:"omkar Kakade",
        email:"omkar@gmail.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:"Akshay Kashid",
        email:"akshay@gmail.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:"Vinay Khade",
        email:"vinay@gmail.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
]

export default users