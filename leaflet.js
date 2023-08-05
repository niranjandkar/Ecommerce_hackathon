// Add the Google Calendar API script to your HTML file
<script src="https://apis.google.com/js/api.js"></script>

// Function to authenticate and create an event in Google Calendar
function addToGoogleCalendar(eventDate, eventSummary, eventDescription) {
  gapi.load('client:auth2', initClient);

  function initClient() {
    gapi.client.init({
      apiKey: 'YOUR_API_KEY',
      clientId: 'YOUR_CLIENT_ID',
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
      scope: 'https://www.googleapis.com/auth/calendar.events'
    }).then(function () {
      gapi.auth2.getAuthInstance().signIn().then(function () {
        var event = {
          'summary': eventSummary,
          'description': eventDescription,
          'start': {
            'date': eventDate
          },
          'end': {
            'date': eventDate
          }
        };

        var request = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event
        });

        request.execute(function (event) {
          console.log('Event created: ' + event.htmlLink);
        });
      });
    });
  }
}

// Example usage
var date = '2023-07-10';  // Date to add to Google Calendar
var summary = 'My Event';  // Event summary
var description = 'This is my event description.';  // Event description

addToGoogleCalendar(date, summary, description);
