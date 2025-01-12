import{a9 as ot,r as ie,j as N}from"./index-BoH_1I5s.js";const it=`import { Affix, Button } from 'pelement-react'

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

export default AlertClose`,mt=`import { Alert } from 'pelement-react'

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

export default AlertDescription`,dt=`import { Alert } from 'pelement-react'

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

export default AlertEffect`,ut=`import { Alert } from 'pelement-react'

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

export default BacktopTarget`,yt=`import { Badge, Button } from 'pelement-react'
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

export default BadgeBasic`,Ct=`import { Badge, Button, Share } from 'pelement-react'

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

export default BadgeIsDot`,kt=`import { Badge, Button } from 'pelement-react'

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

export default BadgeValue`,Nt=`import { Breadcrumb } from 'pelement-react'

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

export default BreadcrumbSeparator`,Tt=`import { Button, Check, Delete, Edit, Message, Search, Star } from 'pelement-react'

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

export default CardBasic`,It=`import { Card } from 'pelement-react'

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

export default CardBodyStyle`,Lt=`import { Card } from 'pelement-react'

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

export default CollapseBasic`,Ft=`import { useState } from 'react'
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

export default ColorPickerBasic`,Wt=`import { Container, Header, Main } from 'pelement-react'
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

export default ContainerBasic`,jt=`import { Container, Footer, Header, Main } from 'pelement-react'

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

export default ContainerBasic1`,Ut=`import { Aside, Container, Main } from 'pelement-react'

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

export default ContainerBasic5`,Zt=`import { Aside, Container, Footer, Header, Main } from 'pelement-react'

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

export default ContainerBasic6`,Kt=`import { Descriptions, Tag } from 'pelement-react'

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

export default DescriptionsSize`,Yt=`import { Descriptions, Tag } from 'pelement-react'
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

export default DescriptionsStyle`,Jt=`import { Button, Dialog } from 'pelement-react'
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

export default EmptyBasic`,mn=`import { Button, Empty } from 'pelement-react'

function EmptyContent() {
  return (
    <>
      <Empty>
        <Button type="primary">Button</Button>
      </Empty>
    </>
  )
}

export default EmptyContent`,dn=`import { Empty } from 'pelement-react'

function EmptyImage() {
  return (
    <>
      <Empty
        image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      />
    </>
  )
}

export default EmptyImage`,un=`import { Empty } from 'pelement-react'

function EmptyImageSize() {
  return (
    <>
      <Empty imageSize={200} />
    </>
  )
}

export default EmptyImageSize`,gn=`import { Edit, Search, Check, Message, Star, Delete, View, StarFilled, LoadingIcon, Hide, InfoFilled, WarningFilled, CircleCloseFilled, CircleCheckFilled, ArrowRight, CircleCheck, Close, Share, Picture, ArrowLeft, ZoomOut, ZoomIn, FullScreen, ScaleToOriginal, RefreshLeft, RefreshRight, Male, ChatLineRound, Calendar, Warning, CaretTop, CaretBottom } from 'pelement-react'
import './IconBasic.scss'

function ButtonBasic() {
  return (
    <>
      <ul className="demo-icon-list">
        <li className="icon-item">
          <span className="demo-svg-icon">
            <Edit style={{ fontSize: '20px' }} />
            <span className="icon-name">Edit</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <Search style={{ fontSize: '20px' }} />
            <span className="icon-name">Search</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <Check style={{ fontSize: '20px' }} />
            <span className="icon-name">Check</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <Message style={{ fontSize: '20px' }} />
            <span className="icon-name">Message</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <Star style={{ fontSize: '20px' }} />
            <span className="icon-name">Star</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <Delete style={{ fontSize: '20px' }} />
            <span className="icon-name">Delete</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <View style={{ fontSize: '20px' }} />
            <span className="icon-name">View</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <StarFilled style={{ fontSize: '20px' }} />
            <span className="icon-name">StarFilled</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <LoadingIcon style={{ fontSize: '20px' }} />
            <span className="icon-name">LoadingIcon</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <Hide style={{ fontSize: '20px' }} />
            <span className="icon-name">Hide</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <InfoFilled style={{ fontSize: '20px' }} />
            <span className="icon-name">InfoFilled</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <WarningFilled style={{ fontSize: '20px' }} />
            <span className="icon-name">WarningFilled</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <CircleCloseFilled style={{ fontSize: '20px' }} />
            <span className="icon-name">CircleCloseFilled</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <CircleCheckFilled style={{ fontSize: '20px' }} />
            <span className="icon-name">CircleCheckFilled</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <ArrowRight style={{ fontSize: '20px' }} />
            <span className="icon-name">ArrowRight</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <CircleCheck style={{ fontSize: '20px' }} />
            <span className="icon-name">CircleCheck</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <Close style={{ fontSize: '20px' }} />
            <span className="icon-name">Close</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <Share style={{ fontSize: '20px' }} />
            <span className="icon-name">Share</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <Picture style={{ fontSize: '20px' }} />
            <span className="icon-name">Picture</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <ArrowLeft style={{ fontSize: '20px' }} />
            <span className="icon-name">ArrowLeft</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <ZoomOut style={{ fontSize: '20px' }} />
            <span className="icon-name">ZoomOut</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <ZoomIn style={{ fontSize: '20px' }} />
            <span className="icon-name">ZoomIn</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <FullScreen style={{ fontSize: '20px' }} />
            <span className="icon-name">FullScreen</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <ScaleToOriginal style={{ fontSize: '20px' }} />
            <span className="icon-name">ScaleToOriginal</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <RefreshLeft style={{ fontSize: '20px' }} />
            <span className="icon-name">RefreshLeft</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <RefreshRight style={{ fontSize: '20px' }} />
            <span className="icon-name">RefreshRight</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <Male style={{ fontSize: '20px' }} />
            <span className="icon-name">Male</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <ChatLineRound style={{ fontSize: '20px' }} />
            <span className="icon-name">ChatLineRound</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <Calendar style={{ fontSize: '20px' }} />
            <span className="icon-name">Calendar</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <Warning style={{ fontSize: '20px' }} />
            <span className="icon-name">Warning</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <CaretTop style={{ fontSize: '20px' }} />
            <span className="icon-name">CaretTop</span>
          </span>
        </li>
        <li className="icon-item">
          <span className="demo-svg-icon">
            <CaretBottom style={{ fontSize: '20px' }} />
            <span className="icon-name">CaretBottom</span>
          </span>
        </li>
      </ul>
    </>
  )
}

export default ButtonBasic`,fn=`import { Image, ImageProps } from 'pelement-react'
import './ImageBasic.scss'

function ImageBasic() {
  const fits = [
    'fill',
    'contain',
    'cover',
    'none',
    'scale-down',
  ] as ImageProps['fit'][]
  const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

  return (
    <>
      <div className="demo-basic-image">
        {
          fits.map((fit: any, index: number) =>
            <div key={index} className="block">
              <span className="demonstration">{fit}</span>
              <Image style={{ width: '100px', height: '100px' }} src={url} fit={fit} />
            </div>
          )}
      </div>
    </>
  )
}

export default ImageBasic`,hn=`import { Image, Picture } from 'pelement-react'
import './ImageError.scss'

function ImageError() {
  return (
    <>
      <div className="demo-image__error">
        <div className="block">
          <span className="demonstration">Default</span>
          <Image />
        </div>
        <div className="block">
          <span className="demonstration">Custom</span>
          <Image error={<div className="image-slot">
            <Picture />
          </div>}>
          </Image>
        </div>
      </div>
    </>
  )
}

export default ImageError`,xn=`import { Image } from 'pelement-react'
import './ImageLazy.scss'

function ImageLazy() {
  const urls = [
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
  ]

  return (
    <>
      <div className="demo-image__lazy">
        {urls.map((url: string, index: number) =>
          <Image key={index} src={url} lazy />
        )}
      </div>
    </>
  )
}

export default ImageLazy`,_n=`import { Image } from 'pelement-react'
import './ImagePlaceholder.scss'

function ImagePlaceholder() {
  const src = 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'

  return (
    <>
      <div className="demo-image__placeholder">
        <div className="block">
          <span className="demonstration">Default</span>
          <Image src={src} />
        </div>
        <div className="block">
          <span className="demonstration">Custom</span>
          <Image src={src} placeholder={<div className="image-slot">Loading<span className="dot">...</span></div>} />
        </div>
      </div >
    </>
  )
}

export default ImagePlaceholder`,bn=`import { Image } from 'pelement-react'

function ImagePreviewSrcList() {
  const url = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
  const srcList = [
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
  ]

  return (
    <>
      <div className="demo-image__preview">
        <Image
          style={{ width: '100px', height: '100px' }}
          src={url}
          zoomRate={1.2}
          maxScale={7}
          minScale={0.2}
          previewSrcList={srcList}
          initialIndex={4}
          fit="cover"
        />
      </div>
    </>
  )
}

export default ImagePreviewSrcList`,vn=`import { useState } from 'react'
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

export default InputBasic`,Bn=`import { useState } from 'react'
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

export default InputClearable`,yn=`import { useState } from 'react'
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

export default InputDisabled`,Cn=`import { useState } from 'react'
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

export default InputSize`,kn=`import { Col, Row } from 'pelement-react'
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

export default LayoutBasic`,Sn=`import { Col, Row } from 'pelement-react'

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

export default LayoutBootstrap`,Nn=`import { Col, Row } from 'pelement-react'

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

export default LayoutGutter`,wn=`import { Col, Row } from 'pelement-react'

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

export default LayoutJustify`,Tn=`import { Col, Row } from 'pelement-react'

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

export default LayoutMix`,En=`import { Col, Row } from 'pelement-react'

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

export default LayoutOffset`,An=`import { Link } from 'pelement-react'
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

export default LinkBasic`,Dn=`import { Link } from 'pelement-react'

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

export default LinkDisabled`,Rn=`import { Edit, Link, View } from 'pelement-react'

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

export default LinkIcon`,In=`import { Link } from 'pelement-react'

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

export default LinkUnderline`,Ln=`import { Loading } from 'pelement-react'

function LoadingBasic() {
  return (
    <>
      <Loading>
        <div style={{ height: '200px' }}></div>
      </Loading>
    </>
  )
}

export default LoadingBasic`,Mn=`import { Button, loading } from 'pelement-react'

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

export default LoadingService`,Pn=`import { useState } from 'react'
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

export default LoadingText`,On=`import { Button, message } from 'pelement-react'

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

export default MessageBasic`,zn=`import { Button, message } from 'pelement-react'

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

export default MessageCenter`,Hn=`import { Button, message } from 'pelement-react'

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

export default MessagePlain`,Fn=`import { Button, message } from 'pelement-react'

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

export default MessageShowClose`,Wn=`import { Button, message } from 'pelement-react'

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

export default MessageType`,jn=`import { Button, messageBox } from 'pelement-react'

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

export default MessageBoxBasic`,Un=`import { Button, messageBox } from 'pelement-react'

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

export default MessageBoxConfirm`,Gn=`import { Button, messageBox, Switch } from 'pelement-react'

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

export default MessageBoxMessage`,Vn=`import { Button, notification } from 'pelement-react'

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

export default NotificationBasic`,$n=`import { Button, notification } from 'pelement-react'

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

export default NotificationType`,Zn=`import { Button, notification } from 'pelement-react'

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

export default NotificationShowClose`,Kn=`import { Button, notification } from 'pelement-react'

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

export default NotificationType`,Xn=`import { Avatar, Breadcrumb, Button, Descriptions, PageHeader, Tag } from 'pelement-react'

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

export default PageHeaderAll`,qn=`import { PageHeader } from 'pelement-react'

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

export default PageHeaderBasic`,Yn=`import { Breadcrumb, PageHeader } from 'pelement-react'

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

export default PageHeaderBreadcrumb`,Jn=`import { PageHeader } from 'pelement-react'

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

export default PageHeaderContent`,Qn=`import { Avatar, Button, PageHeader, Tag } from 'pelement-react'

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

export default PageHeaderExtra`,ea=`import { Edit, PageHeader } from 'pelement-react'

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

export default PageHeaderIcon`,ta=`import { PageHeader } from 'pelement-react'

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

export default PageHeaderNoIcon`,na=`import { Button, Popconfirm } from 'pelement-react'

function PopconfirmBasic() {
  return (
    <>
      <Popconfirm title="Are you sure to delete this?">
        <Button>Delete</Button>
      </Popconfirm>
    </>
  )
}

export default PopconfirmBasic`,aa=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'

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

export default PopconfirmEvent`,oa=`import { Button, InfoFilled, Popconfirm } from 'pelement-react'

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

export default PopconfirmIcon`,ia=`import { Button, Popover } from 'pelement-react'

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

export default PopoverBasic`,sa=`import { Progress } from 'pelement-react'
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

export default ProgressBasic`,ra=`import { Progress } from 'pelement-react'

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

export default ProgressTextInside`,la=`import { Rate } from 'pelement-react'

function RateBasic() {
  return (
    <>
      <Rate></Rate>
    </>
  )
}

export default RateBasic`,ca=`import { Button, Col, Result, Row } from 'pelement-react'

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

export default ResultBasic`,pa=`import { Button, Result } from 'pelement-react'

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

export default ResultIcon`,ma=`import { Scrollbar } from 'pelement-react'
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

export default ScrollbarBasic`,da=`import { Segmented } from 'pelement-react'

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

export default SegmentedBasic`,ua=`import { Segmented } from 'pelement-react'

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

export default SegmentedBlock`,ga=`import { Segmented } from 'pelement-react'
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

export default SegmentedColor`,fa=`import { Segmented } from 'pelement-react'

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

export default SegmentedDisabled`,ha=`import { Check, Delete, Edit, Message, Search, Segmented, Star } from 'pelement-react'

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

export default SegmentedReactNode`,xa=`import { useState } from 'react'
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

export default SelectBasic`,_a=`import { Skeleton } from 'pelement-react'

function SkeletonAnimated() {
  return (
    <>
      <Skeleton rows={5} animated />
    </>
  )
}

export default SkeletonAnimated`,ba=`import { Skeleton, SkeletonItem } from 'pelement-react'

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

export default SkeletonBasic`,va=`import { useState } from 'react'
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

export default SkeletonCount`,Ba=`import { useState } from 'react'
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

export default SkeletonLoading`,ya=`import { Skeleton } from 'pelement-react'

function SkeletonRows() {
  return (
    <>
      <Skeleton rows={5} />
    </>
  )
}

export default SkeletonRows`,Ca=`import { useState } from 'react'
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

export default SkeletonThrottle`,ka=`import { Skeleton, SkeletonItem } from 'pelement-react'

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

export default SkeletonVariant`,Sa=`import { Button, Space } from 'pelement-react'

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

export default SpaceAlignment`,Na=`import { Space } from 'pelement-react'

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

export default SpaceBasic`,wa=`import { Space } from 'pelement-react'

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

export default SpaceDirection`,Ta=`import { Space } from 'pelement-react'

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

export default SpaceSize`,Ea=`import { Space } from 'pelement-react'

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

export default SpaceSize2`,Aa=`import { Button, Space } from 'pelement-react'

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

export default SpaceSpacer`,Da=`import { Button, Divider, Space } from 'pelement-react'

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

export default SpaceSpacer2`,Ra=`import { Button, Space } from 'pelement-react'

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

export default SpaceWrap`,Ia=`import { useState } from 'react'
import { Button, Calendar, Col, Countdown, Row } from 'pelement-react'
import dayjs from 'dayjs'
import './CountdownBasic.scss'

function CountdownBasic() {
  const value = Date.now() + 1000 * 60 * 60 * 7
  const [value1, setValue1] = useState(Date.now() + 1000 * 60 * 60 * 24 * 2)
  const value2 = dayjs().add(1, 'month').startOf('month')

  function reset() {
    setValue1(Date.now() + 1000 * 60 * 60 * 24 * 2)
  }

  return (
    <>
      <Row className="countdown-demo-basic">
        <Col span={8}>
          <Countdown title="Start to grab" value={value} />
        </Col>
        <Col span={8}>
          <Countdown
            title="Remaining VIP time"
            format="HH:mm:ss"
            value={value1}
          />
          <Button className="countdown-footer" type="primary" onClick={reset}>
            Reset
          </Button>
        </Col>
        <Col span={8}>
          <Countdown format="DD [days] HH:mm:ss" value={value2}
            title={
              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                <Calendar style={{ marginRight: '4px' }} />
                Still to go until next month
              </div>
            }
          />
          <div className="countdown-footer">{value2.format('YYYY-MM-DD')}</div>
        </Col>
      </Row >
    </>
  )
}

export default CountdownBasic`,La=`import { ChatLineRound, Col, Male, Row, Statistic } from 'pelement-react'
import './StatisticBasic.scss'

function StatisticBasic() {
  return (
    <>
      <Row className="statistic-demo-basic">
        <Col span={6}>
          <Statistic title="Daily active users" value={268500} />
        </Col>
        <Col span={6}>
          <Statistic
            value={138}
            title={
              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                Ratio of men to women
                <Male style={{ marginLeft: '4px' }} />
              </div>
            }
            suffix="/100"
          />
        </Col>
        <Col span={6}>
          <Statistic title="Total Transactions" value={1500} />
        </Col>
        <Col span={6}>
          <Statistic
            title="Feedback number"
            value={562}
            suffix={
              <ChatLineRound style={{ verticalAlign: '-0.125em' }} />
            } />
        </Col>
      </Row >
    </>
  )
}

export default StatisticBasic`,Ma=`import { ArrowRight, CaretBottom, CaretTop, Col, Row, Statistic, Tooltip, Warning } from 'pelement-react'
import './StatisticCard.scss'

function StatisticCard() {
  return (
    <>
      <Row gutter={16} className="statistic-demo-card">
        <Col span={8}>
          <div className="statistic-card">
            <Statistic value={98500}
              title={
                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                  Daily active users
                  <Tooltip
                    effect="dark"
                    content="Number of users who logged into the product in one day"
                    placement="top"
                  >
                    <Warning style={{ marginLeft: '4px' }} />
                  </Tooltip>
                </div>
              }
            >
            </Statistic>
            <div className="statistic-footer">
              <div className="footer-item">
                <span>than yesterday</span>
                <span className="green">
                  24%
                  <CaretTop />
                </span>
              </div>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="statistic-card">
            <Statistic value={693700}
              title={

                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                  Monthly Active Users
                  <Tooltip
                    effect="dark"
                    content="Number of users who logged into the product in one month"
                    placement="top"
                  >
                    <Warning style={{ marginLeft: '4px' }} />
                  </Tooltip>
                </div>
              }
            >
            </Statistic>
            <div className="statistic-footer">
              <div className="footer-item">
                <span>month on month</span>
                <span className="red">
                  12%
                  <CaretBottom />
                </span>
              </div>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="statistic-card">
            <Statistic value={72000} title={
              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                New transactions today
              </div>
            }>
            </Statistic>
            <div className="statistic-footer">
              <div className="footer-item">
                <span>than yesterday</span>
                <span className="green">
                  16%
                  <CaretTop />
                </span>
              </div>
              <div className="footer-item">
                <ArrowRight style={{ fontSize: '14px' }} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default StatisticCard`,Pa=`import { Hide, Switch, View } from 'pelement-react'

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

export default SwitchActionIcon`,Oa=`import { Switch } from 'pelement-react'

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

export default SwitchBasic`,za=`import { useState } from 'react'
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

export default SwitchBeforeChange`,Ha=`import { Switch } from 'pelement-react'

function SwitchDisabled() {
  return (
    <>
      <Switch defaultChecked disabled />
      <Switch defaultChecked className="ml-2" />
    </>
  )
}

export default SwitchDisabled`,Fa=`import { Check, Close, Switch } from 'pelement-react'

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

export default SwitchIcon`,Wa=`import { Switch } from 'pelement-react'

function SwitchLoading() {
  return (
    <>
      <Switch defaultChecked loading />
      <Switch loading className="ml-2" />
    </>
  )
}

export default SwitchLoading`,ja=`import { Switch } from 'pelement-react'

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

export default SwitchSize`,Ua=`import { Switch } from 'pelement-react'

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

export default SwitchText`,Ga=`import { Table } from 'pelement-react'

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

export default TableBasic`,Va=`import { Table } from 'pelement-react'

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

export default TableBorder`,$a=`import { Table } from 'pelement-react'

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

export default TableStripe`,Za=`import { Tag } from 'pelement-react'

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

export default TagBasic`,Ka=`import { Tag } from 'pelement-react'

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

export default TagClosable`,Xa=`import { Tag } from 'pelement-react'

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

export default TagEffect`,qa=`import { Tag } from 'pelement-react'

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

export default TagRound`,Ya=`import { Row, Tag } from 'pelement-react'

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

export default TagSize`,Ja=`import { Text } from 'pelement-react'
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

export default TextBasic`,Qa=`import { Text } from 'pelement-react'

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

export default TextSize`,eo=`import { Row, Text } from 'pelement-react'

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

export default TextTruncated`,to=`import { TimeSelect } from 'pelement-react'
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

export default TimeSelectBasic`,no=`import { Timeline } from 'pelement-react'

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

export default TimelineBasic`,ao=`import { Timeline } from 'pelement-react'

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

export default TimelineCenter`,oo=`import { Edit, Timeline } from 'pelement-react'

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

export default TimelineNode`,io=`import { Timeline } from 'pelement-react'

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

export default TimelinePlacement`,so=`import { Button, Tooltip } from 'pelement-react'
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

export default TooltipBasic`,ro=`import { Button, Tooltip } from 'pelement-react'

function TooltipContent() {
  return (
    <>
      <Tooltip placement="top" content={<>multiple lines<br />second line</>}>
        <Button>Top center</Button>
      </Tooltip>
    </>
  )
}

export default TooltipContent`,lo=`import { useState } from 'react'
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

export default TooltipDisabled`,co=`import { Button, Tooltip } from 'pelement-react'

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

export default TooltipEffect`,po=`import { Watermark } from 'pelement-react'

function WatermarkBasic() {
  return (
    <>
      <Watermark content="pelement-plus">
        <div style={{ height: '500px' }} />
      </Watermark>
    </>
  )
}

export default WatermarkBasic`,mo=`import { Watermark } from 'pelement-react'

function WatermarkContent() {
  return (
    <>
      <Watermark content={['Element Plus', 'pelement-plus']}>
        <div style={{ height: '500px' }} />
      </Watermark>
    </>
  )
}

export default WatermarkContent`,uo=`import { Watermark } from 'pelement-react'

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

export default WatermarkImage`;function Pe(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const a=e[t],r=typeof a;(r==="object"||r==="function")&&!Object.isFrozen(a)&&Pe(a)}),e}class Te{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Oe(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function L(e,...t){const a=Object.create(null);for(const r in e)a[r]=e[r];return t.forEach(function(r){for(const f in r)a[f]=r[f]}),a}const go="</span>",Ee=e=>!!e.scope,fo=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const a=e.split(".");return[`${t}${a.shift()}`,...a.map((r,f)=>`${r}${"_".repeat(f+1)}`)].join(" ")}return`${t}${e}`};class ho{constructor(t,a){this.buffer="",this.classPrefix=a.classPrefix,t.walk(this)}addText(t){this.buffer+=Oe(t)}openNode(t){if(!Ee(t))return;const a=fo(t.scope,{prefix:this.classPrefix});this.span(a)}closeNode(t){Ee(t)&&(this.buffer+=go)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const Ae=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class xe{constructor(){this.rootNode=Ae(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const a=Ae({scope:t});this.add(a),this.stack.push(a)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,a){return typeof a=="string"?t.addText(a):a.children&&(t.openNode(a),a.children.forEach(r=>this._walk(t,r)),t.closeNode(a)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(a=>typeof a=="string")?t.children=[t.children.join("")]:t.children.forEach(a=>{xe._collapse(a)}))}}class xo extends xe{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,a){const r=t.root;a&&(r.scope=`language:${a}`),this.add(r)}toHTML(){return new ho(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function K(e){return e?typeof e=="string"?e:e.source:null}function ze(e){return H("(?=",e,")")}function _o(e){return H("(?:",e,")*")}function bo(e){return H("(?:",e,")?")}function H(...e){return e.map(a=>K(a)).join("")}function vo(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function _e(...e){return"("+(vo(e).capture?"":"?:")+e.map(r=>K(r)).join("|")+")"}function He(e){return new RegExp(e.toString()+"|").exec("").length-1}function Bo(e,t){const a=e&&e.exec(t);return a&&a.index===0}const yo=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function be(e,{joinWith:t}){let a=0;return e.map(r=>{a+=1;const f=a;let h=K(r),s="";for(;h.length>0;){const o=yo.exec(h);if(!o){s+=h;break}s+=h.substring(0,o.index),h=h.substring(o.index+o[0].length),o[0][0]==="\\"&&o[1]?s+="\\"+String(Number(o[1])+f):(s+=o[0],o[0]==="("&&a++)}return s}).map(r=>`(${r})`).join(t)}const Co=/\b\B/,Fe="[a-zA-Z]\\w*",ve="[a-zA-Z_]\\w*",We="\\b\\d+(\\.\\d+)?",je="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Ue="\\b(0b[01]+)",ko="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",So=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=H(t,/.*\b/,e.binary,/\b.*/)),L({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(a,r)=>{a.index!==0&&r.ignoreMatch()}},e)},X={begin:"\\\\[\\s\\S]",relevance:0},No={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[X]},wo={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[X]},To={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},le=function(e,t,a={}){const r=L({scope:"comment",begin:e,end:t,contains:[]},a);r.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const f=_e("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:H(/[ ]+/,"(",f,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),r},Eo=le("//","$"),Ao=le("/\\*","\\*/"),Do=le("#","$"),Ro={scope:"number",begin:We,relevance:0},Io={scope:"number",begin:je,relevance:0},Lo={scope:"number",begin:Ue,relevance:0},Mo={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[X,{begin:/\[/,end:/\]/,relevance:0,contains:[X]}]},Po={scope:"title",begin:Fe,relevance:0},Oo={scope:"title",begin:ve,relevance:0},zo={begin:"\\.\\s*"+ve,relevance:0},Ho=function(e){return Object.assign(e,{"on:begin":(t,a)=>{a.data._beginMatch=t[1]},"on:end":(t,a)=>{a.data._beginMatch!==t[1]&&a.ignoreMatch()}})};var se=Object.freeze({__proto__:null,APOS_STRING_MODE:No,BACKSLASH_ESCAPE:X,BINARY_NUMBER_MODE:Lo,BINARY_NUMBER_RE:Ue,COMMENT:le,C_BLOCK_COMMENT_MODE:Ao,C_LINE_COMMENT_MODE:Eo,C_NUMBER_MODE:Io,C_NUMBER_RE:je,END_SAME_AS_BEGIN:Ho,HASH_COMMENT_MODE:Do,IDENT_RE:Fe,MATCH_NOTHING_RE:Co,METHOD_GUARD:zo,NUMBER_MODE:Ro,NUMBER_RE:We,PHRASAL_WORDS_MODE:To,QUOTE_STRING_MODE:wo,REGEXP_MODE:Mo,RE_STARTERS_RE:ko,SHEBANG:So,TITLE_MODE:Po,UNDERSCORE_IDENT_RE:ve,UNDERSCORE_TITLE_MODE:Oo});function Fo(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function Wo(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function jo(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Fo,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Uo(e,t){Array.isArray(e.illegal)&&(e.illegal=_e(...e.illegal))}function Go(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Vo(e,t){e.relevance===void 0&&(e.relevance=1)}const $o=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const a=Object.assign({},e);Object.keys(e).forEach(r=>{delete e[r]}),e.keywords=a.keywords,e.begin=H(a.beforeMatch,ze(a.begin)),e.starts={relevance:0,contains:[Object.assign(a,{endsParent:!0})]},e.relevance=0,delete a.beforeMatch},Zo=["of","and","for","in","not","or","if","then","parent","list","value"],Ko="keyword";function Ge(e,t,a=Ko){const r=Object.create(null);return typeof e=="string"?f(a,e.split(" ")):Array.isArray(e)?f(a,e):Object.keys(e).forEach(function(h){Object.assign(r,Ge(e[h],t,h))}),r;function f(h,s){t&&(s=s.map(o=>o.toLowerCase())),s.forEach(function(o){const p=o.split("|");r[p[0]]=[h,Xo(p[0],p[1])]})}}function Xo(e,t){return t?Number(t):qo(e)?0:1}function qo(e){return Zo.includes(e.toLowerCase())}const De={},z=e=>{console.error(e)},Re=(e,...t)=>{console.log(`WARN: ${e}`,...t)},U=(e,t)=>{De[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),De[`${e}/${t}`]=!0)},re=new Error;function Ve(e,t,{key:a}){let r=0;const f=e[a],h={},s={};for(let o=1;o<=t.length;o++)s[o+r]=f[o],h[o+r]=!0,r+=He(t[o-1]);e[a]=s,e[a]._emit=h,e[a]._multi=!0}function Yo(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw z("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),re;if(typeof e.beginScope!="object"||e.beginScope===null)throw z("beginScope must be object"),re;Ve(e,e.begin,{key:"beginScope"}),e.begin=be(e.begin,{joinWith:""})}}function Jo(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw z("skip, excludeEnd, returnEnd not compatible with endScope: {}"),re;if(typeof e.endScope!="object"||e.endScope===null)throw z("endScope must be object"),re;Ve(e,e.end,{key:"endScope"}),e.end=be(e.end,{joinWith:""})}}function Qo(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function ei(e){Qo(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Yo(e),Jo(e)}function ti(e){function t(s,o){return new RegExp(K(s),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(o?"g":""))}class a{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(o,p){p.position=this.position++,this.matchIndexes[this.matchAt]=p,this.regexes.push([p,o]),this.matchAt+=He(o)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const o=this.regexes.map(p=>p[1]);this.matcherRe=t(be(o,{joinWith:"|"}),!0),this.lastIndex=0}exec(o){this.matcherRe.lastIndex=this.lastIndex;const p=this.matcherRe.exec(o);if(!p)return null;const x=p.findIndex((w,E)=>E>0&&w!==void 0),b=this.matchIndexes[x];return p.splice(0,x),Object.assign(p,b)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(o){if(this.multiRegexes[o])return this.multiRegexes[o];const p=new a;return this.rules.slice(o).forEach(([x,b])=>p.addRule(x,b)),p.compile(),this.multiRegexes[o]=p,p}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(o,p){this.rules.push([o,p]),p.type==="begin"&&this.count++}exec(o){const p=this.getMatcher(this.regexIndex);p.lastIndex=this.lastIndex;let x=p.exec(o);if(this.resumingScanAtSamePosition()&&!(x&&x.index===this.lastIndex)){const b=this.getMatcher(0);b.lastIndex=this.lastIndex+1,x=b.exec(o)}return x&&(this.regexIndex+=x.position+1,this.regexIndex===this.count&&this.considerAll()),x}}function f(s){const o=new r;return s.contains.forEach(p=>o.addRule(p.begin,{rule:p,type:"begin"})),s.terminatorEnd&&o.addRule(s.terminatorEnd,{type:"end"}),s.illegal&&o.addRule(s.illegal,{type:"illegal"}),o}function h(s,o){const p=s;if(s.isCompiled)return p;[Wo,Go,ei,$o].forEach(b=>b(s,o)),e.compilerExtensions.forEach(b=>b(s,o)),s.__beforeBegin=null,[jo,Uo,Vo].forEach(b=>b(s,o)),s.isCompiled=!0;let x=null;return typeof s.keywords=="object"&&s.keywords.$pattern&&(s.keywords=Object.assign({},s.keywords),x=s.keywords.$pattern,delete s.keywords.$pattern),x=x||/\w+/,s.keywords&&(s.keywords=Ge(s.keywords,e.case_insensitive)),p.keywordPatternRe=t(x,!0),o&&(s.begin||(s.begin=/\B|\b/),p.beginRe=t(p.begin),!s.end&&!s.endsWithParent&&(s.end=/\B|\b/),s.end&&(p.endRe=t(p.end)),p.terminatorEnd=K(p.end)||"",s.endsWithParent&&o.terminatorEnd&&(p.terminatorEnd+=(s.end?"|":"")+o.terminatorEnd)),s.illegal&&(p.illegalRe=t(s.illegal)),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map(function(b){return ni(b==="self"?s:b)})),s.contains.forEach(function(b){h(b,p)}),s.starts&&h(s.starts,o),p.matcher=f(p),p}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=L(e.classNameAliases||{}),h(e)}function $e(e){return e?e.endsWithParent||$e(e.starts):!1}function ni(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return L(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:$e(e)?L(e,{starts:e.starts?L(e.starts):null}):Object.isFrozen(e)?L(e):e}var ai="11.9.0";class oi extends Error{constructor(t,a){super(t),this.name="HTMLInjectionError",this.html=a}}const he=Oe,Ie=L,Le=Symbol("nomatch"),ii=7,Ze=function(e){const t=Object.create(null),a=Object.create(null),r=[];let f=!0;const h="Could not find the language '{}', did you forget to load/include a language module?",s={disableAutodetect:!0,name:"Plain text",contains:[]};let o={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:xo};function p(n){return o.noHighlightRe.test(n)}function x(n){let l=n.className+" ";l+=n.parentNode?n.parentNode.className:"";const d=o.languageDetectRe.exec(l);if(d){const g=A(d[1]);return g||(Re(h.replace("{}",d[1])),Re("Falling back to no-highlight mode for this block.",n)),g?d[1]:"no-highlight"}return l.split(/\s+/).find(g=>p(g)||A(g))}function b(n,l,d){let g="",B="";typeof l=="object"?(g=n,d=l.ignoreIllegals,B=l.language):(U("10.7.0","highlight(lang, code, ...args) has been deprecated."),U("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),B=n,g=l),d===void 0&&(d=!0);const k={code:g,language:B};j("before:highlight",k);const T=k.result?k.result:w(k.language,k.code,d);return T.code=k.code,j("after:highlight",T),T}function w(n,l,d,g){const B=Object.create(null);function k(i,c){return i.keywords[c]}function T(){if(!m.keywords){y.addText(v);return}let i=0;m.keywordPatternRe.lastIndex=0;let c=m.keywordPatternRe.exec(v),u="";for(;c;){u+=v.substring(i,c.index);const _=R.case_insensitive?c[0].toLowerCase():c[0],C=k(m,_);if(C){const[I,nt]=C;if(y.addText(u),u="",B[_]=(B[_]||0)+1,B[_]<=ii&&(oe+=nt),I.startsWith("_"))u+=c[0];else{const at=R.classNameAliases[I]||I;D(c[0],at)}}else u+=c[0];i=m.keywordPatternRe.lastIndex,c=m.keywordPatternRe.exec(v)}u+=v.substring(i),y.addText(u)}function ne(){if(v==="")return;let i=null;if(typeof m.subLanguage=="string"){if(!t[m.subLanguage]){y.addText(v);return}i=w(m.subLanguage,v,!0,we[m.subLanguage]),we[m.subLanguage]=i._top}else i=F(v,m.subLanguage.length?m.subLanguage:null);m.relevance>0&&(oe+=i.relevance),y.__addSublanguage(i._emitter,i.language)}function S(){m.subLanguage!=null?ne():T(),v=""}function D(i,c){i!==""&&(y.startScope(c),y.addText(i),y.endScope())}function Ce(i,c){let u=1;const _=c.length-1;for(;u<=_;){if(!i._emit[u]){u++;continue}const C=R.classNameAliases[i[u]]||i[u],I=c[u];C?D(I,C):(v=I,T(),v=""),u++}}function ke(i,c){return i.scope&&typeof i.scope=="string"&&y.openNode(R.classNameAliases[i.scope]||i.scope),i.beginScope&&(i.beginScope._wrap?(D(v,R.classNameAliases[i.beginScope._wrap]||i.beginScope._wrap),v=""):i.beginScope._multi&&(Ce(i.beginScope,c),v="")),m=Object.create(i,{parent:{value:m}}),m}function Se(i,c,u){let _=Bo(i.endRe,u);if(_){if(i["on:end"]){const C=new Te(i);i["on:end"](c,C),C.isMatchIgnored&&(_=!1)}if(_){for(;i.endsParent&&i.parent;)i=i.parent;return i}}if(i.endsWithParent)return Se(i.parent,c,u)}function Ye(i){return m.matcher.regexIndex===0?(v+=i[0],1):(fe=!0,0)}function Je(i){const c=i[0],u=i.rule,_=new Te(u),C=[u.__beforeBegin,u["on:begin"]];for(const I of C)if(I&&(I(i,_),_.isMatchIgnored))return Ye(c);return u.skip?v+=c:(u.excludeBegin&&(v+=c),S(),!u.returnBegin&&!u.excludeBegin&&(v=c)),ke(u,i),u.returnBegin?0:c.length}function Qe(i){const c=i[0],u=l.substring(i.index),_=Se(m,i,u);if(!_)return Le;const C=m;m.endScope&&m.endScope._wrap?(S(),D(c,m.endScope._wrap)):m.endScope&&m.endScope._multi?(S(),Ce(m.endScope,i)):C.skip?v+=c:(C.returnEnd||C.excludeEnd||(v+=c),S(),C.excludeEnd&&(v=c));do m.scope&&y.closeNode(),!m.skip&&!m.subLanguage&&(oe+=m.relevance),m=m.parent;while(m!==_.parent);return _.starts&&ke(_.starts,i),C.returnEnd?0:c.length}function et(){const i=[];for(let c=m;c!==R;c=c.parent)c.scope&&i.unshift(c.scope);i.forEach(c=>y.openNode(c))}let ae={};function Ne(i,c){const u=c&&c[0];if(v+=i,u==null)return S(),0;if(ae.type==="begin"&&c.type==="end"&&ae.index===c.index&&u===""){if(v+=l.slice(c.index,c.index+1),!f){const _=new Error(`0 width match regex (${n})`);throw _.languageName=n,_.badRule=ae.rule,_}return 1}if(ae=c,c.type==="begin")return Je(c);if(c.type==="illegal"&&!d){const _=new Error('Illegal lexeme "'+u+'" for mode "'+(m.scope||"<unnamed>")+'"');throw _.mode=m,_}else if(c.type==="end"){const _=Qe(c);if(_!==Le)return _}if(c.type==="illegal"&&u==="")return 1;if(ge>1e5&&ge>c.index*3)throw new Error("potential infinite loop, way more iterations than matches");return v+=u,u.length}const R=A(n);if(!R)throw z(h.replace("{}",n)),new Error('Unknown language: "'+n+'"');const tt=ti(R);let ue="",m=g||tt;const we={},y=new o.__emitter(o);et();let v="",oe=0,O=0,ge=0,fe=!1;try{if(R.__emitTokens)R.__emitTokens(l,y);else{for(m.matcher.considerAll();;){ge++,fe?fe=!1:m.matcher.considerAll(),m.matcher.lastIndex=O;const i=m.matcher.exec(l);if(!i)break;const c=l.substring(O,i.index),u=Ne(c,i);O=i.index+u}Ne(l.substring(O))}return y.finalize(),ue=y.toHTML(),{language:n,value:ue,relevance:oe,illegal:!1,_emitter:y,_top:m}}catch(i){if(i.message&&i.message.includes("Illegal"))return{language:n,value:he(l),illegal:!0,relevance:0,_illegalBy:{message:i.message,index:O,context:l.slice(O-100,O+100),mode:i.mode,resultSoFar:ue},_emitter:y};if(f)return{language:n,value:he(l),illegal:!1,relevance:0,errorRaised:i,_emitter:y,_top:m};throw i}}function E(n){const l={value:he(n),illegal:!1,relevance:0,_top:s,_emitter:new o.__emitter(o)};return l._emitter.addText(n),l}function F(n,l){l=l||o.languages||Object.keys(t);const d=E(n),g=l.filter(A).filter(ee).map(S=>w(S,n,!1));g.unshift(d);const B=g.sort((S,D)=>{if(S.relevance!==D.relevance)return D.relevance-S.relevance;if(S.language&&D.language){if(A(S.language).supersetOf===D.language)return 1;if(A(D.language).supersetOf===S.language)return-1}return 0}),[k,T]=B,ne=k;return ne.secondBest=T,ne}function q(n,l,d){const g=l&&a[l]||d;n.classList.add("hljs"),n.classList.add(`language-${g}`)}function W(n){let l=null;const d=x(n);if(p(d))return;if(j("before:highlightElement",{el:n,language:d}),n.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",n);return}if(n.children.length>0&&(o.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(n)),o.throwUnescapedHTML))throw new oi("One of your code blocks includes unescaped HTML.",n.innerHTML);l=n;const g=l.textContent,B=d?b(g,{language:d,ignoreIllegals:!0}):F(g);n.innerHTML=B.value,n.dataset.highlighted="yes",q(n,d,B.language),n.result={language:B.language,re:B.relevance,relevance:B.relevance},B.secondBest&&(n.secondBest={language:B.secondBest.language,relevance:B.secondBest.relevance}),j("after:highlightElement",{el:n,result:B,text:g})}function Y(n){o=Ie(o,n)}const ye=()=>{M(),U("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function V(){M(),U("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let $=!1;function M(){if(document.readyState==="loading"){$=!0;return}document.querySelectorAll(o.cssSelector).forEach(W)}function Z(){$&&M()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",Z,!1);function P(n,l){let d=null;try{d=l(e)}catch(g){if(z("Language definition for '{}' could not be registered.".replace("{}",n)),f)z(g);else throw g;d=s}d.name||(d.name=n),t[n]=d,d.rawDefinition=l.bind(null,e),d.aliases&&Q(d.aliases,{languageName:n})}function ce(n){delete t[n];for(const l of Object.keys(a))a[l]===n&&delete a[l]}function J(){return Object.keys(t)}function A(n){return n=(n||"").toLowerCase(),t[n]||t[a[n]]}function Q(n,{languageName:l}){typeof n=="string"&&(n=[n]),n.forEach(d=>{a[d.toLowerCase()]=l})}function ee(n){const l=A(n);return l&&!l.disableAutodetect}function pe(n){n["before:highlightBlock"]&&!n["before:highlightElement"]&&(n["before:highlightElement"]=l=>{n["before:highlightBlock"](Object.assign({block:l.el},l))}),n["after:highlightBlock"]&&!n["after:highlightElement"]&&(n["after:highlightElement"]=l=>{n["after:highlightBlock"](Object.assign({block:l.el},l))})}function me(n){pe(n),r.push(n)}function de(n){const l=r.indexOf(n);l!==-1&&r.splice(l,1)}function j(n,l){const d=n;r.forEach(function(g){g[d]&&g[d](l)})}function te(n){return U("10.7.0","highlightBlock will be removed entirely in v12.0"),U("10.7.0","Please use highlightElement now."),W(n)}Object.assign(e,{highlight:b,highlightAuto:F,highlightAll:M,highlightElement:W,highlightBlock:te,configure:Y,initHighlighting:ye,initHighlightingOnLoad:V,registerLanguage:P,unregisterLanguage:ce,listLanguages:J,getLanguage:A,registerAliases:Q,autoDetection:ee,inherit:Ie,addPlugin:me,removePlugin:de}),e.debugMode=function(){f=!1},e.safeMode=function(){f=!0},e.versionString=ai,e.regex={concat:H,lookahead:ze,either:_e,optional:bo,anyNumberOfTimes:_o};for(const n in se)typeof se[n]=="object"&&Pe(se[n]);return Object.assign(e,se),e},G=Ze({});G.newInstance=()=>Ze({});var si=G;G.HighlightJS=G;G.default=G;const Be=ot(si);function ri(e){const t=e.regex,a=t.concat(/[\p{L}_]/u,t.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),r=/[\p{L}0-9._:-]+/u,f={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},h={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},s=e.inherit(h,{begin:/\(/,end:/\)/}),o=e.inherit(e.APOS_STRING_MODE,{className:"string"}),p=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),x={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:r,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[f]},{begin:/'/,end:/'/,contains:[f]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[h,p,o,s,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[h,s,p,o]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},f,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[p]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[x],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[x],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:t.concat(/</,t.lookahead(t.concat(a,t.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:a,relevance:0,starts:x}]},{className:"tag",begin:t.concat(/<\//,t.lookahead(t.concat(a,/>/))),contains:[{className:"name",begin:a,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Me="[A-Za-z$_][0-9A-Za-z$_]*",li=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],ci=["true","false","null","undefined","NaN","Infinity"],Ke=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Xe=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],qe=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],pi=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],mi=[].concat(qe,Ke,Xe);function di(e){const t=e.regex,a=(l,{after:d})=>{const g="</"+l[0].slice(1);return l.input.indexOf(g,d)!==-1},r=Me,f={begin:"<>",end:"</>"},h=/<[A-Za-z0-9\\._:-]+\s*\/>/,s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(l,d)=>{const g=l[0].length+l.index,B=l.input[g];if(B==="<"||B===","){d.ignoreMatch();return}B===">"&&(a(l,{after:g})||d.ignoreMatch());let k;const T=l.input.substring(g);if(k=T.match(/^\s*=/)){d.ignoreMatch();return}if((k=T.match(/^\s+extends\s+/))&&k.index===0){d.ignoreMatch();return}}},o={$pattern:Me,keyword:li,literal:ci,built_in:mi,"variable.language":pi},p="[0-9](_?[0-9])*",x=`\\.(${p})`,b="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",w={className:"number",variants:[{begin:`(\\b(${b})((${x})|\\.)?|(${x}))[eE][+-]?(${p})\\b`},{begin:`\\b(${b})\\b((${x})\\b|\\.)?|(${x})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},E={className:"subst",begin:"\\$\\{",end:"\\}",keywords:o,contains:[]},F={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,E],subLanguage:"xml"}},q={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,E],subLanguage:"css"}},W={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,E],subLanguage:"graphql"}},Y={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,E]},V={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:r+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},$=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,F,q,W,Y,{match:/\$\d+/},w];E.contains=$.concat({begin:/\{/,end:/\}/,keywords:o,contains:["self"].concat($)});const M=[].concat(V,E.contains),Z=M.concat([{begin:/\(/,end:/\)/,keywords:o,contains:["self"].concat(M)}]),P={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:Z},ce={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,t.concat(r,"(",t.concat(/\./,r),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,r],scope:{1:"keyword",3:"title.class"}}]},J={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Ke,...Xe]}},A={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Q={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[P],illegal:/%/},ee={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function pe(l){return t.concat("(?!",l.join("|"),")")}const me={match:t.concat(/\b/,pe([...qe,"super","import"]),r,t.lookahead(/\(/)),className:"title.function",relevance:0},de={begin:t.concat(/\./,t.lookahead(t.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},j={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},P]},te="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",n={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(te)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[P]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:o,exports:{PARAMS_CONTAINS:Z,CLASS_REFERENCE:J},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),A,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,F,q,W,Y,V,{match:/\$\d+/},w,J,{className:"attr",begin:r+t.lookahead(":"),relevance:0},n,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[V,e.REGEXP_MODE,{className:"function",begin:te,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:Z}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:f.begin,end:f.end},{match:h},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}]},Q,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[P,e.inherit(e.TITLE_MODE,{begin:r,className:"title.function"})]},{match:/\.\.\./,relevance:0},de,{match:"\\$"+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[P]},me,ee,ce,j,{match:/\$[(.]/}]}}Be.registerLanguage("xml",ri);Be.registerLanguage("javascript",di);function gi({language:e="javascript",name:t,children:a}){const r=ie.useRef(null),[f,h]=ie.useState(!1),[s,o]=ie.useState(""),p=Object.assign({"../../../packages/Affix/_example/AffixBasic.tsx":it,"../../../packages/Affix/_example/AffixPosition.tsx":st,"../../../packages/Affix/_example/AffixTarget.tsx":rt,"../../../packages/Alert/_example/AlertBasic.tsx":lt,"../../../packages/Alert/_example/AlertCenter.tsx":ct,"../../../packages/Alert/_example/AlertClose.tsx":pt,"../../../packages/Alert/_example/AlertDescription.tsx":mt,"../../../packages/Alert/_example/AlertEffect.tsx":dt,"../../../packages/Alert/_example/AlertIconDescription.tsx":ut,"../../../packages/Alert/_example/AlertShowIcon.tsx":gt,"../../../packages/Avatar/_example/AvatarBasic.tsx":ft,"../../../packages/Avatar/_example/AvatarError.tsx":ht,"../../../packages/Avatar/_example/AvatarFit.tsx":xt,"../../../packages/Avatar/_example/AvatarType.tsx":_t,"../../../packages/Backtop/_example/BacktopBasic.tsx":bt,"../../../packages/Backtop/_example/BacktopContent.tsx":vt,"../../../packages/Backtop/_example/BacktopTarget.tsx":Bt,"../../../packages/Badge/_example/BadgeBasic.tsx":yt,"../../../packages/Badge/_example/BadgeIsDot.tsx":Ct,"../../../packages/Badge/_example/BadgeMax.tsx":kt,"../../../packages/Badge/_example/BadgeValue.tsx":St,"../../../packages/Breadcrumb/_example/BreadcrumbBasic.tsx":Nt,"../../../packages/Breadcrumb/_example/BreadcrumbSeparator.tsx":wt,"../../../packages/Button/_example/ButtonBasic.tsx":Tt,"../../../packages/Button/_example/ButtonDisabled.tsx":Et,"../../../packages/Button/_example/ButtonLink.tsx":At,"../../../packages/Button/_example/ButtonText.tsx":Dt,"../../../packages/Card/_example/CardBasic.tsx":Rt,"../../../packages/Card/_example/CardBodyStyle.tsx":It,"../../../packages/Card/_example/CardShadow.tsx":Lt,"../../../packages/Card/_example/CardSimple.tsx":Mt,"../../../packages/Checkbox/_example/CheckboxBasic.tsx":Pt,"../../../packages/Checkbox/_example/CheckboxDisabled.tsx":Ot,"../../../packages/Checkbox/_example/CheckboxGroupBasic.tsx":zt,"../../../packages/Collapse/_example/CollapseBasic.tsx":Ht,"../../../packages/ColorPicker/_example/ColorPickerBasic.tsx":Ft,"../../../packages/Container/_example/ContainerBasic.tsx":Wt,"../../../packages/Container/_example/ContainerBasic1.tsx":jt,"../../../packages/Container/_example/ContainerBasic2.tsx":Ut,"../../../packages/Container/_example/ContainerBasic3.tsx":Gt,"../../../packages/Container/_example/ContainerBasic4.tsx":Vt,"../../../packages/Container/_example/ContainerBasic5.tsx":$t,"../../../packages/Container/_example/ContainerBasic6.tsx":Zt,"../../../packages/Descriptions/_example/DescriptionsBasic.tsx":Kt,"../../../packages/Descriptions/_example/DescriptionsDirection.tsx":Xt,"../../../packages/Descriptions/_example/DescriptionsSize.tsx":qt,"../../../packages/Descriptions/_example/DescriptionsStyle.tsx":Yt,"../../../packages/Dialog/_example/DialogBasic.tsx":Jt,"../../../packages/Dialog/_example/DialogContent.tsx":Qt,"../../../packages/Dialog/_example/DialogHeader.tsx":en,"../../../packages/Divider/_example/DividerBasic.tsx":tn,"../../../packages/Divider/_example/DividerBorder.tsx":nn,"../../../packages/Divider/_example/DividerContent.tsx":an,"../../../packages/Divider/_example/DividerDirection.tsx":on,"../../../packages/Drawer/_example/DrawerBasic.tsx":sn,"../../../packages/Drawer/_example/DrawerContent.tsx":rn,"../../../packages/Drawer/_example/DrawerHeader.tsx":ln,"../../../packages/Drawer/_example/DrawerHeader2.tsx":cn,"../../../packages/Empty/_example/EmptyBasic.tsx":pn,"../../../packages/Empty/_example/EmptyContent.tsx":mn,"../../../packages/Empty/_example/EmptyImage.tsx":dn,"../../../packages/Empty/_example/EmptyImageSize.tsx":un,"../../../packages/Icon/_example/IconBasic.tsx":gn,"../../../packages/Image/_example/ImageBasic.tsx":fn,"../../../packages/Image/_example/ImageError.tsx":hn,"../../../packages/Image/_example/ImageLazy.tsx":xn,"../../../packages/Image/_example/ImagePlaceholder.tsx":_n,"../../../packages/Image/_example/ImagePreviewSrcList.tsx":bn,"../../../packages/Input/_example/InputBasic.tsx":vn,"../../../packages/Input/_example/InputClearable.tsx":Bn,"../../../packages/Input/_example/InputDisabled.tsx":yn,"../../../packages/Input/_example/InputSize.tsx":Cn,"../../../packages/Layout/_example/LayoutBasic.tsx":kn,"../../../packages/Layout/_example/LayoutBootstrap.tsx":Sn,"../../../packages/Layout/_example/LayoutGutter.tsx":Nn,"../../../packages/Layout/_example/LayoutJustify.tsx":wn,"../../../packages/Layout/_example/LayoutMix.tsx":Tn,"../../../packages/Layout/_example/LayoutOffset.tsx":En,"../../../packages/Link/_example/LinkBasic.tsx":An,"../../../packages/Link/_example/LinkDisabled.tsx":Dn,"../../../packages/Link/_example/LinkIcon.tsx":Rn,"../../../packages/Link/_example/LinkUnderline.tsx":In,"../../../packages/Loading/_example/LoadingBasic.tsx":Ln,"../../../packages/Loading/_example/LoadingService.tsx":Mn,"../../../packages/Loading/_example/LoadingText.tsx":Pn,"../../../packages/Message/_example/MessageBasic.tsx":On,"../../../packages/Message/_example/MessageCenter.tsx":zn,"../../../packages/Message/_example/MessagePlain.tsx":Hn,"../../../packages/Message/_example/MessageShowClose.tsx":Fn,"../../../packages/Message/_example/MessageType.tsx":Wn,"../../../packages/MessageBox/_example/MessageBoxBasic.tsx":jn,"../../../packages/MessageBox/_example/MessageBoxConfirm.tsx":Un,"../../../packages/MessageBox/_example/MessageBoxMessage.tsx":Gn,"../../../packages/Notification/_example/NotificationBasic.tsx":Vn,"../../../packages/Notification/_example/NotificationPosition.tsx":$n,"../../../packages/Notification/_example/NotificationShowClose.tsx":Zn,"../../../packages/Notification/_example/NotificationType.tsx":Kn,"../../../packages/PageHeader/_example/PageHeaderAll.tsx":Xn,"../../../packages/PageHeader/_example/PageHeaderBasic.tsx":qn,"../../../packages/PageHeader/_example/PageHeaderBreadcrumb.tsx":Yn,"../../../packages/PageHeader/_example/PageHeaderContent.tsx":Jn,"../../../packages/PageHeader/_example/PageHeaderExtra.tsx":Qn,"../../../packages/PageHeader/_example/PageHeaderIcon.tsx":ea,"../../../packages/PageHeader/_example/PageHeaderNoIcon.tsx":ta,"../../../packages/Popconfirm/_example/PopconfirmBasic.tsx":na,"../../../packages/Popconfirm/_example/PopconfirmEvent.tsx":aa,"../../../packages/Popconfirm/_example/PopconfirmIcon.tsx":oa,"../../../packages/Popover/_example/PopoverBasic.tsx":ia,"../../../packages/Progress/_example/ProgressBasic.tsx":sa,"../../../packages/Progress/_example/ProgressTextInside.tsx":ra,"../../../packages/Rate/_example/RateBasic.tsx":la,"../../../packages/Result/_example/ResultBasic.tsx":ca,"../../../packages/Result/_example/ResultIcon.tsx":pa,"../../../packages/Scrollbar/_example/ScrollbarBasic.tsx":ma,"../../../packages/Segmented/_example/SegmentedBasic.tsx":da,"../../../packages/Segmented/_example/SegmentedBlock.tsx":ua,"../../../packages/Segmented/_example/SegmentedColor.tsx":ga,"../../../packages/Segmented/_example/SegmentedDisabled.tsx":fa,"../../../packages/Segmented/_example/SegmentedReactNode.tsx":ha,"../../../packages/Select/_example/SelectBasic.tsx":xa,"../../../packages/Skeleton/_example/SkeletonAnimated.tsx":_a,"../../../packages/Skeleton/_example/SkeletonBasic.tsx":ba,"../../../packages/Skeleton/_example/SkeletonCount.tsx":va,"../../../packages/Skeleton/_example/SkeletonLoading.tsx":Ba,"../../../packages/Skeleton/_example/SkeletonRows.tsx":ya,"../../../packages/Skeleton/_example/SkeletonThrottle.tsx":Ca,"../../../packages/Skeleton/_example/SkeletonVariant.tsx":ka,"../../../packages/Space/_example/SpaceAlignment.tsx":Sa,"../../../packages/Space/_example/SpaceBasic.tsx":Na,"../../../packages/Space/_example/SpaceDirection.tsx":wa,"../../../packages/Space/_example/SpaceSize.tsx":Ta,"../../../packages/Space/_example/SpaceSize2.tsx":Ea,"../../../packages/Space/_example/SpaceSpacer.tsx":Aa,"../../../packages/Space/_example/SpaceSpacer2.tsx":Da,"../../../packages/Space/_example/SpaceWrap.tsx":Ra,"../../../packages/Statistic/_example/CountdownBasic.tsx":Ia,"../../../packages/Statistic/_example/StatisticBasic.tsx":La,"../../../packages/Statistic/_example/StatisticCard.tsx":Ma,"../../../packages/Switch/_example/SwitchActionIcon.tsx":Pa,"../../../packages/Switch/_example/SwitchBasic.tsx":Oa,"../../../packages/Switch/_example/SwitchBeforeChange.tsx":za,"../../../packages/Switch/_example/SwitchDisabled.tsx":Ha,"../../../packages/Switch/_example/SwitchIcon.tsx":Fa,"../../../packages/Switch/_example/SwitchLoading.tsx":Wa,"../../../packages/Switch/_example/SwitchSize.tsx":ja,"../../../packages/Switch/_example/SwitchText.tsx":Ua,"../../../packages/Table/_example/TableBasic.tsx":Ga,"../../../packages/Table/_example/TableBorder.tsx":Va,"../../../packages/Table/_example/TableStripe.tsx":$a,"../../../packages/Tag/_example/TagBasic.tsx":Za,"../../../packages/Tag/_example/TagClosable.tsx":Ka,"../../../packages/Tag/_example/TagEffect.tsx":Xa,"../../../packages/Tag/_example/TagRound.tsx":qa,"../../../packages/Tag/_example/TagSize.tsx":Ya,"../../../packages/Text/_example/TextBasic.tsx":Ja,"../../../packages/Text/_example/TextSize.tsx":Qa,"../../../packages/Text/_example/TextTruncated.tsx":eo,"../../../packages/TimeSelect/_example/TimeSelectBasic.tsx":to,"../../../packages/Timeline/_example/TimelineBasic.tsx":no,"../../../packages/Timeline/_example/TimelineCenter.tsx":ao,"../../../packages/Timeline/_example/TimelineNode.tsx":oo,"../../../packages/Timeline/_example/TimelinePlacement.tsx":io,"../../../packages/Tooltip/_example/TooltipBasic.tsx":so,"../../../packages/Tooltip/_example/TooltipContent.tsx":ro,"../../../packages/Tooltip/_example/TooltipDisabled.tsx":lo,"../../../packages/Tooltip/_example/TooltipEffect.tsx":co,"../../../packages/Watermark/_example/WatermarkBasic.tsx":po,"../../../packages/Watermark/_example/WatermarkContent.tsx":mo,"../../../packages/Watermark/_example/WatermarkImage.tsx":uo});let x={display:f?"":"none"};ie.useEffect(()=>{r.current&&(Object.keys(p).forEach(w=>{w.indexOf(t)!==-1&&o(p[w])}),setTimeout(()=>{Be.highlightElement(r.current)},0))},[t]);function b(){h(!f)}return N.jsx(N.Fragment,{children:N.jsxs("div",{className:"code-block",children:[N.jsx("div",{className:"code-block-component",children:a}),N.jsx("div",{className:"op-btns",children:N.jsx("button",{onClick:b,className:"reset-btn el-icon op-btn el-tooltip__trigger el-tooltip__trigger",children:N.jsx("i",{className:"el-icon",style:{fontSize:"16px"},children:N.jsx("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em","data-v-5d9e4641":"",children:N.jsx("path",{fill:"currentColor",d:"m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"})})})})}),N.jsx("div",{className:"code-block-wrapper",style:x,children:N.jsx("div",{className:"code-block-pre language-react",children:N.jsx("pre",{children:N.jsx("code",{id:e,ref:r,className:e,children:s})})})})]})})}export{gi as C};
