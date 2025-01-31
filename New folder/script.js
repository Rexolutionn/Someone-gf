// Get the profile container and profile information elements
const profileContainer = document.querySelector('.profile-container');
const profileInfo = document.querySelector('.profile-info');
const profilePicture = document.querySelector('.profile-picture');

// Get the toggle button and edit button elements
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Profile';
toggleButton.onclick = toggleProfile;

const editButton = document.createElement('button');
editButton.textContent = 'Edit Profile';
editButton.onclick = editProfile;

// Add the toggle button and edit button to the profile container
profileContainer.appendChild(toggleButton);
profileContainer.appendChild(editButton);

// Function to toggle the visibility of the profile information
function toggleProfile() {
    profileInfo.classList.toggle('hidden');
}

// Function to edit the profile information
function editProfile() {
    // Create a form to update the profile information
    const editForm = document.createElement('form');
    editForm.innerHTML = `
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value="Emily Johnson"><br><br>
        <label for="birthdate">Birthdate:</label>
        <input type="date" id="birthdate" name="birthdate" value="1995-02-12"><br><br>
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" value="28"><br><br>
        <label for="occupation">Occupation:</label>
        <input type="text" id="occupation" name="occupation" value="Software Engineer"><br><br>
        <label for="hobbies">Hobbies:</label>
        <input type="text" id="hobbies" name="hobbies" value="Reading, Hiking, Cooking"><br><br>
        <label for="favoriteFood">Favorite Food:</label>
        <input type="text" id="favoriteFood" name="favoriteFood" value="Italian"><br><br>
        <label for="favoriteMovie">Favorite Movie:</label>
        <input type="text" id="favoriteMovie" name="favoriteMovie" value="The Shawshank Redemption"><br><br>
        <input type="submit" value="Update Profile">
    `;

    // Add the form to the profile container
    profileContainer.appendChild(editForm);

    // Add an event listener to the form to update the profile information
    editForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get the form fields
        const name = editForm.elements.name.value;
        const birthdate = editForm.elements.birthdate.value;
        const age = editForm.elements.age.value;
        const occupation = editForm.elements.occupation.value;
        const hobbies = editForm.elements.hobbies.value;
        const favoriteFood = editForm.elements.favoriteFood.value;
        const favoriteMovie = editForm.elements.favoriteMovie.value;

        // Validate the form fields
        if (name === '' || birthdate === '' || age === '' || occupation === '' || hobbies === '' || favoriteFood === '' || favoriteMovie === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Update the profile information
        profileInfo.innerHTML = `
            <h2>Girlfriend Profile</h2>
            <ul>
                <li><span>Name:</span> ${name}</li>
                <li><span>Birthdate:</span> ${birthdate}</li>
                <li><span>Age:</span> ${age}</li>
                <li><span>Occupation:</span> ${occupation}</li>
                <li><span>Hobbies:</span> ${hobbies}</li>
                <li><span>Favorite Food:</span> ${favoriteFood}</li>
                <li><span>Favorite Movie:</span> ${favoriteMovie}</li>
            </ul>
        `;

        // Remove the form from the profile container
        profileContainer.removeChild(editForm);
    });
}

// Add a class to hide the profile information
profileInfo.classList.add('hidden');