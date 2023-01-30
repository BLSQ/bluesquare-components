import { RefObject } from 'react';
import { useAccessDOMNode } from '../../utils/useAccessDOMNode';

const translationCorrection = 'translate(14px, 12px) scale(1)';
const initialTranslation = 'translate(14px, 20px) scale(1)';
const centerMultilineLabel = (labelRef: RefObject<HTMLLabelElement>) => {
    const labelElement = labelRef.current;
    const labelSpan = labelElement?.firstChild as HTMLElement;
    if (labelElement && labelSpan) {
        const isWrapped = labelSpan?.getClientRects().length >= 2;
        if (
            isWrapped &&
            labelElement.style.transform !== translationCorrection
        ) {
            // removing 8px of horizontal translation, ie theme.spacing(1)
            labelElement.style.transform = translationCorrection;
        }
        if (
            !isWrapped &&
            labelElement.style.transform === translationCorrection
        ) {
            labelElement.style.transform = initialTranslation;
        }
    }
};
export const useCenterMultilineLabel = () =>
    useAccessDOMNode<HTMLLabelElement>(centerMultilineLabel);
