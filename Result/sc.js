document.addEventListener('DOMContentLoaded', function () {
    var a1 = document.getElementById("slabel1");
    var b1 = document.getElementById("popup1");

    //PROMPT 

    a1.addEventListener("click", function () {
        b1.style.display = "block";
    });

    var c1 = document.getElementById("m1");
    var d1 = document.getElementById("m2");
    var e1 = document.getElementById("m3");

    //PROMPT MARKS OF MATHS

    var f1 = document.getElementById("sub1");
    f1.addEventListener("click", function () {
        var m1 = parseInt(c1.value);
        var m2 = parseInt(d1.value);
        var m3 = parseInt(e1.value);

        if (m1 < 0 || m1 > 36 || m2 < 0 || m2 > 36 || m3 < 0 || m3 > 36) {
            alert("Sessional marks should be between 0 and 36.");
            return;
        }


        if ((!isNaN(m1) || m1 !== null) || (!isNaN(m2) || m2 !== null) || (!isNaN(m3) || m3 !== null)) {
            alert("Sessional marks can not be any character or empty.");
            return;
        }

            var result = (m1 + m2 + m3) / 3;
            b1.style.display = "none";
            a1.innerHTML = result;
        });

    //PROMPT FOR PHYSICS

    var a2 = document.getElementById("slabel2");
    var b2 = document.getElementById("popup2");

    a2.addEventListener("click", function () {
        b2.style.display = "block";
    });

    //PROMPT MARKS OF PHYSICS


    var c2 = document.getElementById("m4");
    var d2 = document.getElementById("m5");
    var e2 = document.getElementById("m6");

    var f2 = document.getElementById("sub2");
    f2.addEventListener("click", function () {
        var m4 = parseInt(c2.value);
        var m5 = parseInt(d2.value);
        var m6 = parseInt(e2.value);

        if (m4 < 0 || m4 > 36 || m5 < 0 || m5 > 36 || m6 < 0 || m6 > 36) {
            alert("Sessional marks should be between 0 and 36.");
            return;
        }


        if ((!isNaN(m4) || m4 !== null) || (!isNaN(m5) || m5 !== null) || (!isNaN(m6) || m6 !== null)) {
            alert("Sessional marks can not be any character or empty.");
            return;
        }

        var result = (m4 + m5 + m6) / 3;
        b2.style.display = "none";
        a2.innerHTML = result;


        //PROMPT FOR PPS section
        var a3 = document.getElementById("slabel3");
        var b3 = document.getElementById("popup3");

        a3.addEventListener("click", function () {
            b3.style.display = "block";
        });

        var c3 = document.getElementById("m7");
        var d3 = document.getElementById("m8");
        var e3 = document.getElementById("m9");

        var f3 = document.getElementById("sub3");
        f3.addEventListener("click", function () {
            var m7 = parseInt(c3.value);
            var m8 = parseInt(d3.value);
            var m9 = parseInt(e3.value);

            if (m7 < 0 || m7 > 36 || m8 < 0 || m8 > 36 || m9 < 0 || m9 > 36) {
                alert("Sessional marks should be between 0 and 36.");
                return;
            }

            if ((!isNaN(m7) || m7 !== null) || (!isNaN(m8) || m8 !== null) || (!isNaN(m9) || m3 !== null)) {
                alert("Sessional marks can not be any character or empty.");
                return;
            }

            var result = (m7 + m8 + m9) / 3;
            b3.style.display = "none";
            a3.innerHTML = result;
        });
    });
});
