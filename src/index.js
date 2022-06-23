module.exports = function reverse (n) {
  if (n > 0) {
  	let nArray = n.toString().split('').reverse().join('');
  	nArray.startsWith('0') ? nArray = nArray.slice(1) : nArray; 
  	return nArray
  }
  else if (n < 0) {
  	let nArray = n.toString().split('').reverse().join('').slice(0,-1);
  	nArray.startsWith('0') ? nArray = nArray.slice(1) : nArray; 
  	return nArray
  }
  else {
  	return 0;
  }

}
