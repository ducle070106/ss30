let giohang = [];  
let khosach = [];  

function hienthidanhsach() {  
    let theloai = prompt("Nhập thể loại sách để xem:");  
    let sachloc = khosach.filter(sach => sach.theloai === theloai);  
    console.log("Danh sách sách thuộc thể loại " + theloai + ":");  
    sachloc.forEach(sach => {  
        console.log(`ID: ${sach.id}, Tên sách: ${sach.tensach}, Giá: ${sach.giasach}, Số lượng: ${sach.soluongsach}`);  
    });  
}  

function themsachmoi() {  
    let sachmoi = {  
        id: +prompt("Nhập mã sách:"),  
        tensach: prompt("Nhập tên sách:"),  
        giasach: +prompt("Nhập giá sách:"),  
        soluongsach: +prompt("Nhập số lượng sách:"),  
        theloai: prompt("Nhập thể loại sách:"),  
    };  
    khosach.push(sachmoi);  
    console.log("Sách đã được thêm vào kho.");  
}  

function timkiemsach() {  
    let tukhoa = prompt("Nhập tên hoặc id sách cần tìm:");  
    let sachtimthay = khosach.filter(sach => sach.tensach.includes(tukhoa) || sach.id === +tukhoa);  
    if (sachtimthay.length > 0) {  
        sachtimthay.forEach(sach => {  
            console.log(`ID: ${sach.id}, Tên sách: ${sach.tensach}, Giá: ${sach.giasach}, Số lượng: ${sach.soluongsach}`);  
        });  
    } else {  
        console.log("Không tìm thấy sách nào.");  
    }  
}  

function muasach() {  
    let masach = +prompt("Nhập id sách cần mua:");  
    let soluong = +prompt("Nhập số lượng sách cần mua:");  
    let sachcanmua = khosach.find(sach => sach.id === masach);  
    if (sachcanmua && sachcanmua.soluongsach >= soluong) {  
        giohang.push({ ...sachcanmua, soluong });  
        sachcanmua.soluongsach -= soluong;  
        console.log("Mua sách thành công.");  
    } else {  
        console.log("Sách không đủ số lượng hoặc không tồn tại.");  
    }  
}  

function sapxepsachtheogia() {  
    let sachdasapxep = [...khosach].sort((a, b) => a.giasach - b.giasach);  
    console.log("Danh sách sách đã được sắp xếp theo giá:");  
    sachdasapxep.forEach(sach => {  
        console.log(`ID: ${sach.id}, Tên sách: ${sach.tensach}, Giá: ${sach.giasach}, Số lượng: ${sach.soluongsach}`);  
    });  
}  

function tinhtongsachdamua() {  
    let tongsoluong = giohang.reduce((tong, sach) => tong + sach.soluong, 0);  
    let tongtien = giohang.reduce((tong, sach) => tong + (sach.giasach * sach.soluong), 0);  
    console.log(`Tổng số lượng sách đã mua: ${tongsoluong}`);  
    console.log(`Tổng tiền trong giỏ hàng: ${tongtien} VNĐ`);  
}  

function soluongsach() {  
    let tongsachtrongkho = khosach.reduce((tong, sach) => tong + sach.soluongsach, 0);  
    console.log(`Tổng số lượng sách trong kho: ${tongsachtrongkho}`);  
}  

let luaChon;  
do {  
    console.log("1. Hiển thị danh sách theo thể loại");  
    console.log("2. Thêm sách mới vào kho");  
    console.log("3. Tìm kiếm sách theo tên hoặc id");  
    console.log("4. Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho)");  
    console.log("5. Sắp xếp sách theo giá ");  
    console.log("6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng");  
    console.log("7. Hiển thị tổng số lượng sách trong kho");  
    console.log("8. Thoát chương trình");  
    luaChon = +prompt("Mời bạn nhập lựa chọn");  

    switch (luaChon) {  
        case 1:  
            hienthidanhsach();  
            break;  
        case 2:  
            themsachmoi();  
            break;  
        case 3:  
            timkiemsach();  
            break;  
        case 4:  
            muasach();  
            break;  
        case 5:  
            sapxepsachtheogia();  
            break;  
        case 6:  
            tinhtongsachdamua();  
            break;  
        case 7:  
            soluongsach();  
            break;  
        case 8:  
            console.log("Cảm ơn bạn đã sử dụng chương trình!");  
            break;  
        default:  
            console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");  
            break;  
    }  
} while (luaChon !== 8);  