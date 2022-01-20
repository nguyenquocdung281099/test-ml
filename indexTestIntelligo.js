const brain = require("./brain");
const fs = require("fs");
const dataTrain = require("./data.json");
const net = new brain.recurrent.LSTM({ activation: "leaky-relu", hiddenLayers: [2, 2] });

let trainedNet;
function encode(string) {
  const s = nonAccentVietnamese(string);
  return s;
}
function nonAccentVietnamese(str) {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
  str.trim();
  return str;
}

function processDataSet() {
  return dataTrain.map((item) => {
    return {
      input: encode(item.input),
      output: item.output,
    };
  });
}

function train(data) {
  console.log("start trainning");
  net.train(data, {
    iterations: 2000,
    log: true,
    errorThresh: 0.001,
    logPeriod: 5,
    momentum: 0.1,
    learningRate: 0.001,
  });
  trainedNet = net.toJSON();
  const result = net.run(encode("phòng chất lượng tệ"));
  console.log(result);
  fs.writeFileSync("./train1.json", JSON.stringify(trainedNet), "utf8", (err) => {
    if (err) {
      console.log(`Error writing file: ${err}`);
    } else {
      console.log(`File is written successfully!`);
    }
  });
}

function execute(input) {
  const networkState = JSON.parse(fs.readFileSync("./train1.json", "utf-8"));
  net.fromJSON(networkState);
  let results = net.run(input);
  console.log(results);
}

train(processDataSet(dataTrain));
// console.log(encode("ồn ào"));
execute(encode("kém"));

// let indexGood = 0;
// let indexBad = 0;
// dataTrain.forEach((item) => {
//   if (item.output === "good") {
//     indexGood++;
//   } else {
//     indexBad++;
//   }
// });
// console.log(indexGood);
// console.log(indexBad)
