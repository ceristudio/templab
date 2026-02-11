// Dữ liệu mẫu
const products = [
    { id: 1, name: "Slide Tết Đoàn Viên", category: "presentation", topic: "tet", price: 150000, img: "images/slide1.jpg", tag: "Hot" },
    { id: 2, name: "Poster Ẩm Thực Việt", category: "poster", topic: "food", price: 90000, img: "images/slide2.jpg", tag: "Mới" },
    { id: 3, name: "Lịch Sử Triều Nguyễn", category: "presentation", topic: "history", price: 200000, img: "images/slide3.jpg", tag: "Premium" },
];

let cart = [];

// Hiển thị sản phẩm
function renderProducts(items) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = items.map(item => `
        <div class="card" onclick="goToDetail(${item.id})">
            <img src="${item.img}" alt="${item.name}">
            <div class="card-content">
                <span class="tag">${item.tag}</span>
                <h3>${item.name}</h3>
                <p class="price">${item.price.toLocaleString()}đ</p>
                <button onclick="addToCart(event, ${item.id})" style="background:var(--gold); border:none; padding:5px 10px; border-radius:5px; cursor:pointer">Thêm vào giỏ</button>
            </div>
        </div>
    `).join('');
}

// Giỏ hàng
function addToCart(event, id) {
    event.stopPropagation(); // Ngăn chặn nhảy sang trang chi tiết
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const cartItems = document.getElementById('cartItems');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    cartItems.innerHTML = cart.map(item => `<p>${item.name} - ${item.price.toLocaleString()}đ</p>`).join('');
    document.getElementById('totalPrice').innerText = total.toLocaleString() + "đ";
}

// Modals
function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function toggleAuthModal() {
    const modal = document.getElementById('authModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Chuyển trang (Giả lập)
function goToDetail(id) {
    alert("Chuyển đến trang mô tả cho sản phẩm ID: " + id);
    // window.location.href = `detail.html?id=${id}`;
}

// Khởi tạo
renderProducts(products);
