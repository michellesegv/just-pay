$.getJSON("data.json", (data) => {
  const listItem = (contact) => {
    const divContact = $('<div class="contact"></div>');
    const divData = $('<div class="data-contact"></div>')
    const divName = $(`<h6 class='text-left'>${contact.name}</h6>`);
    const divPhone = $(`<p class='text-left'>${contact.phone}</p>`);
    const divIcon = $('<div class="image-user center"></div>');
    const imageUser = $('<i class="user-icon material-icons">account_circle</i>');
    const send = $('<i class="send-icon material-icons left">send</i>');

    divIcon.append(imageUser);
    divData.append(divName);
    divData.append(divPhone);
    divContact.append(divIcon);
    divContact.append(divData);
    divContact.append(send);

    send.on('click',(e)=>{
      e.preventDefault();
      localStorage.setItem('nameContact', $(e.target.parentElement.children[1].children[0]).text());
      localStorage.setItem('phoneContact', $(e.target.parentElement.children[1].children[1]).text());
      window.location = 'payment.html';
    });
    return divContact;
  }

  const filterByContact = (contacts,query) => {
    const contactFiltered = contacts.filter((e)=>{
      return e.name.toLowerCase().indexOf(query.toLowerCase())!=-1;
    });
    return contactFiltered;
  }

  const reRender = (listContainer, contactFiltered) => {
    listContainer.empty();
    contactFiltered.forEach(contact => {
      listContainer.append(listItem(contact));
    });
  }

  $('#name-contact').on('keyup',(e)=>{
    if ($('#name-contact').val() != "") {
      const contactFiltered = filterByContact(data,$('#name-contact').val());
      reRender($('#list'), contactFiltered);
    }
  });
});


