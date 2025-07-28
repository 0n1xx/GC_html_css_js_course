// Making my website more interactive
$(document).ready(function () {

    // Using jQuery to dynamically import header and footer
    $(function () {
        $("#footer").load("./includes/footer.html");
        $("#header").load("./includes/header.html");
    });
    // Create a function which helps increase the price based on how many products does the
    // user choose, take notes from the lesson 10. This will be applied for a page with product

    // Create a character counter, take notes from the lesson 10

    // Search the text in the table
    $("#myInput").on("keyup", function (){
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function (){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});