let users = [
    {
        userId: 'ram@yopmail.com',
        userName: 'ram',
        transactionId: 'tr101'
    },
    {
        userId: 'shyam@yopmail.com',
        userName: 'shyam',
        transactionId: 'tr102'
    },
    {
        userId: 'mohit@yopmail.com',
        userName: 'mohit',
        transactionId: 'tr103'
    },
    {
        userId: 'radha@yopmail.com',
        userName: 'radha',
        transactionId: 'tr104'
    },
    {
        userId: 'rohan@yopmail.com',
        userName: 'rohan',
        transactionId: 'tr105'
    },
]

let transactions = [
    {
        transactionId: 'tr101',
        product: 'book',
        amount: 500
    },
    {
        transactionId: 'tr102',
        product: 'tv',
        amount: 18000
    },
    {
        transactionId: 'tr101',
        product: 'fan',
        amount: 1400
    },
]

function getuser(Id, callback){
    setTimeout(()=>{
    let user = users.find((user)=> user.userId === Id)
    console.log(user);
    callback(user); 
    },6000)   
}

function getTransaction(tranId, callback) {
    setTimeout(()=> {
        let tran = transactions.filter((transaction)=> transaction.transactionId === tranId)
        console.log(tran);
        callback(tran);
    },5000)
}

getuser('ram@yopmail.com', (user) => {
    getTransaction(user.transactionId, (tran) => {
        
    })
});