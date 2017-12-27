function attachEvents() {
$('.location-form>button').click(function (e) {
    ('.result').show();

    e.preventDefault();

    let inputValue = $('.location-input').val();

    if (inputValue.length > 0) {
        console.log('bigger');
        $('.result').append('<div class="result-element">' + inputValue + '</div>');
    }

    $('.location-input').val('');
});
}
