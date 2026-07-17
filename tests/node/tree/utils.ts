import type { Node } from '@mapl/pattern-router/tree/node';

const printConnectNodeMap = (_: string, mp: Node<any>[3] & {}, tab: string) => {
  for (let i = 0, keys = mp[0], values = mp[1], newTab = tab + '  '; i < keys.length; i++) {
    const connectNode = values[i];

    if (connectNode[0] === null) console.log(tab + _ + ' ' + keys[i]);
    else console.log(tab + _ + ' ' + keys[i] + ':', connectNode[0]);

    if (connectNode[1] !== null) printNode(connectNode[1], newTab);
  }
};

export const printNode = (node: Node<any>, tab = '') => {
  if (node[1] === null) console.log(tab + '- ' + node[0]);
  else console.log(tab + '- ' + node[0] + ':', node[1]);

  tab += '  ';

  if (node[2] !== null) {
    for (const childNode of node[2][1]) printNode(childNode, tab);
  }

  if (node[3] !== null) printConnectNodeMap('+', node[3], tab);
  if (node[4] !== null) printConnectNodeMap('~', node[4], tab);
  if (node[5] !== null) printConnectNodeMap('=', node[5], tab);
  if (node[6] !== null) {
    const connectNode = node[6];

    if (connectNode[0] === null) console.log(tab + '*');
    else console.log(tab + '*:', connectNode[0]);

    if (connectNode[1] !== null) printNode(connectNode[1], tab + '  ');
  }
};
