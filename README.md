# 23521014-NguyenTrongNghia-IE213.Q21
# IE213 - Kỹ thuật phát triển hệ thống web

## Thông tin sinh viên

- Họ tên: Nguyễn Trọng Nghĩa
- MSSV: 23521014
- Lớp: CNTT2023.2
- Môn học: IE213.Q21
- Trường: Đại học Công nghệ Thông tin - ĐHQG TP.HCM

## Danh sách các lab

- Lab01: MongoDB CRUD Operation
- Lab02: Thiết lập Backend với NODE|EXPRESSJS

## Checklist theo từng lab

### Lab01 - MongoDB CRUD Operation

- [x] Mô tả ngắn gọn lab
   - Thiết lập MongoDB Atlas và MongoDB Compass.
   - Kết nối cluster cloud, nạp sample dataset.
   - Thực hành các thao tác CRUD và truy vấn nâng cao trên collection `employees`.

- [x] Cách chạy chương trình
   - Mở MongoDB Compass và kết nối tới cluster Atlas.
   - Mở MONGOSH trong Compass và chạy các lệnh theo hướng dẫn trong `Lab01/README.md`.

- [x] Kết quả thực hiện
   - Đã thực hiện thành công các thao tác CRUD (`insert`, `find`, `update`, `unset`, `aggregate`).
   - Đã truy vấn và thống kê theo `organization` đúng yêu cầu đề bài.

- [x] Hình ảnh minh họa / output / screenshot
   - Tham khảo trong file `README.md` của `Lab01`.

- [x] Nội dung đã hoàn thành
   - Hoàn thành các yêu cầu từ 1.1 đến 2.10 trong `Lab01/README.md`.

- [ ] Nội dung chưa hoàn thành
   - Không có.

Chi tiết: [`Lab01/README.md`](./Lab01/README.md)

### Lab02 - Thiết lập Backend với NODE|EXPRESSJS

- [x] Mô tả ngắn gọn lab
   - Thiết lập môi trường Node.js, tạo cấu trúc dự án backend.
   - Cài đặt dependency (`express`, `mongodb`, `cors`, `dotenv`, `nodemon`).
   - Xây dựng kiến trúc route - controller - DAO để truy xuất dữ liệu từ MongoDB Atlas.

- [x] Cách chạy chương trình

1. Mở terminal tại thư mục:

   `Lab02/code/movie-reviews/backend`

2. Cài dependency:

   `npm install`

3. Tạo/cập nhật file `.env` với thông tin kết nối MongoDB Atlas.

4. Chạy server:

   `npm start`

5. Mở trình duyệt và truy cập:

   `http://localhost:3000/api/v1/movies`

- [x] Kết quả thực hiện
   - Đã chạy được backend và trả dữ liệu JSON từ endpoint `/api/v1/movies`.
   - Đã tích hợp kết nối MongoDB Atlas qua lớp DAO.

- [x] Hình ảnh minh họa / output / screenshot
   - Tham khảo trong file `README.md` của `Lab02`.

- [x] Nội dung đã hoàn thành
   - Hoàn thành phần thiết lập môi trường và backend cơ bản theo đề bài Lab02.
   - Hoàn thành route, controller, DAO và kiểm tra endpoint hoạt động.

- [ ] Nội dung chưa hoàn thành
   - Không có.

Chi tiết: [`Lab02/README.md`](./Lab02/README.md)
