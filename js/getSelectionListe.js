function getSelectionsListe(id) {
  const liste = document.querySelector(id);
  const rtl = "\n";
  let lsSelections = "";
  for (let i = 0; i < liste.options.length; i++) {
    if (liste.options[i].selected) {
      lsSelections += liste.options[i].value + "," + " ";
    }
  }
  return `${lsSelections.substring(0, lsSelections.length - 2)}.`;
}
