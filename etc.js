const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Dữ liệu giả lập
const vehicles = [
    { plate: "30A12345", balance: 500000, status: "Đang hoạt động" },
    { plate: "29B67890", balance: 200000, status: "Đang hoạt động" },
    { plate: "51C11111", balance: 0, status: "Ngưng hoạt động" },
    // { plate: "", balance: "", status: ""},
];

// API tra cứu theo biển số
app.get('/api/vehicles/:plate', (req, res) => {
    const plate = req.params.plate.toUpperCase();
    const vehicle = vehicles.find(v => v.plate === plate);

    if(vehicle) {
        res.json({ success: true, ...vehicle });
    } else {
        res.json({ success: false, message: "Không tìm thấy tài khoản ETC" });
    }
});

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
