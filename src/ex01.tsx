import { h, toHtml } from 'vnode-parser';

export default () => {
  const msg = 'Hello JSX! <^_^>/';
  const vnode = <div>{ msg }</div>;
  const html = toHtml(vnode);
  console.log(html);
}
