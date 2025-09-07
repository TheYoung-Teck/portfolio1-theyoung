

//Animation des barres de progression au chargement de la page

window.addEventListener('DOMContentLoaded', () => {
  const progresses = document.querySelectorAll('.progress');
  progresses.forEach(progress => {
    const value = progress.getAttribute('data-progress');
    //On applique la largeur correspondant à la valeur
    progress.style.width = value + '%';
  });
});


//Pour la partie Contact
//Gestion du formulaire
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  //Validation simple
  if (!form.checkValidity()) {
    alert('Veuillez remplir tous les champs correctement.');
    return;
  }
  //Récupérer les valeurs
  const prenom = form.prename.value.trim();
  const nom = form.name.value.trim();
  const sujet = form.subject.value.trim();
  const message = form.message.value.trim();
  //Ici les données peuvent être envoyées via fetch ou autre method
  alert(`|Merci ${prename} ${name} pour votre message sur "${subject}". \n\nMessage:\n${message}`);
  //Reinitialiser le formulaire
  form.reset();
});
//Remplir [votre prenom] par un vrai prenom
document.getElementById('designerLink').textContent = 'Brice';
document.getElementById('designerLink').href = 'mailto:zobricol94@gmail.com'
