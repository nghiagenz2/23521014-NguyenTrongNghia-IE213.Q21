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
- Lab04: Xây dựng Frontend Movie Reviews với React
- Lab05: Kết nối Backend và hoàn thiện Frontend Movie Reviews

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

### Lab04 - Xây dựng Frontend Movie Reviews với React

- Mô tả ngắn gọn lab
   - Thiết lập frontend React cho ứng dụng Movie Reviews.
   - Xây dựng giao diện điều hướng bằng React-Bootstrap.
   - Thiết lập định tuyến các trang `movies`, `movie detail`, `add review`, `login` bằng React Router DOM.

- Cách chạy chương trình

1. Mở terminal tại thư mục:

   `Lab04/code/MovieReview/frontend`

2. Cài dependency:

   `npm install`

3. Chạy frontend:

   `npm start`

4. Mở trình duyệt tại:

   `http://localhost:3000`

5. Kiểm tra các route giao diện:

   `http://localhost:3000/movies`

   `http://localhost:3000/movies/:id`

   `http://localhost:3000/movies/:id/review`

   `http://localhost:3000/login`

- Kết quả thực hiện
   - Đã khởi tạo project React và chạy thành công giao diện frontend.
   - Đã tích hợp Navbar bằng React-Bootstrap và định tuyến giữa các trang chức năng.

- Hình ảnh minh họa / output / screenshot
   - Tham khảo trong file `README.md` của `Lab04`.

- Nội dung đã hoàn thành
   - Hoàn thành các nội dung Bài 1 đến Bài 3 trong `Lab04/README.md`.
   - Hoàn thiện phần trình bày báo cáo và chèn ảnh minh họa.

- Nội dung chưa hoàn thành
   - Không có.

Chi tiết: [`Lab04/README.md`](./Lab04/README.md)

### Lab05 - Kết nối Backend và hoàn thiện Frontend Movie Reviews

- Mô tả ngắn gọn lab
   - Kết nối frontend với backend bằng `axios` thông qua lớp dịch vụ `MovieDataService`.
   - Hoàn thiện màn hình danh sách phim, trang chi tiết phim và danh sách review.
   - Kiểm thử thêm review bằng Postman và định dạng ngày tháng bằng `momentjs`.

- Cách chạy chương trình

1. Mở terminal tại thư mục:

   `Lab05/code/backend`

2. Cài dependency:

   `npm install`

3. Tạo/cập nhật file `.env` với thông tin kết nối MongoDB Atlas.

4. Chạy backend:

   `npm start`

5. Mở terminal khác tại thư mục:

   `Lab05/code/frontend`

6. Cài dependency:

   `npm install`

7. Chạy frontend:

   `npm start`

8. Truy cập ứng dụng và kiểm tra các trang:

   `http://localhost:3000/movies`

   `http://localhost:3000/movies/:id`

   `http://localhost:3000/movies/:id/review`

   `http://localhost:3000/login`

- Kết quả thực hiện
   - Đã tạo thành công lớp dịch vụ `MovieDataService` để kết nối frontend với backend.
   - Đã hiển thị danh sách phim bằng `MoviesList`, hỗ trợ tìm theo title và rating.
   - Đã xây dựng trang chi tiết phim, hiển thị review, thêm review bằng Postman và định dạng ngày tháng bằng `momentjs`.

- Hình ảnh minh họa / output / screenshot
   - Tham khảo trong file `README.md` của `Lab05`.

- Nội dung đã hoàn thành
   - Hoàn thành các nội dung từ Bài 1 đến Bài 4 trong `Lab05/README.md`.
   - Hoàn thiện phần kết nối frontend với backend, hiển thị movie detail và review.

- Nội dung chưa hoàn thành
   - Không có.

Chi tiết: [`Lab05/README.md`](./Lab05/README.md)

### Lab06 - Thêm/Sửa/Xoá Review, Phân Trang và Tìm Kiếm

- Mô tả ngắn gọn lab
   - Bổ sung chức năng đăng nhập, thêm/sửa/xoá review cho từng phim.
   - Hiển thị nút Edit/Delete đúng quyền user, cập nhật review trực tiếp trên giao diện.
   - Thêm phân trang, tìm kiếm theo tiêu đề/rating, đồng bộ dữ liệu frontend/backend.

- Cách chạy chương trình

1. Mở terminal tại thư mục backend:

   `Lab06/code/backend`

2. Cài dependency:

   `npm install`

3. Tạo/cập nhật file `.env` với thông tin kết nối MongoDB Atlas.

4. Chạy backend:

   `npm start`

5. Mở terminal khác tại thư mục frontend:

   `Lab06/code/frontend`

6. Cài dependency:

   `npm install`

7. Chạy frontend:

   `npm start`

8. Truy cập ứng dụng và kiểm tra các trang:

   `http://localhost:3000/movies`

   `http://localhost:3000/movies/:id`

   `http://localhost:3000/movies/:id/review`

   `http://localhost:3000/login`

- Kết quả thực hiện
   - Đăng nhập thành công, chỉ review của user mới hiện Edit/Delete.
   - Thêm/sửa/xoá review trực tiếp, cập nhật giao diện tức thì.
   - Phân trang, tìm kiếm hoạt động đúng, chuyển trang không tải lại toàn bộ dữ liệu.

- Hình ảnh minh họa / output / screenshot
   - Tham khảo trong file `README.md` của `Lab06`.

- Nội dung đã hoàn thành
   - Hoàn thành các chức năng đăng nhập, thêm/sửa/xoá review, phân trang, tìm kiếm.
   - Hiển thị đúng quyền user, cập nhật giao diện động, trình bày báo cáo và ảnh minh họa.

- Nội dung chưa hoàn thành
   - Không có.

Chi tiết: [`Lab06/README.md`](./Lab06/README.md)