import { _decorator, Component, Label, director, tween,view, v3, UITransform, Vec3, SpriteFrame, Sprite } from 'cc';
const { ccclass, property } = _decorator;

enum Direction {
    LEFT_TO_RIGHT = 1,
    RIGHT_TO_LEFT,
}

@ccclass('marqueeScript')
export class MarqueeScript extends Component {
    @property(Label) marquee: Label = null!;
    @property(Sprite) MarkX : Sprite = null!; 
    startx:any = 0;
    endx:any = 0;
    speed:number = 100
    start() {
        this.marquee.string = 'CocosCreatorDemo is a set of demos commonly used in cocoscreator game development.'
        // Initial position of the label
        const initialPosition = this.node.position;
        
        // Move the label to the left edge
        this.marquee.node.setPosition(v3(view.getVisibleSize().width / 2, 0, 0));


        // Calculate the distance to travel
        const distance = this.marquee.node.parent.getComponent(UITransform).width + view.getVisibleSize().width;

          // Calculate the duration based on the speed
          const speed = 100; // Adjust the speed as needed
          const duration = distance / speed;

       // Create a tween to move the label
       tween(this.marquee.node)
       .to(duration, { position: new Vec3(-distance / 2, 0, 0) }) // Using to() instead of by()
       .call(() => {
           // Reset the label position when the animation completes
           this.marquee.node.setPosition(view.getVisibleSize().width / 2, 0, 0);
       })
       .repeatForever()
       
       .start();


    }

}