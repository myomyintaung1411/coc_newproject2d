import { _decorator, Component, Label, Node, RichText, tween, Tween, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('headerScript')
export class headerScript extends Component {
    @property(Label) username:Label = null!
    @property(Label) amount:Label = null!
    // @property(Label) marqueeText: Label = null!
    @property(RichText) marqueeText: RichText = null!;
    @property(Node) marqueeParentNode :Node = null!
    public marqueeAnim:Tween<Node> = null!;

    start() {

    }

    setText(txt){
     this.marqueeText.string = `<color=#ffffff letter-spacing:2>${txt}</color>`;
     this.startMarqueeAnimation()
    }

    startMarqueeAnimation() {
        const marqueeDistance = 1500; // Adjust the total distance of the marquee animation
        const duration = 30; // Adjust the duration of the marquee animation

        // Reset the marqueeText position to the starting point within the parent node
        this.marqueeText.node.setPosition(marqueeDistance / 2, 0);
        
        // Create the marquee animation using sequence and by
        this.marqueeAnim = tween(this.marqueeText.node)
            .sequence(
                tween().by(duration, { position: v3(-marqueeDistance, 0) }),
                tween().set({ position: v3(marqueeDistance / 2, 0) }) // Set the position to starting point
            )
            .repeatForever()
            .start();
    }


    stopMarqueeAnimation() {
        if (this.marqueeAnim) {
            this.marqueeAnim.stop();
        }
    }


    setUserData (userinfo) {
        this.username.string = userinfo?.username
        this.amount.string = userinfo?.ye
    }



    update(deltaTime: number) {
        //this.startMarqueeAnimation()
    }
}


