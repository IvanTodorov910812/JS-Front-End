$(() => {
    const host = 'https://phonebooklab.firebaseio.com/phonebook/';
    const list = $('#phonebook');
    const personInput = $('#person');
    const phoneInput = $('#phone');
    const errorMsg = $('#error');

    // Attach event listeners to buttons
    $('#btnLoad').click(loadContacts);
    $ ('#btnCreate').click(createContact);

    loadContacts();

    // Implement loading of contact
    // -on lick send GET request
    // -display  data in list(clear list first)
    function loadContacts(){
        list.empty();
        list.html('<li>Loading &hellip;</li>');
        $.ajax({
            url: host + '.json',
            success: loadSuccess
        })

        function loadSuccess(data) {
            list.empty();
            for (let key in data){
                let entry = data[key];
                appendContact(entry, key);
            }
        }
    }

    function appendContact(entry, key) {

        const contact = $(`<li data-id="${key}">${entry.person}: ${entry.phone}</li>`);
        const deleteButton = $('<button>Delete</button>');
        deleteButton.click(deleteContact);
        contact.append(deleteButton);
        list.append(contact);
    }

    // Implement creating contacts
    // -take values from inputs
    // -make POST request with data
    // -(optinal) refresh GET request
    // -(OR) optimistic local update

    function createContact() {
        const person = personInput.val();
        const phone = phoneInput.val();
        if(person.length < 1 || phone.length < 1){
            errorMsg.text('Both Person and Phone are required.');
                return;
        }
        errorMsg.empty();
        $.ajax({
            url: host + '.json',
            method: 'POST',
            data: JSON.stringify({person, phone}),
            success: createSuccess
        });

        function createSuccess(data) {
            const person = personInput.val();
            const phone = phoneInput.val();
            personInput.val('');
            phoneInput.val('');
            appendContact({person, phone});
            console.log(data);
        }
    }


    // Implement delete contact
    // -add delete button to list
    // -send DELETE request containing contact ID
    function deleteContact(id) {
        const item = $(this).parent();
        const key = item.attr('data-id');
        $.ajax({
            url: host + key + '.json',
            method: 'DELETE',
            success: deleteSuccess
        });
        function deleteSuccess() {
                item.remove();
        }
    }
});