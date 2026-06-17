import React from 'react';

import { ArrayFieldInput } from '../../components/inputs/ArrayFieldInput';
import { AsyncSelect } from '../../components/inputs/AsyncSelect/AsyncSelect';
import { Checkbox } from '../../components/inputs/Checkbox';
import { CheckBoxFilterItem } from '../../components/inputs/CheckBoxSelectGroup/CheckBoxFilterItem';
import { CheckBoxSelectGroup } from '../../components/inputs/CheckBoxSelectGroup/CheckBoxSelectGroup';
import { CustomInput } from '../../components/inputs/CustomInput/CustomInput';
import { FakeInput } from '../../components/inputs/FakeInput';
import { FilesUpload } from '../../components/inputs/FileUpload/FilesUpload';
import { FilesUploadContainer } from '../../components/inputs/FileUpload/FilesUploadContainer';
import { FormControl } from '../../components/inputs/FormControl';
import { InputLabel } from '../../components/inputs/InputLabel';
import { InputWithInfos } from '../../components/inputs/InputWithInfos/InputWithInfos';
import { NumberInput } from '../../components/inputs/NumberInput';
import { PasswordInput } from '../../components/inputs/PasswordInput';
import { PhoneInput } from '../../components/inputs/PhoneInput/PhoneInput';
import { Radio } from '../../components/inputs/Radio';
import { SearchInput } from '../../components/inputs/SearchInput';
import {
    Select,
    baseRenderTagsWithTooltip,
    renderTags,
    renderTagsWithTooltip,
} from '../../components/inputs/Select';
import { TextArea } from '../../components/inputs/TextArea/TextArea';
import { TextInput } from '../../components/inputs/TextInput';
import { intlMsg, noop } from '../../tests/fixtures';
import { renderWithProviders } from '../../tests/helpers';

const filterState = {
    filters: {},
    handleSearch: noop,
    handleChange: noop,
    filtersUpdated: false,
    setFiltersUpdated: noop,
    setFilters: noop,
};

const tagValue = [{ label: 'Tag', value: '1', color: '#cccccc' }];
const getTagProps = ({ index }: { index: number }) => ({ key: index });

describe('inputs', () => {
    it('renders Checkbox', () => {
        const { container } = renderWithProviders(
            <Checkbox keyValue="test-checkbox" />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders TextInput', () => {
        const { container } = renderWithProviders(
            <TextInput keyValue="test-text" />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders Select', () => {
        const { container } = renderWithProviders(
            <Select keyValue="test-select" onChange={noop} />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders FormControl', () => {
        const { getByText } = renderWithProviders(
            <FormControl>
                <span>child</span>
            </FormControl>,
        );
        expect(getByText('child')).toBeInTheDocument();
    });

    it('renders NumberInput', () => {
        const { container } = renderWithProviders(
            <NumberInput keyValue="test-number" onChange={noop} />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders Radio', () => {
        const { container } = renderWithProviders(<Radio name="test-radio" />);
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders SearchInput', () => {
        const { container } = renderWithProviders(
            <SearchInput
                label="Search"
                keyValue="test-search"
                value=""
                onChange={noop}
                onEnterPressed={noop}
            />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders TextArea', () => {
        const { container } = renderWithProviders(
            <TextArea label="Notes" onChange={noop} />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders PasswordInput', () => {
        const { container } = renderWithProviders(
            <PasswordInput keyValue="test-password" />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders PhoneInput', () => {
        const { container } = renderWithProviders(
            <PhoneInput onChange={noop} />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders FakeInput', () => {
        const { getByText } = renderWithProviders(
            <FakeInput
                label="Fake"
                value="value"
                onClick={noop}
                onClear={noop}
            />,
        );
        expect(getByText('value')).toBeInTheDocument();
    });

    it('renders CustomInput', () => {
        const { container } = renderWithProviders(
            <CustomInput placeholder="Custom" />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders AsyncSelect', () => {
        const { container } = renderWithProviders(
            <AsyncSelect
                keyValue="test-async"
                value=""
                label={intlMsg('test.async', 'Async')}
                onChange={noop}
                fetchOptions={async () => []}
            />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders ArrayFieldInput', () => {
        const { container } = renderWithProviders(
            <ArrayFieldInput baseId="test-array" updateList={noop} />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders InputLabel', () => {
        const { getByText } = renderWithProviders(
            <InputLabel htmlFor="test-input" label="Label" required={false} />,
        );
        expect(getByText('Label')).toBeInTheDocument();
    });

    it('renders InputWithInfos', () => {
        const { getByText } = renderWithProviders(
            <InputWithInfos infos="More info">
                <span>input</span>
            </InputWithInfos>,
        );
        expect(getByText('input')).toBeInTheDocument();
    });

    it('renders CheckBoxFilterItem', () => {
        const { container } = renderWithProviders(
            <CheckBoxFilterItem
                keyValue="status"
                initialValue={false}
                option={{ label: 'Active', value: 1 }}
                filterState={filterState}
            />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders CheckBoxSelectGroup', () => {
        const { getByText } = renderWithProviders(
            <CheckBoxSelectGroup
                keyValue="status"
                filterState={filterState}
                options={[{ label: 'Active', value: 1 }]}
            />,
        );
        expect(getByText('Active')).toBeInTheDocument();
    });

    it('renders FilesUpload', () => {
        const { container } = renderWithProviders(
            <FilesUpload files={[]} onFilesSelect={noop} />,
        );
        expect(container).not.toBeEmptyDOMElement();
    });

    it('renders FilesUploadContainer', () => {
        const { getByText } = renderWithProviders(
            <FilesUploadContainer files={[]} onFilesSelect={noop}>
                <span>upload area</span>
            </FilesUploadContainer>,
        );
        expect(getByText('upload area')).toBeInTheDocument();
    });

    it('renders baseRenderTagsWithTooltip', () => {
        const renderFn = baseRenderTagsWithTooltip(
            (option: { label: string }) => option.label,
        )((option: { label: string }) => option.label);
        const { getByText } = renderWithProviders(
            <>{renderFn(tagValue, getTagProps)}</>,
        );
        expect(getByText('Tag')).toBeInTheDocument();
    });

    it('renders renderTags', () => {
        const renderFn = renderTags(
            (option: { label: string }) => option.label,
        );
        const { getByText } = renderWithProviders(
            <>{renderFn(tagValue, getTagProps)}</>,
        );
        expect(getByText('Tag')).toBeInTheDocument();
    });

    it('renders renderTagsWithTooltip', () => {
        const renderFn = renderTagsWithTooltip(
            (option: { label: string }) => option.label,
        );
        const { getByText } = renderWithProviders(
            <>{renderFn(tagValue, getTagProps)}</>,
        );
        expect(getByText('Tag')).toBeInTheDocument();
    });
});
