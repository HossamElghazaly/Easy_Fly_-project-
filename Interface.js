<script>
    document.getElementById("createAccountLink").addEventListener("click", function (e) {
        e.preventDefault();
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("registration-form").classList.remove("hidden");
        });

    document.getElementById("signInLink").addEventListener("click", function (e) {
        e.preventDefault();
    document.getElementById("registration-form").classList.add("hidden");
    document.getElementById("login-form").classList.remove("hidden");
        });

    document.getElementById("signInButton").addEventListener("click", function () {
            const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    if (!email || !password) {
        alert("Please fill in all fields.");
    return;
            }
    alert("Login Successful!");
        });
</script>