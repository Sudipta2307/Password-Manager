document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const website = document.getElementById('website').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const table = document.getElementById('passwordTable');
    const newRow = table.insertRow(-1);

    // Mask the password initially
    const maskedPassword = '*'.repeat(password.length);

    // Add data to the new row
    newRow.innerHTML = `
        <td>${website}</td>
        <td>${username}</td>
        <td>
            <span class="masked">${maskedPassword}</span>
            <span class="unmasked" style="display: none;">${password}</span>
            <button class="toggle-btn">Show</button>
        </td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    // Clear form inputs
    document.getElementById('passwordForm').reset();

    // Add toggle functionality for password visibility
    const toggleBtn = newRow.querySelector('.toggle-btn');
    toggleBtn.addEventListener('click', function () {
        const masked = newRow.querySelector('.masked');
        const unmasked = newRow.querySelector('.unmasked');

        if (unmasked.style.display === 'none') {
            // Show the unmasked password
            unmasked.style.display = 'inline';
            masked.style.display = 'none';
            toggleBtn.textContent = 'Hide';
        } else {
            // Mask the password again
            unmasked.style.display = 'none';
            masked.style.display = 'inline';
            toggleBtn.textContent = 'Show';
        }
    });

    // Add delete functionality
    newRow.querySelector('.delete-btn').addEventListener('click', function () {
        table.deleteRow(newRow.rowIndex);
    });
});
