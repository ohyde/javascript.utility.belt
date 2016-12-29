// http://randycoulman.com/blog/2016/06/28/thinking-in-ramda-immutability-and-objects/

const wasBornInCountryOriginal = person => equals(person.birthCountry, OUR_COUNTRY)
const wasNaturalizedOriginal = person => Boolean(person.naturalizationDate)
const isOver18Original = person => gte(person.age, 18)

const wasBornInCountryFirstChange = person => equals(OUR_COUNTRY)(prop('birthCountry')(person))
const wasNaturalizedFirstChange = person => Boolean(prop('naturalizationDate')(person))
const isOver18FirstChange = person => gte(__, 18)(prop('age')(person))

const wasBornInCountryFinalForm = compose(equals(OUR_COUNTRY), prop('birthCountry'))
const wasNaturalizedFinalForm = compose(Boolean, prop('naturalizationDate'))
const isOver18FinalForm = compose(gte(__, 18), prop('age'))
