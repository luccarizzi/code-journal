
var $avatarUrl = document.getElementById('avatarUrl');
var $profileImage = document.getElementById('profileImage');

$avatarUrl.addEventListener('input', function (e) {
  var imageUrl = e.target.value;
  $profileImage.setAttribute('src', imageUrl);
  if ($avatarUrl.value === '') {
    $profileImage.setAttribute('src', 'images/placeholder-image-square.jpg');
  }
});

var $photoUrl = document.getElementById('photoUrl');
var $entryImage = document.getElementById('entryImage');

$photoUrl.addEventListener('input', function (e) {
  var photoUrl = e.target.value;
  $entryImage.setAttribute('src', photoUrl);
  if ($photoUrl.value === '') {
    $entryImage.setAttribute('src', 'images/placeholder-image-square.jpg');
  }
});

var $formProfile = document.getElementById('profileForm');

$formProfile.addEventListener('submit', function (e) {

  var $avatarUrlValue = document.getElementById('avatarUrl').value;
  var $usernameValue = document.getElementById('username').value;
  var $fullNameValue = document.getElementById('fullName').value;
  var $locationValue = document.getElementById('location').value;
  var $bioValue = document.getElementById('bio').value;

  data.profile.avatarUrl = $avatarUrlValue;
  data.profile.username = $usernameValue;
  data.profile.fullName = $fullNameValue;
  data.profile.location = $locationValue;
  data.profile.bio = $bioValue;

  e.preventDefault();

  $formProfile.reset();

  $profileImage.setAttribute('src', 'images/placeholder-image-square.jpg');

  swapView('profile');

  for (var k = 0; k < $aList.length; k++) {
    $aList[k].setAttribute('class', 'view font-white');
  }
});

var $formEntry = document.getElementById('entryForm');

$formEntry.addEventListener('submit', function (e) {

  var $notesValue = document.getElementById('notes').value;
  var $photoUrlValue = document.getElementById('photoUrl').value;
  var $titleValue = document.getElementById('title').value;

  var entryValues = {
    notes: $notesValue,
    photoUrl: $photoUrlValue,
    title: $titleValue
  };
  data.entries.unshift(entryValues);
  e.preventDefault();
  $formEntry.reset();
  $entryImage.setAttribute('src', 'images/placeholder-image-square.jpg');
  swapView('entries');
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
  divColumnHalf1.setAttribute('class', 'column-half image-container');

  var divColumnHalf2 = document.createElement('div');
  divColumnHalf2.setAttribute('class', 'column-half font-18 paragraph');

  var img = document.createElement('img');
  img.setAttribute('class', 'image');
  img.setAttribute('src', object.profile.avatarUrl);
  img.setAttribute('alt', 'Profile image.');

  var div1 = document.createElement('div');
  div1.setAttribute('class', 'paragraph-icon');

  var div2 = document.createElement('div');
  div2.setAttribute('class', 'paragraph-icon');

  var div3 = document.createElement('div');
  div3.setAttribute('class', 'paragraph-bio');

  var div4 = document.createElement('div');

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

  var a = document.createElement('a');
  a.setAttribute('class', 'edit-button font-lato-400 font-white');
  a.setAttribute('href', '#');
  a.setAttribute('data-view', 'edit-profile');
  a.textContent = 'edit';

  section.append(divColumnFull, divRow);
  divColumnFull.append(h1);
  divRow.append(divColumnHalf1, divColumnHalf2);
  divColumnHalf1.append(img);
  divColumnHalf2.append(div1, div2, div3, div4);
  div1.append(i1, p1);
  div2.append(i2, p2);
  div3.append(p3);
  div4.append(a);

  return section;
}

function renderEntry () {
  var divRow = document.createElement("div");
  divRow.setAttribute("class", "row margin-bottom");

  var divImage = document.createElement("div");
  divImage.setAttribute("class", "column-half image-container");

  var divText = document.createElement("div");
  divText.setAttribute("class", "column-half");

  var img = document.createElement("img");
  img.setAttribute("class", "image");
  img.setAttribute("src", object.entries[0].photoUrl);
  img.setAttribute("alt", "Entry image.");

  var h2 = document.createElement("h2");
  h2.textContent = object.entries[0].title;

  var p = document.createElement("p");
  p.setAttribute("class", "font-18 paragraph-bio");
  p.textContent = object.entries[0].notes;

  divRow.append(divImage, divText);
  divImage.append(img);
  divText.append(h2, p);

  return divRow;
}



var $viewList = document.querySelectorAll('.view');
var form = document.forms[0].elements;
var $aList = document.querySelectorAll('a[data-view]');

function swapView(view) {
  for (var i = 0; i < $viewList.length; i++) {
    if ($viewList[i].getAttribute('data-view') === view) {
      $viewList[i].setAttribute('class', 'view');
      if (view === 'profile') {
        $viewList[i].innerHTML = '';
        $viewList[i].appendChild(renderProfile(data));
      } else if (view === 'edit-profile') {
        if (data.profile.username === '') {
          for (var k = 0; k < $aList.length; k++) {
            $aList[k].setAttribute('class', 'hidden');
          }
        } else if (data.profile.username !== '') {
          for (var j = 0; j < form.length - 1; j++) {
            var formName = form[j].name;
            if (formName === 'avatarUrl') {
              $profileImage.setAttribute('src', data.profile.avatarUrl);
            }
            form[j].value = data.profile[formName];
          }
        }
      }
    } else {
      $viewList[i].setAttribute('class', 'view hidden');
    }
  }
  if (view === 'entries') {
    document.querySelector('a[data-view=create-entry]').className = 'edit-button font-lato-400 font-white view';
  }
  data.view = view;
}

document.addEventListener('DOMContentLoaded', function (e) {
  if (data.profile.username === '') {
    swapView('edit-profile');
  } else {
    swapView(data.view);
  }
});

document.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    swapView(e.target.getAttribute('data-view'));
  }
});
