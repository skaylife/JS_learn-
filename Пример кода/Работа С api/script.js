console.log('Work')

class GotService {
  async getResource(url) {

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Cloud not fetch ${url}, status ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters() {
    return this.getResource('https://anapioficeandfire.com/api/characters?page=5&pageSize=10');
  }

  getAllCharacters2() {
    return this.getResource('https://anapioficeandfire.com/api/characters?page=5&pageSize=10');
  }

  getCharacters(id) {
    return this.getResource(`https://anapioficeandfire.com/api/characters/${id}`);
  }

}

const got = new GotService();

// got.getAllCharacters()
//   .then(res => console.log(res));

got.getCharacters(139)
  .then(res => console.log(res));

got.getAllCharacters2()
  .then(res => console.log(res));

got.getAllCharacters()
  .then(res => {
    res.forEach(item => console.log(item.titles[0]));
  })