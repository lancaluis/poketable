import { Skeleton } from "#/components/ui/skeleton";
import { TableCell, TableRow } from "#/components/ui/table";

export function DataTableSkeleton() {
  return Array.from({ length: 20 }).map((_, idx) => (
    <TableRow
      key={idx}
      className="animate-pulse odd:bg-blue-100 even:bg-blue-50 hover:bg-blue-200"
    >
      <TableCell className="px-6 py-1">
        <Skeleton className="h-[20px] w-[100px] rounded" />
      </TableCell>
      <TableCell className="px-6 py-2">
        <Skeleton className="h-[40px] w-[40px] rounded-full" />
      </TableCell>
      <TableCell className="px-6 py-1">
        <Skeleton className="h-[20px] w-[150px] rounded" />
      </TableCell>
    </TableRow>
  ));
}
