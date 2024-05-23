import './BorderShadow.scss'

function BorderShadow() {
  const shadowGroup = [
    {
      name: 'Basic Shadow',
      type: '',
    },
    {
      name: 'Light Shadow',
      type: 'light',
    },
    {
      name: 'Lighter Shadow',
      type: 'lighter',
    },
    {
      name: 'Dark Shadow',
      type: 'dark',
    },
  ]
  const getCssVarName = (type: string) => {
    return `--el-box-shadow${type ? '-' : ''}${type}`
  }

  return (
    <>
      <div className="border-shadow">
        <div className="flex justify-between items-center flex-wrap">
          {shadowGroup.map((item, index) =>
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <div
                className="inline-flex"
                style={{
                  boxShadow: `var(${getCssVarName(item.type)})`,
                }}
              ></div>
              <span className="demo-shadow-text">
                {item.name}
              </span>
              <code className="xs">
                {getCssVarName(item.type)}
              </code>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default BorderShadow