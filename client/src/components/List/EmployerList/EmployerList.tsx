import React from "react";

import Card from "react-bootstrap/Card";
import BootstrapTable from "react-bootstrap-table-next";
import HTTP from "../../../services/request";

export const EmployerList: React.FC = () => {
  const getEmployer = () => {
    return JSON.parse(HTTP.httpGet(HTTP.SERVER + "employer/list"));
  };

  const columns = [
    {
      dataField: "employer_id",
      text: "ID",
    },
    {
      dataField: "name",
      text: "Name",
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
      dataField: "job_detail",
      text: "Cụ thể",
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
      dataField: "request",
      text: "Yêu cầu",
    },
    {
      dataField: "contact",
      text: "Liên hệ",
    },
    {
      dataField: "comment",
      text: "Ghi chú",
    },
    {
      dataField: "employer_id",
      text: "Action",
      formatter: (cellContent: any, row: any) => {
        let link = `/employer/info/${cellContent}`;
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
      <Card className="listE" style={{ color: "#2665b8" }}>
        <Card.Header>
          <strong>
            <h5>
              <b>EmployeeList</b>
            </h5>
          </strong>
        </Card.Header>
        <Card.Body>
          <BootstrapTable
            keyField="id"
            data={getEmployer()}
            columns={columns}
          />
        </Card.Body>
      </Card>
    </>
  );
};