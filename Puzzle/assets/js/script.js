var profile_name = localStorage.getItem('name');
var mobile = localStorage.getItem('mobile');
var dob = localStorage.getItem('dob');
var address = localStorage.getItem('address');
var profile_pic = localStorage.getItem('upload');
var html = '<div class="row"><div class="col-12 text-center bg-blue br-top"><img src="'+profile_pic+'" alt="Profile Pic" class="img-fluid profile_pic mt-4"><h5 class="profile_name">'+profile_name+'</h5><p class="profile_dob"><b>DOB:</b> '+dob+'</p></div><div class="col-12 text-left bg-light br-bottom"><p class="profile_mobile mt-3"><b>Mobile :</b>'+mobile+'</p><p class="profile_address"><b>Address:</b> '+address+'</p><a href="./" id="newGame" class="p-2">Logout</a></div></div>';

function start()
{
  details = document.getElementById("details");
  details.innerHTML = html;
}
window.addEventListener( "load", start, false );






