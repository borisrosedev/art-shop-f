import simpleCardComponent from '../../../src/ts/ui/components/card/simple-card.components';
import { beforeAll, expect, test, describe } from 'vitest';
import {
  getByText,
} from '@testing-library/dom';


describe('Simple Card Test Suite', () => {
    let app!: HTMLElement 
    beforeAll(() => {
        app = document.createElement('div')
        app.id = 'app'
        document.body.appendChild(app)
        app.innerHTML += simpleCardComponent({
            ariaLabel: 'test card',
            text: 'Lorem ipsum',
            classNames: 'test-card'
        })
    })

    test('should contain the text Lorem ipsum', () => {
        expect(getByText(app, /^Lorem ipsum$/)).toBeTruthy()
    })

})