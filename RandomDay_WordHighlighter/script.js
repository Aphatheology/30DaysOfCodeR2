const allText = document.querySelector('.all-text');
const mainText = document.querySelector('.main-text');
const button = document.querySelector('button');
const header = document.querySelector('h2')
const wordLimit = document.querySelectorAll('input[data-max-words]');
button.addEventListener('click', highlightWord);

function highlightWord() {
    // let start = new Date().getTime();
	let inputText = allText.value;
	let textToHighlight = mainText.value;
	if(inputText == '' || textToHighlight == '' ) {
		alert("Input can't be empty");
	} 
	else {
		let textArray = inputText.split(' ');
		let count = 0;
		let newArray = textArray.map(eachWord => {
			if(eachWord.toLowerCase() === textToHighlight.toLowerCase()) {
			count += 1;
			eachWord = `<mark>${eachWord.toUpperCase()}</mark>`;
			}
			return eachWord;
		})
		
		let finalOutput = newArray.join(' ');
		header.innerHTML = finalOutput;
        
		if (count === 0) {
			alert("Cannot highlight word in sentence")
		} else if (count > 2) {
			alert("Too many occurrences to be highlighted")
		}
	}
    // console.log(new Date().getTime() - start);
}

// function wordLimit(inp, limit){
//     let val = inp.value
//     let words = val.split(/\s+/);
//     let legal = "";
//     for(i = 0; i < words.length; i++) {
//         if(i < limit) {
//             legal += words[i] + " ";
//         }
//         if(i >= limit) {
//             inp.value = legal.trim();
//             // mainText.disabled = true;
//         }
//         // e.keyCode == 32 && (e.preventDefault() || alert('Word Limit Reached')
//     }
// }

wordLimit.forEach(input => {
    let maxWords = parseInt(input.getAttribute('data-max-words') || 0)
    input.addEventListener('keydown', e => {
      let target = e.currentTarget
      let words = target.value.split(/\s+/).length
      if (!target.getAttribute('data-announce'))
        words >= maxWords && e.keyCode == 32 && e.preventDefault()
      else
        words >= maxWords && e.keyCode == 32 && (e.preventDefault() || alert(`Only ${maxWords} words allowed`))
    })
  })