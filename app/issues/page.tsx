import React from "react";
import { Button, Table, TableColumnHeaderCell } from "@radix-ui/themes";
import Link from "next/link";
import prisma from "@/prisma/client";
const IssuesPage = () => {
  const issues = prisma.issue.findMany();

  return (
    <div>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <TableColumnHeaderCell>Issue</TableColumnHeaderCell>
            <TableColumnHeaderCell>Status</TableColumnHeaderCell>
            <TableColumnHeaderCell>Data</TableColumnHeaderCell>
          </Table.Row>
          <Table.Body>{issues}</Table.Body>
        </Table.Header>
      </Table.Root>
    </div>
  );
};

export default IssuesPage;
