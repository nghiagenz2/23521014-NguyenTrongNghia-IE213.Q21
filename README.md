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
- Lab03: Hoàn thiện Movie Reviews Backend

## Checklist theo từng lab

### Lab01 - MongoDB CRUD Operation

- Mô tả ngắn gọn lab
   - Thiết lập MongoDB Atlas và MongoDB Compass.
   - Kết nối cluster cloud, nạp sample dataset.
   - Thực hành các thao tác CRUD và truy vấn nâng cao trên collection `employees`.

- Cách chạy chương trình
   - Mở MongoDB Compass và kết nối tới cluster Atlas.
   - Mở MONGOSH trong Compass và chạy các lệnh theo hướng dẫn trong `Lab01/README.md`.

- Kết quả thực hiện
   - Đã thực hiện thành công các thao tác CRUD (`insert`, `find`, `update`, `unset`, `aggregate`).
   - Đã truy vấn và thống kê theo `organization` đúng yêu cầu đề bài.

- Hình ảnh minh họa / output / screenshot
   - Tham khảo trong file `README.md` của `Lab01`.

- Nội dung đã hoàn thành
   - Hoàn thành các yêu cầu từ 1.1 đến 2.10 trong `Lab01/README.md`.

- Nội dung chưa hoàn thành
   - Không có.

Chi tiết: [`Lab01/README.md`](./Lab01/README.md)

### Lab02 - Thiết lập Backend với NODE|EXPRESSJS

- Mô tả ngắn gọn lab
   - Thiết lập môi trường Node.js, tạo cấu trúc dự án backend.
   - Cài đặt dependency (`express`, `mongodb`, `cors`, `dotenv`, `nodemon`).
   - Xây dựng kiến trúc route - controller - DAO để truy xuất dữ liệu từ MongoDB Atlas.

- Cách chạy chương trình

1. Mở terminal tại thư mục:

   `Lab02/code/movie-reviews/backend`

2. Cài dependency:

   `npm install`

3. Tạo/cập nhật file `.env` với thông tin kết nối MongoDB Atlas.

4. Chạy server:

   `npm start`

5. Mở trình duyệt và truy cập:

   `http://localhost:3000/api/v1/movies`

- Kết quả thực hiện
   - Đã chạy được backend và trả dữ liệu JSON từ endpoint `/api/v1/movies`.
   - Đã tích hợp kết nối MongoDB Atlas qua lớp DAO.

- Hình ảnh minh họa / output / screenshot
   - Tham khảo trong file `README.md` của `Lab02`.

- Nội dung đã hoàn thành
   - Hoàn thành phần thiết lập môi trường và backend cơ bản theo đề bài Lab02.
   - Hoàn thành route, controller, DAO và kiểm tra endpoint hoạt động.

- Nội dung chưa hoàn thành
   - Không có.

Chi tiết: [`Lab02/README.md`](./Lab02/README.md)

### Lab03 - Hoàn thiện Movie Reviews Backend

- Mô tả ngắn gọn lab
   - Hoàn thiện ứng dụng Movie Reviews với các chức năng review CRUD.
   - Bổ sung route, controller và DAO cho review, movie by id và ratings.
   - Kiểm thử các API bằng Postman và trình bày kết quả trong README.

- Cách chạy chương trình

1. Mở terminal tại thư mục:

   `Lab03/code/movie-reviews/backend`

2. Cài dependency:

   `npm install`

3. Tạo/cập nhật file `.env` với thông tin kết nối MongoDB Atlas.

4. Chạy server:

   `npm start`

5. Mở Postman hoặc trình duyệt và thử các endpoint:

   `http://localhost:3000/api/v1/movies/review`

   `http://localhost:3000/api/v1/movies/id/:id`

   `http://localhost:3000/api/v1/movies/ratings`

- Kết quả thực hiện
   - Đã xây dựng và kiểm thử thành công các API review CRUD.
   - Đã lấy được thông tin phim theo ID và danh sách rating từ dữ liệu.

- Hình ảnh minh họa / output / screenshot
   - Tham khảo trong file `README.md` của `Lab03`.

- Nội dung đã hoàn thành
   - Hoàn thành các bài từ Bài 1 đến Bài 4 trong `Lab03/README.md`.
   - Hoàn thiện trình bày báo cáo và chèn hình ảnh minh họa.

- Nội dung chưa hoàn thành
   - Không có.

Chi tiết: [`Lab03/README.md`](./Lab03/README.md)
