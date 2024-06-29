import{Q as ot,r as ie,j as T}from"./index-BnsErXRG.js";const it=`import { Affix, Button } from 'pelement-react'

function AffixBasic() {
  return (
    <>
      <Affix offset={120}>
        <Button type="primary">Offset top 120px</Button>
      </Affix>
    </>
  )
}

export default AffixBasic`,st=`import { Affix, Button } from 'pelement-react'

function AffixPosition() {
  return (
    <>
      <Affix position="bottom" offset={150}>
        <Button type="primary">Offset bottom 150px</Button>
      </Affix>
    </>
  )
}

export default AffixPosition`,rt=`import { Affix, Button } from 'pelement-react'
import './AffixBasic.scss'

function AffixTarget() {
  return (
    <>
      <div className="affix-container">
        <Affix target=".affix-container" offset={120}>
          <Button type="primary">Target container</Button>
        </Affix>
      </div>
    </>
  )
}

export default AffixTarget`,lt=`import { Alert } from 'pelement-react'
import './AlertBasic.scss'

function AlertBasic() {
  return (
    <>
      <Alert title="success alert" type="success" />
      <Alert title="info alert" type="info" />
      <Alert title="warning alert" type="warning" />
      <Alert title="error alert" type="error" />
    </>
  )
}

export default AlertBasic`,ct=`import { Alert } from 'pelement-react'

function AlertCenter() {
  return (
    <>
      <Alert title="success alert" type="success" center showIcon />
      <Alert title="info alert" type="info" center showIcon />
      <Alert title="warning alert" type="warning" center showIcon />
      <Alert title="error alert" type="error" center showIcon />
    </>
  )
}

export default AlertCenter`,pt=`import { Alert } from 'pelement-react'

function AlertClose() {
  function hello() {
    alert('Hello World!')
  }

  return (
    <>
      <Alert title="unclosable alert" type="success" closable={false} />
      <Alert title="customized close-text" type="info" closeText="Gotcha" />
      <Alert title="alert with callback" type="warning" close={hello} />
    </>
  )
}

export default AlertClose`,dt=`import { Alert } from 'pelement-react'

function AlertDescription() {
  return (
    <>
      <Alert
        title="with description"
        type="success"
        description="This is a description."
      />
    </>
  )
}

export default AlertDescription`,ut=`import { Alert } from 'pelement-react'

function AlertEffect() {
  return (
    <>
      <Alert title="success alert" type="success" effect="dark" />
      <Alert title="info alert" type="info" effect="dark" />
      <Alert title="warning alert" type="warning" effect="dark" />
      <Alert title="error alert" type="error" effect="dark" />
    </>
  )
}

export default AlertEffect`,mt=`import { Alert } from 'pelement-react'

function AlertIconDescription() {
  return (
    <>
      <Alert
        title="success alert"
        type="success"
        description="more text description"
        showIcon
      />
      <Alert
        title="info alert"
        type="info"
        description="more text description"
        showIcon
      />
      <Alert
        title="warning alert"
        type="warning"
        description="more text description"
        showIcon
      />
      <Alert
        title="error alert"
        type="error"
        description="more text description"
        showIcon
      />
    </>
  )
}

export default AlertIconDescription`,gt=`import { Alert } from 'pelement-react'

function AlertIcon() {
  return (
    <>
      <Alert title="success alert" type="success" showIcon />
      <Alert title="info alert" type="info" showIcon />
      <Alert title="warning alert" type="warning" showIcon />
      <Alert title="error alert" type="error" showIcon />
    </>
  )
}

export default AlertIcon`,ft=`import { Avatar, Col, Row } from 'pelement-react'
import './AvatarBasic.scss'

function AvatarBasic() {
  const circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
  const squareUrl = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
  const sizeList = ['small', '', 'large']

  const sizeAvatars = sizeList.map((item: any, index: number) => {
    return (
      <div className="block" key={index}>
        <Avatar size={item} src={circleUrl} />
      </div>
    )
  })

  const squareAvatars = sizeList.map((item: any, index: number) => {
    return (
      <div className="block" key={index}>
        <Avatar shape="square" size={item} src={squareUrl} />
      </div>
    )
  })

  return (
    <>
      <Row className="common-avatar">
        <Col span={12}>
          <div className="sub-title">circle</div>
          <div className="demo-basic--circle">
            <div className="block">
              <Avatar size={50} src={circleUrl} />
            </div>
            {sizeAvatars}
          </div>
        </Col>
        <Col span={12}>
          <div className="sub-title">square</div>
          <div className="demo-basic--circle">
            <div className="block">
              <Avatar shape="square" size={50} src={squareUrl} />
            </div>
            {squareAvatars}
          </div>
        </Col>
      </Row>
    </>
  )
}

export default AvatarBasic`,ht=`import { Avatar } from 'pelement-react'

function AvatarError() {

  function errorHandler() {
    console.log('error')
  }

  return (
    <>
      <div className="demo-type">
        <Avatar size={60} src="https://empty" onError={errorHandler}>
          <img
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
          />
        </Avatar>
      </div>
    </>
  )
}

export default AvatarError`,xt=`import { Avatar } from "pelement-react"

function AvatarFit() {
  const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
  const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

  const fitAvatars = fits.map((item: any, index: number) => {
    return (
      <div className="block" key={index}>
        <span className="title">{item}</span>
        <Avatar shape="square" size={100} fit={item} src={url} />
      </div>
    )
  })

  return (
    <>
      <div className="avatar-fit">
        {fitAvatars}
      </div>
    </>
  )
}

export default AvatarFit`,_t=`import { Avatar, UserFilled } from 'pelement-react'

function AvatarType() {
  return (
    <>
      <div className="common-avatar">
        <div>
          <Avatar icon={<UserFilled />} />
        </div>
        <div>
          <Avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
        </div>
        <div>
          <Avatar> user </Avatar>
        </div>
      </div>
    </>
  )
}

export default AvatarType`,bt=`import { Backtop } from 'pelement-react'

function BacktopBasic() {
  return (
    <>
      Scroll down to see the bottom-right button.
      <Backtop right={100} bottom={100} />
    </>
  )
}

export default BacktopBasic`,vt=`import { Backtop } from 'pelement-react'

function BacktopContent() {
  return (
    <>
      Scroll down to see the bottom-right button.
      <Backtop bottom={100}>
        <div
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'var(--el-bg-color-overlay)',
            boxShadow: 'var(--el-box-shadow-lighter)',
            textAlign: 'center',
            lineHeight: '40px',
            color: '#1989fa',
          }}
        >
          UP
        </div>
      </Backtop>
    </>
  )
}

export default BacktopContent`,Bt=`import { createRef } from 'react'
import { Backtop } from 'pelement-react'

function BacktopTarget() {
  const targetRef = createRef<HTMLDivElement>()

  return (
    <>
      <div style={{ height: '200px', overflow: 'auto' }} ref={targetRef}>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
      </div>
      <Backtop target={targetRef} right={160} bottom={100} />
    </>
  )
}

export default BacktopTarget`,kt=`import { Badge, Button } from 'pelement-react'
import './BadgeBasic.scss'

function BadgeBasic() {
  return (
    <>
      <div className="common-badge">
        <Badge value={12} className="item">
          <Button>comments</Button>
        </Badge>
        <Badge value={3} className="item">
          <Button>replies</Button>
        </Badge>
        <Badge value={1} className="item" type="primary">
          <Button>comments</Button>
        </Badge>
        <Badge value={2} className="item" type="warning">
          <Button>replies</Button>
        </Badge>
      </div>
    </>
  )
}

export default BadgeBasic`,yt=`import { Badge, Button, Share } from 'pelement-react'

function BadgeIsDot() {
  return (
    <>
      <div className="common-badge">
        <Badge isDot className="item">query</Badge>
        <Badge isDot className="item">
          <Button className="share-button" icon={<Share />} type="primary" />
        </Badge>
      </div>
    </>
  )
}

export default BadgeIsDot`,Ct=`import { Badge, Button } from 'pelement-react'

function BadgeMax() {
  return (
    <>
      <div className="common-badge">
        <Badge value={200} max={99} className="item">
          <Button>comments</Button>
        </Badge>
        <Badge value={100} max={10} className="item">
          <Button>replies</Button>
        </Badge>
      </div>
    </>
  )
}

export default BadgeMax`,St=`import { Badge, Button } from 'pelement-react'

function BadgeValue() {
  return (
    <>
      <div className="common-badge">
        <Badge value="new" className="item">
          <Button>comments</Button>
        </Badge>
        <Badge value="hot" className="item">
          <Button>replies</Button>
        </Badge>
      </div>
    </>
  )
}

export default BadgeValue`,Tt=`import { Breadcrumb } from 'pelement-react'

function BreadcrumbBasic() {
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: 'homepage',
            isLink: true,
          },
          {
            title: <a href="/">promotion management</a>,
            isLink: true,
          },
          {
            title: 'promotion list'
          },
          {
            title: 'promotion detail'
          },
        ]}
      />
    </>
  )
}

export default BreadcrumbBasic`,wt=`import { ArrowRight, Breadcrumb } from 'pelement-react'

function BreadcrumbSeparator() {
  return (
    <>
      <Breadcrumb
        separator={<ArrowRight className="el-breadcrumb__separator" />}
        items={[
          {
            title: 'homepage',
            isLink: true,
          },
          {
            title: 'promotion management',
          },
          {
            title: 'promotion list'
          },
          {
            title: 'promotion detail'
          },
        ]}
      />
    </>
  )
}

export default BreadcrumbSeparator`,Nt=`import { Button, Check, Delete, Edit, Message, Search, Star } from 'pelement-react'

function ButtonBasic() {
  return (
    <>
      <div className="mb-4">
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="success">Success</Button>
        <Button type="info">Info</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
      </div>
      <div className="mb-4">
        <Button plain>Plain</Button>
        <Button type="primary" plain>Primary</Button>
        <Button type="success" plain>Success</Button>
        <Button type="info" plain>Info</Button>
        <Button type="warning" plain>Warning</Button>
        <Button type="danger" plain>Danger</Button>
      </div>
      <div className="mb-4">
        <Button round>Round</Button>
        <Button type="primary" round>Primary</Button>
        <Button type="success" round>Success</Button>
        <Button type="info" round>Info</Button>
        <Button type="warning" round>Warning</Button>
        <Button type="danger" round>Danger</Button>
      </div>
      <div>
        <Button icon={<Search />} circle></Button>
        <Button type="primary" icon={<Edit />} circle></Button>
        <Button type="success" icon={<Check />} circle></Button>
        <Button type="info" icon={<Message />} circle></Button>
        <Button type="warning" icon={<Star />} circle></Button>
        <Button type="danger" icon={<Delete />} circle></Button>
      </div>
    </>
  )
}

export default ButtonBasic`,Et=`import { Button } from 'pelement-react'

function ButtonDisabled() {
  return (
    <>
      <div className="mb-4">
        <Button disabled>Default</Button>
        <Button type="primary" disabled>Primary</Button>
        <Button type="success" disabled>Success</Button>
        <Button type="info" disabled>Info</Button>
        <Button type="warning" disabled>Warning</Button>
        <Button type="danger" disabled>Danger</Button>
      </div>
      <div>
        <Button plain disabled>Plain</Button>
        <Button type="primary" plain disabled>Primary</Button>
        <Button type="success" plain disabled>Success</Button>
        <Button type="info" plain disabled>Info</Button>
        <Button type="warning" plain disabled>Warning</Button>
        <Button type="danger" plain disabled>Danger</Button>
      </div>
    </>
  )
}

export default ButtonDisabled`,At=`import { Button } from 'pelement-react'

function ButtonLink() {
  return (
    <>
      <p>Basic link button</p>
      <Button link>Default</Button>
      <Button type="primary" link>Primary</Button>
      <Button type="success" link>Success</Button>
      <Button type="info" link>Info</Button>
      <Button type="warning" link>Warning</Button>
      <Button type="danger" link>Danger</Button>
      <p>Disabled link button</p>
      <Button link disabled>Default</Button>
      <Button type="primary" link disabled>Primary</Button>
      <Button type="success" link disabled>Success</Button>
      <Button type="info" link disabled>Info</Button>
      <Button type="warning" link disabled>Warning</Button>
      <Button type="danger" link disabled>Danger</Button>
    </>
  )
}

export default ButtonLink`,Dt=`import { Button } from 'pelement-react'

function ButtonText() {
  const buttons = [
    { type: '', text: 'plain' },
    { type: 'primary', text: 'primary' },
    { type: 'success', text: 'success' },
    { type: 'info', text: 'info' },
    { type: 'warning', text: 'warning' },
    { type: 'danger', text: 'danger' },
  ]

  const textList = buttons.map((button, index) =>
    <Button
      key={index}
      type={button.type as any}
      text
    >
      {button.text}
    </Button>
  )

  const bgList = buttons.map((button, index) =>
    <Button
      key={index}
      type={button.type as any}
      text
      bg
    >
      {button.text}
    </Button>
  )

  const disabledList = buttons.map((button, index) =>
    <Button
      key={index}
      type={button.type as any}
      text
      disabled
    >
      {button.text}
    </Button>
  )

  return (
    <>
      <p>Basic text button</p>
      <div className="flex justify-space-between mb-4 flex-wrap gap-4">
        {textList}
      </div>

      <p>Background color always on</p>
      <div className="flex justify-space-between mb-4 flex-wrap gap-4">
        {bgList}
      </div>

      <p>Disabled text button</p>
      <div className="flex justify-space-between flex-wrap gap-4">
        {disabledList}
      </div>
    </>
  )
}

export default ButtonText`,Rt=`import { Card } from 'pelement-react'

function CardBasic() {
  const list = [1, 2, 3, 4]

  return (
    <>
      <Card
        style={{ maxWidth: '480px' }}
        header={

          <div className="card-header">
            <span>Card name</span>
          </div>
        }
        footer="Footer content"
      >
        {list.map((item, index) =>
          <p key={index} className="text item">{'List item ' + item}</p>
        )}
      </Card>
    </>
  )
}

export default CardBasic`,Lt=`import { Card } from 'pelement-react'

function CardBodyStyle() {
  return (
    <>
      <Card
        style={{ maxWidth: '480px' }}
        header="Yummy hamburger"
      >
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          style={{ width: '100%' }}
        />
      </Card>
    </>
  )
}

export default CardBodyStyle`,It=`import { Card } from 'pelement-react'

function CardShadow() {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Card style={{ width: '480px' }} shadow="always">Always</Card>
        <Card style={{ width: '480px' }} shadow="hover">Hover</Card>
        <Card style={{ width: '480px' }} shadow="never">Never</Card>
      </div>
    </>
  )
}

export default CardShadow`,Mt=`import { Card } from 'pelement-react'

function CardSimple() {
  const list = [1, 2, 3, 4]

  return (
    <>
      <Card
        style={{ maxWidth: '480px' }}
      >
        {list.map((item, index) =>
          <p key={index} className="text item">{'List item ' + item}</p>
        )}
      </Card>
    </>
  )
}

export default CardSimple`,Pt=`import { useState } from 'react'
import { Checkbox } from 'pelement-react'

function CheckboxBasic() {
  const [checked1, setChecked1] = useState(true)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const [checked4, setChecked4] = useState(false)
  const [checked5, setChecked5] = useState(false)
  const [checked6, setChecked6] = useState(false)
  const [checked7, setChecked7] = useState(false)
  const [checked8, setChecked8] = useState(false)

  function handleChange1(value) {
    setChecked1(value)
  }

  function handleChange2(value) {
    setChecked2(value)
  }

  function handleChange3(value) {
    setChecked3(value)
  }

  function handleChange4(value) {
    setChecked4(value)
  }

  function handleChange5(value) {
    setChecked5(value)
  }

  function handleChange6(value) {
    setChecked6(value)
  }

  function handleChange7(value) {
    setChecked7(value)
  }

  function handleChange8(value) {
    setChecked8(value)
  }

  return (
    <>
      <div>
        <Checkbox value={checked1} label="Option 1" size="large" onChange={handleChange1} />
        <Checkbox value={checked2} label="Option 2" size="large" onChange={handleChange2} />
      </div>
      <div>
        <Checkbox value={checked3} label="Option 1" onChange={handleChange3} />
        <Checkbox value={checked4} label="Option 2" onChange={handleChange4} />
      </div>
      <div>
        <Checkbox value={checked5} label="Option 1" size="small" onChange={handleChange5} />
        <Checkbox value={checked6} label="Option 2" size="small" onChange={handleChange6} />
      </div>
      <div>
        <Checkbox value={checked7} label="Option 1" size="small" disabled onChange={handleChange7} />
        <Checkbox value={checked8} label="Option 2" size="small" disabled onChange={handleChange8} />
      </div>
    </>
  )
}

export default CheckboxBasic`,Ot=`import { Checkbox } from "pelement-react"
import { useState } from "react"

function CheckboxDisabled() {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(true)

  function handleChange1(value) {
    setChecked1(value)
  }

  function handleChange2(value) {
    setChecked2(value)
  }

  return (
    <>
      <Checkbox value={checked1} disabled onChange={handleChange1}>Disabled</Checkbox>
      <Checkbox value={checked2} onChange={handleChange2}>Not disabled</Checkbox>
    </>
  )
}

export default CheckboxDisabled`,zt=`import { useState } from 'react'
import { CheckboxGroup } from 'pelement-react'

function CheckboxGroupBasic() {
  const options = [
    {
      label: 'Option A',
      value: 'Value A',
    },
    {
      label: 'Option B',
      value: 'Value B',
    },
    {
      label: 'Option C',
      value: 'Value C'
    },
    {
      label: 'disabled',
      value: 'Value disabled',
      disabled: true,
    },
    {
      label: 'selected and disabled',
      value: 'Value selected and disabled',
      disabled: true,
    }
  ]
  const [checkList, setCheckList] = useState(['Value selected and disabled', 'Value A'])

  function handleChange(value) {
    setCheckList(value)
  }

  return (
    <>
      <CheckboxGroup
        options={options}
        value={checkList}
        onChange={handleChange}
      />
    </>
  )
}

export default CheckboxGroupBasic`,Ht=`import { Collapse, CollapseItem } from 'pelement-react'

function CollapseBasic() {
  return (
    <>
      <Collapse>
        <CollapseItem title="Consistency" name="1">
          <div>
            Consistent with real life: in line with the process and logic of real
            life, and comply with languages and habits that the users are used to;
          </div>
          <div>
            Consistent within interface: all elements should be consistent, such
            as: design style, icons and texts, position of elements, etc.
          </div>
        </CollapseItem>
        <CollapseItem title="Feedback" name="2">
          <div>
            Operation feedback: enable the users to clearly perceive their
            operations by style updates and interactive effects;
          </div>
          <div>
            Visual feedback: reflect current state by updating or rearranging
            elements of the page.
          </div>
        </CollapseItem>
        <CollapseItem title="Efficiency" name="3">
          <div>
            Simplify the process: keep operating process simple and intuitive;
          </div>
          <div>
            Definite and clear: enunciate your intentions clearly so that the
            users can quickly understand and make decisions;
          </div>
          <div>
            Easy to identify: the interface should be straightforward, which helps
            the users to identify and frees them from memorizing and recalling.
          </div>
        </CollapseItem>
        <CollapseItem title="Controllability" name="4">
          <div>
            Decision making: giving advices about operations is acceptable, but do
            not make decisions for the users;
          </div>
          <div>
            Controlled consequences: users should be granted the freedom to
            operate, including canceling, aborting or terminating current
            operation.
          </div>
        </CollapseItem>
      </Collapse>
    </>
  )
}

export default CollapseBasic`,Wt=`import { useState } from 'react'
import { ColorPicker } from 'pelement-react'
import './ColorPickerBasic.scss'

function ColorPickerBasic() {
  const [color1, setColor1] = useState('#409EFF')
  const [color2, setColor2] = useState('')

  return (
    <>
      <div className="demo-color-block">
        <span className="demonstration">With default value</span>
        <ColorPicker value={color1} onChange={(val) => setColor1(val)} />
      </div>
      <div className="demo-color-block">
        <span className="demonstration">With no default value</span>
        <ColorPicker value={color2} onChange={(val) => setColor2(val)} />
      </div>
    </>
  )
}

export default ColorPickerBasic`,Ft=`import { Container, Header, Main } from 'pelement-react'
import './ContainerBasic.scss'

function ContainerBasic() {

  return (
    <>
      <div className="common-layout">
        <Container>
          <Header>Header</Header>
          <Main>Main</Main>
        </Container>
      </div>
    </>
  )
}

export default ContainerBasic`,Ut=`import { Container, Footer, Header, Main } from 'pelement-react'

function ContainerBasic1() {
  return (
    <>
      <div className="common-layout">
        <Container>
          <Header>Header</Header>
          <Main>Main</Main>
          <Footer>Footer</Footer>
        </Container>
      </div>
    </>
  )
}

export default ContainerBasic1`,jt=`import { Aside, Container, Main } from 'pelement-react'

function ContainerBasic2() {
  return (
    <>
      <div className="common-layout">
        <Container>
          <Aside width="200px">Aside</Aside>
          <Main>Main</Main>
        </Container>
      </div>
    </>
  )
}

export default ContainerBasic2`,Gt=`import { Aside, Container, Header, Main } from 'pelement-react'

function ContainerBasic3() {
  return (
    <>
      <div className="common-layout">
        <Container>
          <Header>Header</Header>
          <Container>
            <Aside width="200px">Aside</Aside>
            <Main>Main</Main>
          </Container>
        </Container>
      </div>
    </>
  )
}

export default ContainerBasic3`,Vt=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'

function ContainerBasic4() {
  return (
    <>
      <div className="common-layout">
        <Container>
          <Header>Header</Header>
          <Container>
            <Aside width="200px">Aside</Aside>
            <Container>
              <Main>Main</Main>
              <Footer>Footer</Footer>
            </Container>
          </Container>
        </Container>
      </div>
    </>
  )
}

export default ContainerBasic4`,$t=`import { Aside, Container, Header, Main } from 'pelement-react'

function ContainerBasic5() {
  return (
    <>
      <div className="common-layout">
        <Container>
          <Aside width="200px">Aside</Aside>
          <Container>
            <Header>Header</Header>
            <Main>Main</Main>
          </Container>
        </Container>
      </div>
    </>
  )
}

export default ContainerBasic5`,Kt=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'

function ContainerBasic6() {
  return (
    <>
      <div className="common-layout">
        <Container>
          <Aside width="200px">Aside</Aside>
          <Container>
            <Header>Header</Header>
            <Main>Main</Main>
            <Footer>Footer</Footer>
          </Container>
        </Container>
      </div>
    </>
  )
}

export default ContainerBasic6`,Zt=`import { Descriptions, Tag } from 'pelement-react'

function DescriptionsBasic() {
  const items = [
    {
      label: 'Username',
      content: 'kooriookami'
    },
    {
      label: 'Telephone',
      content: '18100000000'
    },
    {
      label: 'Place',
      content: 'Suzhou'
    },
    {
      label: 'Remarks',
      content: <Tag size="small">School</Tag>
    },
    {
      label: 'Address',
      content: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province'
    },
  ]

  return (
    <>
      <Descriptions
        title="User Info"
        items={items}
      />
    </>
  )
}

export default DescriptionsBasic`,Xt=`import { Descriptions, Edit, Tag } from 'pelement-react'

function DescriptionsDirection() {
  const items1 = [
    {
      label: <div className="cell-item">
        <Edit style={{ marginRight: '6px' }} />
        Username
      </div>,
      content: 'kooriookami'
    },
    {
      label: <div className="cell-item">
        <Edit style={{ marginRight: '6px' }} />
        Telephone
      </div>,
      content: '18100000000'
    },
    {
      label: <div className="cell-item">
        <Edit style={{ marginRight: '6px' }} />
        Place
      </div>,
      content: 'Suzhou'
    },
    {
      label: <div className="cell-item">
        <Edit style={{ marginRight: '6px' }} />
        Remarks
      </div>,
      content: <Tag size="small">School</Tag>
    },
    {
      label: <div className="cell-item">
        <Edit style={{ marginRight: '6px' }} />
        Address
      </div>,
      content: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province'
    },
  ]
  const items2 = [
    {
      label: 'Username',
      content: 'kooriookami'
    },
    {
      label: 'Telephone',
      content: '18100000000'
    },
    {
      label: 'Place',
      content: 'Suzhou'
    },
    {
      label: 'Remarks',
      content: <Tag size="small">School</Tag>
    },
    {
      label: 'Address',
      content: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province'
    },
  ]

  return (
    <>
      <Descriptions
        title="With border large"
        border
        size="large"
        direction="vertical"
        items={items1}
      />
      <Descriptions
        style={{ marginTop: '24px' }}
        title="With border default"
        border
        size="default"
        direction="vertical"
        items={items1}
      />
      <Descriptions
        style={{ marginTop: '24px' }}
        title="Without border small"
        size="small"
        direction="vertical"
        items={items2}
      />
    </>
  )
}

export default DescriptionsDirection`,qt=`import { Descriptions, Edit, Tag } from 'pelement-react'

function DescriptionsSize() {
  const items1 = [
    {
      label: <div className="cell-item">
        <Edit style={{ marginRight: '6px' }} />
        Username
      </div>,
      content: 'kooriookami'
    },
    {
      label: <div className="cell-item">
        <Edit style={{ marginRight: '6px' }} />
        Telephone
      </div>,
      content: '18100000000'
    },
    {
      label: <div className="cell-item">
        <Edit style={{ marginRight: '6px' }} />
        Place
      </div>,
      content: 'Suzhou'
    },
    {
      label: <div className="cell-item">
        <Edit style={{ marginRight: '6px' }} />
        Remarks
      </div>,
      content: <Tag size="small">School</Tag>
    },
    {
      label: <div className="cell-item">
        <Edit style={{ marginRight: '6px' }} />
        Address
      </div>,
      content: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province'
    },
  ]
  const items2 = [
    {
      label: 'Username',
      content: 'kooriookami'
    },
    {
      label: 'Telephone',
      content: '18100000000'
    },
    {
      label: 'Place',
      content: 'Suzhou'
    },
    {
      label: 'Remarks',
      content: <Tag size="small">School</Tag>
    },
    {
      label: 'Address',
      content: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province'
    },
  ]

  return (
    <>
      <Descriptions
        title="With border large"
        border
        size="large"
        items={items1}
      />
      <Descriptions
        style={{ marginTop: '24px' }}
        title="With border default"
        border
        size="default"
        items={items1}
      />
      <Descriptions
        style={{ marginTop: '24px' }}
        title="Without border small"
        size="small"
        items={items2}
      />
    </>
  )
}

export default DescriptionsSize`,Jt=`import { Descriptions, Tag } from 'pelement-react'
import './DescriptionsStyle.scss'

function DescriptionsStyle() {
  const items = [
    {
      label: 'Username',
      content: 'kooriookami',
      labelClassName: 'my-label',
      className: 'my-content',
      labelAlign: 'right',
      align: 'center'
    },
    {
      label: 'Telephone',
      content: '18100000000',
      labelAlign: 'right',
      align: 'center'
    },
    {
      label: 'Place',
      content: 'Suzhou',
      labelAlign: 'right',
      align: 'center'
    },
    {
      label: 'Remarks',
      content: <Tag size="small">School</Tag>,
      labelAlign: 'right',
      align: 'center'
    },
    {
      label: 'Address',
      content: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province',
      labelAlign: 'right',
      align: 'center'
    },
  ]

  return (
    <>
      <Descriptions
        title="User Info"
        border
        items={items}
      />
    </>
  )
}

export default DescriptionsStyle`,Yt=`import { Button, Dialog } from 'pelement-react'
import { useState } from 'react'
import './DialogBasic.scss'

function DialogBasic() {
  const [dialogVisible, setDialogVisible] = useState(false)

  function handleClick() {
    setDialogVisible(true)
  }

  function handleClose() {
    setDialogVisible(false)
  }

  function handleOk() {
    setDialogVisible(false)
  }

  function handleCancel() {
    setDialogVisible(false)
  }

  // footer
  function Footer() {
    return (
      <>
        <span className="dialog-footer">
          <button aria-disabled="false" type="button" className="el-button" onClick={handleOk}>
            <span className="">Cancel</span>
          </button>
          <button aria-disabled="false" type="button" className="el-button el-button--primary" onClick={handleCancel}>
            <span className=""> Confirm </span>
          </button>
        </span>
      </>
    )
  }

  return (
    <>
      <Button text onClick={handleClick}>
        click to open the Dialog
      </Button>

      <Dialog
        open={dialogVisible}
        title="Tips"
        width="30%"
        onClose={handleClose}
        footer={<Footer />}
      >
        <span>This is a message</span>
      </Dialog>
    </>
  )
}

export default DialogBasic`,Qt=`import { useState } from 'react'
import { Button, Dialog } from 'pelement-react'

function DialogContent() {
  const [dialogTableVisible, setDialogTableVisible] = useState(false)
  const [dialogFormVisible, setDialogFormVisible] = useState(false)

  function handleTable() {
    setDialogTableVisible(true)
  }

  function handleForm() {
    setDialogFormVisible(true)
  }

  function FormFooter() {
    return (
      <>
        <span className="dialog-footer">
          <Button onClick={() => { setDialogFormVisible(false) }}>Cancel</Button>
          <Button type="primary" onClick={() => { setDialogFormVisible(false) }}>
            Confirm
          </Button>
        </span>
      </>
    )
  }

  return (
    <>
      <Button text onClick={handleTable}>
        open a Table nested Dialog
      </Button>

      <Dialog
        open={dialogTableVisible}
        title="Shipping address"
        onClose={() => { setDialogTableVisible(false) }}
      >
        Table组件
      </Dialog>

      <Button text onClick={handleForm}>
        open a Form nested Dialog
      </Button>

      <Dialog
        open={dialogFormVisible}
        title="Shipping address"
        footer={<FormFooter />}
        onClose={() => { setDialogFormVisible(false) }}
      >
        Form 表单
      </Dialog>
    </>
  )
}

export default DialogContent`,en=`import { useState } from 'react'
import { Button, CircleCloseFilled, Dialog } from 'pelement-react'

function DialogHeader() {
  const [visible, setVisible] = useState(false)

  function onClose() {
    setVisible(false)
  }

  function Header() {
    return (
      <>
        <div className="dialog-header">
          <h4 className="el-dialog__title">This is a custom header!</h4>
          <Button type="danger" onClick={onClose}>
            <CircleCloseFilled />
            Close
          </Button>
        </div>
      </>
    )
  }

  return (
    <>
      <Button onClick={() => setVisible(true)}>
        Open Dialog with customized header
      </Button>
      <Dialog open={visible} showClose={false} header={<Header />} onClose={onClose}>
        This is dialog content.
      </Dialog>
    </>
  )
}

export default DialogHeader`,tn=`import { Divider } from 'pelement-react'

function DividerBasic() {
  return (
    <>
      <div>
        <span>
          I sit at my window this morning where the world like a passer-by stops
          for a moment, nods to me and goes.
        </span>
        <Divider />
        <span>
          There little thoughts are the rustle of leaves; they have their whisper
          of joy in my mind.
        </span>
      </div>
    </>
  )
}

export default DividerBasic`,nn=`import { Divider } from 'pelement-react'

function DividerBorder() {
  return (
    <>
      <div>
        <span>What language is thine, O sea?</span>
        <Divider borderStyle="dashed" />
        <span>The language of eternal question.</span>
      </div>
      <Divider borderStyle="dotted" />
      <span>What language is thy answer, O sky?</span>
      <Divider borderStyle="double" />
      <span>The language of eternal silence.</span>
    </>
  )
}

export default DividerBorder`,an=`import { Divider, StarFilled } from 'pelement-react'

function DividerContent() {
  return (
    <>
      <div>
        <span>What you are you do not see, what you see is your shadow. </span>
        <Divider contentPosition="left">Rabindranath Tagore</Divider>
        <span>
          My wishes are fools, they shout across thy song, my Master. Let me but
          listen.
        </span>
        <Divider>
          <StarFilled />
        </Divider>
        <span>I cannot choose the best. The best chooses me.</span>
        <Divider contentPosition="right">Rabindranath Tagore</Divider>
      </div>
    </>
  )
}

export default DividerContent`,on=`import { Divider } from 'pelement-react'

function DividerDirection() {
  return (
    <>
      <div>
        <span>Rain</span>
        <Divider direction="vertical" />
        <span>Home</span>
        <Divider direction="vertical" border-style="dashed" />
        <span>Grass</span>
      </div>
    </>
  )
}

export default DividerDirection`,sn=`import { useState } from 'react'
import { Button, Drawer } from 'pelement-react'

function DrawerBasic() {
  const [direction, setDirection] = useState('')
  const [drawer, setDrawer] = useState(false)
  const [drawer2, setDrawer2] = useState(false)

  function handleLeftToRight() {
    setDirection('ltr')
    setDrawer(true)
  }

  function handleRightToLeft() {
    setDirection('rtl')
    setDrawer(true)
  }

  function handleTopToBottom() {
    setDirection('ttb')
    setDrawer(true)
  }

  function handleBottomToTop() {
    setDirection('btt')
    setDrawer(true)
  }

  function handleLeftToRightFooter() {
    setDirection('ltr')
    setDrawer2(true)
  }

  function handleRightToLeftFooter() {
    setDirection('rtl')
    setDrawer2(true)
  }

  function handleTopToBottomFooter() {
    setDirection('ttb')
    setDrawer2(true)
  }

  function handleBottomToTopFooter() {
    setDirection('btt')
    setDrawer2(true)
  }

  function handleClose() {
    setDrawer(false)
  }

  function handleClose2() {
    setDrawer2(false)
  }

  function cancelClick() {
    setDrawer2(false)
  }

  function confirmClick() {
    setDrawer2(false)
  }

  return (
    <>
      <div>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleLeftToRight}>
          open left to right
        </Button>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleRightToLeft}>
          open right to left
        </Button>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleTopToBottom}>
          open top to bottom
        </Button>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleBottomToTop}>
          open bottom to top
        </Button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleLeftToRightFooter}>
          open left to right footer
        </Button>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleRightToLeftFooter}>
          open right to left footer
        </Button>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleTopToBottomFooter}>
          open top to bottom footer
        </Button>
        <Button type="primary" style={{ marginRight: '16px' }} onClick={handleBottomToTopFooter}>
          open bottom to top footer
        </Button>
      </div>

      <Drawer
        open={drawer}
        title="I am the title"
        direction={direction as any}
        onClose={handleClose}
      >
        <span>Hi, there!</span>
      </Drawer>
      <Drawer
        open={drawer2}
        direction={direction as any}
        onClose={handleClose2}
        header={<h4>set title by slot</h4>}
        footer={
          <div style={{ flex: 'auto' }}>
            <Button onClick={cancelClick}>cancel</Button>
            <Button type="primary" onClick={confirmClick}>confirm</Button>
          </div>
        }
      >
        radio
      </Drawer>
    </>
  )
}

export default DrawerBasic`,rn=`import { useState } from 'react'
import { Button, Drawer } from 'pelement-react'

function DrawerContent() {
  const [table, setTable] = useState(false)
  const [dialog, setDialog] = useState(false)

  function closeTable() {
    setTable(false)
  }

  function closeDialog() {
    setDialog(false)
  }

  return (
    <>
      <Button text onClick={() => { setTable(true) }}>
        Open Drawer with nested table
      </Button>

      <Button text onClick={() => { setDialog(true) }}>
        Open Drawer with nested form
      </Button>

      <Drawer
        open={table}
        title="I have a nested table inside!"
        direction="rtl"
        size="50%"
        onClose={closeTable}
      >
        table
      </Drawer>

      <Drawer
        open={dialog}
        title="I have a nested form inside!"
        direction="ltr"
        className="demo-drawer"
        onClose={closeDialog}
      >
        <div className="demo-drawer__content">
          form
          <div className="demo-drawer__footer">
            <Button onClick={closeDialog}>Cancel</Button>
            <Button type="primary" onClick={closeDialog}>
              Submit
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default DrawerContent`,ln=`import { useState } from 'react'
import { Button, CircleCloseFilled, Drawer } from 'pelement-react'

function DrawerHeader() {
  const [visible, setVisible] = useState(false)

  function handleClose() {
    setVisible(false)
  }

  return (
    <>
      <Button onClick={() => { setVisible(true) }}>
        Open Drawer with customized header
      </Button>

      <Drawer
        open={visible}
        showClose={false}
        header={
          <>
            <h4>This is a custom header!</h4>
            <Button type="danger" onClick={handleClose}>
              <CircleCloseFilled />
              Close
            </Button>
          </>
        }
      >
        This is drawer content.
      </Drawer>
    </>
  )
}

export default DrawerHeader`,cn=`import { useState } from 'react'
import { Button, Drawer } from 'pelement-react'

function DrawerHeader2() {
  const [drawer, setDrawer] = useState(false)

  return (
    <>
      <Button type="primary" onClick={() => setDrawer(true)}>
        open drawer
      </Button>

      <Drawer open={drawer} title="I am the title" withHeader={false}>
        <span>Hi there!</span>
      </Drawer>
    </>
  )
}

export default DrawerHeader2`,pn=`import { Empty } from 'pelement-react'

function EmptyBasic() {
  return (
    <>
      <Empty description="description" />
    </>
  )
}

export default EmptyBasic`,dn=`import { Button, Empty } from 'pelement-react'

function EmptyContent() {
  return (
    <>
      <Empty>
        <Button type="primary">Button</Button>
      </Empty>
    </>
  )
}

export default EmptyContent`,un=`import { Empty } from 'pelement-react'

function EmptyImage() {
  return (
    <>
      <Empty
        image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      />
    </>
  )
}

export default EmptyImage`,mn=`import { Empty } from 'pelement-react'

function EmptyImageSize() {
  return (
    <>
      <Empty imageSize={200} />
    </>
  )
}

export default EmptyImageSize`,gn=`import { Edit, Search, Check, Message, Star, Delete, View, StarFilled, LoadingIcon, Hide, InfoFilled, WarningFilled, CircleCloseFilled, CircleCheckFilled, ArrowRight, CircleCheck, Close, Share } from 'pelement-react'

function ButtonBasic() {
  return (
    <>
      <Edit style={{ fontSize: '20px' }} />
      <Search style={{ fontSize: '20px' }} />
      <Check style={{ fontSize: '20px' }} />
      <Message style={{ fontSize: '20px' }} />
      <Star style={{ fontSize: '20px' }} />
      <Delete style={{ fontSize: '20px' }} />
      <View style={{ fontSize: '20px' }} />
      <StarFilled style={{ fontSize: '20px' }} />
      <LoadingIcon style={{ fontSize: '20px' }} />
      <Hide style={{ fontSize: '20px' }} />
      <InfoFilled style={{ fontSize: '20px' }} />
      <WarningFilled style={{ fontSize: '20px' }} />
      <CircleCloseFilled style={{ fontSize: '20px' }} />
      <CircleCheckFilled style={{ fontSize: '20px' }} />
      <ArrowRight style={{ fontSize: '20px' }} />
      <CircleCheck style={{ fontSize: '20px' }} />
      <Close style={{ fontSize: '20px' }} />
      <Share style={{ fontSize: '20px' }} />
    </>
  )
}

export default ButtonBasic`,fn=`import { useState } from 'react'
import { Input } from 'pelement-react'

function InputBasic() {
  const [text, setText] = useState('')

  function handleChange(event: string) {
    setText(event)
  }

  return (
    <>
      <Input
        style={{ width: '240px' }}
        placeholder="Please input"
        value={text}
        onChange={handleChange}
      />
    </>
  )
}

export default InputBasic`,hn=`import { useState } from 'react'
import { Input } from 'pelement-react'

function InputClearable() {
  const [text, setText] = useState('')

  function handleChange(event: string) {
    setText(event)
  }

  return (
    <>
      <Input
        style={{ width: '240px' }}
        placeholder="Please input"
        value={text}
        clearable
        onChange={handleChange}
      />
    </>
  )
}

export default InputClearable`,xn=`import { useState } from 'react'
import { Input } from 'pelement-react'

function InputDisabled() {
  const [text, setText] = useState('')

  function handleChange(event: string) {
    setText(event)
  }

  return (
    <>
      <Input
        style={{ width: '240px' }}
        placeholder="Please input"
        value={text}
        disabled
        onChange={handleChange}
      />
    </>
  )
}

export default InputDisabled`,_n=`import { useState } from 'react'
import { Input } from 'pelement-react'
import './InputSize.scss'

function InputSize() {
  const [text, setText] = useState('')

  function handleChange(event: string) {
    setText(event)
  }

  return (
    <>
      <div className="flex gap-4 mb-4 items-center">
        <Input
          style={{ width: '240px' }}
          placeholder="Please input"
          value={text}
          size="large"
          onChange={handleChange}
        />
        <Input
          style={{ width: '240px' }}
          placeholder="Please input"
          value={text}
          onChange={handleChange}
        />
        <Input
          style={{ width: '240px' }}
          placeholder="Please input"
          value={text}
          size="small"
          onChange={handleChange}
        />
      </div>
    </>
  )
}

export default InputSize`,bn=`import { Col, Row } from 'pelement-react'
import './LayoutBasic.scss'

function LayoutBasic() {
  return (
    <>
      <Row>
        <Col span={24}><div className="grid-content ep-bg-purple-dark" /></Col>
      </Row>
      <Row>
        <Col span={12}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={12}> <div className="grid-content ep-bg-purple-light" /></Col>
      </Row>
      <Row>
        <Col span={8}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={8}> <div className="grid-content ep-bg-purple-light" /></Col>
        <Col span={8}> <div className="grid-content ep-bg-purple" /></Col>
      </Row>
      <Row>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}> <div className="grid-content ep-bg-purple-light" /></Col>
        <Col span={6}> <div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}> <div className="grid-content ep-bg-purple-light" /></Col>
      </Row>
      <Row>
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={4}> <div className="grid-content ep-bg-purple-light" /></Col>
        <Col span={4}> <div className="grid-content ep-bg-purple" /></Col>
        <Col span={4}> <div className="grid-content ep-bg-purple-light" /></Col>
        <Col span={4}> <div className="grid-content ep-bg-purple" /></Col>
        <Col span={4}> <div className="grid-content ep-bg-purple-light" /></Col>
      </Row>
    </>
  )
}

export default LayoutBasic`,vn=`import { Col, Row } from 'pelement-react'

function LayoutBootstrap() {
  return (
    <>
      <Row gutter={10}>
        <Col xs={8} sm={6} md={4} lg={3} xl={1}>
          <div className="grid-content ep-bg-purple" />
        </Col>
        <Col xs={4} sm={6} md={8} lg={9} xl={11}>
          <div className="grid-content ep-bg-purple-light" />
        </Col>
        <Col xs={4} sm={6} md={8} lg={9} xl={11}>
          <div className="grid-content ep-bg-purple" />
        </Col>
        <Col xs={8} sm={6} md={4} lg={3} xl={1}>
          <div className="grid-content ep-bg-purple-light" />
        </Col>
      </Row>
    </>
  )
}

export default LayoutBootstrap`,Bn=`import { Col, Row } from 'pelement-react'

function LayoutGutter() {
  return (
    <>
      <Row gutter={20}>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
      </Row>
    </>
  )
}

export default LayoutGutter`,kn=`import { Col, Row } from 'pelement-react'

function LayoutJustify() {
  return (
    <>
      <Row className="row-bg">
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
      </Row>
      <Row className="row-bg" justify="center">
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
      </Row>
      <Row className="row-bg" justify="end">
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
      </Row>
      <Row className="row-bg" justify="space-between">
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
      </Row>
      <Row className="row-bg" justify="space-around">
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
      </Row>
      <Row className="row-bg" justify="space-evenly">
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple-light" /></Col>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
      </Row>
    </>
  )
}

export default LayoutJustify`,yn=`import { Col, Row } from 'pelement-react'

function LayoutMix() {
  return (
    <>
      <Row gutter={20}>
        <Col span={16}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={8}><div className="grid-content ep-bg-purple" /></Col>
      </Row>
      <Row gutter={20}>
        <Col span={8}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={8}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>
      </Row>
      <Row gutter={20}>
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={16}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={4}><div className="grid-content ep-bg-purple" /></Col>
      </Row>
    </>
  )
}

export default LayoutMix`,Cn=`import { Col, Row } from 'pelement-react'

function LayoutOffset() {
  return (
    <>
      <Row gutter={20}>
        <Col span={6}><div className="grid-content ep-bg-purple" /></Col>
        <Col span={6} offset={6}>
          <div className="grid-content ep-bg-purple" />
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={6} offset={6}>
          <div className="grid-content ep-bg-purple" />
        </Col>
        <Col span={6} offset={6}>
          <div className="grid-content ep-bg-purple" />
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={12} offset={6}>
          <div className="grid-content ep-bg-purple" />
        </Col>
      </Row>
    </>
  )
}

export default LayoutOffset`,Sn=`import { Link } from 'pelement-react'
import './LinkBasic.scss'

function LinkBasic() {
  return (
    <>
      <div className="common-link">
        <Link href="https://pelement-react.github.io/pelement-react/" target="_blank">default</Link>
        <Link type="primary">primary</Link>
        <Link type="success">success</Link>
        <Link type="warning">warning</Link>
        <Link type="danger">danger</Link>
        <Link type="info">info</Link>
      </div>
    </>
  )
}

export default LinkBasic`,Tn=`import { Link } from 'pelement-react'

function LinkDisabled() {
  return (
    <>
      <div className="common-link">
        <Link disabled>default</Link>
        <Link type="primary" disabled>primary</Link>
        <Link type="success" disabled>success</Link>
        <Link type="warning" disabled>warning</Link>
        <Link type="danger" disabled>danger</Link>
        <Link type="info" disabled>info</Link>
      </div>
    </>
  )
}

export default LinkDisabled`,wn=`import { Edit, Link, View } from 'pelement-react'

function LinkIcon() {
  return (
    <>
      <div className="common-link">
        <Link icon={<Edit />}>Edit</Link>
        <Link>
          Check<View className="el-icon--right" />
        </Link>
      </div>
    </>
  )
}

export default LinkIcon`,Nn=`import { Link } from 'pelement-react'

function LinkUnderline() {
  return (
    <>
      <div className="common-link">
        <Link underline={false}>Without Underline</Link>
        <Link>With Underline</Link>
      </div >
    </>
  )
}

export default LinkUnderline`,En=`import { Loading } from 'pelement-react'

function LoadingBasic() {
  return (
    <>
      <Loading>
        <div style={{ height: '200px' }}></div>
      </Loading>
    </>
  )
}

export default LoadingBasic`,An=`import { Button, loading } from 'pelement-react'

function LoadingService() {
  function handleClick() {
    loading.open({})

    setTimeout(() => {
      loading.close()
    }, 5000)
  }

  return (
    <>
      <Button onClick={handleClick}>open fullscreen</Button>
    </>
  )
}

export default LoadingService`,Dn=`import { useState } from 'react'
import { Button, Loading } from 'pelement-react'

function LoadingText() {
  const [fullscreen, setFullscreen] = useState(false)

  function handleClick() {
    setFullscreen(true)
    setTimeout(() => {
      setFullscreen(false)
    }, 3000)
  }

  return (
    <>
      <Button onClick={handleClick}>全屏</Button>
      <Loading fullscreen={fullscreen} text="Loading...">
        <div style={{ height: '200px' }}></div>
      </Loading>
    </>
  )
}

export default LoadingText`,Rn=`import { Button, message } from 'pelement-react'

function MessageBasic() {
  let current = 0

  function open() {
    current++
    message.success(\`This is a message.\${current}\`)
  }

  function openReactNode() {
    current++
    message.success(<>This is a <span style={{ color: 'teal' }}>message</span>.{current}</>)
  }

  return (
    <>
      <Button plain onClick={open}>Show message</Button>
      <Button plain onClick={openReactNode}>ReactNode</Button>
    </>
  )
}

export default MessageBasic`,Ln=`import { Button, message } from 'pelement-react'

function MessageCenter() {
  const open = () => {
    message.open({
      message: 'Centered text',
      type: 'info',
      center: true,
    })
  }

  return (
    <>
      <Button plain onClick={open}>Centered text</Button>
    </>
  )
}

export default MessageCenter`,In=`import { Button, message } from 'pelement-react'

function MessagePlain() {
  const open1 = () => {
    message.open({
      message: 'This is a message.',
      type: 'info',
      plain: true,
    })
  }
  const open2 = () => {
    message.open({
      message: 'Congrats, this is a success message.',
      type: 'success',
      plain: true,
    })
  }
  const open3 = () => {
    message.open({
      message: 'Warning, this is a warning message.',
      type: 'warning',
      plain: true,
    })
  }
  const open4 = () => {
    message.open({
      message: 'Oops, this is a error message.',
      type: 'error',
      plain: true,
    })
  }

  return (
    <>
      <Button plain onClick={open2}>Success</Button>
      <Button plain onClick={open3}>Warning</Button>
      <Button plain onClick={open1}>Message</Button>
      <Button plain onClick={open4}>Error</Button>
    </>
  )
}

export default MessagePlain`,Mn=`import { Button, message } from 'pelement-react'

function MessageShowClose() {
  const open1 = () => {
    message.open({
      message: 'This is a message.',
      type: 'info',
      showClose: true,
    })
  }
  const open2 = () => {
    message.open({
      message: 'Congrats, this is a success message.',
      type: 'success',
      showClose: true,
    })
  }
  const open3 = () => {
    message.open({
      message: 'Warning, this is a warning message.',
      type: 'warning',
      showClose: true,
    })
  }
  const open4 = () => {
    message.open({
      message: 'Oops, this is a error message.',
      type: 'error',
      showClose: true,
    })
  }

  return (
    <>
      <Button plain onClick={open2}>Success</Button>
      <Button plain onClick={open3}>Warning</Button>
      <Button plain onClick={open1}>Message</Button>
      <Button plain onClick={open4}>Error</Button>
    </>
  )
}

export default MessageShowClose`,Pn=`import { Button, message } from 'pelement-react'

function MessageType() {
  const open1 = () => {
    message.info('This is a message.')
  }
  const open2 = () => {
    message.success('Congrats, this is a success message.')
  }
  const open3 = () => {
    message.warning('Warning, this is a warning message.')
  }
  const open4 = () => {
    message.error('Oops, this is a error message.')
  }

  return (
    <>
      <Button plain onClick={open2}>Success</Button>
      <Button plain onClick={open3}>Warning</Button>
      <Button plain onClick={open1}>Message</Button>
      <Button plain onClick={open4}>Error</Button>
    </>
  )
}

export default MessageType`,On=`import { Button, messageBox } from 'pelement-react'

function MessageBoxBasic() {
  function open() {
    messageBox.alert('This is a message', 'Title', {
      confirmButtonText: 'OK',
      callback: (action: string) => {
        alert(\`action: \${action}\`)
      },
    })
  }

  return (
    <>
      <Button plain onClick={open}>Click to open the Message Box</Button>
    </>
  )
}

export default MessageBoxBasic`,zn=`import { Button, messageBox } from 'pelement-react'

function MessageBoxConfirm() {
  function open() {
    messageBox.confirm(
      'proxy will permanently delete the file. Continue?',
      'Warning',
      {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
        onConfirm: () => {
          console.log('Delete completed')
        },
        onCancel: () => {
          console.log('Delete canceled')
        }
      }
    )
  }

  return (
    <>
      <Button plain onClick={open}>Click to open the Message Box</Button>
    </>
  )
}

export default MessageBoxConfirm`,Hn=`import { Button, messageBox, Switch } from 'pelement-react'

function MessageBoxMessage() {
  function open() {
    messageBox.alert(
      <><span>Message can be </span><i style={{ color: 'teal' }}>VNode</i></>,
      'Message',
    )
  }

  function open1() {
    messageBox.alert(
      <><Switch defaultChecked /></>,
      'Message',
    )
  }

  return (
    <>
      <Button plain onClick={open}>Common VNode</Button>
      <Button plain onClick={open1}>Dynamic props</Button>
    </>
  )
}

export default MessageBoxMessage`,Wn=`import { Button, notification } from 'pelement-react'

function NotificationBasic() {
  function open1() {
    notification.open({
      title: 'Title',
      message: <i style={{ color: 'teal' }}>This is a reminder</i>
    })
  }

  function open2() {
    notification.open({
      title: 'Prompt',
      message: 'This is a message that does not automatically close',
      duration: 0,
    })
  }

  return (
    <>
      <Button plain onClick={open1}>Closes automatically</Button>
      <Button plain onClick={open2}>Won't close automatically</Button>
    </>
  )
}

export default NotificationBasic`,Fn=`import { Button, notification } from 'pelement-react'

function NotificationType() {
  function open1() {
    notification.open({
      title: 'Custom Position',
      message: "I'm at the top right corner",
    })
  }

  function open2() {
    notification.open({
      title: 'Custom Position',
      message: "I'm at the bottom right corner",
      position: 'bottom-right',
    })
  }

  function open3() {
    notification.open({
      title: 'Custom Position',
      message: "I'm at the bottom left corner",
      position: 'bottom-left',
    })
  }

  function open4() {
    notification.open({
      title: 'Custom Position',
      message: "I'm at the top left corner",
      position: 'top-left',
    })
  }

  return (
    <>
      <Button plain onClick={open1}>Top Right</Button>
      <Button plain onClick={open2}>Bottom Right</Button>
      <Button plain onClick={open3}>Bottom Left</Button>
      <Button plain onClick={open4}>Top Left</Button>
    </>
  )
}

export default NotificationType`,Un=`import { Button, notification } from 'pelement-react'

function NotificationShowClose() {
  function open1() {
    notification.open({
      title: 'Info',
      message: 'This is a message without close button',
      showClose: false,
    })
  }

  return (
    <>
      <Button plain onClick={open1}>Hide close button</Button>
    </>
  )
}

export default NotificationShowClose`,jn=`import { Button, notification } from 'pelement-react'

function NotificationType() {
  function open1() {
    notification.open({
      title: 'Success',
      message: 'This is a success message',
      type: 'success',
    })
  }

  function open2() {
    notification.open({
      title: 'Warning',
      message: 'This is a warning message',
      type: 'warning',
    })
  }

  function open3() {
    notification.open({
      title: 'Info',
      message: 'This is an info message',
      type: 'info',
    })
  }

  function open4() {
    notification.open({
      title: 'Error',
      message: 'This is an error message',
      type: 'error',
    })
  }

  return (
    <>
      <Button plain onClick={open1}>Success</Button>
      <Button plain onClick={open2}>Warning</Button>
      <Button plain onClick={open3}>Info</Button>
      <Button plain onClick={open4}>Error</Button>
    </>
  )
}

export default NotificationType`,Gn=`import { Avatar, Breadcrumb, Button, Descriptions, PageHeader, Tag } from 'pelement-react'

function PageHeaderAll() {
  const items = [
    {
      label: 'Username',
      content: 'kooriookami'
    },
    {
      label: 'Telephone',
      content: '18100000000'
    },
    {
      label: 'Place',
      content: 'Suzhou'
    },
    {
      label: 'Remarks',
      content: <Tag size="small">School</Tag>
    },
    {
      label: 'Address',
      content: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province'
    },
  ]

  function onBack() {
    console.log('Back')
  }

  return (
    <>
      <div aria-label="A complete example of page header">
        <PageHeader
          breadcrumb={
            <Breadcrumb
              items={[
                {
                  title: 'homepage',
                  isLink: true,
                },
                {
                  title: <a href="/">route 1</a>,
                  isLink: true,
                },
                {
                  title: 'route 2'
                },
              ]}
            />
          }
          content={
            <div className="flex items-center">
              <Avatar
                className="mr-3"
                size={32}
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              />
              <span className="text-large font-600 mr-3"> Title </span>
              <span
                className="text-sm mr-2"
                style={{ color: 'var(--el-text-color-regular)' }}
              >
                Sub title
              </span>
              <Tag>Default</Tag>
            </div>
          }
          extra={
            <div className="flex items-center">
              <Button>Print</Button>
              <Button type="primary" className="ml-2">Edit</Button>
            </div>
          }
          onBack={onBack}
        >
          <Descriptions
            title="User Info"
            items={items}
          />
          <p className="mt-4 text-sm">
            Element Plus team uses <b>weekly</b> release strategy under normal
            circumstance, but critical bug fixes would require hotfix so the actual
            release number <b>could be</b> more than 1 per week.
          </p>
        </PageHeader>
      </div>
    </>
  )
}

export default PageHeaderAll`,Vn=`import { PageHeader } from 'pelement-react'

function PageHeaderBasic() {
  function goBack() {
    console.log('go back')
  }

  return (
    <>
      <PageHeader
        content={
          <span className="text-large font-600 mr-3"> Title </span>
        }
        onBack={goBack}
      >
      </PageHeader >
    </>
  )
}

export default PageHeaderBasic`,$n=`import { Breadcrumb, PageHeader } from 'pelement-react'

function PageHeaderBreadcrumb() {
  return (
    <>
      <div aria-label="A complete example of page header">
        <PageHeader
          breadcrumb={
            <Breadcrumb
              items={[
                {
                  title: 'homepage',
                  isLink: true,
                },
                {
                  title: <a href="/">route 1</a>,
                  isLink: true,
                },
                {
                  title: 'route 2'
                },
              ]}
            />
          }
          content={
            <span className="text-large font-600 mr-3"> Title </span>
          }
        >
        </PageHeader>
      </div>
    </>
  )
}

export default PageHeaderBreadcrumb`,Kn=`import { PageHeader } from 'pelement-react'

function PageHeaderContent() {

  function onBack() {
    console.log('Back')
  }

  return (
    <>
      <div aria-label="A complete example of page header">
        <PageHeader
          content={
            <div className="flex items-center">
              <span className="text-large font-600 mr-3"> Title </span>
            </div>
          }
          onBack={onBack}
        >
          <p className="mt-4 text-sm">
            Element Plus team uses <b>weekly</b> release strategy under normal
            circumstance, but critical bug fixes would require hotfix so the actual
            release number <b>could be</b> more than 1 per week.
          </p>
        </PageHeader>
      </div>
    </>
  )
}

export default PageHeaderContent`,Zn=`import { Avatar, Button, PageHeader, Tag } from 'pelement-react'

function PageHeaderExtra() {
  function onBack() {
    console.log('Back')
  }

  return (
    <>
      <div aria-label="A complete example of page header">
        <PageHeader
          content={
            <div className="flex items-center">
              <Avatar
                className="mr-3"
                size={32}
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              />
              <span className="text-large font-600 mr-3"> Title </span>
              <span
                className="text-sm mr-2"
                style={{ color: 'var(--el-text-color-regular)' }}
              >
                Sub title
              </span>
              <Tag>Default</Tag>
            </div>
          }
          extra={
            <div className="flex items-center">
              <Button>Print</Button>
              <Button type="primary" className="ml-2">Edit</Button>
            </div>
          }
          onBack={onBack}
        >
        </PageHeader>
      </div>
    </>
  )
}

export default PageHeaderExtra`,Xn=`import { Edit, PageHeader } from 'pelement-react'

function PageHeaderIcon() {
  return (
    <>
      <PageHeader
        icon={
          <Edit />
        }
        content={
          <span className="text-large font-600 mr-3"> Title </span>
        }
      >
      </PageHeader >
    </>
  )
}

export default PageHeaderIcon`,qn=`import { PageHeader } from 'pelement-react'

function PageHeaderNoIcon() {
  return (
    <>
      <PageHeader icon={null}
        content={
          <span className="text-large font-600 mr-3"> Title </span>
        }
      >
      </PageHeader>
    </>
  )
}

export default PageHeaderNoIcon`,Jn=`import { Button, Popconfirm } from 'pelement-react'

function PopconfirmBasic() {
  return (
    <>
      <Popconfirm title="Are you sure to delete this?">
        <Button>Delete</Button>
      </Popconfirm>
    </>
  )
}

export default PopconfirmBasic`,Yn=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'

function PopconfirmEvent() {
  function confirmEvent() {
    console.log('confirm!')
  }

  function cancelEvent() {
    console.log('cancel!')
  }

  return (
    <>
      <Popconfirm
        confirmButtonText="Yes"
        cancelButtonText="No"
        icon={<InfoFilled />}
        iconColor="#626AEF"
        title="Are you sure to delete this?"
        onConfirm={confirmEvent}
        onCancel={cancelEvent}
      >
        <Button>Delete</Button>
      </Popconfirm >
    </>
  )
}

export default PopconfirmEvent`,Qn=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'

function PopconfirmIcon() {
  return (
    <>
      <Popconfirm
        width={220}
        confirmButtonText="OK"
        cancelButtonText="No, Thanks"
        icon={<InfoFilled />}
        iconColor="#626AEF"
        title="Are you sure to delete this?"
      >
        <Button>Delete</Button>
      </Popconfirm >
    </>
  )
}

export default PopconfirmIcon`,ea=`import { Button, Popover } from 'pelement-react'

function PopoverBasic() {
  return (
    <>
      <Popover
        placement="top-start"
        title="Title"
        width={200}
        trigger="hover"
        content="this is content, this is content, this is content"
      >
        <Button className="m-2">Hover to activate</Button>
      </Popover>
      <Popover
        placement="bottom"
        title="Title"
        width={200}
        trigger="click"
        content="this is content, this is content, this is content"
      >
        <Button className="m-2">Click to activate</Button>
      </Popover>
      <Popover
        placement="right"
        title="Title"
        width={200}
        trigger="focus"
        content="this is content, this is content, this is content"
      >
        <Button className="m-2">Focus to activate</Button>
      </Popover>
      <Popover
        title="Title"
        width={200}
        trigger="contextmenu"
        content="this is content, this is content, this is content"
      >
        <Button className="m-2">contextmenu to activate</Button>
      </Popover>
    </>
  )
}

export default PopoverBasic`,ta=`import { Progress } from 'pelement-react'
import './ProgressBasic.scss'

function ProgressBasic() {
  function format(percentage: number) {
    return (percentage === 100 ? 'Full' : \`\${percentage}%\`)
  }

  return (
    <>
      <div className="common-progress">
        <Progress percentage={50} />
        <Progress percentage={100} format={format} />
        <Progress percentage={100} status="success" />
        <Progress percentage={100} status="warning" />
        <Progress percentage={50} status="exception" />
      </div>
    </>
  )
}

export default ProgressBasic`,na=`import { Progress } from 'pelement-react'

function ProgressTextInside() {
  return (
    <>
      <div className="common-progress">
        <Progress textInside={true} strokeWidth={26} percentage={70} />
        <Progress
          textInside={true}
          strokeWidth={24}
          percentage={100}
          status="success"
        />
        <Progress
          textInside={true}
          strokeWidth={22}
          percentage={80}
          status="warning"
        />
        <Progress
          textInside={true}
          strokeWidth={20}
          percentage={50}
          status="exception"
        />
      </div>
    </>
  )
}

export default ProgressTextInside`,aa=`import { Rate } from 'pelement-react'

function RateBasic() {
  return (
    <>
      <Rate></Rate>
    </>
  )
}

export default RateBasic`,oa=`import { Button, Col, Result, Row } from 'pelement-react'

function ResultBasic() {
  return (
    <>
      <Row>
        <Col sm={12} lg={6}>
          <Result
            icon="success"
            title="Success Tip"
            subTitle="Please follow the instructions"
            extra={<Button type="primary">Back</Button>}
          ></Result>
        </Col>
        <Col sm={12} lg={6}>
          <Result
            icon="warning"
            title="Warning Tip"
            subTitle="Please follow the instructions"
            extra={<Button type="primary">Back</Button>}
          ></Result>
        </Col>
        <Col sm={12} lg={6}>
          <Result
            icon="error"
            title="Error Tip"
            subTitle="Please follow the instructions"
            extra={<Button type="primary">Back</Button>}
          ></Result>
        </Col>
        <Col sm={12} lg={6}>
          <Result
            icon="info"
            title="Info Tip"
            subTitle={<p>Using slot as subtitle</p>}
            extra={<Button type="primary">Back</Button>}
          ></Result>
        </Col>
      </Row>
    </>
  )
}

export default ResultBasic`,ia=`import { Button, Result } from 'pelement-react'

function ResultIcon() {
  return (
    <>
      <Result
        icon={<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />}
        title="404"
        subTitle="Sorry, request error"
        extra={<Button type="primary">Back</Button>}
      ></Result>
    </>
  )
}

export default ResultIcon`,sa=`import { Scrollbar } from 'pelement-react'
import './ScrollbarBasic.css'

function ScrollbarBasic() {
  return (
    <>
      <Scrollbar height="400px">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) =>

            <p key={index} className="scrollbar-demo-item">{item}</p>
          )
        }
      </Scrollbar>
    </>
  )
}

export default ScrollbarBasic`,ra=`import { Segmented } from 'pelement-react'

function SegmentedBasic() {
  const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <>
      <div className="flex flex-col items-start gap-4">
        <Segmented options={options} size="large" />
        <Segmented options={options} size="default" />
        <Segmented options={options} size="small" />
      </div>
    </>
  )
}

export default SegmentedBasic`,la=`import { Segmented } from 'pelement-react'

function SegmentedBlock() {
  const options = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sunday long long long long long long long',
  ]

  return (
    <>
      <Segmented options={options} block />
    </>
  )
}

export default SegmentedBlock`,ca=`import { Segmented } from 'pelement-react'
import './SegmentedBasic.scss'

function SegmentedColor() {
  const options = ['Delicacy', 'Desserts&Drinks', 'Fresh foods', 'Supermarket']

  return (
    <>
      <div className="custom-style">
        <Segmented options={options} />
      </div>
    </>
  )
}

export default SegmentedColor`,pa=`import { Segmented } from 'pelement-react'

function SegmentedDisabled() {
  const options = [
    {
      label: 'Mon',
      value: 'Mon',
      disabled: true,
    },
    {
      label: 'Tue',
      value: 'Tue',
    },
    {
      label: 'Wed',
      value: 'Wed',
      disabled: true,
    },
    {
      label: 'Thu',
      value: 'Thu',
    },
    {
      label: 'Fri',
      value: 'Fri',
      disabled: true,
    },
    {
      label: 'Sat',
      value: 'Sat',
    },
    {
      label: 'Sun',
      value: 'Sun',
    },
  ]

  return (
    <>
      <div className="flex flex-col items-start gap-4">
        <Segmented options={options} disabled />
        <Segmented options={options} />
      </div>
    </>
  )
}

export default SegmentedDisabled`,da=`import { Check, Delete, Edit, Message, Search, Segmented, Star } from 'pelement-react'

function SegmentedReactNode() {
  const options = [
    {
      label: <>
        <div className="flex flex-col items-center gap-2 p-2">
          <Edit style={{ fontSize: '20px' }} />
          <div>Edit</div>
        </div>
      </>
    },
    {
      label: <>
        <div className="flex flex-col items-center gap-2 p-2">
          <Search style={{ fontSize: '20px' }} />
          <div>Search</div>
        </div>
      </>
    },
    {
      label: <>
        <div className="flex flex-col items-center gap-2 p-2">
          <Check style={{ fontSize: '20px' }} />
          <div>Check</div>
        </div>
      </>
    },
    {
      label: <>
        <div className="flex flex-col items-center gap-2 p-2">
          <Message style={{ fontSize: '20px' }} />
          <div>Message</div>
        </div>
      </>
    },
    {
      label: <>
        <div className="flex flex-col items-center gap-2 p-2">
          <Star style={{ fontSize: '20px' }} />
          <div>Star</div>
        </div>
      </>
    },
    {
      label: <>
        <div className="flex flex-col items-center gap-2 p-2">
          <Delete style={{ fontSize: '20px' }} />
          <div>Delete</div>
        </div>
      </>
    },
  ]

  return (
    <>
      <Segmented options={options} size="large" />
    </>
  )
}

export default SegmentedReactNode`,ua=`import { useState } from 'react'
import { Select } from 'pelement-react'

function SelectBasic() {
  const options = [
    {
      value: 'Option1',
      label: 'Option1',
    },
    {
      value: 'Option2',
      label: 'Option2',
    },
    {
      value: 'Option3',
      label: 'Option3',
    },
    {
      value: 'Option4',
      label: 'Option4',
    },
    {
      value: 'Option5',
      label: 'Option5',
    },
  ]
  const [value, setValue] = useState(options[0])

  function handleChange(value) {
    setValue(value)
  }

  return (
    <>
      <div className="flex flex-wrap gap-4 items-center">
        <Select
          style={{ width: '240px' }}
          size="large"
          options={options}
          value={value}
          onChange={handleChange}
        ></Select>
        <Select
          style={{ width: '240px' }}
          options={options}
          value={value}
          onChange={handleChange}
        ></Select>
        <Select
          style={{ width: '240px' }}
          size="small"
          options={options}
          value={value}
          onChange={handleChange}
        ></Select>
      </div>
    </>
  )
}

export default SelectBasic`,ma=`import { Skeleton } from 'pelement-react'

function SkeletonAnimated() {
  return (
    <>
      <Skeleton rows={5} animated />
    </>
  )
}

export default SkeletonAnimated`,ga=`import { Skeleton, SkeletonItem } from 'pelement-react'

function SkeletonBasic() {
  return (
    <>
      <Skeleton />
      <br />
      <Skeleton
        style={{ ['--el-skeleton-circle-size' as string]: '100px' }}
        custom={
          <SkeletonItem variant="circle" />
        }
      />
    </>
  )
}

export default SkeletonBasic`,fa=`import { useState } from 'react'
import { Button, Skeleton, SkeletonItem, Space } from 'pelement-react'

function SkeletonCount() {
  const [loading, setLoading] = useState(false)
  const lists = [
    {
      imgUrl:
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      name: 'Deer',
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      name: 'Horse',
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      name: 'Mountain Lion',
    },
  ]
  const currentDate = new Date().toDateString()

  function handleClick() {
    setLoading(loading ? false : true)
  }

  return (
    <>
      <Space direction="vertical" alignment="flex-start">
        <Button onClick={handleClick}>Click me to reload</Button>
        <Skeleton style={{ width: '240px' }} loading={loading} animated count={3}
          custom={
            <>
              <SkeletonItem variant="image" style={{ width: '400px', height: '267px' }} />
              <div style={{ padding: '14px' }}>
                <SkeletonItem variant="h3" style={{ width: '50%' }} />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyItems: 'space-between',
                    marginTop: '16px',
                    height: '16px',
                  }}
                >
                  <SkeletonItem variant="text" style={{ marginRight: '16px' }} />
                  <SkeletonItem variant="text" style={{ width: '30%' }} />
                </div>
              </div>
            </>
          }
        >
          {lists.map((item, index) =>
            <div key={index}>
              <img src={item.imgUrl} style={{ maxWidth: '100%' }} />
              <div style={{ padding: '14px' }}>
                <span>{item.name}</span>
                <div className="bottom card-header">
                  <div className="time">{currentDate}</div>
                  <Button text className="button">Operation button</Button>
                </div>
              </div>
            </div>
          )}
        </Skeleton>
      </Space >

    </>
  )
}

export default SkeletonCount`,ha=`import { useState } from 'react'
import { Button, Skeleton, SkeletonItem, Space } from 'pelement-react'

function SkeletonLoading() {
  const [loading, setLoading] = useState(true)
  const currentDate = new Date().toDateString()

  return (
    <>
      <Space direction="vertical" alignment="flex-start">
        <div>
          <label
            style={{ marginRight: '16px' }}
            onClick={() => setLoading(loading ? false : true)}
          >
            Switch Loading
          </label>
          <span>{loading ? 'true' : 'false'}</span>
        </div>
        <Skeleton
          style={{ width: '240px' }}
          loading={loading}
          animated
          custom={
            <>
              <SkeletonItem variant="image" style={{ width: '240px', height: '240px' }} />
              <div style={{ padding: '14px' }}>
                <SkeletonItem variant="h3" style={{ width: '50%' }} />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyItems: 'space-between',
                    marginTop: '16px',
                    height: '16px',
                  }}
                >
                  <SkeletonItem variant="text" style={{ marginRight: '16px' }} />
                  <SkeletonItem variant="text" style={{ width: '30%' }} />
                </div>
              </div>
            </>
          }
        >
          <div>
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              className="image"
            />
            <div style={{ padding: '14px' }}>
              <span>Delicious hamburger</span>
              <div className="bottom card-header">
                <div className="time">{currentDate}</div>
                <Button text className="button">Operation button</Button>
              </div>
            </div>
          </div>
        </Skeleton>
      </Space>
    </>
  )
}

export default SkeletonLoading`,xa=`import { Skeleton } from 'pelement-react'

function SkeletonRows() {
  return (
    <>
      <Skeleton rows={5} />
    </>
  )
}

export default SkeletonRows`,_a=`import { useState } from 'react'
import { Button, Skeleton, SkeletonItem, Space } from 'pelement-react'

function SkeletonThrottle() {
  const [loading, setLoading] = useState(false)
  const currentDate = new Date().toDateString()

  return (
    <>
      <Space direction="vertical" alignment="flex-start">
        <div>
          <label
            style={{ marginRight: '16px' }}
            onClick={() => setLoading(loading ? false : true)}
          >
            Switch Loading
          </label>
          <span>{loading ? 'true' : 'false'}</span>
        </div>
        <Skeleton
          style={{ width: '240px' }}
          loading={loading}
          animated
          throttle={500}
          custom={
            <>
              <SkeletonItem variant="image" style={{ width: '240px', height: '240px' }} />
              <div style={{ padding: '14px' }}>
                <SkeletonItem variant="h3" style={{ width: '50%' }} />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyItems: 'space-between',
                    marginTop: '16px',
                    height: '16px',
                  }}
                >
                  <SkeletonItem variant="text" style={{ marginRight: '16px' }} />
                  <SkeletonItem variant="text" style={{ width: '30%' }} />
                </div>
              </div>
            </>
          }
        >
          <div>
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              className="image"
            />
            <div style={{ padding: '14px' }}>
              <span>Delicious hamburger</span>
              <div className="bottom card-header">
                <div className="time">{currentDate}</div>
                <Button text className="button">Operation button</Button>
              </div>
            </div>
          </div>
        </Skeleton>
      </Space>
    </>
  )
}

export default SkeletonThrottle`,ba=`import { Skeleton, SkeletonItem } from 'pelement-react'

function SkeletonVariant() {
  return (
    <>
      <Skeleton
        style={{ width: '240px' }}
        custom={
          <>
            <SkeletonItem variant="image" style={{ width: '240px', height: '240px' }} />
            <div style={{ padding: '14px' }}>
              <SkeletonItem variant="p" style={{ width: '50%' }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyItems: 'space-between'
                }}>
                <SkeletonItem variant="text" style={{ marginRight: '16px' }} />
                <SkeletonItem variant="text" style={{ width: '30%' }} />
              </div>
            </div>
          </>
        }
      />
    </>
  )
}

export default SkeletonVariant`,va=`import { Button, Space } from 'pelement-react'

function SpaceAlignment() {
  return (
    <>
      <div style={{ width: '250px', height: '70px', border: '1px solid #e4e7ed', padding: '10px', marginBottom: '10px' }}>
        <Space>
          string
          <Button> button </Button>
          <div style={{ height: '70px', border: '1px solid #e4e7ed', padding: '0 10px' }}>1</div>
        </Space>
      </div>
      <div style={{ width: '250px', height: '70px', border: '1px solid #e4e7ed', padding: '10px', marginBottom: '10px' }}>
        <Space alignment="flex-start">
          string
          <Button> button </Button>
          <div style={{ height: '70px', border: '1px solid #e4e7ed', padding: '0 10px' }}>2</div>
        </Space>
      </div>
      <div style={{ width: '250px', height: '70px', border: '1px solid #e4e7ed', padding: '10px' }}>
        <Space alignment="flex-end">
          string
          <Button> button </Button>
          <div style={{ height: '70px', border: '1px solid #e4e7ed', padding: '0 10px' }}>3</div>
        </Space>
      </div>
    </>
  )
}

export default SpaceAlignment`,Ba=`import { Space } from 'pelement-react'

function SpaceBasic() {
  return (
    <>
      <Space wrap>
        {
          [1, 2, 3].map((item, index) =>
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>
          )
        }
      </Space>
    </>
  )
}

export default SpaceBasic`,ka=`import { Space } from 'pelement-react'

function SpaceDirection() {
  return (
    <>
      <Space direction="vertical">
        {
          [1, 2, 3].map((item, index) =>
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>
          )
        }
      </Space>
    </>
  )
}

export default SpaceDirection`,ya=`import { Space } from 'pelement-react'

function SpaceSize() {
  return (
    <>
      <Space wrap size="large">
        {
          [1, 2].map((item, index) =>
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>
          )
        }
      </Space>
      <Space wrap size="default">
        {
          [1, 2].map((item, index) =>
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>
          )
        }
      </Space>
      <Space wrap size="small">
        {
          [1, 2].map((item, index) =>
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>
          )
        }
      </Space>
    </>
  )
}

export default SpaceSize`,Ca=`import { Space } from 'pelement-react'

function SpaceSize2() {
  return (
    <>
      <Space wrap size={0}>
        {
          [1, 2].map((item, index) =>
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>
          )
        }
      </Space>
      <Space wrap size={50}>
        {
          [1, 2].map((item, index) =>
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>
          )
        }
      </Space>
      <Space wrap size={100}>
        {
          [1, 2].map((item, index) =>
            <div style={{ width: '250px', height: '50px', border: '1px solid #e4e7ed', padding: '20px' }} key={index}>{item}</div>
          )
        }
      </Space>
    </>
  )
}

export default SpaceSize2`,Sa=`import { Button, Space } from 'pelement-react'

function SpaceSpacer() {
  return (
    <>
      <Space size={10} spacer="|">
        <Button> button 1 </Button>
        <Button> button 2 </Button>
      </Space>
    </>
  )
}

export default SpaceSpacer`,Ta=`import { Button, Divider, Space } from 'pelement-react'

function SpaceSpacer2() {
  return (
    <>
      <Space size={10} spacer={<Divider direction="vertical" />}>
        <Button> button 1 </Button>
        <Button> button 2 </Button>
      </Space>
    </>
  )
}

export default SpaceSpacer2`,wa=`import { Button, Space } from 'pelement-react'

function SpaceWrap() {
  return (
    <>
      <Space wrap>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) =>
            <div key={index}>
              <Button text> Text button {item} </Button>
            </div>
          )
        }
      </Space >
    </>
  )
}

export default SpaceWrap`,Na=`import { Hide, Switch, View } from 'pelement-react'

function SwitchActionIcon() {
  return (
    <>
      <Switch
        defaultChecked
        activeActionIcon={<View />}
        inactiveActionIcon={<Hide />}
      />
      <br />
      <Switch
        defaultChecked
        activeActionIcon={<><span className="custom-active-action">T</span></>}
        inactiveActionIcon={<><span className="custom-inactive-action">F</span></>}
      />
    </>
  )
}

export default SwitchActionIcon`,Ea=`import { Switch } from 'pelement-react'

function SwitchBasic() {
  return (
    <>
      <Switch defaultChecked />
      <Switch
        defaultChecked
        className="ml-2"
        style={{ ['--el-switch-on-color' as string]: '#13ce66', ['--el-switch-off-color' as string]: '#ff4949' }}
      />
    </>
  )
}

export default SwitchBasic`,Aa=`import { useState } from 'react'
import { Switch } from 'pelement-react'

function SwitchBeforeChange() {
  const [loading1, setLoading1] = useState(false)
  const [loading2, setLoading2] = useState(false)

  function beforeChange1(): Promise<boolean> {
    setLoading1(true)
    return new Promise((resolve) => {
      setTimeout(() => {
        setLoading1(false)
        console.log('Switch success')
        return resolve(true)
      }, 1000)
    })
  }

  function beforeChange2(): Promise<boolean> {
    setLoading2(true)
    return new Promise((_, reject) => {
      setTimeout(() => {
        setLoading2(false)
        console.log('Switch failed')
        return reject(new Error('Error'))
      }, 1000)
    })
  }

  return (
    <>
      <Switch
        loading={loading1}
        beforeChange={beforeChange1}
      />
      <Switch
        className="ml-2"
        loading={loading2}
        beforeChange={beforeChange2}
      />
    </>
  )
}

export default SwitchBeforeChange`,Da=`import { Switch } from 'pelement-react'

function SwitchDisabled() {
  return (
    <>
      <Switch defaultChecked disabled />
      <Switch defaultChecked className="ml-2" />
    </>
  )
}

export default SwitchDisabled`,Ra=`import { Check, Close, Switch } from 'pelement-react'

function SwitchIcon() {
  return (
    <>
      <Switch
        defaultChecked
        activeIcon={<Check />}
        inactiveIcon={<Close />}
      />
      <br />
      <Switch
        defaultChecked
        className="mt-2"
        style={{ marginLeft: '24px' }}
        inlinePrompt
        activeIcon={<Check className="is-icon" />}
        inactiveIcon={<Close className="is-icon" />}
      />
    </>
  )
}

export default SwitchIcon`,La=`import { Switch } from 'pelement-react'

function SwitchLoading() {
  return (
    <>
      <Switch defaultChecked loading />
      <Switch loading className="ml-2" />
    </>
  )
}

export default SwitchLoading`,Ia=`import { Switch } from 'pelement-react'

function SwitchSize() {
  return (
    <>
      <Switch
        defaultChecked
        size="large"
        activeText="Open"
        inactiveText="Close"
      />
      <br />
      <Switch
        defaultChecked
        activeText="Open"
        inactiveText="Close" />
      <br />
      <Switch
        defaultChecked
        size="small"
        activeText="Open"
        inactiveText="Close"
      />
    </>
  )
}

export default SwitchSize`,Ma=`import { Switch } from 'pelement-react'

function SwitchText() {
  return (
    <>
      <Switch
        defaultChecked
        className="mb-2"
        activeText="Pay by month"
        inactiveText="Pay by year"
      />
      <br />
      <Switch
        defaultChecked
        className="mb-2"
        style={{ ['--el-switch-on-color' as string]: '#13ce66', ['--el-switch-off-color' as string]: '#ff4949' }}
        activeText="Pay by month"
        inactiveText="Pay by year"
      />
      <br />
      <Switch
        defaultChecked
        inlinePrompt
        activeText="是"
        inactiveText="否"
      />
      <Switch
        defaultChecked
        className="ml-2"
        inlinePrompt
        style={{ ['--el-switch-on-color' as string]: '#13ce66', ['--el-switch-off-color' as string]: '#ff4949' }}
        activeText="Y"
        inactiveText="N"
      />
      <Switch
        defaultChecked
        className="ml-2"
        width={60}
        inlinePrompt
        activeText="超出省略"
        inactiveText="超出省略"
      />
      <Switch
        defaultChecked
        className="ml-2"
        inlinePrompt
        style={{ ['--el-switch-on-color' as string]: '#13ce66', ['--el-switch-off-color' as string]: '#ff4949' }}
        activeText="完整展示多个内容"
        inactiveText="多个内容"
      />
    </>
  )
}

export default SwitchText`,Pa=`import { Table } from 'pelement-react'

function TableBasic() {
  const columns = [
    {
      key: 'date',
      dataIndex: 'date',
      label: 'Date',
      width: 180,
    },
    {
      key: 'name',
      dataIndex: 'name',
      label: 'Name',
      width: 180,
    },
    {
      key: 'address',
      dataIndex: 'address',
      label: 'Address',
    },
  ]

  const data = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ];

  return (
    <>
      <Table columns={columns} data={data}>
      </Table>
    </>
  )
}

export default TableBasic`,Oa=`import { Table } from 'pelement-react'

function TableBorder() {
  const columns = [
    {
      key: 'date',
      dataIndex: 'date',
      label: 'Date',
      width: 180,
    },
    {
      key: 'name',
      dataIndex: 'name',
      label: 'Name',
      width: 180,
    },
    {
      key: 'address',
      dataIndex: 'address',
      label: 'Address',
    },
  ]

  const data = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ];

  return (
    <>
      <Table columns={columns} data={data} border>
      </Table>
    </>
  )
}

export default TableBorder`,za=`import { Table } from 'pelement-react'

function TableStripe() {
  const columns = [
    {
      key: 'date',
      dataIndex: 'date',
      label: 'Date',
      width: 180,
    },
    {
      key: 'name',
      dataIndex: 'name',
      label: 'Name',
      width: 180,
    },
    {
      key: 'address',
      dataIndex: 'address',
      label: 'Address',
    },
  ]

  const data = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ];

  return (
    <>
      <Table columns={columns} data={data} stripe>
      </Table>
    </>
  )
}

export default TableStripe`,Ha=`import { Tag } from 'pelement-react'

function TagBasic() {
  return (
    <>
      <Tag>Tag 1</Tag>
      <Tag className="ml-2" type="success">Tag 2</Tag>
      <Tag className="ml-2" type="info">Tag 3</Tag>
      <Tag className="ml-2" type="warning">Tag 4</Tag>
      <Tag className="ml-2" type="danger">Tag 5</Tag>
    </>
  )
}

export default TagBasic`,Wa=`import { Tag } from 'pelement-react'

function TagClosable() {
  const tagList = [
    { name: 'Tag 1', type: '' },
    { name: 'Tag 2', type: 'success' },
    { name: 'Tag 3', type: 'info' },
    { name: 'Tag 4', type: 'warning' },
    { name: 'Tag 5', type: 'danger' },
  ].map(tag =>
    <Tag
      className="mx-1"
      closable
      type={tag.type as any}
    >
      {tag.name}
    </Tag>
  )

  return (
    <>
      {tagList}
    </>
  )
}

export default TagClosable`,Fa=`import { Tag } from 'pelement-react'

function TagEffect() {
  const items = [
    { type: '', label: 'Tag 1' },
    { type: 'success', label: 'Tag 2' },
    { type: 'info', label: 'Tag 3' },
    { type: 'danger', label: 'Tag 4' },
    { type: 'warning', label: 'Tag 5' },
  ]

  const darkList = items.map(item =>
    <Tag
      type={item.type as any}
      className="mx-1"
      effect="dark"
    >
      {item.label}
    </Tag>
  )

  const darkClosable = items.map(item =>
    <Tag
      type={item.type as any}
      className="mx-1"
      effect="dark"
      closable
    >
      {item.label}
    </Tag>
  )

  const lightList = items.map(item =>
    <Tag
      type={item.type as any}
      className="mx-1"
      effect="light"
    >
      {item.label}
    </Tag>
  )

  const lightClosable = items.map(item =>
    <Tag
      type={item.type as any}
      className="mx-1"
      effect="light"
      closable
    >
      {item.label}
    </Tag>
  )

  const plainList = items.map(item =>
    <Tag
      type={item.type as any}
      className="mx-1"
      effect="plain"
    >
      {item.label}
    </Tag>
  )

  const plainClosable = items.map(item =>
    <Tag
      type={item.type as any}
      className="mx-1"
      effect="plain"
      closable
    >
      {item.label}
    </Tag>
  )

  return (
    <>
      <div className="tag-group my-2 flex flex-wrap gap-1 items-center">
        <span className="tag-group__title m-1 line-height-2">Dark</span>
        {darkList}
        {darkClosable}
      </div>
      <div className="tag-group my-2 flex flex-wrap gap-1 items-center">
        <span className="tag-group__title m-1">Light</span>
        {lightList}
        {lightClosable}
      </div>
      <div className="tag-group my-2 flex flex-wrap gap-1 items-center">
        <span className="tag-group__title m-1">Plain</span>
        {plainList}
        {plainClosable}
      </div>
    </>
  )
}

export default TagEffect`,Ua=`import { Tag } from 'pelement-react'

function TagRound() {
  const items = [
    { type: '', label: 'Tag 1' },
    { type: 'success', label: 'Tag 2' },
    { type: 'info', label: 'Tag 3' },
    { type: 'danger', label: 'Tag 4' },
    { type: 'warning', label: 'Tag 5' },
  ]

  const darkList = items.map(item =>
    <Tag
      type={item.type as any}
      className="mx-1"
      effect="dark"
      round
    >
      {item.label}
    </Tag>
  )

  const lightList = items.map(item =>
    <Tag
      type={item.type as any}
      className="mx-1"
      effect="light"
      round
    >
      {item.label}
    </Tag>
  )

  const plainList = items.map(item =>
    <Tag
      type={item.type as any}
      className="mx-1"
      effect="plain"
      round
    >
      {item.label}
    </Tag>
  )

  return (
    <>
      <div className="flex flex-wrap gap-2 my-2">
        {darkList}
      </div>
      <div className="flex flex-wrap gap-2">
        {lightList}
      </div>
      <div className="flex flex-wrap gap-2 my-2">
        {plainList}
      </div>
    </>
  )
}

export default TagRound`,ja=`import { Row, Tag } from 'pelement-react'

function TagSize() {
  return (
    <>
      <Row>
        <Tag className="mx-1" size="large">Large</Tag>
        <Tag className="mx-1">Default</Tag>
        <Tag className="mx-1" size="small">Small</Tag>
      </Row>

      <Row className="mt-4">
        <Tag className="mx-1" size="large" closable>Large</Tag>
        <Tag className="mx-1" closable>Default</Tag>
        <Tag className="mx-1" size="small" closable>Small</Tag>
      </Row>
    </>
  )
}

export default TagSize`,Ga=`import { Text } from 'pelement-react'
import './TextBasic.scss'

function TextBasic() {
  return (
    <>
      <div className="common-text">
        <Text className="mx-1">Default</Text>
        <Text className="mx-1" type="primary">Primary</Text>
        <Text className="mx-1" type="success">Success</Text>
        <Text className="mx-1" type="info">Info</Text>
        <Text className="mx-1" type="warning">Warning</Text>
        <Text className="mx-1" type="danger">Danger</Text>
      </div>
    </>
  )
}

export default TextBasic`,Va=`import { Text } from 'pelement-react'

function TextSize() {
  return (
    <>
      <div className="common-text">
        <Text className="mx-1" size="large">Large</Text>
        <Text className="mx-1">Default</Text>
        <Text className="mx-1" size="small">Small</Text>
      </div>
    </>
  )
}

export default TextSize`,$a=`import { Row, Text } from 'pelement-react'

function TextTruncated() {
  return (
    <>
      <div className="common-text">
        <Text className="w-150px mb-2" truncated>
          Self element set width 100px
        </Text>
        <Row className="w-150px mb-2">
          <Text truncated>Squeezed by parent element</Text>
        </Row>
        <Text lineClamp={2}>
          The -webkit-line-clamp CSS property<br />
          allows limiting of the contents of<br />
          a block to the specified number of lines.
        </Text>
      </div>
    </>
  )
}

export default TextTruncated`,Ka=`import { TimeSelect } from 'pelement-react'
import { useState } from 'react'

function TimeSelectBasic() {
  const [value, setValue] = useState('')

  function handleChange(val) {
    setValue(val)
  }

  return (
    <>
      <TimeSelect
        value={value}
        style={{ width: '240px' }}
        start="08:30"
        step="00:15"
        end="18:30"
        placeholder="Select time"
        onChange={handleChange}
      />
    </>
  )
}

export default TimeSelectBasic`,Za=`import { Timeline } from 'pelement-react'

function TimelineBasic() {
  const items = [
    {
      content: 'Event start',
      timestamp: '2018-04-15',
    },
    {
      content: 'Approved',
      timestamp: '2018-04-13',
    },
    {
      content: 'Success',
      timestamp: '2018-04-11',
    },
  ]

  return (
    <>
      <Timeline
        style={{ maxWidth: '600px' }}
        items={items}
      />
    </>
  )
}

export default TimelineBasic`,Xa=`import { Timeline } from 'pelement-react'

function TimelineCenter() {
  const items = [
    {
      content: <div style={{ border: '1px solid #e4e7ed', padding: '20px' }}>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/12 20:46</p>
      </div>,
      timestamp: '2018/4/12',
      placement: 'top',
      center: true,
    },
    {
      content: <div style={{ border: '1px solid #e4e7ed', padding: '20px' }}>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/3 20:46</p>
      </div>,
      timestamp: '2018/4/3',
      placement: 'top',
    },
    {
      content: 'Event start',
      timestamp: '2018/4/2',
      placement: 'top',
      center: true,
    },
    {
      content: 'Event end',
      timestamp: '2018/4/2',
      placement: 'top',
      center: true,
    },
  ]

  return (
    <>
      <Timeline
        style={{ maxWidth: '600px' }}
        items={items}
      />
    </>
  )
}

export default TimelineCenter`,qa=`import { Edit, Timeline } from 'pelement-react'

function TimelineNode() {
  const items = [
    {
      content: 'Custom icon',
      timestamp: '2018-04-12 20:46',
      size: 'large',
      type: 'primary',
      icon: <Edit />,
    },
    {
      content: 'Custom color',
      timestamp: '2018-04-03 20:46',
      color: '#0bbd87',
    },
    {
      content: 'Custom size',
      timestamp: '2018-04-03 20:46',
      size: 'large',
    },
    {
      content: 'Custom hollow',
      timestamp: '2018-04-03 20:46',
      type: 'primary',
      hollow: true,
    },
    {
      content: 'Default node',
      timestamp: '2018-04-03 20:46',
    },
  ]

  return (
    <>
      <Timeline
        style={{ maxWidth: '600px' }}
        items={items}
      />
    </>
  )
}

export default TimelineNode`,Ja=`import { Timeline } from 'pelement-react'

function TimelinePlacement() {
  const items = [
    {
      content: <div style={{ border: '1px solid #e4e7ed', padding: '20px' }}>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/12 20:46</p>
      </div>,
      timestamp: '2018/4/12',
      placement: 'top',
    },
    {
      content: <div style={{ border: '1px solid #e4e7ed', padding: '20px' }}>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/3 20:46</p>
      </div>,
      timestamp: '2018/4/3',
      placement: 'top',
    },
    {
      content: <div style={{ border: '1px solid #e4e7ed', padding: '20px' }}>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/2 20:46</p>
      </div>,
      timestamp: '2018/4/2',
      placement: 'top',
    },
  ]

  return (
    <>
      <Timeline
        style={{ maxWidth: '600px' }}
        items={items}
      />
    </>
  )
}

export default TimelinePlacement`,Ya=`import { Button, Tooltip } from 'pelement-react'
import './TooltipBasic.scss'

function TooltipBasic() {
  return (
    <>
      <div className="common-tooltip">
        <div className="row center">
          <Tooltip
            className="box-item"
            effect="dark"
            content="Top Left prompts info"
            placement="top-start"
          >
            <Button>top-start</Button>
          </Tooltip>
          <Tooltip
            className="box-item"
            effect="dark"
            content="Top Center prompts info"
            placement="top"
          >
            <Button>top</Button>
          </Tooltip>
          <Tooltip
            className="box-item"
            effect="dark"
            content="Top Right prompts info"
            placement="top-end"
          >
            <Button>top-end</Button>
          </Tooltip>
        </div>
        <div className="row">
          <Tooltip
            className="box-item"
            effect="dark"
            content="Left Top prompts info"
            placement="left-start"
          >
            <Button>left-start</Button>
          </Tooltip>
          <Tooltip
            className="box-item"
            effect="dark"
            content="Right Top prompts info"
            placement="right-start"
          >
            <Button>right-start</Button>
          </Tooltip>
        </div>
        <div className="row">
          <Tooltip
            className="box-item"
            effect="dark"
            content="Left Center prompts info"
            placement="left"
          >
            <Button className="mt-3 mb-3">left</Button>
          </Tooltip>
          <Tooltip
            className="box-item"
            effect="dark"
            content="Right Center prompts info"
            placement="right"
          >
            <Button>right</Button>
          </Tooltip>
        </div>
        <div className="row">
          <Tooltip
            className="box-item"
            effect="dark"
            content="Left Bottom prompts info"
            placement="left-end"
          >
            <Button>left-end</Button>
          </Tooltip>
          <Tooltip
            className="box-item"
            effect="dark"
            content="Right Bottom prompts info"
            placement="right-end"
          >
            <Button>right-end</Button>
          </Tooltip>
        </div>
        <div className="row center">
          <Tooltip
            className="box-item"
            effect="dark"
            content="Bottom Left prompts info"
            placement="bottom-start"
          >
            <Button>bottom-start</Button>
          </Tooltip>
          <Tooltip
            className="box-item"
            effect="dark"
            content="Bottom Center prompts info"
            placement="bottom"
          >
            <Button>bottom</Button>
          </Tooltip>
          <Tooltip
            className="box-item"
            effect="dark"
            content="Bottom Right prompts info"
            placement="bottom-end"
          >
            <Button>bottom-end</Button>
          </Tooltip>
        </div>
      </div>
    </>
  )
}

export default TooltipBasic`,Qa=`import { Button, Tooltip } from 'pelement-react'

function TooltipContent() {
  return (
    <>
      <Tooltip placement="top" content={<>multiple lines<br />second line</>}>
        <Button>Top center</Button>
      </Tooltip>
    </>
  )
}

export default TooltipContent`,eo=`import { useState } from 'react'
import { Button, Tooltip } from 'pelement-react'

function TooltipDisabled() {
  const [disabled, setDisabled] = useState(true)

  function changeDisabled() {
    setDisabled(!disabled)
  }

  return (
    <>
      <Tooltip
        disabled={disabled}
        content="click to close tooltip function"
        placement="bottom"
        effect="light"
      >
        <Button onClick={changeDisabled}>
          click to {disabled ? 'active' : 'close'} tooltip function
        </Button>
      </Tooltip >
    </>
  )
}

export default TooltipDisabled`,to=`import { Button, Tooltip } from 'pelement-react'

function TooltipEffect() {
  return (
    <>
      <Tooltip content="Top center" placement="top">
        <Button>Dark</Button>
      </Tooltip>
      <Tooltip content="Bottom center" placement="bottom" effect="light">
        <Button>Light</Button>
      </Tooltip>

      <Tooltip content="Bottom center" effect="customized">
        <Button>Customized theme</Button>
      </Tooltip>
    </>
  )
}

export default TooltipEffect`,no=`import { Watermark } from 'pelement-react'

function WatermarkBasic() {
  return (
    <>
      <Watermark content="pelement-plus">
        <div style={{ height: '500px' }} />
      </Watermark>
    </>
  )
}

export default WatermarkBasic`,ao=`import { Watermark } from 'pelement-react'

function WatermarkContent() {
  return (
    <>
      <Watermark content={['Element Plus', 'pelement-plus']}>
        <div style={{ height: '500px' }} />
      </Watermark>
    </>
  )
}

export default WatermarkContent`,oo=`import { Watermark } from 'pelement-react'

function WatermarkImage() {
  return (
    <>
      <Watermark
        width={30}
        height={30}
        image="https://pelement-react.github.io/pelement-react/pelement-react.svg"
      >
        <div style={{ height: '500px' }} />
      </Watermark>
    </>
  )
}

export default WatermarkImage`;function Pe(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const a=e[t],r=typeof a;(r==="object"||r==="function")&&!Object.isFrozen(a)&&Pe(a)}),e}class Ne{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Oe(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function I(e,...t){const a=Object.create(null);for(const r in e)a[r]=e[r];return t.forEach(function(r){for(const f in r)a[f]=r[f]}),a}const io="</span>",Ee=e=>!!e.scope,so=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const a=e.split(".");return[`${t}${a.shift()}`,...a.map((r,f)=>`${r}${"_".repeat(f+1)}`)].join(" ")}return`${t}${e}`};class ro{constructor(t,a){this.buffer="",this.classPrefix=a.classPrefix,t.walk(this)}addText(t){this.buffer+=Oe(t)}openNode(t){if(!Ee(t))return;const a=so(t.scope,{prefix:this.classPrefix});this.span(a)}closeNode(t){Ee(t)&&(this.buffer+=io)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const Ae=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class xe{constructor(){this.rootNode=Ae(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const a=Ae({scope:t});this.add(a),this.stack.push(a)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,a){return typeof a=="string"?t.addText(a):a.children&&(t.openNode(a),a.children.forEach(r=>this._walk(t,r)),t.closeNode(a)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(a=>typeof a=="string")?t.children=[t.children.join("")]:t.children.forEach(a=>{xe._collapse(a)}))}}class lo extends xe{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,a){const r=t.root;a&&(r.scope=`language:${a}`),this.add(r)}toHTML(){return new ro(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Z(e){return e?typeof e=="string"?e:e.source:null}function ze(e){return H("(?=",e,")")}function co(e){return H("(?:",e,")*")}function po(e){return H("(?:",e,")?")}function H(...e){return e.map(a=>Z(a)).join("")}function uo(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function _e(...e){return"("+(uo(e).capture?"":"?:")+e.map(r=>Z(r)).join("|")+")"}function He(e){return new RegExp(e.toString()+"|").exec("").length-1}function mo(e,t){const a=e&&e.exec(t);return a&&a.index===0}const go=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function be(e,{joinWith:t}){let a=0;return e.map(r=>{a+=1;const f=a;let h=Z(r),s="";for(;h.length>0;){const o=go.exec(h);if(!o){s+=h;break}s+=h.substring(0,o.index),h=h.substring(o.index+o[0].length),o[0][0]==="\\"&&o[1]?s+="\\"+String(Number(o[1])+f):(s+=o[0],o[0]==="("&&a++)}return s}).map(r=>`(${r})`).join(t)}const fo=/\b\B/,We="[a-zA-Z]\\w*",ve="[a-zA-Z_]\\w*",Fe="\\b\\d+(\\.\\d+)?",Ue="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",je="\\b(0b[01]+)",ho="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",xo=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=H(t,/.*\b/,e.binary,/\b.*/)),I({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(a,r)=>{a.index!==0&&r.ignoreMatch()}},e)},X={begin:"\\\\[\\s\\S]",relevance:0},_o={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[X]},bo={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[X]},vo={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},le=function(e,t,a={}){const r=I({scope:"comment",begin:e,end:t,contains:[]},a);r.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const f=_e("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:H(/[ ]+/,"(",f,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),r},Bo=le("//","$"),ko=le("/\\*","\\*/"),yo=le("#","$"),Co={scope:"number",begin:Fe,relevance:0},So={scope:"number",begin:Ue,relevance:0},To={scope:"number",begin:je,relevance:0},wo={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[X,{begin:/\[/,end:/\]/,relevance:0,contains:[X]}]},No={scope:"title",begin:We,relevance:0},Eo={scope:"title",begin:ve,relevance:0},Ao={begin:"\\.\\s*"+ve,relevance:0},Do=function(e){return Object.assign(e,{"on:begin":(t,a)=>{a.data._beginMatch=t[1]},"on:end":(t,a)=>{a.data._beginMatch!==t[1]&&a.ignoreMatch()}})};var se=Object.freeze({__proto__:null,APOS_STRING_MODE:_o,BACKSLASH_ESCAPE:X,BINARY_NUMBER_MODE:To,BINARY_NUMBER_RE:je,COMMENT:le,C_BLOCK_COMMENT_MODE:ko,C_LINE_COMMENT_MODE:Bo,C_NUMBER_MODE:So,C_NUMBER_RE:Ue,END_SAME_AS_BEGIN:Do,HASH_COMMENT_MODE:yo,IDENT_RE:We,MATCH_NOTHING_RE:fo,METHOD_GUARD:Ao,NUMBER_MODE:Co,NUMBER_RE:Fe,PHRASAL_WORDS_MODE:vo,QUOTE_STRING_MODE:bo,REGEXP_MODE:wo,RE_STARTERS_RE:ho,SHEBANG:xo,TITLE_MODE:No,UNDERSCORE_IDENT_RE:ve,UNDERSCORE_TITLE_MODE:Eo});function Ro(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function Lo(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function Io(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Ro,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Mo(e,t){Array.isArray(e.illegal)&&(e.illegal=_e(...e.illegal))}function Po(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Oo(e,t){e.relevance===void 0&&(e.relevance=1)}const zo=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const a=Object.assign({},e);Object.keys(e).forEach(r=>{delete e[r]}),e.keywords=a.keywords,e.begin=H(a.beforeMatch,ze(a.begin)),e.starts={relevance:0,contains:[Object.assign(a,{endsParent:!0})]},e.relevance=0,delete a.beforeMatch},Ho=["of","and","for","in","not","or","if","then","parent","list","value"],Wo="keyword";function Ge(e,t,a=Wo){const r=Object.create(null);return typeof e=="string"?f(a,e.split(" ")):Array.isArray(e)?f(a,e):Object.keys(e).forEach(function(h){Object.assign(r,Ge(e[h],t,h))}),r;function f(h,s){t&&(s=s.map(o=>o.toLowerCase())),s.forEach(function(o){const p=o.split("|");r[p[0]]=[h,Fo(p[0],p[1])]})}}function Fo(e,t){return t?Number(t):Uo(e)?0:1}function Uo(e){return Ho.includes(e.toLowerCase())}const De={},z=e=>{console.error(e)},Re=(e,...t)=>{console.log(`WARN: ${e}`,...t)},j=(e,t)=>{De[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),De[`${e}/${t}`]=!0)},re=new Error;function Ve(e,t,{key:a}){let r=0;const f=e[a],h={},s={};for(let o=1;o<=t.length;o++)s[o+r]=f[o],h[o+r]=!0,r+=He(t[o-1]);e[a]=s,e[a]._emit=h,e[a]._multi=!0}function jo(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw z("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),re;if(typeof e.beginScope!="object"||e.beginScope===null)throw z("beginScope must be object"),re;Ve(e,e.begin,{key:"beginScope"}),e.begin=be(e.begin,{joinWith:""})}}function Go(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw z("skip, excludeEnd, returnEnd not compatible with endScope: {}"),re;if(typeof e.endScope!="object"||e.endScope===null)throw z("endScope must be object"),re;Ve(e,e.end,{key:"endScope"}),e.end=be(e.end,{joinWith:""})}}function Vo(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function $o(e){Vo(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),jo(e),Go(e)}function Ko(e){function t(s,o){return new RegExp(Z(s),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(o?"g":""))}class a{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(o,p){p.position=this.position++,this.matchIndexes[this.matchAt]=p,this.regexes.push([p,o]),this.matchAt+=He(o)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const o=this.regexes.map(p=>p[1]);this.matcherRe=t(be(o,{joinWith:"|"}),!0),this.lastIndex=0}exec(o){this.matcherRe.lastIndex=this.lastIndex;const p=this.matcherRe.exec(o);if(!p)return null;const x=p.findIndex((w,E)=>E>0&&w!==void 0),b=this.matchIndexes[x];return p.splice(0,x),Object.assign(p,b)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(o){if(this.multiRegexes[o])return this.multiRegexes[o];const p=new a;return this.rules.slice(o).forEach(([x,b])=>p.addRule(x,b)),p.compile(),this.multiRegexes[o]=p,p}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(o,p){this.rules.push([o,p]),p.type==="begin"&&this.count++}exec(o){const p=this.getMatcher(this.regexIndex);p.lastIndex=this.lastIndex;let x=p.exec(o);if(this.resumingScanAtSamePosition()&&!(x&&x.index===this.lastIndex)){const b=this.getMatcher(0);b.lastIndex=this.lastIndex+1,x=b.exec(o)}return x&&(this.regexIndex+=x.position+1,this.regexIndex===this.count&&this.considerAll()),x}}function f(s){const o=new r;return s.contains.forEach(p=>o.addRule(p.begin,{rule:p,type:"begin"})),s.terminatorEnd&&o.addRule(s.terminatorEnd,{type:"end"}),s.illegal&&o.addRule(s.illegal,{type:"illegal"}),o}function h(s,o){const p=s;if(s.isCompiled)return p;[Lo,Po,$o,zo].forEach(b=>b(s,o)),e.compilerExtensions.forEach(b=>b(s,o)),s.__beforeBegin=null,[Io,Mo,Oo].forEach(b=>b(s,o)),s.isCompiled=!0;let x=null;return typeof s.keywords=="object"&&s.keywords.$pattern&&(s.keywords=Object.assign({},s.keywords),x=s.keywords.$pattern,delete s.keywords.$pattern),x=x||/\w+/,s.keywords&&(s.keywords=Ge(s.keywords,e.case_insensitive)),p.keywordPatternRe=t(x,!0),o&&(s.begin||(s.begin=/\B|\b/),p.beginRe=t(p.begin),!s.end&&!s.endsWithParent&&(s.end=/\B|\b/),s.end&&(p.endRe=t(p.end)),p.terminatorEnd=Z(p.end)||"",s.endsWithParent&&o.terminatorEnd&&(p.terminatorEnd+=(s.end?"|":"")+o.terminatorEnd)),s.illegal&&(p.illegalRe=t(s.illegal)),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map(function(b){return Zo(b==="self"?s:b)})),s.contains.forEach(function(b){h(b,p)}),s.starts&&h(s.starts,o),p.matcher=f(p),p}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=I(e.classNameAliases||{}),h(e)}function $e(e){return e?e.endsWithParent||$e(e.starts):!1}function Zo(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return I(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:$e(e)?I(e,{starts:e.starts?I(e.starts):null}):Object.isFrozen(e)?I(e):e}var Xo="11.9.0";class qo extends Error{constructor(t,a){super(t),this.name="HTMLInjectionError",this.html=a}}const he=Oe,Le=I,Ie=Symbol("nomatch"),Jo=7,Ke=function(e){const t=Object.create(null),a=Object.create(null),r=[];let f=!0;const h="Could not find the language '{}', did you forget to load/include a language module?",s={disableAutodetect:!0,name:"Plain text",contains:[]};let o={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:lo};function p(n){return o.noHighlightRe.test(n)}function x(n){let l=n.className+" ";l+=n.parentNode?n.parentNode.className:"";const u=o.languageDetectRe.exec(l);if(u){const g=A(u[1]);return g||(Re(h.replace("{}",u[1])),Re("Falling back to no-highlight mode for this block.",n)),g?u[1]:"no-highlight"}return l.split(/\s+/).find(g=>p(g)||A(g))}function b(n,l,u){let g="",B="";typeof l=="object"?(g=n,u=l.ignoreIllegals,B=l.language):(j("10.7.0","highlight(lang, code, ...args) has been deprecated."),j("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),B=n,g=l),u===void 0&&(u=!0);const C={code:g,language:B};U("before:highlight",C);const N=C.result?C.result:w(C.language,C.code,u);return N.code=C.code,U("after:highlight",N),N}function w(n,l,u,g){const B=Object.create(null);function C(i,c){return i.keywords[c]}function N(){if(!d.keywords){k.addText(v);return}let i=0;d.keywordPatternRe.lastIndex=0;let c=d.keywordPatternRe.exec(v),m="";for(;c;){m+=v.substring(i,c.index);const _=R.case_insensitive?c[0].toLowerCase():c[0],y=C(d,_);if(y){const[L,nt]=y;if(k.addText(m),m="",B[_]=(B[_]||0)+1,B[_]<=Jo&&(oe+=nt),L.startsWith("_"))m+=c[0];else{const at=R.classNameAliases[L]||L;D(c[0],at)}}else m+=c[0];i=d.keywordPatternRe.lastIndex,c=d.keywordPatternRe.exec(v)}m+=v.substring(i),k.addText(m)}function ne(){if(v==="")return;let i=null;if(typeof d.subLanguage=="string"){if(!t[d.subLanguage]){k.addText(v);return}i=w(d.subLanguage,v,!0,we[d.subLanguage]),we[d.subLanguage]=i._top}else i=W(v,d.subLanguage.length?d.subLanguage:null);d.relevance>0&&(oe+=i.relevance),k.__addSublanguage(i._emitter,i.language)}function S(){d.subLanguage!=null?ne():N(),v=""}function D(i,c){i!==""&&(k.startScope(c),k.addText(i),k.endScope())}function ye(i,c){let m=1;const _=c.length-1;for(;m<=_;){if(!i._emit[m]){m++;continue}const y=R.classNameAliases[i[m]]||i[m],L=c[m];y?D(L,y):(v=L,N(),v=""),m++}}function Ce(i,c){return i.scope&&typeof i.scope=="string"&&k.openNode(R.classNameAliases[i.scope]||i.scope),i.beginScope&&(i.beginScope._wrap?(D(v,R.classNameAliases[i.beginScope._wrap]||i.beginScope._wrap),v=""):i.beginScope._multi&&(ye(i.beginScope,c),v="")),d=Object.create(i,{parent:{value:d}}),d}function Se(i,c,m){let _=mo(i.endRe,m);if(_){if(i["on:end"]){const y=new Ne(i);i["on:end"](c,y),y.isMatchIgnored&&(_=!1)}if(_){for(;i.endsParent&&i.parent;)i=i.parent;return i}}if(i.endsWithParent)return Se(i.parent,c,m)}function Je(i){return d.matcher.regexIndex===0?(v+=i[0],1):(fe=!0,0)}function Ye(i){const c=i[0],m=i.rule,_=new Ne(m),y=[m.__beforeBegin,m["on:begin"]];for(const L of y)if(L&&(L(i,_),_.isMatchIgnored))return Je(c);return m.skip?v+=c:(m.excludeBegin&&(v+=c),S(),!m.returnBegin&&!m.excludeBegin&&(v=c)),Ce(m,i),m.returnBegin?0:c.length}function Qe(i){const c=i[0],m=l.substring(i.index),_=Se(d,i,m);if(!_)return Ie;const y=d;d.endScope&&d.endScope._wrap?(S(),D(c,d.endScope._wrap)):d.endScope&&d.endScope._multi?(S(),ye(d.endScope,i)):y.skip?v+=c:(y.returnEnd||y.excludeEnd||(v+=c),S(),y.excludeEnd&&(v=c));do d.scope&&k.closeNode(),!d.skip&&!d.subLanguage&&(oe+=d.relevance),d=d.parent;while(d!==_.parent);return _.starts&&Ce(_.starts,i),y.returnEnd?0:c.length}function et(){const i=[];for(let c=d;c!==R;c=c.parent)c.scope&&i.unshift(c.scope);i.forEach(c=>k.openNode(c))}let ae={};function Te(i,c){const m=c&&c[0];if(v+=i,m==null)return S(),0;if(ae.type==="begin"&&c.type==="end"&&ae.index===c.index&&m===""){if(v+=l.slice(c.index,c.index+1),!f){const _=new Error(`0 width match regex (${n})`);throw _.languageName=n,_.badRule=ae.rule,_}return 1}if(ae=c,c.type==="begin")return Ye(c);if(c.type==="illegal"&&!u){const _=new Error('Illegal lexeme "'+m+'" for mode "'+(d.scope||"<unnamed>")+'"');throw _.mode=d,_}else if(c.type==="end"){const _=Qe(c);if(_!==Ie)return _}if(c.type==="illegal"&&m==="")return 1;if(ge>1e5&&ge>c.index*3)throw new Error("potential infinite loop, way more iterations than matches");return v+=m,m.length}const R=A(n);if(!R)throw z(h.replace("{}",n)),new Error('Unknown language: "'+n+'"');const tt=Ko(R);let me="",d=g||tt;const we={},k=new o.__emitter(o);et();let v="",oe=0,O=0,ge=0,fe=!1;try{if(R.__emitTokens)R.__emitTokens(l,k);else{for(d.matcher.considerAll();;){ge++,fe?fe=!1:d.matcher.considerAll(),d.matcher.lastIndex=O;const i=d.matcher.exec(l);if(!i)break;const c=l.substring(O,i.index),m=Te(c,i);O=i.index+m}Te(l.substring(O))}return k.finalize(),me=k.toHTML(),{language:n,value:me,relevance:oe,illegal:!1,_emitter:k,_top:d}}catch(i){if(i.message&&i.message.includes("Illegal"))return{language:n,value:he(l),illegal:!0,relevance:0,_illegalBy:{message:i.message,index:O,context:l.slice(O-100,O+100),mode:i.mode,resultSoFar:me},_emitter:k};if(f)return{language:n,value:he(l),illegal:!1,relevance:0,errorRaised:i,_emitter:k,_top:d};throw i}}function E(n){const l={value:he(n),illegal:!1,relevance:0,_top:s,_emitter:new o.__emitter(o)};return l._emitter.addText(n),l}function W(n,l){l=l||o.languages||Object.keys(t);const u=E(n),g=l.filter(A).filter(ee).map(S=>w(S,n,!1));g.unshift(u);const B=g.sort((S,D)=>{if(S.relevance!==D.relevance)return D.relevance-S.relevance;if(S.language&&D.language){if(A(S.language).supersetOf===D.language)return 1;if(A(D.language).supersetOf===S.language)return-1}return 0}),[C,N]=B,ne=C;return ne.secondBest=N,ne}function q(n,l,u){const g=l&&a[l]||u;n.classList.add("hljs"),n.classList.add(`language-${g}`)}function F(n){let l=null;const u=x(n);if(p(u))return;if(U("before:highlightElement",{el:n,language:u}),n.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",n);return}if(n.children.length>0&&(o.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(n)),o.throwUnescapedHTML))throw new qo("One of your code blocks includes unescaped HTML.",n.innerHTML);l=n;const g=l.textContent,B=u?b(g,{language:u,ignoreIllegals:!0}):W(g);n.innerHTML=B.value,n.dataset.highlighted="yes",q(n,u,B.language),n.result={language:B.language,re:B.relevance,relevance:B.relevance},B.secondBest&&(n.secondBest={language:B.secondBest.language,relevance:B.secondBest.relevance}),U("after:highlightElement",{el:n,result:B,text:g})}function J(n){o=Le(o,n)}const ke=()=>{M(),j("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function V(){M(),j("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let $=!1;function M(){if(document.readyState==="loading"){$=!0;return}document.querySelectorAll(o.cssSelector).forEach(F)}function K(){$&&M()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",K,!1);function P(n,l){let u=null;try{u=l(e)}catch(g){if(z("Language definition for '{}' could not be registered.".replace("{}",n)),f)z(g);else throw g;u=s}u.name||(u.name=n),t[n]=u,u.rawDefinition=l.bind(null,e),u.aliases&&Q(u.aliases,{languageName:n})}function ce(n){delete t[n];for(const l of Object.keys(a))a[l]===n&&delete a[l]}function Y(){return Object.keys(t)}function A(n){return n=(n||"").toLowerCase(),t[n]||t[a[n]]}function Q(n,{languageName:l}){typeof n=="string"&&(n=[n]),n.forEach(u=>{a[u.toLowerCase()]=l})}function ee(n){const l=A(n);return l&&!l.disableAutodetect}function pe(n){n["before:highlightBlock"]&&!n["before:highlightElement"]&&(n["before:highlightElement"]=l=>{n["before:highlightBlock"](Object.assign({block:l.el},l))}),n["after:highlightBlock"]&&!n["after:highlightElement"]&&(n["after:highlightElement"]=l=>{n["after:highlightBlock"](Object.assign({block:l.el},l))})}function de(n){pe(n),r.push(n)}function ue(n){const l=r.indexOf(n);l!==-1&&r.splice(l,1)}function U(n,l){const u=n;r.forEach(function(g){g[u]&&g[u](l)})}function te(n){return j("10.7.0","highlightBlock will be removed entirely in v12.0"),j("10.7.0","Please use highlightElement now."),F(n)}Object.assign(e,{highlight:b,highlightAuto:W,highlightAll:M,highlightElement:F,highlightBlock:te,configure:J,initHighlighting:ke,initHighlightingOnLoad:V,registerLanguage:P,unregisterLanguage:ce,listLanguages:Y,getLanguage:A,registerAliases:Q,autoDetection:ee,inherit:Le,addPlugin:de,removePlugin:ue}),e.debugMode=function(){f=!1},e.safeMode=function(){f=!0},e.versionString=Xo,e.regex={concat:H,lookahead:ze,either:_e,optional:po,anyNumberOfTimes:co};for(const n in se)typeof se[n]=="object"&&Pe(se[n]);return Object.assign(e,se),e},G=Ke({});G.newInstance=()=>Ke({});var Yo=G;G.HighlightJS=G;G.default=G;const Be=ot(Yo);function Qo(e){const t=e.regex,a=t.concat(/[\p{L}_]/u,t.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),r=/[\p{L}0-9._:-]+/u,f={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},h={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},s=e.inherit(h,{begin:/\(/,end:/\)/}),o=e.inherit(e.APOS_STRING_MODE,{className:"string"}),p=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),x={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:r,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[f]},{begin:/'/,end:/'/,contains:[f]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[h,p,o,s,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[h,s,p,o]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},f,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[p]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[x],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[x],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:t.concat(/</,t.lookahead(t.concat(a,t.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:a,relevance:0,starts:x}]},{className:"tag",begin:t.concat(/<\//,t.lookahead(t.concat(a,/>/))),contains:[{className:"name",begin:a,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Me="[A-Za-z$_][0-9A-Za-z$_]*",ei=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],ti=["true","false","null","undefined","NaN","Infinity"],Ze=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Xe=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],qe=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],ni=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],ai=[].concat(qe,Ze,Xe);function oi(e){const t=e.regex,a=(l,{after:u})=>{const g="</"+l[0].slice(1);return l.input.indexOf(g,u)!==-1},r=Me,f={begin:"<>",end:"</>"},h=/<[A-Za-z0-9\\._:-]+\s*\/>/,s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(l,u)=>{const g=l[0].length+l.index,B=l.input[g];if(B==="<"||B===","){u.ignoreMatch();return}B===">"&&(a(l,{after:g})||u.ignoreMatch());let C;const N=l.input.substring(g);if(C=N.match(/^\s*=/)){u.ignoreMatch();return}if((C=N.match(/^\s+extends\s+/))&&C.index===0){u.ignoreMatch();return}}},o={$pattern:Me,keyword:ei,literal:ti,built_in:ai,"variable.language":ni},p="[0-9](_?[0-9])*",x=`\\.(${p})`,b="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",w={className:"number",variants:[{begin:`(\\b(${b})((${x})|\\.)?|(${x}))[eE][+-]?(${p})\\b`},{begin:`\\b(${b})\\b((${x})\\b|\\.)?|(${x})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},E={className:"subst",begin:"\\$\\{",end:"\\}",keywords:o,contains:[]},W={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,E],subLanguage:"xml"}},q={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,E],subLanguage:"css"}},F={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,E],subLanguage:"graphql"}},J={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,E]},V={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:r+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},$=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,W,q,F,J,{match:/\$\d+/},w];E.contains=$.concat({begin:/\{/,end:/\}/,keywords:o,contains:["self"].concat($)});const M=[].concat(V,E.contains),K=M.concat([{begin:/\(/,end:/\)/,keywords:o,contains:["self"].concat(M)}]),P={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:K},ce={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,t.concat(r,"(",t.concat(/\./,r),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,r],scope:{1:"keyword",3:"title.class"}}]},Y={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Ze,...Xe]}},A={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Q={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[P],illegal:/%/},ee={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function pe(l){return t.concat("(?!",l.join("|"),")")}const de={match:t.concat(/\b/,pe([...qe,"super","import"]),r,t.lookahead(/\(/)),className:"title.function",relevance:0},ue={begin:t.concat(/\./,t.lookahead(t.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},U={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},P]},te="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",n={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(te)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[P]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:o,exports:{PARAMS_CONTAINS:K,CLASS_REFERENCE:Y},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),A,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,W,q,F,J,V,{match:/\$\d+/},w,Y,{className:"attr",begin:r+t.lookahead(":"),relevance:0},n,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[V,e.REGEXP_MODE,{className:"function",begin:te,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:K}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:f.begin,end:f.end},{match:h},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}]},Q,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[P,e.inherit(e.TITLE_MODE,{begin:r,className:"title.function"})]},{match:/\.\.\./,relevance:0},ue,{match:"\\$"+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[P]},de,ee,ce,U,{match:/\$[(.]/}]}}Be.registerLanguage("xml",Qo);Be.registerLanguage("javascript",oi);function si({language:e="javascript",name:t,children:a}){const r=ie.useRef(null),[f,h]=ie.useState(!1),[s,o]=ie.useState(""),p=Object.assign({"../../../packages/Affix/_example/AffixBasic.tsx":it,"../../../packages/Affix/_example/AffixPosition.tsx":st,"../../../packages/Affix/_example/AffixTarget.tsx":rt,"../../../packages/Alert/_example/AlertBasic.tsx":lt,"../../../packages/Alert/_example/AlertCenter.tsx":ct,"../../../packages/Alert/_example/AlertClose.tsx":pt,"../../../packages/Alert/_example/AlertDescription.tsx":dt,"../../../packages/Alert/_example/AlertEffect.tsx":ut,"../../../packages/Alert/_example/AlertIconDescription.tsx":mt,"../../../packages/Alert/_example/AlertShowIcon.tsx":gt,"../../../packages/Avatar/_example/AvatarBasic.tsx":ft,"../../../packages/Avatar/_example/AvatarError.tsx":ht,"../../../packages/Avatar/_example/AvatarFit.tsx":xt,"../../../packages/Avatar/_example/AvatarType.tsx":_t,"../../../packages/Backtop/_example/BacktopBasic.tsx":bt,"../../../packages/Backtop/_example/BacktopContent.tsx":vt,"../../../packages/Backtop/_example/BacktopTarget.tsx":Bt,"../../../packages/Badge/_example/BadgeBasic.tsx":kt,"../../../packages/Badge/_example/BadgeIsDot.tsx":yt,"../../../packages/Badge/_example/BadgeMax.tsx":Ct,"../../../packages/Badge/_example/BadgeValue.tsx":St,"../../../packages/Breadcrumb/_example/BreadcrumbBasic.tsx":Tt,"../../../packages/Breadcrumb/_example/BreadcrumbSeparator.tsx":wt,"../../../packages/Button/_example/ButtonBasic.tsx":Nt,"../../../packages/Button/_example/ButtonDisabled.tsx":Et,"../../../packages/Button/_example/ButtonLink.tsx":At,"../../../packages/Button/_example/ButtonText.tsx":Dt,"../../../packages/Card/_example/CardBasic.tsx":Rt,"../../../packages/Card/_example/CardBodyStyle.tsx":Lt,"../../../packages/Card/_example/CardShadow.tsx":It,"../../../packages/Card/_example/CardSimple.tsx":Mt,"../../../packages/Checkbox/_example/CheckboxBasic.tsx":Pt,"../../../packages/Checkbox/_example/CheckboxDisabled.tsx":Ot,"../../../packages/Checkbox/_example/CheckboxGroupBasic.tsx":zt,"../../../packages/Collapse/_example/CollapseBasic.tsx":Ht,"../../../packages/ColorPicker/_example/ColorPickerBasic.tsx":Wt,"../../../packages/Container/_example/ContainerBasic.tsx":Ft,"../../../packages/Container/_example/ContainerBasic1.tsx":Ut,"../../../packages/Container/_example/ContainerBasic2.tsx":jt,"../../../packages/Container/_example/ContainerBasic3.tsx":Gt,"../../../packages/Container/_example/ContainerBasic4.tsx":Vt,"../../../packages/Container/_example/ContainerBasic5.tsx":$t,"../../../packages/Container/_example/ContainerBasic6.tsx":Kt,"../../../packages/Descriptions/_example/DescriptionsBasic.tsx":Zt,"../../../packages/Descriptions/_example/DescriptionsDirection.tsx":Xt,"../../../packages/Descriptions/_example/DescriptionsSize.tsx":qt,"../../../packages/Descriptions/_example/DescriptionsStyle.tsx":Jt,"../../../packages/Dialog/_example/DialogBasic.tsx":Yt,"../../../packages/Dialog/_example/DialogContent.tsx":Qt,"../../../packages/Dialog/_example/DialogHeader.tsx":en,"../../../packages/Divider/_example/DividerBasic.tsx":tn,"../../../packages/Divider/_example/DividerBorder.tsx":nn,"../../../packages/Divider/_example/DividerContent.tsx":an,"../../../packages/Divider/_example/DividerDirection.tsx":on,"../../../packages/Drawer/_example/DrawerBasic.tsx":sn,"../../../packages/Drawer/_example/DrawerContent.tsx":rn,"../../../packages/Drawer/_example/DrawerHeader.tsx":ln,"../../../packages/Drawer/_example/DrawerHeader2.tsx":cn,"../../../packages/Empty/_example/EmptyBasic.tsx":pn,"../../../packages/Empty/_example/EmptyContent.tsx":dn,"../../../packages/Empty/_example/EmptyImage.tsx":un,"../../../packages/Empty/_example/EmptyImageSize.tsx":mn,"../../../packages/Icon/_example/IconBasic.tsx":gn,"../../../packages/Input/_example/InputBasic.tsx":fn,"../../../packages/Input/_example/InputClearable.tsx":hn,"../../../packages/Input/_example/InputDisabled.tsx":xn,"../../../packages/Input/_example/InputSize.tsx":_n,"../../../packages/Layout/_example/LayoutBasic.tsx":bn,"../../../packages/Layout/_example/LayoutBootstrap.tsx":vn,"../../../packages/Layout/_example/LayoutGutter.tsx":Bn,"../../../packages/Layout/_example/LayoutJustify.tsx":kn,"../../../packages/Layout/_example/LayoutMix.tsx":yn,"../../../packages/Layout/_example/LayoutOffset.tsx":Cn,"../../../packages/Link/_example/LinkBasic.tsx":Sn,"../../../packages/Link/_example/LinkDisabled.tsx":Tn,"../../../packages/Link/_example/LinkIcon.tsx":wn,"../../../packages/Link/_example/LinkUnderline.tsx":Nn,"../../../packages/Loading/_example/LoadingBasic.tsx":En,"../../../packages/Loading/_example/LoadingService.tsx":An,"../../../packages/Loading/_example/LoadingText.tsx":Dn,"../../../packages/Message/_example/MessageBasic.tsx":Rn,"../../../packages/Message/_example/MessageCenter.tsx":Ln,"../../../packages/Message/_example/MessagePlain.tsx":In,"../../../packages/Message/_example/MessageShowClose.tsx":Mn,"../../../packages/Message/_example/MessageType.tsx":Pn,"../../../packages/MessageBox/_example/MessageBoxBasic.tsx":On,"../../../packages/MessageBox/_example/MessageBoxConfirm.tsx":zn,"../../../packages/MessageBox/_example/MessageBoxMessage.tsx":Hn,"../../../packages/Notification/_example/NotificationBasic.tsx":Wn,"../../../packages/Notification/_example/NotificationPosition.tsx":Fn,"../../../packages/Notification/_example/NotificationShowClose.tsx":Un,"../../../packages/Notification/_example/NotificationType.tsx":jn,"../../../packages/PageHeader/_example/PageHeaderAll.tsx":Gn,"../../../packages/PageHeader/_example/PageHeaderBasic.tsx":Vn,"../../../packages/PageHeader/_example/PageHeaderBreadcrumb.tsx":$n,"../../../packages/PageHeader/_example/PageHeaderContent.tsx":Kn,"../../../packages/PageHeader/_example/PageHeaderExtra.tsx":Zn,"../../../packages/PageHeader/_example/PageHeaderIcon.tsx":Xn,"../../../packages/PageHeader/_example/PageHeaderNoIcon.tsx":qn,"../../../packages/Popconfirm/_example/PopconfirmBasic.tsx":Jn,"../../../packages/Popconfirm/_example/PopconfirmEvent.tsx":Yn,"../../../packages/Popconfirm/_example/PopconfirmIcon.tsx":Qn,"../../../packages/Popover/_example/PopoverBasic.tsx":ea,"../../../packages/Progress/_example/ProgressBasic.tsx":ta,"../../../packages/Progress/_example/ProgressTextInside.tsx":na,"../../../packages/Rate/_example/RateBasic.tsx":aa,"../../../packages/Result/_example/ResultBasic.tsx":oa,"../../../packages/Result/_example/ResultIcon.tsx":ia,"../../../packages/Scrollbar/_example/ScrollbarBasic.tsx":sa,"../../../packages/Segmented/_example/SegmentedBasic.tsx":ra,"../../../packages/Segmented/_example/SegmentedBlock.tsx":la,"../../../packages/Segmented/_example/SegmentedColor.tsx":ca,"../../../packages/Segmented/_example/SegmentedDisabled.tsx":pa,"../../../packages/Segmented/_example/SegmentedReactNode.tsx":da,"../../../packages/Select/_example/SelectBasic.tsx":ua,"../../../packages/Skeleton/_example/SkeletonAnimated.tsx":ma,"../../../packages/Skeleton/_example/SkeletonBasic.tsx":ga,"../../../packages/Skeleton/_example/SkeletonCount.tsx":fa,"../../../packages/Skeleton/_example/SkeletonLoading.tsx":ha,"../../../packages/Skeleton/_example/SkeletonRows.tsx":xa,"../../../packages/Skeleton/_example/SkeletonThrottle.tsx":_a,"../../../packages/Skeleton/_example/SkeletonVariant.tsx":ba,"../../../packages/Space/_example/SpaceAlignment.tsx":va,"../../../packages/Space/_example/SpaceBasic.tsx":Ba,"../../../packages/Space/_example/SpaceDirection.tsx":ka,"../../../packages/Space/_example/SpaceSize.tsx":ya,"../../../packages/Space/_example/SpaceSize2.tsx":Ca,"../../../packages/Space/_example/SpaceSpacer.tsx":Sa,"../../../packages/Space/_example/SpaceSpacer2.tsx":Ta,"../../../packages/Space/_example/SpaceWrap.tsx":wa,"../../../packages/Switch/_example/SwitchActionIcon.tsx":Na,"../../../packages/Switch/_example/SwitchBasic.tsx":Ea,"../../../packages/Switch/_example/SwitchBeforeChange.tsx":Aa,"../../../packages/Switch/_example/SwitchDisabled.tsx":Da,"../../../packages/Switch/_example/SwitchIcon.tsx":Ra,"../../../packages/Switch/_example/SwitchLoading.tsx":La,"../../../packages/Switch/_example/SwitchSize.tsx":Ia,"../../../packages/Switch/_example/SwitchText.tsx":Ma,"../../../packages/Table/_example/TableBasic.tsx":Pa,"../../../packages/Table/_example/TableBorder.tsx":Oa,"../../../packages/Table/_example/TableStripe.tsx":za,"../../../packages/Tag/_example/TagBasic.tsx":Ha,"../../../packages/Tag/_example/TagClosable.tsx":Wa,"../../../packages/Tag/_example/TagEffect.tsx":Fa,"../../../packages/Tag/_example/TagRound.tsx":Ua,"../../../packages/Tag/_example/TagSize.tsx":ja,"../../../packages/Text/_example/TextBasic.tsx":Ga,"../../../packages/Text/_example/TextSize.tsx":Va,"../../../packages/Text/_example/TextTruncated.tsx":$a,"../../../packages/TimeSelect/_example/TimeSelectBasic.tsx":Ka,"../../../packages/Timeline/_example/TimelineBasic.tsx":Za,"../../../packages/Timeline/_example/TimelineCenter.tsx":Xa,"../../../packages/Timeline/_example/TimelineNode.tsx":qa,"../../../packages/Timeline/_example/TimelinePlacement.tsx":Ja,"../../../packages/Tooltip/_example/TooltipBasic.tsx":Ya,"../../../packages/Tooltip/_example/TooltipContent.tsx":Qa,"../../../packages/Tooltip/_example/TooltipDisabled.tsx":eo,"../../../packages/Tooltip/_example/TooltipEffect.tsx":to,"../../../packages/Watermark/_example/WatermarkBasic.tsx":no,"../../../packages/Watermark/_example/WatermarkContent.tsx":ao,"../../../packages/Watermark/_example/WatermarkImage.tsx":oo});let x={display:f?"":"none"};ie.useEffect(()=>{r.current&&(Object.keys(p).forEach(w=>{w.indexOf(t)!==-1&&o(p[w])}),setTimeout(()=>{Be.highlightElement(r.current)},0))},[t]);function b(){h(!f)}return T.jsx(T.Fragment,{children:T.jsxs("div",{className:"code-block",children:[T.jsx("div",{className:"code-block-component",children:a}),T.jsx("div",{className:"op-btns",children:T.jsx("button",{onClick:b,className:"reset-btn el-icon op-btn el-tooltip__trigger el-tooltip__trigger",children:T.jsx("i",{className:"el-icon",style:{fontSize:"16px"},children:T.jsx("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em","data-v-5d9e4641":"",children:T.jsx("path",{fill:"currentColor",d:"m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"})})})})}),T.jsx("div",{className:"code-block-wrapper",style:x,children:T.jsx("div",{className:"code-block-pre language-react",children:T.jsx("pre",{children:T.jsx("code",{id:e,ref:r,className:e,children:s})})})})]})})}export{si as C};
