const correctData = {
    nama: "Reza Maulana",
    ttl: "Depok, 10 Januari 2004",
    email: "reza.mln@starbhak.sch.id"
};

const flagParts = [
    "ZmxhZw==",
    "e3RlbXVyYWg=",
    "X3Nhbm5nYXRfZGVuZ2Fu",
    "fQ=="
];

document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value.trim();
    const ttl = document.getElementById('ttl').value.trim();
    const email = document.getElementById('email').value.trim();
    const resultMessage = document.getElementById('resultMessage');
    
    if (nama === correctData.nama && 
        ttl === correctData.ttl && 
        email === correctData.email) {
        resultMessage.innerHTML = `
            <div class="success-message">
                <h3>🎉 Selamat! Data Benar!</h3>
                <p>Berikut adalah flag dalam bentuk base64:</p>
                <div class="flag-container">
                    <p><strong>Part 1:</strong> ${flagParts[0]}</p>
                    <p><strong>Part 2:</strong> ${flagParts[1]}</p>
                    <p><strong>Part 3:</strong> ${flagParts[2]}</p>
                    <p><strong>Part 4:</strong> ${flagParts[3]}</p>
                </div>
                <p class="flag-hint">💡 Gabungkan semua part dan decode dari base64 untuk mendapatkan flag!</p>
                <div class="final-flag">
                    <p><strong>Flag:</strong> flag{temurah_sannngat_dengan}</p>
                </div>
            </div>
        `;
        resultMessage.style.display = 'block';
        resultMessage.className = 'result-message success';
        
    } else {
        resultMessage.innerHTML = `
            <div class="error-message">
                <h3>❌ Data Salah!</h3>
                <p>Silakan cek kembali data yang Anda masukkan.</p>
                <p>💡 Hint: Kumpulkan clue dari halaman-halaman website secara teliti.</p>
            </div>
        `;
        resultMessage.style.display = 'block';
        resultMessage.className = 'result-message error';
    }
});

function decodeBase64(str) {
    return atob(str);
}

const secretData = {
    key: "fake_secret_key",
    token: "fake_token_123"
}; 