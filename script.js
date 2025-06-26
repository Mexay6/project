// ຂໍ້ມູນສິນຄ້າ
const products = [
    {
        id: 1,
        name: "ProDuct NAME",
        price: "10000000000.KIP",
        image: "https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/eb81dccfea81420a8bb9b974c07c1d64~tplv-tej9nj120t-origin.webp",
        description: "ລາຍລະອຽດ"
    },
    {
        id: 2,
        name: "ProDuct NAME",
        price: "10000000000.KIP",
        image: "https://i.pinimg.com/736x/87/15/84/8715841e223e97280a48231786eac1cb.jpg",
        description: "ລາຍລະອຽດ"
    },
    {
        id: 3,
        name: "ProDuct NAME",
        price: "10000000000.KIP",
        image: "https://i.pinimg.com/originals/f7/4e/c0/f74ec09f9c2eb019a69eae9978eb9019.jpg",
        description: "ລາຍລະອຽດ"
    },
    {
        id: 4,
        name: "ProDuct NAME",
        price: "10000000000.KIP",
        image: "https://i.pinimg.com/originals/1f/c8/2d/1fc82d94c921b87319afdbcca0a4ba71.jpg",
        description: "ລາຍລະອຽດ"
    },
    {
        id: 5,
        name: "ProDuct NAME",
        price: "10000000000.KIP",
        image: "https://i.pinimg.com/474x/be/18/fc/be18fceee41d4b521dd03ed268c08669.jpg",
        description: "ລາຍລະອຽດ"
    },
    {
        id: 6,
        name: "ProDuct NAME",
        price: "10000000000.KIP",
        image: "https://i.pinimg.com/originals/9b/0c/63/9b0c636f4f1caf7b395c73c40f0e5646.jpg",
        description: "ລາຍລະອຽດ"
    },
    {
        id: 7,
        name: "ProDuct NAME",
        price: "10000000000.KIP",
        image: "https://i.pinimg.com/236x/03/fd/03/03fd03ba27cac86aff530d01b7d9bc6e.jpg",
        description: "ລາຍລະອຽດ"
    },
    {
        id: 8,
        name: "ProDuct NAME",
        price: "10000000000.KIP",
        image: "https://i.pinimg.com/236x/d0/10/b6/d010b678aaaadf4ac6e51f683c5f8de2.jpg",
        description: "ລາຍລະອຽດ"
    },
    {
        id: 9,
        name: "ProDuct NAME",
        price: "10000000000.KIP",
        image: "https://i.pinimg.com/236x/49/16/de/4916de226a4233d700e81a5bbf58c21b.jpg",
        description: "ລາຍລະອຽດ"
    },
    {
        id: 10,
        name: "ProDuct NAME",
        price: "10000000000.KIP",
        image: "https://i.pinimg.com/170x/f1/3e/ed/f13eedbb5ba01a112840b2fafbbbbb3d.jpg",
        description: "ລາຍລະອຽດ"
    },
    {
        id: 11,
        name: "ProDuct NAME",
        price: "10000000000.KIP",
        image: "https://i.pinimg.com/236x/e5/ca/98/e5ca98c68c68d4c06826de6ecfbff7e6.jpg",
        description: "ລາຍລະອຽດ"
    },
    {
        id: 12,
        name: "ProDuct NAME",
        price: "10000000000.KIP",
        image: "https://wallpaper.forfun.com/fetch/37/3759ae6c822273b9421ca0823853baef.jpeg",
        description: "ລາຍລະອຽດ"
    }
];

// ຂໍ້ມູນຜູ້ໃຊ້
let user = {
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
    balance: JSON.parse(localStorage.getItem('userBalance')) || 0,
    transactions: JSON.parse(localStorage.getItem('transactions')) || [],
    orders: JSON.parse(localStorage.getItem('orders')) || []
};

// ບັນທຶກຂໍ້ມູນ
function saveUserData() {
    localStorage.setItem('isLoggedIn', JSON.stringify(user.isLoggedIn));
    localStorage.setItem('userBalance', JSON.stringify(user.balance));
    localStorage.setItem('transactions', JSON.stringify(user.transactions));
    localStorage.setItem('orders', JSON.stringify(user.orders));
}

// ກວດສອບການເຂົ້າສູ່ລະບົບ
function checkLogin() {
    const path = window.location.pathname.split('/').pop();
    const allowedPages = ['login.html', 'register.html', 'about.html'];

    if (!user.isLoggedIn && !allowedPages.includes(path)) {
        window.location.href = 'login.html';
    }
}

// ອັບເດດຍອດເງິນ
function updateBalanceDisplay() {
    const balanceElements = document.querySelectorAll('.balance-display, #balanceAmount');
    balanceElements.forEach(el => {
        if (el.id === 'balanceAmount') {
            el.textContent = `${user.balance.toLocaleString()} ກີບ`;
        } else {
            el.innerHTML = `<i class="fas fa-coins"></i> ${user.balance.toLocaleString()} ກີບ`;
        }
    });
}

// ກວດສອບຍອດເງິນ
function checkBalance(amount) {
    return user.balance >= amount;
}

// ສ້າງສິນຄ້າ
function createProducts() {
    const container = document.getElementById('productContainer');
    if (!container) return;

    container.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">${product.price}</div>
            </div>
            <div class="product-detail">
                <p>${product.description}</p>
                <button class="buy-btn" data-id="${product.id}">ສັ່ງຊື້</button>
            </div>
        </div>
    `).join('');
}

// ສ້າງລາຍການທີ່ຊຳລະບໍ່ສຳເລັດ
function createPendingOrders() {
    const container = document.getElementById('pendingList');
    if (!container) return;

    const failedOrders = user.orders.filter(order => order.status !== 'completed');

    container.innerHTML = failedOrders.length ? 
        failedOrders.map(order => `
            <div class="order-item">
                <div class="order-header">
                    <span>ລຳດັບ: ${order.id}</span>
                    <span>${order.date}</span>
                </div>
                <div class="order-details">
                    <p>ສິນຄ້າ: ${order.productName}</p>
                    <p>ລາຄາ: ${order.price}</p>
                    <p>ສະຖານະ: <span class="status-pending">ບໍ່ສຳເລັດ</span></p>
                </div>
            </div>
        `).join('') : '<p class="no-orders">ບໍ່ມີລາຍການທີ່ຊຳລະບໍ່ສຳເລັດ</p>';
}

// ສ້າງປະຫວັດການສັ່ງຊື້
function createOrderHistory() {
    const container = document.getElementById('ordersList');
    if (!container) return;

    container.innerHTML = user.orders.length ? 
        user.orders.map(order => `
            <div class="order-item">
                <div class="order-header">
                    <span>ລຳດັບ: ${order.id}</span>
                    <span>${order.date}</span>
                </div>
                <div class="order-details">
                    <p>ສິນຄ້າ: ${order.productName}</p>
                    <p>ລາຄາ: ${order.price}</p>
                    <p>ສະຖານະ: <span class="status-${order.status}">
                        ${order.status === 'completed' ? 'ສຳເລັດ' : 'ບໍ່ສຳເລັດ'}
                    </span></p>
                </div>
            </div>
        `).join('') : '<p class="no-orders">ບໍ່ມີປະຫວັດ</p>';
}

// ເມື່ອເວັບໂຫຼດ
document.addEventListener('DOMContentLoaded', function() {
    checkLogin();
    updateBalanceDisplay();

    // ເມນູ sidebar
    const menuIcon = document.getElementById('menuIcon');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');

    if (menuIcon && sidebar && mainContent) {
        menuIcon.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            mainContent.classList.toggle('active');
        });
    }

    // ການເຂົ້າສູ່ລະບົບ
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (!email || !password) {
                alert('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ');
                return;
            }
            
            user.isLoggedIn = true;
            saveUserData();
            window.location.href = 'index.html';
        });
    }

    // ການລົງທະບຽນ
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (!name || !email || !phone || !password || !confirmPassword) {
                alert('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('ລະຫັດຜ່ານບໍ່ກົງກັນ');
                return;
            }
            
            alert('ລົງທະບຽນສຳເລັດ! ກະລຸນາເຂົ້າສູ່ລະບົບ');
            window.location.href = 'login.html';
        });
    }

    // ການສັ່ງຊື້
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('buy-btn')) {
            if (!user.isLoggedIn) {
                alert('ກະລຸນາເຂົ້າສູ່ລະບົບກ່ອນ');
                window.location.href = 'login.html';
                return;
            }
            
            const productId = parseInt(e.target.dataset.id);
            const product = products.find(p => p.id === productId);
            
            if (product) {
                const price = parseInt(product.price.replace(/\D/g, ''));
                
                if (checkBalance(price)) {
                    const order = {
                        id: Date.now(),
                        productName: product.name,
                        price: product.price,
                        amount: price,
                        date: new Date().toLocaleString('lo-LA'),
                        status: 'completed'
                    };
                    
                    user.balance -= price;
                    user.orders.push(order);
                    saveUserData();
                    updateBalanceDisplay();
                    
                    alert('ຊຳລະສຳເລັດ!');
                    if (window.location.pathname.includes('orders.html')) createOrderHistory();
                } else {
                    alert('ເງິນໃນບັນຊີບໍ່ພຽງພໍ!');
                }
            }
        }
        
        // ອອກຈາກລະບົບ
        if (e.target.classList.contains('logout-btn')) {
            user.isLoggedIn = false;
            saveUserData();
            window.location.href = 'login.html';
        }
    });

    // ໂຫຼດໜ້າທີ່ກ່ຽວຂ້ອງ
    const path = window.location.pathname.split('/').pop();
    if (path === 'index.html' || path === '') createProducts();
    if (path === 'pending.html') createPendingOrders();
    if (path === 'orders.html') createOrderHistory();
    if (path === 'topup.html') initTopupPage();
});

// ໜ້າເຕີມເງິນ
function initTopupPage() {
    const form = document.getElementById('topupForm');
    const historyList = document.getElementById('historyList');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const amount = parseInt(document.getElementById('amount').value);
            
            if (!amount || amount < 10000) {
                alert('ກະລຸນາເຕີມຢ່າງໜ້ອຍ 10,000 ກີບ');
                return;
            }
            
            user.balance += amount;
            user.transactions.unshift({
                id: Date.now(),
                amount: amount,
                date: new Date().toLocaleString('lo-LA'),
                status: 'success'
            });
            saveUserData();
            updateBalanceDisplay();
            updateTransactionHistory();
            alert(`ເຕີມເງິນ ${amount.toLocaleString()} ກີບ ສຳເລັດ!`);
            form.reset();
        });
    }

    function updateTransactionHistory() {
        if (!historyList) return;
        
        historyList.innerHTML = user.transactions.length ? 
            user.transactions.map(tx => `
                <div class="transaction-item">
                    <div>
                        <div class="transaction-amount">+${tx.amount.toLocaleString()} ກີບ</div>
                        <div class="transaction-date">${tx.date}</div>
                    </div>
                    <span class="status-${tx.status}">
                        ${tx.status === 'success' ? 'ສຳເລັດ' : 'ລໍຖ້າ'}
                    </span>
                </div>
            `).join('') : '<p class="no-transactions">ບໍ່ມີປະຫວັດ</p>';
    }
}

// Admin Functions
function initAdminPage() {
    // ตรวจสอบการเข้าสู่ระบบ Admin
    if (!isAdminLoggedIn()) {
        window.location.href = 'login.html';
        return;
    }

    // ตั้งค่าปุ่มเมนู
    document.getElementById('manageProducts').addEventListener('click', () => showAdminSection('productsSection'));
    document.getElementById('manageUsers').addEventListener('click', () => showAdminSection('usersSection'));
    document.getElementById('manageOrders').addEventListener('click', () => showAdminSection('ordersSection'));
    document.getElementById('managePayments').addEventListener('click', () => showAdminSection('paymentsSection'));

    // ปุ่มเพิ่มสินค้า
    document.getElementById('addProductBtn').addEventListener('click', () => openProductModal());

    // ปุ่มปิด Modal
    document.querySelector('.close-btn').addEventListener('click', () => closeModal());

    // โหลดข้อมูลเริ่มต้น
    loadAdminData();
}

function isAdminLoggedIn() {
    return localStorage.getItem('adminLoggedIn') === 'true';
}

function showAdminSection(sectionId) {
    // ซ่อนทุก section
    document.querySelectorAll('.admin-section').forEach(section => {
        section.style.display = 'none';
    });

    // แสดง section ที่เลือก
    document.getElementById(sectionId).style.display = 'block';
}

function loadAdminData() {
    // โหลดข้อมูลสินค้า
    loadProducts();

    // โหลดข้อมูลผู้ใช้ (ตัวอย่าง)
    loadUsers();

    // โหลดคำสั่งซื้อ
    loadOrders();

    // โหลดการชำระเงิน
    loadPayments();
}

function loadProducts() {
    const tbody = document.getElementById('productsTableBody');
    tbody.innerHTML = products.map((product, index) => `         
        <tr>             
            <td>${index + 1}</td>             
            <td>${product.name}</td>             
            <td>${product.price}</td>             
            <td><img src="${product.image}" alt="${product.name}" style="width:50px;height:50px;object-fit:cover;"></td>             
            <td>                 
                <button class="admin-btn edit-btn" data-id="${product.id}">ແກ້ໄຂ</button>                 
                <button class="admin-btn delete-btn" data-id="${product.id}">ລຶບ</button>             
            </td>         
        </tr>
    `).join('');
}

function loadUsers() {
    // ตัวอย่างข้อมูลผู้ใช้
    const users = [
        { id: 1, name: 'ຜູ້ໃຊ້ 1', email: 'user1@example.com', phone: '02012345678', balance: 50000, status: 'active' },
        { id: 2, name: 'ຜູ້ໃຊ້ 2', email: 'user2@example.com', phone: '02087654321', balance: 100000, status: 'active' }
    ];

    const tbody = document.getElementById('usersTableBody');
    tbody.innerHTML = users.map((user, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.balance.toLocaleString()} ກີບ</td>
            <td><span class="status-${user.status}">${user.status === 'active' ? 'ໃຊ້ງານ' : 'ຢຸດໃຊ້'}</span></td>
            <td>
                <button class="admin-btn edit-btn" data-id="${user.id}">ແກ້ໄຂ</button>
                <button class="admin-btn delete-btn" data-id="${user.id}">${user.status === 'active' ? 'ຢຸດໃຊ້' : 'ເປີດໃຊ້'}</button>
            </td>
        </tr>
    `).join('');
}

function loadOrders() {
    // ใช้ข้อมูลคำสั่งซื้อจาก user.orders
    const tbody = document.getElementById('ordersTableBody');
    tbody.innerHTML = user.orders.map((order, index) => `         
        <tr>             
            <td>${index + 1}</td>             
            <td>${order.id}</td>             
            <td>ຜູ້ໃຊ້ ${order.id % 1000}</td>             
            <td>${order.productName}</td>             
            <td>${order.price}</td>             
            <td>${order.date}</td>             
            <td><span class="status-${order.status}">${order.status === 'completed' ? 'ສຳເລັດ' : 'ລໍຖ້າ'}</span></td>             
            <td>                 
                <button class="admin-btn view-btn" data-id="${order.id}">ເບິ່ງ</button>             
            </td>         
        </tr>
    `).join('');
}

function loadPayments() {
    // ใช้ข้อมูลการชำระเงินจาก user.transactions
    const tbody = document.getElementById('paymentsTableBody');
    tbody.innerHTML = user.transactions.map((tx, index) => `         
        <tr>             
            <td>${index + 1}</td>             
            <td>${tx.id}</td>             
            <td>ຜູ້ໃຊ້ ${tx.id % 1000}</td>             
            <td>${tx.amount.toLocaleString()} ກີບ</td>             
            <td>${tx.date}</td>             
            <td><span class="status-${tx.status}">${tx.status === 'success' ? 'ສຳເລັດ' : 'ລໍຖ້າ'}</span></td>             
            <td>                 
                <button class="admin-btn view-btn" data-id="${tx.id}">ເບິ່ງ</button>             
            </td>         
        </tr>
    `).join('');
}

function openProductModal(product = null) {
    const modal = document.getElementById('productModal');
    const form = document.getElementById('productForm');

    if (product) {
        document.getElementById('modalTitle').textContent = 'ແກ້ໄຂສິນຄ້າ';
        document.getElementById('productId').value = product.id;
        document.getElementById('productName').value = product.name;
        document.getElementById('productPrice').value = parseInt(product.price.replace(/\D/g, ''));
        document.getElementById('productImage').value = product.image;
        document.getElementById('productDesc').value = product.description;
    } else {
        document.getElementById('modalTitle').textContent = 'ເພີ່ມສິນຄ້າໃໝ່';
        form.reset();
    }

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Admin Login
function initAdminLogin() {
    const adminLoginLink = document.getElementById('adminLoginLink');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const backToUserLogin = document.getElementById('backToUserLogin');
    const userLoginForm = document.getElementById('loginForm');

    if (adminLoginLink && adminLoginForm) {
        adminLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            userLoginForm.style.display = 'none';
            adminLoginForm.style.display = 'block';
            adminLoginLink.style.display = 'none';
        });
    }

    if (backToUserLogin && adminLoginForm) {
        backToUserLogin.addEventListener('click', (e) => {
            e.preventDefault();
            adminLoginForm.style.display = 'none';
            userLoginForm.style.display = 'block';
            adminLoginLink.style.display = 'block';
        });
    }

    // จัดการฟอร์มเข้าสู่ระบบ Admin
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('adminUsername').value;
            const password = document.getElementById('adminPassword').value;
            
            // ตรวจสอบ username และ password (ตัวอย่าง)
            if (username === 'admin' && password === 'admin123') {
                localStorage.setItem('adminLoggedIn', 'true');
                window.location.href = 'admin.html';
            } else {
                alert('ຊື່ຜູ້ໃຊ້ ຫຼື ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ');
            }
        });
    }
}