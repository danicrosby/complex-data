import moment from 'moment';

const usersComponent = (users) => {
  $('#main-container').html(`
    <table class="table table-borderless table-hover">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Joined</th>
        </tr>
      </thead>
      <tbody id="users-list">
      </tbody>
    </table>
  `);

  users.forEach((user) => {
    $('#users-list').append(`
      <tr id="${user.id}">
        <th scope="row"><img class="user-list-img" src="${user.image}" alt="${user.first_name} ${user.last_name}" /></th>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td>${moment(user.date_joined).from()}</td>
      </tr>
    `);
  });
};

export default usersComponent;