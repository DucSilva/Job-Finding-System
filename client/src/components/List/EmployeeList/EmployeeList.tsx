import React from "react";
import Card from "react-bootstrap/Card";
import BootstrapTable from "react-bootstrap-table-next";
import HTTP from "../../../services/request";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const EmployeeList: React.FC = () => {
  const getEmployee = () => {
    return JSON.parse(HTTP.httpGet(HTTP.SERVER + "employee/list"));
  };

  const options = {
    // pageStartIndex: 0,
    sizePerPage: 3,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true,
  };

  const columns = [
    {
      dataField: "employee_id",
      text: "ID",
    },
    {
      dataField: "name",
      text: "Name",
    },
    {
      dataField: "sex",
      text: "Sex",
    },
    {
      dataField: "age",
      text: "Age",
    },
    {
      dataField: "area",
      text: "Khu Vực",
    },
    {
      dataField: "address",
      text: "Địa chỉ",
    },
    {
      dataField: "job",
      text: "Ngành",
    },
    {
      dataField: "time",
      text: "Thời gian",
    },
    {
      dataField: "salary",
      text: "Lương mong muốn",
    },
    {
      dataField: "talent",
      text: "Điểm mạnh",
    },
    {
      dataField: "comment",
      text: "Ghi chú",
    },
    {
      dataField: "employee_id",
      text: "Action",
      formatter: (cellContent: any, row: any) => {
        let link = `/employee/info/${cellContent}`;
        return (
          <a className="btn btn-success" href={link}>
            Chi tiết
          </a>
        );
      },
    },
  ];

  return (
    <>
      <Card className="list" style={{ color: "#2665b8" }}>
        <Card.Header>
          <h5>
            <Row>
              <Col>
                <div className="mt-3">THỐNG KÊ TẤT CẢ CÁC ỨNG VIÊN</div>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <Button disabled className="btn btn-info mx-2 mt-2">
                  Người tìm việc
                </Button>
                <Link to="employer" className="btn btn-info mx-2 mt-2">
                  Nhà tuyển dụng
                </Link>
              </Col>
            </Row>
          </h5>
        </Card.Header>
        <Card.Body>
          <BootstrapTable
            keyField="id"
            data={getEmployee()}
            columns={columns}
            pagination={paginationFactory(options)}
          />
        </Card.Body>
      </Card>
    </>
  );
};
