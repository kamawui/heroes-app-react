
class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public';
    _apiKey = 'apikey=2a41f87a67c551299e9b6e7926d0de33';
    // _apiKey = 'apikey=a9a2af84808905228f6d0409bd3eeb1a';


    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apiBase}/characters?limit=9&offset=210&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}/characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    getRandomId = () => {
        return Math.floor(Math.random()*(1011400 - 1011000) + 1011000);
    }

    _transformCharacter = (char) => {
        return {
            name: char.name,
            description: char.description,
            thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
            home: `${char.urls[0].url}`,
            wiki: `${char.urls[1].url}`,
            id: char.id,
            comics: char.comics,
        }
    }

}

export default MarvelService;