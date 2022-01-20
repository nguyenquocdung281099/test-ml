const { BayesClassifier } = require("natural");
const data = require("./data.json");
const classifier = new BayesClassifier();

data.forEach((item) => {
  classifier.addDocument(item.input, item.output);
});

async function train() {
  await classifier.train();
  console.log(classifier.classify("rất tệ"));
}
train();
