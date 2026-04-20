class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function serialize(root) {
    if (!root) return 'X,';
    return root.val + ',' + serialize(root.left) + serialize(root.right);
}

function deserialize(data) {
    const nodes = data.split(',');
    let index = 0;
    function dfs() {
        const val = nodes[index++];
        if (val === 'X') return null;
        const node = new TreeNode(parseInt(val));
        node.left = dfs();
        node.right = dfs();
        return node;
    }
    return dfs();
}
```

Kodda `TreeNode` klassi BST uchun nodlarni ifodalaydi. `serialize` funksiyasi BSTni string ga aylantiradi, `deserialize` funksiyasi esa string ni BST ga aylantiradi.
