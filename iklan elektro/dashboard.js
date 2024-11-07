// Menangani klik pada menu untuk menandai menu aktif
const menuItems = document.querySelectorAll('.sidebar ul li a');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        menuItems.forEach(i => i.classList.remove('active')); // Hapus kelas 'active' dari semua item
        this.classList.add('active'); // Tambahkan kelas 'active' pada item yang diklik
    });
});
