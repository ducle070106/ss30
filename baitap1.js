let sanPham = [  
    {  
        id: 1,  
        ten: "mèn mén",  
        gia: 20000,  
        soLuong: 20,  
        danhMuc: "món ăn dân tộc Mông"  
    },  
    {  
        id: 2,  
        ten: "mứt",  
        gia: 80000,  
        soLuong: 21,  
        danhMuc: "món ăn dân tộc Kinh"  
    },  
    {  
        id: 3,  
        ten: "cơm lam",  
        gia: 40000,  
        soLuong: 15,  
        danhMuc: "món ăn dân tộc Mông"  
    },  
    {  
        id: 4,  
        ten: "bánh đậu xanh",  
        gia: 60000,  
        soLuong: 30,  
        danhMuc: "món ăn dân tộc Kinh"  
    },  
];  
let gioHang = [];  

function hienThiSanPhamTheoDanhMuc() {  
    let danhMuc = [];  
    for (let product of sanPham) {  
        if (!danhMuc.includes(product.danhMuc)) {  
            danhMuc.push(product.danhMuc);  
        }  
    }  
    danhMuc.forEach((dm) => {  
        console.log(`Danh mục: ${dm}`);  
        sanPham.filter(p => p.danhMuc === dm).forEach(product => {  
            console.log(`ID: ${product.id}, Tên: ${product.ten}, Giá: ${product.gia}, Số lượng: ${product.soLuong}`);  
        });  
    });  
}  

function themSanPhamVaoGioHang(sanPhamChon, soLuongMua) {  
    const sanPhamGioHang = {  
        id: sanPhamChon.id,  
        ten: sanPhamChon.ten,  
        gia: sanPhamChon.gia,  
        soLuong: soLuongMua  
    };  
    gioHang.push(sanPhamGioHang);  
}  
let luaChon;
do {  
    console.log("1. Hiện thị các sản phẩm theo tên danh mục.");  
    console.log("2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm");  
    console.log("3. Sắp xếp các sản phẩm trong cửa hàng theo giá");  
    console.log("4. Tính số tiền thanh toán trong giỏ hàng");  
    console.log("5. Thoát");  
    luaChon = +prompt("Mời bạn nhập lựa chọn");  

    switch (luaChon) {  
        case 1:  
            hienThiSanPhamTheoDanhMuc();  
            break;  
        case 2:  
            let sanPhamId = +prompt("Nhập ID sản phẩm bạn muốn mua:");  
            let sanPhamChon = sanPham.find(p => p.id === sanPhamId);  
            if (sanPhamChon) {  
                let soLuongMua = +prompt(`Nhập số lượng ${sanPhamChon.ten} bạn muốn mua (tối đa ${sanPhamChon.soLuong}):`);  
                if (soLuongMua > 0 && soLuongMua <= sanPhamChon.soLuong) {  
                    sanPhamChon.soLuong -= soLuongMua;  
                    themSanPhamVaoGioHang(sanPhamChon, soLuongMua);  
                    console.log(`Mua thành công ${soLuongMua} ${sanPhamChon.ten}.`);  
                } else {  
                    console.log("Số lượng không hợp lệ hoặc không đủ hàng trong kho.");  
                }  
            } else {  
                console.log("Sản phẩm không có trong cửa hàng.");  
            }  
            break;  
        case 3:  
            let thuTuSapXep = prompt("Sắp xếp theo giá: (1) Tăng dần (2) Giảm dần");  
            if (thuTuSapXep === "1") {  
                sanPham.sort((a, b) => a.gia - b.gia);  
            } else if (thuTuSapXep === "2") {  
                sanPham.sort((a, b) => b.gia - a.gia);  
            }  
            console.log("Sản phẩm sau khi sắp xếp:");  
            hienThiSanPhamTheoDanhMuc();  
            break;  
        case 4:  
            let tongTien = gioHang.reduce((tong, item) => tong + (item.gia * item.soLuong), 0);  
            console.log(`Tổng tiền thanh toán trong giỏ hàng: ${tongTien}`);  
            break;  
        case 5:  
            console.log("Thoát chương trình.");  
            break;  
        default:  
            console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");  
            break;  
    }  
} while (luaChon !== 5);  