import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Table = styled.table`
  margin: 8px auto;
  border: 1px solid black;
  border-spacing: 1px;
  border-color: grey;
  width: 100%;
`;

const TableRow = styled.tr`
  font-size: 18px;
`;

const TableBody = styled.tbody`
  background: #F4F4F4;
`;

const TableData = styled.td`
  margin: 20px;
  padding: 8px;
`;

const TableHeader = styled.th`
  background: lightgrey;
  font-size: 22px;
  padding: 6px;
`;

const NoRecordHeading = styled.h3`
  font-weight: 300;
`

export default (props) => (
  <>
    {
      props.records && props.records.length ? (
        <Table>
          <TableBody>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Phone</TableHeader>
              <TableHeader>Action</TableHeader>
            </TableRow>
            {props.records.map((record, i) => (
              <TableRow key={i}>
                <TableData>{ record.name }</TableData>
                <TableData>{ record.phone }</TableData>
                <TableData>
                  <Button deleteButton onClick={() => props.onDelete(i)}>
                    Delete
                  </Button>
                </TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : <NoRecordHeading>No Records Found!</NoRecordHeading>
    }
  </>
);