// Using simple JavaScript
// Waiting until the whole html file is loaded
document.addEventListener('DOMContentLoaded', function(){
    // Creating a function for counting letters
    document.getElementById('writing_problem').addEventListener('input', function (){
        // this.value refers to the current value of the text area
        const text = this.value
        //upgrade the character count display
        document.getElementById('charCount').textContent = `Characters: ${text.length}`;
    })
});

// Using jQuery
$(document).ready(function () {

    // Using jQuery to dynamically import header and footer
    $(function () {
        $("#footer").load("./includes/footer.html");
        $("#header").load("./includes/header.html");
    });
    // Create a function which helps increase the price based on how many products does the
    // user choose, take notes from the lesson 10. This will be applied for a page with product

    // Search the text in the table
    $("#myInput").on("keyup", function (){
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function (){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    // Create a function that will display cool after you submit a form
    $('.add-to-cart-btn').click(function () {
        $(this).next('.success-message').fadeToggle();
    });
});