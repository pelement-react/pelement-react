import { Table } from 'pelement-react'

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

export default TableBorder