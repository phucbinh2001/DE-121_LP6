$(document).ready(function () {
  $(function () {
    // add the rule here
    $.validator.addMethod(
      "valueNotEquals",
      function (value, element, arg) {
        return arg !== value;
      },
      "Value must not equal arg."
    );
    $("form[name='register']").validate({
      rules: {
        tenph: "required",
        sdt: {
          required: true,
          digits: true,
        },
        email: {
          required: true,
          email: true,
        },
        membership: { valueNotEquals: "" },
        children_old: { valueNotEquals: "" },
        tenbe: "required",
      },

      messages: {
        tenph: "**Vui lòng điền tên của bạn",
        sdt: {
          required: "**Chưa có số điện thoại",
          digits: "**Sai định dạng, mời nhập số",
        },
        email: {
          required: "**Vui lòng điền địa chỉ mail của bạn",
          email: "**Định dạng mail không đúng",
        },
        tenbe: {
          required: "**Vui lòng điền tên bé",
        },
        membership: "**Mời chọn gói",
        children_old: "**Mời chọn tuổi bé",
      },

      submitHandler: function (form) {
        console.log("da gui");
      },
    });
  });
});
