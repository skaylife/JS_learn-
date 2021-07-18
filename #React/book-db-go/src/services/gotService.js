
export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

    getAllBooks = async () => {
        const res = await this.getResource(`/books/`);
        return res.map(this._transformBook);
    }

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}/`);
        return this._transformBook(book);
    }

    // async getAllCharacters() {
    //     const res = await this.getResource(`/characters?page=12&pageSize=10`);
    //     return res.map(this._transformCharacter);
    // }



    getAllCharacters = async () => {
        return await this.getResource('/characters?page=40&pageSize=10');
    }

    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllHouses = async () => {
        const res = await this.getResource(`/houses/`);
        return res.map(this._transformHouse);
    }

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformHouse(house);
    }





    isSet(data) {
        if (data) {
            return data
        } else {
            return 'no data :('
        }
    }
    _transformCharacter(char) {
        return {
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died),
            culture: this.isSet(char.culture)
        };
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        };
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        };
    }
}

//https://anapioficeandfire.com/api/characters?page=8&pageSize=1
const book = () =>
    [
        [{
            "url": "https://anapioficeandfire.com/api/characters/8",
            "name": "",
            "gender": "Male",
            "culture": "",
            "born": "",
            "died": "",
            "titles": [""],
            "aliases": ["Quickfinger"],
            "father": "",
            "mother": "",
            "spouse": "",
            "allegiances": ["https://anapioficeandfire.com/api/houses/23"],
            "books": ["https://anapioficeandfire.com/api/books/6"],
            "povBooks": [], "tvSeries": [""], "playedBy": [""]
        }]
    ]

//https://anapioficeandfire.com/api/characters/55
const book2 = () =>
    [{
        "url": "https://www.anapioficeandfire.com/api/characters/55",
        "name": "Aemond Targaryen",
        "gender": "Male",
        "culture": "Valyrian",
        "born": "In 110 AC",
        "died": "In 130 AC, at the Gods Eye",
        "titles": ["Prince",
            "Protector of the Realm",
            "Prince Regent"],
        "aliases": ["Aemond One-Eye Aemond the Kinslayer"],
        "father": "",
        "mother": "",
        "spouse": "",
        "allegiances": ["https://www.anapioficeandfire.com/api/houses/378"],
        "books": ["https://www.anapioficeandfire.com/api/books/8",
            "https://www.anapioficeandfire.com/api/books/9",
            "https://www.anapioficeandfire.com/api/books/10",
            "https://www.anapioficeandfire.com/api/books/11"],
        "povBooks": [],
        "tvSeries": [""],
        "playedBy": [""]
    }]

