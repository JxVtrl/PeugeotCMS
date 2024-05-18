import { TableProps } from "@/interfaces/Table.interface";
import React from "react";
import * as S from "./styles";

const Table: React.FC<TableProps> = ({ columns, rows }) => {
  return (
    <S.Table>
      <S.TableHeader>
        <S.TableRow>
          {columns?.map((column, index) => (
            <S.TableHeaderItem key={index}>{column.title}</S.TableHeaderItem>
          ))}
        </S.TableRow>
      </S.TableHeader>
      <S.TableBody>
        {rows?.map((row, index) => (
          <S.TableRow key={index}>
            {columns?.map((column, index) => {
              return (
                <S.TableRowItem key={index}>
                  {row[column.field] || "N/A"}
                </S.TableRowItem>
              );
            })}
          </S.TableRow>
        ))}
      </S.TableBody>
    </S.Table>
  );
};

export default Table;
