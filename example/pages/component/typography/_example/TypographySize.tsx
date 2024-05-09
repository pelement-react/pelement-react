import './TypographySize.scss'

function TypographySize() {
  const fontSizes = [
    {
      level: 'Supplementary text',
      type: 'extra-small',
    },
    {
      level: 'Body (small)',
      type: 'small',
    },
    {
      level: 'Body',
      type: 'base',
    },
    {
      level: 'Small Title',
      type: 'medium',
    },
    {
      level: 'Title',
      type: 'large',
    },
    {
      level: 'Main Title',
      type: 'extra-large',
    },
  ]

  function getValue(value) {
    const elRef = window?.document?.documentElement
    return window.getComputedStyle(elRef).getPropertyValue(value)
  }

  return (
    <>
      <table className="demo-typo-size">
        <tbody>
          <tr>
            <td>Level</td>
            <td>Font Size</td>
            <td className="color-dark-light">Demo</td>
          </tr>
          {fontSizes.map((item, index) =>
            <tr
              key={index}
              style={{ fontSize: `var(--el-font-size-${item.type})` }}
            >
              <td>{item.level}</td>
              <td>
                {getValue(`--el-font-size-${item.type}`)}
              </td>
              <td>Build with Element</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default TypographySize