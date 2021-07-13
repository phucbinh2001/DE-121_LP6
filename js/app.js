function selectPlan(value) {
  $("#membership").val(value);
  console.log(value);
}

$(document).ready(function () {
  $(function () {
    // Check select input
    $.validator.addMethod(
      "valueNotEquals",
      function (value, element, arg) {
        return arg !== value;
      },
      "Value must not equal arg."
    );

    //Check Vietnam numberphone
    $.validator.addMethod(
      "VnNumberPhone",
      function (value, element, arg) {
        const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
        return regex.test(value);
      },
      "Số không hợp lệ"
    );

    $("form[name='register']").validate({
      rules: {
        name: "required",
        phone: {
          required: true,
          digits: true,
          VnNumberPhone: true,
        },
        email: {
          required: true,
          email: true,
        },
        membership: { valueNotEquals: "" },
        children_old: { valueNotEquals: "" },
        children_name: "required",
      },

      messages: {
        name: "Vui lòng điền tên của bạn",
        phone: {
          required: "Bạn chưa nhập số",
          digits: "Sai định dạng, mời nhập số",
        },
        email: {
          required: "Bạn chưa điền email",
          email: "Định dạng mail không đúng",
        },
        children_name: {
          required: "Vui lòng điền tên bé",
        },
        membership: "Mời chọn gói",
        children_old: "Mời chọn tuổi bé",
      },

      submitHandler: function (form) {
        console.log("da gui");
        form.submit();
      },
    });
  });
});
