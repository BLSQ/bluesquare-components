import React, { FunctionComponent } from 'react';
import { PageRowSelect } from '../table/Table/PageRowSelect';

const ROWS_PER_PAGE_OPTIONS = [5, 10, 20, 30, 40, 50];

type Props = {
    countOptions?: number[];
    resultsCount?: number;
    handleSelect?: (newResultCount: any) => void;
};

export const TreeViewResultsCountSelect: FunctionComponent<Props> = ({
    resultsCount = ROWS_PER_PAGE_OPTIONS[2],
    handleSelect = () => null,
    countOptions = ROWS_PER_PAGE_OPTIONS,
}) => (
    <PageRowSelect
        rowsPerPageOptions={countOptions}
        rowsPerPage={resultsCount}
        selectRowsPerPage={handleSelect}
    />
);
