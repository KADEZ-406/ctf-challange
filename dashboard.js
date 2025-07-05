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

console.log("Dashboard.js loaded");
console.log("Correct data:", correctData);

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded");
    
    const form = document.getElementById('dataForm');
    if (form) {
        console.log("Form found");
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log("Form submitted");
            
            const nama = document.getElementById('nama').value.trim();
            const ttl = document.getElementById('ttl').value.trim();
            const email = document.getElementById('email').value.trim();
            const resultMessage = document.getElementById('resultMessage');
            
            console.log("Input values:", { nama, ttl, email });
            console.log("Expected values:", correctData);
            
            if (nama === correctData.nama && 
                ttl === correctData.ttl && 
                email === correctData.email) {
                console.log("Data correct - showing flag");
                resultMessage.innerHTML = `
                    <div class="success-message">
                        <h3>🎉 Selamat! Data Benar!</h3>
                        <p>Berikut adalah flag dalam bentuk base64:</p>
                        <div class="flag-container">
                            <p><strong>Part 1:</strong> ${flagParts[0]}</p>
                            <p><strong>Part 2:</strong> ${flagParts[1]}</p>
                            <p><strong>Part 3:</strong> ${flagParts[2]}</p>
                        </div>
                        <p class="flag-hint">💡 Gabungkan semua part dan decode dari base64 untuk mendapatkan flag!</p>
                        
                        <div class="decode-section">
                            <h4>🔍 Decode Base64</h4>
                            <p>Gabungkan part 1 + part 2 + part 3 + "fQ==" dan decode:</p>
                            <div class="decode-input">
                                <input type="text" id="base64Input" placeholder="Masukkan base64 yang sudah digabung" style="width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;">
                                <button onclick="decodeBase64Input()" class="decode-btn">Decode</button>
                            </div>
                            <div id="decodeResult" class="decode-result"></div>
                        </div>
                    </div>
                `;
                resultMessage.style.display = 'block';
                resultMessage.className = 'result-message success';
                
            } else {
                console.log("Data incorrect - showing error");
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
    } else {
        console.log("Form not found");
    }
});

function decodeBase64Input() {
    const input = document.getElementById('base64Input').value.trim();
    const resultDiv = document.getElementById('decodeResult');
    
    if (!input) {
        resultDiv.innerHTML = '<p style="color: red;">Masukkan base64 terlebih dahulu!</p>';
        return;
    }
    
    try {
        const decoded = atob(input);
        resultDiv.innerHTML = `
            <div class="decoded-flag">
                <p><strong>Hasil Decode:</strong> ${decoded}</p>
                <p style="color: green; font-weight: bold;">🎉 Selamat! Anda berhasil mendapatkan flag!</p>
            </div>
        `;
    } catch (error) {
        resultDiv.innerHTML = '<p style="color: red;">Error: Base64 tidak valid!</p>';
    }
}

function decodeBase64(str) {
    return atob(str);
}

const secretData = {
    key: "fake_secret_key",
    token: "fake_token_123"
}; 