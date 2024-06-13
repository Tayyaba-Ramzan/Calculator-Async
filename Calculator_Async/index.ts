//        Calculator Using Callback Hell, Promise Chaining & Asnyc Await

// 1) Calculator Using CallBack Hell

let callbackHellCalculator = (num1: number, num2: number, operator: (num1: number, num2: number) => void, getNextCalculation: any) => {
    getNextCalculation();
    return (operator(num1, num2));
}
let add = (num1: number, num2: number) => {
    console.log(num1 + num2);
}
let sub = (num1: number, num2: number) => {
    console.log(num1 - num2);
}
let mul = (num1: number, num2: number) => {
    console.log(num1 * num2);
}
let div = (num1: number, num2: number) => {
    console.log(num1 / num2);


}
let modules=(num1:number,num2:number)=>{
    console.log(num1%num2);
    

}

callbackHellCalculator(10, 20, add, () => {
    callbackHellCalculator(15, 5, sub, () => {
        callbackHellCalculator(5, 5, mul, () => {
            callbackHellCalculator(16, 8, div, () => {
            })
        })

    })
})

//                   XXXXXXXXXXXXXXXXXXXXX

// 2) Calculator Using Promise Chaining

let promiseChaingingCalculator = (num1: number, num2: number, operator: string) => {
    return new Promise((resolve, reject) => {
        if (operator === "+") {
            resolve(num1 + num2);
        } else if (operator === "-") {
            resolve(num1 - num2);
        } else if (operator === "*") {
            resolve(num1 * num2);
        } else if (operator === "/") {
            resolve(num1 / num2);
        } else {
            reject("Invalid Operator!");

        }
    })

}
let calculation = promiseChaingingCalculator(10, 20, "+");
calculation.then((res) => {
    console.log(res);
    return promiseChaingingCalculator(5, 5, "-");
})
    .then((res) => {
        console.log(res);
        return promiseChaingingCalculator(12, 5, "*");
    })
    .then((res) => {
        console.log(res);
        return promiseChaingingCalculator(64, 8, "/");
    })
    .then((res) => {
        console.log(res);
        return promiseChaingingCalculator(10, 6, "%")
    })
    .catch((error) => {
        console.log(error);
    })

//                        XXXXXXXXXXXXXXXXXXXXX

// 3) Calculator Using Async Await

let asyncAwaitCalculator = (num1: number, num2: number, operator: string) => {
    return new Promise((resolve, reject) => {
        if (operator === "+") {
            resolve(num1 + num2);
        } else if (operator === "-") {
            resolve(num1 - num2);
        } else if (operator === "*") {
            resolve(num1 * num2);
        } else if (operator === "/") {
            resolve(num1 / num2);
        } else {
            reject("Pleased Select Valid Operator!")
        }
    })

}
async function getCalculation() {
    try {
        let add = await asyncAwaitCalculator(10, 20, "+");
        console.log(add);
        let sub = await asyncAwaitCalculator(5, 25, "-");
        console.log(sub);
        let mul = await asyncAwaitCalculator(5, 5, "*");
        console.log(mul);
        let div = await asyncAwaitCalculator(64, 8, "/");
        console.log(div);
        let modules = await asyncAwaitCalculator(4, 5, "%")
        console.log(modules);

    } catch (error) {
        console.log(error);

    }

}
getCalculation();

//                        XXXXXXXXXXXXXXXXXXXXX