import assert from 'assert';
import { substituteVars } from './index';

describe('substituteVars', () => {
    it('should substitute values in an object', () => {
        const templateObj = {
            foo: 11,
            bar: '${a}', // eslint-disable-line
            baz: {
                x: '${y}', // eslint-disable-line
            },
        };
        const subs = {
            a: 22,
            y: 'hello',
        };
        const expectedObj = {
            foo: 11,
            bar: 22,
            baz: {
                x: 'hello',
            },
        };
        const newObj = substituteVars(templateObj, subs);
        assert(newObj.foo === expectedObj.foo);
        assert(newObj.bar === expectedObj.bar);
        assert(newObj.baz.x === expectedObj.baz.x);
        assert(newObj !== templateObj);
    });
});
