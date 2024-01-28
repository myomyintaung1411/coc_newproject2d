import { _decorator, Component, instantiate, Label, Prefab,ScrollView,Node, UITransform, Vec3, Color, Sprite, resources, SpriteFrame, Size, Vec2, Graphics, director } from 'cc';
import { bjlScript } from './bjlScript';
import { Global } from '../common/Globals';
const { ccclass, property } = _decorator;


@ccclass('singelRoom')
export class singelRoom extends Component {

    @property({
        type: Prefab
    })
    gridPrefab: Prefab = null!; //25 width and 25 height prefab node

    @property({
        type: ScrollView
    })
    scrollView: ScrollView = null!;

    @property({
        type: Prefab
    })
    gridPrefab2: Prefab = null!;
    numRows:number = 6
    numCols:number = 50

    public numItem 
    public itemSpace 
    public itemWH 
    public itemParentWidth

    singleRoomData:any  = []
    // addPrefabToScrollview() {
        
    // }

    start() { 
       this.node.setSiblingIndex(1)
    }



    show() {
    }
    clickRoom(data) {
        if(this.singleRoomData) {
            console.log(this.singleRoomData)
            const roomId = this.singleRoomData?.desk
            Global.roomId = roomId
            //currently this code is in testMainscene
            //i want to pass roomId in bjlScene and use it in onLoad method of bjlScene
             // Pass roomId to bjlScene
            // console.log(roomId,"roomId")
             director.loadScene('bjlScene', () => {
                const bjlScene = director.getScene();
                const bjlComponent = bjlScene.getComponent('bjlScript') as bjlScript;
                if (bjlComponent) {
                    //bjlComponent.rid = roomId
                    bjlComponent.setRoomId(roomId);
                }
            });
        }
    }
    createGrid(data) {
        this.singleRoomData = data
        const content = this.scrollView.content;
    
        const cellWidth = 25; // Adjust as needed
        const cellHeight = 25; // Adjust as needed
        const spacingX = 1; // Adjust as needed
        const spacingY = 1; // Adjust as needed
        const numRows = 6;
        const numCols = 30;
         // Calculate the total width of the grid content including spacing
         const totalWidth = numCols * (cellWidth + spacingX);
         // Set the content size to allow horizontal scrolling
         content.getComponent(UITransform).setContentSize(new Size(totalWidth,160))
    
        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                let gridNode = instantiate(this.gridPrefab);
                  content.addChild(gridNode);

                // Set the position of the gridNode based on row and col
                const posX = col * (cellWidth + spacingX);
                const posY = -row * (cellHeight + spacingY);
                gridNode.setPosition(posX, posY, 0);

            }
        }


        //i need to loop data.zps to place dynamic positon 
        data.zps.forEach(dl => {
            if (dl.col < numCols) {
                let gridNode = content.children[(dl.row - 1) * numCols + dl.col];
                // const gridNodeWidth = gridNode.getComponent(UITransform).width
                // const gridNodeHeight = gridNode.getComponent(UITransform).height
                // const a =  gridNode.addComponent(Sprite)
                // a.color = new Color(0, 0, 0, 255);
                if (gridNode) {
                    // Load the image dynamically from resources
                    const imagePath = this.getImagePath(dl.row, dl.col, dl.img);
                    resources.load(imagePath, SpriteFrame, (err, spriteFrame) => {
                        if (!err) {
                            let sprite = gridNode.getComponent(Sprite);
                            if (!sprite) {
                                sprite = gridNode.addComponent(Sprite);
                            }
                             //spriteFrame.setOriginalSize(new Size(20,20))
                            
                             sprite.spriteFrame = spriteFrame;
                              const width = sprite.node.getComponent(UITransform).width
                              const height = sprite.node.getComponent(UITransform).height
                              sprite.node.setScale(new Vec3(20 / width,20 /height))
                              
                        } else {
                            console.error("Error loading image:", err);
                        }
                    });
                }
            }
        });





          // Calculate the last column's position
            const lastColumn = data.zps.reduce((maxCol, dl) => Math.max(maxCol, dl.col), -1);
            const lastColumnOffset = lastColumn * (cellWidth + spacingX);

            // Set the scroll position to the last column
            this.scrollView.scrollToOffset(new Vec2(lastColumnOffset, 0), 0.1);

    }
    

    // createGrid(data) {
    //     const content = this.scrollView.content;
        // for (let row = 0; row < this.numRows; row++) {
        //     for (let col = 0; col < this.numCols; col++) {
        //         let gridNode = instantiate(this.gridPrefab);
                
        //         let labelNode = new Node('Label');
        //         // Ensure the UITransform component is available
        //         let uiTransform = labelNode.getComponent(UITransform);
        //         if (!uiTransform) {
        //             uiTransform = labelNode.addComponent(UITransform);
        //         }

        //         // Set the width and height of the UITransform
        //         uiTransform.width = 20;
        //         uiTransform.height = 20;

        //         labelNode.setPosition(new Vec3(0,0,0))
        //         let label = labelNode.addComponent(Label);
        //         label.fontSize = 20
        //         label.color = Color.BLACK
        //         label.string = `${col}`;
                
        //         // Add the Label node directly to the gridNode
        //         gridNode.addChild(labelNode);


        //         content.addChild(gridNode);
        //     }
        // }
    // }
    // createGrid(data) {
    //     console.log(data)
    //     const content = this.scrollView.content;


    // init(){
       
    //     this.itemSpace = 1
    //     this.itemWH = Math.round(650/this.numItem)  //217
    //     console.log(this.itemWH)
    //     this.itemParentWidth = this.itemWH * this.numItem + this.itemSpace * (this.numItem + 1) //651 + 5 * 4
    //     this.itemParentBg.getComponent(UITransform).width = this.itemParentWidth
    //     this.itemParentBg.getComponent(UITransform).height = this.itemParentWidth
    //     this.addItemBg()
    // }
   

    //     // Loop to place images from data.zps
    //     data.zps.forEach(dl => {
    //         if (dl.col < this.numCols && dl.row <= this.numRows) {
    //             let gridNode = content.children[dl.row * this.numCols + dl.col]; // Find the corresponding grid node
    //             if (gridNode) {
    //                 // Load the image dynamically from resources
    //                 const imagePath = this.getImagePath(dl.row, dl.col, dl.img);
    //                 resources.load(imagePath, SpriteFrame, (err, spriteFrame) => {
    //                     if (!err) {
    //                         let sprite = gridNode.getComponent(Sprite);
    //                         if (!sprite) {
    //                             sprite = gridNode.addComponent(Sprite);
    //                         }
    //                         spriteFrame.setOriginalSize(new Size(20,20))
    //                         sprite.spriteFrame = spriteFrame;
    //                         const width = sprite.node.getComponent(UITransform).width
    //                           const height = sprite.node.getComponent(UITransform).height
    //                           sprite.node.setScale(new Vec3(20 / width,20 /height))
    //                         // Set the position of the gridNode based on dl.row and dl.col
    //                         gridNode.setPosition(dl.col * 28,(dl.row - 1) * 28,0)
    //                     } else {
    //                         console.log("Error loading image:", err);
    //                     }
    //                 });
    //             }
    //         }
    //     });

        
    // }



    getImagePath(row, col, img) {
        return `ndl/${img}/spriteFrame`;  // Adjust the path based on your image location
    }


    hide() {
    }

    update(deltaTime: number) {
        
    }
}


// data.zps.forEach(dl => {
        //     if (dl.col < 27) {
        //         // Instantiate the grid node for each entry in data.zps
        //         let gridNode = instantiate(this.gridPrefab2);
        //         content.addChild(gridNode);
    
        //         // Create an image node for each entry in data.zps
        //         let imageNode = new Node();
        //         let uiTransform = imageNode.getComponent(UITransform);
        //         if (!uiTransform) {
        //             uiTransform = imageNode.addComponent(UITransform);
        //         }
        //         uiTransform.width = 20;
        //         uiTransform.height = 20;
                
        //         imageNode.setPosition(new Vec3(0,0,0))
        
        //         let sprite = imageNode.addComponent(Sprite);
    
        //         const imagePath = this.getImagePath(dl.row, dl.col, dl.img);
    
        //         resources.load(imagePath, SpriteFrame, (err, spriteFrame) => {
        //             if (!err) {
        //                 spriteFrame.setOriginalSize(new Size(20,20))
        //                 // spriteFrame.setRect(new cc.Rect(20, 20, 20, 20));
        //                 sprite.spriteFrame = spriteFrame;
        //                 const width = sprite.node.getComponent(UITransform).width
        //                 const height = sprite.node.getComponent(UITransform).height
        //                 sprite.node.setScale(new Vec3(20 / width,20 /height))
        //                 console.log(sprite,"leeeeeeeeeee")
        //                 // Add the image node to the grid node
        //                 gridNode.addChild(imageNode);
        //             } else {
        //                 console.log("Error loading image:", err);
        //             }
        //         });
        //             gridNode.setPosition(dl.col * 28,(dl.row - 1) * 28,0)
        //             gridNode.setSiblingIndex(1)
        //     }
        // });


