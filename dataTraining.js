const dataTrain = [
  {
    input: "tệ",
    output: "bad",
  },
  {
    input: "phòng này quá tệ, dịch vụ kém, tôi sẽ không quay trở lại",
    output: "bad",
  },
  {
    input: "quá tệ",
    output: "bad",
  },
  {
    input: " rất tệ",
    output: "bad",
  },
  {
    input: "phòng xấu,chất lượng phục vụ kém",
    output: "bad",
  },
  {
    input: "chất lượng không tốt",
    output: "bad",
  },
  {
    input: " không tốt",
    output: "bad",
  },
  {
    input: "không tệ",
    output: "good",
  },
  {
    input: "khá tệ",
    output: "bad",
  },
  {
    input: "chất lượng kém",
    output: "bad",
  },
  {
    input: "chất lượng rất kém",
    output: "bad",
  },
  {
    input: "quá tệ",
    output: "bad",
  },
  {
    input: "kém",
    output: "bad",
  },
  {
    input: "rất kém",
    output: "bad",
  },
  {
    input: "không tốt",
    output: "bad",
  },
  {
    input: "không tệ",
    output: "good",
  },
  {
    input: "không kém",
    output: "good",
  },
  {
    input: "chưa tốt",
    output: "bad",
  },
  {
    input: "tốt",
    output: "good",
  },
  {
    input: "rất tốt",
    output: "good",
  },
  {
    input: "chất lượng rất tốt",
    output: "good",
  },
  {
    input: "rất ưng ý",
    output: "good",
  },
  {
    input: " khá ưng ý",
    output: "good",
  },
  {
    input: " dịch vụ tốt",
    output: "good",
  },
  // {
  //   input:
  //     "Rất tuyệt vời, dịch vụ rất đáng để trải nghiệm . Nhân viên nhẹ nhàng, phục vụ tận tâm và chu đáo. Không gian đẹp, rộng rãi, thoáng.",
  //   output: "good",
  // },
  // {
  //   input:
  //     " Nhân viên chưa chuyên nghiệp , phòng nữ đang xông hơi mà có 1 nv nam đi vào??? Hết sức vô lí , ko ai trông coi hay sao ? Phòng xông hơi ở tất cả mọi nơi đều kín gió , vậy mà ở đây cứ nv đi ra vào đều không đóng kín cửa .",
  //   output: "bad",
  // },
  // {
  //   input: " Món Ăn Ngon - Nhân Viên Dễ thương - Đẹp - Có nhiều góc Sống Ảo Cực Chill",
  //   output: "good",
  // },
  // {
  //   input: " Phục vụ tận tình phòng yên tĩnh sạch sẽ , onsen thư giãn",
  //   output: "good",
  // },
  // {
  //   input:
  //     "Rất rộng thoải mái đầy đủ và hiện đại. Nhân viên ai cũng nhiệt tình dễ thương. Không gian rất giống Nhật bản và sạch sẻ.",
  //   output: "good",
  // },
  // {
  //   input:
  //     " Không gian đẹp, nhiều góc chụp hình đẹp. Nhân viên chủ đáo nhiệt tình. Đánh giá 5 saoo",
  //   output: "good",
  // },
  // {
  //   input:
  //     " , vì các chỗ chơi với nước rất nguy hiểm, Nvien  ít và không nhiệt tình. ( vé vào giữ con nv quá cao). Với ở đây không đi với con thì ng lớn vào không có chỗ tắm. Không bông xông, k có nơi dành riêng ng lớn",
  //   output: "bad",
  // },
  // {
  //   input:
  //     "Cầu trượt không an toàn . Con mình đã bị té gãy xương đòn . Không có bộ phận y tế kịp thời , khi vào phòng y tế thì ko có ai trực . Nhân viên phục vụ không nhiệt tình !!",
  //   output: "bad",
  // },
  // {
  //   input: "Không gian rộng rãi, dịch vụ OK. M thích khoảng vườn của villa",
  //   output: "good",
  // },
  // {
  //   input: "Không gian rộng rãi thoáng mát. thật tuyệt vời!",
  //   output: "good",
  // },
  // {
  //   input:
  //     "Thích nhất cách phục vụ của các bạn nhân viên. Đi đâu cũng có người hướng dẫn, thậm chí là dẫn khách đến tận nơi, đảm bảo khách có thể bắt đầu sử dụng dịch vụ riêng rồi mới rời đi.",
  //   output: "good",
  // },
  // {
  //   input:
  //     "Đồ ăn có trả phí thì ngon, còn phần ăn sáng kèm theo khi ở khách sạn thì chưa phong phú lắm.",
  //   output: "good",
  // },
  // {
  //   input:
  //     "Điểm không hài lòng là cách hướng dẫn về các dịch vụ khách hàng sẽ được trải nghiệm (bao gồm miễn phí và tốn phí) của lễ tân khách sạn vẫn chưa rõ ràng lắm, mong Mikazuki cải thiện điểm này hơn.",
  //   output: "nomal",
  // },
  // {
  //   input:
  //     "Người sau chen ngang người trước , vẫn được nhân viên bán vé mà không nhắc nhở , quản lý còn bảo thông cảm   . Người mua vé tắm onsen lại được vào tắm như người mua vé water park , kiểm tra lỏng lẻo",
  //   output: "bad",
  // },
  // {
  //   input:
  //     "Dịch vụ không chuyên nghiệp. Không thấy thoải mái khi đến đây. Khi dịch vụ chưa chuyên nghiệp",
  //   output: "bad",
  // },
  // {
  //   input: " Chưa dc hoàn thiện nên cách phục vụ ko dc ổn",
  //   output: "bad",
  // },
  // {
  //   input: "Mình đã có 1 trải nghiệm khá tệ tại công viên nước nóng miyazuki cuối tuần vừa rồi",
  //   output: "bad",
  // },
  // {
  //   input: "Nhân viên phục vụ tỏ thái độ với khách",
  //   output: "bad",
  // },
  // {
  //   input:
  //     "Kháck sạn sạch sẽ ❤️ nvien thân thiện, trc đó e gái mình có đi và giới thiệu, năm nay thử trải nghiệm. Năm sau có đi thì sẽ chỉ ở khách sạn này thôi, thích lắm luôn trong phòng còn có ngoài hiên ngồi thư giãn chill cực kỳ.",
  //   output: "good",
  // },
  // {
  //   input:
  //     " Dịch vụ tuyệt vời quá. Hết kỳ nghỉ rồi mà chỉ muốn ở lại thêm. Cảm ơn bạn Huy nhé, nhân viên rất là dễ mến 😉",
  //   output: "good",
  // },
  // {
  //   input: " mọi thứ ở đây đều tuyệt vời",
  //   output: "good",
  // },
  // {
  //   input:
  //     "Xin lỗi anh chị em ở khách sạn hương sơn ,tôi không thích cách phục vụ buffe của nhà hàng",
  //   output: "bad",
  // },
  // {
  //   input:
  //     " Mình rất thích cách phục vụ ở đây nhân viên nhiệt tình với khách alo lúc nào là có luc đấy. Giá phòng xứng đáng với những gì bạn nhận được.",
  //   output: "good",
  // },
  // {
  //   input:
  //     " ko chất lượng, phòng tắm bệ xi măng đã cũ, chợt vẹt nhiều, khoá ko đc. Hành lang ko có điện, phải tự tìm để bật, tường hành lang bị chợt do xe đẩy làm phòng tạo ra quá nhiều, mất thẩm mĩ, vệ sinh hành lang ko sạch, để vật dụng lung tung, và để cả lối cầu thang bộ.",
  //   output: "bad",
  // },
  // {
  //   input: "Nếu các bạn muốn đi đến chỗ để nghỉ dưỡng, thì không nên đến đây",
  //   output: "bad",
  // },
  // {
  //   input:
  //     "Phòng quá tệ với tiêu chuẩn sao, thức uống kém chất lượng. Phục vui thiếu thân thiện đối với nhân viên. Thiếu đi sự ấm cúng coi như là nhà. Không gian bên ngoài nhìn vào cảm nhận quá tệ đối với túi tiền tôi bỏ ra để nghỉ tại KS này",
  //   output: "bad",
  // },
  // {
  //   input: "nhân viên phục vụ cực kém, khách đến ko tiếp đón, ",
  //   output: "bad",
  // },
  // {
  //   input: "Ồn ào , thiiết bị nhà tắm củ kĩ chật chội",
  //   output: "bad",
  // },
  // {
  //   input: "Phòng nhiều mùi hôi, mình nghĩ do cái thảm nền nhà",
  //   output: "bad",
  // },
  // {
  //   input: " Phòng nghỉ kém, nội thất xấu, ",
  //   output: "bad",
  // },
  // {
  //   input: "Điểm tâm sáng không phong phú. Không thể hiện được ẩm thực",
  //   output: "nomal",
  // },
  // {
  //   input: " Giường thoải mái",
  //   output: "nomal",
  // },
  // {
  //   input: "Không thích bãi đậu xe . Khu vực đậu xe quá hẹp và khó khăn",
  //   output: "bad",
  // },
  // {
  //   input: "Ăn sáng chưa ngon",
  //   output: "bad",
  // },
  // {
  //   input:
  //     "Sảnh chung với tiệc cưới nên thường ồn và nhiều mùi thức ăn. Không có bồn tắm cho hạng phòng deluxe.",
  //   output: "bad",
  // },
  // {
  //   input: "nhân viên phục vụ cực kém, khách đến ko tiếp đón",
  //   output: "bad",
  // },
  // {
  //   input: "có thái độ xâu coi thường với với khách ",
  //   output: "bad",
  // },
  // {
  //   input: " Phòng cách âm không tốt, gây tiếng ồn",
  //   output: "bad",
  // },
  // {
  //   input:
  //     "Trải nghiệm tồi tệ ở khách sạn này. Vật dụng trong khách sạn chuẩn bị sơ sài, ga giường bị rách. Điều tệ nhất là mình nhờ khách sạn thuê xe máy, không một nhân viên nào nhắc nhở về việc gửi xe như thế nào, giao xe lúc mấy giờ.",
  //   output: "bad",
  // },
  // {
  //   input: "Chưa có trải nghiệm tốt nên không có thích khi lưu trú tại đây.",
  //   output: "bad",
  // },
  // {
  //   input: "Không thích  phòng giống như nhà nghĩ , toilet không sạch ,",
  //   output: "bad",
  // },
  // {
  //   input:
  //     "Nhân viên không nhiệt tình, check in không đúng giờ, để khách đợi, Lẽ ra chekin muộn cũng nên có 1 lời với khách nhưng nhân viên rất dửng dưng. Mình đặt phòng trên booking mất năm nay mà chưa bao giờ có 1 trải nghiệm như vậy.",
  //   output: "bad",
  // },
  // {
  //   input: "Thiết bị cũ nát",
  //   output: "bad",
  // },
  // {
  //   input: "Nhân viên thái độ không thân thiện. Chỗ nghỉ không có kỹ năng dịch vụ",
  //   output: "bad",
  // },
  {
    input: "Khách sạn không như bề ngoài, phòng hôi, cũ và bẩn.",
    output: "bad",
  },
];
