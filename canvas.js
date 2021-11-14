window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight - 110;
    canvas.width = window.innerWidth - 10;

    //Variabler

    let painting = false;
    let color = "black";
    let linesize = document.getElementById("sliderid").value;
    var pensizetext = document.getElementById("pensize");
    var slider = document.getElementById("sliderid");

    //Funktioner
    slider.oninput = function () {
        pensizetext.innerHTML = "Pen Size: " + this.value;
    };

    function startPosition(e) {
        linesize = document.getElementById("sliderid").value;
        painting = true;
        draw(e);
    }

    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }
    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = linesize;
        ctx.lineCap = "round";
        ctx.strokeStyle = color;
        ctx.lineTo(e.clientX - 5, e.clientY - 105);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - 5, e.clientY - 105);
    }
    function resize() {
        canvas.height = window.innerHeight - 110;
        canvas.width = window.innerWidth - 10;
    }
    //Eventlisteners

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
    window.addEventListener("resize", resize);

    document.getElementById("red").addEventListener("click", function () {
        color = "red";
        document.getElementById("colorbox").style.backgroundColor = "red";
    });
    document.getElementById("green").addEventListener("click", function () {
        color = "green";
        document.getElementById("colorbox").style.backgroundColor = "green";
    });
    document.getElementById("blue").addEventListener("click", function () {
        color = "blue";
        document.getElementById("colorbox").style.backgroundColor = "blue";
    });
    document.getElementById("black").addEventListener("click", function () {
        color = "black";
        document.getElementById("colorbox").style.backgroundColor = "black";
    });
    document.getElementById("erase").addEventListener("click", function () {
        color = "white";
        document.getElementById("colorbox").style.backgroundColor = "white";
    });
    document.getElementById("clear").addEventListener("click", function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
});
