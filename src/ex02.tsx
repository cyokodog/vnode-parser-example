import { getJsxFactory, toHtml } from 'vnode-parser';

export default () => {
  const h = getJsxFactory({encode: false});
  const msg = '<h1>Hello JSX!</h1>';
  const vnode = <div>{ msg }</div>;
  const html = toHtml(vnode);
  console.log(html);
}
