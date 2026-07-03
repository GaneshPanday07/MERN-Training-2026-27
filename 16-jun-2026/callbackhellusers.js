let users = [
    {
        userId : 101,
        userName : 'ram'
    },
    {
        userId : 102,
        userName : 'shyam'
    },
    {
        userId : 103,
        userName : 'aman'
    },
    {
        userId : 104,
        userName : 'amit'
    },
    {
        userId : 105,
        userName : 'rim'
    },
]

function getuser(Id,callback) {
    setTimeout(() => {
        let user = users.find((user) => user.userId === Id)
        console.log(user);
        callback(user);
    },4000)
}
function getrepo(userName, callback) {
    setTimeout(() => {
        let repo = ['R1','R2','R3','R4'];
        console.log(repo);
        callback(repo);
    },3000)
}
function getcommit() {
    setTimeout(() => {
        let commit = ['C1','C2','C3','C4','C5'];
        console.log(commit);

    },2000)
}

getuser(101, (user) => {
    getrepo(user.userName, (repo) => {
        getcommit(repo[2])
    })
})