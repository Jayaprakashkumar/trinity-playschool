$(document).ready(function () {


    //  https://firebase.google.com/docs/web/setup#available-libraries -->
    // <script src="https://www.gstatic.com/firebasejs/7.23.0/firebase-analytics.js"></script>

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    //   const firebaseConfig = {
    //     apiKey: "AIzaSyD5E2vTQLA64oBLPi23NTAjElMK4CdedaI",
    //     authDomain: "trinity-playschool.firebaseapp.com",
    //     databaseURL: "https://trinity-playschool.firebaseio.com",
    //     projectId: "trinity-playschool",
    //     storageBucket: "trinity-playschool.appspot.com",
    //     messagingSenderId: "579803370948",
    //     appId: "1:579803370948:web:16724bf8f8719d69d24091",
    //     measurementId: "G-Y4C3G0G1KS"
    //   };
    //   // Initialize Firebase
    //   firebase.initializeApp(firebaseConfig);
    //   firebase.analytics();

    'use strict';

    //grab a form
    const form = document.querySelector('.appointment-form');

    //grab an input
    // const inputEmail = form.querySelector('#inputEmail');




    //config your firebase push
    const config = {
        apiKey: "AIzaSyD5E2vTQLA64oBLPi23NTAjElMK4CdedaI",
        authDomain: "trinity-playschool.firebaseapp.com",
        databaseURL: "https://trinity-playschool.firebaseio.com",
        projectId: "trinity-playschool",
        storageBucket: "trinity-playschool.appspot.com",
        messagingSenderId: "579803370948",
        appId: "1:579803370948:web:16724bf8f8719d69d24091",
        measurementId: "G-Y4C3G0G1KS"
    };


    //create a functions to push
    function firebasePush(...input) {


        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        //push itself
        var mailsRef = firebase.database().ref('client').push().set(
            {
                name: input[1],
                mail: input[0],
                phone: input[2],
                message: input[3] || ""

            }
        );

    }

    //push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            let inputEmail = $("#inputEmail").val();
            let inputName = $("#inputName").val();
            let inputPh = $("#inputNum").val();
            let inputMessage = $("textarea").val();
            let lastname = $("#lastname").val();

            if (inputEmail.length === 0 || inputName.length === 0 || inputPh.length === 0) {
                alert("please fill the fields and submit it")
                return;
            }

            firebasePush(inputEmail, inputName, inputPh, inputMessage);

            //shows alert if everything went well.
            inputEmail = "";
            inputName = "";
            inputPh = "";
            inputMessage = "";
            lastname = ""

            return alert('Thanks for interested in you organization. Our team will reach you shortly!!');
        })
    }

})