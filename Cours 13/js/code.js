window.onload = function () {
	document.getElementById("btnParNom").addEventListener("click",function(){ getRows("parnom")});
	document.getElementById("btnParTable").addEventListener("click",function(){ getRows("partable")});
};


function getRows(typeAffichage) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("get", "xml/systemeSolaire.xml", true);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			if (typeAffichage == "parnom"){
				resultatsParNom(this);
			} else{
				resultatsParTable(this);
			}
		}
	};
	xmlhttp.send(null);
}

function resultatsParNom(xmlhttp) {
	var txt="";
	var xmlDoc = xmlhttp.responseXML;
	var rowData = xmlDoc.getElementsByTagName("nom");
	for (i = 0; i< rowData.length; i++) {
		txt += rowData[i].childNodes[0].nodeValue + "<br>";
	  }
	  document.getElementById("parNom").innerHTML = txt;
}


function resultatsParTable(xmlhttp) {
	var tableNode = document.getElementById("parTable");
	var xmlDoc = xmlhttp.responseXML;
	var xmlNodes = xmlDoc.getElementsByTagName("planete");
	var theTable = tableNode.parentNode;
	var newRow, newCell, i;
	console.log ("Nombre de noeuds: " + xmlNodes.length);
	for (i=0; i<xmlNodes.length; i++) {
		newRow = tableNode.insertRow(i);
		for (j=0; j<xmlNodes[i].childNodes.length; j++) {
			
			if(xmlNodes[i].childNodes[j].firstChild) {
				console.log(xmlNodes[i].childNodes[j].firstChild);
				if (xmlNodes[i].childNodes[j].firstChild.nodeValue != "\n\t\t\t"){
					newCell = newRow.insertCell(newRow.cells.length);
					newCell.innerHTML = xmlNodes[i].childNodes[j].firstChild.nodeValue;
				}
			}
		}
		}
		theTable.appendChild(tableNode);
}

