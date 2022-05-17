var text;
var color=document.getElementById("myInput").value;
        switch(new color().getcolor()){
            case "R":
                color="Red";
                break;
            case "B":
                color="Blue";
                break;
            case "G":
                color="Green";
                break;
            case "O":
                color="Orange";
                break;
            case "Y":
                color="Yellow";
                break;
            case "W":
                color="White";
                break;
            default:
                text="Invaluid Input";
        }
   