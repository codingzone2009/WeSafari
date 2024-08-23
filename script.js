// Responsive JavaScript
$(document).ready(function() {
    // Initialize Carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // Handle Form Submission
    $('#bookingForm').on('submit', function(e) {
        e.preventDefault();
        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            date: $('#date').val()
        };
        
        // Simulate AJAX request
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function(response) {
                $('#formResponse').html('<div class="alert alert-success">Your booking has been submitted successfully!</div>');
            },
            error: function() {
                $('#formResponse').html('<div class="alert alert-danger">There was an error submitting your booking.</div>');
            }
        });
    });
});
