# ReactNativeFixDRL

Trước hết phải tải Android Studio, trong Android Studio => Projects => More Actions => Virtual Device Manager để chọn máy ảo phục vụ cho việc chạy ứng dụng expo-go của React Native (nếu chưa có thì có thể tạo máy ở phần dấu "+" ngay góc, thực hiện theo từng bước hướng dẫn ở trong)

Nếu chưa có project thì tại thư mục cần lưu git clone vào thư mục. Mở thư mục bằng Visual Studio Code.

Lúc đầu sẽ chưa có folder node_modules, vào terminal của Visual Studio Code chạy terminal dưới dạng CMD và nhập lệnh "npm install" để tải tất cả thư viện node đang dùng trong project

Sau khi đã thiết lập node_modules hoàn tất thực hiện lệnh "npm start" ở terminal. Một lúc sau khi terminal thực hiện lệnh "npm start" thì ấn phím "S" trên bàn phím để chuyển qua môi trường expo-go để chạy máy ảo điện thoại trên Android Studio, và ấn phím "A" để chạy ứng dụng "Expo Go" ở trên máy ảo Android. Sau khi đợi môi trường tải hay build lại môi trường thì chương trình sẽ chạy bình thường
