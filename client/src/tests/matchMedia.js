/* eslint-disable no-undef */
export const matchMedia = global.matchMedia = global.matchMedia || function () {
	return {
		addListener: jest.fn(),
		removeListener: jest.fn(),
	}
}
