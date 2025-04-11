// This file will contain the JavaScript for the web demo
document.getElementById('submitBtn').addEventListener('click', function() {
    var userInput = document.getElementById('userInput').value;
    fetch('https://api-inference.huggingface.co/models/raarongraham/model1-qa', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer <YOUR_HF_API_TOKEN>', 'Content-Type': 'application/json' },
        body: JSON.stringify({ inputs: userInput })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerText = data[0].answer;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('output').innerText = 'An error occurred.';
    });
});
