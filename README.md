<h1 align="center">
pelement react
</h1>

<div align="center">

[![npm package](https://img.shields.io/npm/v/pelement-react.svg?style=flat-square)](https://www.npmjs.com/package/pelement-react) [![npm downloads](http://img.shields.io/npm/dm/pelement-react.svg)](https://npmcharts.com/compare/pelement-react?minimal=true)

pelement-react - A React UI library

<a href="https://next.ossinsight.io/widgets/official/compose-last-28-days-stats?repo_id=732267352" target="_blank" style="display: block" align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://next.ossinsight.io/widgets/official/compose-last-28-days-stats/thumbnail.png?repo_id=732267352&image_size=auto&color_scheme=dark" width="655" height="auto">
    <img alt="Performance Stats of ant-design/ant-design - Last 28 days" src="https://next.ossinsight.io/widgets/official/compose-last-28-days-stats/thumbnail.png?repo_id=732267352&image_size=auto&color_scheme=light" width="655" height="auto">
  </picture>
</a>

</div>

- 💪 React Composition API
- 🔥 Written in TypeScript

## Installation

```bash
npm install pelement-react
```

## Usage


```typescript
import { Button } from 'pelement-react'
import 'pelement-react/style'

const App = () => {
  return (
    <div>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="info">Info</Button>
      <Button type="warning">Warning</Button>
      <Button type="danger">Danger</Button>
    </div>
  );
};

export default App;
```


## Development

```bash
$ git clone https://github.com/pelement-react/pelement-react.git
$ cd pelement-react
$ npm install
$ npm run dev
```

## License

pelement-react is open source software licensed as [MIT](https://github.com/pelement-react/pelement-react/blob/master/LICENSE).
