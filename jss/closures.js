function createUser(){
    const user="R"
    return function(){
        console.log(user)
    }
}
const create= createUser()
create()