// http://randycoulman.com/blog/2016/06/28/thinking-in-ramda-immutability-and-objects/

const wasBornInCountry = person => equals(person.birthCountry, OUR_COUNTRY)
const wasNaturalized = person => Boolean(person.naturalizationDate)
const isOver18 = person => gte(person.age, 18)

const wasBornInCountry = person => equals(OUR_COUNTRY)(prop('birthCountry')(person))
const wasNaturalized = person => Boolean(prop('naturalizationDate')(person))
const isOver18 = person => gte(__, 18)(prop('age')(person))

const wasBornInCountry = compose(equals(OUR_COUNTRY), prop('birthCountry'))
const wasNaturalized = compose(Boolean, prop('naturalizationDate'))
const isOver18 = compose(gte(__, 18), prop('age'))
