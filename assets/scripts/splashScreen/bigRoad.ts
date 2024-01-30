import { _decorator, Color, Component, instantiate, Label, Node, Prefab, resources, ScrollView, Size, Sprite, SpriteFrame, UITransform, Vec2, Vec3 } from 'cc';
import { bjlScript } from './bjlScript';
const { ccclass, property } = _decorator;

@ccclass('bigRoad')
export class bigRoad extends Component {
    @property({
        type: Prefab
    })
    roadPrefab: Prefab = null!; //25 width and 25 height prefab node

    @property({
        type: ScrollView
    })

    scrollView: ScrollView = null!;

    roadData:any = null!;

    start() {
        this.initGrid()
    }

    onNewDataReceived(newData){
        this.createGrid(newData);
    }

    initGrid() {
        const content = this.scrollView.content;
        const cellWidth = 35; // Adjust as needed
        const cellHeight = 35; // Adjust as needed
        const spacingX = 1; // Adjust as needed
        const spacingY = 1; // Adjust as needed
        const numRows = 6;
        const numCols = 20;

        const totalWidth = numCols * (cellWidth + spacingX);
        // Set the content size to allow horizontal scrolling
        content.getComponent(UITransform).setContentSize(new Size(totalWidth,210))

        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                let gridNode = instantiate(this.roadPrefab);
                content.addChild(gridNode);
                const posX = col * (cellWidth + spacingX);
                const posY = -row * (cellHeight + spacingY);
                gridNode.setPosition(posX, posY, 0);
            }
        }
    }

    createGrid(data) {
        console.log(data,"createGridddddddddddddddddddd")
        //this.clearGrid()
        const content = this.scrollView.content;
        const numCols = 20;
        const cellWidth = 20; // Adjust as needed
        const spacingX = 1; // Adjust as needed
        //i need to loop data.zps to place dynamic positon 
        data.forEach(dl => {
            if (dl.col < numCols) {
                let gridNode = content.children[(dl.row - 1) * numCols + dl.col - 1];
                // if (gridNode) {
                //     // Load the image dynamically from resources
                //     const imagePath = this.getImagePath(dl.row, dl.col, dl.img);
                //     resources.load(imagePath, SpriteFrame, (err, spriteFrame) => {
                //         if (!err) {
                //             let sprite = gridNode.getComponent(Sprite);
                //             if (!sprite) {
                //                 sprite = gridNode.addComponent(Sprite);
                //             }
                //              //spriteFrame.setOriginalSize(new Size(20,20))
                            
                //              sprite.spriteFrame = spriteFrame;
                //               const width = sprite.node.getComponent(UITransform).width
                //               const height = sprite.node.getComponent(UITransform).height
                //               sprite.node.setScale(new Vec3(33 / width,33 /height))
                              
                //         } else {
                //             console.error("Error loading image:", err);
                //         }
                //     });
                // }

                if (gridNode) {
                    // Check if dl.img is present in data
                    if (dl.img) {
                        // Load the image dynamically from resources
                        const imagePath = this.getImagePath(dl.row, dl.col, dl.img);
                        resources.load(imagePath, SpriteFrame, (err, spriteFrame) => {
                            if (!err) {
                                let sprite = gridNode.getComponent(Sprite);
                                if (!sprite) {
                                    sprite = gridNode.addComponent(Sprite);
                                }
                                sprite.spriteFrame = spriteFrame;
                                const width = sprite.node.getComponent(UITransform).width;
                                const height = sprite.node.getComponent(UITransform).height;
                                sprite.node.setScale(new Vec3(32 / width, 32 / height));
                            } else {
                                console.error("Error loading image:", err);
                            }
                        });
                    } else {
                        this.clearGrid()
                        this.initGrid()
                    }
                }
            }
        });





        //   // Calculate the last column's position
            const lastColumn = data.reduce((maxCol, dl) => Math.max(maxCol, dl.col), -1);
            const lastColumnOffset = lastColumn * (cellWidth + spacingX);

            // Set the scroll position to the last column
            this.scrollView.scrollToOffset(new Vec2(lastColumnOffset, 0), 0.1);

    }

    clearGrid() {
        const content = this.scrollView.content;
        content.removeAllChildren();
    }

    getImagePath(row, col, img) {
        return `ndl/${img}/spriteFrame`;  // Adjust the path based on your image location
    }


    update(deltaTime: number) {
       
    }
}


