import { _decorator, Component, instantiate, Label, Prefab,ScrollView,Node, UITransform, Vec3, Color, Sprite, resources, SpriteFrame, Size, Vec2, Graphics, director } from 'cc';
import { bjlScript } from './bjlScript';
import { Global } from '../common/Globals';
const { ccclass, property } = _decorator;


@ccclass('singelRoom_Lh')
export class singelRoom_Lh extends Component {

    @property({
        type: Prefab
    })
    gridPrefab: Prefab = null!; //25 width and 25 height prefab node

    @property({
        type: ScrollView
    })
    scrollView: ScrollView = null!;

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
    
    getImagePath(row, col, img) {
        return `ndl/${img}/spriteFrame`;  // Adjust the path based on your image location
    }

    hide() {
    }

    update(deltaTime: number) {
        
    }
}



