$(document).ready(() => {
    $("#mhsForm").validate({
        rules: {
            nrp: {
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            nama: {
                maxlength: 100
            },
            tglLahir: {
                indonesianDate: true
            },
            email: {
                email: true
            },
            password: {
                minlength: 8
            },
            ulangiPassword: {
                equalTo: "#password"
            }
        },
        messages: {
            nrp: {
                digits: "NRP harus memakai angka",
                minlength: "NRP harus terdiri dari 10 angka",
                maxlength: "NRP harus terdiri dari 10 angka"
            },
            email: {
                email: "Email tidak valid"
            },
            password: {
                minlength: "Password minimal terdiri dari 8 karakter"
            },
            ulangiPassword: {
                equalTo: "Password tidak sama"
            }
        }
    });
});