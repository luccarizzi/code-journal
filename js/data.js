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

window.addEventListener('beforeunload', function (e) {
  var dataProfileJSON = JSON.stringify(data.profile);
  localStorage.setItem('javascript-local-storage', dataProfileJSON);
});
