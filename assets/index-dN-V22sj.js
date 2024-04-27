import{g as Kr,r as u,j as r,a as ze,R as Zt,b as Xr,c as Bt}from"./index-YfsbNJ80.js";const Yr=`import { Alert } from 'pelement-react'\r
import './AlertBasic.scss'\r
\r
function AlertBasic() {\r
  return (\r
    <>\r
      <Alert title="success alert" type="success" />\r
      <Alert title="info alert" type="info" />\r
      <Alert title="warning alert" type="warning" />\r
      <Alert title="error alert" type="error" />\r
    </>\r
  )\r
}\r
\r
export default AlertBasic`,Zr=`import { Alert } from 'pelement-react'\r
\r
function AlertCenter() {\r
  return (\r
    <>\r
      <Alert title="success alert" type="success" center showIcon />\r
      <Alert title="info alert" type="info" center showIcon />\r
      <Alert title="warning alert" type="warning" center showIcon />\r
      <Alert title="error alert" type="error" center showIcon />\r
    </>\r
  )\r
}\r
\r
export default AlertCenter`,qr=`import { Alert } from 'pelement-react'\r
\r
function AlertClose() {\r
  function hello() {\r
    alert('Hello World!')\r
  }\r
\r
  return (\r
    <>\r
      <Alert title="unclosable alert" type="success" closable={false} />\r
      <Alert title="customized close-text" type="info" closeText="Gotcha" />\r
      <Alert title="alert with callback" type="warning" close={hello} />\r
    </>\r
  )\r
}\r
\r
export default AlertClose`,Jr=`import { Alert } from 'pelement-react'\r
\r
function AlertDescription() {\r
  return (\r
    <>\r
      <Alert\r
        title="with description"\r
        type="success"\r
        description="This is a description."\r
      />\r
    </>\r
  )\r
}\r
\r
export default AlertDescription`,Qr=`import { Alert } from 'pelement-react'\r
\r
function AlertEffect() {\r
  return (\r
    <>\r
      <Alert title="success alert" type="success" effect="dark" />\r
      <Alert title="info alert" type="info" effect="dark" />\r
      <Alert title="warning alert" type="warning" effect="dark" />\r
      <Alert title="error alert" type="error" effect="dark" />\r
    </>\r
  )\r
}\r
\r
export default AlertEffect`,en=`import { Alert } from 'pelement-react'\r
\r
function AlertIconDescription() {\r
  return (\r
    <>\r
      <Alert\r
        title="success alert"\r
        type="success"\r
        description="more text description"\r
        showIcon\r
      />\r
      <Alert\r
        title="info alert"\r
        type="info"\r
        description="more text description"\r
        showIcon\r
      />\r
      <Alert\r
        title="warning alert"\r
        type="warning"\r
        description="more text description"\r
        showIcon\r
      />\r
      <Alert\r
        title="error alert"\r
        type="error"\r
        description="more text description"\r
        showIcon\r
      />\r
    </>\r
  )\r
}\r
\r
export default AlertIconDescription`,tn=`import { Alert } from 'pelement-react'\r
\r
function AlertIcon() {\r
  return (\r
    <>\r
      <Alert title="success alert" type="success" showIcon />\r
      <Alert title="info alert" type="info" showIcon />\r
      <Alert title="warning alert" type="warning" showIcon />\r
      <Alert title="error alert" type="error" showIcon />\r
    </>\r
  )\r
}\r
\r
export default AlertIcon`,rn=`import { Avatar, Col, Row } from 'pelement-react'\r
import './AvatarBasic.scss'\r
\r
function AvatarBasic() {\r
  const circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'\r
  const squareUrl = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'\r
  const sizeList = ['small', '', 'large']\r
\r
  const sizeAvatars = sizeList.map((item: any, index: number) => {\r
    return (\r
      <div className="block" key={index}>\r
        <Avatar size={item} src={circleUrl} />\r
      </div>\r
    )\r
  })\r
\r
  const squareAvatars = sizeList.map((item: any, index: number) => {\r
    return (\r
      <div className="block" key={index}>\r
        <Avatar shape="square" size={item} src={squareUrl} />\r
      </div>\r
    )\r
  })\r
\r
  return (\r
    <>\r
      <Row className="common-avatar">\r
        <Col span={12}>\r
          <div className="sub-title">circle</div>\r
          <div className="demo-basic--circle">\r
            <div className="block">\r
              <Avatar size={50} src={circleUrl} />\r
            </div>\r
            {sizeAvatars}\r
          </div>\r
        </Col>\r
        <Col span={12}>\r
          <div className="sub-title">square</div>\r
          <div className="demo-basic--circle">\r
            <div className="block">\r
              <Avatar shape="square" size={50} src={squareUrl} />\r
            </div>\r
            {squareAvatars}\r
          </div>\r
        </Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default AvatarBasic`,nn=`import { Avatar } from 'pelement-react'\r
\r
function AvatarError() {\r
\r
  function errorHandler() {\r
    console.log('error')\r
  }\r
\r
  return (\r
    <>\r
      <div className="demo-type">\r
        <Avatar size={60} src="https://empty" onError={errorHandler}>\r
          <img\r
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"\r
          />\r
        </Avatar>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default AvatarError`,sn=`import { Avatar } from "pelement-react"\r
\r
function AvatarFit() {\r
  const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']\r
  const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'\r
\r
  const fitAvatars = fits.map((item: any, index: number) => {\r
    return (\r
      <div className="block" key={index}>\r
        <span className="title">{item}</span>\r
        <Avatar shape="square" size={100} fit={item} src={url} />\r
      </div>\r
    )\r
  })\r
\r
  return (\r
    <>\r
      <div className="avatar-fit">\r
        {fitAvatars}\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default AvatarFit`,on=`import { Avatar, UserFilled } from 'pelement-react'\r
\r
function AvatarType() {\r
  return (\r
    <>\r
      <div className="common-avatar">\r
        <div>\r
          <Avatar icon={<UserFilled />} />\r
        </div>\r
        <div>\r
          <Avatar\r
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"\r
          />\r
        </div>\r
        <div>\r
          <Avatar> user </Avatar>\r
        </div>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default AvatarType`,an=`import { Badge, Button } from 'pelement-react'\r
import './BadgeBasic.scss'\r
\r
function BadgeBasic() {\r
  return (\r
    <>\r
      <div className="common-badge">\r
        <Badge value={12} className="item">\r
          <Button>comments</Button>\r
        </Badge>\r
        <Badge value={3} className="item">\r
          <Button>replies</Button>\r
        </Badge>\r
        <Badge value={1} className="item" type="primary">\r
          <Button>comments</Button>\r
        </Badge>\r
        <Badge value={2} className="item" type="warning">\r
          <Button>replies</Button>\r
        </Badge>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default BadgeBasic`,ln=`import { Badge, Button, Share } from 'pelement-react'\r
\r
function BadgeIsDot() {\r
  return (\r
    <>\r
      <div className="common-badge">\r
        <Badge isDot className="item">query</Badge>\r
        <Badge isDot className="item">\r
          <Button className="share-button" icon={<Share />} type="primary" />\r
        </Badge>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default BadgeIsDot`,cn=`import { Badge, Button } from 'pelement-react'\r
\r
function BadgeMax() {\r
  return (\r
    <>\r
      <div className="common-badge">\r
        <Badge value={200} max={99} className="item">\r
          <Button>comments</Button>\r
        </Badge>\r
        <Badge value={100} max={10} className="item">\r
          <Button>replies</Button>\r
        </Badge>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default BadgeMax`,un=`import { Badge, Button } from 'pelement-react'\r
\r
function BadgeValue() {\r
  return (\r
    <>\r
      <div className="common-badge">\r
        <Badge value="new" className="item">\r
          <Button>comments</Button>\r
        </Badge>\r
        <Badge value="hot" className="item">\r
          <Button>replies</Button>\r
        </Badge>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default BadgeValue`,dn=`import { Button, Check, Delete, Edit, Message, Search, Star } from 'pelement-react'\r
\r
function ButtonBasic() {\r
  return (\r
    <>\r
      <div className="mb-4">\r
        <Button>Default</Button>\r
        <Button type="primary">Primary</Button>\r
        <Button type="success">Success</Button>\r
        <Button type="info">Info</Button>\r
        <Button type="warning">Warning</Button>\r
        <Button type="danger">Danger</Button>\r
      </div>\r
      <div className="mb-4">\r
        <Button plain>Plain</Button>\r
        <Button type="primary" plain>Primary</Button>\r
        <Button type="success" plain>Success</Button>\r
        <Button type="info" plain>Info</Button>\r
        <Button type="warning" plain>Warning</Button>\r
        <Button type="danger" plain>Danger</Button>\r
      </div>\r
      <div className="mb-4">\r
        <Button round>Round</Button>\r
        <Button type="primary" round>Primary</Button>\r
        <Button type="success" round>Success</Button>\r
        <Button type="info" round>Info</Button>\r
        <Button type="warning" round>Warning</Button>\r
        <Button type="danger" round>Danger</Button>\r
      </div>\r
      <div>\r
        <Button icon={<Search />} circle></Button>\r
        <Button type="primary" icon={<Edit />} circle></Button>\r
        <Button type="success" icon={<Check />} circle></Button>\r
        <Button type="info" icon={<Message />} circle></Button>\r
        <Button type="warning" icon={<Star />} circle></Button>\r
        <Button type="danger" icon={<Delete />} circle></Button>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ButtonBasic`,pn=`import { Button } from 'pelement-react'\r
\r
function ButtonDisabled() {\r
  return (\r
    <>\r
      <div className="mb-4">\r
        <Button disabled>Default</Button>\r
        <Button type="primary" disabled>Primary</Button>\r
        <Button type="success" disabled>Success</Button>\r
        <Button type="info" disabled>Info</Button>\r
        <Button type="warning" disabled>Warning</Button>\r
        <Button type="danger" disabled>Danger</Button>\r
      </div>\r
      <div>\r
        <Button plain disabled>Plain</Button>\r
        <Button type="primary" plain disabled>Primary</Button>\r
        <Button type="success" plain disabled>Success</Button>\r
        <Button type="info" plain disabled>Info</Button>\r
        <Button type="warning" plain disabled>Warning</Button>\r
        <Button type="danger" plain disabled>Danger</Button>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ButtonDisabled`,fn=`import { Button } from 'pelement-react'\r
\r
function ButtonLink() {\r
  return (\r
    <>\r
      <p>Basic link button</p>\r
      <Button link>Default</Button>\r
      <Button type="primary" link>Primary</Button>\r
      <Button type="success" link>Success</Button>\r
      <Button type="info" link>Info</Button>\r
      <Button type="warning" link>Warning</Button>\r
      <Button type="danger" link>Danger</Button>\r
      <p>Disabled link button</p>\r
      <Button link disabled>Default</Button>\r
      <Button type="primary" link disabled>Primary</Button>\r
      <Button type="success" link disabled>Success</Button>\r
      <Button type="info" link disabled>Info</Button>\r
      <Button type="warning" link disabled>Warning</Button>\r
      <Button type="danger" link disabled>Danger</Button>\r
    </>\r
  )\r
}\r
\r
export default ButtonLink`,mn=`import { Button } from 'pelement-react'\r
\r
function ButtonText() {\r
  const buttons = [\r
    { type: '', text: 'plain' },\r
    { type: 'primary', text: 'primary' },\r
    { type: 'success', text: 'success' },\r
    { type: 'info', text: 'info' },\r
    { type: 'warning', text: 'warning' },\r
    { type: 'danger', text: 'danger' },\r
  ]\r
\r
  const textList = buttons.map((button, index) =>\r
    <Button\r
      key={index}\r
      type={button.type as any}\r
      text\r
    >\r
      {button.text}\r
    </Button>\r
  )\r
\r
  const bgList = buttons.map((button, index) =>\r
    <Button\r
      key={index}\r
      type={button.type as any}\r
      text\r
      bg\r
    >\r
      {button.text}\r
    </Button>\r
  )\r
\r
  const disabledList = buttons.map((button, index) =>\r
    <Button\r
      key={index}\r
      type={button.type as any}\r
      text\r
      disabled\r
    >\r
      {button.text}\r
    </Button>\r
  )\r
\r
  return (\r
    <>\r
      <p>Basic text button</p>\r
      <div className="flex justify-space-between mb-4 flex-wrap gap-4">\r
        {textList}\r
      </div>\r
\r
      <p>Background color always on</p>\r
      <div className="flex justify-space-between mb-4 flex-wrap gap-4">\r
        {bgList}\r
      </div>\r
\r
      <p>Disabled text button</p>\r
      <div className="flex justify-space-between flex-wrap gap-4">\r
        {disabledList}\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ButtonText`,gn=`import { Collapse, CollapseItem } from 'pelement-react'\r
\r
function CollapseBasic() {\r
  return (\r
    <>\r
      <Collapse>\r
        <CollapseItem title="Consistency" name="1">\r
          <div>\r
            Consistent with real life: in line with the process and logic of real\r
            life, and comply with languages and habits that the users are used to;\r
          </div>\r
          <div>\r
            Consistent within interface: all elements should be consistent, such\r
            as: design style, icons and texts, position of elements, etc.\r
          </div>\r
        </CollapseItem>\r
        <CollapseItem title="Feedback" name="2">\r
          <div>\r
            Operation feedback: enable the users to clearly perceive their\r
            operations by style updates and interactive effects;\r
          </div>\r
          <div>\r
            Visual feedback: reflect current state by updating or rearranging\r
            elements of the page.\r
          </div>\r
        </CollapseItem>\r
        <CollapseItem title="Efficiency" name="3">\r
          <div>\r
            Simplify the process: keep operating process simple and intuitive;\r
          </div>\r
          <div>\r
            Definite and clear: enunciate your intentions clearly so that the\r
            users can quickly understand and make decisions;\r
          </div>\r
          <div>\r
            Easy to identify: the interface should be straightforward, which helps\r
            the users to identify and frees them from memorizing and recalling.\r
          </div>\r
        </CollapseItem>\r
        <CollapseItem title="Controllability" name="4">\r
          <div>\r
            Decision making: giving advices about operations is acceptable, but do\r
            not make decisions for the users;\r
          </div>\r
          <div>\r
            Controlled consequences: users should be granted the freedom to\r
            operate, including canceling, aborting or terminating current\r
            operation.\r
          </div>\r
        </CollapseItem>\r
      </Collapse>\r
    </>\r
  )\r
}\r
\r
export default CollapseBasic`,hn=`import { Container, Header, Main } from 'pelement-react'\r
import './ContainerBasic.scss'\r
\r
function ContainerBasic() {\r
\r
  return (\r
    <>\r
      <div className="common-layout">\r
        <Container>\r
          <Header>Header</Header>\r
          <Main>Main</Main>\r
        </Container>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ContainerBasic`,xn=`import { Container, Footer, Header, Main } from 'pelement-react'\r
\r
function ContainerBasic1() {\r
  return (\r
    <>\r
      <div className="common-layout">\r
        <Container>\r
          <Header>Header</Header>\r
          <Main>Main</Main>\r
          <Footer>Footer</Footer>\r
        </Container>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ContainerBasic1`,bn=`import { Aside, Container, Main } from 'pelement-react'\r
\r
function ContainerBasic2() {\r
  return (\r
    <>\r
      <div className="common-layout">\r
        <Container>\r
          <Aside width="200px">Aside</Aside>\r
          <Main>Main</Main>\r
        </Container>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ContainerBasic2`,vn=`import { Aside, Container, Header, Main } from 'pelement-react'\r
\r
function ContainerBasic3() {\r
  return (\r
    <>\r
      <div className="common-layout">\r
        <Container>\r
          <Header>Header</Header>\r
          <Container>\r
            <Aside width="200px">Aside</Aside>\r
            <Main>Main</Main>\r
          </Container>\r
        </Container>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ContainerBasic3`,_n=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'\r
\r
function ContainerBasic4() {\r
  return (\r
    <>\r
      <div className="common-layout">\r
        <Container>\r
          <Header>Header</Header>\r
          <Container>\r
            <Aside width="200px">Aside</Aside>\r
            <Container>\r
              <Main>Main</Main>\r
              <Footer>Footer</Footer>\r
            </Container>\r
          </Container>\r
        </Container>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ContainerBasic4`,wn=`import { Aside, Container, Header, Main } from 'pelement-react'\r
\r
function ContainerBasic5() {\r
  return (\r
    <>\r
      <div className="common-layout">\r
        <Container>\r
          <Aside width="200px">Aside</Aside>\r
          <Container>\r
            <Header>Header</Header>\r
            <Main>Main</Main>\r
          </Container>\r
        </Container>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ContainerBasic5`,yn=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'\r
\r
function ContainerBasic6() {\r
  return (\r
    <>\r
      <div className="common-layout">\r
        <Container>\r
          <Aside width="200px">Aside</Aside>\r
          <Container>\r
            <Header>Header</Header>\r
            <Main>Main</Main>\r
            <Footer>Footer</Footer>\r
          </Container>\r
        </Container>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ContainerBasic6`,Cn=`import { Button, Dialog } from 'pelement-react'\r
import { useState } from 'react'\r
import './DialogBasic.scss'\r
\r
function DialogBasic() {\r
  const [dialogVisible, setDialogVisible] = useState(false)\r
\r
  function handlerClick() {\r
    setDialogVisible(true)\r
  }\r
\r
  function handleClose() {\r
    setDialogVisible(false)\r
  }\r
\r
  function handleOk() {\r
    setDialogVisible(false)\r
  }\r
\r
  function handleCancel() {\r
    setDialogVisible(false)\r
  }\r
\r
  // footer\r
  function Footer() {\r
    return (\r
      <>\r
        <span className="dialog-footer">\r
          <button aria-disabled="false" type="button" className="el-button" onClick={handleOk}>\r
            <span className="">Cancel</span>\r
          </button>\r
          <button aria-disabled="false" type="button" className="el-button el-button--primary" onClick={handleCancel}>\r
            <span className=""> Confirm </span>\r
          </button>\r
        </span>\r
      </>\r
    )\r
  }\r
\r
  return (\r
    <>\r
      <Button text onClick={handlerClick}>\r
        click to open the Dialog\r
      </Button>\r
\r
      <Dialog\r
        open={dialogVisible}\r
        title="Tips"\r
        width="30%"\r
        onClose={handleClose}\r
        footer={<Footer />}\r
      >\r
        <span>This is a message</span>\r
      </Dialog>\r
    </>\r
  )\r
}\r
\r
export default DialogBasic`,Nn=`import { useState } from 'react'\r
import { Button, Dialog } from 'pelement-react'\r
\r
function DialogContent() {\r
  const [dialogTableVisible, setDialogTableVisible] = useState(false)\r
  const [dialogFormVisible, setDialogFormVisible] = useState(false)\r
\r
  function handlerTable() {\r
    setDialogTableVisible(true)\r
  }\r
\r
  function handlerForm() {\r
    setDialogFormVisible(true)\r
  }\r
\r
  function FormFooter() {\r
    return (\r
      <>\r
        <span className="dialog-footer">\r
          <Button onClick={() => { setDialogFormVisible(false) }}>Cancel</Button>\r
          <Button type="primary" onClick={() => { setDialogFormVisible(false) }}>\r
            Confirm\r
          </Button>\r
        </span>\r
      </>\r
    )\r
  }\r
\r
  return (\r
    <>\r
      <Button text onClick={handlerTable}>\r
        open a Table nested Dialog\r
      </Button>\r
\r
      <Dialog\r
        open={dialogTableVisible}\r
        title="Shipping address"\r
        onClose={() => { setDialogTableVisible(false) }}\r
      >\r
        Table组件\r
      </Dialog>\r
\r
      <Button text onClick={handlerForm}>\r
        open a Form nested Dialog\r
      </Button>\r
\r
      <Dialog\r
        open={dialogFormVisible}\r
        title="Shipping address"\r
        footer={<FormFooter />}\r
        onClose={() => { setDialogFormVisible(false) }}\r
      >\r
        Form 表单\r
      </Dialog>\r
    </>\r
  )\r
}\r
\r
export default DialogContent`,Bn=`import { useState } from 'react'\r
import { Button, CircleCloseFilled, Dialog } from 'pelement-react'\r
\r
function DialogHeader() {\r
  const [visible, setVisible] = useState(false)\r
\r
  function onClose() {\r
    setVisible(false)\r
  }\r
\r
  function Header() {\r
    return (\r
      <>\r
        <div className="dialog-header">\r
          <h4 className="el-dialog__title">This is a custom header!</h4>\r
          <Button type="danger" onClick={onClose}>\r
            <CircleCloseFilled />\r
            Close\r
          </Button>\r
        </div>\r
      </>\r
    )\r
  }\r
\r
  return (\r
    <>\r
      <Button onClick={() => setVisible(true)}>\r
        Open Dialog with customized header\r
      </Button>\r
      <Dialog open={visible} showClose={false} header={<Header />} onClose={onClose}>\r
        This is dialog content.\r
      </Dialog>\r
    </>\r
  )\r
}\r
\r
export default DialogHeader`,Tn=`import { Divider } from 'pelement-react'\r
\r
function DividerBasic() {\r
  return (\r
    <>\r
      <div>\r
        <span>\r
          I sit at my window this morning where the world like a passer-by stops\r
          for a moment, nods to me and goes.\r
        </span>\r
        <Divider />\r
        <span>\r
          There little thoughts are the rustle of leaves; they have their whisper\r
          of joy in my mind.\r
        </span>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default DividerBasic`,kn=`import { Divider } from 'pelement-react'\r
\r
function DividerBorder() {\r
  return (\r
    <>\r
      <div>\r
        <span>What language is thine, O sea?</span>\r
        <Divider borderStyle="dashed" />\r
        <span>The language of eternal question.</span>\r
      </div>\r
      <Divider borderStyle="dotted" />\r
      <span>What language is thy answer, O sky?</span>\r
      <Divider borderStyle="double" />\r
      <span>The language of eternal silence.</span>\r
    </>\r
  )\r
}\r
\r
export default DividerBorder`,Sn=`import { Divider, StarFilled } from 'pelement-react'\r
\r
function DividerContent() {\r
  return (\r
    <>\r
      <div>\r
        <span>What you are you do not see, what you see is your shadow. </span>\r
        <Divider contentPosition="left">Rabindranath Tagore</Divider>\r
        <span>\r
          My wishes are fools, they shout across thy song, my Master. Let me but\r
          listen.\r
        </span>\r
        <Divider>\r
          <StarFilled />\r
        </Divider>\r
        <span>I cannot choose the best. The best chooses me.</span>\r
        <Divider contentPosition="right">Rabindranath Tagore</Divider>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default DividerContent`,En=`import { Divider } from 'pelement-react'\r
\r
function DividerDirection() {\r
  return (\r
    <>\r
      <div>\r
        <span>Rain</span>\r
        <Divider direction="vertical" />\r
        <span>Home</span>\r
        <Divider direction="vertical" border-style="dashed" />\r
        <span>Grass</span>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default DividerDirection`,Rn=`import { useState } from 'react'\r
import { Button, Drawer } from 'pelement-react'\r
\r
function DrawerBasic() {\r
  const [direction, setDirection] = useState('')\r
  const [drawer, setDrawer] = useState(false)\r
  const [drawer2, setDrawer2] = useState(false)\r
\r
  function handlerLeftToRight() {\r
    setDirection('ltr')\r
    setDrawer(true)\r
  }\r
\r
  function handlerRightToLeft() {\r
    setDirection('rtl')\r
    setDrawer(true)\r
  }\r
\r
  function handlerTopToBottom() {\r
    setDirection('ttb')\r
    setDrawer(true)\r
  }\r
\r
  function handlerBottomToTop() {\r
    setDirection('btt')\r
    setDrawer(true)\r
  }\r
\r
  function handlerLeftToRightFooter() {\r
    setDirection('ltr')\r
    setDrawer2(true)\r
  }\r
\r
  function handlerRightToLeftFooter() {\r
    setDirection('rtl')\r
    setDrawer2(true)\r
  }\r
\r
  function handlerTopToBottomFooter() {\r
    setDirection('ttb')\r
    setDrawer2(true)\r
  }\r
\r
  function handlerBottomToTopFooter() {\r
    setDirection('btt')\r
    setDrawer2(true)\r
  }\r
\r
  function handlerClose() {\r
    setDrawer(false)\r
  }\r
\r
  function handlerClose2() {\r
    setDrawer2(false)\r
  }\r
\r
  function cancelClick() {\r
    setDrawer2(false)\r
  }\r
\r
  function confirmClick() {\r
    setDrawer2(false)\r
  }\r
\r
  return (\r
    <>\r
      <div>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerLeftToRight}>\r
          open left to right\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerRightToLeft}>\r
          open right to left\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerTopToBottom}>\r
          open top to bottom\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerBottomToTop}>\r
          open bottom to top\r
        </Button>\r
      </div>\r
      <div style={{ marginTop: '20px' }}>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerLeftToRightFooter}>\r
          open left to right footer\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerRightToLeftFooter}>\r
          open right to left footer\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerTopToBottomFooter}>\r
          open top to bottom footer\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handlerBottomToTopFooter}>\r
          open bottom to top footer\r
        </Button>\r
      </div>\r
\r
      <Drawer\r
        open={drawer}\r
        title="I am the title"\r
        direction={direction as any}\r
        onClose={handlerClose}\r
      >\r
        <span>Hi, there!</span>\r
      </Drawer>\r
      <Drawer\r
        open={drawer2}\r
        direction={direction as any}\r
        onClose={handlerClose2}\r
        header={<h4>set title by slot</h4>}\r
        footer={\r
          <div style={{ flex: 'auto' }}>\r
            <Button onClick={cancelClick}>cancel</Button>\r
            <Button type="primary" onClick={confirmClick}>confirm</Button>\r
          </div>\r
        }\r
      >\r
        radio\r
      </Drawer>\r
    </>\r
  )\r
}\r
\r
export default DrawerBasic`,Ln=`import { useState } from 'react'\r
import { Button, Drawer } from 'pelement-react'\r
\r
function DrawerContent() {\r
  const [table, setTable] = useState(false)\r
  const [dialog, setDialog] = useState(false)\r
\r
  function closeTable() {\r
    setTable(false)\r
  }\r
\r
  function closeDialog() {\r
    setDialog(false)\r
  }\r
\r
  return (\r
    <>\r
      <Button text onClick={() => { setTable(true) }}>\r
        Open Drawer with nested table\r
      </Button>\r
\r
      <Button text onClick={() => { setDialog(true) }}>\r
        Open Drawer with nested form\r
      </Button>\r
\r
      <Drawer\r
        open={table}\r
        title="I have a nested table inside!"\r
        direction="rtl"\r
        size="50%"\r
        onClose={closeTable}\r
      >\r
        table\r
      </Drawer>\r
\r
      <Drawer\r
        open={dialog}\r
        title="I have a nested form inside!"\r
        direction="ltr"\r
        className="demo-drawer"\r
        onClose={closeDialog}\r
      >\r
        <div className="demo-drawer__content">\r
          form\r
          <div className="demo-drawer__footer">\r
            <Button onClick={closeDialog}>Cancel</Button>\r
            <Button type="primary" onClick={closeDialog}>\r
              Submit\r
            </Button>\r
          </div>\r
        </div>\r
      </Drawer>\r
    </>\r
  )\r
}\r
\r
export default DrawerContent`,An=`import { useState } from 'react'\r
import { Button, CircleCloseFilled, Drawer } from 'pelement-react'\r
\r
function DrawerHeader() {\r
  const [visible, setVisible] = useState(false)\r
\r
  function handlerClose() {\r
    setVisible(false)\r
  }\r
\r
  return (\r
    <>\r
      <Button onClick={() => { setVisible(true) }}>\r
        Open Drawer with customized header\r
      </Button>\r
\r
      <Drawer\r
        open={visible}\r
        showClose={false}\r
        header={\r
          <>\r
            <h4>This is a custom header!</h4>\r
            <Button type="danger" onClick={handlerClose}>\r
              <CircleCloseFilled />\r
              Close\r
            </Button>\r
          </>\r
        }\r
      >\r
        This is drawer content.\r
      </Drawer>\r
    </>\r
  )\r
}\r
\r
export default DrawerHeader`,jn=`import { useState } from 'react'\r
import { Button, Drawer } from 'pelement-react'\r
\r
function DrawerWithHeader() {\r
  const [drawer, setDrawer] = useState(false)\r
\r
  return (\r
    <>\r
      <Button type="primary" onClick={() => setDrawer(true)}>\r
        open\r
      </Button>\r
\r
      <Drawer open={drawer} title="I am the title" withHeader={false}>\r
        <span>Hi there!</span>\r
      </Drawer>\r
    </>\r
  )\r
}\r
\r
export default DrawerWithHeader`,Dn=`import { Edit, Search, Check, Message, Star, Delete, View, StarFilled, Loading, Hide, InfoFilled, WarningFilled, CircleCloseFilled, CircleCheckFilled, ArrowRight, CircleCheck, Close, Share } from 'pelement-react'\r
\r
function ButtonBasic() {\r
  return (\r
    <>\r
      <Edit style={{ fontSize: '20px' }} />\r
      <Search style={{ fontSize: '20px' }} />\r
      <Check style={{ fontSize: '20px' }} />\r
      <Message style={{ fontSize: '20px' }} />\r
      <Star style={{ fontSize: '20px' }} />\r
      <Delete style={{ fontSize: '20px' }} />\r
      <View style={{ fontSize: '20px' }} />\r
      <StarFilled style={{ fontSize: '20px' }} />\r
      <Loading style={{ fontSize: '20px' }} />\r
      <Hide style={{ fontSize: '20px' }} />\r
      <InfoFilled style={{ fontSize: '20px' }} />\r
      <WarningFilled style={{ fontSize: '20px' }} />\r
      <CircleCloseFilled style={{ fontSize: '20px' }} />\r
      <CircleCheckFilled style={{ fontSize: '20px' }} />\r
      <ArrowRight style={{ fontSize: '20px' }} />\r
      <CircleCheck style={{ fontSize: '20px' }} />\r
      <Close style={{ fontSize: '20px' }} />\r
      <Share style={{ fontSize: '20px' }} />\r
    </>\r
  )\r
}\r
\r
export default ButtonBasic`,Mn=`import { Col, Row } from 'pelement-react'\r
import './LayoutBasic.scss'\r
\r
function LayoutBasic() {\r
  return (\r
    <>\r
      <Row>\r
        <Col span={24}><div className="grid-content ep-bg-purple-dark" /></Col>\r
      </Row>\r
      <Row>\r
        <Col span={12}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={12}> <div className="grid-content ep-bg-purple-light" /></Col>\r
      </Row>\r
      <Row>\r
        <Col span={8}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={8}> <div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={8}> <div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}> <div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={6}> <div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}> <div className="grid-content ep-bg-purple-light" /></Col>\r
      </Row>\r
      <Row>\r
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={4}> <div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={4}> <div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={4}> <div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={4}> <div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={4}> <div className="grid-content ep-bg-purple-light" /></Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default LayoutBasic`,In=`import { Col, Row } from 'pelement-react'\r
\r
function LayoutBootstrap() {\r
  return (\r
    <>\r
      <Row gutter={10}>\r
        <Col xs={8} sm={6} md={4} lg={3} xl={1}>\r
          <div className="grid-content ep-bg-purple" />\r
        </Col>\r
        <Col xs={4} sm={6} md={8} lg={9} xl={11}>\r
          <div className="grid-content ep-bg-purple-light" />\r
        </Col>\r
        <Col xs={4} sm={6} md={8} lg={9} xl={11}>\r
          <div className="grid-content ep-bg-purple" />\r
        </Col>\r
        <Col xs={8} sm={6} md={4} lg={3} xl={1}>\r
          <div className="grid-content ep-bg-purple-light" />\r
        </Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default LayoutBootstrap`,On=`import { Col, Row } from 'pelement-react'\r
\r
function LayoutGutter() {\r
  return (\r
    <>\r
      <Row gutter={20}>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default LayoutGutter`,Fn=`import { Col, Row } from 'pelement-react'\r
\r
function LayoutJustify() {\r
  return (\r
    <>\r
      <Row className="row-bg">\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row className="row-bg" justify="center">\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row className="row-bg" justify="end">\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row className="row-bg" justify="space-between">\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row className="row-bg" justify="space-around">\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row className="row-bg" justify="space-evenly">\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default LayoutJustify`,Pn=`import { Col, Row } from 'pelement-react'\r
\r
function LayoutMix() {\r
  return (\r
    <>\r
      <Row gutter={20}>\r
        <Col span={16}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={8}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row gutter={20}>\r
        <Col span={8}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={8}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
      <Row gutter={20}>\r
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={16}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default LayoutMix`,zn=`import { Col, Row } from 'pelement-react'\r
\r
function LayoutOffset() {\r
  return (\r
    <>\r
      <Row gutter={20}>\r
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>\r
        <Col span={6} offset={6}>\r
          <div className="grid-content ep-bg-purple" />\r
        </Col>\r
      </Row>\r
      <Row gutter={20}>\r
        <Col span={6} offset={6}>\r
          <div className="grid-content ep-bg-purple" />\r
        </Col>\r
        <Col span={6} offset={6}>\r
          <div className="grid-content ep-bg-purple" />\r
        </Col>\r
      </Row>\r
      <Row gutter={20}>\r
        <Col span={12} offset={6}>\r
          <div className="grid-content ep-bg-purple" />\r
        </Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default LayoutOffset`,Hn=`import { Link } from 'pelement-react'\r
import './LinkBasic.scss'\r
\r
function LinkBasic() {\r
  return (\r
    <>\r
      <div className="common-link">\r
        <Link href="https://pelement-react.github.io/pelement-react/" target="_blank">default</Link>\r
        <Link type="primary">primary</Link>\r
        <Link type="success">success</Link>\r
        <Link type="warning">warning</Link>\r
        <Link type="danger">danger</Link>\r
        <Link type="info">info</Link>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default LinkBasic`,$n=`import { Link } from 'pelement-react'\r
\r
function LinkDisabled() {\r
  return (\r
    <>\r
      <div className="common-link">\r
        <Link disabled>default</Link>\r
        <Link type="primary" disabled>primary</Link>\r
        <Link type="success" disabled>success</Link>\r
        <Link type="warning" disabled>warning</Link>\r
        <Link type="danger" disabled>danger</Link>\r
        <Link type="info" disabled>info</Link>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default LinkDisabled`,Un=`import { Edit, Link, View } from 'pelement-react'\r
\r
function LinkIcon() {\r
  return (\r
    <>\r
      <div className="common-link">\r
        <Link icon={<Edit />}>Edit</Link>\r
        <Link>\r
          Check<View className="el-icon--right" />\r
        </Link>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default LinkIcon`,Vn=`import { Link } from 'pelement-react'\r
\r
function LinkUnderline() {\r
  return (\r
    <>\r
      <div className="common-link">\r
        <Link underline={false}>Without Underline</Link>\r
        <Link>With Underline</Link>\r
      </div >\r
    </>\r
  )\r
}\r
\r
export default LinkUnderline`,Wn=`import { Button, MessageBox } from 'pelement-react'\r
\r
function MessageBoxBasic() {\r
  function open() {\r
    MessageBox.alert('This is a message', 'Title', {\r
      confirmButtonText: 'OK',\r
      callback: (action: string) => {\r
        alert(\`action: \${action}\`)\r
      },\r
    })\r
  }\r
\r
  return (\r
    <>\r
      <Button plain onClick={open}>Click to open the Message Box</Button>\r
    </>\r
  )\r
}\r
\r
export default MessageBoxBasic`,Gn=`import { Button, MessageBox } from 'pelement-react'\r
\r
function MessageBoxConfirm() {\r
  function open() {\r
    MessageBox.confirm(\r
      'proxy will permanently delete the file. Continue?',\r
      'Warning',\r
      {\r
        confirmButtonText: 'OK',\r
        cancelButtonText: 'Cancel',\r
        type: 'warning',\r
        onConfirm: () => {\r
          console.log('Delete completed')\r
        },\r
        onCancel: () => {\r
          console.log('Delete canceled')\r
        }\r
      }\r
    )\r
  }\r
\r
  return (\r
    <>\r
      <Button plain onClick={open}>Click to open the Message Box</Button>\r
    </>\r
  )\r
}\r
\r
export default MessageBoxConfirm`,Kn=`import { Button, MessageBox, Switch } from 'pelement-react'\r
\r
function MessageBoxMessage() {\r
  function open() {\r
    MessageBox.alert(\r
      <><span>Message can be </span><i style={{ color: 'teal' }}>VNode</i></>,\r
      'Message',\r
    )\r
  }\r
\r
  function open1() {\r
    MessageBox.alert(\r
      <><Switch defaultChecked /></>,\r
      'Message',\r
    )\r
  }\r
\r
  return (\r
    <>\r
      <Button plain onClick={open}>Common VNode</Button>\r
      <Button plain onClick={open1}>Dynamic props</Button>\r
    </>\r
  )\r
}\r
\r
export default MessageBoxMessage`,Xn=`import { Button, Popconfirm } from 'pelement-react'\r
\r
function PopconfirmBasic() {\r
  return (\r
    <>\r
      <Popconfirm title="Are you sure to delete this?">\r
        <Button>Delete</Button>\r
      </Popconfirm>\r
    </>\r
  )\r
}\r
\r
export default PopconfirmBasic`,Yn=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'\r
\r
function PopconfirmEvent() {\r
  function confirmEvent() {\r
    console.log('confirm!')\r
  }\r
\r
  function cancelEvent() {\r
    console.log('cancel!')\r
  }\r
\r
  return (\r
    <>\r
      <Popconfirm\r
        confirmButtonText="Yes"\r
        cancelButtonText="No"\r
        icon={<InfoFilled />}\r
        iconColor="#626AEF"\r
        title="Are you sure to delete this?"\r
        onConfirm={confirmEvent}\r
        onCancel={cancelEvent}\r
      >\r
        <Button>Delete</Button>\r
      </Popconfirm >\r
    </>\r
  )\r
}\r
\r
export default PopconfirmEvent`,Zn=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'\r
\r
function PopconfirmIcon() {\r
  return (\r
    <>\r
      <Popconfirm\r
        width={220}\r
        confirmButtonText="OK"\r
        cancelButtonText="No, Thanks"\r
        icon={<InfoFilled />}\r
        iconColor="#626AEF"\r
        title="Are you sure to delete this?"\r
      >\r
        <Button>Delete</Button>\r
      </Popconfirm >\r
    </>\r
  )\r
}\r
\r
export default PopconfirmIcon`,qn=`import { Button, Popover } from 'pelement-react'\r
\r
function PopoverBasic() {\r
  return (\r
    <>\r
      <Popover\r
        placement="top-start"\r
        title="Title"\r
        width={200}\r
        trigger="hover"\r
        content="this is content, this is content, this is content"\r
      >\r
        <Button className="m-2">Hover to activate</Button>\r
      </Popover>\r
      <Popover\r
        placement="bottom"\r
        title="Title"\r
        width={200}\r
        trigger="click"\r
        content="this is content, this is content, this is content"\r
      >\r
        <Button className="m-2">Click to activate</Button>\r
      </Popover>\r
      <Popover\r
        placement="right"\r
        title="Title"\r
        width={200}\r
        trigger="focus"\r
        content="this is content, this is content, this is content"\r
      >\r
        <Button className="m-2">Focus to activate</Button>\r
      </Popover>\r
      <Popover\r
        title="Title"\r
        width={200}\r
        trigger="contextmenu"\r
        content="this is content, this is content, this is content"\r
      >\r
        <Button className="m-2">contextmenu to activate</Button>\r
      </Popover>\r
    </>\r
  )\r
}\r
\r
export default PopoverBasic`,Jn=`import { Progress } from 'pelement-react'\r
import './ProgressBasic.scss'\r
\r
function ProgressBasic() {\r
  function format(percentage: number) {\r
    return (percentage === 100 ? 'Full' : \`\${percentage}%\`)\r
  }\r
\r
  return (\r
    <>\r
      <div className="common-progress">\r
        <Progress percentage={50} />\r
        <Progress percentage={100} format={format} />\r
        <Progress percentage={100} status="success" />\r
        <Progress percentage={100} status="warning" />\r
        <Progress percentage={50} status="exception" />\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ProgressBasic`,Qn=`import { Progress } from 'pelement-react'\r
\r
function ProgressTextInside() {\r
  return (\r
    <>\r
      <div className="common-progress">\r
        <Progress textInside={true} strokeWidth={26} percentage={70} />\r
        <Progress\r
          textInside={true}\r
          strokeWidth={24}\r
          percentage={100}\r
          status="success"\r
        />\r
        <Progress\r
          textInside={true}\r
          strokeWidth={22}\r
          percentage={80}\r
          status="warning"\r
        />\r
        <Progress\r
          textInside={true}\r
          strokeWidth={20}\r
          percentage={50}\r
          status="exception"\r
        />\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default ProgressTextInside`,es=`import { Rate } from 'pelement-react'\r
\r
function RateBasic() {\r
  return (\r
    <>\r
      <Rate></Rate>\r
    </>\r
  )\r
}\r
\r
export default RateBasic`,ts=`import { Button, Col, Result, Row } from 'pelement-react'\r
\r
function ResultBasic() {\r
  return (\r
    <>\r
      <Row>\r
        <Col sm={12} lg={6}>\r
          <Result\r
            icon="success"\r
            title="Success Tip"\r
            subTitle="Please follow the instructions"\r
            extra={<Button type="primary">Back</Button>}\r
          ></Result>\r
        </Col>\r
        <Col sm={12} lg={6}>\r
          <Result\r
            icon="warning"\r
            title="Warning Tip"\r
            subTitle="Please follow the instructions"\r
            extra={<Button type="primary">Back</Button>}\r
          ></Result>\r
        </Col>\r
        <Col sm={12} lg={6}>\r
          <Result\r
            icon="error"\r
            title="Error Tip"\r
            subTitle="Please follow the instructions"\r
            extra={<Button type="primary">Back</Button>}\r
          ></Result>\r
        </Col>\r
        <Col sm={12} lg={6}>\r
          <Result\r
            icon="info"\r
            title="Info Tip"\r
            subTitle={<p>Using slot as subtitle</p>}\r
            extra={<Button type="primary">Back</Button>}\r
          ></Result>\r
        </Col>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default ResultBasic`,rs=`import { Button, Result } from 'pelement-react'\r
\r
function ResultIcon() {\r
  return (\r
    <>\r
      <Result\r
        icon={<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />}\r
        title="404"\r
        subTitle="Sorry, request error"\r
        extra={<Button type="primary">Back</Button>}\r
      ></Result>\r
    </>\r
  )\r
}\r
\r
export default ResultIcon`,ns=`import { Scrollbar } from 'pelement-react'\r
import './ScrollbarBasic.css'\r
\r
function ScrollbarBasic() {\r
  return (\r
    <>\r
      <Scrollbar height="400px">\r
        {\r
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) =>\r
\r
            <p key={index} className="scrollbar-demo-item">{item}</p>\r
          )\r
        }\r
      </Scrollbar>\r
    </>\r
  )\r
}\r
\r
export default ScrollbarBasic`,ss=`import { Button, Space } from 'pelement-react'\r
\r
function SpaceAlignment() {\r
  return (\r
    <>\r
      <div style={{ width: '250px', height: '70px', border: '1px solid #e4e7ed', padding: '10px', marginBottom: '10px' }}>\r
        <Space>\r
          string\r
          <Button> button </Button>\r
          <div style={{ height: '70px', border: '1px solid #e4e7ed', padding: '0 10px' }}>1</div>\r
        </Space>\r
      </div>\r
      <div style={{ width: '250px', height: '70px', border: '1px solid #e4e7ed', padding: '10px', marginBottom: '10px' }}>\r
        <Space alignment="flex-start">\r
          string\r
          <Button> button </Button>\r
          <div style={{ height: '70px', border: '1px solid #e4e7ed', padding: '0 10px' }}>2</div>\r
        </Space>\r
      </div>\r
      <div style={{ width: '250px', height: '70px', border: '1px solid #e4e7ed', padding: '10px' }}>\r
        <Space alignment="flex-end">\r
          string\r
          <Button> button </Button>\r
          <div style={{ height: '70px', border: '1px solid #e4e7ed', padding: '0 10px' }}>3</div>\r
        </Space>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default SpaceAlignment`,os=`import { Space } from 'pelement-react'\r
\r
function SpaceBasic() {\r
  return (\r
    <>\r
      <Space wrap>\r
        {\r
          [1, 2, 3].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
    </>\r
  )\r
}\r
\r
export default SpaceBasic`,as=`import { Space } from 'pelement-react'\r
\r
function SpaceDirection() {\r
  return (\r
    <>\r
      <Space direction="vertical">\r
        {\r
          [1, 2, 3].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
    </>\r
  )\r
}\r
\r
export default SpaceDirection`,is=`import { Space } from 'pelement-react'\r
\r
function SpaceSize() {\r
  return (\r
    <>\r
      <Space wrap size="large">\r
        {\r
          [1, 2].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
      <Space wrap size="default">\r
        {\r
          [1, 2].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
      <Space wrap size="small">\r
        {\r
          [1, 2].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
    </>\r
  )\r
}\r
\r
export default SpaceSize`,ls=`import { Space } from 'pelement-react'\r
\r
function SpaceSize2() {\r
  return (\r
    <>\r
      <Space wrap size={0}>\r
        {\r
          [1, 2].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
      <Space wrap size={50}>\r
        {\r
          [1, 2].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
      <Space wrap size={100}>\r
        {\r
          [1, 2].map((item, index) =>\r
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>\r
          )\r
        }\r
      </Space>\r
    </>\r
  )\r
}\r
\r
export default SpaceSize2`,cs=`import { Button, Space } from 'pelement-react'\r
\r
function SpaceSpacer() {\r
  return (\r
    <>\r
      <Space size={10} spacer="|">\r
        <Button> button 1 </Button>\r
        <Button> button 2 </Button>\r
      </Space>\r
    </>\r
  )\r
}\r
\r
export default SpaceSpacer`,us=`import { Button, Divider, Space } from 'pelement-react'\r
\r
function SpaceSpacer2() {\r
  return (\r
    <>\r
      <Space size={10} spacer={<Divider direction="vertical" />}>\r
        <Button> button 1 </Button>\r
        <Button> button 2 </Button>\r
      </Space>\r
    </>\r
  )\r
}\r
\r
export default SpaceSpacer2`,ds=`import { Button, Space } from 'pelement-react'\r
\r
function SpaceWrap() {\r
  return (\r
    <>\r
      <Space wrap>\r
        {\r
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) =>\r
            <div key={index}>\r
              <Button text> Text button {item} </Button>\r
            </div>\r
          )\r
        }\r
      </Space >\r
    </>\r
  )\r
}\r
\r
export default SpaceWrap`,ps=`import { Hide, Switch, View } from 'pelement-react'\r
\r
function SwitchActionIcon() {\r
  return (\r
    <>\r
      <Switch\r
        defaultChecked\r
        activeActionIcon={<View />}\r
        inactiveActionIcon={<Hide />}\r
      />\r
      <br />\r
      <Switch\r
        defaultChecked\r
        activeActionIcon={<><span className="custom-active-action">T</span></>}\r
        inactiveActionIcon={<><span className="custom-inactive-action">F</span></>}\r
      />\r
    </>\r
  )\r
}\r
\r
export default SwitchActionIcon`,fs=`import { Switch } from 'pelement-react'\r
\r
function SwitchBasic() {\r
  return (\r
    <>\r
      <Switch defaultChecked />\r
      <Switch\r
        defaultChecked\r
        className="ml-2"\r
        style={{ ['--el-switch-on-color' as string]: '#13ce66', ['--el-switch-off-color' as string]: '#ff4949' }}\r
      />\r
    </>\r
  )\r
}\r
\r
export default SwitchBasic`,ms=`import { useState } from 'react'\r
import { Switch } from 'pelement-react'\r
\r
function SwitchBeforeChange() {\r
  const [loading1, setLoading1] = useState(false)\r
  const [loading2, setLoading2] = useState(false)\r
\r
  function beforeChange1(): Promise<boolean> {\r
    setLoading1(true)\r
    return new Promise((resolve) => {\r
      setTimeout(() => {\r
        setLoading1(false)\r
        console.log('Switch success')\r
        return resolve(true)\r
      }, 1000)\r
    })\r
  }\r
\r
  function beforeChange2(): Promise<boolean> {\r
    setLoading2(true)\r
    return new Promise((_, reject) => {\r
      setTimeout(() => {\r
        setLoading2(false)\r
        console.log('Switch failed')\r
        return reject(new Error('Error'))\r
      }, 1000)\r
    })\r
  }\r
\r
  return (\r
    <>\r
      <Switch\r
        loading={loading1}\r
        beforeChange={beforeChange1}\r
      />\r
      <Switch\r
        className="ml-2"\r
        loading={loading2}\r
        beforeChange={beforeChange2}\r
      />\r
    </>\r
  )\r
}\r
\r
export default SwitchBeforeChange`,gs=`import { Switch } from 'pelement-react'\r
\r
function SwitchDisabled() {\r
  return (\r
    <>\r
      <Switch defaultChecked disabled />\r
      <Switch defaultChecked className="ml-2" />\r
    </>\r
  )\r
}\r
\r
export default SwitchDisabled`,hs=`import { Check, Close, Switch } from 'pelement-react'\r
\r
function SwitchIcon() {\r
  return (\r
    <>\r
      <Switch\r
        defaultChecked\r
        activeIcon={<Check />}\r
        inactiveIcon={<Close />}\r
      />\r
      <br />\r
      <Switch\r
        defaultChecked\r
        className="mt-2"\r
        style={{ marginLeft: '24px' }}\r
        inlinePrompt\r
        activeIcon={<Check className="is-icon" />}\r
        inactiveIcon={<Close className="is-icon" />}\r
      />\r
    </>\r
  )\r
}\r
\r
export default SwitchIcon`,xs=`import { Switch } from 'pelement-react'\r
\r
function SwitchLoading() {\r
  return (\r
    <>\r
      <Switch defaultChecked loading />\r
      <Switch loading className="ml-2" />\r
    </>\r
  )\r
}\r
\r
export default SwitchLoading`,bs=`import { Switch } from 'pelement-react'\r
\r
function SwitchSize() {\r
  return (\r
    <>\r
      <Switch\r
        defaultChecked\r
        size="large"\r
        activeText="Open"\r
        inactiveText="Close"\r
      />\r
      <br />\r
      <Switch\r
        defaultChecked\r
        activeText="Open"\r
        inactiveText="Close" />\r
      <br />\r
      <Switch\r
        defaultChecked\r
        size="small"\r
        activeText="Open"\r
        inactiveText="Close"\r
      />\r
    </>\r
  )\r
}\r
\r
export default SwitchSize`,vs=`import { Switch } from 'pelement-react'\r
\r
function SwitchText() {\r
  return (\r
    <>\r
      <Switch\r
        defaultChecked\r
        className="mb-2"\r
        activeText="Pay by month"\r
        inactiveText="Pay by year"\r
      />\r
      <br />\r
      <Switch\r
        defaultChecked\r
        className="mb-2"\r
        style={{ ['--el-switch-on-color' as string]: '#13ce66', ['--el-switch-off-color' as string]: '#ff4949' }}\r
        activeText="Pay by month"\r
        inactiveText="Pay by year"\r
      />\r
      <br />\r
      <Switch\r
        defaultChecked\r
        inlinePrompt\r
        activeText="是"\r
        inactiveText="否"\r
      />\r
      <Switch\r
        defaultChecked\r
        className="ml-2"\r
        inlinePrompt\r
        style={{ ['--el-switch-on-color' as string]: '#13ce66', ['--el-switch-off-color' as string]: '#ff4949' }}\r
        activeText="Y"\r
        inactiveText="N"\r
      />\r
      <Switch\r
        defaultChecked\r
        className="ml-2"\r
        width={60}\r
        inlinePrompt\r
        activeText="超出省略"\r
        inactiveText="超出省略"\r
      />\r
      <Switch\r
        defaultChecked\r
        className="ml-2"\r
        inlinePrompt\r
        style={{ ['--el-switch-on-color' as string]: '#13ce66', ['--el-switch-off-color' as string]: '#ff4949' }}\r
        activeText="完整展示多个内容"\r
        inactiveText="多个内容"\r
      />\r
    </>\r
  )\r
}\r
\r
export default SwitchText`,_s=`import { Table } from 'pelement-react'\r
\r
function TableBasic() {\r
  const columns = [\r
    {\r
      key: 'date',\r
      dataIndex: 'date',\r
      label: 'Date',\r
      width: 180,\r
    },\r
    {\r
      key: 'name',\r
      dataIndex: 'name',\r
      label: 'Name',\r
      width: 180,\r
    },\r
    {\r
      key: 'address',\r
      dataIndex: 'address',\r
      label: 'Address',\r
    },\r
  ]\r
\r
  const data = [\r
    {\r
      date: '2016-05-03',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
    {\r
      date: '2016-05-02',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
    {\r
      date: '2016-05-01',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
  ];\r
\r
  return (\r
    <>\r
      <Table columns={columns} data={data}>\r
      </Table>\r
    </>\r
  )\r
}\r
\r
export default TableBasic`,ws=`import { Table } from 'pelement-react'\r
\r
function TableBorder() {\r
  const columns = [\r
    {\r
      key: 'date',\r
      dataIndex: 'date',\r
      label: 'Date',\r
      width: 180,\r
    },\r
    {\r
      key: 'name',\r
      dataIndex: 'name',\r
      label: 'Name',\r
      width: 180,\r
    },\r
    {\r
      key: 'address',\r
      dataIndex: 'address',\r
      label: 'Address',\r
    },\r
  ]\r
\r
  const data = [\r
    {\r
      date: '2016-05-03',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
    {\r
      date: '2016-05-02',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
    {\r
      date: '2016-05-01',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
  ];\r
\r
  return (\r
    <>\r
      <Table columns={columns} data={data} border>\r
      </Table>\r
    </>\r
  )\r
}\r
\r
export default TableBorder`,ys=`import { Table } from 'pelement-react'\r
\r
function TableStripe() {\r
  const columns = [\r
    {\r
      key: 'date',\r
      dataIndex: 'date',\r
      label: 'Date',\r
      width: 180,\r
    },\r
    {\r
      key: 'name',\r
      dataIndex: 'name',\r
      label: 'Name',\r
      width: 180,\r
    },\r
    {\r
      key: 'address',\r
      dataIndex: 'address',\r
      label: 'Address',\r
    },\r
  ]\r
\r
  const data = [\r
    {\r
      date: '2016-05-03',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
    {\r
      date: '2016-05-02',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
    {\r
      date: '2016-05-01',\r
      name: 'Tom',\r
      address: 'No. 189, Grove St, Los Angeles',\r
    },\r
  ];\r
\r
  return (\r
    <>\r
      <Table columns={columns} data={data} stripe>\r
      </Table>\r
    </>\r
  )\r
}\r
\r
export default TableStripe`,Cs=`import { Tag } from 'pelement-react'\r
\r
function TagBasic() {\r
  return (\r
    <>\r
      <Tag>Tag 1</Tag>\r
      <Tag className="ml-2" type="success">Tag 2</Tag>\r
      <Tag className="ml-2" type="info">Tag 3</Tag>\r
      <Tag className="ml-2" type="warning">Tag 4</Tag>\r
      <Tag className="ml-2" type="danger">Tag 5</Tag>\r
    </>\r
  )\r
}\r
\r
export default TagBasic`,Ns=`import { Tag } from 'pelement-react'\r
\r
function TagClosable() {\r
  const tagList = [\r
    { name: 'Tag 1', type: '' },\r
    { name: 'Tag 2', type: 'success' },\r
    { name: 'Tag 3', type: 'info' },\r
    { name: 'Tag 4', type: 'warning' },\r
    { name: 'Tag 5', type: 'danger' },\r
  ].map(tag =>\r
    <Tag\r
      className="mx-1"\r
      closable\r
      type={tag.type as any}\r
    >\r
      {tag.name}\r
    </Tag>\r
  )\r
\r
  return (\r
    <>\r
      {tagList}\r
    </>\r
  )\r
}\r
\r
export default TagClosable`,Bs=`import { Tag } from 'pelement-react'\r
\r
function TagEffect() {\r
  const items = [\r
    { type: '', label: 'Tag 1' },\r
    { type: 'success', label: 'Tag 2' },\r
    { type: 'info', label: 'Tag 3' },\r
    { type: 'danger', label: 'Tag 4' },\r
    { type: 'warning', label: 'Tag 5' },\r
  ]\r
\r
  const darkList = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="dark"\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  const darkClosable = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="dark"\r
      closable\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  const lightList = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="light"\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  const lightClosable = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="light"\r
      closable\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  const plainList = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="plain"\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  const plainClosable = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="plain"\r
      closable\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  return (\r
    <>\r
      <div className="tag-group my-2 flex flex-wrap gap-1 items-center">\r
        <span className="tag-group__title m-1 line-height-2">Dark</span>\r
        {darkList}\r
        {darkClosable}\r
      </div>\r
      <div className="tag-group my-2 flex flex-wrap gap-1 items-center">\r
        <span className="tag-group__title m-1">Light</span>\r
        {lightList}\r
        {lightClosable}\r
      </div>\r
      <div className="tag-group my-2 flex flex-wrap gap-1 items-center">\r
        <span className="tag-group__title m-1">Plain</span>\r
        {plainList}\r
        {plainClosable}\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default TagEffect`,Ts=`import { Tag } from 'pelement-react'\r
\r
function TagRound() {\r
  const items = [\r
    { type: '', label: 'Tag 1' },\r
    { type: 'success', label: 'Tag 2' },\r
    { type: 'info', label: 'Tag 3' },\r
    { type: 'danger', label: 'Tag 4' },\r
    { type: 'warning', label: 'Tag 5' },\r
  ]\r
\r
  const darkList = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="dark"\r
      round\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  const lightList = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="light"\r
      round\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  const plainList = items.map(item =>\r
    <Tag\r
      type={item.type as any}\r
      className="mx-1"\r
      effect="plain"\r
      round\r
    >\r
      {item.label}\r
    </Tag>\r
  )\r
\r
  return (\r
    <>\r
      <div className="flex flex-wrap gap-2 my-2">\r
        {darkList}\r
      </div>\r
      <div className="flex flex-wrap gap-2">\r
        {lightList}\r
      </div>\r
      <div className="flex flex-wrap gap-2 my-2">\r
        {plainList}\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default TagRound`,ks=`import { Row, Tag } from 'pelement-react'\r
\r
function TagSize() {\r
  return (\r
    <>\r
      <Row>\r
        <Tag className="mx-1" size="large">Large</Tag>\r
        <Tag className="mx-1">Default</Tag>\r
        <Tag className="mx-1" size="small">Small</Tag>\r
      </Row>\r
\r
      <Row className="mt-4">\r
        <Tag className="mx-1" size="large" closable>Large</Tag>\r
        <Tag className="mx-1" closable>Default</Tag>\r
        <Tag className="mx-1" size="small" closable>Small</Tag>\r
      </Row>\r
    </>\r
  )\r
}\r
\r
export default TagSize`,Ss=`import { Text } from 'pelement-react'\r
import './TextBasic.scss'\r
\r
function TextBasic() {\r
  return (\r
    <>\r
      <div className="common-text">\r
        <Text className="mx-1">Default</Text>\r
        <Text className="mx-1" type="primary">Primary</Text>\r
        <Text className="mx-1" type="success">Success</Text>\r
        <Text className="mx-1" type="info">Info</Text>\r
        <Text className="mx-1" type="warning">Warning</Text>\r
        <Text className="mx-1" type="danger">Danger</Text>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default TextBasic`,Es=`import { Text } from 'pelement-react'\r
\r
function TextSize() {\r
  return (\r
    <>\r
      <div className="common-text">\r
        <Text className="mx-1" size="large">Large</Text>\r
        <Text className="mx-1">Default</Text>\r
        <Text className="mx-1" size="small">Small</Text>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default TextSize`,Rs=`import { Row, Text } from 'pelement-react'\r
\r
function TextTruncated() {\r
  return (\r
    <>\r
      <div className="common-text">\r
        <Text className="w-150px mb-2" truncated>\r
          Self element set width 100px\r
        </Text>\r
        <Row className="w-150px mb-2">\r
          <Text truncated>Squeezed by parent element</Text>\r
        </Row>\r
        <Text lineClamp={2}>\r
          The -webkit-line-clamp CSS property<br />\r
          allows limiting of the contents of<br />\r
          a block to the specified number of lines.\r
        </Text>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default TextTruncated`,Ls=`import { Button, Tooltip } from 'pelement-react'\r
import './TooltipBasic.scss'\r
\r
function TooltipBasic() {\r
  return (\r
    <>\r
      <div className="common-tooltip">\r
        <div className="row center">\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Top Left prompts info"\r
            placement="top-start"\r
          >\r
            <Button>top-start</Button>\r
          </Tooltip>\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Top Center prompts info"\r
            placement="top"\r
          >\r
            <Button>top</Button>\r
          </Tooltip>\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Top Right prompts info"\r
            placement="top-end"\r
          >\r
            <Button>top-end</Button>\r
          </Tooltip>\r
        </div>\r
        <div className="row">\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Left Top prompts info"\r
            placement="left-start"\r
          >\r
            <Button>left-start</Button>\r
          </Tooltip>\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Right Top prompts info"\r
            placement="right-start"\r
          >\r
            <Button>right-start</Button>\r
          </Tooltip>\r
        </div>\r
        <div className="row">\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Left Center prompts info"\r
            placement="left"\r
          >\r
            <Button className="mt-3 mb-3">left</Button>\r
          </Tooltip>\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Right Center prompts info"\r
            placement="right"\r
          >\r
            <Button>right</Button>\r
          </Tooltip>\r
        </div>\r
        <div className="row">\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Left Bottom prompts info"\r
            placement="left-end"\r
          >\r
            <Button>left-end</Button>\r
          </Tooltip>\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Right Bottom prompts info"\r
            placement="right-end"\r
          >\r
            <Button>right-end</Button>\r
          </Tooltip>\r
        </div>\r
        <div className="row center">\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Bottom Left prompts info"\r
            placement="bottom-start"\r
          >\r
            <Button>bottom-start</Button>\r
          </Tooltip>\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Bottom Center prompts info"\r
            placement="bottom"\r
          >\r
            <Button>bottom</Button>\r
          </Tooltip>\r
          <Tooltip\r
            className="box-item"\r
            effect="dark"\r
            content="Bottom Right prompts info"\r
            placement="bottom-end"\r
          >\r
            <Button>bottom-end</Button>\r
          </Tooltip>\r
        </div>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default TooltipBasic`,As=`import { Button, Tooltip } from 'pelement-react'\r
\r
function TooltipContent() {\r
  return (\r
    <>\r
      <Tooltip placement="top" content={<>multiple lines<br />second line</>}>\r
        <Button>Top center</Button>\r
      </Tooltip>\r
    </>\r
  )\r
}\r
\r
export default TooltipContent`,js=`import { useState } from 'react'\r
import { Button, Tooltip } from 'pelement-react'\r
\r
function TooltipDisabled() {\r
  const [disabled, setDisabled] = useState(true)\r
\r
  function changeDisabled() {\r
    setDisabled(!disabled)\r
  }\r
\r
  return (\r
    <>\r
      <Tooltip\r
        disabled={disabled}\r
        content="click to close tooltip function"\r
        placement="bottom"\r
        effect="light"\r
      >\r
        <Button onClick={changeDisabled}>\r
          click to {disabled ? 'active' : 'close'} tooltip function\r
        </Button>\r
      </Tooltip >\r
    </>\r
  )\r
}\r
\r
export default TooltipDisabled`,Ds=`import { Button, Tooltip } from 'pelement-react'\r
\r
function TooltipEffect() {\r
  return (\r
    <>\r
      <Tooltip content="Top center" placement="top">\r
        <Button>Dark</Button>\r
      </Tooltip>\r
      <Tooltip content="Bottom center" placement="bottom" effect="light">\r
        <Button>Light</Button>\r
      </Tooltip>\r
\r
      <Tooltip content="Bottom center" effect="customized">\r
        <Button>Customized theme</Button>\r
      </Tooltip>\r
    </>\r
  )\r
}\r
\r
export default TooltipEffect`;function qt(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t],s=typeof n;(s==="object"||s==="function")&&!Object.isFrozen(n)&&qt(n)}),e}class Tt{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Jt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function ie(e,...t){const n=Object.create(null);for(const s in e)n[s]=e[s];return t.forEach(function(s){for(const o in s)n[o]=s[o]}),n}const Ms="</span>",kt=e=>!!e.scope,Is=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((s,o)=>`${s}${"_".repeat(o+1)}`)].join(" ")}return`${t}${e}`};class Os{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=Jt(t)}openNode(t){if(!kt(t))return;const n=Is(t.scope,{prefix:this.classPrefix});this.span(n)}closeNode(t){kt(t)&&(this.buffer+=Ms)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const St=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class rt{constructor(){this.rootNode=St(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=St({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(s=>this._walk(t,s)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{rt._collapse(n)}))}}class Fs extends rt{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,n){const s=t.root;n&&(s.scope=`language:${n}`),this.add(s)}toHTML(){return new Os(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Ne(e){return e?typeof e=="string"?e:e.source:null}function Qt(e){return ge("(?=",e,")")}function Ps(e){return ge("(?:",e,")*")}function zs(e){return ge("(?:",e,")?")}function ge(...e){return e.map(n=>Ne(n)).join("")}function Hs(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function nt(...e){return"("+(Hs(e).capture?"":"?:")+e.map(s=>Ne(s)).join("|")+")"}function er(e){return new RegExp(e.toString()+"|").exec("").length-1}function $s(e,t){const n=e&&e.exec(t);return n&&n.index===0}const Us=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function st(e,{joinWith:t}){let n=0;return e.map(s=>{n+=1;const o=n;let c=Ne(s),a="";for(;c.length>0;){const i=Us.exec(c);if(!i){a+=c;break}a+=c.substring(0,i.index),c=c.substring(i.index+i[0].length),i[0][0]==="\\"&&i[1]?a+="\\"+String(Number(i[1])+o):(a+=i[0],i[0]==="("&&n++)}return a}).map(s=>`(${s})`).join(t)}const Vs=/\b\B/,tr="[a-zA-Z]\\w*",ot="[a-zA-Z_]\\w*",rr="\\b\\d+(\\.\\d+)?",nr="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",sr="\\b(0b[01]+)",Ws="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Gs=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=ge(t,/.*\b/,e.binary,/\b.*/)),ie({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,s)=>{n.index!==0&&s.ignoreMatch()}},e)},Be={begin:"\\\\[\\s\\S]",relevance:0},Ks={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Be]},Xs={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Be]},Ys={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},He=function(e,t,n={}){const s=ie({scope:"comment",begin:e,end:t,contains:[]},n);s.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=nt("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return s.contains.push({begin:ge(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),s},Zs=He("//","$"),qs=He("/\\*","\\*/"),Js=He("#","$"),Qs={scope:"number",begin:rr,relevance:0},eo={scope:"number",begin:nr,relevance:0},to={scope:"number",begin:sr,relevance:0},ro={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Be,{begin:/\[/,end:/\]/,relevance:0,contains:[Be]}]},no={scope:"title",begin:tr,relevance:0},so={scope:"title",begin:ot,relevance:0},oo={begin:"\\.\\s*"+ot,relevance:0},ao=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var je=Object.freeze({__proto__:null,APOS_STRING_MODE:Ks,BACKSLASH_ESCAPE:Be,BINARY_NUMBER_MODE:to,BINARY_NUMBER_RE:sr,COMMENT:He,C_BLOCK_COMMENT_MODE:qs,C_LINE_COMMENT_MODE:Zs,C_NUMBER_MODE:eo,C_NUMBER_RE:nr,END_SAME_AS_BEGIN:ao,HASH_COMMENT_MODE:Js,IDENT_RE:tr,MATCH_NOTHING_RE:Vs,METHOD_GUARD:oo,NUMBER_MODE:Qs,NUMBER_RE:rr,PHRASAL_WORDS_MODE:Ys,QUOTE_STRING_MODE:Xs,REGEXP_MODE:ro,RE_STARTERS_RE:Ws,SHEBANG:Gs,TITLE_MODE:no,UNDERSCORE_IDENT_RE:ot,UNDERSCORE_TITLE_MODE:so});function io(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function lo(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function co(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=io,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function uo(e,t){Array.isArray(e.illegal)&&(e.illegal=nt(...e.illegal))}function po(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function fo(e,t){e.relevance===void 0&&(e.relevance=1)}const mo=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(s=>{delete e[s]}),e.keywords=n.keywords,e.begin=ge(n.beforeMatch,Qt(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},go=["of","and","for","in","not","or","if","then","parent","list","value"],ho="keyword";function or(e,t,n=ho){const s=Object.create(null);return typeof e=="string"?o(n,e.split(" ")):Array.isArray(e)?o(n,e):Object.keys(e).forEach(function(c){Object.assign(s,or(e[c],t,c))}),s;function o(c,a){t&&(a=a.map(i=>i.toLowerCase())),a.forEach(function(i){const l=i.split("|");s[l[0]]=[c,xo(l[0],l[1])]})}}function xo(e,t){return t?Number(t):bo(e)?0:1}function bo(e){return go.includes(e.toLowerCase())}const Et={},pe=e=>{console.error(e)},Rt=(e,...t)=>{console.log(`WARN: ${e}`,...t)},he=(e,t)=>{Et[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Et[`${e}/${t}`]=!0)},Ie=new Error;function ar(e,t,{key:n}){let s=0;const o=e[n],c={},a={};for(let i=1;i<=t.length;i++)a[i+s]=o[i],c[i+s]=!0,s+=er(t[i-1]);e[n]=a,e[n]._emit=c,e[n]._multi=!0}function vo(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw pe("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Ie;if(typeof e.beginScope!="object"||e.beginScope===null)throw pe("beginScope must be object"),Ie;ar(e,e.begin,{key:"beginScope"}),e.begin=st(e.begin,{joinWith:""})}}function _o(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw pe("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Ie;if(typeof e.endScope!="object"||e.endScope===null)throw pe("endScope must be object"),Ie;ar(e,e.end,{key:"endScope"}),e.end=st(e.end,{joinWith:""})}}function wo(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function yo(e){wo(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),vo(e),_o(e)}function Co(e){function t(a,i){return new RegExp(Ne(a),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(i?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(i,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,i]),this.matchAt+=er(i)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const i=this.regexes.map(l=>l[1]);this.matcherRe=t(st(i,{joinWith:"|"}),!0),this.lastIndex=0}exec(i){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(i);if(!l)return null;const d=l.findIndex((g,h)=>h>0&&g!==void 0),f=this.matchIndexes[d];return l.splice(0,d),Object.assign(l,f)}}class s{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(i){if(this.multiRegexes[i])return this.multiRegexes[i];const l=new n;return this.rules.slice(i).forEach(([d,f])=>l.addRule(d,f)),l.compile(),this.multiRegexes[i]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(i,l){this.rules.push([i,l]),l.type==="begin"&&this.count++}exec(i){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let d=l.exec(i);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const f=this.getMatcher(0);f.lastIndex=this.lastIndex+1,d=f.exec(i)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function o(a){const i=new s;return a.contains.forEach(l=>i.addRule(l.begin,{rule:l,type:"begin"})),a.terminatorEnd&&i.addRule(a.terminatorEnd,{type:"end"}),a.illegal&&i.addRule(a.illegal,{type:"illegal"}),i}function c(a,i){const l=a;if(a.isCompiled)return l;[lo,po,yo,mo].forEach(f=>f(a,i)),e.compilerExtensions.forEach(f=>f(a,i)),a.__beforeBegin=null,[co,uo,fo].forEach(f=>f(a,i)),a.isCompiled=!0;let d=null;return typeof a.keywords=="object"&&a.keywords.$pattern&&(a.keywords=Object.assign({},a.keywords),d=a.keywords.$pattern,delete a.keywords.$pattern),d=d||/\w+/,a.keywords&&(a.keywords=or(a.keywords,e.case_insensitive)),l.keywordPatternRe=t(d,!0),i&&(a.begin||(a.begin=/\B|\b/),l.beginRe=t(l.begin),!a.end&&!a.endsWithParent&&(a.end=/\B|\b/),a.end&&(l.endRe=t(l.end)),l.terminatorEnd=Ne(l.end)||"",a.endsWithParent&&i.terminatorEnd&&(l.terminatorEnd+=(a.end?"|":"")+i.terminatorEnd)),a.illegal&&(l.illegalRe=t(a.illegal)),a.contains||(a.contains=[]),a.contains=[].concat(...a.contains.map(function(f){return No(f==="self"?a:f)})),a.contains.forEach(function(f){c(f,l)}),a.starts&&c(a.starts,i),l.matcher=o(l),l}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=ie(e.classNameAliases||{}),c(e)}function ir(e){return e?e.endsWithParent||ir(e.starts):!1}function No(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return ie(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:ir(e)?ie(e,{starts:e.starts?ie(e.starts):null}):Object.isFrozen(e)?ie(e):e}var Bo="11.9.0";class To extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const Ye=Jt,Lt=ie,At=Symbol("nomatch"),ko=7,lr=function(e){const t=Object.create(null),n=Object.create(null),s=[];let o=!0;const c="Could not find the language '{}', did you forget to load/include a language module?",a={disableAutodetect:!0,name:"Plain text",contains:[]};let i={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Fs};function l(m){return i.noHighlightRe.test(m)}function d(m){let x=m.className+" ";x+=m.parentNode?m.parentNode.className:"";const S=i.languageDetectRe.exec(x);if(S){const O=H(S[1]);return O||(Rt(c.replace("{}",S[1])),Rt("Falling back to no-highlight mode for this block.",m)),O?S[1]:"no-highlight"}return x.split(/\s+/).find(O=>l(O)||H(O))}function f(m,x,S){let O="",P="";typeof x=="object"?(O=m,S=x.ignoreIllegals,P=x.language):(he("10.7.0","highlight(lang, code, ...args) has been deprecated."),he("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),P=m,O=x),S===void 0&&(S=!0);const Z={code:O,language:P};j("before:highlight",Z);const re=Z.result?Z.result:g(Z.language,Z.code,S);return re.code=Z.code,j("after:highlight",re),re}function g(m,x,S,O){const P=Object.create(null);function Z(w,k){return w.keywords[k]}function re(){if(!A.keywords){K.addText($);return}let w=0;A.keywordPatternRe.lastIndex=0;let k=A.keywordPatternRe.exec($),M="";for(;k;){M+=$.substring(w,k.index);const F=se.case_insensitive?k[0].toLowerCase():k[0],Y=Z(A,F);if(Y){const[oe,Wr]=Y;if(K.addText(M),M="",P[F]=(P[F]||0)+1,P[F]<=ko&&(Ae+=Wr),oe.startsWith("_"))M+=k[0];else{const Gr=se.classNameAliases[oe]||oe;ne(k[0],Gr)}}else M+=k[0];w=A.keywordPatternRe.lastIndex,k=A.keywordPatternRe.exec($)}M+=$.substring(w),K.addText(M)}function Re(){if($==="")return;let w=null;if(typeof A.subLanguage=="string"){if(!t[A.subLanguage]){K.addText($);return}w=g(A.subLanguage,$,!0,Nt[A.subLanguage]),Nt[A.subLanguage]=w._top}else w=p($,A.subLanguage.length?A.subLanguage:null);A.relevance>0&&(Ae+=w.relevance),K.__addSublanguage(w._emitter,w.language)}function J(){A.subLanguage!=null?Re():re(),$=""}function ne(w,k){w!==""&&(K.startScope(k),K.addText(w),K.endScope())}function _t(w,k){let M=1;const F=k.length-1;for(;M<=F;){if(!w._emit[M]){M++;continue}const Y=se.classNameAliases[w[M]]||w[M],oe=k[M];Y?ne(oe,Y):($=oe,re(),$=""),M++}}function wt(w,k){return w.scope&&typeof w.scope=="string"&&K.openNode(se.classNameAliases[w.scope]||w.scope),w.beginScope&&(w.beginScope._wrap?(ne($,se.classNameAliases[w.beginScope._wrap]||w.beginScope._wrap),$=""):w.beginScope._multi&&(_t(w.beginScope,k),$="")),A=Object.create(w,{parent:{value:A}}),A}function yt(w,k,M){let F=$s(w.endRe,M);if(F){if(w["on:end"]){const Y=new Tt(w);w["on:end"](k,Y),Y.isMatchIgnored&&(F=!1)}if(F){for(;w.endsParent&&w.parent;)w=w.parent;return w}}if(w.endsWithParent)return yt(w.parent,k,M)}function zr(w){return A.matcher.regexIndex===0?($+=w[0],1):(Xe=!0,0)}function Hr(w){const k=w[0],M=w.rule,F=new Tt(M),Y=[M.__beforeBegin,M["on:begin"]];for(const oe of Y)if(oe&&(oe(w,F),F.isMatchIgnored))return zr(k);return M.skip?$+=k:(M.excludeBegin&&($+=k),J(),!M.returnBegin&&!M.excludeBegin&&($=k)),wt(M,w),M.returnBegin?0:k.length}function $r(w){const k=w[0],M=x.substring(w.index),F=yt(A,w,M);if(!F)return At;const Y=A;A.endScope&&A.endScope._wrap?(J(),ne(k,A.endScope._wrap)):A.endScope&&A.endScope._multi?(J(),_t(A.endScope,w)):Y.skip?$+=k:(Y.returnEnd||Y.excludeEnd||($+=k),J(),Y.excludeEnd&&($=k));do A.scope&&K.closeNode(),!A.skip&&!A.subLanguage&&(Ae+=A.relevance),A=A.parent;while(A!==F.parent);return F.starts&&wt(F.starts,w),Y.returnEnd?0:k.length}function Ur(){const w=[];for(let k=A;k!==se;k=k.parent)k.scope&&w.unshift(k.scope);w.forEach(k=>K.openNode(k))}let Le={};function Ct(w,k){const M=k&&k[0];if($+=w,M==null)return J(),0;if(Le.type==="begin"&&k.type==="end"&&Le.index===k.index&&M===""){if($+=x.slice(k.index,k.index+1),!o){const F=new Error(`0 width match regex (${m})`);throw F.languageName=m,F.badRule=Le.rule,F}return 1}if(Le=k,k.type==="begin")return Hr(k);if(k.type==="illegal"&&!S){const F=new Error('Illegal lexeme "'+M+'" for mode "'+(A.scope||"<unnamed>")+'"');throw F.mode=A,F}else if(k.type==="end"){const F=$r(k);if(F!==At)return F}if(k.type==="illegal"&&M==="")return 1;if(Ke>1e5&&Ke>k.index*3)throw new Error("potential infinite loop, way more iterations than matches");return $+=M,M.length}const se=H(m);if(!se)throw pe(c.replace("{}",m)),new Error('Unknown language: "'+m+'"');const Vr=Co(se);let Ge="",A=O||Vr;const Nt={},K=new i.__emitter(i);Ur();let $="",Ae=0,ue=0,Ke=0,Xe=!1;try{if(se.__emitTokens)se.__emitTokens(x,K);else{for(A.matcher.considerAll();;){Ke++,Xe?Xe=!1:A.matcher.considerAll(),A.matcher.lastIndex=ue;const w=A.matcher.exec(x);if(!w)break;const k=x.substring(ue,w.index),M=Ct(k,w);ue=w.index+M}Ct(x.substring(ue))}return K.finalize(),Ge=K.toHTML(),{language:m,value:Ge,relevance:Ae,illegal:!1,_emitter:K,_top:A}}catch(w){if(w.message&&w.message.includes("Illegal"))return{language:m,value:Ye(x),illegal:!0,relevance:0,_illegalBy:{message:w.message,index:ue,context:x.slice(ue-100,ue+100),mode:w.mode,resultSoFar:Ge},_emitter:K};if(o)return{language:m,value:Ye(x),illegal:!1,relevance:0,errorRaised:w,_emitter:K,_top:A};throw w}}function h(m){const x={value:Ye(m),illegal:!1,relevance:0,_top:a,_emitter:new i.__emitter(i)};return x._emitter.addText(m),x}function p(m,x){x=x||i.languages||Object.keys(t);const S=h(m),O=x.filter(H).filter(z).map(J=>g(J,m,!1));O.unshift(S);const P=O.sort((J,ne)=>{if(J.relevance!==ne.relevance)return ne.relevance-J.relevance;if(J.language&&ne.language){if(H(J.language).supersetOf===ne.language)return 1;if(H(ne.language).supersetOf===J.language)return-1}return 0}),[Z,re]=P,Re=Z;return Re.secondBest=re,Re}function b(m,x,S){const O=x&&n[x]||S;m.classList.add("hljs"),m.classList.add(`language-${O}`)}function v(m){let x=null;const S=d(m);if(l(S))return;if(j("before:highlightElement",{el:m,language:S}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(i.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),i.throwUnescapedHTML))throw new To("One of your code blocks includes unescaped HTML.",m.innerHTML);x=m;const O=x.textContent,P=S?f(O,{language:S,ignoreIllegals:!0}):p(O);m.innerHTML=P.value,m.dataset.highlighted="yes",b(m,S,P.language),m.result={language:P.language,re:P.relevance,relevance:P.relevance},P.secondBest&&(m.secondBest={language:P.secondBest.language,relevance:P.secondBest.relevance}),j("after:highlightElement",{el:m,result:P,text:O})}function T(m){i=Lt(i,m)}const _=()=>{y(),he("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function C(){y(),he("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let R=!1;function y(){if(document.readyState==="loading"){R=!0;return}document.querySelectorAll(i.cssSelector).forEach(v)}function N(){R&&y()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",N,!1);function E(m,x){let S=null;try{S=x(e)}catch(O){if(pe("Language definition for '{}' could not be registered.".replace("{}",m)),o)pe(O);else throw O;S=a}S.name||(S.name=m),t[m]=S,S.rawDefinition=x.bind(null,e),S.aliases&&W(S.aliases,{languageName:m})}function I(m){delete t[m];for(const x of Object.keys(n))n[x]===m&&delete n[x]}function U(){return Object.keys(t)}function H(m){return m=(m||"").toLowerCase(),t[m]||t[n[m]]}function W(m,{languageName:x}){typeof m=="string"&&(m=[m]),m.forEach(S=>{n[S.toLowerCase()]=x})}function z(m){const x=H(m);return x&&!x.disableAutodetect}function V(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=x=>{m["before:highlightBlock"](Object.assign({block:x.el},x))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=x=>{m["after:highlightBlock"](Object.assign({block:x.el},x))})}function G(m){V(m),s.push(m)}function L(m){const x=s.indexOf(m);x!==-1&&s.splice(x,1)}function j(m,x){const S=m;s.forEach(function(O){O[S]&&O[S](x)})}function D(m){return he("10.7.0","highlightBlock will be removed entirely in v12.0"),he("10.7.0","Please use highlightElement now."),v(m)}Object.assign(e,{highlight:f,highlightAuto:p,highlightAll:y,highlightElement:v,highlightBlock:D,configure:T,initHighlighting:_,initHighlightingOnLoad:C,registerLanguage:E,unregisterLanguage:I,listLanguages:U,getLanguage:H,registerAliases:W,autoDetection:z,inherit:Lt,addPlugin:G,removePlugin:L}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString=Bo,e.regex={concat:ge,lookahead:Qt,either:nt,optional:zs,anyNumberOfTimes:Ps};for(const m in je)typeof je[m]=="object"&&qt(je[m]);return Object.assign(e,je),e},ve=lr({});ve.newInstance=()=>lr({});var So=ve;ve.HighlightJS=ve;ve.default=ve;const at=Kr(So);function Eo(e){const t=e.regex,n=t.concat(/[\p{L}_]/u,t.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),s=/[\p{L}0-9._:-]+/u,o={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},c={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},a=e.inherit(c,{begin:/\(/,end:/\)/}),i=e.inherit(e.APOS_STRING_MODE,{className:"string"}),l=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),d={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:s,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[o]},{begin:/'/,end:/'/,contains:[o]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[c,l,i,a,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[c,a,l,i]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},o,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[l]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[d],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[d],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:t.concat(/</,t.lookahead(t.concat(n,t.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:d}]},{className:"tag",begin:t.concat(/<\//,t.lookahead(t.concat(n,/>/))),contains:[{className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const jt="[A-Za-z$_][0-9A-Za-z$_]*",Ro=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Lo=["true","false","null","undefined","NaN","Infinity"],cr=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],ur=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],dr=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Ao=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],jo=[].concat(dr,cr,ur);function Do(e){const t=e.regex,n=(x,{after:S})=>{const O="</"+x[0].slice(1);return x.input.indexOf(O,S)!==-1},s=jt,o={begin:"<>",end:"</>"},c=/<[A-Za-z0-9\\._:-]+\s*\/>/,a={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(x,S)=>{const O=x[0].length+x.index,P=x.input[O];if(P==="<"||P===","){S.ignoreMatch();return}P===">"&&(n(x,{after:O})||S.ignoreMatch());let Z;const re=x.input.substring(O);if(Z=re.match(/^\s*=/)){S.ignoreMatch();return}if((Z=re.match(/^\s+extends\s+/))&&Z.index===0){S.ignoreMatch();return}}},i={$pattern:jt,keyword:Ro,literal:Lo,built_in:jo,"variable.language":Ao},l="[0-9](_?[0-9])*",d=`\\.(${l})`,f="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",g={className:"number",variants:[{begin:`(\\b(${f})((${d})|\\.)?|(${d}))[eE][+-]?(${l})\\b`},{begin:`\\b(${f})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},p={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},b={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"css"}},v={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"graphql"}},T={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,h]},C={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:s+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},R=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,b,v,T,{match:/\$\d+/},g];h.contains=R.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(R)});const y=[].concat(C,h.contains),N=y.concat([{begin:/\(/,end:/\)/,keywords:i,contains:["self"].concat(y)}]),E={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:N},I={variants:[{match:[/class/,/\s+/,s,/\s+/,/extends/,/\s+/,t.concat(s,"(",t.concat(/\./,s),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,s],scope:{1:"keyword",3:"title.class"}}]},U={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...cr,...ur]}},H={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},W={variants:[{match:[/function/,/\s+/,s,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[E],illegal:/%/},z={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function V(x){return t.concat("(?!",x.join("|"),")")}const G={match:t.concat(/\b/,V([...dr,"super","import"]),s,t.lookahead(/\(/)),className:"title.function",relevance:0},L={begin:t.concat(/\./,t.lookahead(t.concat(s,/(?![0-9A-Za-z$_(])/))),end:s,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},j={match:[/get|set/,/\s+/,s,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},E]},D="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",m={match:[/const|var|let/,/\s+/,s,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(D)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[E]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:N,CLASS_REFERENCE:U},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),H,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,b,v,T,C,{match:/\$\d+/},g,U,{className:"attr",begin:s+t.lookahead(":"),relevance:0},m,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[C,e.REGEXP_MODE,{className:"function",begin:D,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:N}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:o.begin,end:o.end},{match:c},{begin:a.begin,"on:begin":a.isTrulyOpeningTag,end:a.end}],subLanguage:"xml",contains:[{begin:a.begin,end:a.end,skip:!0,contains:["self"]}]}]},W,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[E,e.inherit(e.TITLE_MODE,{begin:s,className:"title.function"})]},{match:/\.\.\./,relevance:0},L,{match:"\\$"+s,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[E]},G,z,I,j,{match:/\$[(.]/}]}}at.registerLanguage("xml",Eo);at.registerLanguage("javascript",Do);function Ll({language:e="javascript",name:t,children:n}){const s=u.useRef(null),[o,c]=u.useState(!1),[a,i]=u.useState(""),l=Object.assign({"../../../packages/Alert/_example/AlertBasic.tsx":Yr,"../../../packages/Alert/_example/AlertCenter.tsx":Zr,"../../../packages/Alert/_example/AlertClose.tsx":qr,"../../../packages/Alert/_example/AlertDescription.tsx":Jr,"../../../packages/Alert/_example/AlertEffect.tsx":Qr,"../../../packages/Alert/_example/AlertIconDescription.tsx":en,"../../../packages/Alert/_example/AlertShowIcon.tsx":tn,"../../../packages/Avatar/_example/AvatarBasic.tsx":rn,"../../../packages/Avatar/_example/AvatarError.tsx":nn,"../../../packages/Avatar/_example/AvatarFit.tsx":sn,"../../../packages/Avatar/_example/AvatarType.tsx":on,"../../../packages/Badge/_example/BadgeBasic.tsx":an,"../../../packages/Badge/_example/BadgeIsDot.tsx":ln,"../../../packages/Badge/_example/BadgeMax.tsx":cn,"../../../packages/Badge/_example/BadgeValue.tsx":un,"../../../packages/Button/_example/ButtonBasic.tsx":dn,"../../../packages/Button/_example/ButtonDisabled.tsx":pn,"../../../packages/Button/_example/ButtonLink.tsx":fn,"../../../packages/Button/_example/ButtonText.tsx":mn,"../../../packages/Collapse/_example/CollapseBasic.tsx":gn,"../../../packages/Container/_example/ContainerBasic.tsx":hn,"../../../packages/Container/_example/ContainerBasic1.tsx":xn,"../../../packages/Container/_example/ContainerBasic2.tsx":bn,"../../../packages/Container/_example/ContainerBasic3.tsx":vn,"../../../packages/Container/_example/ContainerBasic4.tsx":_n,"../../../packages/Container/_example/ContainerBasic5.tsx":wn,"../../../packages/Container/_example/ContainerBasic6.tsx":yn,"../../../packages/Dialog/_example/DialogBasic.tsx":Cn,"../../../packages/Dialog/_example/DialogContent.tsx":Nn,"../../../packages/Dialog/_example/DialogHeader.tsx":Bn,"../../../packages/Divider/_example/DividerBasic.tsx":Tn,"../../../packages/Divider/_example/DividerBorder.tsx":kn,"../../../packages/Divider/_example/DividerContent.tsx":Sn,"../../../packages/Divider/_example/DividerDirection.tsx":En,"../../../packages/Drawer/_example/DrawerBasic.tsx":Rn,"../../../packages/Drawer/_example/DrawerContent.tsx":Ln,"../../../packages/Drawer/_example/DrawerHeader.tsx":An,"../../../packages/Drawer/_example/DrawerWIthHeader.tsx":jn,"../../../packages/Icon/_example/IconBasic.tsx":Dn,"../../../packages/Layout/_example/LayoutBasic.tsx":Mn,"../../../packages/Layout/_example/LayoutBootstrap.tsx":In,"../../../packages/Layout/_example/LayoutGutter.tsx":On,"../../../packages/Layout/_example/LayoutJustify.tsx":Fn,"../../../packages/Layout/_example/LayoutMix.tsx":Pn,"../../../packages/Layout/_example/LayoutOffset.tsx":zn,"../../../packages/Link/_example/LinkBasic.tsx":Hn,"../../../packages/Link/_example/LinkDisabled.tsx":$n,"../../../packages/Link/_example/LinkIcon.tsx":Un,"../../../packages/Link/_example/LinkUnderline.tsx":Vn,"../../../packages/MessageBox/_example/MessageBoxBasic.tsx":Wn,"../../../packages/MessageBox/_example/MessageBoxConfirm.tsx":Gn,"../../../packages/MessageBox/_example/MessageBoxMessage.tsx":Kn,"../../../packages/Popconfirm/_example/PopconfirmBasic.tsx":Xn,"../../../packages/Popconfirm/_example/PopconfirmEvent.tsx":Yn,"../../../packages/Popconfirm/_example/PopconfirmIcon.tsx":Zn,"../../../packages/Popover/_example/PopoverBasic.tsx":qn,"../../../packages/Progress/_example/ProgressBasic.tsx":Jn,"../../../packages/Progress/_example/ProgressTextInside.tsx":Qn,"../../../packages/Rate/_example/RateBasic.tsx":es,"../../../packages/Result/_example/ResultBasic.tsx":ts,"../../../packages/Result/_example/ResultIcon.tsx":rs,"../../../packages/Scrollbar/_example/ScrollbarBasic.tsx":ns,"../../../packages/Space/_example/SpaceAlignment.tsx":ss,"../../../packages/Space/_example/SpaceBasic.tsx":os,"../../../packages/Space/_example/SpaceDirection.tsx":as,"../../../packages/Space/_example/SpaceSize.tsx":is,"../../../packages/Space/_example/SpaceSize2.tsx":ls,"../../../packages/Space/_example/SpaceSpacer.tsx":cs,"../../../packages/Space/_example/SpaceSpacer2.tsx":us,"../../../packages/Space/_example/SpaceWrap.tsx":ds,"../../../packages/Switch/_example/SwitchActionIcon.tsx":ps,"../../../packages/Switch/_example/SwitchBasic.tsx":fs,"../../../packages/Switch/_example/SwitchBeforeChange.tsx":ms,"../../../packages/Switch/_example/SwitchDisabled.tsx":gs,"../../../packages/Switch/_example/SwitchIcon.tsx":hs,"../../../packages/Switch/_example/SwitchLoading.tsx":xs,"../../../packages/Switch/_example/SwitchSize.tsx":bs,"../../../packages/Switch/_example/SwitchText.tsx":vs,"../../../packages/Table/_example/TableBasic.tsx":_s,"../../../packages/Table/_example/TableBorder.tsx":ws,"../../../packages/Table/_example/TableStripe.tsx":ys,"../../../packages/Tag/_example/TagBasic.tsx":Cs,"../../../packages/Tag/_example/TagClosable.tsx":Ns,"../../../packages/Tag/_example/TagEffect.tsx":Bs,"../../../packages/Tag/_example/TagRound.tsx":Ts,"../../../packages/Tag/_example/TagSize.tsx":ks,"../../../packages/Text/_example/TextBasic.tsx":Ss,"../../../packages/Text/_example/TextSize.tsx":Es,"../../../packages/Text/_example/TextTruncated.tsx":Rs,"../../../packages/Tooltip/_example/TooltipBasic.tsx":Ls,"../../../packages/Tooltip/_example/TooltipContent.tsx":As,"../../../packages/Tooltip/_example/TooltipDisabled.tsx":js,"../../../packages/Tooltip/_example/TooltipEffect.tsx":Ds});let d={display:o?"":"none"};u.useEffect(()=>{s.current&&(Object.keys(l).forEach(g=>{g.indexOf(t)!==-1&&i(l[g])}),setTimeout(()=>{at.highlightElement(s.current)},0))},[t]);function f(){c(!o)}return r.jsx(r.Fragment,{children:r.jsxs("div",{className:"code-block",children:[r.jsx("div",{className:"code-block-component",children:n}),r.jsx("div",{className:"op-btns",children:r.jsx("button",{onClick:f,className:"reset-btn el-icon op-btn el-tooltip__trigger el-tooltip__trigger",children:r.jsx("i",{className:"el-icon",style:{fontSize:"16px"},children:r.jsx("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em","data-v-5d9e4641":"",children:r.jsx("path",{fill:"currentColor",d:"m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"})})})})}),r.jsx("div",{className:"code-block-wrapper",style:d,children:r.jsx("div",{className:"code-block-pre language-react",children:r.jsx("pre",{children:r.jsx("code",{id:e,ref:s,className:e,children:a})})})})]})})}function pr(e){var t,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=pr(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function B(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=pr(e))&&(s&&(s+=" "),s+=t);return s}const Mo=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},u.createElement("path",{fill:"currentColor",d:"M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"}),u.createElement("path",{fill:"currentColor",d:"m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"})),Io=(e,t)=>{const{style:n,className:s,onClick:o}=e;return r.jsx("i",{ref:t,style:n,className:B(s,"el-icon"),onClick:o,children:r.jsx(Mo,{})})},Oo=u.forwardRef(Io);Oo.displayName="Edit";const Fo=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},u.createElement("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"})),Po=(e,t)=>{const{style:n,className:s,onClick:o}=e;return r.jsx("i",{ref:t,style:n,className:B(s,"el-icon"),onClick:o,children:r.jsx(Fo,{})})},zo=u.forwardRef(Po);zo.displayName="Search";const Ho=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},u.createElement("path",{fill:"currentColor",d:"M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"})),$o=(e,t)=>{const{style:n,className:s,onClick:o}=e;return r.jsx("i",{ref:t,style:n,className:B(s,"el-icon"),onClick:o,children:r.jsx(Ho,{})})},Uo=u.forwardRef($o);Uo.displayName="Check";const Vo=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},u.createElement("path",{fill:"currentColor",d:"M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64"}),u.createElement("path",{fill:"currentColor",d:"M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056"})),Wo=(e,t)=>{const{style:n,className:s,onClick:o}=e;return r.jsx("i",{ref:t,style:n,className:B(s,"el-icon"),onClick:o,children:r.jsx(Vo,{})})},Go=u.forwardRef(Wo);Go.displayName="Message";const Ko=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},u.createElement("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})),Xo=(e,t)=>{const{style:n,className:s,onClick:o}=e;return r.jsx("i",{ref:t,style:n,className:B(s,"el-icon"),onClick:o,children:r.jsx(Ko,{})})},Yo=u.forwardRef(Xo);Yo.displayName="Star";const Zo=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},u.createElement("path",{fill:"currentColor",d:"M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"})),qo=(e,t)=>{const{style:n,className:s,onClick:o}=e;return r.jsx("i",{ref:t,style:n,className:B(s,"el-icon"),onClick:o,children:r.jsx(Zo,{})})},Jo=u.forwardRef(qo);Jo.displayName="Delete";const Qo=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},u.createElement("path",{fill:"currentColor",d:"M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"})),ea=(e,t)=>{const{style:n,className:s,onClick:o}=e;return r.jsx("i",{ref:t,style:n,className:B(s,"el-icon"),onClick:o,children:r.jsx(Qo,{})})},ta=u.forwardRef(ea);ta.displayName="View";const ra=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},u.createElement("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})),na=(e,t)=>{const{style:n,className:s,onClick:o}=e;return r.jsx("i",{ref:t,style:n,className:B(s,"el-icon"),onClick:o,children:r.jsx(ra,{})})},sa=u.forwardRef(na);sa.displayName="StarFilled";const oa=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},u.createElement("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"})),aa=(e,t)=>{const{style:n,className:s,onClick:o}=e;return r.jsx("i",{ref:t,style:n,className:B(s,"el-icon"),onClick:o,children:r.jsx(oa,{})})},ye=u.forwardRef(aa);ye.displayName="Close";const ia=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},u.createElement("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"})),la=(e,t)=>{const{style:n,className:s,onClick:o}=e;return r.jsx("i",{ref:t,style:n,className:B(s,"el-icon"),onClick:o,children:r.jsx(ia,{})})},fr=u.forwardRef(la);fr.displayName="Loading";const ca=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},u.createElement("path",{fill:"currentColor",d:"M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"}),u.createElement("path",{fill:"currentColor",d:"M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"})),ua=(e,t)=>{const{style:n,className:s,onClick:o}=e;return r.jsx("i",{ref:t,style:n,className:B(s,"el-icon"),onClick:o,children:r.jsx(ca,{})})},da=u.forwardRef(ua);da.displayName="Hide";const pa=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},u.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"})),fa=(e,t)=>{const{style:n,className:s,onClick:o}=e;return r.jsx("i",{ref:t,style:n,className:B(s,"el-icon"),onClick:o,children:r.jsx(pa,{})})},it=u.forwardRef(fa);it.displayName="InfoFilled";const ma=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},u.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"})),ga=(e,t)=>{const{style:n,className:s,onClick:o}=e;return r.jsx("i",{ref:t,style:n,className:B(s,"el-icon"),onClick:o,children:r.jsx(ma,{})})},$e=u.forwardRef(ga);$e.displayName="WarningFilled";const ha=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},u.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"})),xa=(e,t)=>{const{style:n,className:s,onClick:o}=e;return r.jsx("i",{ref:t,style:n,className:B(s,"el-icon"),onClick:o,children:r.jsx(ha,{})})},Ue=u.forwardRef(xa);Ue.displayName="CircleCloseFilled";const ba=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},u.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"})),va=(e,t)=>{const{style:n,className:s,onClick:o}=e;return r.jsx("i",{ref:t,style:n,className:B(s,"el-icon"),onClick:o,children:r.jsx(ba,{})})},lt=u.forwardRef(va);lt.displayName="CircleCheckFilled";const _a=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},u.createElement("path",{fill:"currentColor",d:"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"})),wa=(e,t)=>{const{style:n,className:s}=e;return r.jsx("i",{ref:t,style:n,className:B("el-icon",s),children:r.jsx(_a,{})})},mr=u.forwardRef(wa);mr.displayName="ArrowRight";const ya=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},u.createElement("path",{fill:"currentColor",d:"M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"})),Ca=(e,t)=>{const{style:n,className:s,onClick:o}=e;return r.jsx("i",{ref:t,style:n,className:B("el-icon",s),onClick:o,children:r.jsx(ya,{})})},Na=u.forwardRef(Ca);Na.displayName="UserFilled";const Ba=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},u.createElement("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"}),u.createElement("path",{fill:"currentColor",d:"M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"})),Ta=(e,t)=>{const{style:n,className:s,onClick:o}=e;return r.jsx("i",{ref:t,style:n,className:B("el-icon",s),onClick:o,children:r.jsx(Ba,{})})},gr=u.forwardRef(Ta);gr.displayName="CircleCheck";const ka=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},u.createElement("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"})),Sa=(e,t)=>{const{style:n,className:s}=e;return r.jsx("i",{ref:t,style:n,className:B("el-icon",s),children:r.jsx(ka,{})})},hr=u.forwardRef(Sa);hr.displayName="QuestionFilled";const Ea=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e},u.createElement("path",{fill:"currentColor",d:"m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"})),Ra=(e,t)=>{const{style:n,className:s}=e;return r.jsx("i",{ref:t,style:n,className:B("el-icon",s),children:r.jsx(Ea,{})})},La=u.forwardRef(Ra);La.displayName="Share";const Aa=(e,t)=>{const{className:n,style:s,children:o,type:c,plain:a=!1,round:i=!1,circle:l=!1,disabled:d=!1,link:f=!1,text:g=!1,bg:h=!1,icon:p,...b}=e,v=p?r.jsx(r.Fragment,{children:p}):r.jsx(r.Fragment,{});return r.jsxs("button",{ref:t,style:s,disabled:d,...b,className:B(n,"el-button",c?`el-button--${c}`:"",a?"is-plain":"",i?"is-round":"",l?"is-circle":"",d?"is-disabled":"",f?"is-link":"",g?"is-text":"",h?"is-has-bg":""),children:[v,o]})},Qe=u.forwardRef(Aa);Qe.displayName="Button";const ja=(e,t)=>{const{style:n,className:s,children:o,direction:c}=e,a=()=>c==="vertical"?!0:c==="horizontal"?!1:o?o.some(i=>{const l=i.props.children;return l==="Header"||l==="Footer"}):!1;return r.jsx("section",{ref:t,style:n,className:B(s,"el-container",a()?"is-vertical":""),children:o})},Da=u.forwardRef(ja);Da.displayName="Container";const Ma=(e,t)=>{const{style:n,className:s,children:o,height:c}=e,a={...n,"--el-header-height":c};return r.jsx("header",{ref:t,style:a,className:B(s,"el-header"),children:o})},Ia=u.forwardRef(Ma);Ia.displayName="Head";const Oa=(e,t)=>{const{style:n,className:s,children:o}=e;return r.jsx("main",{ref:t,style:n,className:B(s,"el-main"),children:o})},Fa=u.forwardRef(Oa);Fa.displayName="Main";const Pa=(e,t)=>{const{style:n,className:s,children:o,height:c}=e,a={...n,"--el-footer-height":c};return r.jsx("footer",{ref:t,style:a,className:B(s,"el-footer"),children:o})},za=u.forwardRef(Pa);za.displayName="Footer";const Ha=(e,t)=>{const{style:n,className:s,children:o,width:c=200}=e,a={...n,"--el-aside-width":c};return r.jsx("aside",{ref:t,style:a,className:B(s,"el-aside"),children:o})},$a=u.forwardRef(Ha);$a.displayName="Aside";const xr=u.createContext({}),Ua=(e,t)=>{const{style:n,className:s,children:o,gutter:c=0,justify:a}=e,i={marginLeft:`-${c/2}px`,marginRight:`-${c/2}px`,...n},l=u.useMemo(()=>({gutter:c}),[c]);return r.jsx(xr.Provider,{value:l,children:r.jsx("div",{ref:t,style:i,className:B(s,"el-row",a?`is-justify-${a}`:""),children:o})})},Va=u.forwardRef(Ua);Va.displayName="Row";const Wa=(e,t)=>{const{style:n,className:s,children:o,span:c=24,offset:a,xs:i,sm:l,md:d,lg:f,xl:g}=e,{gutter:h}=u.useContext(xr),p={paddingLeft:`${h/2}px`,paddingRight:`${h/2}px`,...n};return r.jsx("div",{ref:t,style:p,className:B(s,"el-col",c?`el-col-${c}`:"",h?"is-guttered":"",a?`el-col-offset-${a}`:"",i?`el-col-xs-${i}`:"",l?`el-col-sm-${l}`:"",d?`el-col-md-${d}`:"",f?`el-col-lg-${f}`:"",g?`el-col-xl-${g}`:""),children:o})},Ga=u.forwardRef(Wa);Ga.displayName="Col";const Ka=(e,t)=>{const{style:n,className:s,children:o,type:c,href:a,target:i,disabled:l=!1,underline:d=!0,icon:f}=e,g=f?r.jsx(r.Fragment,{children:f}):r.jsx(r.Fragment,{});return r.jsxs("a",{ref:t,style:n,className:B(s,"el-link",c?`el-link--${c}`:"el-link--default",l?"is-disabled":"",d?"is-underline":""),href:l||!a?void 0:a,target:i||void 0,children:[g,r.jsx("span",{className:"el-link__inner",children:o})]})},Xa=u.forwardRef(Ka);Xa.displayName="Link";const Ya=(e,t)=>{const{style:n,className:s,children:o,type:c,size:a,truncated:i=!1,lineClamp:l}=e,d={WebkitLineClamp:l,...n};return r.jsx("span",{ref:t,style:d,className:B(s,"el-text",c?`el-text--${c}`:"",a?`el-text--${a}`:"",i?"is-truncated":"",l?"is-line-clamp":""),children:o})},Za=u.forwardRef(Ya);Za.displayName="Text";const qa=(e,t)=>{const{style:n,className:s,children:o,contentPosition:c="center",borderStyle:a="solid",direction:i="horizontal"}=e,l={"--el-border-style":a,...n},d=o?r.jsx(r.Fragment,{children:r.jsx("div",{className:B("el-divider__text",`is-${c}`),children:o})}):r.jsx(r.Fragment,{});return r.jsx("div",{ref:t,style:l,className:B(s,"el-divider",`el-divider--${i}`),children:d})},Ja=u.forwardRef(qa);Ja.displayName="Divider";const Qa=(e,t)=>{const{style:n,className:s,defaultChecked:o=!1,size:c,inactiveText:a,activeText:i,inlinePrompt:l=!1,width:d,activeIcon:f,inactiveIcon:g,disabled:h=!1,loading:p=!1,beforeChange:b,activeActionIcon:v,inactiveActionIcon:T}=e,[_,C]=u.useState(o);function R(){if(h||p)return;if(!b){y();return}const z=b();z instanceof Promise&&z.then(V=>{V&&y()})}function y(){C(!_)}function N(){return g?r.jsx(r.Fragment,{children:g}):r.jsx(r.Fragment,{children:r.jsx("span",{children:a})})}function E(){return(a||g)&&!l?r.jsx(r.Fragment,{children:r.jsx("span",{className:B("el-switch__label el-switch__label--left",_?"":"is-active"),children:r.jsx(N,{})})}):r.jsx(r.Fragment,{})}function I(){return f?r.jsx(r.Fragment,{children:f}):r.jsx(r.Fragment,{children:r.jsx("span",{children:f})})}function U(){return(i||f)&&!l?r.jsx(r.Fragment,{children:r.jsx("span",{className:B("el-switch__label el-switch__label--right",_?"is-active":""),children:r.jsx(I,{})})}):r.jsx(r.Fragment,{})}function H(){return l&&(f||g)?r.jsx(r.Fragment,{children:r.jsx("div",{className:"el-switch__inner",children:_?f:g})}):l?r.jsx(r.Fragment,{children:r.jsx("div",{className:"el-switch__inner",children:r.jsx("span",{className:"is-text",children:_?i:a})})}):r.jsx(r.Fragment,{})}function W(){return p?r.jsx(r.Fragment,{children:r.jsx(fr,{className:"is-loading"})}):v&&_?r.jsx(r.Fragment,{children:v}):T&&!_?r.jsx(r.Fragment,{children:T}):r.jsx(r.Fragment,{})}return r.jsxs("div",{ref:t,style:n,className:B(s,"el-switch",_?"is-checked":"",c?`el-switch--${c}`:"",{"is-disabled":h||p}),onClick:R,children:[r.jsx("input",{className:"el-switch__input",type:"checkbox",role:"switch",name:"","true-value":"true","false-value":"false",disabled:h||p}),r.jsx(E,{}),r.jsxs("span",{className:"el-switch__core",style:{width:`${d}px`},children:[r.jsx(H,{}),r.jsx("div",{className:"el-switch__action",children:r.jsx(W,{})})]}),r.jsx(U,{})]})},ei=u.forwardRef(Qa);ei.displayName="Switch";const ti=(e,t)=>{const{style:n,className:s,type:o="info",title:c,effect:a="light",closable:i=!0,closeText:l,close:d,showIcon:f=!1,center:g=!1,description:h}=e,[p,b]=u.useState(!0);function v(){if(!f)return r.jsx(r.Fragment,{});let y=r.jsx(r.Fragment,{});switch(o){case"success":y=r.jsx(r.Fragment,{children:r.jsx(lt,{className:B("el-alert__icon",{"is-big":h})})});break;case"info":y=r.jsx(r.Fragment,{children:r.jsx(it,{className:B("el-alert__icon",{"is-big":h})})});break;case"warning":y=r.jsx(r.Fragment,{children:r.jsx($e,{className:B("el-alert__icon",{"is-big":h})})});break;case"error":y=r.jsx(r.Fragment,{children:r.jsx(Ue,{className:B("el-alert__icon",{"is-big":h})})});break}return y}function T(){return h?r.jsx(r.Fragment,{children:r.jsx("p",{className:"el-alert__description",children:h})}):r.jsx(r.Fragment,{})}function _(){d&&d(),b(!1)}const C={display:p?"":"none",...n};function R(){return i?l?r.jsx(r.Fragment,{children:r.jsx("div",{className:"el-alert__close-btn is-customed",onClick:_,children:l})}):r.jsx(r.Fragment,{children:r.jsx(ye,{className:"el-alert__close-btn",onClick:_})}):r.jsx(r.Fragment,{})}return r.jsxs("div",{ref:t,style:C,className:B("el-alert",`el-alert--${o}`,`is-${a}`,{"is-center":g},s),role:"alert",children:[r.jsx(v,{}),r.jsxs("div",{className:"el-alert__content",children:[r.jsx("span",{className:B("el-alert__title",{"is-bold":h}),children:c}),r.jsx(T,{}),r.jsx(R,{})]})]})},ri=u.forwardRef(ti);ri.displayName="Alert";const ni=u.createContext({}),si=(e,t)=>{const{style:n,className:s,children:o,activeName:c}=e,a=u.useMemo(()=>({activeName:c}),[c]);return r.jsx(ni.Provider,{value:a,children:r.jsx("div",{ref:t,style:n,className:B(s,"el-collapse"),children:o})})},oi=u.forwardRef(si);oi.displayName="Collapse";const ai=(e,t)=>{const{style:n,className:s,children:o,title:c}=e,[a,i]=u.useState(!1);function l(){i(!a)}return r.jsxs("div",{ref:t,style:n,className:B(s,"el-collapse-item",{"is-active":a}),onClick:l,children:[r.jsxs("button",{className:B("el-collapse-item__header",{"is-active":a}),type:"button",children:[c,r.jsx(mr,{className:"el-collapse-item__arrow"})]}),r.jsx("div",{role:"region",className:"el-collapse-item__wrap",style:{display:a?"":"none"},children:r.jsx("div",{className:"el-collapse-item__content",children:o})})]})},ii=u.forwardRef(ai);ii.displayName="CollapseItem";const li=(e,t)=>{const{style:n,className:s,shape:o="circle",size:c,src:a,icon:i,fit:l="cover",onError:d,children:f}=e,g={...n,"--el-avatar-size":c&&typeof c=="number"?`${c}px`:""},[h,p]=u.useState(!0);function b(){const _=new Image(0,0);a&&(_.src=a),_.onload=()=>{p(!0)},_.onerror=C=>{C instanceof Event&&(C.preventDefault(),C.stopPropagation()),p(!1),d&&d()}}function v(){return h?r.jsx("img",{src:a,style:{objectFit:l}}):r.jsx(r.Fragment,{children:f})}function T(){return i?r.jsx(r.Fragment,{children:i}):a?(b(),r.jsx(r.Fragment,{children:r.jsx(v,{})})):r.jsx(r.Fragment,{children:f})}return r.jsx("span",{ref:t,style:g,className:B(s,"el-avatar",`el-avatar--${o}`,c?`el-avatar--${c}`:"",{"el-avatar--icon":i}),children:r.jsx(T,{})})},ci=u.forwardRef(li);ci.displayName="Avatar";const ui=(e,t)=>{const{style:n,className:s,icon:o="info",title:c,subTitle:a,extra:i}=e;function l(){if(typeof o=="string"){let d=r.jsx(r.Fragment,{});switch(o){case"success":d=r.jsx(r.Fragment,{children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-success",children:r.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"})})});break;case"warning":d=r.jsx(r.Fragment,{children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-warning",children:r.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"})})});break;case"info":d=r.jsx(r.Fragment,{children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-error",children:r.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"})})});break;case"error":d=r.jsx(r.Fragment,{children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"icon-info",children:r.jsx("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"})})});break}return d}else return r.jsx(r.Fragment,{children:o})}return r.jsxs("div",{ref:t,style:n,className:B("el-result",s),children:[r.jsx("div",{className:"el-result__icon",children:r.jsx(l,{})}),r.jsx("div",{className:"el-result__title",children:r.jsx("p",{children:c})}),r.jsx("div",{className:"el-result__subtitle",children:r.jsx("p",{children:a})}),r.jsx("div",{className:"el-result__extra",children:i})]})},di=u.forwardRef(ui);di.displayName="Result";function le(e){return br(e)?(e.nodeName||"").toLowerCase():"#document"}function q(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ae(e){var t;return(t=(br(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function br(e){return e instanceof Node||e instanceof q(e).Node}function X(e){return e instanceof Element||e instanceof q(e).Element}function ee(e){return e instanceof HTMLElement||e instanceof q(e).HTMLElement}function et(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof q(e).ShadowRoot}function Ee(e){const{overflow:t,overflowX:n,overflowY:s,display:o}=te(e);return/auto|scroll|overlay|hidden|clip/.test(t+s+n)&&!["inline","contents"].includes(o)}function pi(e){return["table","td","th"].includes(le(e))}function ct(e){const t=ut(),n=te(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(s=>(n.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(n.contain||"").includes(s))}function fi(e){let t=_e(e);for(;ee(t)&&!Ve(t);){if(ct(t))return t;t=_e(t)}return null}function ut(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ve(e){return["html","body","#document"].includes(le(e))}function te(e){return q(e).getComputedStyle(e)}function We(e){return X(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function _e(e){if(le(e)==="html")return e;const t=e.assignedSlot||e.parentNode||et(e)&&e.host||ae(e);return et(t)?t.host:t}function vr(e){const t=_e(e);return Ve(t)?e.ownerDocument?e.ownerDocument.body:e.body:ee(t)&&Ee(t)?t:vr(t)}function Te(e,t,n){var s;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=vr(e),c=o===((s=e.ownerDocument)==null?void 0:s.body),a=q(o);return c?t.concat(a,a.visualViewport||[],Ee(o)?o:[],a.frameElement&&n?Te(a.frameElement):[]):t.concat(o,Te(o,[],n))}function Dt(e){let t=e.activeElement;for(;((n=t)==null||(n=n.shadowRoot)==null?void 0:n.activeElement)!=null;){var n;t=t.shadowRoot.activeElement}return t}function tt(e,t){if(!e||!t)return!1;const n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&et(n)){let s=t;for(;s;){if(e===s)return!0;s=s.parentNode||s.host}}return!1}function _r(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function mi(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:s}=t;return n+"/"+s}).join(" "):navigator.userAgent}function gi(e){return!Mt()&&e.width===0&&e.height===0||Mt()&&e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0&&e.pointerType==="touch"}function hi(){return/apple/i.test(navigator.vendor)}function Mt(){const e=/android/i;return e.test(_r())||e.test(mi())}function xi(){return _r().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function Oe(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function Ce(e){return(e==null?void 0:e.ownerDocument)||document}function bi(e){return"composedPath"in e?e.composedPath()[0]:e.target}const vi="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function wr(e){return ee(e)&&e.matches(vi)}const we=Math.min,fe=Math.max,Fe=Math.round,De=Math.floor,ce=e=>({x:e,y:e});function _i(e,t,n){return fe(e,we(t,n))}function yr(e,t){return typeof e=="function"?e(t):e}function dt(e){return e.split("-")[0]}function pt(e){return e.split("-")[1]}function wi(e){return e==="x"?"y":"x"}function Cr(e){return e==="y"?"height":"width"}function ft(e){return["top","bottom"].includes(dt(e))?"y":"x"}function Nr(e){return wi(ft(e))}function yi(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ci(e){return typeof e!="number"?yi(e):{top:e,right:e,bottom:e,left:e}}function Br(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function It(e,t,n){let{reference:s,floating:o}=e;const c=ft(t),a=Nr(t),i=Cr(a),l=dt(t),d=c==="y",f=s.x+s.width/2-o.width/2,g=s.y+s.height/2-o.height/2,h=s[i]/2-o[i]/2;let p;switch(l){case"top":p={x:f,y:s.y-o.height};break;case"bottom":p={x:f,y:s.y+s.height};break;case"right":p={x:s.x+s.width,y:g};break;case"left":p={x:s.x-o.width,y:g};break;default:p={x:s.x,y:s.y}}switch(pt(t)){case"start":p[a]-=h*(n&&d?-1:1);break;case"end":p[a]+=h*(n&&d?-1:1);break}return p}const Ni=async(e,t,n)=>{const{placement:s="bottom",strategy:o="absolute",middleware:c=[],platform:a}=n,i=c.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(t));let d=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:f,y:g}=It(d,s,l),h=s,p={},b=0;for(let v=0;v<i.length;v++){const{name:T,fn:_}=i[v],{x:C,y:R,data:y,reset:N}=await _({x:f,y:g,initialPlacement:s,placement:h,strategy:o,middlewareData:p,rects:d,platform:a,elements:{reference:e,floating:t}});if(f=C??f,g=R??g,p={...p,[T]:{...p[T],...y}},N&&b<=50){b++,typeof N=="object"&&(N.placement&&(h=N.placement),N.rects&&(d=N.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:o}):N.rects),{x:f,y:g}=It(d,h,l)),v=-1;continue}}return{x:f,y:g,placement:h,strategy:o,middlewareData:p}},Bi=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:s,placement:o,rects:c,platform:a,elements:i,middlewareData:l}=t,{element:d,padding:f=0}=yr(e,t)||{};if(d==null)return{};const g=Ci(f),h={x:n,y:s},p=Nr(o),b=Cr(p),v=await a.getDimensions(d),T=p==="y",_=T?"top":"left",C=T?"bottom":"right",R=T?"clientHeight":"clientWidth",y=c.reference[b]+c.reference[p]-h[p]-c.floating[b],N=h[p]-c.reference[p],E=await(a.getOffsetParent==null?void 0:a.getOffsetParent(d));let I=E?E[R]:0;(!I||!await(a.isElement==null?void 0:a.isElement(E)))&&(I=i.floating[R]||c.floating[b]);const U=y/2-N/2,H=I/2-v[b]/2-1,W=we(g[_],H),z=we(g[C],H),V=W,G=I-v[b]-z,L=I/2-v[b]/2+U,j=_i(V,L,G),D=!l.arrow&&pt(o)!=null&&L!=j&&c.reference[b]/2-(L<V?W:z)-v[b]/2<0,m=D?L<V?L-V:L-G:0;return{[p]:h[p]+m,data:{[p]:j,centerOffset:L-j-m,...D&&{alignmentOffset:m}},reset:D}}});async function Ti(e,t){const{placement:n,platform:s,elements:o}=e,c=await(s.isRTL==null?void 0:s.isRTL(o.floating)),a=dt(n),i=pt(n),l=ft(n)==="y",d=["left","top"].includes(a)?-1:1,f=c&&l?-1:1,g=yr(t,e);let{mainAxis:h,crossAxis:p,alignmentAxis:b}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return i&&typeof b=="number"&&(p=i==="end"?b*-1:b),l?{x:p*f,y:h*d}:{x:h*d,y:p*f}}const mt=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,s;const{x:o,y:c,placement:a,middlewareData:i}=t,l=await Ti(t,e);return a===((n=i.offset)==null?void 0:n.placement)&&(s=i.arrow)!=null&&s.alignmentOffset?{}:{x:o+l.x,y:c+l.y,data:{...l,placement:a}}}}};function Tr(e){const t=te(e);let n=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const o=ee(e),c=o?e.offsetWidth:n,a=o?e.offsetHeight:s,i=Fe(n)!==c||Fe(s)!==a;return i&&(n=c,s=a),{width:n,height:s,$:i}}function gt(e){return X(e)?e:e.contextElement}function be(e){const t=gt(e);if(!ee(t))return ce(1);const n=t.getBoundingClientRect(),{width:s,height:o,$:c}=Tr(t);let a=(c?Fe(n.width):n.width)/s,i=(c?Fe(n.height):n.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!i||!Number.isFinite(i))&&(i=1),{x:a,y:i}}const ki=ce(0);function kr(e){const t=q(e);return!ut()||!t.visualViewport?ki:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Si(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==q(e)?!1:t}function me(e,t,n,s){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),c=gt(e);let a=ce(1);t&&(s?X(s)&&(a=be(s)):a=be(e));const i=Si(c,n,s)?kr(c):ce(0);let l=(o.left+i.x)/a.x,d=(o.top+i.y)/a.y,f=o.width/a.x,g=o.height/a.y;if(c){const h=q(c),p=s&&X(s)?q(s):s;let b=h.frameElement;for(;b&&s&&p!==h;){const v=be(b),T=b.getBoundingClientRect(),_=te(b),C=T.left+(b.clientLeft+parseFloat(_.paddingLeft))*v.x,R=T.top+(b.clientTop+parseFloat(_.paddingTop))*v.y;l*=v.x,d*=v.y,f*=v.x,g*=v.y,l+=C,d+=R,b=q(b).frameElement}}return Br({width:f,height:g,x:l,y:d})}function Ei(e){let{rect:t,offsetParent:n,strategy:s}=e;const o=ee(n),c=ae(n);if(n===c)return t;let a={scrollLeft:0,scrollTop:0},i=ce(1);const l=ce(0);if((o||!o&&s!=="fixed")&&((le(n)!=="body"||Ee(c))&&(a=We(n)),ee(n))){const d=me(n);i=be(n),l.x=d.x+n.clientLeft,l.y=d.y+n.clientTop}return{width:t.width*i.x,height:t.height*i.y,x:t.x*i.x-a.scrollLeft*i.x+l.x,y:t.y*i.y-a.scrollTop*i.y+l.y}}function Ri(e){return Array.from(e.getClientRects())}function Sr(e){return me(ae(e)).left+We(e).scrollLeft}function Li(e){const t=ae(e),n=We(e),s=e.ownerDocument.body,o=fe(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),c=fe(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let a=-n.scrollLeft+Sr(e);const i=-n.scrollTop;return te(s).direction==="rtl"&&(a+=fe(t.clientWidth,s.clientWidth)-o),{width:o,height:c,x:a,y:i}}function Ai(e,t){const n=q(e),s=ae(e),o=n.visualViewport;let c=s.clientWidth,a=s.clientHeight,i=0,l=0;if(o){c=o.width,a=o.height;const d=ut();(!d||d&&t==="fixed")&&(i=o.offsetLeft,l=o.offsetTop)}return{width:c,height:a,x:i,y:l}}function ji(e,t){const n=me(e,!0,t==="fixed"),s=n.top+e.clientTop,o=n.left+e.clientLeft,c=ee(e)?be(e):ce(1),a=e.clientWidth*c.x,i=e.clientHeight*c.y,l=o*c.x,d=s*c.y;return{width:a,height:i,x:l,y:d}}function Ot(e,t,n){let s;if(t==="viewport")s=Ai(e,n);else if(t==="document")s=Li(ae(e));else if(X(t))s=ji(t,n);else{const o=kr(e);s={...t,x:t.x-o.x,y:t.y-o.y}}return Br(s)}function Er(e,t){const n=_e(e);return n===t||!X(n)||Ve(n)?!1:te(n).position==="fixed"||Er(n,t)}function Di(e,t){const n=t.get(e);if(n)return n;let s=Te(e,[],!1).filter(i=>X(i)&&le(i)!=="body"),o=null;const c=te(e).position==="fixed";let a=c?_e(e):e;for(;X(a)&&!Ve(a);){const i=te(a),l=ct(a);!l&&i.position==="fixed"&&(o=null),(c?!l&&!o:!l&&i.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Ee(a)&&!l&&Er(e,a))?s=s.filter(f=>f!==a):o=i,a=_e(a)}return t.set(e,s),s}function Mi(e){let{element:t,boundary:n,rootBoundary:s,strategy:o}=e;const a=[...n==="clippingAncestors"?Di(t,this._c):[].concat(n),s],i=a[0],l=a.reduce((d,f)=>{const g=Ot(t,f,o);return d.top=fe(g.top,d.top),d.right=we(g.right,d.right),d.bottom=we(g.bottom,d.bottom),d.left=fe(g.left,d.left),d},Ot(t,i,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ii(e){const{width:t,height:n}=Tr(e);return{width:t,height:n}}function Oi(e,t,n){const s=ee(t),o=ae(t),c=n==="fixed",a=me(e,!0,c,t);let i={scrollLeft:0,scrollTop:0};const l=ce(0);if(s||!s&&!c)if((le(t)!=="body"||Ee(o))&&(i=We(t)),s){const d=me(t,!0,c,t);l.x=d.x+t.clientLeft,l.y=d.y+t.clientTop}else o&&(l.x=Sr(o));return{x:a.left+i.scrollLeft-l.x,y:a.top+i.scrollTop-l.y,width:a.width,height:a.height}}function Ft(e,t){return!ee(e)||te(e).position==="fixed"?null:t?t(e):e.offsetParent}function Rr(e,t){const n=q(e);if(!ee(e))return n;let s=Ft(e,t);for(;s&&pi(s)&&te(s).position==="static";)s=Ft(s,t);return s&&(le(s)==="html"||le(s)==="body"&&te(s).position==="static"&&!ct(s))?n:s||fi(e)||n}const Fi=async function(e){let{reference:t,floating:n,strategy:s}=e;const o=this.getOffsetParent||Rr,c=this.getDimensions;return{reference:Oi(t,await o(n),s),floating:{x:0,y:0,...await c(n)}}};function Pi(e){return te(e).direction==="rtl"}const zi={convertOffsetParentRelativeRectToViewportRelativeRect:Ei,getDocumentElement:ae,getClippingRect:Mi,getOffsetParent:Rr,getElementRects:Fi,getClientRects:Ri,getDimensions:Ii,getScale:be,isElement:X,isRTL:Pi};function Hi(e,t){let n=null,s;const o=ae(e);function c(){clearTimeout(s),n&&n.disconnect(),n=null}function a(i,l){i===void 0&&(i=!1),l===void 0&&(l=1),c();const{left:d,top:f,width:g,height:h}=e.getBoundingClientRect();if(i||t(),!g||!h)return;const p=De(f),b=De(o.clientWidth-(d+g)),v=De(o.clientHeight-(f+h)),T=De(d),C={rootMargin:-p+"px "+-b+"px "+-v+"px "+-T+"px",threshold:fe(0,we(1,l))||1};let R=!0;function y(N){const E=N[0].intersectionRatio;if(E!==l){if(!R)return a();E?a(!1,E):s=setTimeout(()=>{a(!1,1e-7)},100)}R=!1}try{n=new IntersectionObserver(y,{...C,root:o.ownerDocument})}catch{n=new IntersectionObserver(y,C)}n.observe(e)}return a(!0),c}function ht(e,t,n,s){s===void 0&&(s={});const{ancestorScroll:o=!0,ancestorResize:c=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:i=typeof IntersectionObserver=="function",animationFrame:l=!1}=s,d=gt(e),f=o||c?[...d?Te(d):[],...Te(t)]:[];f.forEach(_=>{o&&_.addEventListener("scroll",n,{passive:!0}),c&&_.addEventListener("resize",n)});const g=d&&i?Hi(d,n):null;let h=-1,p=null;a&&(p=new ResizeObserver(_=>{let[C]=_;C&&C.target===d&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{p&&p.observe(t)})),n()}),d&&!l&&p.observe(d),p.observe(t));let b,v=l?me(e):null;l&&T();function T(){const _=me(e);v&&(_.x!==v.x||_.y!==v.y||_.width!==v.width||_.height!==v.height)&&n(),v=_,b=requestAnimationFrame(T)}return n(),()=>{f.forEach(_=>{o&&_.removeEventListener("scroll",n),c&&_.removeEventListener("resize",n)}),g&&g(),p&&p.disconnect(),p=null,l&&cancelAnimationFrame(b)}}const Pt=Bi,$i=(e,t,n)=>{const s=new Map,o={platform:zi,...n},c={...o.platform,_c:s};return Ni(e,t,{...o,platform:c})},xt=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:s,padding:o}=typeof e=="function"?e(n):e;return s&&t(s)?s.current!=null?Pt({element:s.current,padding:o}).fn(n):{}:s?Pt({element:s,padding:o}).fn(n):{}}}};var Me=typeof document<"u"?u.useLayoutEffect:u.useEffect;function Pe(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,s,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(s=n;s--!==0;)if(!Pe(e[s],t[s]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(s=n;s--!==0;)if(!{}.hasOwnProperty.call(t,o[s]))return!1;for(s=n;s--!==0;){const c=o[s];if(!(c==="_owner"&&e.$$typeof)&&!Pe(e[c],t[c]))return!1}return!0}return e!==e&&t!==t}function Lr(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function zt(e,t){const n=Lr(e);return Math.round(t*n)/n}function Ht(e){const t=u.useRef(e);return Me(()=>{t.current=e}),t}function Ui(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:s=[],platform:o,elements:{reference:c,floating:a}={},transform:i=!0,whileElementsMounted:l,open:d}=e,[f,g]=u.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,p]=u.useState(s);Pe(h,s)||p(s);const[b,v]=u.useState(null),[T,_]=u.useState(null),C=u.useCallback(D=>{D!=E.current&&(E.current=D,v(D))},[v]),R=u.useCallback(D=>{D!==I.current&&(I.current=D,_(D))},[_]),y=c||b,N=a||T,E=u.useRef(null),I=u.useRef(null),U=u.useRef(f),H=Ht(l),W=Ht(o),z=u.useCallback(()=>{if(!E.current||!I.current)return;const D={placement:t,strategy:n,middleware:h};W.current&&(D.platform=W.current),$i(E.current,I.current,D).then(m=>{const x={...m,isPositioned:!0};V.current&&!Pe(U.current,x)&&(U.current=x,ze.flushSync(()=>{g(x)}))})},[h,t,n,W]);Me(()=>{d===!1&&U.current.isPositioned&&(U.current.isPositioned=!1,g(D=>({...D,isPositioned:!1})))},[d]);const V=u.useRef(!1);Me(()=>(V.current=!0,()=>{V.current=!1}),[]),Me(()=>{if(y&&(E.current=y),N&&(I.current=N),y&&N){if(H.current)return H.current(y,N,z);z()}},[y,N,z,H]);const G=u.useMemo(()=>({reference:E,floating:I,setReference:C,setFloating:R}),[C,R]),L=u.useMemo(()=>({reference:y,floating:N}),[y,N]),j=u.useMemo(()=>{const D={position:n,left:0,top:0};if(!L.floating)return D;const m=zt(L.floating,f.x),x=zt(L.floating,f.y);return i?{...D,transform:"translate("+m+"px, "+x+"px)",...Lr(L.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:m,top:x}},[n,i,L.floating,f.x,f.y]);return u.useMemo(()=>({...f,update:z,refs:G,elements:L,floatingStyles:j}),[f,z,G,L,j])}const Vi=Zt.useInsertionEffect,Wi=Vi||(e=>e());function Gi(e){const t=u.useRef(()=>{});return Wi(()=>{t.current=e}),u.useCallback(function(){for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return t.current==null?void 0:t.current(...s)},[])}var ke=typeof document<"u"?u.useLayoutEffect:u.useEffect;let Ze=!1,Ki=0;const $t=()=>"floating-ui-"+Ki++;function Xi(){const[e,t]=u.useState(()=>Ze?$t():void 0);return ke(()=>{e==null&&t($t())},[]),u.useEffect(()=>{Ze||(Ze=!0)},[]),e}const Yi=Zt.useId,Zi=Yi||Xi;function qi(){const e=new Map;return{emit(t,n){var s;(s=e.get(t))==null||s.forEach(o=>o(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var s;e.set(t,((s=e.get(t))==null?void 0:s.filter(o=>o!==n))||[])}}}const Ji=u.createContext(null),Qi=u.createContext(null),Ar=()=>{var e;return((e=u.useContext(Ji))==null?void 0:e.id)||null},jr=()=>u.useContext(Qi);function Dr(e){return"data-floating-ui-"+e}function Ut(e){const t=u.useRef(e);return ke(()=>{t.current=e}),t}const Vt=Dr("safe-polygon");function qe(e,t,n){return n&&!Oe(n)?0:typeof e=="number"?e:e==null?void 0:e[t]}function Mr(e,t){t===void 0&&(t={});const{open:n,onOpenChange:s,dataRef:o,events:c,elements:{domReference:a,floating:i},refs:l}=e,{enabled:d=!0,delay:f=0,handleClose:g=null,mouseOnly:h=!1,restMs:p=0,move:b=!0}=t,v=jr(),T=Ar(),_=Ut(g),C=Ut(f),R=u.useRef(),y=u.useRef(),N=u.useRef(),E=u.useRef(),I=u.useRef(!0),U=u.useRef(!1),H=u.useRef(()=>{}),W=u.useCallback(()=>{var L;const j=(L=o.current.openEvent)==null?void 0:L.type;return(j==null?void 0:j.includes("mouse"))&&j!=="mousedown"},[o]);u.useEffect(()=>{if(!d)return;function L(j){let{open:D}=j;D||(clearTimeout(y.current),clearTimeout(E.current),I.current=!0)}return c.on("openchange",L),()=>{c.off("openchange",L)}},[d,c]),u.useEffect(()=>{if(!d||!_.current||!n)return;function L(D){W()&&s(!1,D,"hover")}const j=Ce(i).documentElement;return j.addEventListener("mouseleave",L),()=>{j.removeEventListener("mouseleave",L)}},[i,n,s,d,_,o,W]);const z=u.useCallback(function(L,j,D){j===void 0&&(j=!0),D===void 0&&(D="hover");const m=qe(C.current,"close",R.current);m&&!N.current?(clearTimeout(y.current),y.current=setTimeout(()=>s(!1,L,D),m)):j&&(clearTimeout(y.current),s(!1,L,D))},[C,s]),V=u.useCallback(()=>{H.current(),N.current=void 0},[]),G=u.useCallback(()=>{if(U.current){const L=Ce(l.floating.current).body;L.style.pointerEvents="",L.removeAttribute(Vt),U.current=!1}},[l]);return u.useEffect(()=>{if(!d)return;function L(){return o.current.openEvent?["click","mousedown"].includes(o.current.openEvent.type):!1}function j(x){if(clearTimeout(y.current),I.current=!1,h&&!Oe(R.current)||p>0&&qe(C.current,"open")===0)return;const S=qe(C.current,"open",R.current);S?y.current=setTimeout(()=>{s(!0,x,"hover")},S):s(!0,x,"hover")}function D(x){if(L())return;H.current();const S=Ce(i);if(clearTimeout(E.current),_.current){n||clearTimeout(y.current),N.current=_.current({...e,tree:v,x:x.clientX,y:x.clientY,onClose(){G(),V(),z(x,!0,"safe-polygon")}});const P=N.current;S.addEventListener("mousemove",P),H.current=()=>{S.removeEventListener("mousemove",P)};return}(R.current==="touch"?!tt(i,x.relatedTarget):!0)&&z(x)}function m(x){L()||_.current==null||_.current({...e,tree:v,x:x.clientX,y:x.clientY,onClose(){G(),V(),z(x)}})(x)}if(X(a)){const x=a;return n&&x.addEventListener("mouseleave",m),i==null||i.addEventListener("mouseleave",m),b&&x.addEventListener("mousemove",j,{once:!0}),x.addEventListener("mouseenter",j),x.addEventListener("mouseleave",D),()=>{n&&x.removeEventListener("mouseleave",m),i==null||i.removeEventListener("mouseleave",m),b&&x.removeEventListener("mousemove",j),x.removeEventListener("mouseenter",j),x.removeEventListener("mouseleave",D)}}},[a,i,d,e,h,p,b,z,V,G,s,n,v,C,_,o]),ke(()=>{var L;if(d&&n&&(L=_.current)!=null&&L.__options.blockPointerEvents&&W()){const D=Ce(i).body;if(D.setAttribute(Vt,""),D.style.pointerEvents="none",U.current=!0,X(a)&&i){var j;const m=a,x=v==null||(j=v.nodesRef.current.find(S=>S.id===T))==null||(j=j.context)==null?void 0:j.elements.floating;return x&&(x.style.pointerEvents=""),m.style.pointerEvents="auto",i.style.pointerEvents="auto",()=>{m.style.pointerEvents="",i.style.pointerEvents=""}}}},[d,n,T,i,a,v,_,o,W]),ke(()=>{n||(R.current=void 0,V(),G())},[n,V,G]),u.useEffect(()=>()=>{V(),clearTimeout(y.current),clearTimeout(E.current),G()},[d,a,V,G]),u.useMemo(()=>{if(!d)return{};function L(j){R.current=j.pointerType}return{reference:{onPointerDown:L,onPointerEnter:L,onMouseMove(j){n||p===0||(clearTimeout(E.current),E.current=setTimeout(()=>{I.current||s(!0,j.nativeEvent,"hover")},p))}},floating:{onMouseEnter(){clearTimeout(y.current)},onMouseLeave(j){z(j.nativeEvent,!1)}}}},[d,p,n,s,z])}function Wt(e){return ee(e.target)&&e.target.tagName==="BUTTON"}function Gt(e){return wr(e)}function Se(e,t){t===void 0&&(t={});const{open:n,onOpenChange:s,dataRef:o,elements:{domReference:c}}=e,{enabled:a=!0,event:i="click",toggle:l=!0,ignoreMouse:d=!1,keyboardHandlers:f=!0}=t,g=u.useRef(),h=u.useRef(!1);return u.useMemo(()=>a?{reference:{onPointerDown(p){g.current=p.pointerType},onMouseDown(p){p.button===0&&(Oe(g.current,!0)&&d||i!=="click"&&(n&&l&&(!o.current.openEvent||o.current.openEvent.type==="mousedown")?s(!1,p.nativeEvent,"click"):(p.preventDefault(),s(!0,p.nativeEvent,"click"))))},onClick(p){if(i==="mousedown"&&g.current){g.current=void 0;return}Oe(g.current,!0)&&d||(n&&l&&(!o.current.openEvent||o.current.openEvent.type==="click")?s(!1,p.nativeEvent,"click"):s(!0,p.nativeEvent,"click"))},onKeyDown(p){g.current=void 0,!(p.defaultPrevented||!f||Wt(p))&&(p.key===" "&&!Gt(c)&&(p.preventDefault(),h.current=!0),p.key==="Enter"&&s(!(n&&l),p.nativeEvent,"click"))},onKeyUp(p){p.defaultPrevented||!f||Wt(p)||Gt(c)||p.key===" "&&h.current&&(h.current=!1,s(!(n&&l),p.nativeEvent,"click"))}}}:{},[a,o,i,d,f,c,l,n,s])}function bt(e){var t;e===void 0&&(e={});const{open:n=!1,onOpenChange:s,nodeId:o}=e,[c,a]=u.useState(null),i=((t=e.elements)==null?void 0:t.reference)||c,l=Ui(e),d=jr(),f=Ar()!=null,g=Gi((N,E,I)=>{N&&(p.current.openEvent=E),b.emit("openchange",{open:N,event:E,reason:I,nested:f}),s==null||s(N,E,I)}),h=u.useRef(null),p=u.useRef({}),b=u.useState(()=>qi())[0],v=Zi(),T=u.useCallback(N=>{const E=X(N)?{getBoundingClientRect:()=>N.getBoundingClientRect(),contextElement:N}:N;l.refs.setReference(E)},[l.refs]),_=u.useCallback(N=>{(X(N)||N===null)&&(h.current=N,a(N)),(X(l.refs.reference.current)||l.refs.reference.current===null||N!==null&&!X(N))&&l.refs.setReference(N)},[l.refs]),C=u.useMemo(()=>({...l.refs,setReference:_,setPositionReference:T,domReference:h}),[l.refs,_,T]),R=u.useMemo(()=>({...l.elements,domReference:i}),[l.elements,i]),y=u.useMemo(()=>({...l,refs:C,elements:R,dataRef:p,nodeId:o,floatingId:v,events:b,open:n,onOpenChange:g}),[l,o,v,b,n,g,C,R]);return ke(()=>{const N=d==null?void 0:d.nodesRef.current.find(E=>E.id===o);N&&(N.context=y)}),u.useMemo(()=>({...l,context:y,refs:C,elements:R}),[l,C,R,y])}function Ir(e,t){t===void 0&&(t={});const{open:n,onOpenChange:s,events:o,refs:c,elements:{floating:a,domReference:i}}=e,{enabled:l=!0,visibleOnly:d=!0}=t,f=u.useRef(!1),g=u.useRef(),h=u.useRef(!0);return u.useEffect(()=>{if(!l)return;const p=q(i);function b(){!n&&ee(i)&&i===Dt(Ce(i))&&(f.current=!0)}function v(){h.current=!0}return p.addEventListener("blur",b),p.addEventListener("keydown",v,!0),()=>{p.removeEventListener("blur",b),p.removeEventListener("keydown",v,!0)}},[a,i,n,l]),u.useEffect(()=>{if(!l)return;function p(b){let{reason:v}=b;(v==="reference-press"||v==="escape-key")&&(f.current=!0)}return o.on("openchange",p),()=>{o.off("openchange",p)}},[o,l]),u.useEffect(()=>()=>{clearTimeout(g.current)},[]),u.useMemo(()=>l?{reference:{onPointerDown(p){gi(p.nativeEvent)||(h.current=!1)},onMouseLeave(){f.current=!1},onFocus(p){if(f.current)return;const b=bi(p.nativeEvent);if(d&&X(b))try{if(hi()&&xi())throw Error();if(!b.matches(":focus-visible"))return}catch{if(!h.current&&!wr(b))return}s(!0,p.nativeEvent,"focus")},onBlur(p){f.current=!1;const b=p.relatedTarget,v=X(b)&&b.hasAttribute(Dr("focus-guard"))&&b.getAttribute("data-type")==="outside";g.current=window.setTimeout(()=>{const T=Dt(i?i.ownerDocument:document);!b&&T===i||tt(c.floating.current,b)||tt(i,b)||v||s(!1,p.nativeEvent,"focus")})}}}:{},[l,d,i,c,s])}const Kt="active",Xt="selected";function Je(e,t,n){const s=new Map,o=n==="item";let c=e;if(o&&e){const{[Kt]:a,[Xt]:i,...l}=e;c=l}return{...n==="floating"&&{tabIndex:-1},...c,...t.map(a=>{const i=a?a[n]:null;return typeof i=="function"?e?i(e):null:i}).concat(e).reduce((a,i)=>(i&&Object.entries(i).forEach(l=>{let[d,f]=l;if(!(o&&[Kt,Xt].includes(d)))if(d.indexOf("on")===0){if(s.has(d)||s.set(d,[]),typeof f=="function"){var g;(g=s.get(d))==null||g.push(f),a[d]=function(){for(var h,p=arguments.length,b=new Array(p),v=0;v<p;v++)b[v]=arguments[v];return(h=s.get(d))==null?void 0:h.map(T=>T(...b)).find(T=>T!==void 0)}}}else a[d]=f}),a),{})}}function vt(e){e===void 0&&(e=[]);const t=e,n=u.useCallback(c=>Je(c,e,"reference"),t),s=u.useCallback(c=>Je(c,e,"floating"),t),o=u.useCallback(c=>Je(c,e,"item"),e.map(c=>c==null?void 0:c.item));return u.useMemo(()=>({getReferenceProps:n,getFloatingProps:s,getItemProps:o}),[n,s,o])}const el=(e,t)=>{const{style:n,className:s,placement:o,content:c,effect:a,getFloatingProps:i,children:l}=e;function d(){return typeof c=="string"?r.jsx(r.Fragment,{children:r.jsx("span",{children:c})}):r.jsx(r.Fragment,{children:c})}return r.jsx(r.Fragment,{children:r.jsxs("div",{ref:t,style:n,className:B("el-popper",`is-${a}`,s),"data-popper-placement":o,...i(),children:[r.jsx(d,{}),l]})})},Or=u.forwardRef(el);Or.displayName="TooltipPopper";const tl=e=>{var I,U;const{style:t,className:n,effect:s="dark",placement:o="bottom",trigger:c="hover",content:a,showAfter:i=0,hideAfter:l=200,disabled:d=!0,children:f}=e,[g,h]=u.useState(!1),p=u.useRef(null),{refs:b,floatingStyles:v,context:T,middlewareData:_}=bt({placement:o,middleware:[mt(12),xt({element:p})],open:g&&d,whileElementsMounted:ht,onOpenChange:h});let C={};switch(c){case"hover":C=Mr(T,{delay:{open:i,close:l}});break;case"click":C=Se(T);break;case"focus":C=Ir(T);break;case"contextmenu":C=Se(T,{event:"mousedown"});break}const{getReferenceProps:R,getFloatingProps:y}=vt([C]),N=u.cloneElement(u.Children.only(f),{ref:b.setReference,...R()}),E={...t,...v};return r.jsxs(r.Fragment,{children:[g&&ze.createPortal(r.jsx(Or,{ref:b.setFloating,style:E,className:B(n),effect:s,placement:o,content:a,getFloatingProps:y,children:r.jsx("span",{ref:p,className:"el-popper__arrow",style:{position:"absolute",left:(I=_.arrow)==null?void 0:I.x,top:(U=_.arrow)==null?void 0:U.y}})}),document.body),N]})},rl=u.forwardRef(tl);rl.displayName="Tooltip";const nl=(e,t)=>{const{style:n,className:s,placement:o,title:c,content:a,getFloatingProps:i,children:l}=e;function d(){return typeof a=="string"?r.jsx(r.Fragment,{children:r.jsx("span",{children:a})}):r.jsx(r.Fragment,{children:a})}const f={width:"200px",...n};return r.jsx(r.Fragment,{children:r.jsxs("div",{ref:t,style:f,className:B("el-popper is-light el-popover el-popover--plain",s),"data-popper-placement":o,...i(),children:[r.jsx("div",{className:"el-popover__title",role:"title",children:c}),r.jsx(d,{}),l]})})},Fr=u.forwardRef(nl);Fr.displayName="PopoverPopper";const sl=e=>{var E,I;const{style:t,className:n,placement:s="bottom",trigger:o="hover",title:c,content:a,showAfter:i=0,hideAfter:l=200,children:d}=e,[f,g]=u.useState(!1),h=u.useRef(null),{refs:p,floatingStyles:b,context:v,middlewareData:T}=bt({placement:s,middleware:[mt(12),xt({element:h})],open:f,whileElementsMounted:ht,onOpenChange:g});let _={};switch(o){case"hover":_=Mr(v,{delay:{open:i,close:l}});break;case"click":_=Se(v);break;case"focus":_=Ir(v);break;case"contextmenu":_=Se(v,{event:"mousedown"});break}const{getReferenceProps:C,getFloatingProps:R}=vt([_]),y=u.cloneElement(u.Children.only(d),{ref:p.setReference,...C()}),N={...t,...b};return r.jsxs(r.Fragment,{children:[f&&ze.createPortal(r.jsx(Fr,{ref:p.setFloating,style:N,className:B(n),placement:s,title:c,content:a,getFloatingProps:R,children:r.jsx("span",{ref:h,className:"el-popper__arrow",style:{position:"absolute",left:(E=T.arrow)==null?void 0:E.x,top:(I=T.arrow)==null?void 0:I.y}})}),document.body),y]})},ol=u.forwardRef(sl);ol.displayName="Popover";const al=(e,t)=>{const{style:n,className:s,percentage:o=0,format:c,status:a,textInside:i=!1,strokeWidth:l=6}=e;function d(){return i?c?r.jsx("div",{className:"el-progress-bar__innerText",children:r.jsx("span",{children:c(o)})}):r.jsx("div",{className:"el-progress-bar__innerText",children:r.jsxs("span",{children:[o,"%"]})}):r.jsx(r.Fragment,{})}function f(){if(!i)if(a){let g;switch(a){case"success":g=r.jsx(gr,{});break;case"warning":g=r.jsx($e,{});break;case"exception":g=r.jsx(Ue,{});break}return g}else return c?r.jsx("span",{children:c(o)}):r.jsxs("span",{children:[o,"%"]});return r.jsx(r.Fragment,{})}return r.jsxs("div",{ref:t,style:n,className:B("el-progress el-progress--line",a?`is-${a}`:"",s),role:"progressbar",children:[r.jsx("div",{className:"el-progress-bar",children:r.jsx("div",{className:"el-progress-bar__outer",style:{height:`${l}px`},children:r.jsx("div",{className:"el-progress-bar__inner",style:{width:`${o}%`,animationDuration:"3s"},children:r.jsx(d,{})})})}),r.jsx("div",{className:"el-progress__text",style:{fontSize:"14.4px"},children:r.jsx(f,{})})]})},il=u.forwardRef(al);il.displayName="Progress";const ll=(e,t)=>{const{style:n,className:s,placement:o,title:c,width:a,icon:i,iconColor:l,hideIcon:d,confirmButtonText:f,cancelButtonText:g,onConfirm:h,onCancel:p,getFloatingProps:b,children:v}=e,T={width:a?typeof a=="string"?a:`${a}px`:"150px",...n};function _(){return d?r.jsx(r.Fragment,{}):u.cloneElement(i,{className:B(i==null?void 0:i.props.className,"el-popconfirm__icon"),style:{color:l}})}function C(y){p&&(console.log(y),p(y))}function R(y){h&&h(y)}return r.jsx(r.Fragment,{children:r.jsxs("div",{ref:t,style:T,className:B("el-popper is-light el-popover",s),"data-popper-placement":o,...b(),children:[r.jsxs("div",{className:"el-popconfirm",children:[r.jsxs("div",{className:"el-popconfirm__main",children:[r.jsx(_,{}),c]}),r.jsxs("div",{className:"el-popconfirm__action",children:[r.jsx(Qe,{onClick:C,children:g}),r.jsx(Qe,{type:"primary",onClick:R,children:f})]})]}),v]})})},Pr=u.forwardRef(ll);Pr.displayName="PopconfirmPopper";const cl=e=>{var W,z;const{style:t,className:n,placement:s="bottom",title:o,width:c=150,icon:a=r.jsx(hr,{}),iconColor:i="#f90",hideIcon:l=!1,confirmButtonText:d="Yes",cancelButtonText:f="No",onConfirm:g,onCancel:h,children:p}=e,[b,v]=u.useState(!1),T=u.useRef(null),{refs:_,floatingStyles:C,context:R,middlewareData:y}=bt({placement:s,middleware:[mt(12),xt({element:T})],open:b,whileElementsMounted:ht,onOpenChange:v}),N=Se(R),{getReferenceProps:E,getFloatingProps:I}=vt([N]),U=u.cloneElement(u.Children.only(p),{ref:_.setReference,...E()}),H={...t,...C};return r.jsxs(r.Fragment,{children:[b&&ze.createPortal(r.jsx(Pr,{ref:_.setFloating,style:H,className:B(n),placement:s,title:o,width:c,icon:a,iconColor:i,hideIcon:l,confirmButtonText:d,cancelButtonText:f,onConfirm:g,onCancel:h,getFloatingProps:I,children:r.jsx("span",{ref:T,className:"el-popper__arrow",style:{position:"absolute",left:(W=y.arrow)==null?void 0:W.x,top:(z=y.arrow)==null?void 0:z.y}})}),document.body),U]})},ul=u.forwardRef(cl);ul.displayName="Popconfirm";const dl=(e,t)=>{const{style:n,className:s,type:o="",closable:c=!1,size:a="",effect:i="light",round:l=!1,children:d}=e;function f(){return c?r.jsx(ye,{className:"el-tag__close"}):r.jsx(r.Fragment,{})}return r.jsxs("span",{ref:t,style:n,className:B("el-tag el-tag--light",o?`el-tag--${o}`:"",a?`el-tag--${a}`:"",i?`el-tag--${i}`:"",l?"is-round":"",s),children:[r.jsx("span",{className:"el-tag__content",children:d}),r.jsx(f,{})]})},pl=u.forwardRef(dl);pl.displayName="Tag";const fl=(e,t)=>{const{style:n,className:s,open:o=!1,width:c="50%",title:a,footer:i,onClose:l,showClose:d=!0,header:f,children:g}=e,h={zIndex:2015,...n,display:o?"":"none"};function p(){return f?r.jsx(r.Fragment,{children:f}):r.jsx(r.Fragment,{children:r.jsx("span",{role:"heading",className:"el-dialog__title",children:a})})}return r.jsx("div",{ref:t,style:h,className:B("el-overlay",s),children:r.jsx("div",{role:"dialog",className:"el-overlay-dialog",children:r.jsxs("div",{className:"el-dialog",style:{"--el-dialog-width":c},children:[r.jsxs("header",{className:"el-dialog__header",children:[r.jsx(p,{}),d&&r.jsx("button",{"aria-label":"Close this dialog",className:"el-dialog__headerbtn",type:"button",onClick:l,children:r.jsx(ye,{className:"el-dialog__close"})})]}),r.jsx("div",{id:"el-id-9273-97",className:"el-dialog__body",children:g}),r.jsx("footer",{className:"el-dialog__footer",children:i})]})})})},ml=u.forwardRef(fl);ml.displayName="Dialog";function gl(e,t){const n=u.useRef(t);u.useEffect(()=>{n.current=t},[t]),u.useEffect(()=>{const s=o=>{var c;(((c=e.current)==null?void 0:c.contains(o.target))??!1)||n.current&&n.current()};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[e])}const hl=(e,t)=>{const{style:n,className:s,open:o=!1,direction:c="rtl",title:a,onClose:i,header:l,footer:d,withHeader:f=!0,size:g="30%",showClose:h=!0,children:p}=e,b=u.useRef(null),v={...n,display:o?"":"none"};gl(b,()=>{o&&i&&i()});function T(){return l?r.jsx(r.Fragment,{children:l}):r.jsx(r.Fragment,{children:r.jsx("span",{role:"heading",className:"el-drawer__title",children:a})})}return r.jsx("div",{ref:t,style:v,className:B("el-overlay",s),children:r.jsxs("div",{ref:b,className:B("el-drawer open",c),role:"dialog",style:{width:["ltr","rtl"].includes(c)?g:"",height:["ttb","btt"].includes(c)?g:""},children:[r.jsx("span",{className:"el-drawer__sr-focus"}),f&&r.jsxs("header",{className:"el-drawer__header",children:[r.jsx(T,{}),h&&r.jsx("button",{className:"el-drawer__close-btn",type:"button",onClick:i,children:r.jsx(ye,{className:"el-drawer__close"})})]}),r.jsx("div",{className:"el-drawer__body",children:p}),d&&r.jsx("div",{className:"el-drawer__footer",children:d})]})})},xl=u.forwardRef(hl);xl.displayName="DrawerComponent";const bl=(e,t)=>{const{style:n,className:s,columns:o,data:c,stripe:a=!1,border:i=!1}=e,l={...n,width:"100%"},d=o==null?void 0:o.map(h=>r.jsx("col",{width:h.width})),f=o==null?void 0:o.map(h=>r.jsx("th",{className:"is-leaf el-table__cell",colSpan:1,rowSpan:1,children:r.jsx("div",{className:"cell",children:h.label})})),g=c==null?void 0:c.map((h,p)=>r.jsx("tr",{className:B("el-table__row",{"el-table__row--striped":p%2===1}),children:o==null?void 0:o.map(b=>r.jsx("td",{className:"el-table__cell",rowSpan:1,colSpan:1,children:r.jsx("div",{className:"cell",children:h[b.dataIndex]})}))}));return r.jsx(r.Fragment,{children:r.jsxs("div",{ref:t,style:l,className:B("el-table--fit el-table--enable-row-hover el-table--enable-row-transition el-table el-table--layout-fixed is-scrolling-none",s,{"el-table--striped":a,"el-table--border":i}),children:[r.jsxs("div",{className:"el-table__inner-wrapper",children:[r.jsxs("div",{className:"hidden-columns",children:[r.jsx("div",{}),r.jsx("div",{}),r.jsx("div",{})]}),r.jsx("div",{className:"el-table__header-wrapper",children:r.jsxs("table",{className:"el-table__header",border:0,cellPadding:"0",cellSpacing:"0",style:{width:"749px"},children:[r.jsx("colgroup",{children:d}),r.jsx("thead",{className:"",children:r.jsx("tr",{className:"",children:f})})]})}),r.jsx("div",{className:"el-table__body-wrapper",children:r.jsxs("div",{className:"el-scrollbar",children:[r.jsx("div",{className:"el-scrollbar__wrap el-scrollbar__wrap--hidden-default",children:r.jsx("div",{className:"el-scrollbar__view",style:{display:"inline-block",verticalAlign:"middle"},children:r.jsxs("table",{className:"el-table__body",cellSpacing:"0",cellPadding:"0",border:0,style:{tableLayout:"fixed",width:"749px"},children:[r.jsx("colgroup",{children:d}),r.jsx("tbody",{children:g})]})})}),r.jsx("div",{className:"el-scrollbar__bar is-horizontal",style:{display:"none"},children:r.jsx("div",{className:"el-scrollbar__thumb",style:{transform:"translateX(0%)"}})}),r.jsx("div",{className:"el-scrollbar__bar is-vertical",style:{display:"none"},children:r.jsx("div",{className:"el-scrollbar__thumb",style:{transform:"translateY(0%)"}})})]})})]}),r.jsx("div",{className:"el-table__column-resize-proxy",style:{display:"none"}})]})})},vl=u.forwardRef(bl);vl.displayName="TableComponent";function _l(e,t){const n=u.useRef(t);u.useEffect(()=>{n.current=t},[t]),u.useEffect(()=>{var c,a;const s=i=>{n.current&&n.current(i,"mouseenter")},o=i=>{n.current&&n.current(i,"mouseleave")};return(c=e.current)==null||c.addEventListener("mouseenter",s),(a=e.current)==null||a.addEventListener("mouseleave",o),()=>{var i,l;(i=e.current)==null||i.removeEventListener("mouseenter",s),(l=e.current)==null||l.removeEventListener("mouseleave",o)}},[e])}const wl=e=>{const{style:t,className:n,minSize:s=20,children:o}=e,c=u.useRef(null),a=u.useRef(null),i=u.useRef(null),l=u.useRef(null),[d,f]=u.useState(!1),[g,h]=u.useState(!1),[p,b]=u.useState(0),[v,T]=u.useState("translateY(0%)");_l(c,(y,N)=>{f(N==="mouseenter")}),u.useEffect(()=>{if(c.current&&a.current&&i.current){const y=a.current.offsetHeight,N=i.current.scrollHeight,E=N>y;h(E),b(Math.max(y/N*y,s))}},[o]);function _(){if(a.current&&i.current&&l.current){const y=a.current.offsetHeight,N=a.current.scrollHeight,E=a.current.scrollTop,I=l.current.offsetHeight;T(`translateY(${E/(N-y)*((I-p)/p)*100}%)`)}}function C(y){console.log(y)}function R(y){y.stopPropagation()}return r.jsx(r.Fragment,{children:r.jsxs("div",{ref:c,style:t,className:B("el-scrollbar",n),children:[r.jsx("div",{ref:a,className:"el-scrollbar__wrap el-scrollbar__wrap--hidden-default",style:{height:"400px"},onScroll:_,children:r.jsx("div",{ref:i,className:"el-scrollbar__view",children:o})}),r.jsx("div",{className:"el-scrollbar__bar is-horizontal",style:{display:"none"},children:r.jsx("div",{className:"el-scrollbar__thumb",style:{transform:"translateX(0%)"}})}),r.jsx("div",{ref:l,className:"el-scrollbar__bar is-vertical",style:{display:g&&d?"":"none"},onClick:C,children:r.jsx("div",{onClick:R,className:"el-scrollbar__thumb",style:{height:`${p}px`,transform:v}})})]})})},yl=u.forwardRef(wl);yl.displayName="ScrollbarComponent";const Cl=(e,t)=>{const{style:n,className:s,value:o="",type:c="danger",max:a=99,isDot:i=!1,children:l}=e;function d(){return typeof o=="number"&&o>a?`${a}+`:o}return r.jsxs("div",{ref:t,style:n,className:B("el-badge",s),children:[l,r.jsx("sup",{className:B("el-badge__content is-fixed",`el-badge__content--${c}`,{"is-dot":i}),children:d()})]})},Nl=u.forwardRef(Cl);Nl.displayName="Badge";const Bl=(e,t)=>{const{style:n,className:s}=e;return r.jsxs("div",{ref:t,style:n,className:B(s,"el-rate"),role:"slider",children:[r.jsx("span",{className:"el-rate__item",children:r.jsxs("i",{className:"el-icon el-rate__icon",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{display:"none"},children:r.jsx("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:r.jsx("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})})]})}),r.jsx("span",{className:"el-rate__item",children:r.jsxs("i",{className:"el-icon el-rate__icon",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{display:"none"},children:r.jsx("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:r.jsx("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})})]})}),r.jsx("span",{className:"el-rate__item",children:r.jsxs("i",{className:"el-icon el-rate__icon",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{display:"none"},children:r.jsx("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:r.jsx("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})})]})}),r.jsx("span",{className:"el-rate__item",children:r.jsxs("i",{className:"el-icon el-rate__icon",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{display:"none"},children:r.jsx("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:r.jsx("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})})]})}),r.jsx("span",{className:"el-rate__item",children:r.jsxs("i",{className:"el-icon el-rate__icon",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{display:"none"},children:r.jsx("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:r.jsx("path",{fill:"currentColor",d:"m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"})})]})})]})},Tl=u.forwardRef(Bl);Tl.displayName="Rate";const kl=(e,t)=>{const{style:n,className:s,wrap:o=!1,direction:c="horizontal",size:a="small",spacer:i,alignment:l="center",children:d}=e,g={flexWrap:o?"wrap":null,alignItems:l,gap:{large:"16px",default:"12px",small:"8px"}[a]||`${a}px`,...n};function h(p){const{count:b,index:v}=p;return!i||b-1===v?r.jsx(r.Fragment,{}):r.jsx(r.Fragment,{children:r.jsx("span",{children:i})})}return r.jsx("div",{ref:t,style:g,className:B("el-space",`el-space--${c}`,s),children:u.Children.map(d,(p,b)=>r.jsxs(Xr.Fragment,{children:[r.jsx("div",{className:"el-space__item",children:p}),r.jsx(h,{count:u.Children.count(d),index:b})]},b))})},Sl=u.forwardRef(kl);Sl.displayName="Space";const El=(e,t)=>{const{style:n,className:s,trigger:o,title:c,message:a,type:i,confirmButtonText:l="ok",cancelButtonText:d="cancel",onCallback:f,onClose:g,onCancel:h,onConfirm:p}=e;function b(C){g&&g(C),f&&f("close")}function v(C){h&&h(C),f&&f("close")}function T(C){p&&p(C),f&&f("confirm")}function _(){if(!i)return r.jsx(r.Fragment,{});let C=r.jsx(r.Fragment,{});switch(i){case"success":C=r.jsx(r.Fragment,{children:r.jsx(lt,{className:"el-message-box__status el-message-box-icon--success"})});break;case"info":C=r.jsx(r.Fragment,{children:r.jsx(it,{className:"el-message-box__status el-message-box-icon--info"})});break;case"warning":C=r.jsx(r.Fragment,{children:r.jsx($e,{className:"el-message-box__status el-message-box-icon--warning"})});break;case"error":C=r.jsx(r.Fragment,{children:r.jsx(Ue,{className:"el-message-box__status el-message-box-icon--error"})});break}return C}return r.jsx(r.Fragment,{children:r.jsx("div",{ref:t,role:"dialog",style:n,className:B("el-overlay-message-box",s),children:r.jsxs("div",{className:"el-message-box",children:[r.jsxs("div",{className:"el-message-box__header show-close",children:[r.jsx("div",{className:"el-message-box__title",children:r.jsx("span",{children:c})}),r.jsx("button",{type:"button",className:"el-message-box__headerbtn",onClick:b,children:r.jsx(ye,{className:"el-message-box__close"})})]}),r.jsx("div",{className:"el-message-box__content",children:r.jsxs("div",{className:"el-message-box__container",children:[o==="confirm"&&r.jsx(_,{}),r.jsx("div",{className:"el-message-box__message",children:r.jsx("p",{children:a})})]})}),r.jsxs("div",{className:"el-message-box__btns",children:[o==="confirm"&&r.jsx("button",{type:"button",className:"el-button",onClick:v,children:r.jsx("span",{className:"",children:d})}),r.jsx("button",{type:"button",className:"el-button el-button--primary",onClick:T,children:r.jsx("span",{className:"",children:l})})]})]})})})},Yt=u.forwardRef(El);let de,Q;const xe={onClose:e=>{e.stopPropagation(),de.unmount(),document.body.removeChild(Q)},onCancel:e=>{e.stopPropagation(),de.unmount(),document.body.removeChild(Q)},onConfirm:e=>{e.stopPropagation(),de.unmount(),document.body.removeChild(Q)},alert:(e,t,n)=>{Q=document.createElement("div"),Q.className="el-overlay is-message-box",Q.style.zIndex="2008",document.body.append(Q),de=Bt(Q),de.render(r.jsx(Yt,{trigger:"alert",title:t,message:e,confirmButtonText:n==null?void 0:n.confirmButtonText,onCallback:n==null?void 0:n.callback,onClose:xe.onClose,onCancel:xe.onCancel,onConfirm:xe.onConfirm}))},confirm:(e,t,n={})=>{Q=document.createElement("div"),Q.className="el-overlay is-message-box",Q.style.zIndex="2008",document.body.append(Q),de=Bt(Q),de.render(r.jsx(Yt,{trigger:"confirm",title:t,message:e,type:n==null?void 0:n.type,confirmButtonText:n==null?void 0:n.confirmButtonText,cancelButtonText:n==null?void 0:n.cancelButtonText,onCallback:n==null?void 0:n.callback,onClose:xe.onClose,onCancel:xe.onCancel,onConfirm:xe.onConfirm}))}};export{$a as A,Qe as B,Uo as C,Jo as D,Oo as E,za as F,ri as G,Ia as H,it as I,ml as J,xl as K,fr as L,Go as M,xe as N,ul as O,il as P,ol as Q,Va as R,zo as S,Za as T,Na as U,ta as V,$e as W,rl as X,Yo as a,Ll as b,Ga as c,Da as d,Fa as e,sa as f,da as g,Ue as h,lt as i,mr as j,gr as k,ye as l,La as m,Xa as n,yl as o,Sl as p,Ja as q,ei as r,Tl as s,ci as t,Nl as u,oi as v,ii as w,di as x,vl as y,pl as z};
