import { render, screen } from '@testing-library/react';
import { BaseCard } from ".";

jest.mock("@mui/material/", () => ({
    ...jest.requireActual("@mui/material/")
}))

jest.mock('next/router', () => ({
    useRouter: jest.fn()
}))
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const pushMock = jest.fn();

describe('BaseCard Component', () => {
    beforeEach(() => {
        render(<BaseCard title="Typescript" description="" image="" textImage="" route="" />)
        
    })
    it('should render title, description, image, imageText', () => {
        useRouter.mockReturnValue({
            query: {},
            push: pushMock,
        })
        const image = screen.getByTestId("card-image");
    })

    // it('should redirect to route', () => {

    // })

})