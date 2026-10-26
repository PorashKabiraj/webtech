        function update() {
            document.getElementById("l1").innerHTML = "<del>Goodbye, World!</del>";
            document.getElementById("l1").style.color = "red";
        }
        function reset() {
            document.getElementById("l1").innerHTML = "Hello, World!";
            document.getElementById("l1").style.color = "black";
        }

        document.getElementById("l1").addEventListener("mouseover", function() {
            document.getElementById("l1").innerHTML = "<del>Goodbye, World!</del>";
            document.getElementById("l1").style.color = "red";
        });
        document.getElementById("l1").addEventListener("mouseout", function() {
            document.getElementById("l1").innerHTML = "Hello, World!";
            document.getElementById("l1").style.color = "black";
        });