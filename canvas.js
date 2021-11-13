window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //Variabler

    let painting = false;
    let color = "black";
    let linesize = 10;
    function startPosition(e) {
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
        ctx.lineTo(e.clientX, e.clientY - 100);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY - 100);
    }
    //Eventlisteners

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
    document.getElementById("red").addEventListener("click", function () {
        color = "red";
        linesize = 10;
    });
    document.getElementById("green").addEventListener("click", function () {
        color = "green";
        linesize = 10;
    });
    document.getElementById("blue").addEventListener("click", function () {
        color = "blue";
        linesize = 10;
    });
    document.getElementById("black").addEventListener("click", function () {
        color = "black";
        linesize = 10;
    });
    document.getElementById("erase").addEventListener("click", function () {
        color = "white";
        linesize = 20;
    });
    document.getElementById("clear").addEventListener("click", function () {
        color = "black";
        linesize = 10;
    });
    $(window).bind("mousewheel", function (event) {
        if (event.originalEvent.wheelDelta >= 0) {
            linesize += 5;
        } else {
            linesize -= 5;
        }
    });
});
window.addEventListener("resize", resize);
function resize() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}
