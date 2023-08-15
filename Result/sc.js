document.addEventListener('DOMContentLoaded', function() {

    //condition of grade:
    var gradeRanges = [
      { min: 84.50, max: 100, grade: "100" },
      { min: 74.50, max: 84.49, grade: "90" },
      { min: 64.50, max: 74.49, grade: "80" },
      { min: 54.50, max: 64.49, grade: "70" },
      { min: 44.50, max: 54.49, grade: "60" },
      { min: 39.50, max: 44.49, grade: "50" },
      { min: 0, max: 39.49, grade: "0" },//fail
  
    ];
  
    var r1, r2, r3;
    //credit of sub
  
    var cr1 = 4.00;  //maths
    var cr2 = 5.00;  //phy
    var cr3 = 5.50;  //pps  
    var cr4 = 2.00;  //hw
    var cr5 = 3.00;  //eng
  
    var gt = cr1 + cr2 + cr3 + cr4 + cr5;
  
    var a1 = document.getElementById("slabel1");
    var b1 = document.getElementById("popup1");
  
    //PROMPT 
  
    a1.addEventListener("click", function() {
      b1.style.display = "block";
    });
  
    var c1 = document.getElementById("m1");
    var d1 = document.getElementById("m2");
    var e1 = document.getElementById("m3");
  
    //PROMPT MARKS OF MATHS
  
    var f1 = document.getElementById("sub1");
    f1.addEventListener("click", function() {
      var m1 = parseInt(c1.value);
      var m2 = parseInt(d1.value);
      var m3 = parseInt(e1.value);
  
      if (m1 < 0 || m1 > 36 || m2 < 0 || m2 > 36 || m3 < 0 || m3 > 36) {
        alert("Sessional marks should be between 0 and 36.");
        return;
      }
  
  
      if (isNaN(m1) || isNaN(m2) || isNaN(m3)) {
        alert("Sessional marks should be numeric.");
        return;
      }
  
      var result = (m1 + m2 + m3) / 3;
      b1.style.display = "none";
      a1.innerHTML = result;
      r1 = result;
    });
  
    //PROMPT FOR PHYSICS
  
    var a2 = document.getElementById("slabel2");
    var b2 = document.getElementById("popup2");
  
    a2.addEventListener("click", function() {
      b2.style.display = "block";
    });
  
    //PROMPT MARKS OF PHYSICS
  
  
    var c2 = document.getElementById("m4");
    var d2 = document.getElementById("m5");
    var e2 = document.getElementById("m6");
  
    var f2 = document.getElementById("sub2");
    f2.addEventListener("click", function() {
      var m4 = parseInt(c2.value);
      var m5 = parseInt(d2.value);
      var m6 = parseInt(e2.value);
  
      if (m4 < 0 || m4 > 36 || m5 < 0 || m5 > 36 || m6 < 0 || m6 > 36) {
        alert("Sessional marks should be between 0 and 36.");
        return;
      }
  
  
      if (isNaN(m4) || isNaN(m5) || isNaN(m6)) {
        alert("Sessional marks should be numeric.");
        return;
      }
  
      var result = (m4 + m5 + m6) / 3;
      b2.style.display = "none";
      a2.innerHTML = result;
      r2 = result;
    });
  
  
    //PROMPT FOR PPS section
    var a3 = document.getElementById("slabel3");
    var b3 = document.getElementById("popup3");
  
    a3.addEventListener("click", function() {
      b3.style.display = "block";
    });
  
    var c3 = document.getElementById("m7");
    var d3 = document.getElementById("m8");
    var e3 = document.getElementById("m9");
  
    var f3 = document.getElementById("sub3");
    f3.addEventListener("click", function() {
      var m7 = parseInt(c3.value);
      var m8 = parseInt(d3.value);
      var m9 = parseInt(e3.value);
  
      if (m7 < 0 || m7 > 36 || m8 < 0 || m8 > 36 || m9 < 0 || m9 > 36) {
        alert("Sessional marks should be between 0 and 36.");
        return;
      }
  
      if (isNaN(m7) || isNaN(m8) || isNaN(m9)) {
        alert("Sessional marks should be numeric.");
        return;
      }
  
      var result = (m7 + m8 + m9) / 3;
      b3.style.display = "none";
      a3.innerHTML = result;
      r3 = result;
  
    });
  
  
   // ... (Previous code)

var ca = document.getElementById("bt1");
ca.addEventListener("click", function() {

  var ex1 = document.getElementById("e1");
  var ex2 = document.getElementById("e2");
  var ex3 = document.getElementById("e3");
  var ex4 = document.getElementById("e4");

  var la1 = document.getElementById("l1");
  var la2 = document.getElementById("l2");
  var la3 = document.getElementById("l3");
  var la4 = document.getElementById("l4");
  var la5 = document.getElementById("l5");

  var t1 = parseInt(ex1.value) + r1 + 4;
  var t2 = parseInt(ex2.value) + r2 + 4 + parseInt(la1.value);
  var t3 = parseInt(ex3.value) + r3 + 4 + parseInt(la2.value);
  var t4 = parseInt(la3.value) + parseInt(la4.value);
  var t5 = parseInt(ex4.value) + 4 + parseInt(la5.value);

  
      // console.log(t1);
      // console.log(t2);
      // console.log(t3);
      // console.log(t4);
      // console.log(t5);

  // Check if marks for all subjects are provided
  if (isNaN(t1) || isNaN(t2) || isNaN(t3) || isNaN(t4) || isNaN(t5)) {
    alert("Please input marks for all subjects.");
    return;
  }

  var ra1 = calculateGrade(t1);
  var ra2 = calculateGrade((t2 * 100.00) / 150);
  var ra3 = calculateGrade((t3 * 100.00) / 150);
  var ra4 = calculateGrade(t4);
  var ra5 = calculateGrade((t5 * 100.00) / 90);

 
      // console.log(ra1);
      // console.log(ra2);
      // console.log(ra3);
      // console.log(ra4);
      // console.log(ra5); 

  var total = ((parseFloat(ra1) * cr1) / 100.00) + ((parseFloat(ra2) * cr2) / 100.00) + ((parseFloat(ra3) * cr3) / 100.00) + ((parseFloat(ra4) * cr4) / 100.00) + ((parseFloat(ra5) * cr5) / 100.00);

  var ou = document.getElementById("OUTPUT");
  ou.innerHTML = "Your SPI IS " + (total / gt) * 10.00;

});
    
    // Function to calculate the grade based on the percentage
    function calculateGrade(percentage) {
      for (var i = 0; i < gradeRanges.length; i++) {
        var range = gradeRanges[i];
        if (percentage >= range.min && percentage <= range.max) {
          return range.grade;
        }
      }
      return "No grade";
    }
  });
  