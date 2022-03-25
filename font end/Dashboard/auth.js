
function isLoginedIn()
{
    let token = localStorage.getItem("token");
    if(token==null)
    {
        location.href = '../login.html'
    }
}
isLoginedIn()

 function logout()
{
  localStorage.clear();
  window.location.reload();
}

//document.getElementById("logoutBtn").addEventListener("click",ev=>logout())
