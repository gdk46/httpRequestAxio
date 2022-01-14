import { get } from './main'

async function testGet() {
  const response = await get('https://viacep.com.br/ws/01001000/json/')

  console.log(response);
}
testGet()
