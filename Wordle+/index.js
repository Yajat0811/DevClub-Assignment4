const http = require("http");



function myFunction(req, res) {
	// console.log({req}); // You can uncomment this to see the request object
	console.log(req.url);

	const GUESS = ""; // Write logic to parse the word which the user guessed from the URL string
	const SECRET = "CIGAR"; // You can set any word as the secret answer
const Guess =req.url.split("Q")[1]
let answer="response"
for(let i=0,i<5,i++);
	if(Guess[i]==SECRET[i]){
		answer=answer+"g"
	}
        else(Guess[i]!=Secret[i]){
		if(Guess[i] not in SECRET)
			answer=answer+"b"
		else
			answer+="y"
	const feedback = "answer"; // Write logic to compare the word with the secret, and generate the feedback string

	res.write(feedback);
	res.end();
}

http.createServer(myFunction).listen(8080);
