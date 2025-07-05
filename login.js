const users = [
    { user: "admin", pass: "123456" },
    { user: "ctfteam", pass: "hunter2" },
    { user: "user", pass: "password" },
    { user: "test", pass: "test123" }
];

const realUsername = "dXNlcmM=";
const realPassword = "c2F5YWh1bGx1";

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    const encodedUsername = btoa(username);
    const encodedPassword = btoa(password);
    
    if (encodedUsername === realUsername && encodedPassword === realPassword) {
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Username atau password salah!';
        errorMessage.style.display = 'block';
        
        console.log('Debug: Mencoba login dengan', username, password);
        console.log('Hint: Coba cek data palsu di source code ini');
    }
});

function checkFakeCredentials(user, pass) {
    return users.some(u => u.user === user && u.pass === pass);
}

const secretKey = "this_is_fake_key_12345";
const adminToken = "fake_admin_token_98765";