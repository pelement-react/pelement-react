import Version_0_0_1_alpha_0 from './0.0.1-alpha.0.zh-CN.mdx'
import Version_0_0_1_alpha_1 from './0.0.1-alpha.1.zh-CN.mdx'
import Version_0_0_1_alpha_2 from './0.0.1-alpha.2.zh-CN.mdx'
import Version_0_0_1_alpha_3 from './0.0.1-alpha.3.zh-CN.mdx'
import Version_0_0_1_alpha_4 from './0.0.1-alpha.4.zh-CN.mdx'
import Version_0_0_1_alpha_5 from './0.0.1-alpha.5.zh-CN.mdx'
import Version_0_0_1_alpha_6 from './0.0.1-alpha.6.zh-CN.mdx'
import Version_0_0_1_alpha_7 from './0.0.1-alpha.7.zh-CN.mdx'
import Version_0_0_1_alpha_8 from './0.0.1-alpha.8.zh-CN.mdx'
import Version_0_0_1_alpha_9 from './0.0.1-alpha.9.zh-CN.mdx'
import Version_0_0_1_alpha_10 from './0.0.1-alpha.10.zh-CN.mdx'
import Version_0_0_1_alpha_11 from './0.0.1-alpha.11.zh-CN.mdx'
import Version_0_0_1_alpha_12 from './0.0.1-alpha.12.zh-CN.mdx'
import Version_0_0_1_alpha_13 from './0.0.1-alpha.13.zh-CN.mdx'
import Version_0_0_1_alpha_14 from './0.0.1-alpha.14.zh-CN.mdx'
import Version_0_0_1_alpha_15 from './0.0.1-alpha.15.zh-CN.mdx'
import Version_0_0_1_alpha_16 from './0.0.1-alpha.16.zh-CN.mdx'
import Version_0_0_1_alpha_17 from './0.0.1-alpha.17.zh-CN.mdx'
import Version_0_0_1_alpha_18 from './0.0.1-alpha.18.zh-CN.mdx'
import './Changelogs.scss'

function Changelogs() {
  const versionList = [
    {
      by: 'llkui',
      link: 'https://github.com/pelement-react/pelement-react/releases/tag/0.0.1-alpha.18',
      content: <Version_0_0_1_alpha_18 />
    },
    {
      by: 'llkui',
      link: 'https://github.com/pelement-react/pelement-react/releases/tag/0.0.1-alpha.17',
      content: <Version_0_0_1_alpha_17 />
    },
    {
      by: 'llkui',
      link: 'https://github.com/pelement-react/pelement-react/releases/tag/0.0.1-alpha.16',
      content: <Version_0_0_1_alpha_16 />
    },
    {
      by: 'llkui',
      link: 'https://github.com/pelement-react/pelement-react/releases/tag/0.0.1-alpha.15',
      content: <Version_0_0_1_alpha_15 />
    },
    {
      by: 'llkui',
      link: 'https://github.com/pelement-react/pelement-react/releases/tag/0.0.1-alpha.14',
      content: <Version_0_0_1_alpha_14 />
    },
    {
      by: 'llkui',
      link: 'https://github.com/pelement-react/pelement-react/releases/tag/0.0.1-alpha.13',
      content: <Version_0_0_1_alpha_13 />
    },
    {
      by: 'llkui',
      link: 'https://github.com/pelement-react/pelement-react/releases/tag/0.0.1-alpha.12',
      content: <Version_0_0_1_alpha_12 />
    },
    {
      by: 'llkui',
      link: 'https://github.com/pelement-react/pelement-react/releases/tag/0.0.1-alpha.11',
      content: <Version_0_0_1_alpha_11 />
    },
    {
      by: 'llkui',
      link: 'https://github.com/pelement-react/pelement-react/releases/tag/0.0.1-alpha.10',
      content: <Version_0_0_1_alpha_10 />
    },
    {
      by: 'llkui',
      link: 'https://github.com/pelement-react/pelement-react/releases/tag/0.0.1-alpha.9',
      content: <Version_0_0_1_alpha_9 />
    },
    {
      by: 'llkui',
      link: 'https://github.com/pelement-react/pelement-react/releases/tag/0.0.1-alpha.8',
      content: <Version_0_0_1_alpha_8 />
    },
    {
      by: 'llkui',
      link: 'https://github.com/pelement-react/pelement-react/releases/tag/0.0.1-alpha.7',
      content: <Version_0_0_1_alpha_7 />
    },
    {
      by: 'llkui',
      link: 'https://github.com/pelement-react/pelement-react/releases/tag/0.0.1-alpha.6',
      content: <Version_0_0_1_alpha_6 />
    },
    {
      by: 'llkui',
      link: 'https://github.com/pelement-react/pelement-react/releases/tag/0.0.1-alpha.5',
      content: <Version_0_0_1_alpha_5 />
    },
    {
      by: 'llkui',
      link: 'https://github.com/pelement-react/pelement-react/releases/tag/0.0.1-alpha.4',
      content: <Version_0_0_1_alpha_4 />
    },
    {
      by: 'llkui',
      link: 'https://github.com/pelement-react/pelement-react/releases/tag/0.0.1-alpha.3',
      content: <Version_0_0_1_alpha_3 />
    },
    {
      by: 'llkui',
      link: 'https://github.com/pelement-react/pelement-react/releases/tag/0.0.1-alpha.2',
      content: <Version_0_0_1_alpha_2 />
    },
    {
      by: 'llkui',
      link: 'https://github.com/pelement-react/pelement-react/releases/tag/0.0.1-alpha.1',
      content: <Version_0_0_1_alpha_1 />
    },
    {
      by: 'llkui',
      link: 'https://github.com/pelement-react/pelement-react/releases/tag/0.0.1-alpha.0',
      content: <Version_0_0_1_alpha_0 />
    },
  ];

  return (
    <>
      <div className="changelogs">
        {versionList.map((version, index) =>
          <div key={index} className="el-card is-always-shadow">
            <div className="el-card__header">
              <div className="changelog-header">
                <div className="changelog-meta">
                  <p className="changelog-by">发布者 <strong>{version.by}</strong></p>
                </div>
                <div className="operators">
                  <a className="link-item link" href={version.link} target="_blank" rel="noopener noreferrer">
                    打开链接
                    <i className="el-icon">
                      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" className="link-icon">
                        <path fill="currentColor" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3h8z"></path>
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="el-card__body">
              <div>
                <div className="markdown-wrapper">
                  {version.content}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Changelogs