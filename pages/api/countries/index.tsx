const countriesList:countriesListInterface[] = [
    {
        title: 'Russia'
    },
    {
        title: 'Germany'
    },
    {
        title: 'United States'
    },
    {
        title: 'Austria'
    }
]

export type countriesListInterface = {
    title: string,
    img?:string
}

export default function handler(req, res) {
    res.status(200).json(countriesList)
}
