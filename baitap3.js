// Khởi tạo danh sách điện thoại trong cửa hàng
let store = [
    { id: 1, name: "Samsung Galaxy S21", price: 12000, quantity: 10, company: "Samsung" },
    { id: 2, name: "iPhone 13", price: 15000, quantity: 5, company: "Apple" },
    { id: 3, name: "Xiaomi Mi 11", price: 8000, quantity: 15, company: "Xiaomi" }
];

// Khởi tạo giỏ hàng
let cart = [];

// Hiển thị danh sách điện thoại theo hãng
function showPhonesByCompany(company) {
    let phonesByCompany = store.filter(phone => phone.company === company);
    console.log(`Danh sách điện thoại hãng ${company}:`);
    phonesByCompany.forEach(phone => {
        console.log(`ID: ${phone.id}, Tên: ${phone.name}, Giá: ${phone.price}, Số lượng: ${phone.quantity}`);
    });
}

// Thêm điện thoại mới vào cửa hàng
function addPhone(id, name, price, quantity, company) {
    store.push({ id, name, price, quantity, company });
    console.log(`Đã thêm điện thoại ${name} vào cửa hàng.`);
}

// Tìm kiếm điện thoại theo tên hoặc id
function searchPhone(searchTerm) {
    let result = store.filter(phone => phone.name.toLowerCase().includes(searchTerm.toLowerCase()) || phone.id === searchTerm);
    if (result.length > 0) {
        console.log("Kết quả tìm kiếm:");
        result.forEach(phone => {
            console.log(`ID: ${phone.id}, Tên: ${phone.name}, Giá: ${phone.price}, Số lượng: ${phone.quantity}`);
        });
    } else {
        console.log("Không tìm thấy điện thoại.");
    }
}

// Mua điện thoại và cập nhật lại cửa hàng
function buyPhone(id, quantity) {
    let phone = store.find(phone => phone.id === id);
    if (phone && phone.quantity >= quantity) {
        phone.quantity -= quantity;
        cart.push({ id: phone.id, name: phone.name, price: phone.price, quantity });
        console.log(`Đã mua ${quantity} chiếc ${phone.name}.`);
    } else {
        console.log("Số lượng không đủ để mua.");
    }
}

// Thanh toán và xóa giỏ hàng
function checkout() {
    let totalAmount = 0;
    cart.forEach(item => {
        totalAmount += item.price * item.quantity;
    });
    console.log(`Tổng số tiền cần thanh toán: ${totalAmount}`);
    cart = [];  // Xóa giỏ hàng
    console.log("Thanh toán thành công! Giỏ hàng đã được làm rỗng.");
}

// Sắp xếp điện thoại theo giá
function sortPhonesByPrice(order) {
    if (order === "asc") {
        store.sort((a, b) => a.price - b.price);
        console.log("Danh sách điện thoại đã được sắp xếp theo giá tăng dần.");
    } else if (order === "desc") {
        store.sort((a, b) => b.price - a.price);
        console.log("Danh sách điện thoại đã được sắp xếp theo giá giảm dần.");
    }
    showStore();
}

// Hiển thị tất cả điện thoại trong cửa hàng
function showStore() {
    console.log("Danh sách điện thoại trong cửa hàng:");
    store.forEach(phone => {
        console.log(`ID: ${phone.id}, Tên: ${phone.name}, Giá: ${phone.price}, Số lượng: ${phone.quantity}`);
    });
}

// Hiển thị tổng số tiền của tất cả điện thoại trong kho
function totalValue() {
    let total = store.reduce((sum, phone) => sum + phone.price * phone.quantity, 0);
    console.log(`Tổng số tiền của các điện thoại trong kho: ${total}`);
}

// Hiển thị tổng số lượng điện thoại theo từng hãng
function totalQuantityByCompany() {
    let companyTotals = {};
    store.forEach(phone => {
        companyTotals[phone.company] = (companyTotals[phone.company] || 0) + phone.quantity;
    });
    console.log("Tổng số lượng điện thoại theo từng hãng:");
    for (let company in companyTotals) {
        console.log(`${company} - ${companyTotals[company]}`);
    }
}

// Menu điều khiển
function showMenu() {
    console.log("\n--- MENU ---");
    console.log("1. Hiển thị danh sách điện thoại theo hãng");
    console.log("2. Thêm điện thoại mới vào cửa hàng");
    console.log("3. Tìm kiếm điện thoại");
    console.log("4. Mua điện thoại");
    console.log("5. Thanh toán giỏ hàng");
    console.log("6. Sắp xếp điện thoại theo giá");
    console.log("7. Hiển thị tổng số tiền của điện thoại trong kho");
    console.log("8. Hiển thị tổng số lượng điện thoại theo từng hãng");
    console.log("9. Thoát");
}

// Chạy chương trình
function runProgram() {
    let choice;
    do {
        showMenu();
        choice = parseInt(prompt("Chọn một thao tác (1-9):"));
        switch (choice) {
            case 1:
                let company = prompt("Nhập tên hãng điện thoại (ví dụ: Samsung):");
                showPhonesByCompany(company);
                break;
            case 2:
                let id = parseInt(prompt("Nhập ID điện thoại:"));
                let name = prompt("Nhập tên điện thoại:");
                let price = parseInt(prompt("Nhập giá điện thoại:"));
                let quantity = parseInt(prompt("Nhập số lượng điện thoại:"));
                let newCompany = prompt("Nhập tên hãng điện thoại:");
                addPhone(id, name, price, quantity, newCompany);
                break;
            case 3:
                let searchTerm = prompt("Nhập tên hoặc ID điện thoại cần tìm:");
                searchPhone(searchTerm);
                break;
            case 4:
                let buyId = parseInt(prompt("Nhập ID điện thoại cần mua:"));
                let buyQuantity = parseInt(prompt("Nhập số lượng mua:"));
                buyPhone(buyId, buyQuantity);
                break;
            case 5:
                checkout();
                break;
            case 6:
                let sortOrder = prompt("Nhập 'asc' để sắp xếp tăng dần, 'desc' để sắp xếp giảm dần:");
                sortPhonesByPrice(sortOrder);
                break;
            case 7:
                totalValue();
                break;
            case 8:
                totalQuantityByCompany();
                break;
            case 9:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Chọn không hợp lệ.");
        }
    } while (choice !== 9);
}

// Bắt đầu chương trình
runProgram();