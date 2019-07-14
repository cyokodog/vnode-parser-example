import { h } from 'vnode-parser';

const FormatDate = (props: { date: Date }) => {
  const { date } = props;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    <time datetime={ `${ year }-${ month }-${ day }`}>
      { year }年{ month }月{ day }日
    </time>
  );
};

const Lead = (_: any, children: any[]): JSX.Element => {
  return <div class="lead">{ children }</div>;
};

const Body = (_: any, children: any[]): JSX.Element => {
  return <div class="body">{ children }</div>;
};

export const Doc = (
  props: { title: string; date: Date; author: string; lead: JSX.Element },
  children: any[],
): JSX.Element => {
  const { title, date, author, lead } = props;
  return (
    <article>
      <h1>{ title }</h1>
      <ul>
        <li>
          <FormatDate date={ date } />
        </li>
        <li>{ author }</li>
      </ul>
      <Lead>{ lead }</Lead>
      <Body>{ children }</Body>
    </article>
  );
};
