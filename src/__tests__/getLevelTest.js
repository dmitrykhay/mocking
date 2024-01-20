import getLevel from '../getLevel';
import fetchData from '../http';

jest.mock('../http.js');

beforeEach(() => {
  jest.resetAllMocks();
});
test.each([
  ['status is ok', { status: 'ok', level: 5 }, 123, 'Ваш текущий уровень: 5'],
  [
    'status is not ok',
    { status: 'error' },
    123,
    'Информация об уровне временно недоступна',
  ],
])(
  'should return the correct level if response %s',
  (_, object, attribute, expected) => {
    fetchData.mockReturnValue(object);
    expect(getLevel(attribute)).toBe(expected);
  },
);
