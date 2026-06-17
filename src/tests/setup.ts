import '@testing-library/jest-dom';
import { vi } from 'vitest';

const observe = vi.fn();
const unobserve = vi.fn();
const disconnect = vi.fn();

class ResizeObserverMock {
    observe = observe;

    unobserve = unobserve;

    disconnect = disconnect;
}

vi.stubGlobal('ResizeObserver', ResizeObserverMock);
