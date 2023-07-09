for(var i=0;i<document.querySelectorAll(".drum").length;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var druminnerhtml = this.innerHTML;
        makeSound(druminnerhtml);
    
        buttonAnimation(druminnerhtml);
        //this.style.color = "blue";
        
        });
    }
    document.addEventListener("keypress",function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });
    
    function makeSound(key){
        switch (key) {
            case "w":
                var audio1 = new Audio('d1.mp3');
                audio1.play();
                break;
            case "a":
                var audio2 = new Audio('d2.mp3');
                audio2.play();
                break;
                case "s":
                var audio3 = new Audio('d3.mp3');
                audio3.play();
                break;
                case "d":
                var audio4 = new Audio('d4.mp3');
                audio4.play();
                break;
                case "j":
                var audio5 = new Audio('d5.mp3');
                audio5.play();
                break;
                case "k":
                var audio6 = new Audio('d6.mp3');
                audio6.play();
                break;
                case "l":
                var audio7 = new Audio('d7.mp3');
                audio7.play();
                break;
                default: console.log(druminnerhtml);
        }
    }
    function buttonAnimation(currentkey){
        var activekey = document.querySelector("." + currentkey);
        activekey.classList.add("pressed");
    
        setTimeout(function(){
            activekey.classList.remove("pressed");
        },250);
        
    }
    /*document.querySelector(".w").addEventListener("click", function(){
        this.style.color = "blue";
    
    });
    document.querySelector(".a").addEventListener("click", function(){
        this.style.color = "black";
        var audio = new Audio('switchicons.mp3');
        audio.play();
    });
    document.querySelector(".d").addEventListener("click", function(){
        this.style.color = "purple";
            var audio = new Audio('knock_knock.mp3');
            audio.play();
    });
    document.querySelector(".s").addEventListener("click", function(){
        this.style.color = "brown";
        var audio = new Audio('xyz.mp3');
        audio.play();
        });*/