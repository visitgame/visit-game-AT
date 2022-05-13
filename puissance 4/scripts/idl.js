//Iwaweb Dynamic Library V1.2
//Copyright © 2000-2003, Iwaweb
//La modification, la rediffusion de ce script est scrictement interdite, seule l'utilisation est autorisée
//Pour connaître les navigateurs compatibles avec IDL consultez la liste de compatiblité
//pour utiliser cette librairie insérez simplement cette ligne <script language="javascript" src="idl.js"></script>

//détecte le navigateur utilisé

ie=navigator.userAgent.toLowerCase().indexOf("msie");
gecko=navigator.userAgent.toLowerCase().indexOf("gecko");
opera=navigator.userAgent.toLowerCase().indexOf("opera");

if(ie>0 && opera<0)
	version=parseFloat(navigator.userAgent.substring(ie+5,ie+8));

if(opera>0)
	version=parseFloat(navigator.userAgent.substring(opera+6,opera+9));

if(ie>0 && version<5 && opera<0)
	alert("Attention, vous disposez d'une version d'Internet Explorer antérieure à la version 5.0. Risque d'erreur important !");

if(opera>0 && version<7)
	alert("Attention, vous disposez d'une version d'Opera antérieure à la version 7.0. Risque d'erreur important !");

if(opera<0 && gecko<0 && ie<0)
	alert("Attention, votre navigateur n'est pas reconnu par IDL. Risque d'erreur important !");



function creercalque(nom,largeur,hauteur,posix,posiy,couleur,paramsup,contenu,visibilite,zindex){
	//nom,couleur,contenu et paramsup sont des chaines de caractère; largeur,hauteur,posix,posiy,zindex sont des entiers
	//Action: crée un calque

	document.write("<div id="+nom+" style='position:absolute;height:"+hauteur+"px;width:"+largeur+"px;left:"+posix+"px;top:"+posiy+"px;background-color:"+couleur+";visibility:"+visibilite+";z-index:"+zindex+"' "+paramsup+">"+contenu+"</div>");
}

function couleurcalque(nom,couleur){
	//nom et couleur sont des chaînes
	//Action: modifie la couleur du calque

	document.getElementById(nom).style.backgroundColor=couleur;
}

function contenucalque(nom,contenu){
	//nom et contenu sont des chaînes
	//Action: modifie le contenu du calque

	document.getElementById(nom).innerHTML=contenu;	
}

function lire_contenucalque(nom){
	//nom est une chaîne
	//Action: retourne dans une chaîne le contenu du calque

	return document.getElementById(nom).innerHTML;
}

function visibilitecalque(nom,visi){
	//nom est une chaîne, visi est une chaîne acceptant 2 valeurs "hidden" ou "visible"
	//Action: masque ou affiche le calque

	document.getElementById(nom).style.visibility=visi;
}

function indiquervisibilite(nom){
	//nom est une chaîne
	//Action: retourne une variable qui vaut 1 si le calque est visible, 0 dans le cas contraire

	var visi=0;
	if(document.getElementById(nom).style.visibility=="visible")
	{
		visi=1;
	}
	return visi;
}

function lire_largeurfenetre(){
	//Action: retourne la largeur de la fenetre en pixels
	//Attention le script qui emploie cette fonction doit être situé entre les balises <body> et </body>

	if(gecko>0)
		var LargeurFenetre=self.innerWidth;
	else
		var LargeurFenetre=document.body.clientWidth;

	return LargeurFenetre;
}

function lire_hauteurfenetre(){
	//Action: retourne la hauteur de la fenetre en pixels
	//Attention le script qui emploie cette fonction doit être situé entre les balises <body> et </body>	

	if(gecko>0)
		var HauteurFenetre=self.innerHeight;
	else
		var HauteurFenetre=document.body.clientHeight;

	return HauteurFenetre;
}

function positioncalque_x(nom,distance){
	//la variable distance(entier) indique la distance du calque en pixel par rapport au bord gauche de votre fenêtre
	//nom est une chaîne
	//Action: replace le calque

	document.getElementById(nom).style.left=distance;
}

function positioncalque_y(nom,distance){
	//la variable distance(entier) indique la distance du calque en pixel par rapport au bord supérieur de votre fenêtre
	//nom est une chaîne
	//Action: replace le calque

	document.getElementById(nom).style.top=distance;
}

function lire_positioncalque_x(nom){
	//nom est une chaîne
	//Action : retourne un entier indiquant la position du calque par rapport au bord gauche de la fenetre

	return eval(document.getElementById(nom).style.left.substring(0,document.getElementById(nom).style.left.indexOf("px")));
}

function lire_positioncalque_y(nom){
	//nom est une chaîne
	//Action : retourne un entier indiquant la position du calque par rapport au bord supérieur de la fenetre

	return eval(document.getElementById(nom).style.top.substring(0,document.getElementById(nom).style.top.indexOf("px")));
}

function largeurcalque(nom,largeur){
	//nom est une chaîne, largeur est un entier qui indique la largeur du calque en pixels
	//Action : modifie la largeur du calque

	document.getElementById(nom).style.width=largeur;	
}

function lire_largeurcalque(nom){
	//nom est une chaîne
	//Action : retourne la largeur du calque

	return document.getElementById(nom).offsetWidth;
}

function hauteurcalque(nom,hauteur)
{
	//nom est une chaîne, hauteur est un entier qui indique la hauteur du calque en pixels
	//Action : modifie la hauteur du calque

	document.getElementById(nom).style.height=hauteur;	
}

function lire_hauteurcalque(nom){
	//nom est une chaîne
	//Action : retourne la hauteur du calque

	return document.getElementById(nom).offsetHeight;
}

function modifierindex(nom,valeur){
	//nom est une chaîne et valeur est un entier
	//Action : modifie le z-index d'un calque

	document.getElementById(nom).style.zindex=valeur;
}

function lire_index(nom){
	//nom est une chaîne
	//Action : retourne le z-index du calque

	return document.getElementById(nom).style.zindex;
}

//initialisation à -1 pour que cette variable ne puisse désigner aucune touche au démarrage
toucheactive=-1;

if(gecko>0){
	//détecte le code d'une touche avec un navigateur disposant du moteur Gecko

	function touche_gecko(evnt){
		toucheactive=evnt.keyCode;
	}
	document.onkeydown=touche_gecko;
}
else{
	//détecte le code d'une touche avec Internet Explorer et Opera
	//Attention avec certaines touches les indications d'Opera sont complètement fausses

	function touche_ie(){
		toucheactive=event.keyCode;
	}
	document.onkeydown=touche_ie;
}