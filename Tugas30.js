function regex(value) {
  var kalimat = "Para tetua adat mendiskusikan masalah kejahatan yang terjadi di rumah adat";
  var ambilData = kalimat.match(/[es]/g)
  console.log(ambilData);
}

regex();
