import { _decorator, Component, Label, Node, Prefab, RichText, tween, Tween, v3,instantiate } from 'cc';
import { UserMoneyInfo } from './UserMoneyInfo';
import { kefuScript } from './kefuScript';
import { Notification_Alert } from './Notification_Alert_Msg';
import { Documentation } from './Documentation';
const { ccclass, property } = _decorator;

@ccclass('headerScript')
export class headerScript extends Component {
    @property(Label) username:Label = null!
    @property(Label) amount:Label = null!
    // @property(Label) marqueeText: Label = null!
    @property(RichText) marqueeText: RichText = null!;
    @property(Node) marqueeParentNode :Node = null!
    public marqueeAnim:Tween<Node> = null!;

    @property(Prefab) userMoneyInfoPrefab: Prefab = null!;


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

    openUserInfoDialog() {
        // Find the userMoneyInfoNode in the node hierarchy
        const userMoneyInfoNode = this.node.parent?.getChildByName('UserMoneyInfoPrefab');

        // Check if the node exists and has the UserMoneyInfo component
        if (userMoneyInfoNode) {
            const userMoneyInfoComponent = userMoneyInfoNode.getComponent('UserMoneyInfo') as UserMoneyInfo;
            
            // Check if the component exists and call the openDialog method
            if (userMoneyInfoComponent) {
                userMoneyInfoComponent.openDialog(this.amount.string);
            }
        }
    }

    openKefuDialog() {
        // Find the kefunode in the node hierarchy
        const kefuNode = this.node.parent?.getChildByName('KefuPrefab');

        // Check if the node exists and has the UserMoneyInfo component
        if (kefuNode) {
            const kefuComponent = kefuNode.getComponent('kefuScript') as kefuScript;
            
            // Check if the component exists and call the openDialog method
            if (kefuComponent) {
                kefuComponent.openDialog();
            }
        }
    }


    openNotiDialog() {
        console.log('click openNotiDialog')
                // Find the kefunode in the node hierarchy
                const notiNode = this.node.parent?.getChildByName('NotiPrefab');

                // Check if the node exists and has the UserMoneyInfo component
                if (notiNode) {
                    const notiComponent = notiNode.getComponent('Notification_Alert') as Notification_Alert;
                    
                    // Check if the component exists and call the openDialog method
                    if (notiComponent) {
                        notiComponent.openDialog();
                    }
                }
    }
    openDocumentDialog() {
        console.log('click openDocumentDialog')
                // Find the kefunode in the node hierarchy
                const docuNode = this.node.parent?.getChildByName('DocumentationPrefab');

                // Check if the node exists and has the UserMoneyInfo component
                if (docuNode) {
                    const documentComponent = docuNode.getComponent('Documentation') as Documentation;
                    
                    // Check if the component exists and call the openDialog method
                    if (documentComponent) {
                        documentComponent.openDialog();
                    }
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


