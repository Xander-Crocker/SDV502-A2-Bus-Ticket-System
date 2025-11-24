
// Function to calculate the total fare based on the number of seats
function calculateFare(seats) {
    const pricePerSeat = 10; // Fix the seat price to $10
    return seats * pricePerSeat; // Total = amount of seats * price per seat
}

// Function to validate the booking inputs
function validateBooking(name, destination, seats) {
    // Will return true if name and destination are provided and number of seats is greater than 0
    return name && destination && seats > 0;
}

// Function to generate the confirmation or error message
function getConfirmationMessage(name, destination, seats) {
    // If booking is valid, calculate total fare and return confirmation message
    if (validateBooking(name, destination, seats)) {
        const totalFare = calculateFare(seats);
        return `Booking confirmed for ${name} to ${destination}. Seats: ${seats}. Total fare: $${totalFare}.`;
    } 
    // If booking is invalid, return error message
    else {
        return "Please fill in all fields correctly.";
    }
}

// Jest tests
describe('Bus Ticket Booking System Logic', () => {
    // Test 1 - Valid booking input should return a confirmation message
    test('Successfully books with valid input', () => {
        // Simulate valid booking
        const message = getConfirmationMessage('Alice', 'Auckland', 2); 
        // Expected message
        expect(message).toBe('Booking confirmed for Alice to Auckland. Seats: 2. Total fare: $20.');
    });

    // Test 2 - Empty name should return an error message
    test('Booking fails with empty name', () => {
        // Simulate invalid booking with an empty name
        const message = getConfirmationMessage('', 'Wellington', 1); 
        // Expected message
        expect(message).toBe('Please fill in all fields correctly.');
    });

    // Test 3 - Zero seats should return an error message
    test('Booking fails with zero seats', () => {
        // Simulate invalid booking with 0 seats selected
        const message = getConfirmationMessage('Bob', 'Christchurch', 0); 
        // Expected message
        expect(message).toBe('Please fill in all fields correctly.');
    });
});
