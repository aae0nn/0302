// Movie data array
const movies = [
    {
        id: 1,
        title: "The Shining",
        poster: "https://cdn1.ozone.ru/s3/multimedia-0/c600/6146129868.jpg",
        description: "Stanley Kubrick's elegant adaptation of Stephen King's haunted-hotel story, starring a wonderfully deranged Jack Nicholson, is often cited as The Scariest Horror Movie Ever Made (perhaps tied with The Exorcist), but it's also the Least Suitable Movie To Watch On Father's Day Ever. Unless you're the kind of Dad who thinks obsessively typing the same sentence over and over then chasing after your wife and kid with an axe constitutes good parenting.",
        trailer: "https://www.youtube.com/embed/S014oGZiSdI"
    },
    {
        id: 2,
        title: "Interstellar",
        poster: "https://i.pinimg.com/736x/8e/0d/ab/8e0dab8699be85720ce55845065bf6dc.jpg",
        description: "Christopher Nolan's tribute to 2001 and The Right Stuff (with a little added The Black Hole) presents long-distance space travel as realistically as it's possible to with the theoretical physics currently available. From the effects of gravity to the emotional implication of time dilation, it mixes science and sentiment to great effect. And it has a sarcastic robot, too",
        trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
        id: 3,
        title: "Gladiator",
        poster: "https://www.kino-teatr.ru/movie/poster/30220/49944.jpg",
        description: "Ridley Scott's comeback (after a bad run with 1492, White Squall and G.I. Jane). Russell Crowe's big Hollywood breakthrough. And, thanks to the scope of Scott's visual ambition combined with a leap forward in CGI quality, it's the movie that showed the industry you could make colossal historical epics commercially viable once more. Yes, we were entertained.",
        trailer: "https://www.youtube.com/embed/P5ieIbInFpg"
    },
    {
        id: 4,
        title: "La La Land",
        poster: "https://cdn.abicart.com/shop/16575/art75/h1475/177221475-origpic-e3ce32.jpg",
        description: "As much a technical marvel as it is an acting tour-de-force, Damien Chazelle's Los Angeles love letter proved a ridiculously easy movie to fall in love with, even for those who may have grumbled that they weren't really into musicals before sitting down to watch it. Go on, admit it: You're still humming 'Another Day Of Sun', aren't you?",
        trailer: "https://www.youtube.com/embed/0pdqf4P9MB8"
    },
    {
        id: 5,
        title: "UP",
        poster: "https://cdn1.ozone.ru/s3/multimedia-a/6195261238.jpg",
        description: "A lot has been said about the opening to Pete Docter's Pixar masterpiece, and rightly so, wringing tears from the hardest of hearts with a wordless sequence set to Michael Giacchino's lovely, Oscar-winning score that charts the ups and downs of a couple's marriage. Yet while the majority of the film is more of a straight-ahead adventure tale (albeit one with a wacky bird and talking dogs), that doesn't make it any less satisfying. And let's be honest — the story of a man who uses balloons to float his house to a foreign land, accidentally picking up a young wilderness explorer scout as he does, feels perfectly Pixar.",
        trailer: "https://www.youtube.com/embed/HWEW_qTLSEE"
    },
    {
        id: 6,
        title: "Black Panther",
        poster: "https://i.pinimg.com/736x/b8/ce/c7/b8cec7d7e348590d72a70c9441fc73e5.jpg",
        description: "After his standout introduction in Captain America: Civil War, 2018's Black Panther allowed us to properly meet Chadwick Boseman's T'Challa, and see his Wakandan kingdom in all its glory. Impeccably directed by Creed's Ryan Coogler, it's an astonishing Afrofuturistic vision that oozes with a cool, colourful regality.",
        trailer: "https://www.youtube.com/embed/xjDjIWPwcPU"
    },
    {
        id: 7,
        title: "Titanic",
        poster: "https://i.pinimg.com/736x/c1/01/97/c10197debcf4a5990d5a138497ba10e7.jpg",
        description: "What to say about James Cameron's epic romantic tragedy Titanic? It's 'My Heart Will Go On'. It's 'Paint me like one of your French girls.' It's a steamy handprint on a cab's back window and a frosted breath on a floating door that's definitely big enough for two.",
        trailer: "https://www.youtube.com/embed/wO44qBPBG4c"
    },
    {
        id: 8,
        title: "Fight Club",
        poster: "https://i.pinimg.com/originals/83/61/6e/83616e10fcd4463a7d3f8c074cd65855.jpg",
        description: "Plagued by chronic insomnia and desperate to escape his painfully boring life, a clerk meets one Tyler Durden, a charismatic soap salesman with a twisted philosophy. Tyler is sure that self-improvement is for the weak, and self-destruction is the only thing worth living for.",
        trailer: "https://www.youtube.com/embed/BdJKm16Co6M"
    },
    {
        id: 9,
        title: "Leon: The Professional",
        poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/6c7d6942-9f9b-4a6a-a8f3-62767bc7533c/1920x",
        description: "In some ways, Luc Besson's first English-language movie is a spiritual spin-off: after all, isn't Jean Reno's eponymous hitman just Nikita's Victor The Cleaner renamed and fleshed out?",
        trailer: "https://www.youtube.com/embed/aNQqoExfQsg"
    },
    {
        id: 10,
        title: "The Matrix",
        poster: "https://m.media-amazon.com/images/I/91C5o0EqORL._AC_UL800_QL65_.jpg",
        description: "A cyberpunk movie, it depicts a dystopian future in which humanity is unknowingly trapped inside the Matrix, a simulated reality created by intelligent machines.",
        trailer: "https://www.youtube.com/embed/vKQi3bBA1y8"
    },
    {
        id: 11,
        title: "The Shawshank Redemption",
        poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/4cbf48ed-f3a8-4391-9ba8-4c0b2e4dfd7a/1920x",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        trailer: "https://www.youtube.com/embed/NmzuHjWmXOc"
    },
    {
        id: 12,
        title: "Blade Runner 2049",
        poster: "https://avatars.mds.yandex.net/i?id=a562c59e1537870fd5908d4dd639ee2c_l-9821502-images-thumbs&n=13",
        description: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
        trailer: "https://www.youtube.com/embed/gCcx85zbxz4"
    },
    {
        id: 13,
        title: "The Godfather",
        poster: "https://cdn1.ozone.ru/s3/multimedia-3/6621523527.jpg",
        description: "Michael Corleone, war hero and youngest son of a powerful New York boss, joins the family business when his father becomes the target of an assassination attempt.",
        trailer: "https://www.youtube.com/embed/UaVTIH8mujA"
    },
    {
        id: 14,
        title: "The Intouchables",
        poster: "https://cdn1.ozone.ru/s3/multimedia-p/6814990213.jpg",
        description: "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
        trailer: "https://www.youtube.com/embed/cXu2MhWYUuE"
    },
    {
        id: 15,
        title: "Terminator",
        poster: "https://cdn1.ozone.ru/s3/multimedia-1-9/6975041805.jpg",
        description: "A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, programmed to execute a young woman whose unborn son is the key to humanity's future salvation.",
        trailer: "https://www.youtube.com/embed/nGrW-OR2uDk"
    }
];

// Valid users for demo purposes
const validUsers = [
    { email: 'amirnurmukhanbet39@gmail.com', password: '12345678', name: 'Amir', surname: 'Nurmukhanbet' },
    { email: 'zabasovhamit@gmail.com', password: '12345678', name: 'Khamit', surname: 'Zhabassov' }
];

// DOM Elements
const movieList = document.getElementById('movieList');
const movieModal = document.getElementById('movieModal');
const authModal = document.getElementById('authModal');
const seatModal = document.getElementById('seatModal');
const successModal = document.getElementById('successModal');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const logoutBtn = document.getElementById('logoutBtn');
const userStatus = document.getElementById('userStatus');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');

// State management
let currentUser = null;
let selectedSeats = new Set();
let bookedTickets = JSON.parse(localStorage.getItem('bookedTickets')) || [];

// Initialize the application
function init() {
    renderMovies();
    setupEventListeners();
    checkLoginStatus();
}

// Render movie grid
function renderMovies() {
    movieList.innerHTML = movies.map(movie => `
        <div class="movie-card" data-id="${movie.id}">
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="movie-title">${movie.title}</div>
        </div>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Movie card clicks
    movieList.addEventListener('click', (e) => {
        const movieCard = e.target.closest('.movie-card');
        if (movieCard) {
            const movieId = parseInt(movieCard.dataset.id);
            showMovieDetails(movieId);
        }
    });

    // Authentication buttons
    loginBtn.addEventListener('click', () => showAuthModal('login'));
    registerBtn.addEventListener('click', () => showAuthModal('register'));
    logoutBtn.addEventListener('click', handleLogout);

    // Form submissions
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('registerForm').addEventListener('submit', handleRegister);

    // Modal close buttons
    document.querySelectorAll('.close-btn, .close').forEach(btn => {
        btn.addEventListener('click', () => {
            movieModal.style.display = 'none';
            authModal.style.display = 'none';
            seatModal.style.display = 'none';
            successModal.style.display = 'none';
        });
    });

    // Auth form switching
    document.getElementById('switchToRegister').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('registerForm').classList.remove('hidden');
    });

    document.getElementById('switchToLogin').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('registerForm').classList.add('hidden');
        document.getElementById('loginForm').classList.remove('hidden');
    });
}

// Show movie details
function showMovieDetails(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;

    document.getElementById('movieTitle').textContent = movie.title;
    document.getElementById('moviePoster').innerHTML = `<img src="${movie.poster}" alt="${movie.title}">`;
    document.getElementById('movieDescription').textContent = movie.description;
    document.getElementById('movieTrailer').innerHTML = `<iframe src="${movie.trailer}" frameborder="0" allowfullscreen></iframe>`;

    document.getElementById('reserveBtn').onclick = () => {
        if (currentUser) {
            showSeatSelection();
        } else {
            showAuthModal('login');
        }
    };

    movieModal.style.display = 'block';
}

// Authentication modal function
function showAuthModal(type) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginError = document.getElementById('loginError');
    const registerError = document.getElementById('registerError');

    // Reset error messages
    loginError.textContent = '';
    loginError.classList.add('hidden');
    registerError.textContent = '';
    registerError.classList.add('hidden');

    // Hide any open modals
    movieModal.style.display = 'none';
    authModal.style.display = 'block';

    // Show appropriate form
    if (type === 'login') {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    }
}

// Login handler
function handleLogin(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;
    const loginError = document.getElementById('loginError');

    const user = validUsers.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        authModal.style.display = 'none';
        checkLoginStatus();
    } else {
        loginError.textContent = 'Invalid email or password';
        loginError.classList.remove('hidden');
    }
}

// Register handler
function handleRegister(e) {
    e.preventDefault();
    const form = e.target;
    const newUser = {
        name: form.querySelector('input[placeholder="Name"]').value,
        surname: form.querySelector('input[placeholder="Surname"]').value,
        email: form.querySelector('input[type="email"]').value,
        password: form.querySelector('input[type="password"]').value
    };
    
    const registerError = document.getElementById('registerError');

    if (validUsers.some(u => u.email === newUser.email)) {
        registerError.textContent = 'Email already exists';
        registerError.classList.remove('hidden');
        return;
    }

    validUsers.push(newUser);
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    authModal.style.display = 'none';
    checkLoginStatus();
}

// Logout handler
function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    checkLoginStatus();
}

// Updated Seat Selection Functions
function showSeatSelection() {
    const seatMap = document.getElementById('seatMap');
    seatMap.innerHTML = '';
    selectedSeats.clear();

    // Column labels (A-I)
    const columnLabels = document.querySelector('.column-labels');
    columnLabels.innerHTML = Array.from({ length: 9 }, (_, i) => 
        `<div class="seat-label">${String.fromCharCode(65 + i)}</div>`
    ).join('');

    // Row labels (1-9)
    const rowLabels = document.querySelector('.row-labels');
    rowLabels.innerHTML = Array.from({ length: 9 }, (_, i) => 
        `<div class="seat-label">${i + 1}</div>`
    ).join('');

    // Generate 9x9 seat grid with random occupancy
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const seat = document.createElement('div');
            const seatId = `${String.fromCharCode(65 + row)}${col + 1}`;
            
            // Randomly occupy about half the seats
            const isOccupied = Math.random() < 0.5;
            seat.className = isOccupied ? 'seat occupied' : 'seat available';
            seat.dataset.seatId = seatId;
            
            if (!isOccupied) {
                seat.addEventListener('click', () => toggleSeatSelection(seatId));
            }
            
            seatMap.appendChild(seat);
        }
    }

    document.getElementById('confirmSeatBtn').onclick = confirmBooking;
    seatModal.style.display = 'block';
}

function toggleSeatSelection(seatId) {
    const seat = document.querySelector(`[data-seat-id="${seatId}"]`);
    if (!seat || seat.classList.contains('occupied')) return;

    if (seat.classList.contains('selected')) {
        seat.classList.remove('selected');
        selectedSeats.delete(seatId);
    } else {
        seat.classList.add('selected');
        selectedSeats.add(seatId);
    }

    updateSelectedSeatsDisplay();
}

function updateSelectedSeatsDisplay() {
    const selectedSeatsDiv = document.getElementById('selectedSeats');
    if (selectedSeats.size > 0) {
        selectedSeatsDiv.textContent = `Selected seats: ${Array.from(selectedSeats).join(', ')}`;
    } else {
        selectedSeatsDiv.textContent = 'No seats selected';
    }
}

function confirmBooking() {
    if (selectedSeats.size === 0) {
        alert('Please select at least one seat');
        return;
    }

    // Create booking object
    const booking = {
        id: Date.now(), // Unique identifier
        movie: document.getElementById('movieTitle').textContent,
        seats: Array.from(selectedSeats),
        date: new Date().toLocaleString(),
        user: `${currentUser.name} ${currentUser.surname}`
    };

    // Add to booked tickets
    bookedTickets.push(booking);
    
    // Save to localStorage
    localStorage.setItem('bookedTickets', JSON.stringify(bookedTickets));

    seatModal.style.display = 'none';
    const bookingDetails = document.getElementById('bookingDetails');
    bookingDetails.innerHTML = `
        <p>Seats booked: ${Array.from(selectedSeats).join(', ')}</p>
        <p>Movie: ${booking.movie}</p>
        <p>Booked by: ${currentUser.name} ${currentUser.surname}</p>
        <p>Email: ${currentUser.email}</p>
    `;
    successModal.style.display = 'block';

    // Reset seat selection
    selectedSeats.clear();

    // Update My Tickets section
    updateMyTickets();
}

function cancelTicket(ticketId) {
    bookedTickets = bookedTickets.filter(ticket => ticket.id !== ticketId);
    localStorage.setItem('bookedTickets', JSON.stringify(bookedTickets));
    updateMyTickets();
}

function updateMyTickets() {
    let myTicketsSection = document.getElementById('myTicketsSection');
    if (!myTicketsSection) {
        myTicketsSection = document.createElement('section');
        myTicketsSection.id = 'myTicketsSection';
        myTicketsSection.innerHTML = `
            <div class="container">
                <h2>My Tickets</h2>
                <div id="myTickets"></div>
            </div>
        `;
        document.querySelector('main').after(myTicketsSection);
    }

    const myTicketsContainer = document.getElementById('myTickets');
    
    // Filter tickets for current user
    const userTickets = bookedTickets.filter(ticket => 
        ticket.user === `${currentUser.name} ${currentUser.surname}`
    );

    // Create ticket display
    if (userTickets.length > 0) {
        myTicketsContainer.innerHTML = userTickets.map(ticket => `
            <div class="ticket">
                <div class="ticket-details">
                    <p>Movie: ${ticket.movie}</p>
                    <p>Seats: ${ticket.seats.join(', ')}</p>
                    <p>Date: ${ticket.date}</p>
                </div>
                <button onclick="cancelTicket(${ticket.id})">Cancel Ticket</button>
            </div>
        `).join('');
    } else {
        myTicketsContainer.innerHTML = '<p>No tickets booked yet.</p>';
    }
}

// Modify checkLoginStatus to update My Tickets
function checkLoginStatus() {
    const storedUser = localStorage.getItem('currentUser');
    
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
    }

    if (currentUser) {
        loginBtn.classList.add('hidden');
        registerBtn.classList.add('hidden');
        logoutBtn.classList.remove('hidden');
        userStatus.classList.remove('hidden');
        userName.textContent = `${currentUser.name} ${currentUser.surname}`;
        userEmail.textContent = currentUser.email;
        
        // Update My Tickets
        updateMyTickets();
    } else {
        loginBtn.classList.remove('hidden');
        registerBtn.classList.remove('hidden');
        logoutBtn.classList.add('hidden');
        userStatus.classList.add('hidden');
        
        // Remove My Tickets section
        const myTicketsSection = document.getElementById('myTicketsSection');
        if (myTicketsSection) {
            myTicketsSection.remove();
        }
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);