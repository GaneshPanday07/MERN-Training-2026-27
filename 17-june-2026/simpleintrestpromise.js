function Simpleintrest(p, r, t) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(t < 1) {
                console.log("time can not be negitive");
            } else {
                let si = (p * r * t) / 100;
                resolve(si);
            }
            
        },3000)
    });
    return pr;
}

Simpleintrest(100000, 2, 24)
.then((si) => console.log(si))
.catch((err)=> console.log(err))