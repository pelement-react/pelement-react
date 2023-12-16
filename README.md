<h1 align="center">
pelement react
</h1>

<div align="center">

[![npm package](https://img.shields.io/npm/v/pelement-react.svg?style=flat-square)](https://www.npmjs.com/package/pelement-react) [![npm downloads](http://img.shields.io/npm/dm/pelement-react.svg)](https://npmcharts.com/compare/pelement-react?minimal=true)

An enterprise-class UI components based on Element Plus and React.

</div>

## Installation

```bash
npm install pelement-react
```

## Usage


```typescript
import { Button } from "pelement-react";
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
