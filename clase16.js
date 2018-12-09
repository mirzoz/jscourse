var zodiacSign = prompt(`Cual es tu signo zodiacal?`)


console.log(zodiacSign)

switch (zodiacSign) {
  case 'acuario' :
    console.log(`Habrá buen ambiente en el trabajo, esto permitirá a Acuario desarrollar grandes propuestas para renovar cierto proyecto que no avanza, esto le dará la confianza suficiente a Acuario para afrontar los retos que se presenten a finales de año y los cuales le harán llegar al éxito profesional al que aspira.`)
    break
  case 'piscis' :
    console.log(`Piscis tendrá tiempo para repasar cierta información con temas de trabajo que en este último mes del año exigen más conocimientos, será un avance importante que permitirá a Piscis alcanzar aquellos objetivos a los que aspira a nivel profesional.`)
    break
  default:
    console.log(`Te vas a morir goey`)
    break
}



