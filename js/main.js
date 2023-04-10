
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
        pronom = "elle";
    } else {
        patient = "le patient";
        pronom = "il"
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

    // ====================== SORTIE DU TEXT =======================

    document.querySelector("#output").innerHTML = `${civilite} ${nom} a bénéficié de séances de rééducation,
${pronom} ${abesoin} 
la douleur est estimée à ${douleur}.
Au niveau de l'autonomie dans les déplacements ${patient} ${autonomie}, son périmètre de marche est d'environ ${distance}
`;
};

document.querySelector("#genere").addEventListener("click", makeReport
    ,false);

