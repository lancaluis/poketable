import Image from "next/image";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "#/components/ui/table";

interface IDataTableError {
  message: string;
}

export function DataTableError({ message }: IDataTableError) {
  return (
    <>
      <Table className="min-w-full overflow-hidden rounded-lg bg-white shadow-md">
        <TableHeader>
          <TableRow className="bg-yellow-400">
            <TableHead className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">
              Oh no!
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <div className="flex flex-col items-center justify-center gap-6 p-6">
            <Image
              src="/images/error.png"
              alt="Pokémon Logo"
              width={150}
              height={50}
            />
            <p>{message}</p>
          </div>
        </TableBody>
      </Table>
    </>
  );
}
