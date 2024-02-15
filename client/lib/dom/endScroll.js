export function endScroll(node) {
    if (typeof node === 'string') node = getNode(node);

    return (node.scrollTop = node.scrollHeight);
}
