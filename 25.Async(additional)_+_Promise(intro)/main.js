function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

let promise = new Promise((resolve, reject) => {
    const num = random(1, 100)

    console.log(0);

    if(num % 2 === 0) {
        resolve(true)
    } else {
        reject()
    }
});
// " 0 1 3 6 8 9 12 ", " 0 2 3 6 7 9 12".

promise.then(
    (bol) => {
        console.log(1);
        return bol
    },
    () => {
        console.log(2);
    }
)
.then(
    (bol) => {
        console.log(3);
        return Promise.reject(bol)
    }, 
    () => {
        console.log(4);

    }
)
.then(
    () => {
        console.log(5);
    },
    (bol) => {
        console.log(6);
        if (bol){
            return Promise.reject()
        }
    }
) 
.then(
    () => {
        console.log(7);
    },
    () => {
        console.log(8);
    }
)
.then(
    () => {
        console.log(9);
        return Promise.reject();
    },
    () => {
        console.log(10);
    }
)
.then(
    () => {
        console.log(11);
    },
    () => {
        console.log(12);
    }
)






