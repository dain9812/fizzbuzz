// Do fizzbuzz with for and if
// While i goes up 1 to 15,
// print 'fizz' if i is times of 3(done)
// print 'buzz' if i is times of 5(done)
// print fizzbuzz' if i is time of 15
// else, print i (done, string)
for(let i = 1; i<16; i++) {
	if ( i == 15){
		console.log('fizzbuzz');
	}else if ( i%3 == 0) {
		console.log('fizz');
	}else if ( i%5 == 0) {
		console.log('buzz');
	}else{
		console.log(i);
	}
}
