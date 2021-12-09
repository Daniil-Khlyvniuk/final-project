// export const matchMedia = Object.defineProperty(window, 'matchMedia', {
//   writable: true,
//   value: jest.fn().mockImplementation(query => ({
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: jest.fn(), // deprecated
//     removeListener: jest.fn(), // deprecated
//     addEventListener: jest.fn(),
//     removeEventListener: jest.fn(),
//     dispatchEvent: jest.fn(),
//   })),
// });

// eslint-disable-next-line no-undef
export const matchMedia = global.matchMedia = global.matchMedia || function () {
	return {
		// eslint-disable-next-line no-undef
		addListener: jest.fn(),
		// eslint-disable-next-line no-undef
		removeListener: jest.fn(),
	}
}