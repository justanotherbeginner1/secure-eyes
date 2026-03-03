function addFakeLog() {
    const logBody = document.getElementById('logBody');
    
    const events = ["Intrusion Detected", "Motion Detected", "Door Forced Open", "Camera Offline", "System Breach"];
    const locations = ["Parking Garage B", "Main Entrance", "Server Room 402", "North Corridor", "Roof Access"];
    const randomID = "ALT-" + Math.floor(3000 + Math.random() * 9000);
    

    const now = new Date();
    const timeStr = now.toLocaleString('en-US', { 
        month: 'short', day: '2-digit', year: 'numeric', 
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true 
    }).replace(',', ' •');


    const newRow = document.createElement('tr');
    newRow.classList.add('new-log-row'); 
    
    newRow.innerHTML = `
        <td>${randomID}</td>
        <td class="event-name">${events[Math.floor(Math.random() * events.length)]}</td>
        <td>${locations[Math.floor(Math.random() * locations.length)]}</td>
        <td>${timeStr}</td>
        <td><span class="badge badge-critical">Critical</span></td>
        <td><button class="details-link">Details</button></td>
    `;

    logBody.prepend(newRow);
}