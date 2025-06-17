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
      <img src="${qrURL}" alt="QR Code" /><br>
      <a href="${qrURL}" download="qr_code.png">Download QR Code</a>
    `;
}
