var invitationFrontSide=true;

function oncreate()
{	
	var queryString = window.location.search;
	console.log(queryString);
	var urlParams = new URLSearchParams(queryString);
	var name = urlParams.get('name');
	document.getElementById("invitationName").innerHTML = desencriptar(name);
}

function mostrarFace2()
{
	document.getElementById("closeInvitation").style.display = "none";
	document.getElementById("btnGirar").style.display = "none";
	document.getElementById("openInvitation").style.display = "block";
	invitationIsClose=false;
	console.log("MostrarFace2");
}

function mostrarFace1()
{
	document.getElementById("closeInvitation").style.display = "block";
	document.getElementById("btnGirar").style.display = "block";
	document.getElementById("openInvitation").style.display = "none";
	invitationIsClose=true;
	console.log("MostrarFace1");
}

function rotar()
{
	if(invitationFrontSide){
		//var tam= document.getElementById("Face1Front").width;
		//document.getElementById("closeInvitation").style.transform = "rotateY(180deg) translateX("+tam+"px)";
		document.getElementById("closeInvitation").style.transform = "rotateY(180deg)";
		invitationFrontSide=false;
	}else{
		document.getElementById("closeInvitation").style.transform = "rotate(0deg)";
		invitationFrontSide=true;
	}
}

function desencriptar(var nameText)
{
	return atob(nameText);
}