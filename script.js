//$('body').append("Test");

var vOfus2 = ["UZgGJLVR#hbD�zCxPYnvTFdweñEmkQcuAtOorsISyWfqNiHlaMXKpj",
              "NMnfZIDk�tAiRcjgrxovuCFhQmpHVldzsOYUweSLBy�PbaTqEGXWJK"];

function ofuscar(cad,n) {
	var res = "";
	var tmp,p;
	for(k = 0; k < cad.length; k++) { 
		tmp = cad.substring(k,k+1);
		p = vOfus2[n].indexOf(tmp);
		if(p < 0) {
			res = res+tmp; 
		} else {
			res = res+vOfus2[1-n].substring(p,p+1); 
		}
	}
	return(res);
}
/*
for (var i=0; i < Data.length; i++) {
	console.log(ofuscar(Data[i].nom, 1));
}*/

var content = "<table align='center' style=';border:1px solid black;border-collapse:collapse'>"
content += "<tr style='text-align: center;border:1px solid black;border-collapse:collapse'>\
			<th style='text-align: center;border:1px solid black;border-collapse:collapse'>Nombre</th>\
			<th style='text-align: center;border:1px solid black;border-collapse:collapse'>Nota acumulada</th>\
			<th style='text-align: center;border:1px solid black;border-collapse:collapse'>Primer Parcial</th>\
			<th style='text-align: center;border:1px solid black;border-collapse:collapse'>Primera Práctica</th>\
			<th style='text-align: center;border:1px solid black;border-collapse:collapse'>Segundo Parcial</th>\
			<th style='text-align: center;border:1px solid black;border-collapse:collapse'>Segunda Práctica</th>\
			<th style='text-align: center;border:1px solid black;border-collapse:collapse'>Examen Final</th>\
			</tr>"
for (var i=0; i < Data.length; i++) {
	content += "<tr style='border:1px solid black;border-collapse:collapse'>";
    content += "<td style='border:1px solid black;border-collapse:collapse'>" + ofuscar(Data[i].nom, 1)  + "</td>";
    content += "<td style='border:1px solid black;border-collapse:collapse'>" + Data[i].notag + "</td>";
    for (var j=0; j<5; j++) {
    	content += "<td style='text-align: center;border:1px solid black;border-collapse:collapse'>" + Data[i].vnr[j] + '</td>';
    }
	content += '</tr>';
}
content += "</table><br>";

content += "<p style='color:red'>No me hago responsable del uso que se le pueda dar a esta extensión.<br>\
Las letras que aparecen como # es porque son letras con tilde y no están bien escritas en el código; siento no poder hacer nada.</p><br>";

$('#principal > div > div:nth-child(6)').after(content);
