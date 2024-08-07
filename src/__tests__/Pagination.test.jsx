import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Pagination from "../components/pagination/Pagination";

test('кнопка назад задизейблена, если находимся на первой странице', () => {
    render(
        <Pagination
            nav={{
            current: 1,
            total: 10,
        }}
        disable={{left: true, right: false }}
        onNextPageClick={jest.fn()}
        onPrevPageClick={jest.fn()} />
    )

    const prevButton = screen.getByTestId('prev-pagination-btn');
    expect(prevButton).toHaveProperty('disabled', true)
})

test('кнопка вперед задизейблена, если находимся на последней странице', () => {
    render(
        <Pagination
            nav={{
                current: 10,
                total: 10,
            }}
            disable={{left: false, right: true }}
            onNextPageClick={jest.fn()}
            onPrevPageClick={jest.fn()} />
    )

    const nextButton = screen.getByTestId('next-pagination-btn');
    expect(nextButton).toHaveProperty('disabled', true)
})
