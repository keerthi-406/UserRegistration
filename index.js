document.getElementById('submitForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch('http://localhost:3000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        });

        const result = await response.text();
        if (response.ok) {
            alert('Data submitted successfully: ' + result);
        } else {
            alert('Error: ' + result);
        }
    } catch (err) {
        console.error('Error:', err);
    }
});
