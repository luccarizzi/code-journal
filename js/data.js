/* exported data */

var data = {
  view: 'edit-profile',
  profile: {
    username: '',
    fullName: '',
    location: '',
    avatarUrl: '',
    bio: ''
  },
  entries: []
};

var previousDataProfileJSON = localStorage.getItem('javascript-local-storage');

if (previousDataProfileJSON !== null) {
  data.profile = JSON.parse(previousDataProfileJSON);
}

window.addEventListener('beforeunload', function (e) {
  var dataProfileJSON = JSON.stringify(data.profile);
  localStorage.setItem('javascript-local-storage', dataProfileJSON);
});
