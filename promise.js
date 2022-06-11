const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let dataTheaterIXX = await promiseTheaterIXX();
  let dataTheaterVGC = await promiseTheaterVGC();
  let resultTheater = dataTheaterIXX.concat(dataTheaterVGC);
  let totalEmosi = 0;
  resultTheater.map(x => x.hasil === emosi && (totalEmosi += 1) )
  return totalEmosi
};
module.exports = {
  promiseOutput,
};
