document.getElementById('proxyForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = document.getElementById('urlInput').value;
    
    try {
        const response = await fetch('/proxy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        });

        const data = await response.text();
        document.body.innerHTML += `<pre>${data}</pre>`;
    } catch (error) {
        console.error('Error:', error);
    }
});
