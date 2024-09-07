const sumAll = function(a, b) {
  if(a<0 || b<0) return "ERROR";
  if(!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  if(!Number.isFinite(a) || !Number.isFinite(b)) return "ERROR";
  let min = Math.min(a,b);
  let max = Math.max(a,b);
  let sum = 0;
  for (let i=min; i <= max; i++){
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
