import { IssuesStatusBadge } from "@/app/components";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Table, TableColumnHeaderCell, TableRow } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import NextLink from "next/link";
import { Issue, Status } from "@prisma/client";

export interface IssueQuery {
  status: Status;
  orderBy: keyof Issue;
  page: string;
}

interface Props {
  searchParams: IssueQuery;
  issues: Issue[];
}

const IssueTable = ({ searchParams, issues }: Props) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <TableColumnHeaderCell
              className={column.className}
              key={column.value}
            >
              <NextLink
                href={{ query: { ...searchParams, orderBy: column.value } }}
              >
                {column.label}
              </NextLink>
              {column.value === searchParams.orderBy && (
                <ArrowUpIcon className="inline" />
              )}
            </TableColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues.map((issue) => (
          <TableRow key={issue.id}>
            <Table.Cell>
              <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
              <div className="block md:hidden">
                <IssuesStatusBadge status={issue.status} issueId={issue.id} />
              </div>
            </Table.Cell>

            <Table.Cell className="hidden md:table-cell">
              <IssuesStatusBadge issueId={issue.id} status={issue.status} />
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              {issue.createdAt.toDateString()}
            </Table.Cell>
          </TableRow>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
const columns: {
  label: string;
  value: keyof Issue;
  className?: string;
}[] = [
  { label: "Issue", value: "title" },
  { label: "Status", value: "status", className: "hidden md:table-cell" },
  {
    label: "Created",
    value: "createdAt",
    className: "hidden md:table-cell",
  },
];
export const columnNames = columns.map((column) => column.value);

export default IssueTable;
