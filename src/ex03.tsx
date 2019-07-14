import { h, toHtml } from 'vnode-parser';
import { Doc } from './doc';

export default () => {
  const title = 'Hello TypeScrpt and JSX!';
  const lead = <p>I like TypeScrpt and JSX.</p>;
  const doc: JSX.Element = (
    <Doc title={ title } date={ new Date() } author="<^o^>/" lead={ lead }>
      <p>
        The document is <a href="https://www.typescriptlang.org/docs/handbook/jsx.html">here</a>.
      </p>
    </Doc>
  );
  const html = toHtml(doc);
  console.log(html);
};
