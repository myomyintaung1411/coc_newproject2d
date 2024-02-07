import { _decorator, Component, Font, HorizontalTextAlignment, Label, Node } from 'cc';
import { Global } from '../common/Globals';
const { ccclass, property } = _decorator;

@ccclass('kefuScript')
export class kefuScript extends Component {
    addedLabelNodes:Node[] = []
    start() {

    }

    update(deltaTime: number) {
        
    }

    // openDialog() {
    //     this.node.active = true;
    
    //     if (Global.servicesLink) {
    //         const bgComponent = this.node.getChildByName('Background');
    
    //         for (let index = 0; index < Global.servicesLink.length; index++) {
    //             const element = Global.servicesLink[index];
    
    //             // Create a new label
    //             const labelNode = new Node();
    //             const labelComponent = labelNode.addComponent(Label);
    
    //             // Set the label text
    //             labelComponent.string = `客服 ${index + 1}`;
    //             labelComponent.fontSize = 20
    //             labelComponent.horizontalAlign = HorizontalTextAlignment.LEFT
    
    //             // Set label position based on the index
    //             const xPosition = 1.151;
    //             const yPosition = 30.36 - index * 32; // Adjust the 32 based on your requirement
    
    //             labelNode.setPosition(xPosition, yPosition);
    
    //             // Add click event listener to open window
    //             labelNode.on(Node.EventType.TOUCH_END, () => {
    //                 // Handle click event to open window using the URL in element
    //                 console.log(`Open window for ${element}`);
    //                 window.open(element)
    //                 // Add your code to open the window here
    //             });
    
    //             // Add the label to the background or another suitable parent
    //             bgComponent.addChild(labelNode);
    //         }
    //     }
    // }

    openDialog() {
        if (Global.servicesLink) {
            const bgComponent = this.node.getChildByName('Background');
    
            // Array to store references of added label nodes
            this.addedLabelNodes = [];
    
            for (let index = 0; index < Global.servicesLink.length; index++) {
                const element = Global.servicesLink[index];
    
                // Create a new label
                const labelNode = new Node();
                const labelComponent = labelNode.addComponent(Label);
    
                // Set the label text
                labelComponent.string = `客服 ${index + 1}`;
                labelComponent.fontSize = 20;
                labelComponent.horizontalAlign = Label.HorizontalAlign.LEFT;
    
                // Set label position based on the index
                const xPosition = 1.151;
                const yPosition = 30.36 - index * 32; // Adjust the 32 based on your requirement
    
                labelNode.setPosition(xPosition, yPosition);
    
                // Add click event listener to open window
                labelNode.on(Node.EventType.TOUCH_END, () => {
                    // Handle click event to open window using the URL in element
                    console.log(`Open window for ${element}`);
                    window.open(element);
                    // Add your code to open the window here
                });
    
                // Add the label to the background or another suitable parent
                bgComponent.addChild(labelNode);
    
                // Add the label node reference to the array
                this.addedLabelNodes.push(labelNode);
            }
        }
        this.node.active = true;
    }
    
    closeDialog() {
        this.node.active = false;
    
        // Remove dynamically added label nodes
        this.addedLabelNodes.forEach((labelNode) => {
            labelNode.removeFromParent();
        });
    
        // Clear the array
        this.addedLabelNodes = [];
    }
    
}


