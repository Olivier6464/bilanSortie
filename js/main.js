
function makeReport(e) {
    e.preventDefault();
    let besoin = document.querySelector("#besoin").value;
    let civilite = document.querySelector("#genre").value;
    let nom = document.querySelector("#nom").value;
    let autonomie = document.querySelector("#autonomie").value;
    let distance = document.querySelector("#distance").value;
    let patient = "";
    let pronom = "";
    if (civilite == "Madame") {
        patient = "la patiente";
        pronom = "Elle";
    } else {
        patient = "le patient";
        pronom = "Il"
    }
    let transferts = getSelectionsListe("#transferts");

    let abesoin =
        besoin == "est autonome"
            ? "est autonome pour les transferts"
            : `${besoin} pour les transferts de type ${transferts}`;
    let douleur = document.querySelector("#douleur").value;
    let location = document.querySelector("#location").value;
    if (douleur == "0/4") {
        douleur = `${douleur} EVS`;
    } else {
        douleur = `${douleur} EVS ${location}`;
    }

    let bilanText = `${civilite} ${nom} a bénéficié de séances de rééducation.
${pronom} ${abesoin} 
La douleur est estimée à ${douleur}.
Au niveau de l'autonomie dans les déplacements ${patient} ${autonomie}, son périmètre de marche est d'environ ${distance}
    `;

    if (document.querySelector('h1').innerText=="Bilan intermédiaire"){
        bilanText = `======  Bilan intermédiaire  ====== 
        
${bilanText}`; 
    }

    // ====================== SORTIE DU TEXT =======================

    document.querySelector("#output").innerHTML = bilanText;
};

document.querySelector("#genere").addEventListener("click", makeReport
    ,false);

