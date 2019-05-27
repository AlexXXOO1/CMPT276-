var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
    49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01
];
var text = "";
var i;
var ap = 0;
var a = 0;
var am = 0;
var bp = 0;
var b = 0;
var bm = 0;
var cp = 0;
var c = 0;
var cm = 0;
var d = 0;
var f = 0;
var distribute = [ap, a, am, bp, b, bm, cp, c, cm, d, f];



for (var i = 0; i < grades.length; i++) {
    if (grades[i] >= document.getElementById("aplus").value) {
        distribute[0]++;
    }
    else if (grades[i]>=90 && grades[i]<95) {
    distribute[1]++;

  }
  else if (grades[i]>=85 && grades[i]<90) {
    distribute[2]++;
  }
  else if (grades[i]>=80 && grades[i]<85) {
    distribute[3]++;
  }
  else if (grades[i]>=75 && grades[i]<80) {
    distribute[4]++;
  }
  else if (grades[i]>=70 && grades[i]<75) {
    distribute[5]++;
  }
  else if (grades[i]>=65 && grades[i]<70) {
    distribute[6]++;
  }
  else if (grades[i]>=60 && grades[i]<65) {
    distribute[7]++;
  }
  else if (grades[i]>=55 && grades[i]<60) {
    distribute[8]++;
}
else if (grades[i]>=50 && grades[i]<55) {
  distribute[9]++;
}
  else if ( grades[i]<50) {
    distribute[10]++;
  }
}
var str="O";
for (var i = 0; i < distribute.length; i++) {
  var index=i;
  var tmp=index.toString();
document.getElementById(index).innerHTML = str.repeat(distribute[i]);}



document.getElementById("aplus").onchange = function() {
    myFunction(0)
};
document.getElementById("a").onchange = function() {
    myFunction(1)
};
document.getElementById("amin").onchange = function() {
    myFunction(2)
};
document.getElementById("bplus").onchange = function() {
    myFunction(3)
};
document.getElementById("b").onchange = function() {
    myFunction(4)
};

document.getElementById("bmin").onchange = function() {
    myFunction(5)
};
document.getElementById("cplus").onchange = function() {
    myFunction(6)
};
document.getElementById("c").onchange = function() {
    myFunction(7)
};
document.getElementById("cmin").onchange = function() {
    myFunction(8)
};
document.getElementById("d").onchange = function() {
    myFunction(9)
};
document.getElementById("f").onchange = function() {
    myFunction(10)
};



function myFunction(x) {
  if (x==0) {
    var tmp1 = document.getElementById("aplus");
  }
  else if (x==1) {
    var tmp1 = document.getElementById("a");
  }
  else if (x==2) {
    var tmp1 = document.getElementById("amin");
  }
  else if (x==3) {
    var tmp1 = document.getElementById("bplus");
  }
  else if (x==4) {
    var tmp1 = document.getElementById("b");
  }
  else if (x==5) {
    var tmp1 = document.getElementById("bmin");
  }
  else if (x==6) {
    var tmp1 = document.getElementById("cplus");
  }
  else if (x==7) {
    var tmp1 = document.getElementById("c");
  }
  else if (x==8) {
    var tmp1 = document.getElementById("cmin");
  }
  else if (x==9) {
    var tmp1 = document.getElementById("d");
  }
  else if (x==10) {
    var tmp1 = document.getElementById("f");
  }
    distribute[x] = 0;
    for (var i = 0; i < grades.length; i++) {
      if (tmp1.id=="aplus") {
        if (grades[i] >= tmp1.value) {
          distribute[x]++;
        }
      }
      else if (tmp1.id=="f") {
        if (grades[i] <= tmp1.value) {
          distribute[x]++;
        }

      }
        else{
          var tmp3=tmp1.value;
          var tmp4=parseInt(tmp3);
          var up=tmp4+5;
          //document.getElementById("test").innerHTML =typeof(tmp4);
          var bot=tmp1.value;
           if (grades[i] >= bot && grades[i]<up) {
            distribute[x]++;
        }}
    }
    var tmp2;
    tmp2=x.toString();
    document.getElementById(tmp2).innerHTML = "O".repeat(distribute[x])
}
