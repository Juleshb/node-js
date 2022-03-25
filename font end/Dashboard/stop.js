function logout() {
    auth.signOut().then(res=>{
        auth.onAuthStateChanged(user => {
            if (user) {

            } else {
                location.href = "../login.html"
            }
        })
    })
}
