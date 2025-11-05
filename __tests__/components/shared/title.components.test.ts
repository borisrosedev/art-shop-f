import { beforeAll, expect, test, describe } from 'vitest';
import { getByText } from '@testing-library/dom';
import simpleCardComponent from '../../../src/ts/ui/components/shared/title.components';
import titleComponent from '../../../src/ts/ui/components/shared/title.components';



describe('Title Shared Test Suite', () => {
    let app!: HTMLElement;
    beforeAll(() => {
        app = document.createElement('div');
        app.id = 'app'
        document.body.appendChild(app)
        app.insertAdjacentHTML('afterbegin', titleComponent({
            hType: 'h2', content: 'Art Shop'
        }));
    })

    test('should have an Art Shop title', () => {
        expect(getByText(app, 'Art Shop')).toBeTruthy();
    })
})