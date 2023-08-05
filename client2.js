function trackPackage() {
    var trackingNumber = document.getElementById('trackingNumberInput').value;

    // Simulate API call to fetch tracking information
    setTimeout(function() {
        var trackingInfo = getTrackingInfo(trackingNumber);
        displayTrackingInfo(trackingInfo);
    }, 2000); // Simulate delay of 2 seconds for API response
}

function getTrackingInfo(trackingNumber) {
    // Simulated tracking information
    var trackingInfo = {
        trackingNumber: trackingNumber,
        status: "In Transit",
        location: "Warehouse A",
        deliveryDate: "July 15, 2023"
    };

    return trackingInfo;
}

function displayTrackingInfo(trackingInfo) {
    var trackingResultsDiv = document.getElementById('trackingResults');
    trackingResultsDiv.innerHTML = `
        <p><strong>Tracking Number:</strong> ${trackingInfo.trackingNumber}</p>
        <p><strong>Status:</strong> ${trackingInfo.status}</p>
        <p><strong>Location:</strong> ${trackingInfo.location}</p>
        <p><strong>Delivery Date:</strong> ${trackingInfo.deliveryDate}</p>
    `;
}