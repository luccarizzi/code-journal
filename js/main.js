
var $avatarUrl = document.getElementById('avatarUrl');
var $profileImage = document.getElementById('profileImage');

$avatarUrl.addEventListener('input', function (e) {
  var imgUrl = event.target.value;
  $profileImage.setAttribute('src', imgUrl);
});

var $form = document.getElementById('form');

$form.addEventListener('submit', function (e) {
  var formElements = document.forms[0].elements;
  for (var i = 0; i < formElements.length - 1; i++) {
    var formName = formElements[i].name;
    data.profile[formName] = formElements[i].value;
  }
  $form.reset();
  $profileImage.setAttribute('src', 'images/placeholder-image-square.jpg');
});

function renderProfile(object) {

  var section = document.createElement('section');

  var divColumnFull = document.createElement('div');
  divColumnFull.setAttribute('class', 'column-full');

  var divRow = document.createElement('div');
  divRow.setAttribute('class', 'row');

  var h1 = document.createElement('h1');
  h1.textContent = object.profile.fullName;

  var divColumnHalf1 = document.createElement('div');
  divColumnHalf1.setAttribute('class', 'column-half profile-image-container');

  var divColumnHalf2 = document.createElement('div');
  divColumnHalf2.setAttribute('class', 'column-half font-18');

  var img = document.createElement('img');
  img.setAttribute('class', 'profile-image');
  img.setAttribute('src', object.profile.avatarUrl);
  img.setAttribute('alt', 'Profile image.');

  var div1 = document.createElement('div');
  var div2 = document.createElement('div');

  var p1 = document.createElement('p');
  p1.textContent = object.profile.username;

  var p2 = document.createElement('p');
  p2.textContent = object.profile.location;

  var p3 = document.createElement('p');
  p3.textContent = object.profile.bio;

  var i1 = document.createElement('i');
  i1.setAttribute('class', 'fas fa-user');

  var i2 = document.createElement('i');
  i2.setAttribute('class', 'fas fa-map-marker-alt');

  section.append(divColumnFull, divRow);
  divColumnFull.append(h1);
  divRow.append(divColumnHalf1, divColumnHalf2);
  divColumnHalf1.append(img);
  divColumnHalf2.append(div1, div2, p3);
  div1.append(i1, p1);
  div2.append(i2, p2);

  return section;
}

renderProfile(data);
