
var $avatarUrlInput = document.getElementById('avatarUrl');
var $profileImage = document.getElementById('profileImage');

$avatarUrlInput.addEventListener('input', function (e) {
  var imgUrl = event.target.value;
  $profileImage.setAttribute('src', imgUrl);
});
