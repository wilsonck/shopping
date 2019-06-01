import { getClassesToApply } from './Classes';

describe('Classes helper', () => {
    it('> "getClassesToApply" should work propertly', () => {
        expect(getClassesToApply('hi')).toBe('hi');
        expect(getClassesToApply('hello', 'world')).toBe('hello world');
        expect(getClassesToApply('number', 1)).toBe('number 1');
        expect(getClassesToApply('You', 'know', ['nothing'], [['John']], 'Snow')).toBe('You know nothing John Snow');
        expect(getClassesToApply({'not':'work'})).toBe('[object Object]');
        expect(getClassesToApply(undefined)).toBe('');
    })
})