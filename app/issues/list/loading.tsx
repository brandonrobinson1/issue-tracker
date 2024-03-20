import { Table, TableColumnHeaderCell, TableRow } from "@radix-ui/themes";
import React from "react";
import { Skeleton } from "@/app/components";
import IssueActions from "./IssueActions";

const LoadingIssuesPage = () => {
  const issues: number[] = [1, 2, 3, 4, 5];
  return (
    <>
      <IssueActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <TableColumnHeaderCell>Issue</TableColumnHeaderCell>
            <TableColumnHeaderCell>Status</TableColumnHeaderCell>
            <TableColumnHeaderCell>Data</TableColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <TableRow key={issue}>
              <Table.Cell>
                <Skeleton />{" "}
              </Table.Cell>
              <Table.Cell>
                <Skeleton />{" "}
              </Table.Cell>
              <Table.Cell>
                <Skeleton />
              </Table.Cell>
            </TableRow>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default LoadingIssuesPage;
