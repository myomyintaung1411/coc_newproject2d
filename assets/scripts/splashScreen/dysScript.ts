import { _decorator, Component, instantiate, Prefab, resources, ScrollView, Size, Sprite, SpriteFrame, UITransform, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('dysScript')
export class dysScript extends Component {
    @property({
        type: Prefab
    })
    roadPrefab: Prefab = null!; //25 width and 25 height prefab node

    @property({
        type: ScrollView
    })

    scrollView: ScrollView = null!;

    roadData:any = null!;
    numRowsDisplay: number = 6; // Number of rows to display visually

    start() {
        this.initGrid()
    }

    onNewDataReceived(newData){
        this.createGrid(newData);
    }

    initGrid() {
        const content = this.scrollView.content;
        const cellWidth = 11; // Adjust as needed
        const cellHeight = 11; // Adjust as needed
        const spacingX = 1; // Adjust as needed
        const spacingY = 1; // Adjust as needed
        const numRows = 6;
        const numCols = 50;

        const totalWidth = numCols * (cellWidth + spacingX);
        // Set the content size to allow horizontal scrolling
       // content.getComponent(UITransform).setContentSize(new Size(totalWidth,70))
             // Set the content size to allow horizontal scrolling
      content.getComponent(UITransform).setContentSize(new Size(totalWidth, this.numRowsDisplay * (cellHeight + spacingY)));

        for (let row = 0; row < this.numRowsDisplay; row++) {
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
        console.log(data,"dysdata **************************")
        //this.clearGrid()
        const content = this.scrollView.content;
        const numCols = 50;
        const cellWidth = 10; // Adjust as needed
        const spacingX = 1; // Adjust as needed   
    //i need to loop data.zps to place dynamic positon 
        if(data.length > 0){
        data.forEach((dl) => {
            if (dl.col < 50) {
                // Loop for both dl.row and dl.row - 1
                for (let offsetRow = 0; offsetRow <= 1; offsetRow++) {
                    let displayedRow = dl.row - offsetRow;
                    let gridNode = content.children[displayedRow * numCols + dl.col];
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
                                    sprite.node.setScale(new Vec3(10 / width, 10 / height));
                                } else {
                                    console.error("Error loading image:", err);
                                }
                            });
                        }
                    }
                }
            }
        });
        } else {
            this.clearGrid()
            this.initGrid() 
        }






        //   // Calculate the last column's position
            const lastColumn = data.reduce((maxCol, dl) => Math.max(maxCol, dl.col), -1);
            const lastColumnOffset = lastColumn * (cellWidth + spacingX);

        //     // Set the scroll position to the last column
           this.scrollView.scrollToOffset(new Vec2(lastColumnOffset, 0), 0.1);

    }

    clearGrid() {
        const content = this.scrollView.content;
        content.removeAllChildren();
    }

    getImagePath(row, col, img) {
        return `ndl/r_b${img}/spriteFrame`;  // Adjust the path based on your image location
    }


    update(deltaTime: number) {
       
    }
}


