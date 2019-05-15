$(document).ready(function(){

    $(function () {
        $("#btnSubmit").click(function () {
            var user_name = $("#sign_user").val();
            var user_pasw = $("#sign_pasw").val();
            var name='用户名';
            var pasw="密码";

            if (user_name == null || user_name == "") {
                alert("用户名不能为空！");
                }
            else
            {
                $.ajax(

                    {
                    type: "POST",
                    url: "202.206.221.94:8080/login/",
                    dataType: "json",
                    data: {name:name,user_name:user_name,pasw:pasw,user_pasw:user_pasw},

                    success: function () {
                        alert('fas');
                    }
                });
            }
        });
    });
    $(function () {
        $("#js-baoxiu-submit").click(function () {

        })
    })
});
// $(document).ready(function(){
//     $("#btnSubmit").click(function(){
//
//         $.post("https://202.206.221.94:8080/login",
//             {
//                 name:"Donald Duck",
//                 city:"Duckburg"
//             },
//
//             function(data,status){
//                 alert("数据：" + data + "\n状态：" + status);
//                 alert('444');
//             });
//     });
// });

