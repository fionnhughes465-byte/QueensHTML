const userFeatures = document.getElementById("userFeatures");  //the entire drop down list
const selectFeatures = document.getElementById("selectFeatures"); //the innards of the drop down list
const signInButton = document.getElementById("signInButton"); //the button to either sign in or out

//Gets the UserID that was stored from the createAccount page
const userIDToolbar = localStorage.getItem("userID");

//If there's no UserID found, then it will hide the stuff for the users
if (!userIDToolbar) userFeatures.style.display = 'none';
else {
    if (/[U]/.test(userIDToolbar)) { //if it is a user, hide the stuff for reviewers
        selectFeatures.remove(3);
        selectFeatures.remove(2);
    } 
    //Change the sign in button to sign out
    signInButton.textContent = "Sign out";
}

//Either signs in or signs out.
signInButton.addEventListener("click", async function(event) {
    if (signInButton.textContent == "Sign In")
        window.location.href = "login.html";
    else {
        localStorage.setItem("userID","");
        window.location.reload();
    }
});

//navigates to wherever the user chooses
selectFeatures.addEventListener("change", async function(event) {
    switch (this.value){
        case "account" : window.location.href = "account.html"; break;
        case "reviewIssues" : window.location.href = "reviewIssue.html"; break;
        case "addOrganizations" : window.location.href = "createOrganization.html"; break;
    }
});