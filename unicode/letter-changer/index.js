
let chars = {
	"A" : "\u0414",
	"a" : "\u0434",
	"B" : "\u0494",
	"b" : "\u0495",
	"C" : "\u0480",
	"c" : "\u0481",
	"D" : "\u0430",
	"d" : "\u0500",
	"E" : "\u0404",
	"e" : "\u0454",
	"F" : "\u0492",
	"f" : "\u0493",
	"G" : "\u050c",
	"g" : "\u050d",
	"H" : "\u041d",
	"h" : "\u04Ba",
	"I" : "\u04c0",
	"i" : "\u04cf",
	"J" : "J",
	"j" : "j",
	"K" : "\u041a",
	"k" : "\u043a",
	"L" : "\u0413",
	"l" : "\u0433",
	"M" : "\u041c",
	"m" : "\u043c",
	"N" : "\u0418",
	"n" : "\u0438",
	"O" : "\u0472",
	"o" : "\u0473",
	"P" : "\u048e",
	"p" : "\u048f",
	"Q" : "\u04a8",
	"q" : "\u04a9",
	"R" : "\u042f",
	"r" : "\u044f",
	"S" : "\ua682",
	"s" : "\ua683",
	"T" : "\u050e",
	"t" : "\u050f",
	"U" : "\u0426",
	"u" : "\u0446",
	"V" : "\u0474",
	"v" : "\u0475",
	"W" : "\u0460",
	"w" : "\u0461",
	"X" : "\u0416",
	"x" : "\u0436",
	"Y" : "\u040f",
	"y" : "\u045f",
	"Z" : "\ua640",
	"z" : "\ua641",
	"'" : "\u0486",
	"~" : "\u0483",
	
};


function createText(){
	var txt = "";
	var fulltext = document.getElementById("inp").value;
	for(var i = 0; i < fulltext.length; i ++){
		if(fulltext.charAt(i) in chars){
			txt += chars[fulltext.charAt(i)];
		}
		else{
			txt += fulltext.charAt(i);
		}
	}
	document.getElementById("textout").innerHTML = txt;
}
