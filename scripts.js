function slider(element) {
    if (document.getElementById(element).id == "s1") {
        document.getElementById('s1').className = "circle1";
        document.getElementById('s2').className = "circle";
        document.getElementById('s3').className = "circle";
        document.getElementById('s4').className = "circle";
    }
    if (document.getElementById(element).id == "s2") {
        document.getElementById('s1').className = "circle";
        document.getElementById('s2').className = "circle1";
        document.getElementById('s3').className = "circle";
        document.getElementById('s4').className = "circle";
    }
    if (document.getElementById(element).id == "s3") {
        document.getElementById('s1').className = "circle";
        document.getElementById('s2').className = "circle";
        document.getElementById('s3').className = "circle1";
        document.getElementById('s4').className = "circle";
    }
    if (document.getElementById(element).id == "s4") {
        document.getElementById('s1').className = "circle";
        document.getElementById('s2').className = "circle";
        document.getElementById('s3').className = "circle";
        document.getElementById('s4').className = "circle1";
    }
}