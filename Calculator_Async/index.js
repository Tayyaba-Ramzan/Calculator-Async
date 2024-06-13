//        Calculator Using Callback Hell, Promise Chaining & Asnyc Await
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// 1) Calculator Using CallBack Hell
var callbackHellCalculator = function (num1, num2, operator, getNextCalculation) {
    getNextCalculation();
    return (operator(num1, num2));
};
var add = function (num1, num2) {
    console.log(num1 + num2);
};
var sub = function (num1, num2) {
    console.log(num1 - num2);
};
var mul = function (num1, num2) {
    console.log(num1 * num2);
};
var div = function (num1, num2) {
    console.log(num1 / num2);
};
var modules = function (num1, num2) {
    console.log(num1 % num2);
};
callbackHellCalculator(10, 20, add, function () {
    callbackHellCalculator(15, 5, sub, function () {
        callbackHellCalculator(5, 5, mul, function () {
            callbackHellCalculator(16, 8, div, function () {
            });
        });
    });
});
//                   XXXXXXXXXXXXXXXXXXXXX
// 2) Calculator Using Promise Chaining
var promiseChaingingCalculator = function (num1, num2, operator) {
    return new Promise(function (resolve, reject) {
        if (operator === "+") {
            resolve(num1 + num2);
        }
        else if (operator === "-") {
            resolve(num1 - num2);
        }
        else if (operator === "*") {
            resolve(num1 * num2);
        }
        else if (operator === "/") {
            resolve(num1 / num2);
        }
        else {
            reject("Invalid Operator!");
        }
    });
};
var calculation = promiseChaingingCalculator(10, 20, "+");
calculation.then(function (res) {
    console.log(res);
    return promiseChaingingCalculator(5, 5, "-");
})
    .then(function (res) {
    console.log(res);
    return promiseChaingingCalculator(12, 5, "*");
})
    .then(function (res) {
    console.log(res);
    return promiseChaingingCalculator(64, 8, "/");
})
    .then(function (res) {
    console.log(res);
    return promiseChaingingCalculator(10, 6, "%");
})
    .catch(function (error) {
    console.log(error);
});
//                        XXXXXXXXXXXXXXXXXXXXX
// 3) Calculator Using Async Await
var asyncAwaitCalculator = function (num1, num2, operator) {
    return new Promise(function (resolve, reject) {
        if (operator === "+") {
            resolve(num1 + num2);
        }
        else if (operator === "-") {
            resolve(num1 - num2);
        }
        else if (operator === "*") {
            resolve(num1 * num2);
        }
        else if (operator === "/") {
            resolve(num1 / num2);
        }
        else {
            reject("Pleased Select Valid Operator!");
        }
    });
};
function getCalculation() {
    return __awaiter(this, void 0, void 0, function () {
        var add_1, sub_1, mul_1, div_1, modules_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, asyncAwaitCalculator(10, 20, "+")];
                case 1:
                    add_1 = _a.sent();
                    console.log(add_1);
                    return [4 /*yield*/, asyncAwaitCalculator(5, 25, "-")];
                case 2:
                    sub_1 = _a.sent();
                    console.log(sub_1);
                    return [4 /*yield*/, asyncAwaitCalculator(5, 5, "*")];
                case 3:
                    mul_1 = _a.sent();
                    console.log(mul_1);
                    return [4 /*yield*/, asyncAwaitCalculator(64, 8, "/")];
                case 4:
                    div_1 = _a.sent();
                    console.log(div_1);
                    return [4 /*yield*/, asyncAwaitCalculator(4, 5, "%")];
                case 5:
                    modules_1 = _a.sent();
                    console.log(modules_1);
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
getCalculation();
//                        XXXXXXXXXXXXXXXXXXXXX
