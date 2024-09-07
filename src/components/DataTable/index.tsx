"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import { getPokemons } from "#/services/pokemon-api";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "#/components/ui/table";

import { DataTableSkeleton } from "./skeleton";
import { DataTableError } from "./error";
import { useState } from "react";
import { DataTablePagination } from "./pagination";

export default function DataTable() {
  const [page, setPage] = useState(1);

  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
  );

  const { data, error, isLoading } = useQuery({
    queryKey: ["pokemons", url],
    queryFn: () => getPokemons(url),
  });

  if (error)
    return (
      <div className="mx-auto w-full max-w-4xl">
        <DataTableError message={error?.message} />
      </div>
    );

  return (
    <div className="mx-auto w-full max-w-4xl">
      <Table className="min-w-full rounded-lg bg-white shadow-md">
        <TableHeader>
          <TableRow className="bg-yellow-400">
            <TableHead className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Name
            </TableHead>
            <TableHead className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Image
            </TableHead>
            <TableHead className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Types
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <DataTableSkeleton />
          ) : (
            data?.details?.map((details) => (
              <TableRow
                key={details.name}
                className="odd:bg-blue-100 even:bg-blue-50 hover:bg-blue-200"
              >
                <TableCell className="px-6 py-1 text-sm font-medium capitalize text-gray-900">
                  {details.name}
                </TableCell>
                <TableCell className="px-6 py-1 text-sm font-medium text-gray-900">
                  <Image
                    src={details.sprites.front_default}
                    alt={details.name}
                    width={60}
                    height={60}
                  />
                </TableCell>
                <TableCell className="px-5 py-1 text-sm font-medium text-gray-900">
                  {details.types.map((type) => (
                    <span
                      key={type.slot}
                      className="mx-1 rounded bg-white px-3 py-1 text-sm"
                    >
                      {type.type.name}
                    </span>
                  ))}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      {data?.details && (
        <DataTablePagination
          data={data}
          setUrl={setUrl}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
}
