// Напишите функцию, которая описывает такую ситуацию:
//     Школьник заключил с папой пари, что, если он получит на экзамене положительную оценку (4 или 5), то папа даст
//     ему 100$. В противном случае он не получит ничего.
//     Для обозначения действия достаточно создать console.log(“I’m Happy! My exam is excellent and I will get 100$
//     from my father!”), ну и в том же духе на отрицательный исход


function examPromise(mark) {
    return new Promise((resolve, reject) => {
        if (typeof mark !== "number" || mark < 1 || mark > 5) {
            reject(new Error("Invalid mark. Mark must be a number from 1 to 5."));
            return;
        }

        setTimeout(() => {
            if (mark === 4 || mark === 5) {
                resolve("I'm Happy! My exam is excellent and I will get 100$ from my father!");
            } else {
                reject(new Error("I'm Sad! My exam is not excellent and I will get nothing."));
            }
        }, 1000);
    });
}

