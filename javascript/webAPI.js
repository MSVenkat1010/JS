// Web API functions
window.alert("Welcome to the Web API example!");


export function logMessage(message) {
    console.log(message);

    window.alert(message);

    fetch('https://example.com/api/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    })
    .then(response => response.json())
    .then(data => console.log('Server response:', data))
    .catch(error => console.error('Error logging message:', error));
    
};