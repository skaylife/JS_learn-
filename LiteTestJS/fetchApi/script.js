

class GotService {
	
	constructor() {
		this._apiBase = 'https://www.anapioficeandfire.com/api';
	}
	
  async getRes(url) {
    const res = await fetch(`${this._apiBase}${url}`);
	
    if (!res.ok) {
      throw new Error(`Cloaud not fetch ${url}, status ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters() {
    return this.getRes('/characters?page=6&pageSize=10');
  }
  
  getCharater(id){
	return this.getRes(`/characters/${id}`);
  }
}

const got = new GotService();

got.getAllCharacters()
  .then(res => {
	res.forEach( item => console.log(item.name))
  });
  
got.getCharater(1133)
	.then(res => console.log(res));