import { TableProps } from '@/interfaces/Table.interface';
import React from 'react';
import * as S from './styles';

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
              if (column.field === 'schedule') {
                const date = new Date(row[column.field] as string);

                const day =
                  date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
                const month =
                  date.getMonth() < 10
                    ? `0${date.getMonth() + 1}`
                    : date.getMonth() + 1;
                const year = date.getFullYear();

                const hour =
                  date.getHours() < 10
                    ? `0${date.getHours()}`
                    : date.getHours();
                const minutes =
                  date.getMinutes() < 10
                    ? `0${date.getMinutes()}`
                    : date.getMinutes();

                return (
                  <S.TableRowItem key={index}>
                    {`${day}/${month}/${year} ${hour}:${minutes}`}
                  </S.TableRowItem>
                );
              }

              const checkIfValueExists =
                row[column.field] === 0 || row[column.field];

              return (
                <S.TableRowItem
                  key={index}
                  style={{
                    width: column.field === 'actions' ? '80px' : undefined,
                  }}
                >
                  {checkIfValueExists ? row[column.field] : '-'}
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
