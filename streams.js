import fs from "fs";


const readStream = fs.createReadStream("./hello.txt", { encoding: "utf-8"});

readStream.on("error", (err) => {
    console.log(err);
});

let count = 0;
readStream.on("data", (data) => {
    count += 1
    console.log(data);
    console.log(count);
});



// 1GB