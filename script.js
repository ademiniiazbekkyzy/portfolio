const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY>0);
})

var oddtrivia = []
oddtrivia[0] = "There are around 700 separate programming languages";
oddtrivia[1] = "The world’s first computer programmer was a renowned female mathematician";
oddtrivia[2] = "Computer Programming was instrumental in helping end World War II";
oddtrivia[3] = "Many owners of large tech companies loved video games as kids";
oddtrivia[4] = "The first-ever computer game made zero profit for its team of creators";
oddtrivia[5] = "NASA still uses programs from the 70s in their spacecraft";
oddtrivia[6] = "The first programming language in the world was called FORTRAN ";
oddtrivia[7] = "HP, Microsoft, and Apple all began in a garage.";
oddtrivia[8] = "Hackers Write About 6,000 New Viruses Each Month";
oddtrivia[9] = " MIT Has Computers That can Detect Fake Smiles";
function oddTrivia(){
    var randomTrivia = Math.floor(Math.random()*(oddtrivia.length));
    document.getElementById('ptrivia').innerHTML = oddtrivia[randomTrivia];
}


