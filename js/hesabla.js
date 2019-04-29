var int_a;
var int_b;

console.log()

function tipCevir()
{
	var a = document.getElementById('value1').value;
	var b = document.getElementById('value2').value;

	//tip  cevrilmesi

	int_a = parseInt(a);
	int_b = parseInt(b);
}


function cavab(sum)
{
	document.getElementById('cavab').value = sum;
}


function topla()
{
	tipCevir();
	var cem = int_a + int_b;
	cavab(cem);
	
}





