
var $avatarUrl = document.getElementById('avatarUrl');
var $profileImage = document.getElementById('profileImage');

$avatarUrl.addEventListener('input', function (e) {
  var imgUrl = event.target.value;
  $profileImage.setAttribute('src', imgUrl);
});

var $form = document.getElementById('form');

$form.addEventListener('submit', function (e) {
  e.preventDefault();

  var formElements = document.forms[0].elements;
  for (var i = 0; i < formElements.length - 1; i++) {
    var formName = formElements[i].name;
    data.profile[formName] = formElements[i].value;
  }
  $form.reset();
  $profileImage.setAttribute('src', 'images/placeholder-image-square.jpg');
});
