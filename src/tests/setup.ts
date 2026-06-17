import '@testing-library/jest-dom';
import React from 'react';
import { vi } from 'vitest';

vi.mock('react-phone-input-material-ui/lib/style.css', () => ({}));

const { MockSvg } = vi.hoisted(() => ({
    MockSvg: (props: React.SVGProps<SVGSVGElement>) =>
        React.createElement('svg', props),
}));

vi.mock('../svg/CsvSvgComponent.js', () => ({ CsvSvg: MockSvg }));
vi.mock('../svg/DHIS2SvgComponent.js', () => ({ DHIS2Svg: MockSvg }));
vi.mock('../svg/ExcellSvgComponent.js', () => ({ ExcellSvg: MockSvg }));
vi.mock('../svg/OrgUnitSvgComponent.js', () => ({ OrgUnitSvg: MockSvg }));
vi.mock('../svg/PdfSvgComponent.js', () => ({ PdfSvg: MockSvg }));
vi.mock('../svg/ShapeSvgComponent.js', () => ({ ShapeSvg: MockSvg }));
vi.mock('../svg/TextSvgComponent.js', () => ({ TextSvg: MockSvg }));
vi.mock('../svg/WordSvgComponent.js', () => ({ WordSvg: MockSvg }));
vi.mock('../svg/XmlSvgComponent.js', () => ({ XmlSvg: MockSvg }));

const observe = vi.fn();
const unobserve = vi.fn();
const disconnect = vi.fn();

class ResizeObserverMock {
    observe = observe;

    unobserve = unobserve;

    disconnect = disconnect;
}

vi.stubGlobal('ResizeObserver', ResizeObserverMock);
