document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Contoh username dan password (harusnya disimpan di server)
    const validUsername = "radit";
    const validPassword = "candipari";

    if (username === validUsername && password === validPassword) {
        // Arahkan ke dashboard jika login berhasil
        window.location.href = 'dashboard.html'; // Ubah sesuai nama file dashboard Anda
    } else {
        errorMessage.textContent = 'Username atau password salah.';
    }
});
