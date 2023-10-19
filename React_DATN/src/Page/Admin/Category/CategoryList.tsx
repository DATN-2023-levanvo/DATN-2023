import React, { useState } from "react"
import { Button, Table, Popconfirm, message, Input } from "antd"
import { Link } from "react-router-dom"
import { ICategory } from "../../../Models/interfaces"
import Loading from "../../../Component/Loading"
import { useGetAllCategoryQuery, useRemoveCategoryMutation } from "../../../Services/Api_Category"

const CategoryList = () => {
  const { Search } = Input
  const [searchQuery, setSearchQuery] = useState<string>("")

  const [selectedCategoryIds, setSelectedCategoryIds] = useState<React.Key[]>([])
  const [loading, setLoading] = useState(false)

  const { data, isLoading, error } = useGetAllCategoryQuery(undefined)
  const [removeCategory] = useRemoveCategoryMutation()

  if (isLoading) return <Loading />
  if (error) return <div>Error...</div>

  if (!data || !Array.isArray(data)) {
    return <div>No data available.</div>
  }

  const dataSource = data?.map((item: ICategory, index) => ({
    index: index + 1,
    key: item._id,
    name: item.name,
  }))

  const handleSearch = (value: string) => {
    // Update the search query state when the user types in the search bar
    setSearchQuery(value)
  }

  const filteredData = dataSource.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const columns = [
    {
      title: "STT",
      dataIndex: "index",
    },
    {
      title: "category",
      dataIndex: "name",
      render: (text: string) => (
        <Link to={`/admin/product/list`}>
          <p style={{}}>{text}</p>
        </Link>
      ),
    },
    
    {
      title: "Hành Động",
      key: "action",
      render: (category: any) => {
        return (
          <>
            <Popconfirm
              title="Xoá category"
              description="Bạn có chắc muốn xoá category này không?"
              onConfirm={() => {
                removeCategory(category.key)
                message.error("Remove success")
              }}
              okText={<span style={{ color: "black" }}>Yes</span>}
              cancelText="No"
            >
              <Button danger>Xoá</Button>
            </Popconfirm>
            <Link to={`/admin/category/${category.key}/update`}>
              <Button type="dashed" style={{ margin: "0 0 0 8px" }}>
                Cập Nhật
              </Button>
            </Link>
          </>
        )
      },
    },
  ]
 
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys)
    setSelectedCategoryIds(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys: selectedCategoryIds,
    onChange: onSelectChange,
  }

  const handleBatchDelete = () => {
    if (selectedCategoryIds.length === 0) {
      message.warning("Vui lòng chọn các category muốn xoá!")
      return
    }

    setLoading(true)

    Promise.all(selectedCategoryIds.map((categoryId) => removeCategory(categoryId)))
      .then(() => {
        message.success("Xóa category thành công")
        setTimeout(() => {
          window.location.href = 'http://localhost:5173/admin/category/list'
        }, 2000);
      })
      .catch(() => {
        message.error("Xóa category thất bại. xin thử lại")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          onClick={handleBatchDelete}
          loading={loading}
          danger
        >
          Xoá Nhiều category
        </Button>
        <Link to={`/admin/category/add`}>
          <Button style={{ margin: "0 0 0 8px" }}>Tạo category Mới</Button>
        </Link>
        <Input
          placeholder="Tìm kiếm danh mục"
          onChange={(e) => handleSearch(e.target.value)} // Use the onChange event to trigger real-time filtering
          style={{ width: 280, marginLeft: 8 }}
        />
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={filteredData}
        tableLayout="fixed"
      />
    </div>
  )
}

export default CategoryList
