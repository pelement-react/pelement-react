import { useEffect, useState } from 'react'
import axios from 'axios'
import './Contributor.scss'

export interface ContributorInfo {
  name: string
  avatar_url: string
  html_url: string
  /**
   * 提交次数
   */
  num: number
}

function Contributor(props) {
  const { path } = props
  const [data, setData] = useState<Array<ContributorInfo>>([])
  useEffect(() => {
    axios.get(`https://api.github.com/repos/pelement-react/pelement-react/commits?path=${path}`)
      .then(response => {
        const results = response.data?.map((item: any) => {
          return {
            name: item.author?.login,
            avatar_url: item.author?.avatar_url,
            html_url: item.author?.html_url,
            num: 1
          }
        }).filter((item: ContributorInfo) => item.name) // 去掉author不存在的记录

        // 统计贡献者的提交次数
        let resultNums: Array<ContributorInfo> = []
        results.forEach((result: ContributorInfo) => {
          const resultNum = resultNums.find((num: ContributorInfo) => num.name === result.name)
          if (resultNum) {
            resultNum.num++
          } else {
            resultNums.push(result)
          }
        })

        // 提交次数从大到小、提交时间正序排序
        resultNums = resultNums.reverse().sort((a: ContributorInfo, b: ContributorInfo) => a.num - b.num >= 0 ? -1 : 1)

        setData(resultNums)
      })
      .catch(error => {
        console.error('Error fetching data: ', error)
      })
  }, [])

  return (
    <>
      <ul className="contributor-section">
        {data.map((item: ContributorInfo, index: number) =>
          <li key={index} className="contributor-item">
            <a href={item.html_url} target="_blank" rel="noopener noreferrer">
              <img src={item.avatar_url + '&size=64'} loading="lazy" alt={item.name} />
              {item.name}
            </a>
          </li>
        )}
      </ul>
    </>
  )
}

export default Contributor