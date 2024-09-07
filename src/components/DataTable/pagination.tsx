"use client";

import { Button } from "#/components/ui/button";
import { type IPokemons } from "#/services/pokemon-api";

interface IDataTablePagination {
  data: IPokemons;
  page: number;
  setPage: (page: number) => void;
  setUrl: (url: string) => void;
}

export function DataTablePagination({
  data,
  setUrl,
  page,
  setPage,
}: IDataTablePagination) {
  const totalPages = Math.ceil(data?.count / 20);

  return (
    <div className="mt-4 flex items-center justify-between">
      <div className="text-sm text-gray-500">
        Page {page} of {totalPages}
      </div>
      <div className="space-x-2">
        <Button
          onClick={() => {
            setPage(page - 1);
            setUrl(data?.previous ?? "");
          }}
          disabled={!data?.previous}
        >
          Previous
        </Button>
        <Button
          onClick={() => {
            setPage(page + 1);
            setUrl(data?.next ?? "");
          }}
          disabled={!data?.next}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
