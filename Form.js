class Form {
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.title = createElement('h2');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
    }
    display(){
        this.title.html("Run Win Done");
        this.title.position(displayWidth/2 - 50, 0);

        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30, displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.title.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
        })
    }
}