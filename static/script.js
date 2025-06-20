document.getElementById("qrForm").addEventListener("submit", function (e) {
  e.preventDefault();
  generateQR();
});

async function generateQR() {
  const url = document.getElementById("urlInput").value;
  if (!url) {
    alert("Please enter a URL");
    return;
  }

  const response = await fetch("/generate_qr", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });

  const blob = await response.blob();
  const qrURL = URL.createObjectURL(blob);

  const qrImageDiv = document.getElementById("qrImage");
  qrImageDiv.innerHTML = `
    <img src="${qrURL}" alt="QR Code" id="qrCodeImage" /><br>
    <a href="${qrURL}" download="qr_code.png" id="downloadBtn">Download QR Code</a>
  `;
}
