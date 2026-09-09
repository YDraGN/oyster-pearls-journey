# Oysteic's Ocean of Learning

Vai trò: Bạn là một product designer + frontend engineer giàu kinh nghiệm, chuyên xây landing page có chiều sâu thẩm mỹ, không phải template AI-generated rập khuôn. Trước khi code, nếu thấy thông tin nào chưa đủ để ra quyết định tốt, hãy hỏi lại tôi.

DỰ ÁN: Landing page cho ToeicSpace — nền tảng luyện thi TOEIC.

Mascot chính thức: Oysteic (đã được thiết kế xong, tôi đính kèm ảnh mascot ở dưới để bạn dùng làm chuẩn hình ảnh — không vẽ lại, chỉ dùng để đặt vào bố cục).

CÂU CHUYỆN MASCOT (giữ nguyên, dùng xuyên suốt nội dung liên quan đến Oysteic):

Oysteic sống trong một chiếc vỏ sò nhỏ giữa vùng biển ồn ào — nơi tiếng sóng tượng trưng cho những xao nhãng khi học tiếng Anh (thông báo điện thoại, deadline, sự trì hoãn...). Bên trong vỏ là một không gian hoàn toàn tĩnh lặng, nơi một viên ngọc trai lớn dần từng ngày — mỗi buổi học là một lớp xà cừ mới, kiến thức không đến ngay lập tức nhưng đến chắc chắn và đáng giá. Oysteic không phải gia sư nghiêm túc — là người bạn tinh nghịch, hài hước, luôn cổ vũ hết mình, khép vỏ lại đúng lúc để nhắc: "Ồn ào ở ngoài kia, còn giờ là lúc tập trung."

TINH THẦN THIẾT KẾ TỔNG THỂ (đọc kỹ trước khi dựng):

Tôi đính kèm nhiều ảnh chụp trang trí sổ tay (bullet journal) và ảnh không gian biển/bầu trời pastel làm nguồn cảm hứng. Đừng sao chép trực tiếp — hãy đọc ra tinh thần: nét chữ calligraphy/hand-lettering, cách sắp bullet-numbering, độ chuyển sắc pastel mượt mà giữa các tông cùng gam, chi tiết trang trí nhỏ (washi tape, sticker, đường viền vẽ tay). Toàn bộ ý tưởng "bầu trời phía trên - đại dương phía dưới" nên được xử lý như một trang sổ tay lớn được mở ra, nơi Oysteic đang "sống" trong khung cảnh đó — không phải một background stock photo thông thường.

Ý TƯỞNG BỐ CỤC TOÀN TRANG:

Landing page mô phỏng hành trình từ "bầu trời rộng lớn, ồn ào" (trên cùng) chuyển dần xuống "đại dương sâu, tĩnh lặng" (các section chi tiết bên dưới) — đúng tinh thần câu chuyện của Oysteic: càng đi sâu vào nội dung/tính năng, không gian càng lắng lại, tập trung hơn. Hãy tận dụng gradient chuyển cảnh này xuyên suốt khi cuộn trang.

===============================

1. HEADER

===============================

- Tối giản hoá, KHÔNG có thanh navigation truyền thống (không menu ngang liệt kê link).

- Vẫn cần: nút chuyển Light/Dark mode hoạt động thực sự, và nút Đăng nhập/Đăng ký.

- Hãy đề xuất cách triển khai sáng tạo cho các nút này sao cho ăn khớp với tinh thần "vỏ sò/bong bóng/bullet journal" — ví dụ (chỉ là gợi ý, bạn tự quyết định cách làm đẹp nhất): nút toggle mode được thiết kế như một viên ngọc trai đổi màu/đổi ánh sáng khi bấm, hoặc một bong bóng nhỏ nổi lên góc màn hình khi hover.

- Logo ToeicSpace đặt ở góc, có thể phối cùng một chi tiết nhỏ liên quan đến Oysteic (không cần vẽ mascot đầy đủ ở đây, có thể chỉ là icon/motif nhỏ).

===============================

2. HERO — DẠNG SLIDER (BẮT BUỘC)

===============================

Banner chính là một slider, background là không gian bầu trời (trên) chuyển xuống biển (dưới) rộng lớn, có ít nhất 3 slide sau — nội dung tạm/mockup, tôi sẽ chỉnh sau:

- Slide 1 — Giới thiệu website: tên ToeicSpace, một câu tagline ngắn, mascot Oysteic xuất hiện tự nhiên trong bối cảnh (ví dụ đang nổi trên mặt biển, hoặc thò ra từ một đám mây/con sóng), CTA chính.

- Slide 2 — Giới thiệu mascot: kể câu chuyện Oysteic ngắn gọn (dùng bản story ở trên, rút gọn còn 2-3 câu), mascot làm nhân vật chính của slide.

- Slide 3 — Giới thiệu tổng quan tính năng: liệt kê tên 4 nhóm tính năng chính dưới dạng banner tổng quan (Luyện Reading/Listening theo part — Cá nhân hoá lộ trình — Bộ sưu tập từ vựng cá nhân — Học từ vựng bằng AI), CHỈ nêu tên/icon/1 dòng mô tả ngắn, KHÔNG đi sâu chi tiết vì phần dưới trang sẽ giải thích kỹ từng cái.

Slider cần điều hướng rõ (dot indicator hoặc arrow), tự động chuyển hoặc cho phép người dùng chuyển tay, không giật/lag.

===============================

3. CÁC SECTION TÍNH NĂNG CHI TIẾT

===============================

Sau hero, chia thành các section riêng biệt, mỗi section giải thích kỹ 1 tính năng, theo thứ tự:

a) Phòng luyện tập TOEIC theo Part — mô phỏng trải nghiệm luyện từng Part (Part 1-7), hãy tự đề xuất cách trực quan hoá (ví dụ dạng thẻ bài từng Part, hoặc dạng "phòng học" ẩn dụ).

b) Cá nhân hoá roadmap + Set Goal — người dùng đặt mục tiêu điểm số/thời gian, hệ thống tạo lộ trình học riêng. Hãy trực quan hoá dưới dạng lộ trình/timeline có cảm giác "hành trình" (ăn khớp với ẩn dụ hành trình biển cả xuyên suốt trang).

c) Tự động tạo Collection từ vựng cá nhân — hệ thống gom các từ người dùng đã học/tra cứu thành bộ sưu tập riêng. Có thể mô phỏng như một "bộ sưu tập ngọc trai/vỏ sò" cá nhân — ăn khớp tự nhiên với ẩn dụ mascot.

d) Flashcard + Trắc nghiệm dùng từ bằng AI — luyện từ vựng qua flashcard và câu hỏi trắc nghiệm cách dùng từ do AI tạo ra.

Mỗi section: có tiêu đề dạng hand-lettering/calligraphy nhẹ, mockup UI minh hoạ (placeholder, tôi sẽ tự chỉnh nội dung/dữ liệu thật sau), và có thể lồng ghép chi tiết trang trí kiểu bullet journal (đường kẻ chấm, washi tape nhỏ, icon vẽ tay) làm điểm nhấn — không lạm dụng khiến rối mắt.

===============================

4. BULLET RAIL BÊN CẠNH (SIDE PROGRESS INDICATOR)

===============================

- Một dải bullet/chấm đánh dấu ở mép trang, sáng/đổi trạng thái theo section đang cuộn tới — giống cách đánh dấu mục lục bên lề sổ tay.

- Yêu cầu: tối giản (minimal) nhưng có xử lý hình ảnh sáng tạo — ví dụ mỗi chấm là một viên ngọc trai nhỏ, sáng dần khi đến section tương ứng, hoặc dùng hình bong bóng nhỏ nối nhau như một chuỗi. Bạn tự đề xuất, miễn giữ được sự "nhẹ nhàng" chứ không phải một thanh progress bar công nghiệp khô khan.

===============================

5. FORM ĐĂNG NHẬP / ĐĂNG KÝ

===============================

- Nút Đăng nhập/Đăng ký ở header phải mở ra được form thật (modal hoặc panel trượt — bạn chọn cách phù hợp nhất), có thể tương tác qua lại giữa 2 form (chuyển tab Đăng nhập ⇄ Đăng ký).

- Chưa cần backend thật, nhưng UI/UX phải đầy đủ, có validate cơ bản, để tôi preview trải nghiệm thực tế.

- Phong cách form nên ăn khớp tổng thể (có thể là một "trang sổ mở ra" hoặc một "vỏ sò hé mở" chứa form — tuỳ bạn sáng tạo, miễn nhất quán).

===============================

6. FOOTER

===============================

Thông tin liên hệ cơ bản (email, social, địa chỉ nếu cần) — thiết kế đơn giản, gọn, có thể giữ nhẹ một chi tiết trang trí nhỏ (như sóng biển mờ dần hoặc một dòng chữ calligraphy) để không bị cụt lủn so với tổng thể.
===============================

7. FOOTER

===============================

Màn hình 404 not found với mascot có sẵn, background banner và UI/UX phù hợp. 

===============================

8. RESPONSIVE / MOBILE

===============================

- Toàn bộ trang scale lại hợp lý cho mobile, KHÔNG đơn thuần xếp các section thành chồng box dọc.

- Với các section có nhiều item con (ví dụ danh sách Part luyện tập, hoặc feature cards), trên mobile hãy chuyển thành scroll ngang (horizontal scroll/carousel) thay vì liệt kê dọc — giữ trải nghiệm mượt, có chỉ báo có thể vuốt tiếp.

- Hero slider trên mobile vẫn giữ dạng slider, chỉ điều chỉnh tỉ lệ/kích thước chữ.

===============================

9. BẢNG MÀU & RULES

===============================

Light mode:

- Nền tảng bầu trời/biển pastel: phối xanh dương pastel — vàng pastel — hồng pastel.

- Phong cách thị giác: kết hợp giữa cảm giác tranh vẽ canvas (có texture/brushstroke nhẹ ở background lớn như bầu trời, biển) và các thành phần UI dạng soft 2D đơn giản (card, button, icon phẳng, bo góc mềm) — để sau này dễ chuyển đổi sang React Native cho app mobile mà không mất phong cách.

Dark mode:

- Nền tảng "bầu trời đêm": xanh dương đậm (dark blue) phối tím (violet) làm màu chủ đạo cho không gian biển cả về đêm.

- Vàng pastel và hồng pastel chuyển vai trò thành màu điểm xuyết (accent) — dùng cho CTA, icon nhấn, ánh sáng phát ra từ ngọc trai của Oysteic, không phủ diện rộng.

Yêu cầu bổ sung: hãy tự đề xuất một bảng token màu đầy đủ (nền, chữ, border, accent, trạng thái hover/focus) cho cả 2 mode, đảm bảo độ tương phản đọc tốt, và trình bày ngắn gọn bảng token đó kèm theo khi bàn giao, để tôi và team dễ duyệt thiết kế.

Typography: dùng font có chất calligraphy/hand-lettering cho tiêu đề/điểm nhấn (không lạm dụng ở phần nội dung dài), kết hợp font sans-serif rõ ràng dễ đọc cho phần mô tả/nội dung học thuật.

Component dùng chung: khi dựng, hãy liệt kê rõ những component tái sử dụng (button, card, bullet-rail item, modal form, slider control...) theo một hệ thống nhất quán, để tôi duyệt thiết kế tổng thể dễ dàng thay vì mỗi section một kiểu riêng biệt.

===============================

GHI CHÚ CUỐI

===============================

Ảnh đính kèm gồm 2 nhóm: (1) ảnh mascot Oysteic đã chốt — dùng làm chuẩn hình ảnh mascot, không vẽ lại; (2) ảnh sổ tay/bullet journal và ảnh không gian biển-bầu trời pastel — dùng để lấy cảm hứng phong cách, không sao chép nguyên xi.

Nếu có phần nào trong yêu cầu trên chưa đủ rõ để bạn ra quyết định thiết kế tốt nhất (ví dụ: nội dung cụ thể cho từng CTA, số lượng thẻ Part cần hiển thị, hoặc mức độ animation mong muốn khi chuyển slide), hãy hỏi lại tôi trước khi dựng.

Phần tên website được design vào góc trái trên cùng header của website, bạn giúp mình tạo kiểu typograph với them ít element đơn giản với phong cách phù hợp với mascot để  làm bộ nhận diện thương hiệu (xuất ra file png).

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://oyster-pearls-journey.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8f36415f-6a0f-48a3-8762-8f4ff50a6a12).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
