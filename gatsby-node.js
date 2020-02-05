const { createRemoteFileNode } = require("gatsby-source-filesystem");
exports.onCreateNode = async ({
    node,
    actions: { createNode },
    store,
    cache,
    createNodeId,
}) => {
    if (
        node.internal.type === "DataJson"
    ) {
        for (let i = 0; i < node.restaurants.length; i++) {
            const restaurant = node.restaurants[i];
            let fileNode;
            try {
                fileNode = await createRemoteFileNode({
                    url: restaurant.image,
                    parentNodeId: node.id,
                    createNode,
                    createNodeId,
                    cache,
                    store,
                })
            } catch (error) {
                console.log(error);
            }
            if (fileNode) {
                restaurant.Img___NODE = fileNode.id
            }
        }
    }
}