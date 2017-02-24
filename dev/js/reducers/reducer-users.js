/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "Masnad",
            last: "Nehith",
            age: 13,
            description: "Dev"
        },
        {
            id: 2,
            first: "Ichigo",
            last: "Kurosaki",
            age: 19,
            description: "Hollow"
        },
        {
            id: 3,
            first: "Naruto",
            last: "Uzumaki",
            age: 24,
            description: "Shinobi"
        }
    ]
}
