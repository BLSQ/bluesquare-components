import React from 'react';

import { ExternalLink } from '../../Routing/ExternalLink';
import { ExternalLinkIconButton } from '../../Routing/ExternalLinkIconButton';
import { LinkButton } from '../../Routing/LinkButton';
import { LinkWithLocation } from '../../Routing/LinkWithLocation';
import { CsvSvg } from '../../svg/CsvSvgComponent';
import { DHIS2Svg } from '../../svg/DHIS2SvgComponent';
import { ExcellSvg } from '../../svg/ExcellSvgComponent';
import { OrgUnitSvg } from '../../svg/OrgUnitSvgComponent';
import { PdfSvg } from '../../svg/PdfSvgComponent';
import { ShapeSvg } from '../../svg/ShapeSvgComponent';
import { TextSvg } from '../../svg/TextSvgComponent';
import { WordSvg } from '../../svg/WordSvgComponent';
import { XmlSvg } from '../../svg/XmlSvgComponent';
import { intlMsg } from '../../tests/fixtures';
import { renderWithProviders } from '../../tests/helpers';

describe('routing and svg components', () => {
    it('renders ExternalLink', () => {
        const { getByText } = renderWithProviders(
            <ExternalLink url="https://example.com">
                <span>Example</span>
            </ExternalLink>,
        );
        expect(getByText('Example')).toBeInTheDocument();
    });

    it('renders ExternalLinkIconButton', () => {
        const { getByRole } = renderWithProviders(
            <ExternalLinkIconButton
                url="https://example.com"
                tooltipMessage={intlMsg('test.open', 'Open link')}
                icon="globe"
            />,
        );
        expect(getByRole('button')).toBeInTheDocument();
    });

    it('renders LinkButton', () => {
        const { getByRole } = renderWithProviders(
            <LinkButton to="/home">Home</LinkButton>,
        );
        expect(getByRole('link', { name: 'Home' })).toBeInTheDocument();
    });

    it('renders LinkWithLocation', () => {
        const { getByRole } = renderWithProviders(
            <LinkWithLocation to="/settings">Settings</LinkWithLocation>,
        );
        expect(getByRole('link', { name: 'Settings' })).toBeInTheDocument();
    });

    it.each([
        ['CsvSvg', CsvSvg],
        ['DHIS2Svg', DHIS2Svg],
        ['ExcellSvg', ExcellSvg],
        ['OrgUnitSvg', OrgUnitSvg],
        ['PdfSvg', PdfSvg],
        ['ShapeSvg', ShapeSvg],
        ['TextSvg', TextSvg],
        ['WordSvg', WordSvg],
        ['XmlSvg', XmlSvg],
    ])('renders %s', (_name, SvgComponent) => {
        const { container } = renderWithProviders(<SvgComponent />);
        expect(container.querySelector('svg')).toBeInTheDocument();
    });
});
