class $Node {
    id: string | null;
    data: Array<any>;
    next: any | null;
    previous: any | null;

    constructor(data: Array<any>) {
        this.id = null;
        this.data = data;
        this.next = null;
        this.previous = null;
    }

    setNextNode(node: $Node | null) {
        if(node instanceof $Node || node === null) {
            this.next = node;
        } else {
            throw new Error('You have to set a Node instance.');
        }
    }
    getNextNode() {
        return this.next;
    }
    setPreviousNode(node: $Node | null) {
        if(node instanceof $Node || node === null) {
            this.previous = node;
        } else {
            throw new Error('You have to set a Node instance.');
        }
    }
    getPreviousNode() {
        return this.previous;
    }
}

class $PostsChain extends $Node {
    count: number;
    head: $Node | null;
    readonly maxSize: number;

    constructor(count: number = 0) {
        super();
        this.count = count;
        this.head = null;
        this.maxSize = 3;
    }

    hasRoom = () => {
        if (this.count < this.maxSize) {
            return true;
        } else {
            return false;
        }
    }

    addToHead = (data: any) => {
        let currentHead = this.head;
        const newHead = new $Node(data);

        if(!currentHead) {
            currentHead = newHead;
            this.head = currentHead;
            currentHead.setNextNode(null);
            currentHead.setPreviousNode(null);
            return;
        }

        currentHead.setPreviousNode(newHead);
        newHead.setNextNode(currentHead);
        newHead.setPreviousNode(null);
        this.head = newHead;
        return newHead;
    }

}

export { $PostsChain }