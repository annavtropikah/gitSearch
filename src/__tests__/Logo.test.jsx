import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from "../components/header/Header";

describe("Компонент header", () => {
    it("Должен отрендерить картинку с логотипом кубик рубика", () => {
        render(<Header />);
        const image = screen.getByAltText("логотип кубик рубика");
        expect(image).toBeInTheDocument()
    })
})
 