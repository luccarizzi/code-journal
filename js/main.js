
var $avatarUrl = document.getElementById('avatarUrl');
var $profileImage = document.getElementById('profileImage');

$avatarUrl.addEventListener('input', function (e) {
  var imgUrl = event.target.value;
  $profileImage.setAttribute('src', imgUrl);
});

var $submit = document.querySelector('.input-submit');

$submit.addEventListener('click', function (e) {
  e.preventDefault();
});
