document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('categories').classList.add('hidden');
        document.getElementById('phone-types').classList.remove('hidden');
    });
});

document.querySelectorAll('.type-button').forEach(button => {
    button.addEventListener('click', function() {
        if (this.dataset.type === 'android') {
            document.getElementById('phone-types').classList.add('hidden');
            document.getElementById('android-brands').classList.remove('hidden');
        } else {
            document.getElementById('phone-types').classList.add('hidden');
            document.getElementById('services').classList.remove('hidden');
        }
    });
});

document.querySelectorAll('.brand-button').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('android-brands').classList.add('hidden');
        document.getElementById('services').classList.remove('hidden');
    });
});

document.querySelectorAll('.service-button').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('services').classList.add('hidden');
        document.getElementById('repair-shops').classList.remove('hidden');
        document.getElementById('book-repair').classList.remove('hidden');
    });
});

document.getElementById('book-repair').addEventListener('click', function() {
    const selectedShop = document.getElementById('shop').value;
    alert(`Repair booked successfully at ${selectedShop}!`);
});
