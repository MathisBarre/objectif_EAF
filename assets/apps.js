let cardAuteurCollection = document.getElementsByClassName("card_auteur");
for (let i = 0; i < cardAuteurCollection.length; i++) {
   const cardAuteur = cardAuteurCollection[i];
   const biographieElt = cardAuteur.getElementsByClassName("biographie_auteur")[0];
   cardAuteur.addEventListener("click", function(e) {
      if (biographieElt.style.display === "block") {
         biographieElt.style.display = "none";
      } else {
         biographieElt.style.display = "block";
      }
   })
}