let users=[
{
    id:1,
    username:"admin",
    password:"admin"
}
]

exports.getUserById =(id) =>{
    return users.find((u)=>u.id==id)
}

exports.getUserByUsernameandPassword = (username,password) => {
    return users.find(u => u.username == username && u.password == password);
}