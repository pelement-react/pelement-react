import{g as or,r as ae,j as k}from"./index-B42nq6CR.js";const ar=`import { Alert } from 'pelement-react'\r
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
export default AlertBasic`,ir=`import { Alert } from 'pelement-react'\r
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
export default AlertCenter`,sr=`import { Alert } from 'pelement-react'\r
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
export default AlertClose`,lr=`import { Alert } from 'pelement-react'\r
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
export default AlertDescription`,cr=`import { Alert } from 'pelement-react'\r
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
export default AlertEffect`,pr=`import { Alert } from 'pelement-react'\r
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
export default AlertIconDescription`,ur=`import { Alert } from 'pelement-react'\r
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
export default AlertIcon`,dr=`import { Avatar, Col, Row } from 'pelement-react'\r
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
export default AvatarBasic`,gr=`import { Avatar } from 'pelement-react'\r
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
export default AvatarError`,mr=`import { Avatar } from "pelement-react"\r
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
export default AvatarFit`,fr=`import { Avatar, UserFilled } from 'pelement-react'\r
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
export default AvatarType`,hr=`import { Backtop } from 'pelement-react'\r
\r
function BacktopBasic() {\r
  return (\r
    <>\r
      Scroll down to see the bottom-right button.\r
      <Backtop right={100} bottom={100} />\r
    </>\r
  )\r
}\r
\r
export default BacktopBasic`,_r=`import { Backtop } from 'pelement-react'\r
\r
function BacktopContent() {\r
  return (\r
    <>\r
      Scroll down to see the bottom-right button.\r
      <Backtop bottom={100}>\r
        <div\r
          style={{\r
            height: '100%',\r
            width: '100%',\r
            backgroundColor: 'var(--el-bg-color-overlay)',\r
            boxShadow: 'var(--el-box-shadow-lighter)',\r
            textAlign: 'center',\r
            lineHeight: '40px',\r
            color: '#1989fa',\r
          }}\r
        >\r
          UP\r
        </div>\r
      </Backtop>\r
    </>\r
  )\r
}\r
\r
export default BacktopContent`,xr=`import { createRef } from 'react'\r
import { Backtop } from 'pelement-react'\r
\r
function BacktopTarget() {\r
  const targetRef = createRef<HTMLDivElement>()\r
\r
  return (\r
    <>\r
      <div style={{ height: '200px', overflow: 'auto' }} ref={targetRef}>\r
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>\r
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>\r
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>\r
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>\r
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>\r
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>\r
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>\r
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>\r
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>\r
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>\r
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>\r
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>\r
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>\r
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>\r
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>\r
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>\r
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>\r
      </div>\r
      <Backtop target={targetRef} right={160} bottom={100} />\r
    </>\r
  )\r
}\r
\r
export default BacktopTarget`,br=`import { Badge, Button } from 'pelement-react'\r
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
export default BadgeBasic`,vr=`import { Badge, Button, Share } from 'pelement-react'\r
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
export default BadgeIsDot`,Br=`import { Badge, Button } from 'pelement-react'\r
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
export default BadgeMax`,yr=`import { Badge, Button } from 'pelement-react'\r
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
export default BadgeValue`,Cr=`import { Button, Check, Delete, Edit, Message, Search, Star } from 'pelement-react'\r
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
export default ButtonBasic`,wr=`import { Button } from 'pelement-react'\r
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
export default ButtonDisabled`,Tr=`import { Button } from 'pelement-react'\r
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
export default ButtonLink`,kr=`import { Button } from 'pelement-react'\r
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
export default ButtonText`,Sr=`import { Collapse, CollapseItem } from 'pelement-react'\r
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
export default CollapseBasic`,Nr=`import { Container, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic`,Er=`import { Container, Footer, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic1`,Ar=`import { Aside, Container, Main } from 'pelement-react'\r
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
export default ContainerBasic2`,Dr=`import { Aside, Container, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic3`,Rr=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic4`,Mr=`import { Aside, Container, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic5`,Lr=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'\r
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
export default ContainerBasic6`,Ir=`import { Button, Dialog } from 'pelement-react'\r
import { useState } from 'react'\r
import './DialogBasic.scss'\r
\r
function DialogBasic() {\r
  const [dialogVisible, setDialogVisible] = useState(false)\r
\r
  function handleClick() {\r
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
      <Button text onClick={handleClick}>\r
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
export default DialogBasic`,Or=`import { useState } from 'react'\r
import { Button, Dialog } from 'pelement-react'\r
\r
function DialogContent() {\r
  const [dialogTableVisible, setDialogTableVisible] = useState(false)\r
  const [dialogFormVisible, setDialogFormVisible] = useState(false)\r
\r
  function handleTable() {\r
    setDialogTableVisible(true)\r
  }\r
\r
  function handleForm() {\r
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
      <Button text onClick={handleTable}>\r
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
      <Button text onClick={handleForm}>\r
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
export default DialogContent`,Pr=`import { useState } from 'react'\r
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
export default DialogHeader`,zr=`import { Divider } from 'pelement-react'\r
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
export default DividerBasic`,Fr=`import { Divider } from 'pelement-react'\r
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
export default DividerBorder`,Hr=`import { Divider, StarFilled } from 'pelement-react'\r
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
export default DividerContent`,Ur=`import { Divider } from 'pelement-react'\r
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
export default DividerDirection`,Wr=`import { useState } from 'react'\r
import { Button, Drawer } from 'pelement-react'\r
\r
function DrawerBasic() {\r
  const [direction, setDirection] = useState('')\r
  const [drawer, setDrawer] = useState(false)\r
  const [drawer2, setDrawer2] = useState(false)\r
\r
  function handleLeftToRight() {\r
    setDirection('ltr')\r
    setDrawer(true)\r
  }\r
\r
  function handleRightToLeft() {\r
    setDirection('rtl')\r
    setDrawer(true)\r
  }\r
\r
  function handleTopToBottom() {\r
    setDirection('ttb')\r
    setDrawer(true)\r
  }\r
\r
  function handleBottomToTop() {\r
    setDirection('btt')\r
    setDrawer(true)\r
  }\r
\r
  function handleLeftToRightFooter() {\r
    setDirection('ltr')\r
    setDrawer2(true)\r
  }\r
\r
  function handleRightToLeftFooter() {\r
    setDirection('rtl')\r
    setDrawer2(true)\r
  }\r
\r
  function handleTopToBottomFooter() {\r
    setDirection('ttb')\r
    setDrawer2(true)\r
  }\r
\r
  function handleBottomToTopFooter() {\r
    setDirection('btt')\r
    setDrawer2(true)\r
  }\r
\r
  function handleClose() {\r
    setDrawer(false)\r
  }\r
\r
  function handleClose2() {\r
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
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleLeftToRight}>\r
          open left to right\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleRightToLeft}>\r
          open right to left\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleTopToBottom}>\r
          open top to bottom\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleBottomToTop}>\r
          open bottom to top\r
        </Button>\r
      </div>\r
      <div style={{ marginTop: '20px' }}>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleLeftToRightFooter}>\r
          open left to right footer\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleRightToLeftFooter}>\r
          open right to left footer\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleTopToBottomFooter}>\r
          open top to bottom footer\r
        </Button>\r
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleBottomToTopFooter}>\r
          open bottom to top footer\r
        </Button>\r
      </div>\r
\r
      <Drawer\r
        open={drawer}\r
        title="I am the title"\r
        direction={direction as any}\r
        onClose={handleClose}\r
      >\r
        <span>Hi, there!</span>\r
      </Drawer>\r
      <Drawer\r
        open={drawer2}\r
        direction={direction as any}\r
        onClose={handleClose2}\r
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
export default DrawerBasic`,jr=`import { useState } from 'react'\r
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
export default DrawerContent`,Gr=`import { useState } from 'react'\r
import { Button, CircleCloseFilled, Drawer } from 'pelement-react'\r
\r
function DrawerHeader() {\r
  const [visible, setVisible] = useState(false)\r
\r
  function handleClose() {\r
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
            <Button type="danger" onClick={handleClose}>\r
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
export default DrawerHeader`,$r=`import { useState } from 'react'\r
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
export default DrawerWithHeader`,Vr=`import { Edit, Search, Check, Message, Star, Delete, View, StarFilled, Loading, Hide, InfoFilled, WarningFilled, CircleCloseFilled, CircleCheckFilled, ArrowRight, CircleCheck, Close, Share } from 'pelement-react'\r
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
export default ButtonBasic`,Kr=`import { useState } from 'react'\r
import { Input } from 'pelement-react'\r
\r
function InputBasic() {\r
  const [text, setText] = useState('')\r
\r
  function handleChange(event: string) {\r
    setText(event)\r
  }\r
\r
  return (\r
    <>\r
      <Input\r
        style={{ width: '240px' }}\r
        placeholder="Please input"\r
        value={text}\r
        onChange={handleChange}\r
      />\r
    </>\r
  )\r
}\r
\r
export default InputBasic`,Zr=`import { useState } from 'react'\r
import { Input } from 'pelement-react'\r
\r
function InputClearable() {\r
  const [text, setText] = useState('')\r
\r
  function handleChange(event: string) {\r
    setText(event)\r
  }\r
\r
  return (\r
    <>\r
      <Input\r
        style={{ width: '240px' }}\r
        placeholder="Please input"\r
        value={text}\r
        clearable\r
        onChange={handleChange}\r
      />\r
    </>\r
  )\r
}\r
\r
export default InputClearable`,Xr=`import { useState } from 'react'\r
import { Input } from 'pelement-react'\r
\r
function InputDisabled() {\r
  const [text, setText] = useState('')\r
\r
  function handleChange(event: string) {\r
    setText(event)\r
  }\r
\r
  return (\r
    <>\r
      <Input\r
        style={{ width: '240px' }}\r
        placeholder="Please input"\r
        value={text}\r
        disabled\r
        onChange={handleChange}\r
      />\r
    </>\r
  )\r
}\r
\r
export default InputDisabled`,qr=`import { useState } from 'react'\r
import { Input } from 'pelement-react'\r
import './InputSize.scss'\r
\r
function InputSize() {\r
  const [text, setText] = useState('')\r
\r
  function handleChange(event: string) {\r
    setText(event)\r
  }\r
\r
  return (\r
    <>\r
      <div className="flex gap-4 mb-4 items-center">\r
        <Input\r
          style={{ width: '240px' }}\r
          placeholder="Please input"\r
          value={text}\r
          size="large"\r
          onChange={handleChange}\r
        />\r
        <Input\r
          style={{ width: '240px' }}\r
          placeholder="Please input"\r
          value={text}\r
          onChange={handleChange}\r
        />\r
        <Input\r
          style={{ width: '240px' }}\r
          placeholder="Please input"\r
          value={text}\r
          size="small"\r
          onChange={handleChange}\r
        />\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default InputSize`,Yr=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutBasic`,Jr=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutBootstrap`,Qr=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutGutter`,et=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutJustify`,rt=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutMix`,tt=`import { Col, Row } from 'pelement-react'\r
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
export default LayoutOffset`,nt=`import { Link } from 'pelement-react'\r
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
export default LinkBasic`,ot=`import { Link } from 'pelement-react'\r
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
export default LinkDisabled`,at=`import { Edit, Link, View } from 'pelement-react'\r
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
export default LinkIcon`,it=`import { Link } from 'pelement-react'\r
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
export default LinkUnderline`,st=`import { Button, message } from 'pelement-react'\r
\r
function MessageBasic() {\r
  let current = 0\r
\r
  function open() {\r
    current++\r
    message.success(\`This is a message.\${current}\`)\r
  }\r
\r
  function openReactNode() {\r
    current++\r
    message.success(<>This is a <span style={{ color: 'teal' }}>message</span>.{current}</>)\r
  }\r
\r
  return (\r
    <>\r
      <Button plain onClick={open}>Show message</Button>\r
      <Button plain onClick={openReactNode}>ReactNode</Button>\r
    </>\r
  )\r
}\r
\r
export default MessageBasic`,lt=`import { Button, message } from 'pelement-react'\r
\r
function MessageCenter() {\r
  const open = () => {\r
    message.open({\r
      message: 'Centered text',\r
      type: 'info',\r
      center: true,\r
    })\r
  }\r
\r
  return (\r
    <>\r
      <Button plain onClick={open}>Centered text</Button>\r
    </>\r
  )\r
}\r
\r
export default MessageCenter`,ct=`import { Button, message } from 'pelement-react'\r
\r
function MessagePlain() {\r
  const open1 = () => {\r
    message.open({\r
      message: 'This is a message.',\r
      type: 'info',\r
      plain: true,\r
    })\r
  }\r
  const open2 = () => {\r
    message.open({\r
      message: 'Congrats, this is a success message.',\r
      type: 'success',\r
      plain: true,\r
    })\r
  }\r
  const open3 = () => {\r
    message.open({\r
      message: 'Warning, this is a warning message.',\r
      type: 'warning',\r
      plain: true,\r
    })\r
  }\r
  const open4 = () => {\r
    message.open({\r
      message: 'Oops, this is a error message.',\r
      type: 'error',\r
      plain: true,\r
    })\r
  }\r
\r
  return (\r
    <>\r
      <Button plain onClick={open2}>Success</Button>\r
      <Button plain onClick={open3}>Warning</Button>\r
      <Button plain onClick={open1}>Message</Button>\r
      <Button plain onClick={open4}>Error</Button>\r
    </>\r
  )\r
}\r
\r
export default MessagePlain`,pt=`import { Button, message } from 'pelement-react'\r
\r
function MessageShowClose() {\r
  const open1 = () => {\r
    message.open({\r
      message: 'This is a message.',\r
      type: 'info',\r
      showClose: true,\r
    })\r
  }\r
  const open2 = () => {\r
    message.open({\r
      message: 'Congrats, this is a success message.',\r
      type: 'success',\r
      showClose: true,\r
    })\r
  }\r
  const open3 = () => {\r
    message.open({\r
      message: 'Warning, this is a warning message.',\r
      type: 'warning',\r
      showClose: true,\r
    })\r
  }\r
  const open4 = () => {\r
    message.open({\r
      message: 'Oops, this is a error message.',\r
      type: 'error',\r
      showClose: true,\r
    })\r
  }\r
\r
  return (\r
    <>\r
      <Button plain onClick={open2}>Success</Button>\r
      <Button plain onClick={open3}>Warning</Button>\r
      <Button plain onClick={open1}>Message</Button>\r
      <Button plain onClick={open4}>Error</Button>\r
    </>\r
  )\r
}\r
\r
export default MessageShowClose`,ut=`import { Button, message } from 'pelement-react'\r
\r
function MessageType() {\r
  const open1 = () => {\r
    message.info('This is a message.')\r
  }\r
  const open2 = () => {\r
    message.success('Congrats, this is a success message.')\r
  }\r
  const open3 = () => {\r
    message.warning('Warning, this is a warning message.')\r
  }\r
  const open4 = () => {\r
    message.error('Oops, this is a error message.')\r
  }\r
\r
  return (\r
    <>\r
      <Button plain onClick={open2}>Success</Button>\r
      <Button plain onClick={open3}>Warning</Button>\r
      <Button plain onClick={open1}>Message</Button>\r
      <Button plain onClick={open4}>Error</Button>\r
    </>\r
  )\r
}\r
\r
export default MessageType`,dt=`import { Button, messageBox } from 'pelement-react'\r
\r
function MessageBoxBasic() {\r
  function open() {\r
    messageBox.alert('This is a message', 'Title', {\r
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
export default MessageBoxBasic`,gt=`import { Button, messageBox } from 'pelement-react'\r
\r
function MessageBoxConfirm() {\r
  function open() {\r
    messageBox.confirm(\r
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
export default MessageBoxConfirm`,mt=`import { Button, messageBox, Switch } from 'pelement-react'\r
\r
function MessageBoxMessage() {\r
  function open() {\r
    messageBox.alert(\r
      <><span>Message can be </span><i style={{ color: 'teal' }}>VNode</i></>,\r
      'Message',\r
    )\r
  }\r
\r
  function open1() {\r
    messageBox.alert(\r
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
export default MessageBoxMessage`,ft=`import { Button, notification } from 'pelement-react'\r
\r
function NotificationBasic() {\r
  function open1() {\r
    notification.open({\r
      title: 'Title',\r
      message: <i style={{ color: 'teal' }}>This is a reminder</i>\r
    })\r
  }\r
\r
  function open2() {\r
    notification.open({\r
      title: 'Prompt',\r
      message: 'This is a message that does not automatically close',\r
      duration: 0,\r
    })\r
  }\r
\r
  return (\r
    <>\r
      <Button plain onClick={open1}>Closes automatically</Button>\r
      <Button plain onClick={open2}>Won't close automatically</Button>\r
    </>\r
  )\r
}\r
\r
export default NotificationBasic`,ht=`import { Button, notification } from 'pelement-react'\r
\r
function NotificationType() {\r
  function open1() {\r
    notification.open({\r
      title: 'Custom Position',\r
      message: "I'm at the top right corner",\r
    })\r
  }\r
\r
  function open2() {\r
    notification.open({\r
      title: 'Custom Position',\r
      message: "I'm at the bottom right corner",\r
      position: 'bottom-right',\r
    })\r
  }\r
\r
  function open3() {\r
    notification.open({\r
      title: 'Custom Position',\r
      message: "I'm at the bottom left corner",\r
      position: 'bottom-left',\r
    })\r
  }\r
\r
  function open4() {\r
    notification.open({\r
      title: 'Custom Position',\r
      message: "I'm at the top left corner",\r
      position: 'top-left',\r
    })\r
  }\r
\r
  return (\r
    <>\r
      <Button plain onClick={open1}>Top Right</Button>\r
      <Button plain onClick={open2}>Bottom Right</Button>\r
      <Button plain onClick={open3}>Bottom Left</Button>\r
      <Button plain onClick={open4}>Top Left</Button>\r
    </>\r
  )\r
}\r
\r
export default NotificationType`,_t=`import { Button, notification } from 'pelement-react'\r
\r
function NotificationShowClose() {\r
  function open1() {\r
    notification.open({\r
      title: 'Info',\r
      message: 'This is a message without close button',\r
      showClose: false,\r
    })\r
  }\r
\r
  return (\r
    <>\r
      <Button plain onClick={open1}>Hide close button</Button>\r
    </>\r
  )\r
}\r
\r
export default NotificationShowClose`,xt=`import { Button, notification } from 'pelement-react'\r
\r
function NotificationType() {\r
  function open1() {\r
    notification.open({\r
      title: 'Success',\r
      message: 'This is a success message',\r
      type: 'success',\r
    })\r
  }\r
\r
  function open2() {\r
    notification.open({\r
      title: 'Warning',\r
      message: 'This is a warning message',\r
      type: 'warning',\r
    })\r
  }\r
\r
  function open3() {\r
    notification.open({\r
      title: 'Info',\r
      message: 'This is an info message',\r
      type: 'info',\r
    })\r
  }\r
\r
  function open4() {\r
    notification.open({\r
      title: 'Error',\r
      message: 'This is an error message',\r
      type: 'error',\r
    })\r
  }\r
\r
  return (\r
    <>\r
      <Button plain onClick={open1}>Success</Button>\r
      <Button plain onClick={open2}>Warning</Button>\r
      <Button plain onClick={open3}>Info</Button>\r
      <Button plain onClick={open4}>Error</Button>\r
    </>\r
  )\r
}\r
\r
export default NotificationType`,bt=`import { Button, Popconfirm } from 'pelement-react'\r
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
export default PopconfirmBasic`,vt=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'\r
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
export default PopconfirmEvent`,Bt=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'\r
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
export default PopconfirmIcon`,yt=`import { Button, Popover } from 'pelement-react'\r
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
export default PopoverBasic`,Ct=`import { Progress } from 'pelement-react'\r
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
export default ProgressBasic`,wt=`import { Progress } from 'pelement-react'\r
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
export default ProgressTextInside`,Tt=`import { Rate } from 'pelement-react'\r
\r
function RateBasic() {\r
  return (\r
    <>\r
      <Rate></Rate>\r
    </>\r
  )\r
}\r
\r
export default RateBasic`,kt=`import { Button, Col, Result, Row } from 'pelement-react'\r
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
export default ResultBasic`,St=`import { Button, Result } from 'pelement-react'\r
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
export default ResultIcon`,Nt=`import { Scrollbar } from 'pelement-react'\r
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
export default ScrollbarBasic`,Et=`import { Button, Space } from 'pelement-react'\r
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
export default SpaceAlignment`,At=`import { Space } from 'pelement-react'\r
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
export default SpaceBasic`,Dt=`import { Space } from 'pelement-react'\r
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
export default SpaceDirection`,Rt=`import { Space } from 'pelement-react'\r
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
export default SpaceSize`,Mt=`import { Space } from 'pelement-react'\r
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
export default SpaceSize2`,Lt=`import { Button, Space } from 'pelement-react'\r
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
export default SpaceSpacer`,It=`import { Button, Divider, Space } from 'pelement-react'\r
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
export default SpaceSpacer2`,Ot=`import { Button, Space } from 'pelement-react'\r
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
export default SpaceWrap`,Pt=`import { Hide, Switch, View } from 'pelement-react'\r
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
export default SwitchActionIcon`,zt=`import { Switch } from 'pelement-react'\r
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
export default SwitchBasic`,Ft=`import { useState } from 'react'\r
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
export default SwitchBeforeChange`,Ht=`import { Switch } from 'pelement-react'\r
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
export default SwitchDisabled`,Ut=`import { Check, Close, Switch } from 'pelement-react'\r
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
export default SwitchIcon`,Wt=`import { Switch } from 'pelement-react'\r
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
export default SwitchLoading`,jt=`import { Switch } from 'pelement-react'\r
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
export default SwitchSize`,Gt=`import { Switch } from 'pelement-react'\r
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
export default SwitchText`,$t=`import { Table } from 'pelement-react'\r
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
export default TableBasic`,Vt=`import { Table } from 'pelement-react'\r
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
export default TableBorder`,Kt=`import { Table } from 'pelement-react'\r
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
export default TableStripe`,Zt=`import { Tag } from 'pelement-react'\r
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
export default TagBasic`,Xt=`import { Tag } from 'pelement-react'\r
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
export default TagClosable`,qt=`import { Tag } from 'pelement-react'\r
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
export default TagEffect`,Yt=`import { Tag } from 'pelement-react'\r
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
export default TagRound`,Jt=`import { Row, Tag } from 'pelement-react'\r
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
export default TagSize`,Qt=`import { Text } from 'pelement-react'\r
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
export default TextBasic`,en=`import { Text } from 'pelement-react'\r
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
export default TextSize`,rn=`import { Row, Text } from 'pelement-react'\r
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
export default TextTruncated`,tn=`import { Button, Tooltip } from 'pelement-react'\r
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
export default TooltipBasic`,nn=`import { Button, Tooltip } from 'pelement-react'\r
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
export default TooltipContent`,on=`import { useState } from 'react'\r
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
export default TooltipDisabled`,an=`import { Button, Tooltip } from 'pelement-react'\r
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
export default TooltipEffect`;function Oe(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(r=>{const n=e[r],s=typeof n;(s==="object"||s==="function")&&!Object.isFrozen(n)&&Oe(n)}),e}class Ne{constructor(r){r.data===void 0&&(r.data={}),this.data=r.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Pe(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function L(e,...r){const n=Object.create(null);for(const s in e)n[s]=e[s];return r.forEach(function(s){for(const f in s)n[f]=s[f]}),n}const sn="</span>",Ee=e=>!!e.scope,ln=(e,{prefix:r})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${r}${n.shift()}`,...n.map((s,f)=>`${s}${"_".repeat(f+1)}`)].join(" ")}return`${r}${e}`};class cn{constructor(r,n){this.buffer="",this.classPrefix=n.classPrefix,r.walk(this)}addText(r){this.buffer+=Pe(r)}openNode(r){if(!Ee(r))return;const n=ln(r.scope,{prefix:this.classPrefix});this.span(n)}closeNode(r){Ee(r)&&(this.buffer+=sn)}value(){return this.buffer}span(r){this.buffer+=`<span class="${r}">`}}const Ae=(e={})=>{const r={children:[]};return Object.assign(r,e),r};class _e{constructor(){this.rootNode=Ae(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(r){this.top.children.push(r)}openNode(r){const n=Ae({scope:r});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(r){return this.constructor._walk(r,this.rootNode)}static _walk(r,n){return typeof n=="string"?r.addText(n):n.children&&(r.openNode(n),n.children.forEach(s=>this._walk(r,s)),r.closeNode(n)),r}static _collapse(r){typeof r!="string"&&r.children&&(r.children.every(n=>typeof n=="string")?r.children=[r.children.join("")]:r.children.forEach(n=>{_e._collapse(n)}))}}class pn extends _e{constructor(r){super(),this.options=r}addText(r){r!==""&&this.add(r)}startScope(r){this.openNode(r)}endScope(){this.closeNode()}__addSublanguage(r,n){const s=r.root;n&&(s.scope=`language:${n}`),this.add(s)}toHTML(){return new cn(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Z(e){return e?typeof e=="string"?e:e.source:null}function ze(e){return F("(?=",e,")")}function un(e){return F("(?:",e,")*")}function dn(e){return F("(?:",e,")?")}function F(...e){return e.map(n=>Z(n)).join("")}function gn(e){const r=e[e.length-1];return typeof r=="object"&&r.constructor===Object?(e.splice(e.length-1,1),r):{}}function xe(...e){return"("+(gn(e).capture?"":"?:")+e.map(s=>Z(s)).join("|")+")"}function Fe(e){return new RegExp(e.toString()+"|").exec("").length-1}function mn(e,r){const n=e&&e.exec(r);return n&&n.index===0}const fn=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function be(e,{joinWith:r}){let n=0;return e.map(s=>{n+=1;const f=n;let h=Z(s),i="";for(;h.length>0;){const o=fn.exec(h);if(!o){i+=h;break}i+=h.substring(0,o.index),h=h.substring(o.index+o[0].length),o[0][0]==="\\"&&o[1]?i+="\\"+String(Number(o[1])+f):(i+=o[0],o[0]==="("&&n++)}return i}).map(s=>`(${s})`).join(r)}const hn=/\b\B/,He="[a-zA-Z]\\w*",ve="[a-zA-Z_]\\w*",Ue="\\b\\d+(\\.\\d+)?",We="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",je="\\b(0b[01]+)",_n="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",xn=(e={})=>{const r=/^#![ ]*\//;return e.binary&&(e.begin=F(r,/.*\b/,e.binary,/\b.*/)),L({scope:"meta",begin:r,end:/$/,relevance:0,"on:begin":(n,s)=>{n.index!==0&&s.ignoreMatch()}},e)},X={begin:"\\\\[\\s\\S]",relevance:0},bn={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[X]},vn={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[X]},Bn={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},le=function(e,r,n={}){const s=L({scope:"comment",begin:e,end:r,contains:[]},n);s.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const f=xe("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return s.contains.push({begin:F(/[ ]+/,"(",f,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),s},yn=le("//","$"),Cn=le("/\\*","\\*/"),wn=le("#","$"),Tn={scope:"number",begin:Ue,relevance:0},kn={scope:"number",begin:We,relevance:0},Sn={scope:"number",begin:je,relevance:0},Nn={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[X,{begin:/\[/,end:/\]/,relevance:0,contains:[X]}]},En={scope:"title",begin:He,relevance:0},An={scope:"title",begin:ve,relevance:0},Dn={begin:"\\.\\s*"+ve,relevance:0},Rn=function(e){return Object.assign(e,{"on:begin":(r,n)=>{n.data._beginMatch=r[1]},"on:end":(r,n)=>{n.data._beginMatch!==r[1]&&n.ignoreMatch()}})};var ie=Object.freeze({__proto__:null,APOS_STRING_MODE:bn,BACKSLASH_ESCAPE:X,BINARY_NUMBER_MODE:Sn,BINARY_NUMBER_RE:je,COMMENT:le,C_BLOCK_COMMENT_MODE:Cn,C_LINE_COMMENT_MODE:yn,C_NUMBER_MODE:kn,C_NUMBER_RE:We,END_SAME_AS_BEGIN:Rn,HASH_COMMENT_MODE:wn,IDENT_RE:He,MATCH_NOTHING_RE:hn,METHOD_GUARD:Dn,NUMBER_MODE:Tn,NUMBER_RE:Ue,PHRASAL_WORDS_MODE:Bn,QUOTE_STRING_MODE:vn,REGEXP_MODE:Nn,RE_STARTERS_RE:_n,SHEBANG:xn,TITLE_MODE:En,UNDERSCORE_IDENT_RE:ve,UNDERSCORE_TITLE_MODE:An});function Mn(e,r){e.input[e.index-1]==="."&&r.ignoreMatch()}function Ln(e,r){e.className!==void 0&&(e.scope=e.className,delete e.className)}function In(e,r){r&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Mn,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function On(e,r){Array.isArray(e.illegal)&&(e.illegal=xe(...e.illegal))}function Pn(e,r){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function zn(e,r){e.relevance===void 0&&(e.relevance=1)}const Fn=(e,r)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(s=>{delete e[s]}),e.keywords=n.keywords,e.begin=F(n.beforeMatch,ze(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},Hn=["of","and","for","in","not","or","if","then","parent","list","value"],Un="keyword";function Ge(e,r,n=Un){const s=Object.create(null);return typeof e=="string"?f(n,e.split(" ")):Array.isArray(e)?f(n,e):Object.keys(e).forEach(function(h){Object.assign(s,Ge(e[h],r,h))}),s;function f(h,i){r&&(i=i.map(o=>o.toLowerCase())),i.forEach(function(o){const p=o.split("|");s[p[0]]=[h,Wn(p[0],p[1])]})}}function Wn(e,r){return r?Number(r):jn(e)?0:1}function jn(e){return Hn.includes(e.toLowerCase())}const De={},z=e=>{console.error(e)},Re=(e,...r)=>{console.log(`WARN: ${e}`,...r)},j=(e,r)=>{De[`${e}/${r}`]||(console.log(`Deprecated as of ${e}. ${r}`),De[`${e}/${r}`]=!0)},se=new Error;function $e(e,r,{key:n}){let s=0;const f=e[n],h={},i={};for(let o=1;o<=r.length;o++)i[o+s]=f[o],h[o+s]=!0,s+=Fe(r[o-1]);e[n]=i,e[n]._emit=h,e[n]._multi=!0}function Gn(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw z("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),se;if(typeof e.beginScope!="object"||e.beginScope===null)throw z("beginScope must be object"),se;$e(e,e.begin,{key:"beginScope"}),e.begin=be(e.begin,{joinWith:""})}}function $n(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw z("skip, excludeEnd, returnEnd not compatible with endScope: {}"),se;if(typeof e.endScope!="object"||e.endScope===null)throw z("endScope must be object"),se;$e(e,e.end,{key:"endScope"}),e.end=be(e.end,{joinWith:""})}}function Vn(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Kn(e){Vn(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Gn(e),$n(e)}function Zn(e){function r(i,o){return new RegExp(Z(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(o?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(o,p){p.position=this.position++,this.matchIndexes[this.matchAt]=p,this.regexes.push([p,o]),this.matchAt+=Fe(o)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const o=this.regexes.map(p=>p[1]);this.matcherRe=r(be(o,{joinWith:"|"}),!0),this.lastIndex=0}exec(o){this.matcherRe.lastIndex=this.lastIndex;const p=this.matcherRe.exec(o);if(!p)return null;const _=p.findIndex((S,E)=>E>0&&S!==void 0),b=this.matchIndexes[_];return p.splice(0,_),Object.assign(p,b)}}class s{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(o){if(this.multiRegexes[o])return this.multiRegexes[o];const p=new n;return this.rules.slice(o).forEach(([_,b])=>p.addRule(_,b)),p.compile(),this.multiRegexes[o]=p,p}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(o,p){this.rules.push([o,p]),p.type==="begin"&&this.count++}exec(o){const p=this.getMatcher(this.regexIndex);p.lastIndex=this.lastIndex;let _=p.exec(o);if(this.resumingScanAtSamePosition()&&!(_&&_.index===this.lastIndex)){const b=this.getMatcher(0);b.lastIndex=this.lastIndex+1,_=b.exec(o)}return _&&(this.regexIndex+=_.position+1,this.regexIndex===this.count&&this.considerAll()),_}}function f(i){const o=new s;return i.contains.forEach(p=>o.addRule(p.begin,{rule:p,type:"begin"})),i.terminatorEnd&&o.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&o.addRule(i.illegal,{type:"illegal"}),o}function h(i,o){const p=i;if(i.isCompiled)return p;[Ln,Pn,Kn,Fn].forEach(b=>b(i,o)),e.compilerExtensions.forEach(b=>b(i,o)),i.__beforeBegin=null,[In,On,zn].forEach(b=>b(i,o)),i.isCompiled=!0;let _=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),_=i.keywords.$pattern,delete i.keywords.$pattern),_=_||/\w+/,i.keywords&&(i.keywords=Ge(i.keywords,e.case_insensitive)),p.keywordPatternRe=r(_,!0),o&&(i.begin||(i.begin=/\B|\b/),p.beginRe=r(p.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(p.endRe=r(p.end)),p.terminatorEnd=Z(p.end)||"",i.endsWithParent&&o.terminatorEnd&&(p.terminatorEnd+=(i.end?"|":"")+o.terminatorEnd)),i.illegal&&(p.illegalRe=r(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(b){return Xn(b==="self"?i:b)})),i.contains.forEach(function(b){h(b,p)}),i.starts&&h(i.starts,o),p.matcher=f(p),p}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=L(e.classNameAliases||{}),h(e)}function Ve(e){return e?e.endsWithParent||Ve(e.starts):!1}function Xn(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(r){return L(e,{variants:null},r)})),e.cachedVariants?e.cachedVariants:Ve(e)?L(e,{starts:e.starts?L(e.starts):null}):Object.isFrozen(e)?L(e):e}var qn="11.9.0";class Yn extends Error{constructor(r,n){super(r),this.name="HTMLInjectionError",this.html=n}}const he=Pe,Me=L,Le=Symbol("nomatch"),Jn=7,Ke=function(e){const r=Object.create(null),n=Object.create(null),s=[];let f=!0;const h="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let o={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:pn};function p(t){return o.noHighlightRe.test(t)}function _(t){let l=t.className+" ";l+=t.parentNode?t.parentNode.className:"";const d=o.languageDetectRe.exec(l);if(d){const m=A(d[1]);return m||(Re(h.replace("{}",d[1])),Re("Falling back to no-highlight mode for this block.",t)),m?d[1]:"no-highlight"}return l.split(/\s+/).find(m=>p(m)||A(m))}function b(t,l,d){let m="",B="";typeof l=="object"?(m=t,d=l.ignoreIllegals,B=l.language):(j("10.7.0","highlight(lang, code, ...args) has been deprecated."),j("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),B=t,m=l),d===void 0&&(d=!0);const w={code:m,language:B};W("before:highlight",w);const N=w.result?w.result:S(w.language,w.code,d);return N.code=w.code,W("after:highlight",N),N}function S(t,l,d,m){const B=Object.create(null);function w(a,c){return a.keywords[c]}function N(){if(!u.keywords){y.addText(v);return}let a=0;u.keywordPatternRe.lastIndex=0;let c=u.keywordPatternRe.exec(v),g="";for(;c;){g+=v.substring(a,c.index);const x=R.case_insensitive?c[0].toLowerCase():c[0],C=w(u,x);if(C){const[M,tr]=C;if(y.addText(g),g="",B[x]=(B[x]||0)+1,B[x]<=Jn&&(oe+=tr),M.startsWith("_"))g+=c[0];else{const nr=R.classNameAliases[M]||M;D(c[0],nr)}}else g+=c[0];a=u.keywordPatternRe.lastIndex,c=u.keywordPatternRe.exec(v)}g+=v.substring(a),y.addText(g)}function te(){if(v==="")return;let a=null;if(typeof u.subLanguage=="string"){if(!r[u.subLanguage]){y.addText(v);return}a=S(u.subLanguage,v,!0,Se[u.subLanguage]),Se[u.subLanguage]=a._top}else a=H(v,u.subLanguage.length?u.subLanguage:null);u.relevance>0&&(oe+=a.relevance),y.__addSublanguage(a._emitter,a.language)}function T(){u.subLanguage!=null?te():N(),v=""}function D(a,c){a!==""&&(y.startScope(c),y.addText(a),y.endScope())}function Ce(a,c){let g=1;const x=c.length-1;for(;g<=x;){if(!a._emit[g]){g++;continue}const C=R.classNameAliases[a[g]]||a[g],M=c[g];C?D(M,C):(v=M,N(),v=""),g++}}function we(a,c){return a.scope&&typeof a.scope=="string"&&y.openNode(R.classNameAliases[a.scope]||a.scope),a.beginScope&&(a.beginScope._wrap?(D(v,R.classNameAliases[a.beginScope._wrap]||a.beginScope._wrap),v=""):a.beginScope._multi&&(Ce(a.beginScope,c),v="")),u=Object.create(a,{parent:{value:u}}),u}function Te(a,c,g){let x=mn(a.endRe,g);if(x){if(a["on:end"]){const C=new Ne(a);a["on:end"](c,C),C.isMatchIgnored&&(x=!1)}if(x){for(;a.endsParent&&a.parent;)a=a.parent;return a}}if(a.endsWithParent)return Te(a.parent,c,g)}function Ye(a){return u.matcher.regexIndex===0?(v+=a[0],1):(fe=!0,0)}function Je(a){const c=a[0],g=a.rule,x=new Ne(g),C=[g.__beforeBegin,g["on:begin"]];for(const M of C)if(M&&(M(a,x),x.isMatchIgnored))return Ye(c);return g.skip?v+=c:(g.excludeBegin&&(v+=c),T(),!g.returnBegin&&!g.excludeBegin&&(v=c)),we(g,a),g.returnBegin?0:c.length}function Qe(a){const c=a[0],g=l.substring(a.index),x=Te(u,a,g);if(!x)return Le;const C=u;u.endScope&&u.endScope._wrap?(T(),D(c,u.endScope._wrap)):u.endScope&&u.endScope._multi?(T(),Ce(u.endScope,a)):C.skip?v+=c:(C.returnEnd||C.excludeEnd||(v+=c),T(),C.excludeEnd&&(v=c));do u.scope&&y.closeNode(),!u.skip&&!u.subLanguage&&(oe+=u.relevance),u=u.parent;while(u!==x.parent);return x.starts&&we(x.starts,a),C.returnEnd?0:c.length}function er(){const a=[];for(let c=u;c!==R;c=c.parent)c.scope&&a.unshift(c.scope);a.forEach(c=>y.openNode(c))}let ne={};function ke(a,c){const g=c&&c[0];if(v+=a,g==null)return T(),0;if(ne.type==="begin"&&c.type==="end"&&ne.index===c.index&&g===""){if(v+=l.slice(c.index,c.index+1),!f){const x=new Error(`0 width match regex (${t})`);throw x.languageName=t,x.badRule=ne.rule,x}return 1}if(ne=c,c.type==="begin")return Je(c);if(c.type==="illegal"&&!d){const x=new Error('Illegal lexeme "'+g+'" for mode "'+(u.scope||"<unnamed>")+'"');throw x.mode=u,x}else if(c.type==="end"){const x=Qe(c);if(x!==Le)return x}if(c.type==="illegal"&&g==="")return 1;if(me>1e5&&me>c.index*3)throw new Error("potential infinite loop, way more iterations than matches");return v+=g,g.length}const R=A(t);if(!R)throw z(h.replace("{}",t)),new Error('Unknown language: "'+t+'"');const rr=Zn(R);let ge="",u=m||rr;const Se={},y=new o.__emitter(o);er();let v="",oe=0,P=0,me=0,fe=!1;try{if(R.__emitTokens)R.__emitTokens(l,y);else{for(u.matcher.considerAll();;){me++,fe?fe=!1:u.matcher.considerAll(),u.matcher.lastIndex=P;const a=u.matcher.exec(l);if(!a)break;const c=l.substring(P,a.index),g=ke(c,a);P=a.index+g}ke(l.substring(P))}return y.finalize(),ge=y.toHTML(),{language:t,value:ge,relevance:oe,illegal:!1,_emitter:y,_top:u}}catch(a){if(a.message&&a.message.includes("Illegal"))return{language:t,value:he(l),illegal:!0,relevance:0,_illegalBy:{message:a.message,index:P,context:l.slice(P-100,P+100),mode:a.mode,resultSoFar:ge},_emitter:y};if(f)return{language:t,value:he(l),illegal:!1,relevance:0,errorRaised:a,_emitter:y,_top:u};throw a}}function E(t){const l={value:he(t),illegal:!1,relevance:0,_top:i,_emitter:new o.__emitter(o)};return l._emitter.addText(t),l}function H(t,l){l=l||o.languages||Object.keys(r);const d=E(t),m=l.filter(A).filter(ee).map(T=>S(T,t,!1));m.unshift(d);const B=m.sort((T,D)=>{if(T.relevance!==D.relevance)return D.relevance-T.relevance;if(T.language&&D.language){if(A(T.language).supersetOf===D.language)return 1;if(A(D.language).supersetOf===T.language)return-1}return 0}),[w,N]=B,te=w;return te.secondBest=N,te}function q(t,l,d){const m=l&&n[l]||d;t.classList.add("hljs"),t.classList.add(`language-${m}`)}function U(t){let l=null;const d=_(t);if(p(d))return;if(W("before:highlightElement",{el:t,language:d}),t.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",t);return}if(t.children.length>0&&(o.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(t)),o.throwUnescapedHTML))throw new Yn("One of your code blocks includes unescaped HTML.",t.innerHTML);l=t;const m=l.textContent,B=d?b(m,{language:d,ignoreIllegals:!0}):H(m);t.innerHTML=B.value,t.dataset.highlighted="yes",q(t,d,B.language),t.result={language:B.language,re:B.relevance,relevance:B.relevance},B.secondBest&&(t.secondBest={language:B.secondBest.language,relevance:B.secondBest.relevance}),W("after:highlightElement",{el:t,result:B,text:m})}function Y(t){o=Me(o,t)}const ye=()=>{I(),j("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function $(){I(),j("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let V=!1;function I(){if(document.readyState==="loading"){V=!0;return}document.querySelectorAll(o.cssSelector).forEach(U)}function K(){V&&I()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",K,!1);function O(t,l){let d=null;try{d=l(e)}catch(m){if(z("Language definition for '{}' could not be registered.".replace("{}",t)),f)z(m);else throw m;d=i}d.name||(d.name=t),r[t]=d,d.rawDefinition=l.bind(null,e),d.aliases&&Q(d.aliases,{languageName:t})}function ce(t){delete r[t];for(const l of Object.keys(n))n[l]===t&&delete n[l]}function J(){return Object.keys(r)}function A(t){return t=(t||"").toLowerCase(),r[t]||r[n[t]]}function Q(t,{languageName:l}){typeof t=="string"&&(t=[t]),t.forEach(d=>{n[d.toLowerCase()]=l})}function ee(t){const l=A(t);return l&&!l.disableAutodetect}function pe(t){t["before:highlightBlock"]&&!t["before:highlightElement"]&&(t["before:highlightElement"]=l=>{t["before:highlightBlock"](Object.assign({block:l.el},l))}),t["after:highlightBlock"]&&!t["after:highlightElement"]&&(t["after:highlightElement"]=l=>{t["after:highlightBlock"](Object.assign({block:l.el},l))})}function ue(t){pe(t),s.push(t)}function de(t){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}function W(t,l){const d=t;s.forEach(function(m){m[d]&&m[d](l)})}function re(t){return j("10.7.0","highlightBlock will be removed entirely in v12.0"),j("10.7.0","Please use highlightElement now."),U(t)}Object.assign(e,{highlight:b,highlightAuto:H,highlightAll:I,highlightElement:U,highlightBlock:re,configure:Y,initHighlighting:ye,initHighlightingOnLoad:$,registerLanguage:O,unregisterLanguage:ce,listLanguages:J,getLanguage:A,registerAliases:Q,autoDetection:ee,inherit:Me,addPlugin:ue,removePlugin:de}),e.debugMode=function(){f=!1},e.safeMode=function(){f=!0},e.versionString=qn,e.regex={concat:F,lookahead:ze,either:xe,optional:dn,anyNumberOfTimes:un};for(const t in ie)typeof ie[t]=="object"&&Oe(ie[t]);return Object.assign(e,ie),e},G=Ke({});G.newInstance=()=>Ke({});var Qn=G;G.HighlightJS=G;G.default=G;const Be=or(Qn);function eo(e){const r=e.regex,n=r.concat(/[\p{L}_]/u,r.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),s=/[\p{L}0-9._:-]+/u,f={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},h={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=e.inherit(h,{begin:/\(/,end:/\)/}),o=e.inherit(e.APOS_STRING_MODE,{className:"string"}),p=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),_={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:s,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[f]},{begin:/'/,end:/'/,contains:[f]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[h,p,o,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[h,i,p,o]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},f,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[p]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[_],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[_],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:r.concat(/</,r.lookahead(r.concat(n,r.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:_}]},{className:"tag",begin:r.concat(/<\//,r.lookahead(r.concat(n,/>/))),contains:[{className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Ie="[A-Za-z$_][0-9A-Za-z$_]*",ro=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],to=["true","false","null","undefined","NaN","Infinity"],Ze=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Xe=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],qe=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],no=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],oo=[].concat(qe,Ze,Xe);function ao(e){const r=e.regex,n=(l,{after:d})=>{const m="</"+l[0].slice(1);return l.input.indexOf(m,d)!==-1},s=Ie,f={begin:"<>",end:"</>"},h=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(l,d)=>{const m=l[0].length+l.index,B=l.input[m];if(B==="<"||B===","){d.ignoreMatch();return}B===">"&&(n(l,{after:m})||d.ignoreMatch());let w;const N=l.input.substring(m);if(w=N.match(/^\s*=/)){d.ignoreMatch();return}if((w=N.match(/^\s+extends\s+/))&&w.index===0){d.ignoreMatch();return}}},o={$pattern:Ie,keyword:ro,literal:to,built_in:oo,"variable.language":no},p="[0-9](_?[0-9])*",_=`\\.(${p})`,b="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",S={className:"number",variants:[{begin:`(\\b(${b})((${_})|\\.)?|(${_}))[eE][+-]?(${p})\\b`},{begin:`\\b(${b})\\b((${_})\\b|\\.)?|(${_})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},E={className:"subst",begin:"\\$\\{",end:"\\}",keywords:o,contains:[]},H={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,E],subLanguage:"xml"}},q={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,E],subLanguage:"css"}},U={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,E],subLanguage:"graphql"}},Y={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,E]},$={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:s+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},V=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,H,q,U,Y,{match:/\$\d+/},S];E.contains=V.concat({begin:/\{/,end:/\}/,keywords:o,contains:["self"].concat(V)});const I=[].concat($,E.contains),K=I.concat([{begin:/\(/,end:/\)/,keywords:o,contains:["self"].concat(I)}]),O={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:K},ce={variants:[{match:[/class/,/\s+/,s,/\s+/,/extends/,/\s+/,r.concat(s,"(",r.concat(/\./,s),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,s],scope:{1:"keyword",3:"title.class"}}]},J={relevance:0,match:r.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Ze,...Xe]}},A={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Q={variants:[{match:[/function/,/\s+/,s,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[O],illegal:/%/},ee={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function pe(l){return r.concat("(?!",l.join("|"),")")}const ue={match:r.concat(/\b/,pe([...qe,"super","import"]),s,r.lookahead(/\(/)),className:"title.function",relevance:0},de={begin:r.concat(/\./,r.lookahead(r.concat(s,/(?![0-9A-Za-z$_(])/))),end:s,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},W={match:[/get|set/,/\s+/,s,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},O]},re="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",t={match:[/const|var|let/,/\s+/,s,/\s*/,/=\s*/,/(async\s*)?/,r.lookahead(re)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[O]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:o,exports:{PARAMS_CONTAINS:K,CLASS_REFERENCE:J},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),A,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,H,q,U,Y,$,{match:/\$\d+/},S,J,{className:"attr",begin:s+r.lookahead(":"),relevance:0},t,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[$,e.REGEXP_MODE,{className:"function",begin:re,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:K}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:f.begin,end:f.end},{match:h},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},Q,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[O,e.inherit(e.TITLE_MODE,{begin:s,className:"title.function"})]},{match:/\.\.\./,relevance:0},de,{match:"\\$"+s,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[O]},ue,ee,ce,W,{match:/\$[(.]/}]}}Be.registerLanguage("xml",eo);Be.registerLanguage("javascript",ao);function so({language:e="javascript",name:r,children:n}){const s=ae.useRef(null),[f,h]=ae.useState(!1),[i,o]=ae.useState(""),p=Object.assign({"../../../packages/Alert/_example/AlertBasic.tsx":ar,"../../../packages/Alert/_example/AlertCenter.tsx":ir,"../../../packages/Alert/_example/AlertClose.tsx":sr,"../../../packages/Alert/_example/AlertDescription.tsx":lr,"../../../packages/Alert/_example/AlertEffect.tsx":cr,"../../../packages/Alert/_example/AlertIconDescription.tsx":pr,"../../../packages/Alert/_example/AlertShowIcon.tsx":ur,"../../../packages/Avatar/_example/AvatarBasic.tsx":dr,"../../../packages/Avatar/_example/AvatarError.tsx":gr,"../../../packages/Avatar/_example/AvatarFit.tsx":mr,"../../../packages/Avatar/_example/AvatarType.tsx":fr,"../../../packages/Backtop/_example/BacktopBasic.tsx":hr,"../../../packages/Backtop/_example/BacktopContent.tsx":_r,"../../../packages/Backtop/_example/BacktopTarget.tsx":xr,"../../../packages/Badge/_example/BadgeBasic.tsx":br,"../../../packages/Badge/_example/BadgeIsDot.tsx":vr,"../../../packages/Badge/_example/BadgeMax.tsx":Br,"../../../packages/Badge/_example/BadgeValue.tsx":yr,"../../../packages/Button/_example/ButtonBasic.tsx":Cr,"../../../packages/Button/_example/ButtonDisabled.tsx":wr,"../../../packages/Button/_example/ButtonLink.tsx":Tr,"../../../packages/Button/_example/ButtonText.tsx":kr,"../../../packages/Collapse/_example/CollapseBasic.tsx":Sr,"../../../packages/Container/_example/ContainerBasic.tsx":Nr,"../../../packages/Container/_example/ContainerBasic1.tsx":Er,"../../../packages/Container/_example/ContainerBasic2.tsx":Ar,"../../../packages/Container/_example/ContainerBasic3.tsx":Dr,"../../../packages/Container/_example/ContainerBasic4.tsx":Rr,"../../../packages/Container/_example/ContainerBasic5.tsx":Mr,"../../../packages/Container/_example/ContainerBasic6.tsx":Lr,"../../../packages/Dialog/_example/DialogBasic.tsx":Ir,"../../../packages/Dialog/_example/DialogContent.tsx":Or,"../../../packages/Dialog/_example/DialogHeader.tsx":Pr,"../../../packages/Divider/_example/DividerBasic.tsx":zr,"../../../packages/Divider/_example/DividerBorder.tsx":Fr,"../../../packages/Divider/_example/DividerContent.tsx":Hr,"../../../packages/Divider/_example/DividerDirection.tsx":Ur,"../../../packages/Drawer/_example/DrawerBasic.tsx":Wr,"../../../packages/Drawer/_example/DrawerContent.tsx":jr,"../../../packages/Drawer/_example/DrawerHeader.tsx":Gr,"../../../packages/Drawer/_example/DrawerWIthHeader.tsx":$r,"../../../packages/Icon/_example/IconBasic.tsx":Vr,"../../../packages/Input/_example/InputBasic.tsx":Kr,"../../../packages/Input/_example/InputClearable.tsx":Zr,"../../../packages/Input/_example/InputDisabled.tsx":Xr,"../../../packages/Input/_example/InputSize.tsx":qr,"../../../packages/Layout/_example/LayoutBasic.tsx":Yr,"../../../packages/Layout/_example/LayoutBootstrap.tsx":Jr,"../../../packages/Layout/_example/LayoutGutter.tsx":Qr,"../../../packages/Layout/_example/LayoutJustify.tsx":et,"../../../packages/Layout/_example/LayoutMix.tsx":rt,"../../../packages/Layout/_example/LayoutOffset.tsx":tt,"../../../packages/Link/_example/LinkBasic.tsx":nt,"../../../packages/Link/_example/LinkDisabled.tsx":ot,"../../../packages/Link/_example/LinkIcon.tsx":at,"../../../packages/Link/_example/LinkUnderline.tsx":it,"../../../packages/Message/_example/MessageBasic.tsx":st,"../../../packages/Message/_example/MessageCenter.tsx":lt,"../../../packages/Message/_example/MessagePlain.tsx":ct,"../../../packages/Message/_example/MessageShowClose.tsx":pt,"../../../packages/Message/_example/MessageType.tsx":ut,"../../../packages/MessageBox/_example/MessageBoxBasic.tsx":dt,"../../../packages/MessageBox/_example/MessageBoxConfirm.tsx":gt,"../../../packages/MessageBox/_example/MessageBoxMessage.tsx":mt,"../../../packages/Notification/_example/NotificationBasic.tsx":ft,"../../../packages/Notification/_example/NotificationPosition.tsx":ht,"../../../packages/Notification/_example/NotificationShowClose.tsx":_t,"../../../packages/Notification/_example/NotificationType.tsx":xt,"../../../packages/Popconfirm/_example/PopconfirmBasic.tsx":bt,"../../../packages/Popconfirm/_example/PopconfirmEvent.tsx":vt,"../../../packages/Popconfirm/_example/PopconfirmIcon.tsx":Bt,"../../../packages/Popover/_example/PopoverBasic.tsx":yt,"../../../packages/Progress/_example/ProgressBasic.tsx":Ct,"../../../packages/Progress/_example/ProgressTextInside.tsx":wt,"../../../packages/Rate/_example/RateBasic.tsx":Tt,"../../../packages/Result/_example/ResultBasic.tsx":kt,"../../../packages/Result/_example/ResultIcon.tsx":St,"../../../packages/Scrollbar/_example/ScrollbarBasic.tsx":Nt,"../../../packages/Space/_example/SpaceAlignment.tsx":Et,"../../../packages/Space/_example/SpaceBasic.tsx":At,"../../../packages/Space/_example/SpaceDirection.tsx":Dt,"../../../packages/Space/_example/SpaceSize.tsx":Rt,"../../../packages/Space/_example/SpaceSize2.tsx":Mt,"../../../packages/Space/_example/SpaceSpacer.tsx":Lt,"../../../packages/Space/_example/SpaceSpacer2.tsx":It,"../../../packages/Space/_example/SpaceWrap.tsx":Ot,"../../../packages/Switch/_example/SwitchActionIcon.tsx":Pt,"../../../packages/Switch/_example/SwitchBasic.tsx":zt,"../../../packages/Switch/_example/SwitchBeforeChange.tsx":Ft,"../../../packages/Switch/_example/SwitchDisabled.tsx":Ht,"../../../packages/Switch/_example/SwitchIcon.tsx":Ut,"../../../packages/Switch/_example/SwitchLoading.tsx":Wt,"../../../packages/Switch/_example/SwitchSize.tsx":jt,"../../../packages/Switch/_example/SwitchText.tsx":Gt,"../../../packages/Table/_example/TableBasic.tsx":$t,"../../../packages/Table/_example/TableBorder.tsx":Vt,"../../../packages/Table/_example/TableStripe.tsx":Kt,"../../../packages/Tag/_example/TagBasic.tsx":Zt,"../../../packages/Tag/_example/TagClosable.tsx":Xt,"../../../packages/Tag/_example/TagEffect.tsx":qt,"../../../packages/Tag/_example/TagRound.tsx":Yt,"../../../packages/Tag/_example/TagSize.tsx":Jt,"../../../packages/Text/_example/TextBasic.tsx":Qt,"../../../packages/Text/_example/TextSize.tsx":en,"../../../packages/Text/_example/TextTruncated.tsx":rn,"../../../packages/Tooltip/_example/TooltipBasic.tsx":tn,"../../../packages/Tooltip/_example/TooltipContent.tsx":nn,"../../../packages/Tooltip/_example/TooltipDisabled.tsx":on,"../../../packages/Tooltip/_example/TooltipEffect.tsx":an});let _={display:f?"":"none"};ae.useEffect(()=>{s.current&&(Object.keys(p).forEach(S=>{S.indexOf(r)!==-1&&o(p[S])}),setTimeout(()=>{Be.highlightElement(s.current)},0))},[r]);function b(){h(!f)}return k.jsx(k.Fragment,{children:k.jsxs("div",{className:"code-block",children:[k.jsx("div",{className:"code-block-component",children:n}),k.jsx("div",{className:"op-btns",children:k.jsx("button",{onClick:b,className:"reset-btn el-icon op-btn el-tooltip__trigger el-tooltip__trigger",children:k.jsx("i",{className:"el-icon",style:{fontSize:"16px"},children:k.jsx("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em","data-v-5d9e4641":"",children:k.jsx("path",{fill:"currentColor",d:"m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"})})})})}),k.jsx("div",{className:"code-block-wrapper",style:_,children:k.jsx("div",{className:"code-block-pre language-react",children:k.jsx("pre",{children:k.jsx("code",{id:e,ref:s,className:e,children:i})})})})]})})}export{so as C};
