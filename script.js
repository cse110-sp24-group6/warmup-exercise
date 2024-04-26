// JavaScript for handling user interactions and form submission

// Function to handle sentiment rating using images
const dinos = document.querySelectorAll('.dino');

function selectDino(dino) {
  dinos.forEach(d => d.classList.remove('selected'));
  dino.classList.add('selected');
}

function changeImage(id) {
    let ids= ["images/my-dino1.png", "images/my-dino2.png", "images/my-dino3.png", "images/my-dino4.png", "images/my-dino5.png"]; 
    let num = id.charAt(id.length - 5);
    let intValue = parseInt(num);

    for (let i = 0; i < 5; i++) {
        let newID = ids[i]
        var image = document.getElementById(newID);
        image.src = 'images/egg.png'; 
        image.setAttribute('width',88); 
        image.setAttribute('height',52.8);
        if (i < intValue && image.getAttribute('src')=='images/egg.png') { 
            image.src = id;
            image.setAttribute('width',70); 
            image.setAttribute('height',70);
        } 
    }
}

dinos.forEach(dino => dino.addEventListener('click', () => selectDino(dino)));

function sentRate(rating) {
    localStorage.setItem('sentimentRating', rating); // Store the sentiment rating in localStorage
        document.getElementById('sentimentPopup').classList.add('hidden'); // Hide the sentiment popup
        document.getElementById('ratingPopup').classList.remove('hidden'); // Show the rating popup
}

// Function to handle egg rating
function eggRate(rating) {
    localStorage.setItem('eggRating', rating);
    // Visual feedback: highlight the clicked eggs
    // for (let i = 1; i <= 5; i++) {
    //     const eggElement = document.getElementById('egg' + i);
    //     if (i <= rating) {
    //         eggElement.classList.add('rated');
    //     } else {
    //         eggElement.classList.remove('rated');
    //     }
    // }
}

// Function to close the rating popup
function closePopup() {
    // document.getElementById('ratingPopup').classList.add('hidden'); // Hide the rating popup
    window.location.href = 'thankyou_blank.html';
}



function submitForm() {
    const sentimentRating = localStorage.getItem('sentimentRating');
    const eggRating = localStorage.getItem('eggRating');
    const comments = document.getElementById('comments').value;

    // Store feedback in sessionStorage (optional)
    sessionStorage.setItem('sentimentRating', sentimentRating);
    sessionStorage.setItem('eggRating', eggRating);
    sessionStorage.setItem('comments', comments);
    
    // You can replace this with your form submission logic (e.g., sending data to a server)
    console.log('Sentiment Rating:', sentimentRating);
    console.log('Egg Rating:', eggRating);
    console.log('Additional Comments:', comments);

    // Redirect to the thank you page
    window.location.href = 'thankyou.html';
}

function back() {
    window.location.href = 'rating.html';
}