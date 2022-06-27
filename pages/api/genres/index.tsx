export const genresList:string[] = ['pop', 'news', 'electro', 'old', 'humor']

export default function handler(req, res) {
    res.status(200).json(genresList)
}
